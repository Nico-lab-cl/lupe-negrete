// Votación anticipada del 19 al 30 de octubre de 2026: lugar, horario oficial
// y el mensaje que toca mostrar según el día y la hora.
//
// Las páginas se prerenderizan en el build, así que el estado ("abierto hoy",
// "mañana abre a las 7") no puede calcularse en el servidor: quedaría
// congelado en la fecha del último despliegue. Lo calcula el navegador al
// cargar (scripts/votacion-anticipada.ts) con la hora de Eagle Pass, no la del
// teléfono, para que alguien con el reloj en otra zona vea lo mismo.
//
// Fuente: Maverick County Elections Department (830-757-4175), publicado por
// el Eagle Pass Business Journal el 27 de septiembre de 2026.
import type { Lang } from './i18n';

export const SITIO_ANTICIPADA = {
  nombre: 'Multi-Purpose Center',
  direccion: '480 S. Adams St.',
  ciudad: 'Eagle Pass, TX 78852',
  maps: 'https://www.google.com/maps/search/?api=1&query=Multi-Purpose+Center+480+S+Adams+St+Eagle+Pass+TX+78852'
};

/** Un día de votación anticipada; abre y cierra en horas de 0 a 24, hora central. */
export interface DiaAnticipada {
  fecha: string; // YYYY-MM-DD
  abre: number;
  cierra: number;
}

const dia = (d: number, abre: number, cierra: number): DiaAnticipada => ({
  fecha: `2026-10-${String(d).padStart(2, '0')}`,
  abre,
  cierra
});

export const HORARIO_ANTICIPADA: DiaAnticipada[] = [
  dia(19, 8, 17),
  dia(20, 8, 17),
  dia(21, 8, 17),
  dia(22, 8, 17),
  dia(23, 8, 17),
  dia(24, 7, 19),
  dia(25, 9, 15),
  dia(26, 7, 19),
  dia(27, 7, 19),
  dia(28, 7, 19),
  dia(29, 7, 19),
  dia(30, 7, 19)
];

export const DIA_ELECCION = '2026-11-03';

/** El horario agrupado como lo publica el condado, para pintarlo en tablas. */
export const TRAMOS_ANTICIPADA = [
  { desde: '2026-10-19', hasta: '2026-10-23', es: 'Lun 19 – Vie 23 oct', en: 'Mon 19 – Fri 23 Oct', abre: 8, cierra: 17 },
  { desde: '2026-10-24', hasta: '2026-10-24', es: 'Sábado 24 oct', en: 'Saturday Oct 24', abre: 7, cierra: 19 },
  { desde: '2026-10-25', hasta: '2026-10-25', es: 'Domingo 25 oct', en: 'Sunday Oct 25', abre: 9, cierra: 15 },
  { desde: '2026-10-26', hasta: '2026-10-30', es: 'Lun 26 – Vie 30 oct', en: 'Mon 26 – Fri 30 Oct', abre: 7, cierra: 19 }
];

export function hora(h: number): string {
  if (h === 12) return '12 PM';
  return h < 12 ? `${h} AM` : `${h - 12} PM`;
}

export function rango(abre: number, cierra: number): string {
  return `${hora(abre)} – ${hora(cierra)}`;
}

/** Rango para una frase: 'de 8 AM a 5 PM' / '8 AM to 5 PM'. */
function rangoFrase(abre: number, cierra: number, lang: Lang): string {
  return lang === 'es' ? `de ${hora(abre)} a ${hora(cierra)}` : `${hora(abre)} to ${hora(cierra)}`;
}

/** Rango compacto para la barra roja: '8 AM–5 PM'. */
function rangoCorto(abre: number, cierra: number): string {
  return `${hora(abre)}–${hora(cierra)}`;
}

