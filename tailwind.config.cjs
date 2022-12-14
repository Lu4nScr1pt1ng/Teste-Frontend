/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Poppins',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1280px',
      xl: '1676px',
    },
    extend: {
        colors: {
          subtext: '#5D616F',
          accent: {
            DEFAULT: '#3E82FC',
            hover: '#02389a',
          },
          background: '#FBFEFF',
        },
    },
  },
  plugins: [],
}
