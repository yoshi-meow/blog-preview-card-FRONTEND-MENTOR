/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Figtree", "sans-serif"],
      },
      colors: {
        customYellow: "#F4D04E",
        customWhite: "#FFFFFF",
        customGrey: "#808080",
        customBlack: "#121212",
        customLink: "#3E52A3",
      },
    },
  },
  plugins: [],
};
