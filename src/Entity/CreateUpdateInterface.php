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

namespace App\Entity;

use DateTime;

interface CreateUpdateInterface
{
    public function getCreatedAt(): DateTime;

    public function setCreatedAt(DateTime $created_at): EntityInterface;

    public function getCreatedBy(): ?User;

    public function setCreatedBy(User $created_by): EntityInterface;

    public function getCreatedById(): ?int;

    public function setCreatedById(int $created_by_id): EntityInterface;

    public function getUpdatedAt(): ?DateTime;

    public function setUpdatedAt(?DateTime $updated_at): EntityInterface;

    public function getUpdatedBy(): ?User;

    public function setUpdatedBy(User $updated_by): EntityInterface;

    public function getUpdatedById(): ?int;

    public function setUpdatedById(?int $updated_by_id): EntityInterface;
}
