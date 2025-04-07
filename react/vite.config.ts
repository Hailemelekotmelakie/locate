import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "../cordova/mapc/www/assets",
    rollupOptions: {
      output: {
        // JavaScript files will be named 'script.js'
        entryFileNames: "script.js",
        chunkFileNames: "script.js", // Any additional chunks will also be named 'script.js'

        // CSS files will be named 'style.css'
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith(".css")) {
            return "style.css"; // Output CSS as 'style.css'
          }
          // For images and other assets, keep the original name in the 'images/' folder
          if (
            assetInfo.name &&
            /\.(jpg|jpeg|png|gif|svg|webp|ico|bmp)$/i.test(assetInfo.name)
          ) {
            return "[name][extname]"; // Output images with their original names in 'images/' folder
          }
          return "[name][extname]"; // For other assets (fonts, etc.), use the original name
        },
      },
    },
  },
});
