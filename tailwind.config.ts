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
};
export default config;
