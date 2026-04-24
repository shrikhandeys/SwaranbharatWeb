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
          navy: '#0B1F3A',
          'navy-deep': '#08172d',
          green: '#1F5F3A',
          'green-deep': '#17472c',
          gold: '#D4AF37',
          'gold-soft': '#e0bc53',
          beige: '#F8F2DF',
          sand: '#F4F5F7',
          ivory: '#F8F9FB',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 30px rgba(11, 31, 58, 0.08), 0 1px 2px rgba(11, 31, 58, 0.06)',
        'card-hover': '0 18px 48px rgba(11, 31, 58, 0.16), 0 4px 12px rgba(11, 31, 58, 0.08)',
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
