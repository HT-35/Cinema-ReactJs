import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import path from "path";
import { resolve } from "path";

// Chuyển đổi import.meta.url thành đường dẫn tương ứng
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: resolve(__dirname, "./src/assets/component") },
    ],
  },
});
//export default defineConfig({
//  plugins: [react()],
//  resolve: {
//    alias: {
//      "@": path.resolve(__dirname, "./src/assets/component"),
//    },
//  },
//});
