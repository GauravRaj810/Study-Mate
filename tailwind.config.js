/** @type {import('tailwindcss').Config} */
/* this file basically tells that tailwind css where found to be act in specific file in this 
there mention index.html file there it will go for that  */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}