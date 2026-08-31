export interface LeadPayload {
  name: string;
  email: string;
  phone?: string;
  helpType?: string;
  formLocation: 'hero' | 'mid' | 'footer' | 'contact';
  lang: 'es' | 'en';
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
  submittedAt?: string;
}

export interface LeadSubmissionResult {
  success: boolean;
  message?: string;
}

export function getStoredUtms(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = sessionStorage.getItem('campaign_utms');
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function saveUtmsFromUrl(): void {
  if (typeof window === 'undefined') return;
  const params = new URLSearchParams(window.location.search);
  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
  const utms: Record<string, string> = {};
  let found = false;

  utmKeys.forEach((key) => {
    const val = params.get(key);
    if (val) {
      utms[key] = val;
      found = true;
    }
  });

  if (found) {
    try {
      sessionStorage.setItem('campaign_utms', JSON.stringify(utms));
    } catch (e) {
      console.warn('Failed to save UTMs to sessionStorage', e);
    }
  }
}

export async function submitLead(data: LeadPayload): Promise<LeadSubmissionResult> {
  // Merge UTMs
  const utms = getStoredUtms();
  const enrichedPayload: LeadPayload = {
    ...data,
    utmSource: data.utmSource || utms.utm_source || 'direct',
    utmMedium: data.utmMedium || utms.utm_medium || 'web',
    utmCampaign: data.utmCampaign || utms.utm_campaign || 'negrete_p4_2026',
    utmContent: data.utmContent || utms.utm_content,
    utmTerm: data.utmTerm || utms.utm_term,
    submittedAt: new Date().toISOString()
  };

  // Log in development / client storage for testing
  try {
    const existing = JSON.parse(localStorage.getItem('campaign_leads') || '[]');
    existing.push(enrichedPayload);
    localStorage.setItem('campaign_leads', JSON.stringify(existing));
  } catch (e) {
    console.warn('Could not store lead in localStorage', e);
  }

  // NOTE: When backend/PostgreSQL or Google Sheets endpoint is configured,
  // we add fetch('/api/leads', { method: 'POST', body: JSON.stringify(enrichedPayload) }) here.
  return {
    success: true,
    message: data.lang === 'es' ? '¡Gracias por tu apoyo al Precinto 4!' : 'Thank you for supporting Precinct 4!'
  };
}
