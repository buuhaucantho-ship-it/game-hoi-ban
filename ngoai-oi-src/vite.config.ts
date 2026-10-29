import { defineConfig } from "vite";
export default defineConfig({
  base: "./",
  build: { outDir: "../ngoai-oi", emptyOutDir: true, chunkSizeWarningLimit: 900, target: "es2020" },
  server: { host: true }
});
