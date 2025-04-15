/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Cambia a 'media' para usar el modo oscuro del sistema
  theme: {
    extend: {
      // Personaliza solo lo que necesites
      colors: {
        primary: {
          DEFAULT: '#646cff',
          hover: '#535bf2',
        },
      },
      fontFamily: {
        sans: ['Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}