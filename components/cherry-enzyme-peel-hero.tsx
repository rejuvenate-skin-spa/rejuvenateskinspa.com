"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function CherryEnzymePeelHero() {
  const scrollToTreatment = () => {
    const element = document.getElementById("treatment-overview")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/cherry-enzyme-peel-facial-treatment-services-rejuvenate-skin-spa-queen-creek-az.avif"
          alt="Cherry Enzyme Peel Facial Treatment at Rejuvenate Skin Spa"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-4 leading-tight">
          Cherry Enzyme Peel
        </h1>
        <p className="text-lg md:text-xl mb-6 opacity-90 max-w-3xl mx-auto">
          Brighten and revitalize your skin with our antioxidant-rich cherry enzyme peel treatment
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-3" onClick={scrollToTreatment}>
            Learn More
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-sage-600 px-8 py-3 bg-transparent"
          >
            Book Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}
