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

use App\Entity\EntityInterface;
use Doctrine\ORM\Mapping\Column;

trait ActiveColumnTrait
{

    #[Column(type: 'boolean')]
    protected $active;

    protected function activeColumnTraitConstruct()
    {
        $this->active = true;
    }


    public function isActive(): bool
    {
        return $this->active;
    }

    public function setActive(bool $active): EntityInterface
    {
        $this->active = $active;

        return $this;
    }
}
