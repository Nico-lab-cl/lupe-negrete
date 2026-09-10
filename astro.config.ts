import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';
import { getEquivalentPath } from './src/lib/i18n';

const SITE = 'https://lupenegrete.com';

// Páginas post-conversión: llevan noindex, así que tampoco van en el sitemap.
// Declarar en el sitemap una URL que el propio HTML marca como noindex es una
// contradicción que Search Console reporta como error.
const OCULTAS = ['/gracias/', '/thank-you/'];

/**
 * Prioridad y frecuencia por tipo de página.
 *
 * `priority` es relativa dentro del propio sitio: le dice al rastreador qué
 * páginas importan más cuando no puede rastrearlas todas. `changefreq` es una
 * pista sobre cada cuánto vale la pena volver. Ninguna de las dos sube el
 * posicionamiento; poner 1.0 en todo es lo mismo que no poner nada.
 */
function pesoDe(path: string): { priority: number; changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly' } {
  // Portadas: el punto de entrada de cada idioma y lo que más cambia.
  if (path === '/es/' || path === '/en/') {
    return { priority: 1.0, changefreq: 'daily' };
  }

  // Información electoral: se actualiza al acercarse cada fecha.
  if (path.includes('/como-votar/') || path.includes('/how-to-vote/')) {
    return { priority: 0.9, changefreq: 'weekly' };
  }

  // Índice de propuestas: la sección que sostiene el mensaje de campaña.
  if (path === '/es/propuestas/' || path === '/en/issues/') {
    return { priority: 0.9, changefreq: 'weekly' };
  }

  // Fichas de cada propuesta.
  if (path.includes('/propuestas/') || path.includes('/issues/')) {
    return { priority: 0.8, changefreq: 'monthly' };
  }

  // Biografía y contacto: importantes, pero estables.
  if (
    path.includes('/biografia/') ||
    path.includes('/about/') ||
    path.includes('/contacto/') ||
    path.includes('/contact/')
  ) {
    return { priority: 0.7, changefreq: 'monthly' };
  }

  // Legales: obligatorias, pero no son por lo que se busca la campaña.
  if (
    path.includes('/privacidad/') ||
    path.includes('/privacy/') ||
    path.includes('/accesibilidad/') ||
    path.includes('/accessibility/')
  ) {
    return { priority: 0.3, changefreq: 'yearly' };
  }

  // La raíz es solo el selector de idioma: redirige, no tiene contenido propio.
  if (path === '/') {
    return { priority: 0.5, changefreq: 'monthly' };
  }

  return { priority: 0.6, changefreq: 'monthly' };
}

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
      lastmod: new Date(),
      serialize(item) {
        const path = new URL(item.url).pathname;
        const { priority, changefreq } = pesoDe(path);

        item.priority = priority;
        item.changefreq = changefreq;

        // El emparejado automático de idiomas del plugin no sirve aquí:
        // empareja por ruta idéntica tras el prefijo de idioma, y las nuestras
        // están traducidas (/es/biografia/ ↔ /en/about/). Se resuelve con
        // ROUTE_MAP, que ya es la fuente de verdad del selector de idioma.
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
