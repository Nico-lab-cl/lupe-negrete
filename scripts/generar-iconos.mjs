// Genera el favicon y los iconos de pantalla de inicio:
//
//   node scripts/generar-iconos.mjs
//
// La marca es la insignia "P4" que ya usa la portada: el logotipo completo es
// una placa alargada que a 16 px se vuelve una mancha ilegible, mientras que
// las dos letras del precinto se leen incluso en la pestaña del navegador.
import sharp from 'sharp';
import fs from 'node:fs';

const NAVY = '#06132B';
const ROJO = '#D3151D';

function marca(lado, { radio = 0, fondo = ROJO } = {}) {
  const barra = Math.round(lado * 0.09);
  return Buffer.from(
    `<svg width="${lado}" height="${lado}" xmlns="http://www.w3.org/2000/svg">
       <rect width="${lado}" height="${lado}" rx="${radio}" fill="${fondo}"/>
       <rect y="${lado - barra}" width="${lado}" height="${barra}" fill="${NAVY}"/>
       <text x="50%" y="${lado * 0.74}" text-anchor="middle"
             font-family="Impact, 'Saira Condensed', sans-serif"
             font-size="${lado * 0.78}" fill="#ffffff">P4</text>
     </svg>`
  );
}

/** ICO con PNG dentro: el formato que entienden todos los navegadores vivos. */
function empaquetarIco(imagenes) {
  const cabecera = Buffer.alloc(6);
  cabecera.writeUInt16LE(0, 0); // reservado
  cabecera.writeUInt16LE(1, 2); // tipo: icono
  cabecera.writeUInt16LE(imagenes.length, 4);

  let desplazamiento = 6 + imagenes.length * 16;
  const entradas = [];
  for (const { lado, png } of imagenes) {
    const e = Buffer.alloc(16);
    e.writeUInt8(lado >= 256 ? 0 : lado, 0);
    e.writeUInt8(lado >= 256 ? 0 : lado, 1);
    e.writeUInt8(0, 2); // paleta
    e.writeUInt8(0, 3); // reservado
    e.writeUInt16LE(1, 4); // planos
    e.writeUInt16LE(32, 6); // bits por pixel
    e.writeUInt32LE(png.length, 8);
    e.writeUInt32LE(desplazamiento, 12);
    desplazamiento += png.length;
    entradas.push(e);
  }

  return Buffer.concat([cabecera, ...entradas, ...imagenes.map((i) => i.png)]);
}

const pngs = {};
for (const lado of [16, 32, 180, 192, 512]) {
  const radio = lado >= 180 ? Math.round(lado * 0.18) : 0;
  pngs[lado] = await sharp(marca(lado, { radio })).png().toBuffer();
}

fs.writeFileSync('public/favicon.ico', empaquetarIco([
  { lado: 16, png: pngs[16] },
  { lado: 32, png: pngs[32] }
]));
fs.writeFileSync('public/favicon-32.png', pngs[32]);
fs.writeFileSync('public/apple-touch-icon.png', pngs[180]);
fs.writeFileSync('public/icon-192.png', pngs[192]);
fs.writeFileSync('public/icon-512.png', pngs[512]);

fs.writeFileSync(
  'public/site.webmanifest',
  JSON.stringify(
    {
      name: 'Guadalupe "Lupe" Negrete · Comisionado Precinto 4',
      short_name: 'Lupe Negrete',
      start_url: '/es/',
      display: 'browser',
      background_color: NAVY,
      theme_color: NAVY,
      icons: [
        { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
        { src: '/icon-512.png', sizes: '512x512', type: 'image/png' }
      ]
    },
    null,
    2
  ) + '\n'
);

console.log('iconos y manifiesto generados');
