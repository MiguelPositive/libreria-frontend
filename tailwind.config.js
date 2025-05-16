//Ese archivo es para crear clases personalizadas de tailwind
// y no tener que repetir el mismo código en cada componente

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.jsx", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-libro": "url(/imgs/libro.png)",
      },

      boxShadow: {
        global:
          "6px 4px 5px rgba(0, 0, 0, 0.4), -6px 4px 5px rgba(0, 0, 0, 0.4)",
        "global-light":
          "6px 4px 5px rgba(0, 0, 0, 0.2), -6px 4px 5px rgba(0, 0, 0, 0.2)",
        "global-dark":
          "6px 4px 10px 5px rgba(0, 0, 0, 0.6), -6px 4px 10px 5px rgba(0, 0, 0, 0.6)",
      },

      screens: {
        "300px": "300px",
        "400px": "400px",
        "510px": "510px",
        "450px": "450px",
        "775px": "775px",
      },
    },
  },
  plugins: { "@tailwindcss/postcss": {} },
};
