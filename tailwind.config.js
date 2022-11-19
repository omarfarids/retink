/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        perfBlack: "#2F80ED",
        perfDark: "#0D65DB",
        lightGray: '#D0D0D0',
        dodgerBlue: '#0085FF',
        primary1: "#7E1CFE",
        perfGray: '#BDBDBD',
        blue: '#0A66C2',
        red: '#EA0022',
        lightBlue: '#0085FF'
      },
      screens: {
        xs: "576px",
        sm: "768px",
        md: "992px",
        lg: "1200px",
        xl: "1400px",
      },
    }
  },
  plugins: [],
}
