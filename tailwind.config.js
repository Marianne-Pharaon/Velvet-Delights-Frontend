/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Oooh+Baby': ['Oooh Baby', 'sans-serif'],
        'outfit': ['Outfit', 'serif'],
      },
    },
  },
  variants: {},
  plugins: [],
};
