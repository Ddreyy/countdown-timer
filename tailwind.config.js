/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens : {
      sm : '480px',
      md : '768px',
      lg : '976px',
      xl : '1440px'
    },
    extend: {
      colors : {
        purpleDark : 'hsl(235, 16%, 14%)',
        brightColor : 'hsl(345, 95%, 68%)',
        darkColor : 'hsl(236, 21%, 26%)',
        darkBrownColor : 'hsl(237, 18%, 59%)'
      } 
    },
  },
  plugins: [],
}
