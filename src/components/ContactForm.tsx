"use client";

import { services, siteInfo } from "@/content/site";
import { trackFormSubmit } from "@/lib/tracking";

export function ContactForm() {
  const handleSubmit = () => {
    trackFormSubmit("contact_form");
  };

  return (
    <form
      action={siteInfo.formAction}
      method="post"
      onSubmit={handleSubmit}
      className="rounded-lg border border-brand-ivory/20 bg-brand-ivory/5 p-8"
    >
      <div className="grid gap-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          className="w-full rounded-sm border border-brand-ivory/20 bg-transparent px-4 py-3 text-sm text-brand-ivory placeholder:text-brand-ivory/50 focus:border-brand-champagne focus:outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          className="w-full rounded-sm border border-brand-ivory/20 bg-transparent px-4 py-3 text-sm text-brand-ivory placeholder:text-brand-ivory/50 focus:border-brand-champagne focus:outline-none"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="w-full rounded-sm border border-brand-ivory/20 bg-transparent px-4 py-3 text-sm text-brand-ivory placeholder:text-brand-ivory/50 focus:border-brand-champagne focus:outline-none"
        />
        <select
          name="service"
          className="w-full rounded-sm border border-brand-ivory/20 bg-brand-ink px-4 py-3 text-sm text-brand-ivory focus:border-brand-champagne focus:outline-none"
        >
          <option value="">Select Service</option>
          {services.map((service) => (
            <option key={service.slug} value={service.title}>
              {service.title}
            </option>
          ))}
        </select>
        <textarea
          name="message"
          placeholder="Tell us about your request"
          rows={4}
          className="w-full rounded-sm border border-brand-ivory/20 bg-transparent px-4 py-3 text-sm text-brand-ivory placeholder:text-brand-ivory/50 focus:border-brand-champagne focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="mt-6 w-full rounded-sm bg-brand-champagne px-6 py-3 text-sm font-semibold tracking-[0.12em] text-brand-ink shadow-lg shadow-brand-champagne/30 transition hover:bg-brand-champagne-soft"
      >
        Send Request
      </button>
    </form>
  );
}
