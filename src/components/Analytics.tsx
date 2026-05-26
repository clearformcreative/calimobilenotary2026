"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const GADS_ID = "AW-18189278709";

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

  if (consent !== "granted") return null;

  const loaderId = GA_ID || GADS_ID;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${loaderId}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          ${GA_ID ? `gtag('config', '${GA_ID}', { anonymize_ip: true });` : ""}
          gtag('config', '${GADS_ID}');
        `}
      </Script>
    </>
  );
}
