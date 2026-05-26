import type { Metadata } from "next";
import Script from "next/script";

import { siteInfo } from "@/content/site";

export const metadata: Metadata = {
  title: "Appointment Confirmed | Cali Mobile Notary",
  description:
    "Your mobile notary appointment is confirmed. We'll see you soon.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "https://www.calimobilenotary.com/thank-you",
  },
};

const GADS_SEND_TO = "AW-18189278709/D3M2CO-Qo7McEPW7qeFD";

export default function ThankYouPage() {
  return (
    <div className="text-brand-ink">
      {/* Google Ads "Book appointment" conversion event — fires only if visitor consented to cookies (gtag is loaded by Analytics.tsx). */}
      <Script id="gads-conversion" strategy="afterInteractive">
        {`
          if (typeof window.gtag === 'function') {
            window.gtag('event', 'conversion', {
              'send_to': '${GADS_SEND_TO}',
              'value': 1.0,
              'currency': 'USD'
            });
          }
        `}
      </Script>

      <section className="bg-brand-mist py-24">
        <div className="mx-auto w-full max-w-3xl px-6 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-champagne/20 ring-1 ring-brand-champagne/40">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8 text-brand-champagne"
              aria-hidden="true"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-brand-champagne">
            Appointment Confirmed
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Thank you — your booking is set
          </h1>
          <div className="mx-auto mt-5 h-1 w-20 bg-brand-champagne" />
          <p className="mx-auto mt-6 max-w-xl text-base text-brand-shadow/80">
            A confirmation email is on its way with your appointment details.
            We&apos;ll arrive at your chosen location ready to notarize.
          </p>

          <div className="mt-10 rounded-lg border border-brand-stone/70 bg-white p-6 text-left shadow-sm">
            <h2 className="font-display text-lg font-semibold text-brand-ink">
              What happens next
            </h2>
            <ol className="mt-4 space-y-3 text-sm text-brand-shadow/90">
              <li className="flex gap-3">
                <span className="font-semibold text-brand-champagne">1.</span>
                <span>
                  Check your inbox for a confirmation with date, time, and
                  location details.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-brand-champagne">2.</span>
                <span>
                  Have your unsigned documents and a valid government-issued
                  photo ID ready. Do not sign anything until we arrive.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-brand-champagne">3.</span>
                <span>
                  We&apos;ll arrive at your scheduled time. Most appointments
                  take 15-30 minutes.
                </span>
              </li>
            </ol>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/"
              className="rounded-sm bg-brand-champagne px-6 py-3 text-sm font-semibold tracking-[0.12em] text-brand-ink shadow-[0_18px_45px_rgba(199,166,106,0.35)] transition hover:bg-brand-champagne-soft hover:shadow-[0_22px_60px_rgba(199,166,106,0.45)]"
            >
              Back to Home
            </a>
            <a
              href={siteInfo.phoneHref}
              className="rounded-sm border border-brand-ink/30 px-6 py-3 text-sm font-semibold tracking-[0.12em] text-brand-ink transition hover:border-brand-champagne hover:text-brand-champagne"
            >
              Questions? Call {siteInfo.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
