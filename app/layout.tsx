import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StickyMobilePhoneCta } from "@/components/sticky-mobile-phone-cta"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.rejuvenateskinspa.com"

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
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "additionalType": "https://schema.org/MedicalBusiness",
    "@id": "https://www.rejuvenateskinspa.com/#localbusiness",
    "name": "Rejuvenate Skin Spa",
    "alternateName": "Rejuvenate Skin Spa Queen Creek",
    "description": "Rejuvenate Skin Spa is a premier medical aesthetics spa in Queen Creek, Arizona, specializing in Plexr plasma skin tightening, microneedling, SQT bio-microneedling, chemical peels, and luxury facial treatments.",
    "url": "https://www.rejuvenateskinspa.com/",
    "telephone": "+14802049366",
    "email": "info@rejuvenateskinspa.com",
    "image": "https://www.rejuvenateskinspa.com/og/og-home.jpg",
    "logo": "https://www.rejuvenateskinspa.com/images/rejuvenate-logo.webp",
    "priceRange": "$$",
    "currenciesAccepted": "USD",
    "paymentAccepted": "Cash, Credit Card",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "20162 E. Sonoqui Blvd.",
      "addressLocality": "Queen Creek",
      "addressRegion": "AZ",
      "postalCode": "85142",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.2486,
      "longitude": -111.6343
    },
    "areaServed": [
      { "@type": "City", "name": "Queen Creek", "sameAs": "https://en.wikipedia.org/wiki/Queen_Creek,_Arizona" },
      { "@type": "City", "name": "San Tan Valley" },
      { "@type": "City", "name": "Gilbert" },
      { "@type": "City", "name": "Mesa" },
      { "@type": "City", "name": "Chandler" },
      { "@type": "City", "name": "Apache Junction" }
    ],
    "openingHoursSpecification": [
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "18:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "09:00", "closes": "17:00" }
    ],
    "sameAs": [
      "https://www.instagram.com/rejuvenateskinspa/",
      "https://www.facebook.com/people/Rejuvenate-Skin-Spa/100086475380527/"
    ]
  }

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.rejuvenateskinspa.com/#organization",
    "name": "Rejuvenate Skin Spa",
    "url": "https://www.rejuvenateskinspa.com/",
    "logo": "https://www.rejuvenateskinspa.com/images/rejuvenate-logo.webp",
    "telephone": "+14802049366",
    "email": "info@rejuvenateskinspa.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "20162 E. Sonoqui Blvd.",
      "addressLocality": "Queen Creek",
      "addressRegion": "AZ",
      "postalCode": "85142",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://www.instagram.com/rejuvenateskinspa/",
      "https://www.facebook.com/people/Rejuvenate-Skin-Spa/100086475380527/"
    ]
  }

  const webSiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.rejuvenateskinspa.com/#website",
    "url": "https://www.rejuvenateskinspa.com/",
    "name": "Rejuvenate Skin Spa",
    "publisher": {
      "@id": "https://www.rejuvenateskinspa.com/#organization"
    }
  }

  return (
    <html lang="en">
      <head>
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
        <Header />
        <main className="min-h-screen pb-24 md:pb-0">{children}</main>
        <Footer />
        <StickyMobilePhoneCta />
      </body>
    </html>
  )
}
