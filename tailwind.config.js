/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        DM: ['DM Sans', 'sans-serif'],
      },
      colors: {
        SoftRed: 'hsl(10, 79%, 65%)',
        SoftRedHov: 'hsl(10, 79%, 75%)',
        Cyan: 'hsl(186, 34%, 60%)',
        CyanHov: 'hsl(186, 34%, 70%)',
        DarkBrown: 'hsl(25, 47%, 15%)',
        MediumBrown: 'hsl(28, 10%, 53%)',
        Cream: 'hsl(27, 66%, 92%)',
        VeryPaleOrange: 'hsl(33, 100%, 98%)',
      },
      fontSize: {
        tiny: '0.6rem',
      }
    },
  },
  plugins: [],
}
