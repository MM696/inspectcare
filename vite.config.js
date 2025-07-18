import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
<<<<<<< HEAD
  base: '/flexisaf-inspectcare/', // 👈 For GitHub Pages
=======
>>>>>>> 907d36fefcd6c1499581ae3195aafba64e6bf4df
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // Spring Boot backend
        changeOrigin: true,
        secure: false,
      },
    },
  },
});