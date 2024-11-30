const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Include all relevant file extensions and paths
    flowbite.content(),
    // ".bh_footer_wrap {background: linear-gradient(to bottom right, #4f1f38, #1d2452)}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    
    flowbite.plugin(),
  ],
};
