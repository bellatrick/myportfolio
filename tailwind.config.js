/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#1DCF9F",
        secondary: "#18FC73",
      },
      fontFamily: {
        bodyprimary: ["Inter", "sans-serif"],
        bodysecondary: ["Nunito", "sans-serif"],
      },
    
    },
  },
  plugins: [],
};
