// Genera las tarjetas que se ven al compartir el sitio (Open Graph / Twitter).
//
// Se construyen aquí, no a mano en un editor, para que sigan los colores y los
// activos reales de la campaña y se puedan rehacer cuando cambie el logo, la
// foto o la fecha de la elección:
//
//   node scripts/generar-og.mjs
//
// Salen dos archivos de 1200x630 (la proporción que recortan Facebook,
// WhatsApp, LinkedIn y X): uno por idioma. En JPEG a propósito: WhatsApp no
// genera vista previa con WebP, y WhatsApp es por donde más se comparte una
// campaña local.
import sharp from 'sharp';

const ANCHO = 1200;
const ALTO = 630;
const NAVY = '#06132B';
const ROJO = '#D3151D';
const ROJO_VIVO = '#FF3131';

const TARJETAS = [
  {
    salida: 'public/images/og-es.jpg',
    logo: 'public/images/logo-es.png',
    lema1: 'EXPERIENCIA, INTEGRIDAD',
    lema2: 'Y HONESTIDAD',
    pie: 'Comisionado · Precinto 4 · Condado de Maverick, Texas',
    fecha: 'ELECCIÓN · 3 DE NOVIEMBRE DE 2026'
  },
  {
    salida: 'public/images/og-en.jpg',
    logo: 'public/images/logo-en.png',
    lema1: 'EXPERIENCE, INTEGRITY',
    lema2: 'AND HONESTY',
    pie: 'County Commissioner · Precinct 4 · Maverick County, Texas',
    fecha: 'ELECTION · NOVEMBER 3, 2026'
  }
];

// El retrato entra por la derecha y se disuelve en el navy, igual que en la
// portada: la tarjeta y el sitio se leen como la misma pieza.
async function retrato() {
  const foto = await sharp('public/images/lupe-retrato-1100.webp')
    .resize(560, ALTO, { fit: 'cover', position: 'top' })
    .toBuffer();

  const mascara = Buffer.from(
    `<svg width="560" height="${ALTO}" xmlns="http://www.w3.org/2000/svg">
       <defs><linearGradient id="g" x1="0" x2="1">
         <stop offset="0" stop-color="#fff" stop-opacity="0"/>
         <stop offset="0.42" stop-color="#fff" stop-opacity="0.92"/>
         <stop offset="0.7" stop-color="#fff" stop-opacity="1"/>
       </linearGradient></defs>
       <rect width="560" height="${ALTO}" fill="url(#g)"/>
     </svg>`
  );

  return sharp(foto)
    .composite([{ input: mascara, blend: 'dest-in' }])
    .png()
    .toBuffer();
}

function capaTexto({ lema1, lema2, pie, fecha }) {
  // Impact es la condensada que existe en cualquier Windows y la más cercana
  // a la Saira Condensed del sitio; el texto pequeño va en Arial.
  return Buffer.from(
    `<svg width="${ANCHO}" height="${ALTO}" xmlns="http://www.w3.org/2000/svg">
       <style>
         .lema { font-family: Impact, 'Saira Condensed', sans-serif; font-size: 50px; letter-spacing: .5px; }
         .pie  { font-family: Arial, sans-serif; font-size: 20px; fill: #9FB0C9; }
         .fecha{ font-family: Impact, 'Saira Condensed', sans-serif; font-size: 25px; fill: #fff; letter-spacing: 1px; }
       </style>
       <rect x="0" y="${ALTO - 10}" width="${ANCHO}" height="10" fill="${ROJO}"/>
       <text class="lema" x="66" y="392" fill="#ffffff">${lema1}</text>
       <text class="lema" x="66" y="450" fill="${ROJO_VIVO}">${lema2}</text>
       <text class="pie" x="66" y="492">${pie}</text>
       <rect x="66" y="520" width="452" height="52" fill="${ROJO}"/>
       <text class="fecha" x="86" y="554">${fecha}</text>
     </svg>`
  );
}

for (const t of TARJETAS) {
  // El logo viene en un lienzo cuadrado con mucho aire: se recorta la banda
  // que ocupa la placa antes de escalarlo.
  const logo = await sharp(t.logo)
    .extract({ left: 0, top: 590, width: 1900, height: 920 })
    .resize(430)
    .toBuffer();

  const info = await sharp({
    create: { width: ANCHO, height: ALTO, channels: 4, background: NAVY }
  })
    .composite([
      { input: await retrato(), left: ANCHO - 560, top: 0 },
      { input: logo, left: 66, top: 104 },
      { input: capaTexto(t), left: 0, top: 0 }
    ])
    .jpeg({ quality: 86, chromaSubsampling: '4:4:4' })
    .toFile(t.salida);

  console.log(t.salida, info.width + 'x' + info.height, Math.round(info.size / 1024) + 'KB');
}
