import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import keystatic from "@keystatic/astro";
import astroSage from "astro-sage";
import sageConfig from "./sage.config";

const isDev = process.argv.includes("dev");

// Konfigurasi Astro Meraki (Static output + Keystatic GUI saat dev)
export default defineConfig({
  site: sageConfig.site.url,
  integrations: [
    react(),
    ...(isDev ? [keystatic()] : []),
    astroSage(sageConfig),
  ],
});
