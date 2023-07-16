import { defineConfig } from "vite";
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
   ],
});
