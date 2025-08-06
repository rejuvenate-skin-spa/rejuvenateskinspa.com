import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function BioRePeelFacialChemicalPeelHero() {
  return (
    <section className="relative h-[500px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/biorepeel-hero.avif"
          alt="BioRePeel facial chemical peel treatment"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-white leading-tight mb-6">
              Revolutionary
              <span className="block">BioRePeel Treatment</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Advanced TCA peel technology that rejuvenates skin from within with minimal peeling and maximum results.
              Safe for all skin types year-round.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-sage-600 hover:bg-sage-700 text-white">
                Book Treatment
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
              >
                Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
