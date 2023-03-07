/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        streamerMode: '285px calc(100vw - 285px)',
        background: 'repeat(5,1fr)'
      },
      colors: {
        yellowalt: '#ffb200'
      }
    }
  },
  plugins: []
}
