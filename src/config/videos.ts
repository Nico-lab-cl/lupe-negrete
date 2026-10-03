// Videos de la galería de la portada, en el orden en que se muestran.
//
// Para agregar uno:
//   1. Comprime el video y súbelo a public/videos/ (los verticales a 720x1280,
//      las entrevistas a 1280x720) junto con su portada .webp.
//   2. Agrega una entrada aquí. `id` es lo que va en el enlace para compartir
//      (lupenegrete.com/es/#video-<id>), así que no lo cambies una vez publicado.
//
// formato: 'vertical'  -> fila "En el terreno" (9:16, grabado para redes)
//          'entrevista' -> fila "Entrevistas" (16:9)
// temas: decide en qué filtros aparece el video.

export type TemaVideo = 'pavimentacion' | 'seguridad' | 'transparencia' | 'comunidad';

export interface VideoCampana {
  id: string;
  formato: 'vertical' | 'entrevista';
  src: string;
  portada: string;
  duracion: string;
  temas: TemaVideo[];
  titulo: { es: string; en: string };
  etiqueta: { es: string; en: string };
  alt: { es: string; en: string };
}

export const VIDEOS: VideoCampana[] = [
  {
    id: 'conoce-a-lupe',
    formato: 'vertical',
    src: '/videos/quien-es-lupe.mp4',
    portada: '/videos/quien-es-lupe-cover.webp',
    duracion: '0:40',
    temas: ['comunidad'],
    titulo: { es: 'Conoce a Lupe Negrete', en: 'Meet Lupe Negrete' },
    etiqueta: { es: 'Conoce a Lupe', en: 'Meet Lupe' },
    alt: {
      es: 'Lupe Negrete frente a unas casas del Precinto 4',
      en: 'Lupe Negrete in front of homes in Precinct 4'
    }
  },
  {
    id: 'necesidades-comunidad',
    formato: 'vertical',
    src: '/videos/necesidades-comunidad.mp4',
    portada: '/videos/necesidades-comunidad-cover.webp',
    duracion: '0:48',
    temas: ['comunidad', 'pavimentacion'],
    titulo: {
      es: 'Conozco las necesidades de mi comunidad',
      en: 'I know what my community needs'
    },
    etiqueta: { es: 'Comunidad', en: 'Community' },
    alt: {
      es: 'Lupe Negrete en un camino de tierra de Loma Bonita',
      en: 'Lupe Negrete on a dirt road in Loma Bonita'
    }
  },
  {
    id: 'loma-bonita-loop-480',
    formato: 'vertical',
    src: '/videos/loma-bonita-loop-480.mp4',
    portada: '/videos/loma-bonita-loop-480-cover.webp',
    duracion: '0:49',
    temas: ['pavimentacion'],
    titulo: { es: 'De Loma Bonita al Loop 480', en: 'From Loma Bonita to Loop 480' },
    etiqueta: { es: 'Pavimentación', en: 'Paving' },
    alt: {
      es: 'Lupe Negrete señala el camino de Loma Bonita hacia el Loop 480',
      en: 'Lupe Negrete points down the road from Loma Bonita to Loop 480'
    }
  },
  {
    id: 'mas-luz-mas-seguridad',
    formato: 'vertical',
    src: '/videos/mas-luz-mas-seguridad-vertical.mp4',
    portada: '/videos/mas-luz-mas-seguridad-cover.webp',
    duracion: '0:29',
    temas: ['seguridad'],
    titulo: { es: 'Más luz, más seguridad', en: 'More light, more safety' },
    etiqueta: { es: 'Seguridad', en: 'Safety' },
    alt: {
      es: 'Lupe Negrete al atardecer en una calle sin alumbrado de Loma Bonita',
      en: 'Lupe Negrete at dusk on an unlit street in Loma Bonita'
    }
  },
  {
    id: 'servir-es-actuar',
    formato: 'vertical',
    src: '/videos/servir-es-actuar.mp4',
    portada: '/videos/servir-es-actuar-cover.webp',
    duracion: '0:45',
    temas: ['comunidad'],
    titulo: { es: 'Servir también es actuar', en: 'Serving means showing up' },
    etiqueta: { es: 'Limpieza', en: 'Clean-up' },
    alt: {
      es: 'Lupe Negrete junto a un montón de llantas tiradas en un terreno',
      en: 'Lupe Negrete next to a pile of dumped tires on a vacant lot'
    }
  },
  {
    id: 'spot-principal',
    formato: 'vertical',
    src: '/videos/spot-principal.mp4',
    portada: '/videos/spot-principal-poster.webp',
    duracion: '0:39',
    temas: ['comunidad'],
    titulo: { es: 'Spot principal', en: 'Main spot' },
    etiqueta: { es: 'Campaña', en: 'Campaign' },
    alt: {
      es: 'Lupe Negrete con micrófono hablando ante vecinos',
      en: 'Lupe Negrete speaking to neighbors with a microphone'
    }
  },
  {
    id: 'voces-precinto-4',
    formato: 'vertical',
    src: '/videos/voces-precinto-4.mp4',
    portada: '/videos/voces-precinto-4-poster.webp',
    duracion: '0:29',
    temas: ['comunidad'],
    titulo: { es: 'Voces del Precinto 4', en: 'Voices of Precinct 4' },
    etiqueta: { es: 'Comunidad', en: 'Community' },
    alt: {
      es: 'Un vecino instalando un letrero de campaña de Lupe Negrete',
      en: 'A neighbor putting up a Lupe Negrete campaign sign'
    }
  },
  {
    id: 'ahorro-con-liderazgo',
    formato: 'entrevista',
    src: '/videos/entrevista-ahorro.mp4',
    portada: '/videos/entrevista-ahorro-cover.webp',
    duracion: '0:42',
    temas: ['transparencia'],
    titulo: { es: 'Así se ahorra con liderazgo', en: 'Leadership that saves your money' },
    etiqueta: { es: 'Transparencia', en: 'Transparency' },
    alt: {
      es: 'Lupe Negrete en entrevista en el estudio de EPTVN',
      en: 'Lupe Negrete interviewed in the EPTVN studio'
    }
  },
  {
    id: 'un-plan-detras',
    formato: 'entrevista',
    src: '/videos/entrevista-plan.mp4',
    portada: '/videos/entrevista-plan-cover.webp',
    duracion: '0:31',
    temas: ['pavimentacion', 'seguridad', 'transparencia'],
    titulo: { es: 'Un plan detrás de cada propuesta', en: 'A plan behind every promise' },
    etiqueta: { es: 'Propuestas', en: 'Our plan' },
    alt: {
      es: 'Lupe Negrete explica sus propuestas en entrevista con EPTVN',
      en: 'Lupe Negrete explains his plan in an EPTVN interview'
    }
  },
  {
    id: 'servir-con-acciones',
    formato: 'entrevista',
    src: '/videos/entrevista-acciones.mp4',
    portada: '/videos/entrevista-acciones-cover.webp',
    duracion: '1:13',
    temas: ['comunidad'],
    titulo: { es: 'Servir con acciones', en: 'Actions, not slogans' },
    etiqueta: { es: 'Comunidad', en: 'Community' },
    alt: {
      es: 'Lupe Negrete conversa en el estudio de EPTVN',
      en: 'Lupe Negrete in conversation at the EPTVN studio'
    }
  }
];
