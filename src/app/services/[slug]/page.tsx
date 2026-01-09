import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ContactSection } from "@/components/ContactSection";
import { services, siteInfo } from "@/content/site";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};

  return {
    title: `${service.title} | Cali Mobile Notary`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const otherServices = services.filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <div className="text-brand-ink">
      <section className="relative overflow-hidden bg-brand-ink py-20 text-brand-ivory">
        <div className="absolute inset-0">
          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            className="object-cover opacity-35"
          />
        </div>
        <div className="relative mx-auto w-full max-w-6xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-champagne">
            Service
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-6xl">
            {service.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-brand-ivory/80">
            {service.description}
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
          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-champagne">
                Overview
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-brand-ink">
                What to expect
              </h2>
            </div>
            <p className="text-sm text-brand-shadow/80">{service.description}</p>
            <div className="rounded-lg border border-brand-stone/70 bg-white/90 p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-champagne">
                Highlights
              </p>
              <ul className="mt-4 space-y-2 text-sm text-brand-shadow/80">
                {service.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-champagne" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative min-h-[320px] overflow-hidden rounded-lg border border-brand-stone/70">
            <Image
              src={service.heroImage}
              alt={`${service.title} detail`}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-brand-mist py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="rounded-lg border border-brand-stone/70 bg-white/90 p-8 shadow-sm">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-champagne">
                  Ready to Book
                </p>
                <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-brand-ink">
                  Secure your appointment in minutes
                </h2>
                <p className="mt-3 text-sm text-brand-shadow/80">
                  We confirm quickly and arrive prepared with everything needed for
                  a smooth signing.
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
                  className="rounded-sm border border-brand-ink/30 px-6 py-3 text-sm font-semibold tracking-[0.12em] text-brand-ink transition hover:border-brand-champagne hover:text-brand-champagne"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-champagne">
                Other Services
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-brand-ink">
                Explore more notary support
              </h2>
            </div>
            <Link
              href="/services"
              className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-ink transition hover:text-brand-champagne"
            >
              View All
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {otherServices.map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="rounded-lg border border-brand-stone/70 bg-white/90 p-5 shadow-sm transition hover:-translate-y-1 hover:border-brand-champagne hover:shadow-[0_18px_55px_rgba(199,166,106,0.2)]"
              >
                <h3 className="text-lg font-semibold text-brand-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-brand-shadow/80">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
