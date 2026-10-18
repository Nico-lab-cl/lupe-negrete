// Pinta el estado de la votación anticipada (barra roja, franja de la home y
// aviso emergente) con la hora de Eagle Pass del momento en que se abre la
// página. El HTML trae un texto genérico que vale para cualquier día; esto lo
// cambia por el que toca hoy.
import { trackEvent, type AnalyticsEvent } from '../lib/analytics';
import { estadoAnticipada, textosAnticipada } from '../lib/votacion-anticipada';
import type { Lang } from '../lib/i18n';

const lang: Lang = document.documentElement.lang === 'en' ? 'en' : 'es';
const estado = estadoAnticipada();
const textos = textosAnticipada(estado, lang);
const terminada = estado.fase === 'fin';

function poner(selector: string, texto: string) {
  if (!texto) return;
  document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
    el.textContent = texto;
  });
}

poner('[data-va-barra]', textos.barra);
poner('[data-va-titulo]', textos.titulo);
poner('[data-va-detalle]', textos.detalle);

// La fase va como atributo para que el CSS decida qué mostrar: los botones
// del Multi-Purpose Center sobran cuando ya solo queda el día de la elección.
document.querySelectorAll<HTMLElement>('[data-va-root]').forEach((el) => {
  el.dataset.fase = estado.fase;
  if (terminada) el.hidden = true;
});

// Resalta en la tabla el tramo de horario que corresponde a hoy.
document.querySelectorAll<HTMLElement>('[data-va-tramo]').forEach((el) => {
  const { desde = '', hasta = '' } = el.dataset;
  if (estado.hoy >= desde && estado.hoy <= hasta) el.dataset.hoy = '';
});

// Clics medidos: cada enlace declara su evento en data-va-evento, y así
// aparecen como filtro en Clarity y como evento en GA4.
document.addEventListener('click', (ev) => {
  const el = (ev.target as HTMLElement | null)?.closest<HTMLElement>('[data-va-evento]');
  if (!el) return;
  trackEvent(el.dataset.vaEvento as AnalyticsEvent, { fase: estado.fase, origen: el.dataset.vaOrigen ?? '' });
});

/* ---------- Aviso emergente ----------
   Una vez al día por visitante, con un respiro de 1,8 s para que primero se
   vea la página. Si el almacenamiento está bloqueado (modo privado, algunos
   navegadores internos de Instagram) se muestra igual: mejor repetirlo que
   no avisar. */
const popup = document.querySelector<HTMLDialogElement>('[data-va-popup]');
const CLAVE = 'va_popup_visto';

function yaVistoHoy(): boolean {
  try {
    return localStorage.getItem(CLAVE) === estado.hoy;
  } catch {
    return false;
  }
}

function marcarVisto() {
  try {
    localStorage.setItem(CLAVE, estado.hoy);
  } catch {
    /* sin almacenamiento: no pasa nada */
  }
}

if (popup && typeof popup.showModal === 'function' && !terminada && !yaVistoHoy()) {
  const cerrar = (motivo: string) => {
    if (!popup.open) return;
    popup.close();
    trackEvent('early_vote_popup_close', { fase: estado.fase, motivo });
  };

  popup.querySelectorAll<HTMLElement>('[data-va-cerrar]').forEach((b) => b.addEventListener('click', () => cerrar('boton')));
  // Los enlaces del aviso (cómo llegar, ver horario) también lo cierran.
  popup.querySelectorAll<HTMLAnchorElement>('a').forEach((a) =>
    a.addEventListener('click', () => {
      if (popup.open) popup.close();
    })
  );
  // Clic en el fondo oscuro, fuera de la tarjeta.
  popup.addEventListener('click', (ev) => {
    if (ev.target === popup) cerrar('fondo');
  });
  popup.addEventListener('cancel', () => trackEvent('early_vote_popup_close', { fase: estado.fase, motivo: 'esc' }));

  window.setTimeout(() => {
    // No se superpone a un video que alguien ya abrió, ni aparece si la
    // persona llegó directo a la franja desde un enlace compartido.
    if (document.querySelector('dialog[open]') || location.hash === '#anticipada') return;
    popup.showModal();
    marcarVisto();
    trackEvent('early_vote_popup', { fase: estado.fase });
  }, 1800);
}
