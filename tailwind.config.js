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
        azul: "#0582CA",
        botonPresionado: "#00A6FB",
        verde: "#269914CF",
        fondoPrincipal: "#051923",
        fondoAlterno: '#003554',
        fondoTextoAlterno: '#E2E0DA',
        fondoHeader:'#33415C',
        fondoItemsTabla:'#7D8597',
        fondoPanel:'#006494'
      }
    },
  },
  plugins: [],
}
