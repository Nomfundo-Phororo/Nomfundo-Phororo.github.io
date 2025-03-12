/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",],
  theme: {
    extend: {},
    container: {
      padding: {
          DEFAULT: '2rem',
          sm: '3rem',
          md: '1rem',
          lg: '1rem',
          xl: '3rem',
          '2xl': '2rem',
      },
  },
  },
  plugins: [],
}

