/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '425px',
        'md': '768px',
        'lg': '900px',
        'xl': '1100px',
        'xxl': '1500px',
      },
      container: {
        center: true,
        padding: {
          default: '1rem',
          sm: '2rem',
          md: '2rem',
          lg: '3rem',
          xl: '3rem',
          xxl: '6rem',
        },
      },
    },
  },
  plugins: [require("daisyui")],
}

