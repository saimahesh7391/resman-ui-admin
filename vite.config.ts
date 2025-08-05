// resman-ui-admin/vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import federation from "@originjs/vite-plugin-federation";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "admin_app",
      filename: "remoteEntry.js",
      exposes: {
        "./AdminRoutes": "./src/admin/AdminRoutes.tsx",
        "./AdminSidebarConfig": "./src/admin/sidebar.config.ts",
      },
      shared: ["react", "react-dom", "react-router-dom", "@mui/material", "@mui/icons-material", "axios", "@tanstack/react-query"],
    }),
  ],
  build: {
    target: "esnext",
  },
  server: { port: 3001, cors: true },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});