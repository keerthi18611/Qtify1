import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/songs": {
        target: "https://qtify-backend.labs.crio.do/songs",
        changeOrigin: true,
        secure: false,
      },
      "/genres": {
        target: "https://qtify-backend.labs.crio.do/genres",
        changeOrigin: true,
        secure: false,
      },
      "/albums": {
        target: "https://qtify-backend.labs.crio.do/albums/new",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
