import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import SpaServicesFAQ from "@/components/spa-services-faq"

export default function SpaServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-r from-sage-100 to-sage-50 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-gray-900 leading-tight mb-6">
              Luxury
              <span className="text-sage-600 block">Spa Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Indulge in our comprehensive range of spa services designed to rejuvenate, refresh, and restore your
              skin's natural beauty and radiance.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Enzyme Facial Peels",
                description:
                  "Gentle yet effective peels using natural enzymes to exfoliate and brighten your complexion.",
                benefits: [
                  "Natural fruit enzymes",
                  "Suitable for sensitive skin",
                  "No downtime required",
                  "Immediate glow",
                ],
                duration: "60 minutes",
                price: "From $120",
                href: "/spa-services/enzyme-facial-peels",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Dermaplaning Facial",
                description: "Professional exfoliation treatment that removes dead skin cells and fine facial hair.",
                benefits: [
                  "Smoother skin texture",
                  "Better product absorption",
                  "Instant results",
                  "Makeup applies flawlessly",
                ],
                duration: "45 minutes",
                price: "From $150",
                href: "/spa-services/dermaplaning",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Microblading",
                description: "Semi-permanent eyebrow enhancement using precise hair-stroke technique.",
                benefits: ["Natural-looking brows", "Lasts 1-3 years", "Customized shape", "Minimal maintenance"],
                duration: "2-3 hours",
                price: "From $450",
                href: "/spa-services/microblading",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Microneedling",
                description: "Collagen induction therapy that improves skin texture, tone, and reduces fine lines.",
                benefits: ["Stimulates collagen", "Reduces fine lines", "Improves skin texture", "Minimizes pores"],
                duration: "60-90 minutes",
                price: "From $200",
                href: "/spa-services/microneedling",
                image: "/placeholder.svg?height=300&width=400",
              },
            ].map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-64">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center">
                            <CheckCircle className="h-4 w-4 text-sage-600 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex justify-between items-center text-sm">
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 mr-2 text-sage-600" />
                        {service.duration}
                      </div>
                      <div className="flex items-center text-sage-600 font-semibold">
                        <Star className="h-4 w-4 mr-1" />
                        {service.price}
                      </div>
                    </div>
                  </div>

                  <Link href={service.href}>
                    <Button className="w-full bg-sage-600 hover:bg-sage-700 text-white">Learn More & Book</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              The Rejuvenate Difference
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the highest standard of spa services with our expert team and premium products.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Practitioners",
                description: "All treatments performed by licensed, certified professionals with years of experience.",
                icon: "👩‍⚕️",
              },
              {
                title: "Premium Products",
                description: "We use only the finest, medical-grade products and equipment for optimal results.",
                icon: "✨",
              },
              {
                title: "Personalized Care",
                description: "Every treatment is customized to your unique skin type, concerns, and goals.",
                icon: "💆‍♀️",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-lg shadow-sm">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <SpaServicesFAQ />

      {/* CTA Section */}
      <section className="py-16 bg-sage-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-4">Ready to Pamper Yourself?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Book your spa service today and experience the ultimate in relaxation and skin rejuvenation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-sage-600 hover:bg-gray-100">
              Book Your Service
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
