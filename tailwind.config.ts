import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.25rem',
        lg: '2rem',
      },
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        brand: {
          navy: '#0F1F3D',
          'navy-deep': '#0A1833',
          green: '#1F5F3A',
          'green-deep': '#103F26',
          gold: '#C9962B',
          'gold-soft': '#E5B84A',
          beige: '#F5EEDC',
          sand: '#FAF6EC',
          ivory: '#FCFBF7',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(15, 31, 61, 0.06), 0 8px 24px -12px rgba(15, 31, 61, 0.12)',
        'card-hover':
          '0 4px 8px rgba(15, 31, 61, 0.08), 0 16px 40px -16px rgba(15, 31, 61, 0.2)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out both',
        marquee: 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
