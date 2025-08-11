/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f2f7ff",
          100: "#e6efff",
          200: "#cce0ff",
          300: "#99c1ff",
          400: "#66a3ff",
          500: "#3384ff",
          600: "#1a6af0",
          700: "#1453c0",
          800: "#0f3c90",
          900: "#0a2660"
        }
      }
    },
  },
  plugins: [],
}
