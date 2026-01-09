import Image from "next/image";
import Link from "next/link";

import { ContactSection } from "@/components/ContactSection";
import { FadeIn } from "@/components/FadeIn";
import {
  certificationBadges,
  pricingNotes,
  pricingPackages,
  processSteps,
  services,
  siteInfo,
  testimonials,
  whatToBring,
} from "@/content/site";

const topServices = services.slice(0, 6);
const trustHighlights = [
  {
    label: "Commissioned Notary",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          d="M6 4h9l3 3v13H6z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M9 12h6M9 16h6M9 8h3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Bonded & Insured",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          d="M12 3l7 4v6c0 4-3 6.5-7 8-4-1.5-7-4-7-8V7z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Background Checked",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <circle
          cx="10"
          cy="10"
          r="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M14 14l5 5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Same-Day Availability",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          d="M7 4v4M17 4v4M4 9h16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <rect
          x="4"
          y="6"
          width="16"
          height="14"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M8 13l2 2 4-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const reputationMarks = [
  "5.0 Google Rating",
  "120+ Reviews",
  "Verified Business",
  "Responsive Support",
];


const iconClassName = "h-6 w-6 text-brand-champagne";

const serviceIcons: Record<string, JSX.Element> = {
  "real-estate-documents": (
    <svg viewBox="0 0 24 24" className={iconClassName} aria-hidden="true">
      <path
        d="M4 11l8-6 8 6v8H4z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9 19v-5h6v5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  ),
  "power-of-attorney": (
    <svg viewBox="0 0 24 24" className={iconClassName} aria-hidden="true">
      <circle cx="12" cy="8" r="3" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M5 20c1.5-3.5 5-5 7-5s5.5 1.5 7 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  ),
  "trusts-and-wills": (
    <svg viewBox="0 0 24 24" className={iconClassName} aria-hidden="true">
      <path
        d="M7 4h7l4 4v12H7z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M10 12h5M10 16h5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  ),
  "healthcare-directives": (
    <svg viewBox="0 0 24 24" className={iconClassName} aria-hidden="true">
      <path
        d="M12 6v12M6 12h12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <rect
        x="5"
        y="4"
        width="14"
        height="16"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  ),
};

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M7 17L17 7M10 7h7v7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteInfo.name,
    url: `https://${siteInfo.domain}`,
    telephone: siteInfo.phoneHref.replace("tel:", ""),
    email: siteInfo.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Los Angeles",
      addressRegion: "CA",
      addressCountry: "US",
    },
    areaServed: siteInfo.serviceAreas,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    sameAs: Object.values(siteInfo.social),
  };

  return (
    <div className="text-brand-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="relative flex min-h-[92vh] items-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=2200&q=80"
          alt="Notary guiding a client through a signing appointment"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-ink/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-ink/80 via-brand-ink/65 to-brand-ink/85" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <FadeIn>
              <p className="inline-flex items-center gap-2 rounded-sm border border-brand-champagne/50 bg-brand-ink/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-champagne">
                Commissioned • Bonded • Background Checked
              </p>
            </FadeIn>
            <FadeIn delay={0.08}>
              <h1 className="mt-6 font-display text-5xl font-semibold tracking-tight text-brand-ivory md:text-7xl">
                Premium Mobile Notary, Right to You
              </h1>
            </FadeIn>
            <FadeIn delay={0.16}>
              <p className="mt-5 text-lg text-brand-ivory/80">
                Discreet, same-day appointments across Greater Los Angeles with
                calm, precise guidance at every signing.
              </p>
            </FadeIn>
            <FadeIn delay={0.24}>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={siteInfo.bookingUrl}
                  className="rounded-sm bg-brand-champagne px-7 py-3 text-sm font-semibold tracking-[0.12em] text-brand-ink shadow-[0_18px_45px_rgba(199,166,106,0.35)] transition hover:bg-brand-champagne-soft hover:shadow-[0_22px_60px_rgba(199,166,106,0.45)]"
                >
                  Book an Appointment
                </a>
                <a
                  href={siteInfo.phoneHref}
                  className="rounded-sm border border-brand-ivory/50 px-7 py-3 text-sm font-semibold tracking-[0.12em] text-brand-ivory transition hover:border-brand-champagne hover:text-brand-champagne hover:shadow-[0_14px_40px_rgba(199,166,106,0.25)]"
                >
                  Call Now
                </a>
                
              </div>
            </FadeIn>
            <FadeIn delay={0.32}>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-brand-ivory/70">
                <span>Packages from $85</span>
                <span className="h-1 w-1 rounded-full bg-brand-ivory/50" />
                <a
                  href="/pricing"
                  className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.12em] text-brand-ivory/80 transition hover:text-brand-champagne"
                >
                  View Pricing
                  <ArrowIcon className="h-4 w-4" />
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <FadeIn className="bg-brand-mist py-8">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-wrap items-center justify-between gap-6 border-y border-brand-stone/60 py-6 text-xs font-semibold uppercase tracking-[0.2em] text-brand-ink">
            {trustHighlights.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <span className="text-brand-champagne">{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      <FadeIn className="py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-champagne">
                Services
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-brand-ink md:text-5xl">
                Concierge-Level Notary Support
              </h2>
              <div className="mt-3 h-1 w-20 bg-brand-champagne" />
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.12em] text-brand-ink transition hover:text-brand-champagne"
            >
              View All Services
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {topServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group rounded-lg border border-brand-stone/70 bg-white/90 p-6 shadow-md transition hover:-translate-y-1 hover:border-brand-champagne hover:shadow-[0_18px_55px_rgba(199,166,106,0.2)]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md border border-brand-champagne/30 bg-brand-champagne/10">
                    {serviceIcons[service.slug] ?? (
                      <span className="text-brand-champagne">*</span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-brand-ink">
                    {service.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm text-brand-shadow/80">
                  {service.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-champagne">
                  Explore Service
                  <ArrowIcon className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="relative h-56 overflow-hidden rounded-lg border border-brand-stone/70">
                <Image
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80"
                  alt="Notary guiding a client through a signing"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-56 overflow-hidden rounded-lg border border-brand-stone/70">
                <Image
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80"
                  alt="Professional document signing and review"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-56 overflow-hidden rounded-lg border border-brand-stone/70 md:col-span-2">
                <Image
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
                  alt="Notary appointment with client in a calm setting"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="rounded-lg border border-brand-stone/70 bg-white/90 p-8 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-champagne">
                Reputation
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-brand-ink">
                Trusted, reviewed, and verified
              </h2>
              <p className="mt-3 text-sm text-brand-shadow/80">
                Clients choose Cali Mobile Notary for consistency, discretion, and
                a calm signing experience. We focus on clarity, punctuality, and
                professional presentation.
              </p>
              <div className="mt-6 grid gap-3">
                {reputationMarks.map((mark) => (
                  <div
                    key={mark}
                    className="flex items-center gap-3 border-b border-brand-stone/40 pb-3 text-sm text-brand-shadow/80"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-sm border border-brand-champagne/40 text-brand-champagne">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                        <path
                          d="M6 12l4 4 8-8"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {mark}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn className="bg-brand-mist py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-champagne">
                Pricing
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-brand-ink md:text-5xl">
                Clear packages with travel included
              </h2>
              <div className="mt-3 h-1 w-20 bg-brand-champagne" />
              <p className="mt-4 text-sm text-brand-shadow/80">
                One transparent price per package, covering travel within your
                service area and up to the listed number of signatures.
              </p>
            </div>
            <a
              href="/pricing"
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.12em] text-brand-ink transition hover:text-brand-champagne"
            >
              View Full Pricing
              <ArrowIcon className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {pricingPackages.map((pkg) => (
              <div
                key={pkg.title}
                className="rounded-lg border border-brand-stone/70 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-champagne hover:shadow-[0_18px_55px_rgba(199,166,106,0.2)]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-champagne">
                  {pkg.title}
                </p>
                <p className="mt-3 text-3xl font-semibold text-brand-ink">{pkg.price}</p>
                <p className="mt-2 text-sm text-brand-shadow/80">{pkg.details}</p>
                <ul className="mt-4 space-y-2 text-sm text-brand-shadow/80">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-champagne" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-brand-stone/70 bg-white/85">
            <div className="grid md:grid-cols-2">
              {pricingNotes.map((note, index) => (
                <div
                  key={note.title}
                  className={`flex gap-3 border-brand-stone/50 p-5 ${
                    index < 2 ? "border-b" : ""
                  } ${index % 2 === 0 ? "md:border-r" : ""}`}
                >
                  <span className="mt-2 h-2 w-2 rounded-full bg-brand-champagne" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-ink">
                      {note.title}
                    </p>
                    <p className="mt-2 text-sm text-brand-shadow/80">
                      {note.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-lg border border-brand-stone/70 bg-white/90 p-6 shadow-sm">
            <div className="grid gap-6 lg:grid-cols-[0.4fr_0.6fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-champagne">
                  Certifications
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-brand-ink">
                  Credentialed and compliant
                </h3>
                <p className="mt-3 text-sm text-brand-shadow/80">
                  Verified background checks, insured protection, and professional
                  standards for every appointment.
                </p>
              </div>
              <div className="grid gap-3">
                {certificationBadges.map((badge) => (
                  <div
                    key={badge}
                    className="flex items-center gap-3 border-b border-brand-stone/40 pb-3 text-sm text-brand-shadow/80 last:border-b-0 last:pb-0"
                  >
                    <span className="h-2 w-2 rounded-full bg-brand-champagne" />
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn className="bg-brand-mist py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-champagne">
              Our Process
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
              A Calm, Structured Signing Experience
            </h2>
            <div className="mt-3 h-1 w-24 bg-brand-champagne" />
            <div className="mt-10 space-y-6">
              {processSteps.map((step, index) => (
                <div key={step.title} className="rounded-lg bg-white/90 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-champagne">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-brand-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-brand-shadow/80">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-brand-stone/70">
            <Image
              src="https://images.unsplash.com/photo-1450101215322-bf5cd27642fc?auto=format&fit=crop&w=1400&q=80"
              alt="Notary reviewing documents with a client"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-lg bg-brand-ivory/95 p-6 text-brand-ink shadow-lg">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-champagne">
                Client Testimonial
              </p>
              <p className="mt-3 text-base">"{testimonials[0].quote}"</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-brand-ink">
                - {testimonials[0].name}, {testimonials[0].location}
              </p>
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn className="py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-champagne">
                What to Bring
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-brand-ink md:text-5xl">
                Arrive prepared for a smooth signing
              </h2>
              <div className="mt-3 h-1 w-20 bg-brand-champagne" />
            </div>
            <a
              href={siteInfo.bookingUrl}
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.12em] text-brand-ink transition hover:text-brand-champagne"
            >
              Book an Appointment
              <ArrowIcon className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {whatToBring.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-lg border border-brand-stone/70 bg-white/90 p-6 transition hover:border-brand-champagne hover:shadow-[0_18px_55px_rgba(199,166,106,0.2)]"
              >
                <span className="h-2 w-2 rounded-full bg-brand-champagne" />
                <p className="text-sm text-brand-shadow/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      <FadeIn className="py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="rounded-lg border border-brand-stone/70 bg-brand-ink px-8 py-12 text-brand-ivory shadow-[0_22px_60px_rgba(43,38,34,0.35)] md:px-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-champagne">
                  Booking
                </p>
                <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
                  Secure your appointment in minutes.
                </h2>
                <p className="mt-3 text-sm text-brand-ivory/70">
                  Preferred times fill quickly. Book now or call for immediate
                  availability.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href={siteInfo.bookingUrl}
                  className="rounded-sm bg-brand-champagne px-6 py-3 text-sm font-semibold tracking-[0.12em] text-brand-ink shadow-[0_18px_45px_rgba(199,166,106,0.35)] transition hover:bg-brand-champagne-soft hover:shadow-[0_22px_60px_rgba(199,166,106,0.45)]"
                >
                  Book an Appointment
                </a>
                <a
                  href={siteInfo.phoneHref}
                  className="rounded-sm border border-brand-ivory/40 px-6 py-3 text-sm font-semibold tracking-[0.12em] text-brand-ivory transition hover:border-brand-champagne hover:text-brand-champagne hover:shadow-[0_14px_40px_rgba(199,166,106,0.25)]"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      <ContactSection />
    </div>
  );
}
