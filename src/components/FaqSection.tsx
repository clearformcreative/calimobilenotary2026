import { faqs, siteInfo } from "@/content/site";

export function FaqSection() {
  return (
    <section className="bg-brand-mist py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-champagne">
              FAQ
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
              Answers to common questions
            </h2>
            <div className="mt-3 h-1 w-20 bg-brand-champagne" />
          </div>
          <a
            href={siteInfo.phoneHref}
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.12em] text-brand-ink transition hover:text-brand-champagne"
          >
            Call Now
          </a>
        </div>
        <div className="mt-10 grid gap-4">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-lg border border-brand-stone/70 bg-white/90 p-6 transition hover:border-brand-champagne hover:shadow-[0_18px_55px_rgba(199,166,106,0.2)]"
            >
              <p className="text-sm font-semibold text-brand-ink">{faq.question}</p>
              <p className="mt-2 text-sm text-brand-shadow/80">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
