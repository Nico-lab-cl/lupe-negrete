export type AnalyticsEvent =
  | 'lead_submit'
  | 'whatsapp_click'
  | 'vote_info_view'
  | 'polling_place_click'
  | 'issue_view'
  | 'language_switch'
  | 'scroll_75';

export function trackEvent(eventName: AnalyticsEvent, params: Record<string, any> = {}): void {
  if (typeof window === 'undefined') return;

  // 1. Google Tag Manager / GA4 dataLayer
  (window as any).dataLayer = (window as any).dataLayer || [];
  (window as any).dataLayer.push({
    event: eventName,
    ...params,
    timestamp: new Date().toISOString()
  });

  // 2. Meta Pixel (Standard / Custom Events)
  if (typeof (window as any).fbq === 'function') {
    if (eventName === 'lead_submit') {
      (window as any).fbq('track', 'Lead', params);
    } else if (eventName === 'whatsapp_click') {
      (window as any).fbq('trackCustom', 'WhatsAppContact', params);
    } else if (eventName === 'vote_info_view') {
      (window as any).fbq('trackCustom', 'VoteInfoView', params);
    } else {
      (window as any).fbq('trackCustom', eventName, params);
    }
  }

  // Debug log in non-production
  if (import.meta.env.DEV) {
    console.log(`[Analytics Event] ${eventName}:`, params);
  }
}
