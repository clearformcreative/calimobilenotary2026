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
    default: "Cali Mobile Notary | Premium Mobile Notary Services",
    template: "%s | Cali Mobile Notary",
  },
  description:
    "Premium mobile notary services with concierge care across Southern California. Book an appointment or call for same-day availability.",
  applicationName: "Cali Mobile Notary",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Cali Mobile Notary | Premium Mobile Notary Services",
    description:
      "Concierge mobile notary services across Greater Los Angeles with clear packages and same-day availability.",
    url: "https://www.calimobilenotary.com",
    siteName: "Cali Mobile Notary",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cali Mobile Notary | Premium Mobile Notary Services",
    description:
      "Concierge mobile notary services across Greater Los Angeles with clear packages and same-day availability.",
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
