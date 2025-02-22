// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

import solidJs from '@astrojs/solid-js';
import { siteConfig } from './src/utils/config';

// https://astro.build/config
export default defineConfig({
  base:siteConfig.basepath,
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [icon(), solidJs()]
});