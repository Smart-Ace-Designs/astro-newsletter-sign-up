// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Roboto",
      cssVariable: "--font-roboto",
      weights: [400, 700],
      styles: ["normal"],
    },
  ],
});
