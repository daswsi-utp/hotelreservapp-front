/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5d8aa8',
          hover: '#8db600',
        },
        secondary: {
          DEFAULT: '#f59e0b',
        },
      },
      fontFamily: {
        sans: ['Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      perspective: {
        '1000': '1000px',
      },
      transform: {
        'preserve-3d': 'preserve-3d',
      },
      rotate: {
        'y-180': 'rotateY(180deg)',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
          xl: '3rem',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    function ({ addUtilities }) {
      addUtilities({
        '.perspective': {
          perspective: '1000px',
        },
        '.transform-style-preserve-3d': {
          transformStyle: 'preserve-3d',
        },
        '.backface-hidden': {
          backfaceVisibility: 'hidden',
        },
        '.rotate-y-180': {
          transform: 'rotateY(180deg)',
        },
      });
    }
  ],
}
