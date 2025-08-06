import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function CoconutPapayaEnzymePeelHero() {
  return (
    <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/coconut-papaya-enzyme-peel-facial-treatment-services-rejuvenate-skin-spa-queen-creek-az.jpg"
          alt="Coconut-Papaya Enzyme Peel Treatment"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/70 to-yellow-900/70" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6 leading-tight">Coconut-Papaya Enzyme Peel</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Indulge in our tropical hydrating treatment that combines coconut's nourishing properties with papaya's gentle
          exfoliation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-3 text-lg">
            Book Treatment - $95
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg bg-transparent"
          >
            View Packages
          </Button>
        </div>
      </div>
    </section>
  )
}
