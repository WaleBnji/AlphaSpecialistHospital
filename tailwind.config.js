/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xlg: '1440px',
    },
    extend: {
      display: ['group-focus']
    },
  },
  plugins: [],
}
