/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'header': '#D43D26',
        'background': '#02799E',
        'border': '#1AAEC8'
      },
      fontFamily: {
        'body': ['Source Sans 3', 'sans-serif']
      }
    },
  },
  plugins: [],
}


