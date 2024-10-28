/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './main.js',
    "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        cereal: ['Airbnb Cereal', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

