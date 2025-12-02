/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0E1A33",
          dark2: "#18264b",
          accent: "#2563EB",
          light: "#f0f7fe",
          light2: "#ddebfc",
        },
      },
      backgroundImage: {
        'brand-grad': 'linear-gradient(180deg, #0E1A33 0%, #18264b 100%)',
      },
    },
  },
  plugins: [],
};
