/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["serif"],
        comic: ["Comic Sans MS", "cursive"],
      },
      textColor: {
        white: "#ffffff",
      },
      colors: {
        navy: "#001F3F",
        black: "#000000",
        white: "#FFFFFF",
        dark: "#111827",
      },
    },
  },
  plugins: [],
};
