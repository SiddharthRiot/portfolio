/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B0B0E",
        text: "#EDEDED",
        muted: "#9CA3AF",
        accent: "#7C3AED",
      },
      fontFamily: {
        heading: ["Clash Display", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
