/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      darkest: "#212121",
      darker: "#424242",
      dark: "616161",
    },
    extend: {},
  },
  plugins: [],
};
