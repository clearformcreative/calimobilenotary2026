"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { services, siteInfo } from "@/content/site";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M7 17L17 7M10 7h7v7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CaretIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M6 9l6 6 6-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-brand-stone/70 bg-brand-ivory/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Cali Mobile Notary"
            width={220}
            height={56}
            className="h-12 w-auto object-contain"
            priority
          />
          <span className="sr-only">Cali Mobile Notary</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-bold uppercase tracking-[0.14em] text-brand-ink lg:flex">
          <Link href="/" className="transition hover:text-brand-champagne">
            Home
          </Link>
          <div className="group relative">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 transition hover:text-brand-champagne focus:text-brand-champagne"
            >
              Services
              <CaretIcon className="h-4 w-4 text-brand-champagne/80" />
            </Link>
            <div className="invisible absolute left-1/2 top-full mt-3 w-[22rem] -translate-x-1/2 translate-y-2 rounded-lg border border-brand-stone/60 bg-white/95 p-6 opacity-0 shadow-xl transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 before:absolute before:-top-4 before:left-0 before:h-4 before:w-full before:content-['']">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-champagne">
                All Services
              </p>
              <div className="mt-3 grid gap-2 text-sm font-medium normal-case tracking-normal text-brand-shadow">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="flex items-center justify-between border-b border-brand-stone/50 pb-2 transition hover:text-brand-champagne"
                  >
                    {service.title}
                    <ArrowIcon className="h-4 w-4 text-brand-champagne" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {navLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-brand-champagne"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={siteInfo.bookingUrl}
            className="rounded-sm border border-brand-champagne/70 px-5 py-2 text-sm font-semibold uppercase tracking-[0.12em] text-brand-ink shadow-sm transition hover:border-brand-champagne hover:text-brand-champagne"
          >
            Book Appointment
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
          className="flex items-center gap-2 rounded-sm border border-brand-ink/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-ink transition hover:border-brand-champagne hover:text-brand-champagne lg:hidden"
        >
          Menu
          <span className="text-lg">{mobileOpen ? "X" : "|||"} </span>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="border-t border-brand-stone/70 bg-brand-ivory px-6 pb-6 lg:hidden"
          >
            <div className="flex flex-col gap-4 pt-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand-ink">
              <Link href="/" onClick={() => setMobileOpen(false)}>
                Home
              </Link>
              <details className="group">
                <summary className="cursor-pointer list-none">Services</summary>
                <div className="mt-3 flex flex-col gap-2 pl-3 text-xs font-medium uppercase tracking-[0.2em] text-brand-shadow">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="transition hover:text-brand-champagne"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </details>
              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={siteInfo.phoneHref}
                className="mt-2 rounded-sm border border-brand-champagne/60 px-4 py-2 text-center text-xs font-semibold uppercase tracking-[0.2em] text-brand-ink"
              >
                Call {siteInfo.phoneDisplay}
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
