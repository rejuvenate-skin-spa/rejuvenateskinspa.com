"use client"

import { Button } from "@/components/ui/button"
import { Instagram } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const placeholderImages = [
  {
    src: "/images/plexr-plasma-results.jpg",
    alt: "Plasma skin tightening results",
  },
  {
    src: "/images/glycolic-acid-peel-results-2.jpg",
    alt: "Chemical peel results",
  },
  {
    src: "/images/microneedling-feature.jpg",
    alt: "Microneedling treatment results",
  },
  {
    src: "/images/biorepeel-real-results-1.png",
    alt: "BioRePeel treatment results",
  },
  {
    src: "/images/dermaplaning-facial-hero.jpg",
    alt: "Dermaplaning facial results",
  },
  {
    src: "/images/eyebrow-lamination-results.jpg",
    alt: "Eyebrow lamination results",
  },
]

export default function PortfolioPageClient() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[400px] py-16 overflow-hidden flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/spa-services-rejuventate-skin-spa-queen-creek-az.avif"
            alt="Rejuvenate Skin Spa treatment room"
            fill
            className="object-cover"
            priority
          />
          {/* 
          Hero overlay: Left-to-right gradient keeps text readable while letting 
          the hero image shine through on the right for a brighter, premium feel.
        */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-black/5"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="max-w-2xl">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-playfair font-bold text-white leading-tight">
                Results You Can See
              </h1>
              <p className="text-xl text-gray-100 max-w-lg">
                Our portfolio is coming soon! In the meantime, follow us on
                Instagram to see real client transformations and behind-the-scenes
                content.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white shadow-lg rounded-md px-6 py-2"
                >
                  <Link
                    href="https://instagram.com/rejuvenateskinspa"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="mr-2 h-5 w-5" />
                    Follow on Instagram
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Grid Section */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Transformations Coming Soon
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're curating our best before &amp; after results to showcase here.
              Check back soon or follow our Instagram for daily updates.
            </p>
          </div>

          {/* 6-tile placeholder grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {placeholderImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-lg overflow-hidden group"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Subtle overlay with "Coming Soon" */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-medium text-sm md:text-base px-4 py-2 bg-black/50 rounded-full backdrop-blur-sm">
                    Coming Soon
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sage-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-4">
            Ready to See Your Own Transformation?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join the hundreds of clients who have achieved their skincare goals
            with Rejuvenate Skin Spa.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              className="bg-white text-sage-600 hover:bg-gray-100 px-6 py-2 shadow-lg"
            >
              <Link href="/about-us/contact-us">Get in Touch</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-6 py-2"
            >
              <Link
                href="https://instagram.com/rejuvenateskinspa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="mr-2 h-5 w-5" />
                Follow on Instagram
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

