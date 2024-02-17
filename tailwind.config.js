/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './pages/**/*.{js,jsx,ts,tsx}',
  './components/**/*.{js,jsx,ts,tsx}',
  './app/**/*.{js,jsx,ts,tsx}',
  './Employer/**/*.{js,jsx,ts,tsx}',
  './lib/**/*.{js,jsx,ts,tsx}',
  './Registration/**/*.{js,jsx,ts,tsx}',
  './layout.tsx',
  './page.tsx',
  './utils.ts'

],
  theme: {
    extend: {
      colors: {
        'bg-color': '#f4eef4',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

