/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'chris-lee': "url('../assets/images/chris-lee.png')",
      },
    },
  },
  plugins: [],
}

