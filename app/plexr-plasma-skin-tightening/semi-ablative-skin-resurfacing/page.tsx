import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, Shield, Star, Zap, Heart, Users, AlertTriangle } from "lucide-react"
import Image from "next/image"
import SemiAblativeSkinResurfacingFAQ from "@/components/semi-ablative-skin-resurfacing-faq"
import SemiAblativeSkinResurfacingHero from "@/components/semi-ablative-skin-resurfacing-hero"

export default function SemiAblativeSkinResurfacingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <SemiAblativeSkinResurfacingHero />

      {/* Treatment Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-6">
                Advanced Skin Transformation
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Semi-ablative plasma skin resurfacing offers a perfect balance between effectiveness and recovery
                  time. This treatment penetrates deeper into the skin layers, creating controlled micro-injuries that
                  stimulate significant collagen remodeling and cellular renewal.
                </p>
                <p>
                  Using advanced plasma technology, we can target specific skin concerns including deeper wrinkles, acne
                  scarring, sun damage, and uneven skin texture. The treatment requires 2-5 days of downtime but
                  delivers remarkable improvements in skin quality and appearance.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500&text=Advanced+Plasma+Technology"
                alt="Advanced plasma technology process"
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
              Experience significant skin improvements with our advanced semi-ablative plasma technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: "Dramatic Results",
                description:
                  "Significant improvement in skin texture, tone, and overall appearance with visible results.",
              },
              {
                icon: Shield,
                title: "Controlled Treatment",
                description:
                  "Precise depth control ensures optimal results while maintaining safety and predictability.",
              },
              {
                icon: Zap,
                title: "Collagen Remodeling",
                description: "Stimulates deep collagen production for long-lasting skin tightening and rejuvenation.",
              },
              {
                icon: Clock,
                title: "Moderate Downtime",
                description: "2-5 days recovery time with proper aftercare for optimal healing and results.",
              },
              {
                icon: Heart,
                title: "Versatile Treatment",
                description: "Effective for multiple skin concerns including wrinkles, scars, and pigmentation.",
              },
              {
                icon: Users,
                title: "Proven Technology",
                description: "Clinically proven plasma technology with thousands of successful treatments worldwide.",
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
              Semi-ablative plasma treatments are ideal for addressing specific skin concerns on various areas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                area: "Full Face",
                description: "Comprehensive facial resurfacing for overall skin transformation.",
                price: "$800",
                duration: "60 minutes",
              },
              {
                area: "Upper Face",
                description: "Target forehead, crow's feet, and upper eyelid concerns.",
                price: "$500",
                duration: "45 minutes",
              },
              {
                area: "Lower Face",
                description: "Address smile lines, jowls, and lower facial concerns.",
                price: "$500",
                duration: "45 minutes",
              },
              {
                area: "Neck & Décolletage",
                description: "Improve neck and chest area texture and tightening.",
                price: "$600",
                duration: "50 minutes",
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

      {/* Recovery Timeline */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">Recovery Timeline</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding your healing process for optimal results and planning.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                day: "Day 1",
                title: "Treatment Day",
                description: "Immediate tightening effect with mild swelling and redness.",
                status: "active",
              },
              {
                day: "Day 2-3",
                title: "Initial Healing",
                description: "Micro-crusting begins, skin feels tight and dry.",
                status: "healing",
              },
              {
                day: "Day 4-5",
                title: "Peeling Phase",
                description: "Natural peeling reveals fresh, new skin underneath.",
                status: "peeling",
              },
              {
                day: "Day 6-7",
                title: "New Skin",
                description: "Fresh, rejuvenated skin with improved texture visible.",
                status: "renewal",
              },
              {
                day: "Week 2+",
                title: "Full Results",
                description: "Continued improvement as collagen production increases.",
                status: "results",
              },
            ].map((phase, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-sm">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-sage-600 text-white rounded-full text-sm font-bold mb-4">
                  {phase.day.split(" ")[1]}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{phase.title}</h3>
                <p className="text-gray-600 text-sm">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal Candidates */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">Ideal Candidates</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Semi-ablative treatments are perfect for those seeking significant improvements with manageable downtime.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Perfect For:</h3>
              <ul className="space-y-4">
                {[
                  "Moderate to deep wrinkles and fine lines",
                  "Acne scarring and textural irregularities",
                  "Sun damage and age spots",
                  "Uneven skin tone and texture",
                  "Mild to moderate skin laxity",
                  "Those who can accommodate 2-5 days downtime",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Not Recommended For:</h3>
              <ul className="space-y-4">
                {[
                  "Active skin infections or conditions",
                  "Pregnancy or breastfeeding",
                  "Recent sun exposure or tanning",
                  "Unrealistic expectations for results",
                  "Inability to follow aftercare instructions",
                  "Those seeking zero downtime treatments",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Packages */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">Treatment Packages</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Single Treatment",
                price: "$800",
                duration: "60 minutes",
                features: [
                  "Semi-ablative plasma treatment",
                  "Comprehensive consultation",
                  "Post-treatment care kit",
                  "Follow-up appointment",
                ],
              },
              {
                title: "Series of 2",
                price: "$1,440",
                duration: "2 treatments",
                features: [
                  "2 semi-ablative sessions",
                  "10% package savings",
                  "Customized treatment plan",
                  "Priority booking",
                ],
                popular: true,
              },
              {
                title: "Series of 3",
                price: "$1,920",
                duration: "3 treatments",
                features: [
                  "3 semi-ablative sessions",
                  "20% package savings",
                  "Complimentary skincare consultation",
                  "Free maintenance treatment",
                ],
              },
            ].map((pkg, index) => (
              <Card key={index} className={`relative rounded-lg ${pkg.popular ? "ring-2 ring-sage-600" : ""}`}>
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

      {/* FAQ Section */}
      <div id="faq-section">
        <SemiAblativeSkinResurfacingFAQ />
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-sage-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-4">Ready for Dramatic Skin Transformation?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Experience significant skin improvements with our advanced semi-ablative plasma technology.
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
