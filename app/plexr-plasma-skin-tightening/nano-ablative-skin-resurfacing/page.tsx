import { Metadata } from "next"
import NanoAblativeSkinResurfacingHero from "@/components/nano-ablative-skin-resurfacing-hero"
import NanoAblativeSkinResurfacingFAQ from "@/components/nano-ablative-skin-resurfacing-faq"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, Shield, Star, Zap, Heart, Users } from 'lucide-react'
import Image from "next/image"

export const metadata: Metadata = {
  title: "Nano-Ablative Skin Resurfacing | Plexr Plasma Treatment | Queen Creek, AZ",
  description: "Experience gentle nano-ablative skin resurfacing with Plexr plasma technology. Improve skin texture and tone with zero downtime at Rejuvenate Skin Spa in Queen Creek, Arizona.",
  keywords: "nano-ablative skin resurfacing, plexr plasma, skin texture, Queen Creek, Arizona, gentle resurfacing, no downtime",
}

export default function NanoAblativeSkinResurfacingPage() {
  return (
    <div className="min-h-screen">
      <NanoAblativeSkinResurfacingHero />

      {/* Treatment Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-6">
                Microscopic Skin Renewal with Zero Downtime
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Nano-ablative plasma skin resurfacing represents the most gentle form of plasma technology, working at
                  the microscopic level to stimulate collagen production and cellular renewal without damaging the
                  skin's protective barrier.
                </p>
                <p>
                  This innovative treatment uses controlled nano-level plasma energy to heat the skin's surface with
                  unprecedented precision, triggering the body's natural healing response and promoting the production
                  of new, healthy skin cells. The result is improved skin texture, reduced fine lines, and a more
                  radiant complexion.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500&text=Nano+Plasma+Technology"
                alt="Nano plasma technology process"
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
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">Treatment Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the advantages of advanced nano-ablative plasma technology with minimal discomfort and no
              recovery time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Zero Downtime",
                description:
                  "Return to your daily activities immediately after treatment with no recovery period needed.",
              },
              {
                icon: Shield,
                title: "Ultra-Gentle & Safe",
                description:
                  "Nano-level treatment that works microscopically, suitable for all skin types including sensitive skin.",
              },
              {
                icon: Star,
                title: "Collagen Boost",
                description: "Stimulates natural collagen production for firmer, more youthful-looking skin.",
              },
              {
                icon: Zap,
                title: "Immediate Results",
                description: "See visible improvements in skin texture and radiance right after treatment.",
              },
              {
                icon: Heart,
                title: "Comfortable Treatment",
                description: "Minimal discomfort during the procedure with most clients finding it very tolerable.",
              },
              {
                icon: Users,
                title: "All Skin Types",
                description: "Safe and effective for all skin types, including sensitive and darker skin tones.",
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

      {/* Treatment Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">Treatment Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nano-ablative plasma can be used on various areas of the face and body for comprehensive skin improvement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                area: "Face",
                description: "Full facial rejuvenation for improved texture and tone.",
                price: "$250",
                duration: "45 minutes",
              },
              {
                area: "Eyes & Eyelids",
                description: "Gentle tightening of delicate eye area and eyelids.",
                price: "$200",
                duration: "30 minutes",
              },
              {
                area: "Neck",
                description: "Tighten and smooth neck skin for a more youthful appearance.",
                price: "$200",
                duration: "30 minutes",
              },
              {
                area: "Décolletage",
                description: "Improve chest area skin texture and reduce sun damage.",
                price: "$300",
                duration: "45 minutes",
              },
            ].map((area, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 rounded-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{area.area}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{area.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="text-2xl font-bold text-sage-600">{area.price}</div>
                    <div className="text-sm text-gray-500">{area.duration}</div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-sage-300 text-sage-700 hover:bg-sage-50 rounded-md bg-transparent"
                  >
                    Book Area
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">Treatment Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your nano-ablative plasma treatment experience from consultation to results.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Comprehensive skin analysis and treatment planning.",
              },
              {
                step: "02",
                title: "Preparation",
                description: "Gentle cleansing and numbing cream application if needed.",
              },
              {
                step: "03",
                title: "Treatment",
                description: "Precise nano-ablative plasma application to targeted areas.",
              },
              {
                step: "04",
                title: "Aftercare",
                description: "Soothing application and post-treatment instructions.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-600 text-white rounded-full text-xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Packages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">Treatment Packages</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Single Treatment",
                price: "$250",
                duration: "45 minutes",
                features: [
                  "Nano-ablative plasma treatment",
                  "Skin consultation",
                  "Post-treatment care",
                  "Aftercare instructions",
                ],
              },
              {
                title: "Series of 3",
                price: "$675",
                duration: "3 treatments",
                features: [
                  "3 nano-ablative sessions",
                  "10% package savings",
                  "Customized treatment plan",
                  "Complimentary skincare consultation",
                ],
                popular: true,
              },
              {
                title: "Series of 6",
                price: "$1,200",
                duration: "6 treatments",
                features: [
                  "6 nano-ablative sessions",
                  "20% package savings",
                  "Priority booking",
                  "Free maintenance treatment",
                ],
              },
            ].map((pkg, index) => (
              <Card key={index} className={`relative rounded-lg ${pkg.popular ? "ring-2 ring-sage-600" : ""}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-sage-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Best Value
                    </span>
                  </div>
                )}
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{pkg.title}</h3>
                  <div className="text-3xl font-bold text-sage-600 mb-1">{pkg.price}</div>
                  <p className="text-gray-500 mb-6">{pkg.duration}</p>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-sage-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full rounded-md ${pkg.popular ? "bg-sage-600 hover:bg-sage-700 text-white" : "bg-white border border-sage-600 text-sage-600 hover:bg-sage-50"}`}
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <NanoAblativeSkinResurfacingFAQ />

      {/* CTA Section */}
      <section className="py-16 bg-sage-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-4">Ready for Ultra-Gentle Skin Renewal?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Experience the benefits of nano-ablative plasma technology with zero downtime and immediate results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-sage-600 hover:bg-gray-100 rounded-md">
              Book Your Treatment
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-sage-600 rounded-md bg-transparent"
            >
              Call (555) 123-4567
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
