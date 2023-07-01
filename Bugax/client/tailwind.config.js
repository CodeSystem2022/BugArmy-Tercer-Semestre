/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': {
          light: "#2389",
          dark: "slate-dark",
        },
        primary: '#F53850',
      }
    },
  },
  plugins: [],
}

