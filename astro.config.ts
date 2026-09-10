import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';
import { getEquivalentPath } from './src/lib/i18n';

const SITE = 'https://lupenegrete.com';

// Páginas post-conversión: llevan noindex, así que tampoco van en el sitemap.
const OCULTAS = ['/gracias/', '/thank-you/'];

export default defineConfig({
  site: SITE,
  // Las páginas de campaña se siguen prerenderizando en el build. Solo las
  // rutas que declaran `export const prerender = false` (por ahora, la API de
  // leads) corren en el servidor y hablan con la base de datos.
  output: 'static',
  adapter: node({ mode: 'standalone' }),
  integrations: [
    sitemap({
      filter: (page) => !OCULTAS.some((p) => page.includes(p)),
      changefreq: 'weekly',
      lastmod: new Date(),
      // El emparejado automático de idiomas del plugin no sirve aquí: empareja
      // por ruta idéntica tras el prefijo de idioma, y las nuestras están
      // traducidas (/es/biografia/ ↔ /en/about/). Se resuelve con ROUTE_MAP,
      // que ya es la fuente de verdad del selector de idioma.
      serialize(item) {
        const path = new URL(item.url).pathname;

        item.links =
          path === '/'
            ? [
                { lang: 'es-US', url: `${SITE}/es/` },
                { lang: 'en-US', url: `${SITE}/en/` },
                { lang: 'x-default', url: `${SITE}/` }
              ]
            : [
                { lang: 'es-US', url: `${SITE}${getEquivalentPath(path, 'es')}` },
                { lang: 'en-US', url: `${SITE}${getEquivalentPath(path, 'en')}` },
                { lang: 'x-default', url: `${SITE}/` }
              ];

        return item;
      }
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
