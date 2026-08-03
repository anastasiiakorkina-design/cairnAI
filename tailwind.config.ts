import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cairn: {
          navy: '#0D1F3C',
          'navy-light': '#162D50',
          blue: '#2E6FD9',
          gold: '#D4943A',
          'mist-white': '#F5F7FA',
          'ink-dark': '#1A2332',
          'slate-grey': '#5A6B7E',
          'glen-green': '#2D8F5E',
          frost: '#E2E8F0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tight: '-0.02em',
        wide: '0.05em',
      },
      lineHeight: {
        reading: '1.6',
      },
      maxWidth: {
        container: '1200px',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #0D1F3C 0%, #162D50 100%)',
        'contour-pattern': 'radial-gradient(circle at 20% 50%, rgba(46, 111, 217, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(212, 148, 58, 0.05) 0%, transparent 50%), radial-gradient(circle at 40% 20%, rgba(45, 143, 94, 0.03) 0%, transparent 50%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

export default config;
