import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { vitePrerenderPlugin } from "vite-prerender-plugin";
import { resolve } from "node:path";

export default defineConfig({
  base: "/rimarioeletricista/", // 👈 ADICIONA ISSO AQUI

  plugins: [
    react(),
    tailwindcss(),
    vitePrerenderPlugin({
      renderTarget: "#root",
      prerenderScript: resolve(__dirname, "src/prerender.tsx"),
      additionalPrerenderRoutes: [
        "/",
        "/produtos",
        "/santos",
        "/sao-vicente",
        "/praia-grande",
        "/cubatao",
        "/privacidade",
      ],
    }),
  ],
});