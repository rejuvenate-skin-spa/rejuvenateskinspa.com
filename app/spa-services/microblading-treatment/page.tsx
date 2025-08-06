import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, Shield, Star, Eye, Palette } from "lucide-react"
import Image from "next/image"
import MicrobladingTreatmentFAQ from "@/components/microblading-treatment-faq"

export default function MicrobladingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-r from-sage-100 to-sage-50 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-gray-900 leading-tight">
                Professional
                <span className="text-sage-600 block">Microblading</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                Semi-permanent eyebrow enhancement using precise hair-stroke technique. Wake up every day with perfectly
                shaped, natural-looking brows.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-sage-600 hover:bg-sage-700 text-white">
                  Book Consultation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-sage-300 text-sage-700 hover:bg-sage-50 bg-transparent"
                >
                  View Portfolio
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500&text=Microblading+Results"
                alt="Microblading eyebrow enhancement"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-6">
                Perfect Brows, Every Day
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Microblading is a semi-permanent cosmetic tattooing technique that creates natural-looking eyebrow
                  hair strokes. Using a specialized hand tool with ultra-fine needles, our certified technicians deposit
                  pigment into the skin to mimic individual brow hairs.
                </p>
                <p>
                  This meticulous process creates fuller, more defined eyebrows that look completely natural. Perfect
                  for those with sparse, over-plucked, or uneven brows, microblading can transform your entire face and
                  save you time on your daily makeup routine.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500&text=Natural+Brow+Enhancement"
                alt="Natural eyebrow enhancement"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Features */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Why Choose Microblading?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your brows and simplify your beauty routine with lasting results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Eye,
                title: "Natural-Looking Results",
                description: "Hair-stroke technique creates incredibly realistic eyebrow hairs that blend seamlessly.",
              },
              {
                icon: Clock,
                title: "Long-Lasting",
                description: "Results last 1-3 years with proper care and occasional touch-ups.",
              },
              {
                icon: Palette,
                title: "Customized Color",
                description: "Pigment color is perfectly matched to your natural hair color and skin tone.",
              },
              {
                icon: Star,
                title: "Time-Saving",
                description: "Wake up with perfect brows every day - no more daily eyebrow makeup routine.",
              },
              {
                icon: Shield,
                title: "Safe & Sterile",
                description: "All tools are sterile and single-use, following strict health and safety protocols.",
              },
              {
                icon: CheckCircle,
                title: "Certified Technician",
                description: "Performed by our certified microblading specialist with years of experience.",
              },
            ].map((benefit, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-sm">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-sage-600 text-white rounded-full mb-4">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              The Microblading Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A detailed, artistic process that creates your perfect brows.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Discuss your goals and assess your natural brow shape and skin type.",
              },
              {
                step: "02",
                title: "Design & Mapping",
                description: "Create the perfect brow shape using precise measurements and mapping.",
              },
              {
                step: "03",
                title: "Color Selection",
                description: "Choose the ideal pigment color to complement your features.",
              },
              {
                step: "04",
                title: "Microblading",
                description: "Carefully create individual hair strokes using specialized technique.",
              },
              {
                step: "05",
                title: "Touch-Up",
                description: "6-8 week follow-up appointment to perfect and refine results.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-600 text-white rounded-full text-xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Packages */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Investment in Your Beauty
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Complete Microblading",
                price: "$450",
                duration: "Initial + Touch-up",
                features: [
                  "Initial 2-3 hour session",
                  "6-8 week touch-up included",
                  "Custom brow design",
                  "Aftercare kit included",
                  "1-year warranty",
                ],
                popular: true,
              },
              {
                title: "Touch-Up Session",
                price: "$150",
                duration: "1-2 hours",
                features: [
                  "Color refresh",
                  "Shape refinement",
                  "For existing clients",
                  "Recommended every 12-18 months",
                  "Maintains perfect results",
                ],
              },
            ].map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? "ring-2 ring-sage-600" : ""}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-sage-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Complete Package
                    </span>
                  </div>
                )}
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{pkg.title}</h3>
                  <div className="text-4xl font-bold text-sage-600 mb-2">{pkg.price}</div>
                  <p className="text-gray-500 mb-6">{pkg.duration}</p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-600 flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-sage-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${pkg.popular ? "bg-sage-600 hover:bg-sage-700 text-white" : "bg-white border border-sage-600 text-sage-600 hover:bg-sage-50"}`}
                  >
                    Book Consultation
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Aftercare Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">Aftercare & Healing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proper aftercare ensures the best results and longevity of your microblading.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Healing Timeline</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-sage-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Days 1-7: Initial Healing</h4>
                    <p className="text-gray-600">Brows appear darker and bolder. Keep dry and apply healing balm.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-sage-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Days 7-14: Peeling Phase</h4>
                    <p className="text-gray-600">Light scabbing and peeling. Color appears lighter - this is normal.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-sage-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Days 14-30: Color Return</h4>
                    <p className="text-gray-600">True color emerges as skin fully heals. Brows look natural.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500&text=Healing+Process"
                alt="Microblading healing process"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <MicrobladingTreatmentFAQ />

      {/* CTA Section */}
      <section className="py-16 bg-sage-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-4">Ready for Perfect Brows Every Day?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Transform your eyebrows with our expert microblading service and wake up beautiful every morning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-sage-600 hover:bg-gray-100">
              Book Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-sage-600 bg-transparent"
            >
              Call (555) 123-4567
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
