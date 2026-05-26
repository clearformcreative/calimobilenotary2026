"use client";

import { useEffect, useRef } from "react";
import { siteInfo } from "@/content/site";

export function CalEmbed() {
  const calInitialized = useRef(false);

  useEffect(() => {
    if (calInitialized.current) return;
    calInitialized.current = true;

    // Cal.com official embed snippet
    (function (C, A, L) {
      const p = function (a: { q: unknown[] }, ar: unknown) {
        a.q.push(ar);
      };
      const d = C.document;
      // @ts-expect-error Cal is defined dynamically
      C.Cal =
        // @ts-expect-error Cal is defined dynamically
        C.Cal ||
        function (...args: unknown[]) {
          // @ts-expect-error Cal is defined dynamically
          const cal = C.Cal;
          const ar = args;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            const script = d.createElement("script");
            script.src = A;
            script.async = true;
            d.head.appendChild(script);
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api: { q: unknown[] } & ((...a: unknown[]) => void) = function (...a: unknown[]) {
              p(api, a);
            } as { q: unknown[] } & ((...a: unknown[]) => void);
            api.q = api.q || [];
            const namespace = ar[1] as string;
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else {
              p(cal, ar);
            }
            return;
          }
          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    // @ts-expect-error Cal is defined dynamically
    window.Cal("init", "inline", { origin: "https://cal.com" });

    // @ts-expect-error Cal is defined dynamically
    window.Cal.ns.inline("inline", {
      elementOrSelector: "#cal-inline-embed",
      calLink: `${siteInfo.calUsername}/${siteInfo.calEventSlug}`,
      layout: "month_view",
    });

    // @ts-expect-error Cal is defined dynamically
    window.Cal.ns.inline("ui", {
      theme: "light",
      styles: { branding: { brandColor: "#C7A66A" } },
      hideEventTypeDetails: false,
      layout: "month_view",
    });

    // @ts-expect-error Cal is defined dynamically
    window.Cal.ns.inline("on", {
      action: "bookingSuccessful",
      callback: () => {
        window.location.href = "/thank-you";
      },
    });
  }, []);

  return (
    <section id="book" className="bg-brand-mist py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-champagne">
            Book Online
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-brand-ink md:text-5xl">
            Schedule Your Appointment
          </h2>
          <div className="mx-auto mt-3 h-1 w-20 bg-brand-champagne" />
          <p className="mx-auto mt-4 max-w-xl text-sm text-brand-shadow/80">
            Select a convenient time and we&apos;ll come to you. Same-day appointments
            often available.
          </p>
        </div>
        <div
          id="cal-inline-embed"
          className="mt-10 min-h-[600px] overflow-hidden rounded-lg border border-brand-stone/70 bg-white"
        />
      </div>
    </section>
  );
}
