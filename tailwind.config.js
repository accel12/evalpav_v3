/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        altura: "calc(100vh - 102px)",
      },
      colors: {
        azul: "#203864",
        verde: "#269914CF",
      }
    },
  },
  plugins: [],
}
