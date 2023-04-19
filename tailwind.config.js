/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
   
    extend: {
      backgroundImage:{
        'intromobile':"url('images/bg-intro-mobile.svg')",
        'introdesktop':"url(images/bg-intro-desktop.svg)"
      },
      fontFamily: {
        sans: ['Public Sans', 'sans-serif'],
        Gruppo:['Gruppo']
      },
    },
  },
  plugins: [],
}

