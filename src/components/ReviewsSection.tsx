import { testimonials, siteInfo } from "@/content/site";

export function ReviewsSection() {
  return (
    <section className="py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-champagne">
              Reviews
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-brand-ink md:text-5xl">
              Trusted by discerning clients
            </h2>
            <div className="mt-3 h-1 w-20 bg-brand-champagne" />
          </div>
          <p className="text-sm text-brand-shadow/80">
            {siteInfo.reviewSummary.rating} stars • {siteInfo.reviewSummary.count} reviews
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-lg border border-brand-stone/70 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-champagne hover:shadow-[0_18px_55px_rgba(199,166,106,0.2)]"
            >
              <p className="text-sm text-brand-shadow/80">"{testimonial.quote}"</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-ink">
                {testimonial.name} • {testimonial.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
