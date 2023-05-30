/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      veryDarkBlue: "#1B1D23",
      darkGray: "#60636D",
      mediumGrey: "#7D828F",
      lightGrey: "#C8CCD8",
      veryLightGrey: "#EEEFF4",
      red: "#DF5656",
      white: "#ffffff",
    },
  },
  plugins: [],
};
