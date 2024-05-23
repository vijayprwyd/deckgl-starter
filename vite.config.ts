import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mkcert from "vite-plugin-mkcert";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), mkcert()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
