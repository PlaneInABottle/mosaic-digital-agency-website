import type { Config } from 'tailwindcss';

export default {
    darkMode: ['class'],
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    prefix: '',
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            colors: {
                border: 'rgba(var(--border), 1)',
                input: 'rgba(var(--input), 1)',
                ring: 'rgba(var(--ring), 1)',
                background: 'rgba(var(--background), 1)',
                foreground: 'rgba(var(--foreground), 1)',
                primary: {
                    DEFAULT: 'rgba(var(--primary),1)',
                    foreground: 'rgba(var(--primary-foreground), 1)',
                },
                secondary: {
                    DEFAULT: 'rgba(var(--secondary), 1)',
                    foreground: 'rgba(var(--secondary-foreground), 1)',
                },
                destructive: {
                    DEFAULT: 'rgba(var(--destructive), 1)',
                    foreground: 'rgba(var(--destructive-foreground), 1)',
                },
                muted: {
                    DEFAULT: 'rgba(var(--muted), 1)',
                    foreground: 'rgba(var(--muted-foreground), 1)',
                },
                accent: {
                    DEFAULT: 'rgba(var(--accent), 1)',
                    foreground: 'rgba(var(--accent-foreground), 1)',
                },
                popover: {
                    DEFAULT: 'rgba(var(--popover), 1)',
                    foreground: 'rgba(var(--popover-foreground), 1)',
                },
                card: {
                    DEFAULT: 'rgba(var(--card), 1)',
                    foreground: 'rgba(var(--card-foreground), 1)',
                },
                chart: {
                    '1': 'rgba(var(--chart-1), 1)',
                    '2': 'rgba(var(--chart-2), 1)',
                    '3': 'rgba(var(--chart-3), 1)',
                    '4': 'rgba(var(--chart-4), 1)',
                    '5': 'rgba(var(--chart-5), 1)',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
        },
    },
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    plugins: [require('tailwindcss-animate')],
} satisfies Config;
