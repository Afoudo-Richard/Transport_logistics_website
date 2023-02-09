/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./assets/js/*js"],
  important: true,
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif;'],
      },
      container: {
        center: true,
      },
      minHeight: {
        '600': '600px',
      },
      height: {
        '128': '32rem',
      },
      colors : {
        'flamingo': {
          DEFAULT: '#EF4444',
          50: '#FDEDED',
          100: '#FCDADA',
          200: '#F9B5B5',
          300: '#F58F8F',
          400: '#F26A6A',
          500: '#EF4444',
          600: '#E71414',
          700: '#B30F0F',
          800: '#800B0B',
          900: '#4C0707'
        },
      },
    },
  },
  plugins: [],
}
