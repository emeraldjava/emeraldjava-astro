import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import sitemap from "@astrojs/sitemap";

//console.log(process.env)
console.log('config loading');
// https://vitejs.dev/guide/env-and-mode.html
console.log(`Hello import.meta.env.MODE`)
console.log(import.meta.env.MODE);

console.log(`Hello import.meta.env.DEV`)
console.log(import.meta.env.DEV);

//console.log(import.meta.env.BASE) // "123"
console.log(import.meta.env.VITE_BASE) // "123"
//console.log(import.meta.env.VITE_SOME_KEY) // "123"
//console.log(import.meta.env.DB_PASSWORD) // undefined
//console.log(`${process.env.BASE}`);

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/reference/configuration-reference/#site
  // see https://config.tips/c/astro/dynamic-astro-site-value/
  site: import.meta.env.DEV ? "http://localhost:4321" : 'https://emeraldjava.github.io/',
  // See https://github.com/withastro/astro/issues/5512
  // https://docs.astro.build/en/guides/environment-variables/
  // https://vitejs.dev/guide/env-and-mode.html#env-files
  base: import.meta.env.DEV ? "." : "/emeraldjava-astro",
  //base: import.meta.env.VITE_BASE,
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
  outDir: './dist'
});
