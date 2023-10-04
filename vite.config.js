import { defineConfig } from "vite";
import { ViteAliases } from "vite-aliases";
import legacy from "@vitejs/plugin-legacy";
import pages from "./vitejs/pages.config";
import timeMarkPlugin from "./plugins/vite-plugin-timemark";
import { VitePWA } from "vite-plugin-pwa";

const pagesInput = {};

pages.forEach((page) => {
  pagesInput[page.name] = page.path;
});

const vitePWA = VitePWA({
  registerType: "autoUpdate",
  outDir: "dist",
  manifest: {
    name: "ABC-Games",
    short_name: "ABC",
    display: "standalone",
    start_url: "https://abc-eight.vercel.app/",
    description: "Игра для зарядки мозга «Алфавит»",
    theme_color: "#ffffff",
    background_color: "#ffffff",
    icons: [{
      src: 'assets/images/android-chrome-192x192.png',
      sizes: '192x192',
      type: 'image/png',

    },
    {
      src: 'assets/images/android-chrome-512x512.png',
      sizes: '512x512',
      type: 'image/png',
      
    }],
    "display_override": ["fullscreen", "minimal-ui", "window-controls-overlay"],
  },
});

export default defineConfig({
  build: {
    target: "es2017",
    outDir: "dist",
    rollupOptions: {
      input: {
        ...pagesInput,
      },
      output: {
        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? "")) {
            return "assets/images/[name]-[hash][extname]";
          }

          if (/\.(ttf|otf|fnt|woff)$/.test(name ?? "")) {
            return "assets/fonts/[name]-[hash][extname]";
          }

          if (/\.(css|scss|less)$/.test(name ?? "")) {
            return "assets/css/[name]-[hash][extname]";
          }

          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },
  server: {
    port: 3000,
    host: "0.0.0.0",
    hmr: true,
  },
  plugins: [
    ViteAliases(),
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
    timeMarkPlugin(),
    vitePWA,
  ],
})