const cssnano = require("cssnano");
const isDev = process.env.NODE_ENV !== "production";

module.exports = {
   plugins: [
      require("tailwindcss"),
      isDev ? undefined : require("autoprefixer"),
      isDev ? undefined : require("postcss-mq-keyframes"),
      isDev ? undefined : require("postcss-sort-media-queries"),
      isDev
         ? undefined
         : cssnano([
              "default",
              { discardComments: { removeAll: true }, discardEmpty: true, discardDuplicates: true, minifyFontValues: true },
           ]),
   ],
};
