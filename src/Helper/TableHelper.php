<?php
/*
 * Andreas Lagocki - Photographer
 *
 * Copyright (C) Andreas Lagocki  - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly
 *  prohibited Proprietary and confidential.
 *
 * @author Andreas Lagocki <andreas@lagocki.de>
 */

namespace App\Helper;

use App\Entity\User;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\ORM\Query;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * Table helper for filtering and entries per page automation.
 */
class TableHelper
{
    /**
     * @var Request
     */
    private $request;

    /**
     * @var SessionInterface
     */
    private $session;

    /**
     * @var EntityManager
     */
    private $entityManager;

    /**
     * @var string
     */
    private $route;

    /**
     * @var int
     */
    private $defaultEntriesPerPage = 100;

    public function __construct(RequestStack $request, EntityManagerInterface $entityManager)
    {

        $this->request = $request->getCurrentRequest();
        $this->session = $request->getSession();
        $this->entityManager = $entityManager;
        // Use different settiings for different tables
        $this->route = $this->request->get('_route');
    }

    /**
     * Get entries per page and store in session.
     *
     * @return int
     */
    public function getTableEntriesPerPage(): int
    {
        // Store entries per page in session
        if (!$this->session->get($this->route.'_table_epp')) {
            if ($this->request->get('epp')) {
                $epp = $this->request->get('epp');
            } else {
                $epp = $this->defaultEntriesPerPage;
            }
            $this->session->set($this->route.'_table_epp', $epp);
        } elseif ($this->session->get($this->route.'_table_epp') && $this->request->get('epp')) {
            $this->session->set($this->route.'_table_epp', $this->request->get('epp'));
        }

        return (int) $this->session->get($this->route.'_table_epp');
    }

    /**
     * Default Table Filtering.
     *
     * @param Request    $request
     * @param string     $entityName
     * @param array|null $searchList
     * @param string     $orderBy
     * @param string     $order
     * @param int|null   $rows
     * @param int|null   $page
     * @param bool|null  $active
     * @param bool       $forcePartialLoad
     *
     * @return array [0 => RowCounter,1 => Rows]
     */
    public function tableFilter(Request $request, User $user, string $entityName, ?array $searchList = null, string $orderBy = 'id', string $order = 'ASC', ?int $rows = 36, ?int $page = 1, ?bool $active = null, bool $forcePartialLoad = false): array
    {
        $filterParams = [];
        $filterValues = [];
        $paginationFilter = 0;
        $userId = $user->getId();

        // Set Filter parameter from search list
        if (!is_null($searchList)) {
            foreach ($searchList as $value) {
                $filterParams[] = $value;
                $filterValues[] = $request->get($value);
            }
        }

        if ($request->isMethod('post')) {
            // Set Filter to session
            $this->session->set($this->route.'_table_filter', implode('|', $filterValues));
            $paginationFilter = 1;
        } elseif (0 == $request->get('filter')) {
            // remove Filter
            $this->session->remove($this->route.'_table_filter');
        }

        if (null !== $this->session->get($this->route.'_table_filter')) {
            $paginationFilter = 1;
            // Update Filter Values
            $filterValues = explode('|', $this->session->get($this->route.'_table_filter'));
            // Build filter query
            $sqlQuery = 'SELECT e FROM '.$entityName.' e';
            $sqlCount = 'SELECT COUNT(e.id) FROM '.$entityName.' e';
            $sql = '';
            $filter = [];
            // Build Key/Value pairs
            $filters = array_combine($filterParams, $filterValues);

            if (null !== $filterParams) {
                foreach ($filterParams as $field) {
                    if (isset($filters[$field])) {
                        $sql .= empty($sql) ? ' WHERE' : ' AND';
                        $sql .= ' e.'.$field.' LIKE :'.$field;
                        $filter[$field] = $filters[$field];
                    }
                }
            }

            if (null !== $active) {
                $sql .= empty($sql) ? ' WHERE' : ' AND';
                $sql .= ' e.active = '.(int) $active;
            }

            $query = $this->entityManager->createQuery($sqlCount.$sql);

            foreach ($filter as $key => $value) {
                $query->setParameter($key, '%'.$value.'%');
            }

            try {
                $resultSum = $query->getSingleScalarResult();
            } catch (NonUniqueResultException $e) {
                $resultSum = 0;
            }

            $sql .= ' ORDER BY e.'.$orderBy.' '.$order;
            $query = $this->entityManager->createQuery($sqlQuery.$sql);

            foreach ($filter as $key => $value) {
                $query->setParameter($key, '%'.$value.'%');
            }

            $query->setMaxResults($rows)->setFirstResult(($page * $rows) - $rows);

            true !== $forcePartialLoad ?: $query->setHint(Query::HINT_FORCE_PARTIAL_LOAD, true);

            $resultRows = $query->getResult();
        } else {
            $sqlQuery = 'SELECT e FROM '.$entityName.' e';
            $sqlCount = 'SELECT COUNT(e.id) FROM '.$entityName.' e';

            if (null !== $active) {
                $sqlQuery .= ' WHERE e.active = '.(int) $active;
                $sqlCount .= ' WHERE e.active = '.(int) $active;
                $sqlQuery .= ' AND e.created_by = ' . $userId;
            } else {
                $sqlQuery .= ' WHERE e.created_by = ' . $userId;
            }

            $query = $this->entityManager->createQuery($sqlCount);
            try {
                $resultSum = $query->getSingleScalarResult();
            } catch (NonUniqueResultException $e) {
                $resultSum = 0;
            }

            $sql = ' ORDER BY e.'.$orderBy.' '.$order;

            echo $sqlQuery.$sql; exit;

            $query = $this->entityManager->createQuery($sqlQuery.$sql);
            $query->setMaxResults($rows)->setFirstResult(($page * $rows) - $rows);
            true !== $forcePartialLoad ?: $query->setHint(Query::HINT_FORCE_PARTIAL_LOAD, true);

            $resultRows = $query->getResult();
        }

        return [$resultSum, $resultRows, $paginationFilter];
    }

    /**
     * Get Key/Value pairs for twig template filter from filter params
     * Keys are prefixed with filter_.
     *
     * @param array $params
     *
     * @return array
     */
    public function getFilterValues(array $params = []): array
    {
        $filterValues = [];
        if (!$this->session->get($this->route.'_table_filter')) {
            // fill empty values
            foreach ($params as $value) {
                $filterValues['filter_'.$value] = null;
            }
        } else {
            $array = array_combine($params, explode('|', $this->session->get($this->route.'_table_filter')));
            foreach ($array as $key => $value) {
                $filterValues['filter_'.$key] = $value;
            }
        }

        return $filterValues;
    }
}
