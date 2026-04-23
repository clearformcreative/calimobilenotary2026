import type { Metadata } from "next";

import { ContactSection } from "@/components/ContactSection";
import { siteInfo } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact Us | Mobile Notary Los Angeles",
  description:
    "Contact Cali Mobile Notary for mobile notary services in Los Angeles. Book online or call (323) 364-2121. Same-day appointments available.",
  keywords: [
    "contact mobile notary",
    "notary phone number Los Angeles",
    "book notary appointment",
    "mobile notary contact",
  ],
  alternates: {
    canonical: "https://www.calimobilenotary.com/contact",
  },
  openGraph: {
    title: "Contact Cali Mobile Notary | Los Angeles",
    description:
      "Get in touch for mobile notary services. Book online or call (323) 364-2121.",
    url: "https://www.calimobilenotary.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="text-brand-ink">
      <section className="bg-brand-mist py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-champagne">
            Contact
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-6xl">
            Reach out and we will respond quickly
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-brand-shadow/80">
            Prefer a message? Use the form below. For immediate scheduling, book
            your appointment or call directly.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/#book"
              className="rounded-sm bg-brand-champagne px-6 py-3 text-sm font-semibold tracking-[0.12em] text-brand-ink shadow-[0_18px_45px_rgba(199,166,106,0.35)] transition hover:bg-brand-champagne-soft hover:shadow-[0_22px_60px_rgba(199,166,106,0.45)]"
            >
              Book an Appointment
            </a>
            <a
              href={siteInfo.phoneHref}
              className="rounded-sm border border-brand-ink/30 px-6 py-3 text-sm font-semibold tracking-[0.12em] text-brand-ink transition hover:border-brand-champagne hover:text-brand-champagne"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
