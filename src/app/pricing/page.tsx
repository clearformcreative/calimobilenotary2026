import { ContactSection } from "@/components/ContactSection";
import {
  certificationBadges,
  pricingNotes,
  pricingPackages,
  siteInfo,
} from "@/content/site";

export default function PricingPage() {
  return (
    <div className="text-brand-ink">
      <section className="bg-brand-mist py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-champagne">
            Pricing
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-6xl">
            Clear packages with travel included
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-brand-shadow/80">
            Simple pricing, professional service, and concierge convenience. All
            packages include mobile travel within the service area and standard
            notarization fees.
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
              className="rounded-sm border border-brand-ink/30 px-6 py-3 text-sm font-semibold tracking-[0.12em] text-brand-ink transition hover:border-brand-champagne hover:text-brand-champagne"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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

          <div className="mt-10 rounded-lg border border-brand-stone/70 bg-white/85">
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
      </section>

      <ContactSection />
    </div>
  );
}
