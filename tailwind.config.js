module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {    
      colors:{
        'dark': '#272727',
        'light': '#EEE',
        'yellow': '#F6DF0E',
        'blue': '#35E2F2',
        'purple': '#8C13FB',
        'pink': '#FF0080',
        'correct': '#35F25F',
        'wrong': '#D43030',
        'primary': '#B3C2F2',
        'secondary': '#735CDD'
      },
      fontFamily: {
        'hammer': 'Hammersmith One'
      },
    },
  },
  plugins: [],
}