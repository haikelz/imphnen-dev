import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  site: "https://imphnen.pages.dev",
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      conditions: ["browser"],
    },
  },
  server: {
    port: 3000,
    host: true,
  },
  devToolbar: {
    enabled: false,
  },
  compressHTML: true,
  experimental: {
    responsiveImages: true,
  },
  integrations: [
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: {
        theme: "github-dark-default",
      },
      remarkRehype: {
        footnoteLabel: "Footnotes",
      },
      gfm: true,
      optimize: true,
    }),
    sitemap({
      changefreq: "weekly",
      priority: 1,
    }),
    svelte(),
  ],
});
