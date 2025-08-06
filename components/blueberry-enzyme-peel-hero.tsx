"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function BlueberryEnzymePeelHero() {
  const scrollToTreatment = () => {
    const treatmentSection = document.getElementById("treatment-overview")
    if (treatmentSection) {
      treatmentSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/blueberry-enzyme-peel-facial-treatment-services-rejuvenate-skin-spa-queen-creek-az.avif"
          alt="Blueberry Enzyme Peel Treatment at Rejuvenate Skin Spa"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/70" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6 leading-tight">Blueberry Enzyme Peel</h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Experience the antioxidant power of blueberries with our gentle enzyme peel, perfect for sensitive skin and
          natural renewal.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-3 text-lg">
            Book Treatment - $89
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg bg-transparent"
            onClick={scrollToTreatment}
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}
