/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/App.js",
    "./src/components/BigCenteredTitleDescription.js",
    "./src/components/SmallLeftTitleDescription.js",
    "./src/components/IconCenteredTitleDescription.js",
    "./src/components/Footer.js",
    "./src/components/DownloadButtons.js"
  ],
  theme: {
    // Define the Responsive Breakpoints. 
    // Mobile(375px) is going to be the default and Desktop(1040px) is going to be the min require
    screens: {
      "xl": "1024px"
    },
    colors: {
      "cyan": "#26baa4",
      "cyan-glow": "#5dccbb",
      "blue": "#6173ff",
      "blue-glow":"#8896ff",
      "gray": "#f5f6f8",
      "gray-light": "#9fabb2",
      "gray-dark": "#4c545d",
      "white": "#ffffff"
    },
    fontFamily:{
      display: ["Bai Jamjuree",'sans-serif']
    },
    // fontSize:{
    //   base: "18px"
    // },
    extend: {
      backgroundImage:{
        'mobile-bg': "url('./images/bg-header-mobile.png')",
        'desktop-bg': "url('./images/bg-header-desktop.png')",
        'placeholder': "url('./images/bg-placeholder.jpg')"
      }
    },
  },
  plugins: [],
}