export type FaseAnticipada =
  | 'antes' // todavía no empieza (y no es la víspera)
  | 'manana' // víspera: mañana empieza
  | 'abierto' // hoy se vota y está abierto ahora mismo
  | 'abreHoy' // hoy se vota pero todavía no abre
  | 'cerradoHoy' // hoy ya cerró y mañana vuelve a abrir
  | 'entre' // terminó la anticipada; falta el día de la elección
  | 'eleccion' // 3 de noviembre
  | 'fin'; // ya pasó todo

export interface EstadoAnticipada {
  fase: FaseAnticipada;
  hoy: string;
  diaHoy?: DiaAnticipada;
  diaSiguiente?: DiaAnticipada;
  diasParaEmpezar: number;
}

/** Fecha (YYYY-MM-DD) y hora decimal en Eagle Pass, Texas. */
export function ahoraEnEaglePass(fecha: Date = new Date()): { hoy: string; h: number } {
  try {
    const partes = new Intl.DateTimeFormat('en-CA', {
      timeZone: 'America/Chicago',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hourCycle: 'h23'
    }).formatToParts(fecha);
    const v = (t: string) => partes.find((p) => p.type === t)?.value ?? '00';
    return { hoy: `${v('year')}-${v('month')}-${v('day')}`, h: Number(v('hour')) + Number(v('minute')) / 60 };
  } catch {
    // Navegadores sin datos de zonas horarias: la hora del propio teléfono,
    // que en Eagle Pass coincide.
    const p = (n: number) => String(n).padStart(2, '0');
    return {
      hoy: `${fecha.getFullYear()}-${p(fecha.getMonth() + 1)}-${p(fecha.getDate())}`,
      h: fecha.getHours() + fecha.getMinutes() / 60
    };
  }
}

function diasEntre(a: string, b: string): number {
  return Math.round((Date.parse(b + 'T00:00:00Z') - Date.parse(a + 'T00:00:00Z')) / 86400000);
}

export function estadoAnticipada(fecha: Date = new Date()): EstadoAnticipada {
  const { hoy, h } = ahoraEnEaglePass(fecha);
  const primero = HORARIO_ANTICIPADA[0];
  const ultimo = HORARIO_ANTICIPADA[HORARIO_ANTICIPADA.length - 1];
  const diasParaEmpezar = Math.max(0, diasEntre(hoy, primero.fecha));
  const i = HORARIO_ANTICIPADA.findIndex((d) => d.fecha === hoy);
  const diaHoy = i >= 0 ? HORARIO_ANTICIPADA[i] : undefined;
  const diaSiguiente = i >= 0 ? HORARIO_ANTICIPADA[i + 1] : undefined;
  const base = { hoy, diaHoy, diaSiguiente, diasParaEmpezar };

  if (hoy < primero.fecha) {
    return { ...base, fase: diasParaEmpezar === 1 ? 'manana' : 'antes', diaSiguiente: primero };
  }
  if (diaHoy) {
    if (h < diaHoy.abre) return { ...base, fase: 'abreHoy' };
    if (h < diaHoy.cierra) return { ...base, fase: 'abierto' };
    if (diaSiguiente) return { ...base, fase: 'cerradoHoy' };
    return { ...base, fase: 'entre' };
  }
  if (hoy > ultimo.fecha && hoy < DIA_ELECCION) return { ...base, fase: 'entre' };
  if (hoy === DIA_ELECCION) return { ...base, fase: 'eleccion' };
  return { ...base, fase: 'fin' };
}

export interface TextosAnticipada {
  /** Frase corta para la barra roja (cabe en dos renglones de móvil). */
  barra: string;
  /** Titular grande de la franja y del aviso. */
  titulo: string;
  /** Una línea de apoyo bajo el titular. */
  detalle: string;
}

const DIAS_ES = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
const DIAS_EN = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function nombreDia(f: string, lang: Lang): string {
  const n = new Date(f + 'T12:00:00Z').getUTCDay();
  const d = Number(f.slice(8, 10));
  return lang === 'es' ? `${DIAS_ES[n]} ${d} de octubre` : `${DIAS_EN[n]}, October ${d}`;
}

