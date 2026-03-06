// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://go.choxypop.com',
  base: '/',
  output: 'static',
  // Eliminamos el adaptador de Cloudflare para evitar errores de arquitectura en Android
  prefetch: true,
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  integrations: [sitemap(),icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
