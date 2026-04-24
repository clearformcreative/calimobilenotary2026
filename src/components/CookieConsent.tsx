"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "cmn_cookie_consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) setVisible(true);
  }, []);

  const persist = (choice: "granted" | "denied") => {
    localStorage.setItem(STORAGE_KEY, choice);
    window.dispatchEvent(new CustomEvent("cmn:consent", { detail: choice }));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-brand-stone/70 bg-brand-ink/95 px-4 py-4 text-brand-ivory shadow-[0_-12px_40px_rgba(0,0,0,0.25)] backdrop-blur md:px-6"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-brand-ivory/85">
          We use cookies to analyze site traffic and improve your experience. See our{" "}
          <Link href="/privacy" className="underline hover:text-brand-champagne">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => persist("denied")}
            className="rounded-sm border border-brand-ivory/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-ivory/90 transition hover:border-brand-champagne hover:text-brand-champagne"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => persist("granted")}
            className="rounded-sm bg-brand-champagne px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-ink transition hover:bg-brand-champagne-soft"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
