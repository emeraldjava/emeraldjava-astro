import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/reference/configuration-reference/#site
  site: 'https://emeraldjava.github.io',
  base: 'emeraldjava-astro',
  integrations: [
    tailwind({
      applyBaseStyles: true,
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
    // shikiConfig: {
    //   theme: "one-dark-pro",
    //   wrap: true,
    // },
  },
  vite: {
    // build: {
    //   rollupOptions: {
    //     output: {
    //       entryFileNames: '[name]-[hash].js',
    //     }
    //   }
    // },
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
  scopedStyleStrategy: "where",
  // https://about.gitlab.com/blog/2022/10/24/publishing-an-astro-site-with-pages/
  // GitLab Pages requires exposed files to be located in a folder called "public".
  // So we're instructing Astro to put the static build output in a folder of that name.
  outDir: './dist',

  //output: 'static',
  // The folder name Astro uses for static files (`public`) is already reserved
  // for the build output. So in deviation from the defaults we're using a folder
  // called `static` instead.
  //publicDir: './static'
});
