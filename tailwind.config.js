/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {},
      fontFamily: {
        satoshi: ["satoshi", "sans-serif"],
      },
      colors: {
        white: "#fff",
        green: "#2e9546",
        yellow: "#eec419",
        red: "##C52127",
        orange: "#ea9023",
        blue: "#20b3ad",
      },
    },
  },
  plugins: [],
};
