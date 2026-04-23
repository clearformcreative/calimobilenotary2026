import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import Script from "next/script";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollToTop } from "@/components/ScrollToTop";
import "./globals.css";

const GTM_ID = "GTM-KRTK55Q3";

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.calimobilenotary.com"),
  title: {
    default: "Mobile Notary Los Angeles | Cali Mobile Notary | Same-Day Service",
    template: "%s | Cali Mobile Notary",
  },
  description:
    "Mobile notary services in Los Angeles & Southern California. Same-day appointments, travel to you. POA, trusts, I-9 verification. Call (323) 364-2121.",
  keywords: [
    "mobile notary Los Angeles",
    "notary public near me",
    "mobile notary service",
    "traveling notary",
    "notary public Los Angeles",
    "mobile notary Santa Monica",
    "mobile notary Beverly Hills",
    "mobile notary Pasadena",
    "same day notary",
    "power of attorney notary",
    "trust notary",
    "I-9 verification",
    "notary signing agent",
    "mobile notary Southern California",
  ],
  applicationName: "Cali Mobile Notary",
  authors: [{ name: "Cali Mobile Notary" }],
  creator: "Cali Mobile Notary",
  publisher: "Cali Mobile Notary",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: "https://www.calimobilenotary.com",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Mobile Notary Los Angeles | Cali Mobile Notary",
    description:
      "Premium mobile notary services across Greater Los Angeles. Same-day appointments, clear pricing, we travel to you. Call (323) 364-2121.",
    url: "https://www.calimobilenotary.com",
    siteName: "Cali Mobile Notary",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cali Mobile Notary - Mobile Notary Services in Los Angeles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Notary Los Angeles | Cali Mobile Notary",
    description:
      "Premium mobile notary services across Greater Los Angeles. Same-day appointments, we travel to you.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  other: {
    "geo.region": "US-CA",
    "geo.placename": "Los Angeles",
    "geo.position": "34.0522;-118.2437",
    ICBM: "34.0522, -118.2437",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />
      </head>
      <body className={`${display.variable} ${bodyFont.variable} antialiased`}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Header />
        <ScrollToTop />
        <main className="pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
