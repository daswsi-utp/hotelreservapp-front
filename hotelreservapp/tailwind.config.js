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
    },
  },
  plugins: [],
}