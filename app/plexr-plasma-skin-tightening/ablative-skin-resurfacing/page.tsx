import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Shield, Star, Zap, Heart, Users, AlertTriangle, Award } from "lucide-react"
import Image from "next/image"
import { AblativeSkinResurfacingFAQ } from "@/components/ablative-skin-resurfacing-faq"

export default function AblativeSkinResurfacingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-r from-sage-100 to-sage-50 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-gray-900 leading-tight">
                Ablative
                <span className="text-sage-600 block">Skin Resurfacing</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                The most advanced plasma technology for maximum skin transformation. Dramatic results for severe skin
                concerns with comprehensive rejuvenation.
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
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500&text=Ablative+Plasma+Treatment"
                alt="Ablative plasma skin resurfacing treatment"
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
                Maximum Skin Transformation
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Ablative plasma skin resurfacing represents the pinnacle of plasma technology, delivering the most
                  dramatic and comprehensive skin transformation available. This advanced treatment completely removes
                  the outer layers of damaged skin while stimulating deep collagen remodeling.
                </p>
                <p>
                  Ideal for severe skin concerns including deep wrinkles, significant sun damage, extensive scarring,
                  and major textural irregularities. While requiring 7-10 days of downtime, the results are truly
                  transformative, often equivalent to years of aging reversal.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500&text=Maximum+Transformation"
                alt="Maximum skin transformation process"
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
              Experience the most comprehensive skin transformation with our advanced ablative plasma technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Maximum Results",
                description: "The most dramatic improvement possible with plasma technology for severe skin concerns.",
              },
              {
                icon: Shield,
                title: "Comprehensive Treatment",
                description: "Addresses multiple skin concerns simultaneously for complete facial rejuvenation.",
              },
              {
                icon: Star,
                title: "Deep Collagen Remodeling",
                description: "Stimulates profound collagen production for long-lasting skin tightening and renewal.",
              },
              {
                icon: Zap,
                title: "Precision Technology",
                description: "Advanced plasma control for optimal results while maintaining safety standards.",
              },
              {
                icon: Heart,
                title: "Years of Reversal",
                description: "Can reverse years of aging and sun damage in a single comprehensive treatment.",
              },
              {
                icon: Users,
                title: "Expert Treatment",
                description: "Performed by highly trained specialists with extensive ablative plasma experience.",
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
              Ablative plasma treatments provide comprehensive rejuvenation for severe skin concerns.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                area: "Full Face Resurfacing",
                description: "Complete facial transformation addressing all skin concerns.",
                price: "$2,500",
                duration: "90 minutes",
              },
              {
                area: "Upper Face",
                description: "Forehead, temples, and upper eyelid comprehensive treatment.",
                price: "$1,500",
                duration: "60 minutes",
              },
              {
                area: "Lower Face",
                description: "Cheeks, jowls, and jawline complete resurfacing.",
                price: "$1,500",
                duration: "60 minutes",
              },
              {
                area: "Perioral Area",
                description: "Around mouth lines and lip area rejuvenation.",
                price: "$800",
                duration: "45 minutes",
              },
              {
                area: "Neck Resurfacing",
                description: "Complete neck area transformation and tightening.",
                price: "$1,200",
                duration: "60 minutes",
              },
              {
                area: "Hands",
                description: "Hand rejuvenation for age spots and texture improvement.",
                price: "$600",
                duration: "30 minutes",
              },
            ].map((area, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{area.area}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{area.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="text-2xl font-bold text-sage-600">{area.price}</div>
                    <div className="text-sm text-gray-500">{area.duration}</div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-sage-300 text-sage-700 hover:bg-sage-50 bg-transparent"
                  >
                    Consult
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
              Understanding your comprehensive healing process for optimal results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                period: "Days 1-2",
                title: "Initial Healing",
                description: "Significant swelling and redness. Rest and gentle care required.",
                care: "Cold compresses, prescribed medications, gentle cleansing.",
              },
              {
                period: "Days 3-5",
                title: "Active Healing",
                description: "Crusting and peeling begin. Skin feels tight and sensitive.",
                care: "Healing ointments, avoid sun exposure, follow aftercare strictly.",
              },
              {
                period: "Days 6-8",
                title: "Peeling Phase",
                description: "Natural peeling reveals new skin. Itching may occur.",
                care: "Moisturizing, gentle products only, no picking or scratching.",
              },
              {
                period: "Days 9-14",
                title: "New Skin Emergence",
                description: "Fresh, rejuvenated skin visible. Continued improvement.",
                care: "Sun protection essential, gradual return to normal activities.",
              },
            ].map((phase, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-sage-600 text-white rounded-full text-sm font-bold mb-2">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{phase.period}</h3>
                  <p className="text-sage-600 font-medium">{phase.title}</p>
                </div>
                <p className="text-gray-600 text-sm mb-3">{phase.description}</p>
                <p className="text-gray-500 text-xs">{phase.care}</p>
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
              Ablative treatments are for those seeking maximum transformation and can accommodate extended downtime.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Perfect For:</h3>
              <ul className="space-y-4">
                {[
                  "Deep wrinkles and severe sun damage",
                  "Extensive acne scarring",
                  "Significant skin laxity",
                  "Multiple skin concerns requiring comprehensive treatment",
                  "Those seeking maximum possible improvement",
                  "Ability to take 7-10 days off work/social activities",
                  "Commitment to strict aftercare protocol",
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
                  "Active skin infections or autoimmune conditions",
                  "Pregnancy or breastfeeding",
                  "Recent isotretinoin use (within 6 months)",
                  "Unrealistic expectations",
                  "Inability to follow extensive aftercare",
                  "Cannot accommodate significant downtime",
                  "History of poor wound healing",
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
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">Investment in Your Skin</h2>
            <p className="text-gray-600">Comprehensive packages for maximum transformation</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Full Face Ablative",
                price: "$2,500",
                duration: "Single treatment",
                features: [
                  "Complete facial resurfacing",
                  "Comprehensive consultation",
                  "Pre-treatment preparation kit",
                  "Post-treatment care package",
                  "Follow-up appointments (3)",
                  "24/7 aftercare support",
                ],
                popular: true,
              },
              {
                title: "Targeted Areas",
                price: "From $800",
                duration: "Per area",
                features: [
                  "Customized area treatment",
                  "Detailed consultation",
                  "Targeted approach",
                  "Post-treatment care",
                  "Follow-up appointment",
                  "Aftercare guidance",
                ],
              },
            ].map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? "ring-2 ring-sage-600" : ""}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-sage-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Comprehensive
                    </span>
                  </div>
                )}
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{pkg.title}</h3>
                  <div className="text-4xl font-bold text-sage-600 mb-1">{pkg.price}</div>
                  <p className="text-gray-500 mb-6">{pkg.duration}</p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-sage-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${pkg.popular ? "bg-sage-600 hover:bg-sage-700 text-white" : "bg-white border border-sage-600 text-sage-600 hover:bg-sage-50"}`}
                  >
                    Schedule Consultation
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <AblativeSkinResurfacingFAQ />

      {/* CTA Section */}
      <section className="py-16 bg-sage-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-4">Ready for Maximum Transformation?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Experience the most comprehensive skin rejuvenation available with our advanced ablative plasma technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-sage-600 hover:bg-gray-100">
              Schedule Consultation
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
