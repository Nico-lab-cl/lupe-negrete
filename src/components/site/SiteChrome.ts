import type { Lang } from '../../lib/i18n';

/**
 * Los enlaces del menú apuntan a secciones de la home. Desde la home son
 * anclas normales; desde una página interior hay que anteponer la ruta.
 */
export function anchorBase(lang: Lang, isHome: boolean): string {
  if (isHome) return '';
  return lang === 'es' ? '/es/' : '/en/';
}

/** Rutas reales del sitio por idioma. */
export function routes(lang: Lang) {
  return lang === 'es'
    ? {
        home: '/es/',
        other: '/en/',
        about: '/es/biografia/',
        contact: '/es/contacto/',
        issues: '/es/propuestas/',
        paving: '/es/propuestas/pavimentacion/',
        lighting: '/es/propuestas/alumbrado/',
        audit: '/es/propuestas/auditoria/',
        vote: '/es/como-votar/',
        privacy: '/es/privacidad/',
        accessibility: '/es/accesibilidad/'
      }
    : {
        home: '/en/',
        other: '/es/',
        about: '/en/about/',
        contact: '/en/contact/',
        issues: '/en/issues/',
        paving: '/en/issues/paving/',
        lighting: '/en/issues/lighting/',
        audit: '/en/issues/audit/',
        vote: '/en/how-to-vote/',
        privacy: '/en/privacy/',
        accessibility: '/en/accessibility/'
      };
}

/** Un solo lockup de marca en los dos idiomas. */
export const LOGO = { src: '/images/logo-es-lockup.png', w: 1907, h: 791 };

/** Días que faltan para la elección; el cliente lo recalcula al cargar. */
export function diasRestantes(): number {
  const eleccion = new Date(2026, 10, 3);
  return Math.max(0, Math.ceil((eleccion.getTime() - Date.now()) / 86400000));
}
