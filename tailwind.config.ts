import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-select/dist/index.esm.js",
    "./node_modules/preline/dist/*.js",
  ],

  theme: {
    extend: {
      class: {
        "btn-dark": "bg-red-500",
      },
      backgroundImage: {
        "main-bg": "url('/bg-image.jpg')",
      },
      fontFamily: {
        bodyFont: ["Urbanist", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        bodyColor: "#fbfaf7",
        bgLight: "#1010100d",
        darkText: "#242424",
        lightText: "#a5a5a5",
      },
    },
  },
  plugins: [
    require("tw-elements/dist/plugin.cjs"),
    require("daisyui"),
    require("preline/plugin"),
  ],
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
  darkMode: "class",
};
export default config;
