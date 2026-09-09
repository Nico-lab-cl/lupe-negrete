// Comportamiento compartido por todas las páginas con el estilo de la home:
// cuenta regresiva, reveal al hacer scroll, parallax, cabecera que encoge,
// barra fija inferior, menú móvil y memoria del idioma elegido.

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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

setupReveal();
setupCount();
window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('resize', onScroll, { passive: true });
tick();

export { reduce };
