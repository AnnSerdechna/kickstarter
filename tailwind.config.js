/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Inter',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: 0,
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1170px',
    },
    extend: {
      colors: {
        black: '#333333',
        grey: '#7C7C7C',
        accent: '#0DB2B3',
        disabled: '#BDBDBD',
        teal: '0C797A',
        'light-teal': '#D6ECEC',
      }
    },
  },
  plugins: [],
}
