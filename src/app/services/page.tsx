import Image from "next/image";
import Link from "next/link";

import { ContactSection } from "@/components/ContactSection";
import { services, siteInfo } from "@/content/site";

export default function ServicesPage() {
  return (
    <div className="text-brand-ink">
      <section className="relative overflow-hidden bg-brand-ink py-20 text-brand-ivory">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1450101215322-bf5cd27642fc?auto=format&fit=crop&w=2000&q=80"
            alt="Notary documents ready for signing"
            fill
            className="object-cover opacity-35"
          />
        </div>
        <div className="relative mx-auto w-full max-w-6xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-champagne">
            Services
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-6xl">
            Mobile notary services tailored to your needs
          </h1>
          <p className="mt-4 max-w-2xl text-base text-brand-ivory/80">
            From estate documents to business notarizations, every appointment is
            handled with clarity, discretion, and professionalism.
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
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group rounded-lg border border-brand-stone/70 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-champagne hover:shadow-[0_18px_55px_rgba(199,166,106,0.2)]"
              >
                <div className="relative h-44 overflow-hidden rounded-lg border border-brand-stone/60">
                  <Image
                    src={service.heroImage}
                    alt={service.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-brand-ink">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-brand-shadow/80">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-brand-shadow/80">
                  {service.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-champagne" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
