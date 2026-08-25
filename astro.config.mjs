// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // The cutover target domain (legacy Hugo site's BaseURL) — used for
  // canonical episode links and the podcast feed's absolute URLs.
  site: "https://www.arresteddevops.com/",
});
