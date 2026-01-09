import Image from "next/image";
import Link from "next/link";

import { services, siteInfo } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-brand-stone/70 bg-brand-ink text-brand-ivory">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-14 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <Image
            src="/logo.png"
            alt="Cali Mobile Notary"
            width={220}
            height={56}
            className="h-12 w-auto object-contain"
          />
          <p className="mt-3 text-sm text-brand-ivory/80">{siteInfo.tagline}</p>
          <div className="mt-6 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-champagne">
            {siteInfo.trustBadges.map((badge) => (
              <span key={badge} className="rounded-sm border border-brand-champagne/40 px-3 py-1">
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-champagne">
            Quick Links
          </p>
          <div className="mt-4 flex flex-col gap-2 text-sm text-brand-ivory/80">
            <Link href="/services" className="transition hover:text-brand-champagne">
              Services
            </Link>
            <Link href="/about" className="transition hover:text-brand-champagne">
              About
            </Link>
            <Link href="/pricing" className="transition hover:text-brand-champagne">
              Pricing
            </Link>
            <Link href="/contact" className="transition hover:text-brand-champagne">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-champagne">
            Services
          </p>
          <div className="mt-4 flex flex-col gap-2 text-sm text-brand-ivory/80">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="transition hover:text-brand-champagne"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-champagne">
            Contact
          </p>
          <div className="mt-4 space-y-2 text-sm text-brand-ivory/80">
            <p>{siteInfo.address}</p>
            <a href={siteInfo.phoneHref} className="block hover:text-brand-champagne">
              {siteInfo.phoneDisplay}
            </a>
            <a href={`mailto:${siteInfo.email}`} className="block hover:text-brand-champagne">
              {siteInfo.email}
            </a>
            <p>{siteInfo.hours.weekday}</p>
            <p>{siteInfo.hours.weekend}</p>
            <p className="text-brand-champagne">{siteInfo.hours.emergency}</p>
          </div>
          <div className="mt-5 space-y-2 text-xs uppercase tracking-[0.2em] text-brand-champagne">
            <p>{siteInfo.credentials.commission}</p>
            <p>{siteInfo.credentials.license}</p>
            <p>{siteInfo.credentials.bondedInsured}</p>
            <p>{siteInfo.credentials.backgroundChecked}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-ivory/70">
            {Object.entries(siteInfo.social).map(([label, url]) => (
              <a
                key={label}
                href={url}
                className="rounded-sm border border-brand-ivory/20 px-3 py-1 transition hover:text-brand-champagne"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-brand-ivory/10 py-6 text-center text-xs uppercase tracking-[0.3em] text-brand-ivory/70">
        <p>
          (c) {new Date().getFullYear()} {siteInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
