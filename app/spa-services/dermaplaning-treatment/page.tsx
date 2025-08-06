import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, Shield, Star, Zap, Heart } from "lucide-react"
import Image from "next/image"
import DermaplaningTreatmentFAQ from "@/components/dermaplaning-treatment-faq"

export default function DermaplaningPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-r from-sage-100 to-sage-50 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-gray-900 leading-tight">
                Dermaplaning
                <span className="text-sage-600 block">Facial Treatment</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                Professional exfoliation treatment that removes dead skin cells and fine facial hair, revealing
                smoother, brighter skin with immediate results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-sage-600 hover:bg-sage-700 text-white">
                  Book Treatment
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-sage-300 text-sage-700 hover:bg-sage-50 bg-transparent"
                >
                  Free Consultation
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500&text=Dermaplaning+Treatment"
                alt="Dermaplaning facial treatment"
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
                Instant Skin Transformation
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Dermaplaning is a safe, effective exfoliation treatment that uses a sterile surgical scalpel to gently
                  remove the top layer of dead skin cells and fine facial hair (peach fuzz). This non-invasive procedure
                  reveals smoother, brighter skin instantly.
                </p>
                <p>
                  Perfect for all skin types, dermaplaning not only improves skin texture but also allows skincare
                  products to penetrate deeper and makeup to apply more smoothly. The treatment is painless and requires
                  no downtime.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500&text=Smooth+Skin+Results"
                alt="Smooth skin after dermaplaning"
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
              Discover why dermaplaning is one of our most popular facial treatments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Instant Results",
                description: "See immediate improvement in skin texture and brightness after just one treatment.",
              },
              {
                icon: Shield,
                title: "Safe & Painless",
                description: "Non-invasive procedure with no discomfort, suitable for all skin types.",
              },
              {
                icon: Star,
                title: "Better Product Absorption",
                description: "Skincare products penetrate deeper and work more effectively on smooth skin.",
              },
              {
                icon: Heart,
                title: "Flawless Makeup Application",
                description: "Foundation and makeup apply smoothly over the newly revealed skin surface.",
              },
              {
                icon: Clock,
                title: "No Downtime",
                description: "Return to normal activities immediately with no recovery period needed.",
              },
              {
                icon: CheckCircle,
                title: "Hair Removal",
                description: "Removes fine facial hair (peach fuzz) for a smoother complexion.",
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
              The Dermaplaning Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A gentle, precise treatment performed by our skilled aestheticians.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Skin Preparation",
                description: "Thorough cleansing and assessment to prepare your skin for treatment.",
              },
              {
                step: "02",
                title: "Gentle Exfoliation",
                description: "Precise removal of dead skin cells using a sterile surgical scalpel.",
              },
              {
                step: "03",
                title: "Hair Removal",
                description: "Careful removal of fine facial hair for a smooth finish.",
              },
              {
                step: "04",
                title: "Moisturizing",
                description: "Application of soothing serums and moisturizer to protect new skin.",
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
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">Treatment Options</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Single Treatment",
                price: "$150",
                duration: "45 minutes",
                features: [
                  "Professional dermaplaning",
                  "Hydrating serum application",
                  "SPF protection",
                  "Aftercare instructions",
                ],
              },
              {
                title: "Monthly Package",
                price: "$420",
                duration: "3 treatments",
                features: [
                  "3 dermaplaning sessions",
                  "10% savings",
                  "Priority scheduling",
                  "Complimentary skincare sample",
                ],
                popular: true,
              },
              {
                title: "Dermaplaning + Facial",
                price: "$220",
                duration: "75 minutes",
                features: ["Dermaplaning treatment", "Customized facial", "Enzyme mask", "LED light therapy"],
              },
            ].map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? "ring-2 ring-sage-600" : ""}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-sage-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
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
                    className={`w-full ${pkg.popular ? "bg-sage-600 hover:bg-sage-700 text-white" : "bg-white border border-sage-600 text-sage-600 hover:bg-sage-50"}`}
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <DermaplaningTreatmentFAQ />

      {/* CTA Section */}
      <section className="py-16 bg-sage-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-4">Ready for Instantly Smoother Skin?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Experience the immediate benefits of dermaplaning and reveal your smoothest skin yet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-sage-600 hover:bg-gray-100">
              Book Your Treatment
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
