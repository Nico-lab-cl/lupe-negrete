// Textos de la galería de videos y de los botones de compartir.
import type { Lang } from '../../lib/i18n';
import type { TemaVideo, VideoCampana } from '../../config/videos';

export const GALERIA_COPY = {
  es: {
    kicker: 'La campaña en video',
    h2: 'Lupe, calle por calle',
    sub: 'Recorridos por las colonias y entrevistas donde explica cada propuesta. Míralos y compártelos con tus vecinos.',
    filtros: 'Filtrar videos por tema',
    todos: 'Todos',
    temas: {
      pavimentacion: 'Pavimentación',
      seguridad: 'Seguridad',
      transparencia: 'Transparencia',
      comunidad: 'Comunidad'
    } as Record<TemaVideo, string>,
    terreno: 'En el terreno',
    terrenoMeta: 'Formato vertical',
    entrevistas: 'Entrevistas',
    entrevistasMeta: 'EPTVN · Eagle Pass Texas News',
    entrevista: 'Entrevista',
    anteriores: 'Videos anteriores',
    siguientes: 'Más videos',
    reproducir: 'Reproducir',
    reproduciendo: 'Reproduciendo',
    lista: 'Lista',
    videos: 'videos',
    compartirEn: 'Compartir en',
    masOpciones: 'Más formas de compartir',
    copiar: 'Copiar enlace',
    copiado: 'Enlace copiado',
    mas: 'Más…',
    descargar: 'Descargar para tu estado de WhatsApp',
    nota: 'Cada video tiene su propio enlace: al compartirlo, se abre directo en ese video.',
    mensaje: (titulo: string) => `Mira este video de Lupe Negrete, candidato a Comisionado del Precinto 4: “${titulo}”`
  },
  en: {
    kicker: 'The campaign on video',
    h2: 'Lupe, street by street',
    sub: 'Walks through the colonias and interviews where he lays out every plan. Watch them and share them with your neighbors.',
    filtros: 'Filter videos by topic',
    todos: 'All',
    temas: {
      pavimentacion: 'Paving',
      seguridad: 'Safety',
      transparencia: 'Transparency',
      comunidad: 'Community'
    } as Record<TemaVideo, string>,
    terreno: 'On the ground',
    terrenoMeta: 'Vertical video',
    entrevistas: 'Interviews',
    entrevistasMeta: 'EPTVN · Eagle Pass Texas News',
    entrevista: 'Interview',
    anteriores: 'Previous videos',
    siguientes: 'More videos',
    reproducir: 'Play',
    reproduciendo: 'Now playing',
    lista: 'Playlist',
    videos: 'videos',
    compartirEn: 'Share on',
    masOpciones: 'More ways to share',
    copiar: 'Copy link',
    copiado: 'Link copied',
    mas: 'More…',
    descargar: 'Download for your WhatsApp status',
    nota: 'Every video has its own link: when you share it, it opens right on that video.',
    mensaje: (titulo: string) => `Watch this video from Lupe Negrete, candidate for Precinct 4 Commissioner: “${titulo}”`
  }
};

const SITE = 'https://lupenegrete.com';

/** Enlace público de un video: la portada del idioma abierta en ese video. */
export function enlaceVideo(v: VideoCampana, lang: Lang): string {
  return `${SITE}/${lang}/#video-${v.id}`;
}

export function enlacesCompartir(v: VideoCampana, lang: Lang) {
  const url = enlaceVideo(v, lang);
  const texto = GALERIA_COPY[lang].mensaje(v.titulo[lang]);
  return {
    url,
    texto,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${texto} ${url}`)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
  };
}
