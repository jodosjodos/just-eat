/** @type {import('tailwindcss').Config} */
// tailwind.config.js

module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        text: {
          primary: "#024220",
        },
      },
      fontFamily: {
        kreon: ["Kreon_300Light"], // Default to Regular
        "kreon-bold": ["Kreon_700Bold"],
      },
    },
  },
  plugins: [],
};
