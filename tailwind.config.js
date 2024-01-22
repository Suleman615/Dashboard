/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], theme: {
    extend: {

      backgroundColor: {
        'light': '#FCF8F3',
        'medium': '#FFF3E3',
        'dark': '#B88E2F'

      },
      colors: {
        'brown': '#B88E2F',
        'grey': '#666666',
        'black': '#000000',
        'white': '#FFFFFF'

      },
      fontSize: {
        'sm': '14px',
        'md': '20px',
        'lg': '24px',
        'xl': '28px',
        '2xl': '38px'
      },

      // add here
    },
  },
  plugins: [],
}

