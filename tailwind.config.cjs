/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mainorange: '#ee4d2d'
      }
    }
  },
  plugins: [],
  safelist: [
    {
      pattern: /(bg|text|border|fill)-mainorange/
    }
  ]
}
