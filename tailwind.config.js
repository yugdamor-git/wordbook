
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      primary:{
        // 200:"#f1fa8c",
        200:"#DBFF00",
        // 300:"#50FA7B",
        300:"#00E887",
        // 400:"#8BE9FD"
        400:"#00E0F3",
        500:"00C4FD"
      },
      // gray:{
      //   50:"#f8fafc"
      // },
      // white:"#ffffff",
      // black:"#000000",
      ...colors
    },
    extend: {
      fontFamily:{
        inter: ["Inter"]
      }
    },
  },
  plugins: [],
}
