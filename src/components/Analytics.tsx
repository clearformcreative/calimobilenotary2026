"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export function Analytics() {
  const [consent, setConsent] = useState<"granted" | "denied" | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("cmn_cookie_consent");
    if (stored === "granted" || stored === "denied") {
      setConsent(stored);
    }
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<"granted" | "denied">).detail;
      setConsent(detail);
    };
    window.addEventListener("cmn:consent", handler as EventListener);
    return () => window.removeEventListener("cmn:consent", handler as EventListener);
  }, []);

  if (!GA_ID || consent !== "granted") return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
