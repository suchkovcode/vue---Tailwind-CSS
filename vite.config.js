import { defineConfig } from "vite";
import { ViteFaviconsPlugin } from "vite-plugin-favicon2";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
   appType: "spa",
   root: "./src/",
   base: "./",
   cacheDir: "../.cache",
   build: {
      outDir: "../dist/",
      manifest: true,
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
      vue(),
      ViteFaviconsPlugin({
         logo: "src/assets/img/favicon.svg",
         inject: true,
         projectRoot: "./src/",
         outputPath: "static/",
         cache: true,
         favicons: {
            icons: {
               android: true,
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
