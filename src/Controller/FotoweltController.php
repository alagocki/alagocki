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

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('')]
class FotoweltController extends AbstractController
{
    #[Route('/fotowelt', name: 'fotowelt')]
    public function dashboard(): Response
    {
        $twigVars = [
            'user' => $this->getUser(),
        ];

        return $this->render('admin/fotowelt.html.twig', $twigVars);
    }
}
