/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",//only taking css not js,jsx,ts etc
  ],
  theme: {
    extend: {
      borderColor :{
        'primary' : 'rgb(85 81 227)',
        'secondary' : '#edc6e1',
      }
    },
    fontFamily: {
      //we only give as name hero-font 
      'hero-font' : 'Sriracha'
    }
  },
  plugins: [],
}

