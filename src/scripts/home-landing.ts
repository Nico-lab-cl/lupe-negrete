// Comportamiento de la landing "Home Lupe Negrete", portado desde la lógica
// del componente de Claude Design (support.js / class Component).
import { submitLead } from '../lib/leads';

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isEs = document.documentElement.lang !== 'en';

/* ---------- Cuenta regresiva ---------- */
function diasRestantes(): number {
  const eleccion = new Date(2026, 10, 3);
  return Math.max(0, Math.ceil((eleccion.getTime() - Date.now()) / 86400000));
}

const dias = diasRestantes();
document.querySelectorAll<HTMLElement>('[data-days]').forEach((el) => {
  el.textContent = String(dias);
});

/* ---------- Conteo animado ---------- */
function setupCount() {
  const els = Array.from(document.querySelectorAll<HTMLElement>('[data-cu]'));
  if (!els.length || reduce || typeof IntersectionObserver !== 'function') return;
  const io = new IntersectionObserver(
    (ents) => {
      ents.forEach((en) => {
        if (!en.isIntersecting) return;
        const el = en.target as HTMLElement;
        io.unobserve(el);
        const target = parseInt(el.textContent || '', 10);
        if (!isFinite(target)) return;
        const t0 = performance.now();
        const step = (t: number) => {
          const p = Math.min(1, (t - t0) / 1100);
          el.textContent = String(Math.round(target * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      });
    },
    { threshold: 0.6 }
  );
  els.forEach((el) => io.observe(el));
}

/* ---------- Reveal al hacer scroll ---------- */
function reveal(el: HTMLElement) {
  if (el.dataset.rvDone) return;
  el.dataset.rvDone = '1';
  const d = parseFloat(el.getAttribute('data-rv') || '0') || 0;
  el.style.opacity = '';
  el.style.animation = 'lnRv .78s cubic-bezier(.16,1,.3,1) ' + d + 's both';
}

function setupReveal() {
  const els = Array.from(document.querySelectorAll<HTMLElement>('[data-rv]'));
  if (reduce || typeof IntersectionObserver !== 'function') {
    els.forEach((el) => {
      el.dataset.rvDone = '1';
      el.style.opacity = '';
    });
    return;
  }
  const io = new IntersectionObserver(
    (ents) => {
      ents.forEach((en) => {
        if (!en.isIntersecting) return;
        reveal(en.target as HTMLElement);
        io.unobserve(en.target);
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -6% 0px' }
  );
  els.forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
      reveal(el);
      return;
    }
    el.style.opacity = '0';
    io.observe(el);
  });
  // El reveal nunca puede dejar contenido varado: lo que el observer no haya
  // entregado en 1.4s se muestra sin condiciones.
  setTimeout(() => {
    els.forEach((el) => {
      if (el.dataset.rvDone) return;
      el.dataset.rvDone = '1';
      el.style.opacity = '';
      el.style.animation = '';
    });
  }, 1400);
}

/* ---------- Header compacto, parallax y barra fija ---------- */
function scrollY(): number {
  const de = document.documentElement;
  const y = window.scrollY || window.pageYOffset || (de && de.scrollTop) || 0;
  if (y) return y;
  const hdr = document.querySelector('[data-hdr]');
  if (hdr) {
    const t = hdr.getBoundingClientRect().top;
    if (t < 0) return -t;
  }
  return 0;
}

function tick() {
  const y = scrollY();
  const vh = window.innerHeight;
  const small = y > 60;

  const hdr = document.querySelector<HTMLElement>('[data-hdr]');
  const row = document.querySelector<HTMLElement>('[data-hdr-row]');
  const logo = document.querySelector<HTMLElement>('[data-hdr-logo]');
  if (hdr) hdr.style.boxShadow = small ? '0 8px 28px rgba(6,19,43,.13)' : 'none';
  if (row) {
    row.style.minHeight = small ? '56px' : '72px';
    row.style.paddingTop = small ? '4px' : '10px';
    row.style.paddingBottom = small ? '4px' : '10px';
  }
  if (logo) logo.style.width = small ? 'clamp(142px,14vw,176px)' : 'clamp(180px,18vw,238px)';

  if (!reduce) {
    document.querySelectorAll<HTMLElement>('[data-px]').forEach((el) => {
      const sp = parseFloat(el.getAttribute('data-px') || '0') || 0;
      const base = el.getAttribute('data-pxb') || '';
      const r = el.getBoundingClientRect();
      const off = (r.top + r.height / 2 - vh / 2) * -sp;
      el.style.transform = base + ' translate3d(0,' + off.toFixed(1) + 'px,0)';
    });
  }

  const bar = document.querySelector<HTMLElement>('[data-bar]');
  if (bar) bar.style.transform = y > vh * 0.9 ? 'translateY(0)' : 'translateY(130%)';
}

let raf = 0;
function onScroll() {
  if (raf) return;
  raf = requestAnimationFrame(() => {
    raf = 0;
    tick();
  });
}

/* ---------- Menú móvil ---------- */
const header = document.querySelector<HTMLElement>('[data-hdr]');
const menuBtn = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
menuBtn?.addEventListener('click', () => {
  const open = header?.hasAttribute('data-open');
  if (open) header?.removeAttribute('data-open');
  else header?.setAttribute('data-open', '');
  menuBtn.setAttribute('aria-expanded', open ? 'false' : 'true');
});
document.querySelectorAll('[data-menu-close]').forEach((el) => {
  el.addEventListener('click', () => {
    header?.removeAttribute('data-open');
    menuBtn?.setAttribute('aria-expanded', 'false');
  });
});

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

/* ---------- Selector de idioma: recuerda la preferencia ---------- */
document.querySelectorAll<HTMLAnchorElement>('[data-lang-switch]').forEach((el) => {
  el.addEventListener('click', () => {
    const next = el.dataset.langSwitch === 'en' ? 'en' : 'es';
    try {
      localStorage.setItem('preferred_lang', next);
      localStorage.setItem('ln-lang', next);
    } catch (err) {
      /* almacenamiento bloqueado: la navegación funciona igual */
    }
  });
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

setupReveal();
setupCount();
setupMap();
window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('resize', onScroll, { passive: true });
tick();
