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

namespace App\Repository;

use App\Entity\MollTask;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method MollTask|null find($id, $lockMode = null, $lockVersion = null)
 * @method MollTask|null findOneBy(array $criteria, array $orderBy = null)
 * @method MollTask[]    findAll()
 * @method MollTask[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MollTaskRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, MollTask::class);
    }
}
