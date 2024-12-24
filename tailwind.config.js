/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./dist/index.html"],
  theme: {
    extend: {
      colors: {
        slate: "#181828",
        footerColor : "rgb(33,35,49)",
        fontColor : "rgb(189,190,194)",
        flexWork:"rgb(145,123,234)",
        QualWork : "rgb(0,188,212)",
        QuickDel : "rgb(78,207,185)",
      },
     screens:{
      lg:"990",
     },
     fontFamily: {
      sans: ['"Source Sans Pro"', 'sans-serif'], 
      custom: ['"Source Sans Pro"', 'sans-serif'], 
      montserrat: ['Montserrat', 'sans-serif'],
      'source-sans': ['Source Sans 3', 'sans-serif'],
    },
    },

  },
  plugins: [],
};
