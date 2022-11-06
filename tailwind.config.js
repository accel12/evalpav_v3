/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        alturaOutlet: "calc(100vh - 80px)",
        alturaFormulario: "calc(100vh - 80px)",
        alturaCalculo: "calc(100vh - 204px)"
      },
      colors: {
        azul: "#203864",
        verde: "#269914CF",
        fondoAlterno: '#DBD3C2',
        fondoTextoAlterno: '#E2E0DA',
        fondoHeader:'#97928C',
        fondoItemsTabla:'#DCDBD4',
        fondoPanel:'#E5E5C6'
      }
    },
  },
  plugins: [],
}
