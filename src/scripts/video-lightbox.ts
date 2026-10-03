// Lightbox de video sobre <dialog> nativo.
//
// El elemento <video> arranca sin `src`: nadie descarga 8 MB por entrar a la
// home. La fuente se asigna al abrir y se suelta al cerrar, para que el video
// no siga sonando ni descargando en segundo plano.
//
// Los botones que lo abren llevan data-video (fuente), data-poster y
// data-titulo; los de la galería traen además data-formato ('vertical' o
// 'entrevista'), data-video-id, data-url y data-texto, que alimentan la barra
// de compartir del propio lightbox.
import { trackEvent } from '../lib/analytics';
import { compartirMas, copiarEnlace, medirAvance } from './galeria-videos';

const dialogo = document.querySelector<HTMLDialogElement>('[data-lightbox]');
const video = dialogo?.querySelector<HTMLVideoElement>('[data-lb-video]');
const titulo = dialogo?.querySelector<HTMLElement>('[data-lb-titulo]');
const btnCerrar = dialogo?.querySelector<HTMLButtonElement>('[data-lb-close]');
const barra = dialogo?.querySelector<HTMLElement>('[data-lb-share]');

if (dialogo && video) {
  let abridor: HTMLElement | null = null;
  let idActual: string | undefined;

  function prepararBarra(boton: HTMLElement) {
    if (!barra) return;
    const d = boton.dataset;
    // Sin enlace propio (el video del hero, por ejemplo) no hay qué compartir.
    if (!d.url) {
      barra.hidden = true;
      return;
    }
    barra.hidden = false;
    const mensaje = `${d.texto ?? ''} ${d.url}`.trim();
    const wa = barra.querySelector<HTMLAnchorElement>('[data-lb-wa]');
    const fb = barra.querySelector<HTMLAnchorElement>('[data-lb-fb]');
    const copiar = barra.querySelector<HTMLElement>('[data-lb-copiar]');
    const mas = barra.querySelector<HTMLElement>('[data-lb-mas]');
    const bajar = barra.querySelector<HTMLAnchorElement>('[data-lb-bajar]');
    if (wa) wa.href = `https://wa.me/?text=${encodeURIComponent(mensaje)}`;
    if (fb) fb.href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(d.url)}`;
    for (const el of [wa, fb, copiar, mas, bajar]) if (el) el.dataset.id = d.videoId;
    if (copiar) copiar.dataset.url = d.url;
    if (mas) {
      mas.dataset.url = d.url;
      mas.dataset.texto = d.texto;
      mas.dataset.titulo = d.titulo;
      // El menú nativo solo existe en teléfonos y algunos navegadores.
      mas.hidden = !navigator.share;
    }
    // Descargar solo tiene sentido para el formato vertical: es el que cabe
    // en un estado de WhatsApp o una historia de Instagram.
    if (bajar) {
      bajar.hidden = d.formato !== 'vertical';
      bajar.href = d.video ?? '';
      bajar.setAttribute('download', `lupe-negrete-${d.videoId ?? 'video'}.mp4`);
    }
  }

  function abrir(boton: HTMLElement) {
    const src = boton.dataset.video;
    if (!src || !dialogo || !video) return;

    abridor = boton;
    idActual = boton.dataset.videoId ?? src;
    dialogo.dataset.formato = boton.dataset.formato ?? 'vertical';
    video.src = src;
    video.poster = boton.dataset.poster ?? '';
    if (titulo) titulo.textContent = boton.dataset.titulo ?? '';
    prepararBarra(boton);

    dialogo.showModal();

    // El clic en la tarjeta es un gesto del usuario, así que el navegador
    // permite reproducir con sonido. Si aun así lo bloquea, quedan los
    // controles nativos y el póster visible.
    video.play().catch(() => {});

    trackEvent('video_play', { video: idActual, titulo: boton.dataset.titulo });
  }

  function cerrar() {
    if (!dialogo || !video) return;

    video.pause();
    // Soltar la fuente corta la descarga en curso: sin esto el video sigue
    // bajando datos aunque ya no se vea.
    video.removeAttribute('src');
    video.load();

    if (dialogo.open) dialogo.close();

    // Quien llegó por un enlace compartido (#video-…) no debe ver el video
    // reabrirse al recargar, y el mismo enlace tiene que volver a funcionar.
    if (location.hash.startsWith('#video-')) {
      history.replaceState(null, '', location.pathname + location.search);
    }

    abridor?.focus();
    abridor = null;
  }

  medirAvance(video, () => idActual);

  document.querySelectorAll<HTMLElement>('[data-video]').forEach((boton) => {
    boton.addEventListener('click', () => abrir(boton));
  });

  btnCerrar?.addEventListener('click', cerrar);

  barra?.querySelector<HTMLElement>('[data-lb-copiar]')?.addEventListener('click', (e) => {
    const b = e.currentTarget as HTMLElement;
    if (b.dataset.url) copiarEnlace(b.dataset.url, b.dataset.id);
  });
  barra?.querySelector<HTMLElement>('[data-lb-mas]')?.addEventListener('click', (e) => {
    compartirMas(e.currentTarget as HTMLElement);
  });
  barra?.querySelector<HTMLElement>('[data-lb-bajar]')?.addEventListener('click', (e) => {
    trackEvent('video_download', { video: (e.currentTarget as HTMLElement).dataset.id });
  });

  // Clic fuera del video: el <dialog> ocupa toda la pantalla, así que hay que
  // comprobar que el clic no cayó dentro del propio reproductor ni en la barra.
  dialogo.addEventListener('click', (e) => {
    const destino = e.target as HTMLElement | null;
    if (destino === video || destino?.closest('[data-lb-close]') || destino?.closest('[data-lb-share]')) return;
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
