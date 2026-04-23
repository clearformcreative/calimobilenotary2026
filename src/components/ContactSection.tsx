import { services, siteInfo } from "@/content/site";
import { TrackedPhoneLink, TrackedBookingLink } from "./TrackedLink";
import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <section id="contact" className="bg-brand-ink py-20 text-brand-ivory">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-champagne">
            Contact
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Prefer a message? We respond quickly.
          </h2>
          <p className="mt-4 text-base text-brand-ivory/80">
            Concierge-level service with clear communication. If you prefer to book,
            use the appointment link or call directly.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <TrackedBookingLink
              href="/#book"
              className="rounded-sm bg-brand-champagne px-6 py-3 text-sm font-semibold tracking-[0.12em] text-brand-ink shadow-lg shadow-brand-champagne/30 transition hover:bg-brand-champagne-soft"
            >
              Book an Appointment
            </TrackedBookingLink>
            <TrackedPhoneLink
              href={siteInfo.phoneHref}
              className="rounded-sm border border-brand-ivory/40 px-6 py-3 text-sm font-semibold tracking-[0.12em] text-brand-ivory transition hover:border-brand-champagne hover:text-brand-champagne"
            >
              Call Now
            </TrackedPhoneLink>
          </div>

          <div className="mt-8 space-y-3 text-sm text-brand-ivory/80">
            <p className="text-base font-semibold text-brand-ivory">{siteInfo.name}</p>
            <p>{siteInfo.address}</p>
            <p>{siteInfo.hours.weekday}</p>
            <p>{siteInfo.hours.friday}</p>
            <p>{siteInfo.hours.weekend}</p>
            <p className="text-brand-champagne">{siteInfo.hours.emergency}</p>
            <TrackedPhoneLink href={siteInfo.phoneHref} className="block text-lg text-brand-ivory">
              {siteInfo.phoneDisplay}
            </TrackedPhoneLink>
            <a href={`mailto:${siteInfo.email}`} className="block">
              {siteInfo.email}
            </a>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
