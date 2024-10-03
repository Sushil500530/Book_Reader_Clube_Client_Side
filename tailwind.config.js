/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'custom-gradient': 'linear-gradient(82.84deg, #2241b0 0.86%, #000000 100%)',
    },
  },
  plugins: [require("daisyui"), require('@tailwindcss/forms'),],
}

