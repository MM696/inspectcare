import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: '/flexisaf-inspectcare/', // 👈 This must match the basename in BrowserRouter
  plugins: [react()],
})