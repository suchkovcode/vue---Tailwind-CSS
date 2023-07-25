const isDev = process.env.NODE_ENV !== "production";

module.exports = {
   plugins: [
      require("tailwindcss"),
      isDev ? undefined : require("autoprefixer"),
      isDev ? undefined : require("postcss-mq-keyframes"),
      isDev ? undefined : require("postcss-sort-media-queries"),
   ],
};
