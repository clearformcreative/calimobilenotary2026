import { siteInfo } from "@/content/site";

export function ServiceAreaSection() {
  return (
    <section className="bg-brand-mist py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-champagne">
            Service Area
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Serving Greater Los Angeles with mobile convenience
          </h2>
          <div className="mt-3 h-1 w-20 bg-brand-champagne" />
          <p className="mt-4 text-sm text-brand-shadow/80">
            Transparent travel fees and clear scheduling across your preferred
            neighborhoods.
          </p>
        </div>
        <div className="rounded-lg border border-brand-stone/70 bg-white/90 p-6 shadow-sm transition hover:border-brand-champagne hover:shadow-[0_18px_55px_rgba(199,166,106,0.2)]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-champagne">
            Coverage
          </p>
          <div className="mt-4 grid gap-3 text-sm text-brand-shadow/80 sm:grid-cols-2">
            {siteInfo.serviceAreas.map((area) => (
              <div key={area} className="rounded-sm border border-brand-stone/60 px-4 py-2">
                {area}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
