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

namespace App\EventListener\Doctrine;

use App\Entity\CreateUpdateInterface;
use App\Entity\User;
use DateTime;
use Doctrine\ORM\Event\LifecycleEventArgs;
use Doctrine\ORM\OptimisticLockException;
use Doctrine\ORM\ORMException;
use Doctrine\ORM\TransactionRequiredException;
use Psr\Log\LoggerInterface;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;

/**
 * Set UpdatedAt and UpdatedBy automaticly.
 */
class OnUpdate
{
    /**
     * @var TokenStorageInterface
     */
    private $token;
    /**
     * @var LoggerInterface
     */
    private $logger;

    /**
     * Constructor.
     *
     * @param TokenStorageInterface $token
     * @param LoggerInterface       $logger
     */
    public function __construct(TokenStorageInterface $token, LoggerInterface $logger)
    {
        $this->logger = $logger;
        $this->token = $token;
    }

    /**
     * Hook on PreUpdate.
     *
     * @param LifecycleEventArgs $args
     *
     * @throws ORMException
     * @throws OptimisticLockException
     * @throws TransactionRequiredException
     */
    public function prePersist(LifecycleEventArgs $args)
    {
        /**
         * @var CreateUpdateInterface
         */
        $entity = $args->getEntity();

        if (!$entity instanceof CreateUpdateInterface) {
            return;
        }

        /** @var User $user */
        $user = null;
        if (null !== $this->token->getToken()) {
            $user = $this->token->getToken()->getUser();
        }

        // Get System as user if user not exists (console commands)
        if (!$user instanceof User) {
            $user = $args->getEntityManager()->find(User::class, 1);
        }

        // Check created by id instead of user object since the import will use partial entity loading.
        if (null === $entity->getCreatedById()) {
            $entity->setCreatedBy($user);
            $entity->setCreatedAt(new DateTime());
        } else {
            $entity->setUpdatedBy($user);
            $entity->setUpdatedAt(new DateTime());
        }
    }

    /**
     * Hook on PreUpdate.
     *
     * @param LifecycleEventArgs $args
     *
     * @throws ORMException
     * @throws OptimisticLockException
     * @throws TransactionRequiredException
     */
    public function preUpdate(LifecycleEventArgs $args)
    {
        /**
         * @var CreateUpdateInterface
         */
        $entity = $args->getEntity();

        if (!$entity instanceof CreateUpdateInterface) {
            return;
        }

        /** @var User $user */
        $user = null;
        if (null !== $this->token->getToken()) {
            $user = $this->token->getToken()->getUser();
        }

        // Get System as user if user not exists (console commands)
        if (!$user instanceof User) {
            $user = $args->getEntityManager()->find(User::class, 1);
        }

        // Check created by id instead of user object since the import will use partial entity loading.
        if (null === $entity->getCreatedById()) {
            $entity->setCreatedBy($user);
            $entity->setCreatedAt(new DateTime());
        } else {
            $entity->setUpdatedBy($user);
            $entity->setUpdatedAt(new DateTime());
        }
    }
}
