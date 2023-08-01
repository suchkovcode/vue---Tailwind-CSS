const isDev = process.env.NODE_ENV !== "production";
const autoprefixer = require("autoprefixer");
const postcsssortmediaqueries = require("postcss-sort-media-queries");

module.exports = {
   plugins: [
      autoprefixer,
      postcsssortmediaqueries,
   ],
};