export function textosAnticipada(e: EstadoAnticipada, lang: Lang): TextosAnticipada {
  const es = lang === 'es';
  const lugar = SITIO_ANTICIPADA.nombre;
  switch (e.fase) {
    case 'antes':
      return es
        ? { barra: 'Votación temprana 19–30 oct', titulo: `Faltan ${e.diasParaEmpezar} días para votar`, detalle: `La votación anticipada abre el lunes 19 de octubre en el ${lugar}.` }
        : { barra: 'Early voting Oct 19–30', titulo: `${e.diasParaEmpezar} days until early voting`, detalle: `Early voting opens Monday, October 19 at the ${lugar}.` };
    case 'manana': {
      const r = rangoFrase(e.diaSiguiente!.abre, e.diaSiguiente!.cierra, lang);
      return es
        ? { barra: 'Mañana empieza la votación', titulo: 'Mañana comienza la votación anticipada', detalle: `Lunes 19 de octubre, ${r}, en el ${lugar}.` }
        : { barra: 'Early voting starts tomorrow', titulo: 'Early voting starts tomorrow', detalle: `Monday, October 19, ${r}, at the ${lugar}.` };
    }
    case 'abierto': {
      const c = hora(e.diaHoy!.cierra);
      return es
        ? { barra: `Vota hoy · hasta las ${c}`, titulo: 'Abierto ahora: ve a votar hoy', detalle: `Hoy se vota hasta las ${c} en el ${lugar}, sin importar tu casilla.` }
        : { barra: `Vote today · open until ${c}`, titulo: 'Polls are open now: vote today', detalle: `Open today until ${c} at the ${lugar}, no matter your precinct.` };
    }
    case 'abreHoy': {
      const r = rangoFrase(e.diaHoy!.abre, e.diaHoy!.cierra, lang);
      const c = rangoCorto(e.diaHoy!.abre, e.diaHoy!.cierra);
      return es
        ? { barra: `Vota hoy · ${c}`, titulo: `Hoy se vota ${r}`, detalle: `Abre a las ${hora(e.diaHoy!.abre)} en el ${lugar}, sin importar tu casilla.` }
        : { barra: `Vote today · ${c}`, titulo: `Vote today, ${r}`, detalle: `Opens at ${hora(e.diaHoy!.abre)} at the ${lugar}, no matter your precinct.` };
    }
    case 'cerradoHoy': {
      const s = e.diaSiguiente!;
      const r = rangoFrase(s.abre, s.cierra, lang);
      const c = rangoCorto(s.abre, s.cierra);
      return es
        ? { barra: `Vota mañana · ${c}`, titulo: `Mañana se vota ${r}`, detalle: `Hoy ya cerró. Abre de nuevo el ${nombreDia(s.fecha, lang)} en el ${lugar}.` }
        : { barra: `Vote tomorrow · ${c}`, titulo: `Vote tomorrow, ${r}`, detalle: `Closed for today. Opens again ${nombreDia(s.fecha, lang)} at the ${lugar}.` };
    }
    case 'entre':
      return es
        ? { barra: 'Vota el martes 3 de noviembre', titulo: 'El martes 3 de noviembre se vota', detalle: 'Terminó la votación anticipada. El día de la elección vota en tu casilla de 7 AM a 7 PM.' }
        : { barra: 'Vote Tuesday, November 3', titulo: 'Election Day is Tuesday, November 3', detalle: 'Early voting has ended. On Election Day, vote at your precinct from 7 AM to 7 PM.' };
    case 'eleccion':
      return es
        ? { barra: '¡Hoy se vota! Hasta las 7 PM', titulo: '¡Hoy se vota!', detalle: 'Vota en tu casilla hasta las 7 PM. Si estás en la fila a las 7, tienes derecho a votar.' }
        : { barra: 'Vote today! Until 7 PM', titulo: 'Election Day is today!', detalle: 'Vote at your precinct until 7 PM. If you are in line by 7, you have the right to vote.' };
    default:
      return { barra: '', titulo: '', detalle: '' };
  }
}
