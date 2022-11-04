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


use App\Entity\CreateUpdateInterface;
use App\Entity\User;
use App\Form\AccountFormType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Form;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\User\UserInterface as UserInterfaceAlias;

#[Route("/account")]
class AccountController extends AbstractController
{

    #[Route('/show', name:'account_show')]
    public function userData(Request $request): Response
    {

        /** @var User $user */
        $user = $this->getUser();

        $twigVars = [
            'firstname' => $user->getFirstname(),
            'lastname' => $user->getLastname(),
            'street' => $user->getStreet(),
            'number' => $user->getNumber(),
            'zip' => $user->getZip(),
            'city' => $user->getCity(),
            'handy' => $user->getHandy(),
            'email' => $user->getEmail(),
            'userid' => $user->getId(),
        ];
        return $this->render('admin/account/show.html.twig', $twigVars);
    }

    #[Route('/edit/{id}', name:'account_edit')]
    public function userDataEdit(Request $request, User $user, UserPasswordHasherInterface $userPasswordHasherInterface): Response
    {

        $options = [
            'password' => $user->getPassword()
        ];

        /** @var Form $form */
        $form = $this->createForm(AccountFormType::class, $user, $options);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {

            $formPassword = $form->get('password')->getData();

            if ($formPassword !== $user->getPassword()) {
                $user->setPassword(
                    $userPasswordHasherInterface->hashPassword(
                        $user,
                        $formPassword
                    )
                );
            }

            if ($this->storeEntity($user)) {
                $this->addFlash('success', 'Account erfolgreich bearbeitet.');

                return $this->redirectToRoute('account_show');
            }
            $this->addFlash('error', 'Ein Fehler ist aufgetreten.');
        }

        $twigVars = [
            'form' => $form->createView(),
            'title' => 'Attribut bearbeiten',
        ];
        return $this->render('admin/account/edit.html.twig', $twigVars);
    }

    private function storeEntity(User $user)
    {
        /** @var EntityManagerInterface $entityManager */
        $entityManager = $this->getDoctrine()->getManager();

        // Store Attribute
        $entityManager->persist($user);
        $entityManager->flush();

        return true;
    }

}