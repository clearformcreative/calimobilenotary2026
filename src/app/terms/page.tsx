import type { Metadata } from "next";

import { siteInfo } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms governing use of the Cali Mobile Notary website and mobile notary services, including appointments, fees, and limitations.",
  alternates: { canonical: "https://www.calimobilenotary.com/terms" },
  robots: { index: true, follow: true },
};

const EFFECTIVE_DATE = "April 23, 2026";

export default function TermsPage() {
  return (
    <div className="bg-brand-ivory py-20 text-brand-ink">
      <article className="mx-auto w-full max-w-3xl px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-champagne">
          Legal
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">
          Terms of Service
        </h1>
        <p className="mt-3 text-sm text-brand-shadow/70">Effective {EFFECTIVE_DATE}</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-brand-shadow/90">
          <section>
            <h2 className="font-display text-2xl font-semibold text-brand-ink">
              1. Acceptance
            </h2>
            <p className="mt-3">
              By using this website or booking a mobile notary appointment with{" "}
              {siteInfo.name}, you agree to these Terms. If you do not agree, do not use the
              site or our services.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-brand-ink">
              2. Services we provide
            </h2>
            <p className="mt-3">
              We are a California-commissioned notary public providing mobile notary services
              such as acknowledgments, jurats, oaths, and certified copies (where permitted by
              law). We are not attorneys and cannot give legal advice, prepare legal documents,
              or tell you what type of document to sign.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-brand-ink">
              3. Appointments and scheduling
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Appointments may be booked online or by phone.</li>
              <li>All signers must be physically present with valid, unexpired, government-issued photo ID.</li>
              <li>Documents must be complete except for signatures that require notarization.</li>
              <li>We reserve the right to refuse service if identification, signer awareness, or document integrity cannot be verified as required by California law.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-brand-ink">
              4. Fees and payment
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Package pricing is listed on our <a className="underline hover:text-brand-champagne" href="/pricing">Pricing</a> page.</li>
              <li>California statutory notary fees are capped at $15 per signature and are included in our packages.</li>
              <li>Travel beyond the included service area, after-hours, and emergency appointments may carry additional fees, which will be quoted before confirming your booking.</li>
              <li>Payment is due at the time of service unless otherwise agreed in writing.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-brand-ink">
              5. Cancellations and no-shows
            </h2>
            <p className="mt-3">
              If you need to cancel or reschedule, please give us at least 2 hours notice where
              possible. Travel fees incurred before cancellation, and appointments where a
              notary has already arrived, may still be charged.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-brand-ink">
              6. Your responsibilities
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Provide accurate information when booking.</li>
              <li>Ensure all signers are present, of sound mind, and acting willingly.</li>
              <li>Provide valid government-issued photo ID for every signer.</li>
              <li>Provide a safe, reasonable environment for the appointment.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-brand-ink">
              7. Limitation of liability
            </h2>
            <p className="mt-3">
              To the fullest extent permitted by California law, our total liability arising out
              of or relating to any appointment is limited to the fees paid for that
              appointment. We are not liable for indirect, incidental, special, or consequential
              damages, or for the legal effect, validity, enforceability, or acceptance of any
              document notarized.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-brand-ink">
              8. Website use
            </h2>
            <p className="mt-3">
              The content of this site is provided for informational purposes only and may be
              updated without notice. Do not rely on it as legal advice. Unauthorized use,
              copying, or scraping of the site is prohibited.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-brand-ink">
              9. Governing law
            </h2>
            <p className="mt-3">
              These Terms are governed by the laws of the State of California. Any dispute will
              be resolved in the state or federal courts located in Los Angeles County,
              California.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-brand-ink">
              10. Contact
            </h2>
            <p className="mt-3">
              Questions about these Terms? Email{" "}
              <a className="underline hover:text-brand-champagne" href={`mailto:${siteInfo.email}`}>
                {siteInfo.email}
              </a>{" "}
              or call{" "}
              <a className="underline hover:text-brand-champagne" href={siteInfo.phoneHref}>
                {siteInfo.phoneDisplay}
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
