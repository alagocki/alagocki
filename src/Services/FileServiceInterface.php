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

namespace App\Services;

interface FileServiceInterface
{
    public function setTaskInSession(string $name): void;

    public function getCurrentTaskInSession(string $taskName): string|null;

}