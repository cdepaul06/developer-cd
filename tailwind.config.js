/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0f4461",
        secondary: "#ffffff",
        tertiary: "#052130",
        "black-100": "#072a3d",
        "black-200": "#090325",
        "white-100": "#041824",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg1.webp')",
      },
    },
  },
  plugins: [],
};
