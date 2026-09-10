// Constructores de datos estructurados (JSON-LD) para Schema.org.
//
// Criterio: solo se declara lo que la página realmente contiene. Marcar cosas
// que no están —FAQ inventadas, Event para una elección, valoraciones— es lo
// que hace que Google aplique acciones manuales, y en un sitio de campaña eso
// significa desaparecer de resultados en plena elección.
import { SITE_CONFIG } from '../config/site';
import type { Lang } from './i18n';

const SITE = SITE_CONFIG.siteUrl;

/** URL absoluta a partir de una ruta del sitio. */
export function abs(path: string): string {
  return path.startsWith('http') ? path : `${SITE}${path}`;
}

/** El candidato. `sameAs` es lo que permite a Google enlazar sus perfiles. */
export function personSchema(lang: Lang) {
  return {
    '@type': 'Person',
    '@id': `${SITE}/#candidato`,
    name: SITE_CONFIG.candidate.name,
    alternateName: [
      SITE_CONFIG.candidate.alternateName,
      'Lupe Negrete',
      'Lupe Navarrete',
      'Guadalupe Negrete'
    ],
    jobTitle: SITE_CONFIG.candidate.office[lang],
    description: SITE_CONFIG.candidate.positioningLine[lang],
    url: abs(lang === 'es' ? '/es/' : '/en/'),
    image: abs('/images/candidate-portrait-navy.png'),
    email: `mailto:${SITE_CONFIG.committee.email[lang]}`,
    telephone: `+${SITE_CONFIG.committee.whatsappNumber}`,
    sameAs: [SITE_CONFIG.social.facebook],
    affiliation: {
      '@type': 'PoliticalParty',
      name: SITE_CONFIG.candidate.party[lang]
    },
    homeLocation: {
      '@type': 'Place',
      name: 'Eagle Pass, Maverick County, Texas'
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Eagle Pass',
      addressRegion: 'TX',
      postalCode: '78852',
      addressCountry: 'US'
    }
  };
}

/** El comité de campaña. */
export function organizationSchema(lang: Lang) {
  return {
    '@type': 'Organization',
    '@id': `${SITE}/#comite`,
    name: SITE_CONFIG.committee.legalName,
    url: SITE,
    logo: abs('/images/logo-es-lockup.png'),
    sameAs: [SITE_CONFIG.social.facebook],
    member: { '@id': `${SITE}/#candidato` },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Precinct 4, Maverick County, Texas'
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Eagle Pass',
      addressRegion: 'TX',
      postalCode: '78852',
      addressCountry: 'US'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Campaign Office',
      email: SITE_CONFIG.committee.email[lang],
      telephone: `+${SITE_CONFIG.committee.whatsappNumber}`,
      availableLanguage: ['Spanish', 'English']
    }
  };
}

/** El sitio en sí. */
export function webSiteSchema(lang: Lang) {
  return {
    '@type': 'WebSite',
    '@id': `${SITE}/#sitio`,
    name: 'Lupe Negrete · Comisionado Precinto 4',
    url: SITE,
    inLanguage: lang === 'es' ? 'es-US' : 'en-US',
    publisher: { '@id': `${SITE}/#comite` },
    about: { '@id': `${SITE}/#candidato` }
  };
}

export type Breadcrumb = { name: string; href: string };

/** Migas de pan. Google las muestra en lugar de la URL cruda en resultados. */
export function breadcrumbSchema(items: Breadcrumb[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: abs(item.href)
    }))
  };
}

export type PageType = 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage';

/** La página actual, enlazada al sitio y al candidato. */
export function pageSchema(opts: {
  type: PageType;
  name: string;
  description: string;
  url: string;
  lang: Lang;
  image?: string;
}) {
  return {
    '@type': opts.type,
    '@id': `${abs(opts.url)}#pagina`,
    name: opts.name,
    description: opts.description,
    url: abs(opts.url),
    inLanguage: opts.lang === 'es' ? 'es-US' : 'en-US',
    isPartOf: { '@id': `${SITE}/#sitio` },
    about: { '@id': `${SITE}/#candidato` },
    primaryImageOfPage: abs(opts.image ?? '/images/banner-campaign.png')
  };
}

/**
 * Arma el bloque JSON-LD completo de una página con @graph, que es la forma
 * recomendada de relacionar entidades entre sí en lugar de repetirlas sueltas.
 */
export function buildGraph(opts: {
  lang: Lang;
  pageType: PageType;
  title: string;
  description: string;
  url: string;
  image?: string;
  breadcrumbs?: Breadcrumb[];
  extra?: Record<string, unknown>[];
}) {
  const graph: Record<string, unknown>[] = [
    personSchema(opts.lang),
    organizationSchema(opts.lang),
    webSiteSchema(opts.lang),
    pageSchema({
      type: opts.pageType,
      name: opts.title,
      description: opts.description,
      url: opts.url,
      lang: opts.lang,
      image: opts.image
    })
  ];

  if (opts.breadcrumbs?.length) graph.push(breadcrumbSchema(opts.breadcrumbs));
  if (opts.extra?.length) graph.push(...opts.extra);

  return { '@context': 'https://schema.org', '@graph': graph };
}
