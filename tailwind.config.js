/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      'pacifico': ['Pacifico', 'sans-serif'],
      'staalitches': ['Staatliches', 'sans-serif'],
    },
  },
  plugins: [],
}
}