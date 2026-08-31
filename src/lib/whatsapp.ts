import { SITE_CONFIG } from '../config/site';

export type WhatsAppSource =
  | 'home'
  | 'pavimentacion'
  | 'alumbrado'
  | 'auditoria'
  | 'como-votar'
  | 'contacto'
  | 'voluntario'
  | 'general';

export const WHATSAPP_MESSAGES = {
  es: {
    home: 'Hola, vengo de la página de Lupe y quiero apoyar la campaña en el Precinto 4.',
    pavimentacion: 'Hola, vengo de la página de Lupe. En mi calle hace falta pavimentación, quiero contarles mi caso.',
    alumbrado: 'Hola, vengo de la página de Lupe. Hay luminarias apagadas en mi cuadra, quiero reportarlo.',
    auditoria: 'Hola, vengo de la página de Lupe y quiero saber más sobre la auditoría al presupuesto del condado.',
    'como-votar': 'Hola, vengo de la página de Lupe y tengo una duda sobre dónde y cuándo votar en el Precinto 4.',
    contacto: 'Hola, me gustaría comunicarme directamente con el equipo de campaña de Lupe Negrete.',
    voluntario: 'Hola, vengo de la página de Lupe y quiero ser voluntario en la campaña del Precinto 4.',
    general: 'Hola, me comunico desde la página oficial de Lupe Negrete.'
  },
  en: {
    home: 'Hi, I visited Lupe’s website and want to support the campaign in Precinct 4.',
    pavimentacion: 'Hi, I visited Lupe’s website. My street needs paving and repairs, and I want to share my details.',
    alumbrado: 'Hi, I visited Lupe’s website. Street lights are out on my block and I want to report it.',
    auditoria: 'Hi, I visited Lupe’s website and want to learn more about the county budget audit proposal.',
    'como-votar': 'Hi, I visited Lupe’s website and have a question about where and when to vote in Precinct 4.',
    contacto: 'Hi, I would like to get in touch with Lupe Negrete’s campaign team.',
    voluntario: 'Hi, I visited Lupe’s website and would like to volunteer for the Precinct 4 campaign.',
    general: 'Hi, I am reaching out from Lupe Negrete’s official website.'
  }
};

export function getWhatsAppUrl(source: WhatsAppSource = 'general', lang: 'es' | 'en' = 'es'): string {
  const number = SITE_CONFIG.committee.whatsappNumber;
  const messages = WHATSAPP_MESSAGES[lang] || WHATSAPP_MESSAGES.es;
  const rawText = messages[source] || messages.general;
  const encodedText = encodeURIComponent(rawText);
  return `https://wa.me/${number}?text=${encodedText}`;
}
