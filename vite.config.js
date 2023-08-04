import { defineConfig } from "vite";
import { ViteFaviconsPlugin } from "vite-plugin-favicon2";
import { visualizer } from "rollup-plugin-visualizer";
import inspect from "vite-plugin-inspect";
import stylelint from "vite-plugin-stylelint";
import eslint from "vite-plugin-eslint";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
   appType: "spa",
   root: "./src/",
   base: "./",
   cacheDir: "../.cache",
   build: {
      outDir: "../dist/",
      manifest: false,
   },
   resolve: {
      alias: {
         "@": path.resolve(__dirname, "./src/"),
      },
   },
   server: {
      port: 8080,
      open: true,
   },
   plugins: [
      visualizer({
         emitFile: true,
         filename: "stats.html",
      }),
      inspect(),
      vue(),
      eslint(),
      ViteFaviconsPlugin({
         logo: "src/assets/img/svg/favicon.svg",
         inject: true,
         outputPath: "./static",
         favicons: {
            appName: "Example",
            appShortName: "Example",
            appDescription: "Example",
            start_url: "/",
            icons: {
               android: false,
               appleIcon: true,
               appleStartup: true,
               favicons: true,
               windows: true,
               yandex: true,
            },
         },
      }),
   ],
});
