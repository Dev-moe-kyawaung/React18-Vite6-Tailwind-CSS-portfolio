import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    target: "es2020",
    sourcemap: false,
    cssMinify: "lightningcss",
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          router: ["react-router-dom"],
          icons: ["lucide-react"]
        }
      }
    }
  },
  server: {
    port: 5173,
    strictPort: true
  }
});
