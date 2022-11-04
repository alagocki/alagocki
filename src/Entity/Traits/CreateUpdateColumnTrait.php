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

namespace App\Entity\Traits;

use App\Entity\User;
use App\Entity\EntityInterface;
use DateTime;
use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\JoinColumn;
use Doctrine\ORM\Mapping\ManyToOne;
use Symfony\Component\Validator\Constraints\Cascade;

/**
 * Set created and update timestamps and users.
 */
trait CreateUpdateColumnTrait
{

    #[Column(
        type: 'datetime'
    )]
    protected $created_at;

    #[Column(
        type: 'integer',
        nullable: false,
        //options: ['unsigned' => true]
    )]
    protected $created_by_id;

    #[ManyToOne(
        targetEntity: User::class,
        fetch: 'EAGER'
    )]
    #[JoinColumn(
        name: 'created_by_id',
        referencedColumnName: 'id',
        nullable: false,
        onDelete: "CASCADE"
    )]
    protected $created_by;

    #[Column(
        type: 'datetime',
        nullable: true
    )]
    protected $updated_at;

    #[Column(
        type: 'integer',
        nullable: true,
        //options: ['unsigned' => true]
    )]
    protected $updated_by_id;

    #[ManyToOne(
        targetEntity: User::class,
        fetch: 'EAGER'
    )]
    #[JoinColumn(
        name: 'updated_by_id',
        referencedColumnName: 'id',
        nullable: true,
        onDelete: "CASCADE"
    )]
    protected $updated_by;

    protected function createUpdateColumnTraitConstruct()
    {
        $this->created_at = new DateTime();
    }

    public function getCreatedAt(): DateTime
    {
        return $this->created_at;
    }

    public function setCreatedAt(DateTime $created_at): EntityInterface
    {
        $this->created_at = $created_at;

        return $this;
    }

    public function getCreatedById(): ?int
    {
        return $this->created_by_id;
    }

    public function setCreatedById(int $created_by_id): EntityInterface
    {

        $this->created_by_id = $created_by_id;

        return $this;
    }

    public function getCreatedBy(): ?User
    {
        return $this->created_by;
    }

    public function setCreatedBy(User $created_by): EntityInterface
    {
        $this->created_by = $created_by;

        return $this;
    }

    public function getUpdatedAt(): ?DateTime
    {
        return $this->updated_at;
    }

    public function setUpdatedAt(?DateTime $updated_at): EntityInterface
    {
        $this->updated_at = $updated_at;

        return $this;
    }

    public function getUpdatedBy(): ?User
    {
        return $this->updated_by;
    }

    public function setUpdatedBy(User $updated_by): EntityInterface
    {
        $this->updated_by = $updated_by;

        return $this;
    }

    public function getUpdatedById(): ?int
    {
        return $this->updated_by_id;
    }

    public function setUpdatedById(?int $updated_by_id): EntityInterface
    {
        $this->updated_by_id = $updated_by_id;

        return $this;
    }
}
