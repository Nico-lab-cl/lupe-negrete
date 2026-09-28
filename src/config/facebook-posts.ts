// Publicaciones de Facebook que se muestran en el carrusel de la portada,
// de la mas reciente a la mas antigua.
//
// Para agregar una: en Facebook, abre la publicacion, copia el enlace
// (menu "..." > "Copiar enlace", o la barra de direcciones) y pegalo arriba.
//   - Post con foto o texto  -> tipo: 'post'
//   - Video o reel           -> tipo: 'video'
//       vertical: true  si es 9:16 (reels de celular); se muestra sin texto
//                       para que quepa en la tarjeta.
//       vertical: false si es horizontal; se muestra con el texto debajo.
//
// Conviene dejar entre 5 y 10: mas tarjetas cargan mas iframes de Facebook.

export interface FacebookPost {
  url: string;
  tipo: 'post' | 'video';
  vertical?: boolean;
}

const PAGINA = '&id=61593650286694';
const permalink = (storyFbid: string) =>
  `https://www.facebook.com/permalink.php?story_fbid=${storyFbid}${PAGINA}`;

export const FACEBOOK_POSTS: FacebookPost[] = [
  // Fechas de votacion anticipada y dia de la eleccion
  {
    url: permalink('pfbid02C3pCXoVH4PYcYSiWsRKUsm7hdn6AwR3HjbaDK1HK9NKkBHiMsTLBX3JMXNBmdZH3l'),
    tipo: 'post'
  },
  // "Development, yes. With our community."
  { url: 'https://www.facebook.com/reel/1417810957081149/', tipo: 'video', vertical: true },
  {
    url: permalink('pfbid0275cHJxk367yXZH6eQF45k662ZntEi3fn1Kkci9P2pQKW67bX1uzfsoDH8w9obMgJl'),
    tipo: 'post'
  },
  // Fragmento de la entrevista con EPTXN
  { url: 'https://www.facebook.com/reel/1066211572954417/', tipo: 'video', vertical: false },
  {
    url: permalink('pfbid0Suoy3SsUGncCGZydvn3YLqAFhhMmuqDxCpDMeyyY6kmTC8HekAvcBan8UErCU22El'),
    tipo: 'post'
  }
];
