/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./static/**/*.js", "./layouts/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ["Fira Sans", "sans-serif"],
        'mono': ["Fira Mono", "monospace"]
      }
    },
  },
  plugins: [require("@catppuccin/tailwindcss")({ defaultFlavour: "macchiato" })],

}
