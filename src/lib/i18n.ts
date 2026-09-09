export type Lang = 'es' | 'en';

export interface RoutePair {
  es: string;
  en: string;
}

export const ROUTE_MAP: Record<string, RoutePair> = {
  home: { es: '/es/', en: '/en/' },
  vote: { es: '/es/como-votar/', en: '/en/how-to-vote/' },
  issues: { es: '/es/propuestas/', en: '/en/issues/' },
  issue_paving: { es: '/es/propuestas/pavimentacion/', en: '/en/issues/paving/' },
  issue_lighting: { es: '/es/propuestas/alumbrado/', en: '/en/issues/lighting/' },
  issue_audit: { es: '/es/propuestas/auditoria/', en: '/en/issues/audit/' },
  about: { es: '/es/biografia/', en: '/en/about/' },
  contact: { es: '/es/contacto/', en: '/en/contact/' },
  privacy: { es: '/es/privacidad/', en: '/en/privacy/' },
  accessibility: { es: '/es/accesibilidad/', en: '/en/accessibility/' },
  thanks: { es: '/es/gracias/', en: '/en/thank-you/' }
};

export function getEquivalentPath(currentPath: string, targetLang: Lang): string {
  // Normalize current path
  const path = currentPath.endsWith('/') ? currentPath : `${currentPath}/`;

  for (const key of Object.keys(ROUTE_MAP)) {
    const pair = ROUTE_MAP[key];
    if (pair.es === path) return targetLang === 'en' ? pair.en : pair.es;
    if (pair.en === path) return targetLang === 'es' ? pair.es : pair.en;
  }

  // Fallback to home of target language
  return targetLang === 'en' ? '/en/' : '/es/';
}

export const NAV_LINKS = {
  es: [
    { label: 'Propuestas', href: '/es/propuestas/' },
    { label: 'Biografía', href: '/es/biografia/' },
    { label: 'Cómo Votar', href: '/es/como-votar/', isCta: true },
    { label: 'Contacto', href: '/es/contacto/' }
  ],
  en: [
    { label: 'Issues', href: '/en/issues/' },
    { label: 'About Lupe', href: '/en/about/' },
    { label: 'How to Vote', href: '/en/how-to-vote/', isCta: true },
    { label: 'Contact', href: '/en/contact/' }
  ]
};

export const UI_STRINGS = {
  es: {
    skipToContent: 'Saltar al contenido principal',
    voteCta: 'Cómo Votar',
    supportCta: 'Quiero apoyar',
    volunteerCta: 'Ser Voluntario',
    languageToggle: 'English',
    privacyLink: 'Política de Privacidad',
    accessibilityLink: 'Accesibilidad',
    legalDisclaimerComment: '// Texto legal — Texas Ethics Commission. No editar.',
    candidateRole: 'Comisionado, Precinto 4 · Condado de Maverick'
  },
  en: {
    skipToContent: 'Skip to main content',
    voteCta: 'How to Vote',
    supportCta: 'Support Lupe',
    volunteerCta: 'Volunteer',
    languageToggle: 'Español',
    privacyLink: 'Privacy Policy',
    accessibilityLink: 'Accessibility',
    legalDisclaimerComment: '// Legal disclaimer — Texas Ethics Commission. Do not edit.',
    candidateRole: 'County Commissioner, Precinct 4 · Maverick County'
  }
};
