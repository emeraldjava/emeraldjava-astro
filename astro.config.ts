import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/config";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    sitemap(),
  ],
  markdown: {
    remarkPlugins: [
      remarkToc,
      [
        remarkCollapse,
        {
          test: "Table of contents",
        },
      ],
    ],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
  },
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
  scopedStyleStrategy: "where",
  // https://about.gitlab.com/blog/2022/10/24/publishing-an-astro-site-with-pages/
  // GitLab Pages requires exposed files to be located in a folder called "public".
  // So we're instructing Astro to put the static build output in a folder of that name.
  outDir: 'docs',

  // The folder name Astro uses for static files (`public`) is already reserved
  // for the build output. So in deviation from the defaults we're using a folder
  // called `static` instead.
  publicDir: 'static'
});
