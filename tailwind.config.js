/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bodoni: ['"Bodoni Moda"', 'serif'],
        playfair: ["Playfair Display", "serif"],
        poppins: ["Poppins", "sans-serif"],
        quattrocento: ['Quattrocento', 'serif'],
      },
    },
  },
  plugins: [],
}

