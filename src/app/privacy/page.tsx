import type { Metadata } from "next";

import { siteInfo } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Cali Mobile Notary collects, uses, and protects your information, including analytics, cookies, and California privacy rights.",
  alternates: { canonical: "https://www.calimobilenotary.com/privacy" },
  robots: { index: true, follow: true },
};

const EFFECTIVE_DATE = "April 23, 2026";

export default function PrivacyPage() {
  return (
    <div className="bg-brand-ivory py-20 text-brand-ink">
      <article className="mx-auto w-full max-w-3xl px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-champagne">
          Legal
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-brand-shadow/70">Effective {EFFECTIVE_DATE}</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-brand-shadow/90">
          <section>
            <h2 className="font-display text-2xl font-semibold text-brand-ink">
              1. Who we are
            </h2>
            <p className="mt-3">
              {siteInfo.name} ("we," "us," "our") is a mobile notary service based in
              California. You can reach us at{" "}
              <a className="underline hover:text-brand-champagne" href={`mailto:${siteInfo.email}`}>
                {siteInfo.email}
              </a>{" "}
              or{" "}
              <a className="underline hover:text-brand-champagne" href={siteInfo.phoneHref}>
                {siteInfo.phoneDisplay}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-brand-ink">
              2. Information we collect
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                <strong>Contact details you provide.</strong> Name, phone number, email, service
                type, and message when you submit our contact form or book an appointment.
              </li>
              <li>
                <strong>Appointment details.</strong> Date, time, and location of scheduled
                notarizations (handled through our booking provider, Cal.com).
              </li>
              <li>
                <strong>Notary journal entries.</strong> At signings we record the information
                required by California law (name, signature, type of ID, document type, date,
                thumbprint where applicable). This is kept in the notary journal, not on this
                website.
              </li>
              <li>
                <strong>Site analytics.</strong> If you accept cookies, we collect anonymized
                page views, device/browser info, referral source, and events such as phone-call
                clicks and form submissions via Google Analytics and Google Tag Manager.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-brand-ink">
              3. How we use it
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Respond to inquiries and schedule appointments.</li>
              <li>Perform the notary services you request.</li>
              <li>Meet legal and regulatory requirements (including CA notary journal rules).</li>
              <li>Measure and improve our website and advertising effectiveness.</li>
            </ul>
            <p className="mt-3">
              We do not sell your personal information. We do not share it with third parties
              except service providers who help us operate the business (e.g., Cal.com for
              booking, Usebasin for form delivery, Google for analytics) or when required by law.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-brand-ink">
              4. Cookies and tracking
            </h2>
            <p className="mt-3">
              We use cookies only after you accept them via the banner on your first visit. If
              you decline, analytics cookies are not loaded. You can change your choice at any
              time by clearing your browser&apos;s site data for this domain, which will bring the
              banner back.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-brand-ink">
              5. Data retention
            </h2>
            <p className="mt-3">
              Inquiry emails and booking records are kept for up to 3 years for recordkeeping
              and customer service. California notary journals are retained for 10 years from
              the date of the last entry, as required by state law.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-brand-ink">
              6. Your California privacy rights (CCPA/CPRA)
            </h2>
            <p className="mt-3">California residents have the right to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Know what personal information we collect and how we use it.</li>
              <li>Request a copy of the personal information we hold about you.</li>
              <li>Request deletion of your personal information (subject to legal exceptions, including the notary journal retention requirement).</li>
              <li>Opt out of any sale or sharing of personal information (we do not sell or share).</li>
              <li>Not be discriminated against for exercising these rights.</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, email{" "}
              <a className="underline hover:text-brand-champagne" href={`mailto:${siteInfo.email}`}>
                {siteInfo.email}
              </a>{" "}
              with the subject line "Privacy Request."
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-brand-ink">
              7. Security
            </h2>
            <p className="mt-3">
              We use reasonable administrative, technical, and physical safeguards to protect
              the information you share with us. No method of transmission over the Internet is
              100% secure.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-brand-ink">
              8. Children
            </h2>
            <p className="mt-3">
              This website is not intended for children under 13 and we do not knowingly collect
              personal information from them.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-brand-ink">
              9. Changes to this policy
            </h2>
            <p className="mt-3">
              We may update this policy from time to time. The "Effective" date at the top of
              the page will reflect the most recent revision.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-brand-ink">
              10. Contact
            </h2>
            <p className="mt-3">
              Questions about this policy or our data practices? Email{" "}
              <a className="underline hover:text-brand-champagne" href={`mailto:${siteInfo.email}`}>
                {siteInfo.email}
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
