/** @type {import('tailwindcss').Config} */

const forms = require("@tailwindcss/forms")
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./app/frontend/**/*.{js,ts,jsx,tsx}", "./app/views/**/*"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [forms],
}
