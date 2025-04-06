import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  }, 
  build: {
    outDir: '../cordova/mapc/www/dist', 
    rollupOptions: {
      output: {
        // JavaScript files will be named 'script.js'
        entryFileNames: 'assets/script.js', 
        chunkFileNames: 'assets/script.js', // Any additional chunks will also be named 'script.js'
        
        // CSS files will be named 'style.css'
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'assets/style.css'; // Output CSS as 'style.css'
          }
          // For images and other assets, keep the original name in the 'images/' folder
          if(assetInfo.name && (/\.(jpg|jpeg|png|gif|svg|webp|ico|bmp)$/i.test(assetInfo.name))) {
            return 'assets/images/[name][extname]'; // Output images with their original names in 'images/' folder
          }
          return 'assets/[name][extname]'; // For other assets (fonts, etc.), use the original name
        },
      },
    },
  },
})
 