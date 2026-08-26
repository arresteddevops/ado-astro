// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // The cutover target domain (legacy Hugo site's BaseURL) — used for
  // canonical episode links and the podcast feed's absolute URLs.
  site: "https://www.arresteddevops.com/",
  integrations: [
    sitemap({
      // Not real content pages — nobody should land on these from search.
      filter: (page) => !page.endsWith("/404/") && !page.endsWith("/thank-you/"),
    }),
  ],
});
