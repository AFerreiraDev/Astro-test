import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

export default defineConfig({
  server: {port:3000},  
  integrations: [tailwind()],
  output: 'static',
  site: 'https://astro-test.github.io',
});