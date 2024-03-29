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

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;

class ShowHidePasswordType extends AbstractType
{
    public function getParent()
    {
        return PasswordType::class;
    }
}