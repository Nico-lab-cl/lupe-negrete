import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://lupenegrete.com',
  // Las páginas de campaña se siguen prerenderizando en el build. Solo las
  // rutas que declaran `export const prerender = false` (por ahora, la API de
  // leads) corren en el servidor y hablan con la base de datos.
  output: 'static',
  adapter: node({ mode: 'standalone' }),
  vite: {
    plugins: [tailwindcss()]
  }
});
