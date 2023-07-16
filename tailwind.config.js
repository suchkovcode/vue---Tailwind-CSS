/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
   important: false,
   theme: {
      screens: {
         "xs": "540px",
         "sm": "640px",
         "md": "768px",
         "lg": "1024px",
         "xl": "1280px",
         "2xl": "1536px",
      },
      fontFamily: {
         roboto: ["Roboto, sans-serif"],
      },
      container: {
         center: true,
      },
   },
};
