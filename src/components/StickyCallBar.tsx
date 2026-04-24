import { siteInfo } from "@/content/site";
import { TrackedBookingLink, TrackedPhoneLink } from "@/components/TrackedLink";

export function StickyCallBar() {
  return (
    <div
      aria-label="Quick contact"
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-brand-stone/70 bg-brand-ink/95 shadow-[0_-12px_30px_rgba(0,0,0,0.25)] backdrop-blur md:hidden"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-2">
        <TrackedPhoneLink
          href={siteInfo.phoneHref}
          className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-brand-ivory transition active:bg-brand-shadow/40"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
            <path
              d="M4.5 5.5c0-.55.45-1 1-1h2.3c.4 0 .76.24.92.6l1 2.4c.15.37.07.79-.22 1.07l-1.3 1.3a11 11 0 0 0 5 5l1.3-1.3c.28-.29.7-.37 1.07-.22l2.4 1c.36.16.6.52.6.92v2.3c0 .55-.45 1-1 1A14.5 14.5 0 0 1 4.5 5.5z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Call
        </TrackedPhoneLink>
        <TrackedBookingLink
          href="/#book"
          className="flex items-center justify-center gap-2 bg-brand-champagne px-4 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-brand-ink transition active:bg-brand-champagne-soft"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
            <path
              d="M6 4v3M18 4v3M4 9h16M5 7h14a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Book
        </TrackedBookingLink>
      </div>
    </div>
  );
}
