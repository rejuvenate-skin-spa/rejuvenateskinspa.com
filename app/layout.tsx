import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rejuvenateskinspa.com"),
  title: "Rejuvenate Skin Spa - Advanced Skincare Treatments | Queen Creek, AZ",
  description:
    "Transform your skin with advanced skincare treatments at Rejuvenate Skin Spa in Queen Creek, Arizona. Specializing in Plexr plasma skin tightening, chemical peels, microneedling, and luxury facial services.",
  keywords:
    "skin spa, plasma treatment, chemical peels, facial treatments, skincare, Queen Creek Arizona",
  generator: "v0.app",
  openGraph: {
    title:
      "Rejuvenate Skin Spa | Advanced Skincare Treatments | Queen Creek, AZ",
    description:
      "Transform your skin with advanced skincare treatments at Rejuvenate Skin Spa in Queen Creek, Arizona. Specializing in Plexr plasma skin tightening, chemical peels, microneedling, and luxury facial services.",
    url: "https://www.rejuvenateskinspa.com",
    siteName: "Rejuvenate Skin Spa",
    images: [
      {
        url: "/images/rejuvenate-logo.webp",
        width: 1200,
        height: 630,
        alt: "Rejuvenate Skin Spa - Advanced Skincare Treatments",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Rejuvenate Skin Spa | Advanced Skincare Treatments | Queen Creek, AZ",
    description:
      "Transform your skin with advanced skincare treatments at Rejuvenate Skin Spa in Queen Creek, Arizona.",
    images: ["/images/rejuvenate-logo.webp"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HealthAndBeautyBusiness"],
    "@id": "https://www.rejuvenateskinspa.com/#localbusiness",
    "name": "Rejuvenate Skin Spa",
    "description": "Rejuvenate Skin Spa is a premier medical aesthetics spa in Queen Creek, Arizona, specializing in Plexr plasma skin tightening, microneedling, SQT bio-microneedling, chemical peels, and luxury facial treatments.",
    "url": "https://www.rejuvenateskinspa.com/",
    "telephone": "+14802049366",
    "email": "info@rejuvenateskinspa.com",
    "image": "https://www.rejuvenateskinspa.com/images/rejuvenate-logo.webp",
    "logo": "https://www.rejuvenateskinspa.com/images/rejuvenate-logo.webp",
    "priceRange": "$$",
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
      { "@type": "City", "name": "Queen Creek" },
      { "@type": "City", "name": "San Tan Valley" },
      { "@type": "City", "name": "Gilbert" },
      { "@type": "City", "name": "Mesa" },
      { "@type": "City", "name": "Chandler" }
    ],
    "openingHoursSpecification": [
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "18:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "09:00", "closes": "17:00" }
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
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
