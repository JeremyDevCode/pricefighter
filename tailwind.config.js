/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        streamerMode: '285px auto'
      },
      colors: {
        yellowalt: '#ffb200'
      }
    }
  },
  plugins: []
}
