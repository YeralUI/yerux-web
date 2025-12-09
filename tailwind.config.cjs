/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
brand: {
  dark:  "#061529",   // Azul profundo frio
  dark2: "#061529",   // Azul corporativo moderno
  accent: "#0963c0",  // Azul eléctrico tipo Twitter (muy tech)
  light:  "#f1f7fe",  // Fondo minimalista
  light2: "#bcdafb",  // Contenedores suaves
  light3: "#F8FBFF",  // Casi blanco
},

      },
      backgroundImage: {
        'brand-grad': 'linear-gradient(180deg, #061529 0%, #0D2847 100%)',

      },
    },
  },
  plugins: [],
};
