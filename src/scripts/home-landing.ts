// Comportamiento propio de la home: recordatorio .ics, formulario de registro
// y el mapa satelital. Lo compartido con el resto del sitio (reveal, parallax,
// cabecera, barra fija, menú, idioma) vive en site-chrome.
import './site-chrome';
import { submitLead } from '../lib/leads';

const isEs = document.documentElement.lang !== 'en';

/* ---------- Panel del recordatorio ---------- */
const remBtn = document.querySelector<HTMLButtonElement>('[data-rem-toggle]');
const remPanel = document.querySelector<HTMLElement>('[data-rem-panel]');
const remCaret = document.querySelector<HTMLElement>('[data-rem-caret]');
remBtn?.addEventListener('click', () => {
  const open = remPanel?.hasAttribute('data-open');
  if (open) remPanel?.removeAttribute('data-open');
  else remPanel?.setAttribute('data-open', '');
  remBtn.setAttribute('aria-expanded', open ? 'false' : 'true');
  if (remCaret) remCaret.style.transform = open ? 'rotate(0deg)' : 'rotate(180deg)';
});

/* ---------- Recordatorio .ics ---------- */
function buildIcs(): string {
  const pad = (n: number) => (n < 10 ? '0' + n : '' + n);
  const now = new Date();
  const stamp =
    now.getUTCFullYear() +
    pad(now.getUTCMonth() + 1) +
    pad(now.getUTCDate()) +
    'T' +
    pad(now.getUTCHours()) +
    pad(now.getUTCMinutes()) +
    pad(now.getUTCSeconds()) +
    'Z';
  const ev = [
    {
      uid: 'ln-registro',
      s: '20261005',
      e: '20261006',
      t: isEs
        ? 'Cierre de registro de votantes · Condado de Maverick'
        : 'Voter registration deadline · Maverick County',
      d: isEs
        ? 'Último día para inscribirte en el padrón para la elección del 3 de noviembre de 2026.'
        : 'Last day to register to vote in the November 3, 2026 election.'
    },
    {
      uid: 'ln-temprana',
      s: '20261019',
      e: '20261031',
      t: isEs ? 'Votación temprana · Precinto 4' : 'Early voting · Precinct 4',
      d: isEs
        ? 'Votación temprana del 19 al 30 de octubre en el Courthouse Annex o Seco Mines.'
        : 'Early voting October 19–30 at the Courthouse Annex or Seco Mines.'
    },
    {
      uid: 'ln-eleccion',
      s: '20261103',
      e: '20261104',
      t: isEs
        ? 'Día de elección · Comisionado Precinto 4'
        : 'Election day · Precinct 4 Commissioner',
      d: isEs
        ? 'Urnas abiertas de 7:00 AM a 7:00 PM. Lleva identificación válida de Texas.'
        : 'Polls open 7:00 AM to 7:00 PM. Bring valid Texas photo ID.'
    }
  ];
  const esc = (s: string) =>
    String(s)
      .replace(/([,;\\])/g, '\\$1')
      .replace(/\n/g, '\\n');
  let out = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Lupe Negrete Precinto 4//ES',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH'
  ];
  ev.forEach((x) => {
    out = out.concat([
      'BEGIN:VEVENT',
      'UID:' + x.uid + '-2026@lupenegrete.com',
      'DTSTAMP:' + stamp,
      'DTSTART;VALUE=DATE:' + x.s,
      'DTEND;VALUE=DATE:' + x.e,
      'SUMMARY:' + esc(x.t),
      'DESCRIPTION:' + esc(x.d),
      'LOCATION:' + esc('Eagle Pass, TX'),
      'BEGIN:VALARM',
      'TRIGGER:-P1D',
      'ACTION:DISPLAY',
      'DESCRIPTION:' + esc(x.t),
      'END:VALARM',
      'END:VEVENT'
    ]);
  });
  out.push('END:VCALENDAR');
  return out.join('\r\n');
}

document.querySelector<HTMLButtonElement>('[data-ics]')?.addEventListener('click', () => {
  try {
    const blob = new Blob([buildIcs()], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'elecciones-2026-precinto-4.ics';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 2000);
    document.querySelector('[data-ics-done]')?.setAttribute('data-open', '');
  } catch (e) {
    /* si el navegador bloquea la descarga, el resto de la página sigue igual */
  }
});

/* ---------- Formulario de registro ---------- */
const form = document.querySelector<HTMLFormElement>('[data-signup]');
form?.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  const data = new FormData(form);
  const lang = (form.dataset.lang === 'en' ? 'en' : 'es') as 'es' | 'en';
  await submitLead({
    name: String(data.get('nombre') || ''),
    email: String(data.get('email') || ''),
    phone: String(data.get('telefono') || ''),
    zip: String(data.get('zip') || ''),
    formLocation: 'hero',
    lang
  });
  form.closest('[data-form-wrap]')?.setAttribute('data-sent', '');
});

/* ---------- Mapa satelital del Precinto 4 ---------- */
function setupMap() {
  const host = document.querySelector<HTMLElement>('[data-map]');
  if (!host || host.dataset.mapReady) return;
  const L = (window as any).L;
  if (!L) {
    setTimeout(setupMap, 200);
    return;
  }
  host.dataset.mapReady = '1';
  const map = L.map(host, {
    center: [28.705, -100.49],
    zoom: 13,
    minZoom: 9,
    maxZoom: 18,
    scrollWheelZoom: false,
    attributionControl: true,
    zoomControl: false
  });
  L.control.zoom({ position: 'bottomleft' }).addTo(map);
  L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    { maxZoom: 18, attribution: 'Imágenes: Esri, Maxar, Earthstar Geographics' }
  ).addTo(map);
  L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}',
    { maxZoom: 18, opacity: 0.9 }
  ).addTo(map);
  L.marker([28.7091, -100.4995], {
    icon: L.divIcon({
      className: '',
      iconSize: [16, 16],
      iconAnchor: [8, 8],
      html: '<span style="display:block;width:16px;height:16px;border-radius:50%;background:#FF3131;border:3px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,.5)"></span>'
    })
  })
    .addTo(map)
    .bindPopup(isEs ? 'Eagle Pass, Condado de Maverick' : 'Eagle Pass, Maverick County');
  // Click para activar la rueda: así el scroll de la página nunca queda atrapado.
  map.on('click', () => map.scrollWheelZoom.enable());
  map.on('mouseout', () => map.scrollWheelZoom.disable());
  setTimeout(() => map.invalidateSize(), 250);
}

setupMap();
