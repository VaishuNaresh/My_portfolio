/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderColor :{
        'primary' : '#fe7b9a',
        'secondary' : '#fcc88c',
      }
    },
    fontFamily: {
      'hero-font' : 'Sriracha'
    }
  },
  plugins: [],
}
