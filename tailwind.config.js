/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/App.js",
    "./src/components/BigCenteredTitleDescription.js",
    "./src/components/SmallLeftTitleDescription.js",
    "./src/components/IconCenteredTitleDescription.js"
  ],
  theme: {
    // Define the Responsive Breakpoints. 
    // Mobile(375px) is going to be the default and Desktop(1040px) is going to be the min require
    screens: {
      "xl": "1024px"
    },
    colors: {
      "cyan": "#26baa4",
      "blue": "#6173ff",
      "gray-light": "#9fabb2",
      "gray-dark": "#4c545d"
    },
    fontFamily:{
      display: ["Bai Jamjuree",'sans-serif']
    },
    // fontSize:{
    //   base: "18px"
    // },
    extend: {},
  },
  plugins: [],
}

