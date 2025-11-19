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
    url: "https://rejuvenateskinspa.com",
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
  return (
    <html lang="en">
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
