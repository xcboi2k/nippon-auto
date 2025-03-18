/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        black: '#232323',
        limeGreen: '#E2F163',
        purple: '#896CFE',
        lightPurple: '#B3A0FF'
      },
    },
  },
  plugins: [],
}