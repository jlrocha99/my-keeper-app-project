/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    //External fonts
    fontFamily: {
        'McLaren' : ['McLaren', 'cursive'],
        'Montserrat' : ['Montserrat', 'sans-serif'],
    },
    
    extend: {},
  },
  plugins: [],
}