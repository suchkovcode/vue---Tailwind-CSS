const isDev = process.env.NODE_ENV !== "production";
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const postcsssortmediaqueries = require("postcss-combine-media-query");
const purgecss = require("@fullhuman/postcss-purgecss");
const cssnano = require("cssnano");

module.exports = {
   plugins: [
      tailwindcss,
      autoprefixer,
      postcsssortmediaqueries,
      cssnano(["default", { discardComments: { removeAll: true }, discardEmpty: true, discardDuplicates: true, minifyFontValues: true }]),
      purgecss({
         content: ["./src/**/*.vue"],
         css: [],
         dynamicAttributes: [""],
         fontFace: false,
         keyframes: false,
         variables: true,
         rejected: false,
         rejectedCss: false,
         safelist: {
            standard: ["body", "html", "a", /\w+-(?:\[\d+(px|deg)\])?/],
            deep: [],
            greedy: [],
            keyframes: [],
            variables: [],
         },
      }),
   ],
};
