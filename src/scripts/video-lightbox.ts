// Lightbox de video sobre <dialog> nativo.
//
// El elemento <video> arranca sin `src`: nadie descarga 8 MB por entrar a la
// home. La fuente se asigna al abrir y se suelta al cerrar, para que el video
// no siga sonando ni descargando en segundo plano.
import { trackEvent } from '../lib/analytics';

const dialogo = document.querySelector<HTMLDialogElement>('[data-lightbox]');
const video = dialogo?.querySelector<HTMLVideoElement>('[data-lb-video]');
const titulo = dialogo?.querySelector<HTMLElement>('[data-lb-titulo]');
const btnCerrar = dialogo?.querySelector<HTMLButtonElement>('[data-lb-close]');

if (dialogo && video) {
  let abridor: HTMLElement | null = null;

  function abrir(boton: HTMLElement) {
    const src = boton.dataset.video;
    if (!src || !dialogo || !video) return;

    abridor = boton;
    video.src = src;
    video.poster = boton.dataset.poster ?? '';
    if (titulo) titulo.textContent = boton.dataset.titulo ?? '';

    dialogo.showModal();

    // El clic en la tarjeta es un gesto del usuario, así que el navegador
    // permite reproducir con sonido. Si aun así lo bloquea, quedan los
    // controles nativos y el póster visible.
    video.play().catch(() => {});

    trackEvent('video_play', { video: src, titulo: boton.dataset.titulo });
  }

  function cerrar() {
    if (!dialogo || !video) return;

    video.pause();
    // Soltar la fuente corta la descarga en curso: sin esto el video sigue
    // bajando datos aunque ya no se vea.
    video.removeAttribute('src');
    video.load();

    if (dialogo.open) dialogo.close();

    abridor?.focus();
    abridor = null;
  }

  document.querySelectorAll<HTMLElement>('[data-video]').forEach((boton) => {
    boton.addEventListener('click', () => abrir(boton));
  });

  btnCerrar?.addEventListener('click', cerrar);

  // Clic fuera del video: el <dialog> ocupa toda la pantalla, así que hay que
  // comprobar que el clic no cayó dentro del propio reproductor.
  dialogo.addEventListener('click', (e) => {
    const destino = e.target as HTMLElement | null;
    if (destino === video || destino?.closest('[data-lb-close]')) return;
    const caja = destino?.closest('[data-lb-caja]');
    if (!caja || destino === caja) cerrar();
  });

  // Cierre con Esc. No se puede confiar solo en el evento `close`: hay motores
  // donde no llega, y entonces el video se queda sonando detrás del diálogo ya
  // cerrado. Por eso se intercepta `cancel` (el evento propio de Esc) y se
  // deja además un respaldo por tecla y el `close` por si algún navegador solo
  // dispara ese.
  dialogo.addEventListener('cancel', (e) => {
    e.preventDefault();
    cerrar();
  });

  dialogo.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      cerrar();
    }
  });

  // Idempotente: si ya se limpió, esto no hace nada.
  dialogo.addEventListener('close', cerrar);
}
