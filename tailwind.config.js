/** @type {import('tailwindcss').Config} */
// tailwind.config.js

module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#024220",
        secondary: "#D6FFD9",
      },
      fontFamily: {
        kreon: ["Kreon_300Light"],
        "kreon-regular": ["Kreon_400Regular"],
        "kreon-medium": ["Kreon_500Medium"],
        "kreon-bold": ["Kreon_700Bold"],
        kadwa: ["Kadwa_400Regular"],
        "kadwa-bold": ["Kadwa_700Bold"],
        lekton: ["Lekton_400Regular"],
        "lekton-italic": ["Lekton_400Regular_Italic"],
        "lekton-bold": ["Lekton_700Bold"],
        adamina: ["Adamina_400Regular"],
      },
    },
  },
  plugins: [],
};
