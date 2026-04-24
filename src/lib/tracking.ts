// Analytics event helpers. Pushes to GTM dataLayer and, if GA4 is loaded, gtag.

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...params });
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params ?? {});
  }
}

export function trackPhoneClick(phoneNumber: string) {
  trackEvent("phone_click", {
    phone_number: phoneNumber,
    event_category: "engagement",
    event_label: "Phone Call Click",
  });
}

export function trackFormSubmit(formName: string) {
  trackEvent("form_submit", {
    form_name: formName,
    event_category: "conversion",
    event_label: "Contact Form Submission",
  });
}

export function trackBookingClick() {
  trackEvent("booking_click", {
    event_category: "conversion",
    event_label: "Booking Button Click",
  });
}
