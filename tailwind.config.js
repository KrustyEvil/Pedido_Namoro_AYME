export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rose: {
          500: '#f43f5e',
          600: '#e11d48',
        },
        pink: {
          500: '#ec4899',
        }
      },
    },
  },
  plugins: [],
}