import type { APIRoute } from 'astro';
import { createHash } from 'node:crypto';
import { prisma } from '../../lib/prisma';

// Esta ruta corre en el servidor; el resto del sitio se sigue prerenderizando.
export const prerender = false;

const MAX_BODY = 8 * 1024;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Recorta y normaliza un campo de texto; devuelve null si queda vacío. */
function str(value: unknown, max: number): string | null {
  if (typeof value !== 'string') return null;
  const trimmed = value.trim().slice(0, max);
  return trimmed.length ? trimmed : null;
}

/**
 * La IP se guarda como hash: sirve para detectar envíos repetidos sin
 * conservar un dato personal identificable de quien se registra.
 */
function hashIp(ip: string | null): string | null {
  if (!ip) return null;
  const salt = import.meta.env.IP_HASH_SALT ?? 'lupe-negrete-p4';
  return createHash('sha256').update(`${salt}:${ip}`).digest('hex').slice(0, 32);
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const json = (body: unknown, status: number) =>
    new Response(JSON.stringify(body), {
      status,
      headers: { 'content-type': 'application/json; charset=utf-8' }
    });

  let payload: Record<string, unknown>;
  try {
    const raw = await request.text();
    if (raw.length > MAX_BODY) return json({ success: false, error: 'payload_too_large' }, 413);
    payload = JSON.parse(raw);
  } catch {
    return json({ success: false, error: 'invalid_json' }, 400);
  }

  const name = str(payload.name, 120);
  const email = str(payload.email, 254)?.toLowerCase() ?? null;

  if (!name) return json({ success: false, error: 'name_required' }, 422);
  if (!email || !EMAIL_RE.test(email)) return json({ success: false, error: 'email_invalid' }, 422);

  try {
    const lead = await prisma.lead.create({
      data: {
        name,
        email,
        phone: str(payload.phone, 40),
        zip: str(payload.zip, 12),
        helpType: str(payload.helpType, 60),
        formLocation: str(payload.formLocation, 20) ?? 'hero',
        lang: payload.lang === 'en' ? 'en' : 'es',
        utmSource: str(payload.utmSource, 120),
        utmMedium: str(payload.utmMedium, 120),
        utmCampaign: str(payload.utmCampaign, 120),
        utmContent: str(payload.utmContent, 120),
        utmTerm: str(payload.utmTerm, 120),
        userAgent: str(request.headers.get('user-agent'), 300),
        ipHash: hashIp(clientAddress ?? null)
      },
      select: { id: true }
    });

    return json({ success: true, id: lead.id }, 201);
  } catch (error) {
    console.error('[api/leads] no se pudo guardar el registro', error);
    return json({ success: false, error: 'storage_failed' }, 500);
  }
};
