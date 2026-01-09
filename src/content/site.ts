export const siteInfo = {
  name: "Cali Mobile Notary",
  domain: "www.calimobilenotary.com",
  tagline:
    "Premium mobile notary services with concierge care across Southern California.",
  phoneDisplay: "(310) 555-0192",
  phoneHref: "tel:+13105550192",
  email: "hello@calimobilenotary.com",
  address: "Serving Greater Los Angeles, CA",
  bookingUrl: "https://booking.example.com",
  hours: {
    weekday: "Mon - Fri: 7:00AM - 8:00PM",
    weekend: "Sat - Sun: 8:00AM - 6:00PM",
    emergency: "Same-day appointments available",
  },
  credentials: {
    commission: "California Notary Commission #TBD",
    license: "Notary License #TBD",
    bondedInsured: "Bonded & Insured",
    backgroundChecked: "Background Checked",
    experience: "10+ Years Experience",
  },
  trustBadges: [
    "Commissioned Notary",
    "Bonded & Insured",
    "Background Checked",
    "Same-Day Availability",
    "Mobile Concierge Service",
  ],
  reviewSummary: {
    rating: "5.0",
    count: "120+",
  },
  serviceAreas: [
    "Los Angeles",
    "Santa Monica",
    "Beverly Hills",
    "Pasadena",
    "Glendale",
    "Orange County",
  ],
  formAction: "https://usebasin.com/f/your-form-id",
  social: {
    google: "https://g.page/r/your-profile",
    yelp: "https://www.yelp.com/biz/your-profile",
    instagram: "https://www.instagram.com/your-profile",
  },
};

export type Service = {
  slug: string;
  title: string;
  description: string;
  highlights: string[];
  heroImage: string;
};

export type PricingPackage = {
  title: string;
  details: string;
  price: string;
  includes: string[];
};

export const pricingPackages: PricingPackage[] = [
  {
    title: "Basic Package",
    details: "Up to 2 signatures",
    price: "$85",
    includes: [
      "Travel within service area",
      "ID verification + journal entry",
      "Document review for completeness",
      "Up to 2 notarized signatures",
    ],
  },
  {
    title: "Mid Package",
    details: "Up to 4 signatures",
    price: "$100",
    includes: [
      "Travel within service area",
      "ID verification + journal entry",
      "Document review for completeness",
      "Up to 4 notarized signatures",
    ],
  },
  {
    title: "Extended Package",
    details: "Up to 10 signatures",
    price: "$115",
    includes: [
      "Travel within service area",
      "ID verification + journal entry",
      "Document review for completeness",
      "Up to 10 notarized signatures",
    ],
  },
];

export const pricingNotes = [
  {
    title: "Travel Included",
    description: "Up to 50 miles round trip from 91301.",
  },
  {
    title: "Extended Distance",
    description: "$50 per 25 miles beyond the service area.",
  },
  {
    title: "After-Hours",
    description: "$25–$50 add-on for evenings or weekends.",
  },
  {
    title: "State Fee",
    description: "CA notary fee is $15 per signature, included in packages.",
  },
];

export const certificationBadges = [
  "California Commissioned Notary",
  "Bonded & Insured",
  "Background Screened",
  "E&O Insurance",
];

export const services: Service[] = [
  {
    slug: "real-estate-documents",
    title: "Real Estate Documents",
    description:
      "Mobile notarization for escrow, title, and real estate documentation with precise handling.",
    highlights: ["Escrow docs", "Grant deeds", "Seller affidavits"],
    heroImage:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "power-of-attorney",
    title: "Power of Attorney",
    description:
      "Respectful, discreet notarization for POA documents at home, office, or care facility.",
    highlights: ["Durable POA", "Healthcare POA", "Urgent cases"],
    heroImage:
      "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "trusts-and-wills",
    title: "Trusts & Wills",
    description:
      "Notarization for estate planning documents handled with calm, professional care.",
    highlights: ["Living trusts", "Wills", "Affidavits"],
    heroImage:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "healthcare-directives",
    title: "Healthcare Directives",
    description:
      "Mobile notarization for advance healthcare directives and related medical forms.",
    highlights: ["Advance directives", "Medical consents", "Care planning"],
    heroImage:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "i-9-verification",
    title: "I-9 Verification",
    description:
      "Authorized representative support for I-9 verification and completion.",
    highlights: ["Remote hires", "ID verification", "Employer coordination"],
    heroImage:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "business-notary-support",
    title: "Business Notary Support",
    description:
      "On-demand notary services for businesses, legal teams, and corporate offices.",
    highlights: ["On-site visits", "Bulk document support", "Priority scheduling"],
    heroImage:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=80",
  },
];

export const processSteps = [
  {
    title: "Schedule",
    description: "Book online or call to secure a convenient appointment time.",
  },
  {
    title: "We Arrive",
    description: "A commissioned notary meets you at your preferred location.",
  },
  {
    title: "Verify & Notarize",
    description: "We confirm IDs, witness signatures if needed, and notarize.",
  },
  {
    title: "Complete",
    description: "You leave with documents properly executed and ready to file.",
  },
];

export const faqs = [
  {
    question: "What IDs are accepted for notarization?",
    answer:
      "We accept valid government-issued photo IDs such as a driver's license, state ID, or passport.",
  },
  {
    question: "Do all signers need to be present?",
    answer:
      "Yes. All signers must be physically present with valid ID at the time of notarization.",
  },
  {
    question: "Do you provide witnesses?",
    answer:
      "Witness availability varies by request. Please let us know if witnesses are required.",
  },
  {
    question: "Can you visit hospitals or care facilities?",
    answer:
      "Yes. We offer discreet mobile service to hospitals, assisted living, and care facilities.",
  },
  {
    question: "How quickly can you arrive?",
    answer:
      "Same-day appointments are often available depending on location and schedule.",
  },
  {
    question: "What are your travel fees?",
    answer:
      "Travel fees are quoted upfront based on distance and appointment timing.",
  },
];

export const testimonials = [
  {
    quote:
      "Professional, punctual, and incredibly calm. The entire signing was seamless.",
    name: "S. Ramirez",
    location: "Santa Monica",
  },
  {
    quote:
      "Booked same-day, arrived on time, and handled everything with care and clarity.",
    name: "D. Patel",
    location: "Pasadena",
  },
  {
    quote:
      "A concierge-level experience. Clear instructions, no stress, and flawless execution.",
    name: "A. Chen",
    location: "Beverly Hills",
  },
];

export const whatToBring = [
  "Valid government-issued photo ID",
  "Unsigned documents ready for review",
  "All signers present",
  "Any required witnesses (if applicable)",
];
