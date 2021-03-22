module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#00FFC5",
        secondary: "#140B00",
        "primary-lite": "#EBFFFA",
        "primary-lite-alt": "#F0FAF3",
        "secondary-lite": "#FFE1C2",
        accent: "#140B00",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
