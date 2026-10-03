// Galería de videos de la portada: filtros, carrusel, compartir, enlaces
// directos a un video (#video-<id>) y medición de lo que se ve y se comparte.
import { trackEvent } from '../lib/analytics';

const isEs = document.documentElement.lang !== 'en';
const aviso = document.querySelector<HTMLElement>('[data-gv-aviso]');
let avisoTimer = 0;

function avisar(texto: string) {
  if (!aviso) return;
  aviso.textContent = texto;
  aviso.setAttribute('data-open', '');
  clearTimeout(avisoTimer);
  avisoTimer = window.setTimeout(() => aviso.removeAttribute('data-open'), 2200);
}

/* ---------- Compartir ---------- */
// WhatsApp y Facebook son enlaces normales: solo se registra el clic.
document.addEventListener('click', (e) => {
  const enlace = (e.target as HTMLElement).closest<HTMLElement>('[data-gv-share]');
  if (enlace) {
    trackEvent('video_share', { video: enlace.dataset.id, canal: enlace.dataset.gvShare });
  }
});

// "Más": el menú nativo del teléfono (Messenger, Instagram, SMS…). Donde no
// existe, como en casi todos los escritorios, copia el enlace.
export async function compartirMas(boton: HTMLElement) {
  const url = boton.dataset.url ?? location.href;
  const texto = boton.dataset.texto ?? '';
  const id = boton.dataset.id;
  if (navigator.share) {
    try {
      await navigator.share({ title: boton.dataset.titulo, text: texto, url });
      trackEvent('video_share', { video: id, canal: 'nativo' });
    } catch {
      /* el usuario cerró el menú: no es un error */
    }
    return;
  }
  await copiarEnlace(url, id);
}

export async function copiarEnlace(url: string, id?: string) {
  try {
    await navigator.clipboard.writeText(url);
    avisar(isEs ? 'Enlace copiado' : 'Link copied');
    trackEvent('video_share', { video: id, canal: 'copiar' });
  } catch {
    window.prompt(isEs ? 'Copia este enlace:' : 'Copy this link:', url);
  }
}

document.querySelectorAll<HTMLElement>('[data-gv-mas]').forEach((b) => {
  b.addEventListener('click', () => compartirMas(b));
});

/* ---------- Medición de avance ---------- */
// Un evento por cuartil y por reproducción: 25, 50, 75 y 100 %.
export function medirAvance(video: HTMLVideoElement, id: () => string | undefined) {
  let hitos = new Set<number>();
  video.addEventListener('loadstart', () => (hitos = new Set()));
  video.addEventListener('timeupdate', () => {
    if (!video.duration) return;
    const pct = (video.currentTime / video.duration) * 100;
    for (const h of [25, 50, 75, 100]) {
      if (pct >= (h === 100 ? 98 : h) && !hitos.has(h)) {
        hitos.add(h);
        trackEvent('video_progress', { video: id(), porcentaje: h });
      }
    }
  });
}

/* ---------- Galería navy: filtros y carrusel ---------- */
const galeria = document.querySelector<HTMLElement>('[data-galeria]');
if (galeria) {
  const filtros = galeria.querySelectorAll<HTMLButtonElement>('[data-gv-filtro]');
  const tarjetas = galeria.querySelectorAll<HTMLElement>('[data-gv-card]');
  const filas = galeria.querySelectorAll<HTMLElement>('[data-gv-fila]');
  const cuenta = galeria.querySelector<HTMLElement>('[data-gv-cuenta]');
  const track = galeria.querySelector<HTMLElement>('[data-gv-carrusel]');
  const prev = galeria.querySelector<HTMLButtonElement>('[data-gv-prev]');
  const next = galeria.querySelector<HTMLButtonElement>('[data-gv-next]');

  const actualizarFlechas = () => {
    if (!track || !prev || !next) return;
    const max = track.scrollWidth - track.clientWidth;
    prev.disabled = track.scrollLeft <= 4;
    next.disabled = track.scrollLeft >= max - 4;
  };

  filtros.forEach((btn) => {
    btn.addEventListener('click', () => {
      const tema = btn.dataset.gvFiltro ?? 'todos';
      filtros.forEach((f) => f.setAttribute('aria-pressed', String(f === btn)));
      let visibles = 0;
      tarjetas.forEach((card) => {
        const ok = tema === 'todos' || (card.dataset.temas ?? '').split(' ').includes(tema);
        card.hidden = !ok;
        if (ok) visibles++;
      });
      filas.forEach((fila) => {
        fila.hidden = !fila.querySelector('[data-gv-card]:not([hidden])');
      });
      if (cuenta) cuenta.textContent = String(visibles);
      track?.scrollTo({ left: 0 });
      actualizarFlechas();
      trackEvent('filter_use', { tema });
    });
  });

  if (track && prev && next) {
    const paso = () => {
      const card = track.querySelector<HTMLElement>('[data-gv-card]:not([hidden])');
      const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      return card ? (card.offsetWidth + gap) * 2 : track.clientWidth;
    };
    prev.addEventListener('click', () => track.scrollBy({ left: -paso(), behavior: 'smooth' }));
    next.addEventListener('click', () => track.scrollBy({ left: paso(), behavior: 'smooth' }));
    track.addEventListener('scroll', actualizarFlechas, { passive: true });
    window.addEventListener('resize', actualizarFlechas);
    actualizarFlechas();
  }
}

/* ---------- Enlace directo: lupenegrete.com/es/#video-<id> ---------- */
function abrirDesdeHash() {
  const m = location.hash.match(/^#video-([a-z0-9-]+)$/);
  if (!m) return;
  const id = m[1];
  const seccion = document.getElementById('videos');
  const tarjeta = document.querySelector<HTMLElement>(`[data-video][data-video-id="${id}"]`);
  if (tarjeta) {
    // Si un filtro dejó la tarjeta oculta, se vuelve a "Todos" para que el
    // video quede a la vista al cerrar el lightbox.
    if (tarjeta.closest('[hidden]')) {
      document.querySelector<HTMLButtonElement>('[data-gv-filtro="todos"]')?.click();
    }
    seccion?.scrollIntoView({ block: 'start' });
    tarjeta.click();
  }
}

// Diferido: video-lightbox importa este módulo y registra sus clics después,
// así que el lightbox aún no escucha cuando este archivo termina de cargar.
setTimeout(abrirDesdeHash, 0);
window.addEventListener('hashchange', abrirDesdeHash);
