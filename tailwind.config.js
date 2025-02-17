/* eslint-disable no-undef */
const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */

// import { Flowbite } from 'flowbite-react';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),

  ],
  theme: {
    extend: {},
    colors:{
      "primary" : "#f3f3f3",
      "secondary" : "#5e5d5d",
      "accent" : "#cd7225",
      "accent-light" : "#fde2c4",
    }
  },
  plugins: [flowbite.plugin(),],
}

