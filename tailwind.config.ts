import {blackA, green, grass, mauve} from '@radix-ui/colors'

export default {
    darkMode: 'class',
    content: [
        './index.html',
        './src/**/*.{vue,ts,js}',
    ],
    theme: {
        extend: {
            colors: {
                surface: 'var(--color-surface)',
                'surface-alt': 'var(--color-surface-alt)',
                text: 'var(--color-text)',
                primary: 'var(--color-primary)',
                accent: 'var(--color-accent)',

                // Radix UI colors
                ...blackA,
                ...green,
                ...grass,
                ...mauve,
            },
            zIndex: {
                menubar: '40',
                overlay: '50',
                dropdown: '45',
            },
        }
    },
    plugins: []
}
