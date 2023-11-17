/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      screens: {
        "3xl": "2000px",
      },
      fontFamily: {
        Geist: ["Geist", "sans-serif"],
        GeistMono: ["Geist Mono", "sans-serif"],
      },
      colors: {
        primary: "#ff2a9d",
        secondary: "#ffe20c",
        tertiary: "#00dcdd",
      },
    },
  },
  plugins: [],
};
