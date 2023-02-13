/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mainorange: '#ee4d2d'
      },
      backgroundImage: {
        'login-page': 'url("../../src/assets/logo/backgroundlog.png")'
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
