import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, Shield, Star, Zap, Heart, Users, AlertTriangle, FileText } from "lucide-react"
import Image from "next/image"
import { MoleRemovalTreatmentFAQ } from "@/components/mole-removal-treatment-faq"
import { MoleRemovalTreatmentHero } from "@/components/mole-removal-treatment-hero"

export default function MoleRemovalTreatmentPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <MoleRemovalTreatmentHero />

      {/* Important Notice */}
      <section className="py-8 bg-amber-50 border-l-4 border-amber-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start">
            <AlertTriangle className="h-6 w-6 text-amber-600 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-amber-800 mb-2">Medical Clearance Required</h3>
              <p className="text-amber-700">
                All moles must be evaluated and cleared by a dermatologist or physician before removal treatment. We
                require written medical clearance confirming the mole is benign and safe for cosmetic removal.
              </p>
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
                Safe & Precise Mole Removal
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Our plasma mole removal treatment offers a safe, effective alternative to traditional surgical
                  methods. Using controlled plasma energy, we can precisely remove benign moles with minimal damage to
                  surrounding tissue and reduced scarring potential.
                </p>
                <p>
                  The plasma technology allows for precise depth control and immediate tissue coagulation, resulting in
                  minimal bleeding and faster healing compared to conventional excision methods. Most treatments are
                  completed in a single session with excellent cosmetic outcomes.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500&text=Precise+Plasma+Removal"
                alt="Precise plasma mole removal process"
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
              Experience the advantages of advanced plasma technology for safe mole removal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Minimal Scarring",
                description:
                  "Precise plasma energy minimizes damage to surrounding tissue for better cosmetic outcomes.",
              },
              {
                icon: Zap,
                title: "No Bleeding",
                description: "Plasma technology immediately coagulates tissue, eliminating bleeding during treatment.",
              },
              {
                icon: Clock,
                title: "Quick Treatment",
                description: "Most moles can be removed in 15-30 minutes with immediate results.",
              },
              {
                icon: Heart,
                title: "Comfortable Procedure",
                description: "Local anesthesia ensures a comfortable experience throughout the treatment.",
              },
              {
                icon: Star,
                title: "Single Session",
                description: "Most moles are completely removed in just one treatment session.",
              },
              {
                icon: Users,
                title: "Expert Care",
                description: "Performed by trained professionals with extensive plasma technology experience.",
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

      {/* Pricing by Size */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">Pricing by Mole Size</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing based on mole size and complexity of removal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                size: "Small",
                dimension: "Up to 3mm",
                description: "Small, flat or slightly raised moles.",
                price: "$200",
                duration: "15 minutes",
              },
              {
                size: "Medium",
                dimension: "3-6mm",
                description: "Medium-sized moles, may be raised.",
                price: "$300",
                duration: "20 minutes",
              },
              {
                size: "Large",
                dimension: "6-10mm",
                description: "Larger moles requiring more precision.",
                price: "$450",
                duration: "30 minutes",
              },
              {
                size: "Extra Large",
                dimension: "Over 10mm",
                description: "Complex or very large moles.",
                price: "$600",
                duration: "45 minutes",
              },
            ].map((size, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 bg-white">
                <CardContent className="p-6 bg-white">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{size.size}</h3>
                  <p className="text-sage-600 font-medium mb-2">{size.dimension}</p>
                  <p className="text-gray-600 mb-4 text-sm">{size.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="text-2xl font-bold text-sage-600">{size.price}</div>
                    <div className="text-sm text-gray-500">{size.duration}</div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-sage-300 text-sage-700 hover:bg-sage-50 rounded-md bg-transparent"
                  >
                    Book Size
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
              Your mole removal treatment experience from consultation to complete healing.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                step: "01",
                title: "Medical Clearance",
                description: "Obtain dermatologist evaluation and written clearance for mole removal.",
              },
              {
                step: "02",
                title: "Consultation",
                description: "Review medical clearance and plan precise removal approach.",
              },
              {
                step: "03",
                title: "Preparation",
                description: "Local anesthesia application and treatment area preparation.",
              },
              {
                step: "04",
                title: "Removal",
                description: "Precise plasma removal with immediate tissue coagulation.",
              },
              {
                step: "05",
                title: "Aftercare",
                description: "Wound care instructions and follow-up appointment scheduling.",
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

      {/* Medical Requirements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">Medical Requirements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Important medical clearance and safety requirements for mole removal treatment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <FileText className="h-6 w-6 text-sage-600 mr-3" />
                Required Documentation
              </h3>
              <ul className="space-y-4">
                {[
                  "Written medical clearance from dermatologist or physician",
                  "Confirmation that mole is benign (non-cancerous)",
                  "Recent medical evaluation (within 6 months)",
                  "Clear photographs of the mole for documentation",
                  "Medical history and current medications list",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <AlertTriangle className="h-6 w-6 text-amber-500 mr-3" />
                Cannot Treat
              </h3>
              <ul className="space-y-4">
                {[
                  "Moles without medical clearance",
                  "Suspicious or changing moles",
                  "Moles with irregular borders or colors",
                  "Recently biopsied areas",
                  "Moles in sensitive areas without specialist approval",
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

      {/* Aftercare */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">Aftercare Instructions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proper aftercare ensures optimal healing and minimal scarring.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                period: "First 24 Hours",
                instructions: [
                  "Keep area clean and dry",
                  "Apply prescribed antibiotic ointment",
                  "Avoid water contact",
                  "No strenuous activity",
                ],
              },
              {
                period: "Days 2-7",
                instructions: [
                  "Gentle cleansing with mild soap",
                  "Continue antibiotic ointment",
                  "Protect from sun exposure",
                  "Allow natural scab formation",
                ],
              },
              {
                period: "Week 2+",
                instructions: [
                  "Scab will naturally fall off",
                  "Apply sunscreen to new skin",
                  "Moisturize regularly",
                  "Monitor healing progress",
                ],
              },
            ].map((phase, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6 bg-white">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{phase.period}</h3>
                  <ul className="space-y-2">
                    {phase.instructions.map((instruction, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <CheckCircle className="h-4 w-4 text-sage-600 mr-2 mt-0.5 flex-shrink-0" />
                        {instruction}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div id="faq-section">
        <MoleRemovalTreatmentFAQ />
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-sage-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-4">Ready to Remove Your Mole Safely?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Schedule your consultation today. Remember to obtain medical clearance before your appointment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-sage-600 hover:bg-gray-100 rounded-md">
              Book Consultation
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
