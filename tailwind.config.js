module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {    
      colors:{
        'dark': '#272727',
        'light': '#EEE'
      },
      fontFamily: {
        'hammer': 'Hammersmith One'
      },
    },
  },
  plugins: [],
}