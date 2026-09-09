/**
 * A dónde mandar a quien acaba de dejar sus datos. Se resuelve en el cliente
 * a partir del idioma del documento para no tener que pasarlo por atributos.
 */
export function thanksUrl(): string {
  return document.documentElement.lang === 'en' ? '/en/thank-you/' : '/es/gracias/';
}
