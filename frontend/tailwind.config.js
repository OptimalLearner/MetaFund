/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'minion-yellow': '#FCE762',
      'blue-purple': '#BCB6FF',
      'white': '#FFFFFF',
      'black': '#111111',
      'dark-slate-blue': '#4F4789',
      'dark-purple': '#201335',
      'platinum': '#E7e7e7'
    },
    fontFamily: {
      cursive: ['Kaushan Script', 'cursive'],
      sans: ['Encode Sans', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        '1xl': 'rgba(0, 0, 0, 0.3) 0px 0px 3px, rgba(0, 0, 0, 0.30) 0px 0px 5px',
        '2xl': 'rgba(0, 0, 0, 0.25) 0px 0px 5px, rgba(0, 0, 0, 0.45) 0px 0px 8px',
        '3xl': 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'
      }
    },
  },
  plugins: [],
}