/*
 * Andreas Lagocki - Photographer
 *
 * Copyright (C) Andreas Lagocki  - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly
 *  prohibited Proprietary and confidential.
 *
 * @author Andreas Lagocki <andreas@lagocki.de>
 */

const colors = require('tailwindcss/colors')

module.exports = {
    mode: 'jit',
    darkMode: 'class',
    theme: {
    },
    variants: {},
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms')({
            strategy: 'base', // only generate global styles
        })
    ],
    prefix: '',
    content: [
        './templates/**/*.twig'
    ]
}