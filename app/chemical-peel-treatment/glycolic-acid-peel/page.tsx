"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BeforeAfterSlider } from "@/components/before-after-slider"
import { GlycolicAcidPeelFAQ } from "@/components/glycolic-acid-peel-faq"
import { GlycolicAcidPeelHero } from "@/components/glycolic-acid-peel-hero"
import { CheckCircle, Clock, Shield, Star, Sparkles } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

export default function GlycolicAcidPeelPage() {
  const router = useRouter()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const isBusinessHours = () => {
    const now = new Date()
    const day = now.getDay()
    const hour = now.getHours()
    return day >= 1 && day <= 5 && hour >= 9 && hour <= 17
  }

  const handleGetInTouch = () => {
    if (isMobile && isBusinessHours()) {
      window.location.href = "tel:+14802818888"
    } else {
      router.push("/about-us/contact-us")
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <GlycolicAcidPeelHero />

      {/* Treatment Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              About Glycolic Acid Peels
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Glycolic acid peels are alpha hydroxy acid (AHA) treatments that gently exfoliate the skin's surface,
              revealing fresher, more radiant skin underneath.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">What is a Glycolic Acid Peel?</h3>
              <p className="text-gray-600 mb-6">
                Glycolic acid is the smallest molecule in the alpha hydroxy acid family, allowing it to penetrate deeply
                into the skin. This gentle yet effective peel removes dead skin cells, unclogs pores, and stimulates
                cell turnover for a brighter, more even complexion.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-sage-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Gentle exfoliation with minimal downtime</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-sage-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Suitable for most skin types</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-sage-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Progressive results with regular treatments</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500&text=Glycolic+Acid+Benefits"
                alt="Glycolic acid peel benefits"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Glycolic Acid Peel Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience gentle yet effective skin rejuvenation with our professional glycolic acid treatments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Sparkles className="h-8 w-8 text-sage-600" />,
                title: "Brightens Complexion",
                description: "Removes dull, dead skin cells to reveal a brighter, more radiant complexion.",
              },
              {
                icon: <CheckCircle className="h-8 w-8 text-sage-600" />,
                title: "Smooths Fine Lines",
                description: "Reduces the appearance of fine lines and early signs of aging.",
              },
              {
                icon: <Shield className="h-8 w-8 text-sage-600" />,
                title: "Improves Texture",
                description: "Enhances skin texture and smoothness for a more refined appearance.",
              },
              {
                icon: <Clock className="h-8 w-8 text-sage-600" />,
                title: "Minimal Downtime",
                description: "Gentle treatment with little to no downtime required.",
              },
              {
                icon: <Star className="h-8 w-8 text-sage-600" />,
                title: "Unclogs Pores",
                description: "Deep cleanses pores and reduces blackheads for clearer skin.",
              },
              {
                icon: <Sparkles className="h-8 w-8 text-sage-600" />,
                title: "Even Skin Tone",
                description: "Helps fade dark spots and creates a more even skin tone.",
              },
            ].map((benefit, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="space-y-4">
                  <div className="flex justify-center">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Glycolic Acid Peel Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the beautiful improvements achieved with our professional glycolic acid peel treatments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <BeforeAfterSlider
              beforeImage="/placeholder.svg?height=400&width=600&text=Before+Glycolic+Peel"
              afterImage="/placeholder.svg?height=400&width=600&text=After+Glycolic+Peel"
              alt="Glycolic Acid Peel Results - Skin Texture"
            />
            <BeforeAfterSlider
              beforeImage="/placeholder.svg?height=400&width=600&text=Before+Treatment"
              afterImage="/placeholder.svg?height=400&width=600&text=After+Treatment"
              alt="Glycolic Acid Peel Results - Skin Brightness"
            />
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-500 mb-4">
              *Results may vary. Individual results are not guaranteed and may vary from person to person.
            </p>
            <Button className="bg-sage-600 hover:bg-sage-700 text-white">View More Results</Button>
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              The Glycolic Acid Peel Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our gentle approach ensures comfortable treatment with beautiful results.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Skin Analysis",
                description: "Thorough skin assessment to determine the ideal peel strength and treatment plan.",
              },
              {
                step: "02",
                title: "Preparation",
                description: "Gentle cleansing and preparation of the skin for optimal peel penetration.",
              },
              {
                step: "03",
                title: "Peel Application",
                description: "Careful application of glycolic acid solution with precise timing and monitoring.",
              },
              {
                step: "04",
                title: "Aftercare",
                description: "Soothing post-treatment care and detailed home care instructions.",
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

      {/* Treatment Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">What to Expect</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">During Treatment</h3>
                  <p className="text-gray-600">
                    You may experience a mild tingling or warming sensation as the glycolic acid is applied. This is
                    normal and indicates the peel is working. The treatment typically takes 20-30 minutes.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">After Treatment</h3>
                  <p className="text-gray-600">
                    Your skin may appear slightly pink immediately after treatment, similar to a mild sunburn. This
                    typically subsides within a few hours to a day.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Results Timeline</h3>
                  <p className="text-gray-600">
                    You'll notice immediate improvements in skin brightness and texture. Optimal results develop over a
                    series of treatments, with continued improvement over time.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Treatment Information</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">20-30 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Downtime:</span>
                    <span className="font-medium">Minimal to none</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sessions Needed:</span>
                    <span className="font-medium">4-6 treatments</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Frequency:</span>
                    <span className="font-medium">Every 2-4 weeks</span>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Ideal Candidates</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-4 w-4 text-sage-600 mr-2" />
                    Dull or uneven skin tone
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-4 w-4 text-sage-600 mr-2" />
                    Fine lines and early aging
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-4 w-4 text-sage-600 mr-2" />
                    Clogged pores and blackheads
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-4 w-4 text-sage-600 mr-2" />
                    Rough skin texture
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Peel Strengths */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Glycolic Acid Peel Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer different strengths to match your skin's needs and tolerance level.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Light Peel (20-30%)",
                description: "Perfect for first-time clients or sensitive skin",
                benefits: ["Gentle exfoliation", "Minimal downtime", "Immediate glow"],
                ideal: "Maintenance and prevention",
              },
              {
                title: "Medium Peel (35-50%)",
                description: "Our most popular option for visible results",
                benefits: ["Noticeable improvement", "Balanced effectiveness", "Moderate peeling"],
                ideal: "Active skin concerns",
              },
              {
                title: "Deep Peel (50-70%)",
                description: "Maximum strength for significant concerns",
                benefits: ["Dramatic results", "Deep exfoliation", "Advanced treatment"],
                ideal: "Severe skin issues",
              },
            ].map((peel, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">{peel.title}</h3>
                  <p className="text-gray-600">{peel.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {peel.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <CheckCircle className="h-3 w-3 text-sage-600 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-2 border-t border-gray-200">
                    <span className="text-sm font-medium text-sage-600">Ideal for: {peel.ideal}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div id="faq-section">
        <GlycolicAcidPeelFAQ />
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-sage-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-4">Ready for Radiant, Glowing Skin?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Schedule your glycolic acid peel consultation today and discover the gentle path to beautiful, rejuvenated
            skin.
          </p>
          <div className="flex justify-center">
            <Button
              onClick={handleGetInTouch}
              className="bg-white text-sage-600 hover:bg-gray-100 px-6 py-2 text-base font-medium shadow-md backdrop-blur-sm"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
