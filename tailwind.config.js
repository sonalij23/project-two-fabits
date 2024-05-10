/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {

      colors: {
        "selago": "#F4F7FE",
        "periwinkle-gray": "#D3DBEC",
        "dixie": "#D99E16",
        "asparagus": "#74A766",
        "hippie-green": "#5B8350",
        "east-bay": "#41558D",
        "selago-two": "#E7EDFC",
        "alto": "#D9D9D9",
        "old-lace":"#FDF7E8"
      },
    },
  },
  plugins: [flowbite.plugin()],
};
