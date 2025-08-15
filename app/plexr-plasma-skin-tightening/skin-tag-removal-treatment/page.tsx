import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, Shield, Star, Zap, Heart, Users, AlertTriangle } from "lucide-react"
import Image from "next/image"
import SkinTagRemovalTreatmentFAQ from "@/components/skin-tag-removal-treatment-faq"
import SkinTagRemovalTreatmentHero from "@/components/skin-tag-removal-treatment-hero"

export default function SkinTagRemovalTreatmentPage() {
  return (
    <div className="min-h-screen">
      <SkinTagRemovalTreatmentHero />

      {/* Treatment Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-6">
                Advanced Skin Tag Removal
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Skin tags are common, benign skin growths that can appear anywhere on the body. While harmless, they
                  can be cosmetically bothersome or catch on clothing and jewelry. Our advanced plasma technology offers
                  a safe, precise method for removing unwanted skin tags without cutting or stitches.
                </p>
                <p>
                  The Plexr plasma device creates a controlled micro-arc that vaporizes the skin tag tissue while
                  minimizing damage to surrounding healthy skin. This results in faster healing, reduced scarring risk,
                  and excellent cosmetic outcomes for all skin types.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500&text=Plasma+Skin+Tag+Treatment"
                alt="Plasma skin tag treatment process"
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
              Experience the advantages of plasma technology for safe and effective skin tag removal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: "No Cutting Required",
                description: "Non-surgical removal without scalpels, stitches, or bleeding.",
              },
              {
                icon: Zap,
                title: "Precise Treatment",
                description: "Targeted plasma energy removes only the skin tag, preserving healthy tissue.",
              },
              {
                icon: Shield,
                title: "Minimal Scarring",
                description: "Advanced technology minimizes trauma and reduces scarring potential.",
              },
              {
                icon: Heart,
                title: "Quick Procedure",
                description: "Most treatments completed in 5-15 minutes with immediate results.",
              },
              {
                icon: Clock,
                title: "Fast Healing",
                description: "Typical healing time of 5-10 days with minimal downtime.",
              },
              {
                icon: Users,
                title: "All Skin Types",
                description: "Safe and effective for all skin types and sensitive areas.",
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

      {/* Common Locations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Common Skin Tag Locations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Skin tags commonly develop in areas where skin rubs against skin or clothing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                location: "Neck",
                description: "Most common location, especially around the collar line and nape.",
                frequency: "Very Common",
                difficulty: "Easy",
              },
              {
                location: "Underarms",
                description: "Friction from arm movement and clothing creates ideal conditions.",
                frequency: "Very Common",
                difficulty: "Easy",
              },
              {
                location: "Groin Area",
                description: "Skin folds and friction from clothing and movement.",
                frequency: "Common",
                difficulty: "Standard",
              },
              {
                location: "Eyelids",
                description: "Delicate area requiring precise treatment and expertise.",
                frequency: "Common",
                difficulty: "Delicate",
              },
              {
                location: "Chest",
                description: "Under breasts and along bra line from friction and moisture.",
                frequency: "Common",
                difficulty: "Standard",
              },
              {
                location: "Back",
                description: "Along bra line and areas where clothing creates friction.",
                frequency: "Less Common",
                difficulty: "Standard",
              },
            ].map((area, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{area.location}</h3>
                  <p className="text-gray-600 text-sm mb-4">{area.description}</p>
                  <div className="space-y-2">
                    <span className="inline-block px-3 py-1 bg-sage-100 text-sage-700 rounded-full text-xs font-medium">
                      {area.frequency}
                    </span>
                    <div
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ml-2 ${
                        area.difficulty === "Easy"
                          ? "bg-green-100 text-green-700"
                          : area.difficulty === "Standard"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {area.difficulty}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Structure */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">Treatment Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Affordable pricing based on size, quantity, and location of skin tags.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                category: "Single Small Tag",
                size: "Up to 3mm",
                description: "Individual small skin tags on easy-to-access areas.",
                price: "$75",
                quantity: "Per tag",
              },
              {
                category: "Single Large Tag",
                size: "3-8mm",
                description: "Larger individual skin tags requiring more treatment time.",
                price: "$125",
                quantity: "Per tag",
              },
              {
                category: "Multiple Tags",
                size: "Various sizes",
                description: "Package pricing for multiple tags in the same area.",
                price: "$300",
                quantity: "Up to 5 tags",
              },
              {
                category: "Delicate Areas",
                size: "Any size",
                description: "Eyelids, face, or other sensitive areas requiring extra care.",
                price: "$150",
                quantity: "Per tag",
              },
            ].map((pricing, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{pricing.category}</h3>
                  <p className="text-sage-600 font-medium mb-2">{pricing.size}</p>
                  <p className="text-gray-600 mb-4 text-sm">{pricing.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="text-2xl font-bold text-sage-600">{pricing.price}</div>
                    <div className="text-sm text-gray-500">{pricing.quantity}</div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-sage-300 text-sage-700 hover:bg-sage-50 rounded-md bg-transparent"
                  >
                    Book Treatment
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">Treatment Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, straightforward process for safe and effective skin tag removal.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Examine skin tags and confirm they are benign and suitable for treatment.",
              },
              {
                step: "02",
                title: "Preparation",
                description: "Clean the area and apply topical numbing cream for comfort.",
              },
              {
                step: "03",
                title: "Treatment",
                description: "Apply precise plasma energy to vaporize the skin tag tissue.",
              },
              {
                step: "04",
                title: "Immediate Care",
                description: "Apply healing ointment and provide aftercare instructions.",
              },
              {
                step: "05",
                title: "Healing",
                description: "Natural healing process with scab formation and shedding.",
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

      {/* Important Considerations */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">Important Information</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key considerations for successful skin tag removal treatment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">What to Expect</h3>
              <ul className="space-y-4">
                {[
                  "Immediate removal of skin tag with minimal discomfort",
                  "Small scab formation that heals within 5-10 days",
                  "Possible temporary redness or slight swelling",
                  "No stitches or bandages required",
                  "Return to normal activities immediately",
                  "Final results visible once healing is complete",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">When to Seek Treatment</h3>
              <ul className="space-y-4">
                {[
                  "Skin tags that catch on clothing or jewelry",
                  "Tags in visible areas affecting confidence",
                  "Irritated or inflamed skin tags",
                  "Multiple tags that are cosmetically bothersome",
                  "Tags that have changed in appearance",
                  "Any suspicious growths requiring evaluation",
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

      {/* FAQ Section */}
      <div id="faq-section">
        <SkinTagRemovalTreatmentFAQ />
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-sage-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-4">Ready to Remove Your Skin Tags?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get safe, effective skin tag removal with our advanced plasma technology. Quick procedure with excellent
            results.
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
