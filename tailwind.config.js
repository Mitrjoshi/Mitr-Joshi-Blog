/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#9e8af9",
        textColor: "#e2e8f0",
      },
      fontFamily: {
        allFonts: [
          "Space Grotesk, -apple-system, BlinkMacSystemFont, avenir next,avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto,arial, sans-serif",
        ],
      },
    },
    variants: {},
    screens: {
      xxs: "395px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      ms: "860px",
      smd: "910px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
