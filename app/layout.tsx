import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StickyMobilePhoneCta } from "@/components/sticky-mobile-phone-cta"
import { siteConfig } from "@/lib/site-config"
import {
  buildLocalBusiness,
  buildOrganization,
  buildWebSite,
} from "@/lib/schema"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const siteUrl = siteConfig.url

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Rejuvenate Skin Spa | Advanced Skincare Treatments | Queen Creek, AZ",
  description:
    "Transform your skin with advanced skincare treatments at Rejuvenate Skin Spa in Queen Creek, Arizona. Specializing in Plexr plasma skin tightening, chemical peels, microneedling, and luxury facial services.",
  keywords:
    "skin spa, plasma treatment, chemical peels, facial treatments, skincare, Queen Creek Arizona",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    title: "Rejuvenate Skin Spa",
    description:
      "Advanced skincare treatments including Plexr plasma skin tightening, chemical peels, microneedling, and luxury facial services in Queen Creek, AZ.",
    url: siteUrl,
    siteName: "Rejuvenate Skin Spa",
    images: [
      {
        url: `${siteUrl}/og/og-home.jpg`,
        width: 1200,
        height: 630,
        alt: "Rejuvenate Skin Spa in Queen Creek, Arizona",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rejuvenate Skin Spa",
    description:
      "Advanced skincare treatments including Plexr plasma skin tightening, chemical peels, microneedling, and luxury facial services in Queen Creek, AZ.",
    images: [
      {
        url: `${siteUrl}/og/og-home.jpg`,
        width: 1200,
        height: 630,
        alt: "Rejuvenate Skin Spa in Queen Creek, Arizona",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID

  const localBusinessJsonLd = buildLocalBusiness()
  const organizationJsonLd = buildOrganization()
  const webSiteJsonLd = buildWebSite()

  return (
    <html lang="en">
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLMs Index" />
        <link rel="alternate" type="text/plain" href="/ai.txt" title="AI Discovery" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        {gtmId ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        ) : null}
        {gtmId ? (
          <Script id="gtm" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');
            `}
          </Script>
        ) : null}
        <Header />
        <main className="min-h-screen pb-24 md:pb-0">{children}</main>
        <Footer />
        <StickyMobilePhoneCta />
      </body>
    </html>
  )
}
