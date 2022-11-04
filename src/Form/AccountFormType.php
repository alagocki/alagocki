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

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class AccountFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('password', PasswordType::class, [
                'label' => 'Password',
                'required' => false,
                'always_empty' => false,
                'empty_data' => $options['password'],
                'attr' => ['class' => 'form-control'],
            ])
            ->add('firstname', TextType::class, [
                'label' => 'Vorname',
                'required' => false,
                'attr' => ['class' => 'form-control'],
            ])
            ->add('lastname', TextType::class, [
                'label' => 'Nachname',
                'required' => false,
                'attr' => ['class' => 'form-control'],
            ])
            ->add('street', TextType::class, [
                'label' => 'Straße',
                'required' => false,
                'attr' => ['class' => 'form-control'],
            ])
            ->add('number', IntegerType::class, [
                'label' => 'Hausnummer',
                'required' => false,
                'attr' => ['class' => 'form-control'],
            ])
            ->add('zip', IntegerType::class, [
                'label' => 'PLZ',
                'required' => false,
                'attr' => ['class' => 'form-control'],
            ])
            ->add('city', TextType::class, [
                'label' => 'Ort',
                'required' => false,
                'attr' => ['class' => 'form-control'],
            ])
            ->add('handy', IntegerType::class, [
                'label' => 'Handynummer',
                'required' => false,
                'attr' => ['class' => 'form-control'],
            ])
            ->add('email', EmailType::class, [
                'label' => 'Email (Loginname)',
                'required' => true,
                'disabled' => true,
                'attr' => ['class' => 'form-control'],
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setRequired('password');
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }

    public function getBlockPrefix()
    {
        return 'account_form_type';
    }
}
