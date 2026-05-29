import type { Metadata } from "next";

import { InternalCalc } from "@/components/InternalCalc";

export const metadata: Metadata = {
  title: "Internal Pricing Calculator",
  // Keep this internal tool out of search engines.
  robots: { index: false, follow: false },
};

export default function InternalCalcPage() {
  return (
    <div className="text-brand-ink">
      <section className="py-16">
        <div className="mx-auto w-full max-w-5xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-champagne">
            Internal Tool
          </p>
          <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Pricing Calculator
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-brand-shadow/80">
            Estimate a quote from the number of signatures and the appointment
            location. Not linked anywhere on the public site.
          </p>

          <div className="mt-10">
            <InternalCalc />
          </div>
        </div>
      </section>
    </div>
  );
}
