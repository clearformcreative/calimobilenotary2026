import Image from "next/image";

import { ContactSection } from "@/components/ContactSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { ServiceAreaSection } from "@/components/ServiceAreaSection";
import { siteInfo } from "@/content/site";

export default function AboutPage() {
  return (
    <div className="text-brand-ink">
      <section className="relative overflow-hidden bg-brand-ink py-20 text-brand-ivory">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=2000&q=80"
            alt="Notary preparing a signing appointment"
            fill
            className="object-cover opacity-35"
          />
        </div>
        <div className="relative mx-auto w-full max-w-6xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-champagne">
            About
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-6xl">
            A premium mobile notary experience, built on trust.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-brand-ivory/80">
            Cali Mobile Notary delivers discreet, concierge-level service for
            individuals, families, and professionals who value clarity and calm.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={siteInfo.bookingUrl}
              className="rounded-sm bg-brand-champagne px-6 py-3 text-sm font-semibold tracking-[0.12em] text-brand-ink shadow-[0_18px_45px_rgba(199,166,106,0.35)] transition hover:bg-brand-champagne-soft hover:shadow-[0_22px_60px_rgba(199,166,106,0.45)]"
            >
              Book an Appointment
            </a>
            <a
              href={siteInfo.phoneHref}
              className="rounded-sm border border-brand-ivory/40 px-6 py-3 text-sm font-semibold tracking-[0.12em] text-brand-ivory transition hover:border-brand-champagne hover:text-brand-champagne"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-champagne">
              Our Approach
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
              Calm, precise, and client-first
            </h2>
            <div className="mt-3 h-1 w-20 bg-brand-champagne" />
            <p className="mt-4 text-sm text-brand-shadow/80">
              Every appointment is handled with discretion and professional care.
              We confirm identity, ensure document integrity, and guide each step
              so your signing is efficient and stress-free.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-brand-stone/70 bg-white/90 p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-champagne">
                  Credentials
                </p>
                <p className="mt-3 text-sm text-brand-shadow/80">
                  {siteInfo.credentials.commission}
                </p>
                <p className="mt-2 text-sm text-brand-shadow/80">
                  {siteInfo.credentials.bondedInsured}
                </p>
                <p className="mt-2 text-sm text-brand-shadow/80">
                  {siteInfo.credentials.backgroundChecked}
                </p>
              </div>
              <div className="rounded-lg border border-brand-stone/70 bg-white/90 p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-champagne">
                  Service Promise
                </p>
                <p className="mt-3 text-sm text-brand-shadow/80">
                  On-time arrival, clear communication, and polished document
                  handling from start to finish.
                </p>
              </div>
            </div>
          </div>
          <div className="relative min-h-[320px] overflow-hidden rounded-lg border border-brand-stone/70">
            <Image
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80"
              alt="Professional document review"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <ReviewsSection />
      <ServiceAreaSection />
      <ContactSection />
    </div>
  );
}
