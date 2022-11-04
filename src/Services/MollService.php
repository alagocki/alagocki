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

use App\Entity\MollTask;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Form\Form;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\String\Slugger\AsciiSlugger;

class MollService implements FileServiceInterface
{
    private $requestStack;

    public function __construct(RequestStack $requestStack)
    {
        $this->requestStack = $requestStack;
    }

    public function getFileName(mixed $uploadedFile): string
    {
        $slugger = new AsciiSlugger();
        $originalFilename = pathinfo($uploadedFile->getClientOriginalName(), PATHINFO_FILENAME);
        $datum = date('d.m.Y_H:i:s', time());

        return $slugger->slug($originalFilename.'-'.$datum)->lower()->toString().'.'.pathinfo($uploadedFile->getClientOriginalName(), PATHINFO_EXTENSION);
    }

    /**
     * @throws \Exception
     */
    public function saveFileInStorage(mixed $uploadedFile, string $path, string $fileName): void
    {
        try {
            $uploadedFile->move(
                $path,
                $fileName
            );
        } catch (FileException $e) {
            throw new \RuntimeException('Datei konnte nicht gespeichert werden.');
        }
    }

    /**
     * @throws \Throwable
     */
    public function setTask(User $user, EntityManagerInterface $entityManager): MollTask
    {
        $datum = (new \DateTime())->format('d.m.Y H:i');
        $name = 'Task '.$datum;
        $mollTask = new MollTask(name: $name, description: '', createdAt: new \DateTime(), createdBy: $user);
        /* @var Form $form */

        try {
            $entityManager->persist($mollTask);
            $entityManager->flush();
            $this->setTaskInSession($mollTask->id);
        } catch (\Throwable $throwable) {
            throw new \RuntimeException($throwable->getMessage());
        }

        return $mollTask;
    }

    public function setTaskInSession(string $name): void
    {
        $this->requestStack->getSession()->set('moll_task', $name);
    }

    public function getCurrentTaskInSession(string $taskName): string|null
    {
        return $this->requestStack->getSession()->get($taskName);
    }
}
