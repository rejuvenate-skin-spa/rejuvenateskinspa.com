import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BeforeAfterSlider } from "@/components/before-after-slider"
import { TcaPeelFAQ } from "@/components/tca-peel-faq"
import { CheckCircle, Clock, Shield, Star } from "lucide-react"
import Image from "next/image"

export default function TcaPeelPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-r from-sage-100 to-sage-50 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-gray-900 leading-tight">
                TCA Chemical
                <span className="text-sage-600 block">Peel Treatment</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                Experience dramatic skin transformation with our professional TCA (Trichloroacetic Acid) chemical peel.
                Ideal for treating deep wrinkles, acne scars, and sun damage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-sage-600 hover:bg-sage-700 text-white">
                  Schedule Consultation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-sage-300 text-sage-700 hover:bg-sage-50 bg-transparent"
                >
                  View Results
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500&text=TCA+Chemical+Peel+Treatment"
                alt="TCA chemical peel treatment"
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
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              About TCA Chemical Peels
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              TCA (Trichloroacetic Acid) peels are medium-depth chemical peels that provide significant skin
              rejuvenation by removing damaged skin layers and stimulating new cell growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">What is a TCA Peel?</h3>
              <p className="text-gray-600 mb-6">
                TCA peels use trichloroacetic acid to penetrate the skin's middle layers, causing controlled damage that
                triggers the body's natural healing response. This process removes damaged skin cells and stimulates
                collagen production for smoother, more youthful-looking skin.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-sage-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Medium-depth penetration for significant results</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-sage-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Stimulates collagen and elastin production</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-sage-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Effective for multiple skin concerns</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500&text=TCA+Peel+Process"
                alt="TCA peel process"
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
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">TCA Peel Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience comprehensive skin rejuvenation with our professional TCA chemical peel treatment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Star className="h-8 w-8 text-sage-600" />,
                title: "Reduces Deep Wrinkles",
                description: "Effectively diminishes fine lines and deeper wrinkles for smoother skin texture.",
              },
              {
                icon: <CheckCircle className="h-8 w-8 text-sage-600" />,
                title: "Improves Acne Scars",
                description: "Significantly reduces the appearance of acne scars and post-inflammatory marks.",
              },
              {
                icon: <Shield className="h-8 w-8 text-sage-600" />,
                title: "Sun Damage Repair",
                description: "Addresses sun spots, age spots, and other forms of photodamage effectively.",
              },
              {
                icon: <Clock className="h-8 w-8 text-sage-600" />,
                title: "Skin Texture Enhancement",
                description: "Improves overall skin texture, making it smoother and more refined.",
              },
              {
                icon: <Star className="h-8 w-8 text-sage-600" />,
                title: "Pore Size Reduction",
                description: "Minimizes the appearance of enlarged pores for a more refined complexion.",
              },
              {
                icon: <CheckCircle className="h-8 w-8 text-sage-600" />,
                title: "Collagen Stimulation",
                description: "Promotes natural collagen production for firmer, more youthful skin.",
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
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">Real TCA Peel Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the dramatic transformation possible with our professional TCA chemical peel treatments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <BeforeAfterSlider
              beforeImage="/placeholder.svg?height=400&width=600&text=Before+TCA+Peel"
              afterImage="/placeholder.svg?height=400&width=600&text=After+TCA+Peel"
              alt="TCA Peel Results - Acne Scarring"
            />
            <BeforeAfterSlider
              beforeImage="/placeholder.svg?height=400&width=600&text=Before+TCA+Treatment"
              afterImage="/placeholder.svg?height=400&width=600&text=After+TCA+Treatment"
              alt="TCA Peel Results - Sun Damage"
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
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">The TCA Peel Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach ensures safe, effective treatment with optimal results.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Comprehensive skin assessment and treatment planning with our expert aestheticians.",
              },
              {
                step: "02",
                title: "Preparation",
                description: "Skin preparation and pre-treatment conditioning to optimize peel effectiveness.",
              },
              {
                step: "03",
                title: "Application",
                description: "Careful application of TCA solution with precise timing and monitoring.",
              },
              {
                step: "04",
                title: "Recovery Care",
                description: "Detailed aftercare instructions and follow-up support for optimal healing.",
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
                    You'll experience a controlled burning sensation as the TCA solution is applied. This is normal and
                    indicates the peel is working effectively. The treatment typically takes 30-45 minutes.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Recovery Period</h3>
                  <p className="text-gray-600">
                    Expect 7-14 days of peeling and healing. Your skin will initially appear red and tight, followed by
                    peeling that reveals fresh, new skin underneath.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Results Timeline</h3>
                  <p className="text-gray-600">
                    Initial results are visible after healing is complete. Optimal results develop over 2-3 months as
                    collagen production increases and skin continues to improve.
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
                    <span className="font-medium">30-45 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Downtime:</span>
                    <span className="font-medium">7-14 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sessions Needed:</span>
                    <span className="font-medium">1-3 treatments</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Results Last:</span>
                    <span className="font-medium">1-2 years</span>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Ideal Candidates</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-4 w-4 text-sage-600 mr-2" />
                    Deep wrinkles and fine lines
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-4 w-4 text-sage-600 mr-2" />
                    Acne scars and texture issues
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-4 w-4 text-sage-600 mr-2" />
                    Sun damage and age spots
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-4 w-4 text-sage-600 mr-2" />
                    Uneven skin tone
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <TcaPeelFAQ />

      {/* CTA Section */}
      <section className="py-16 bg-sage-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-4">Ready for Dramatic Skin Transformation?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Schedule your TCA chemical peel consultation today and discover how this powerful treatment can rejuvenate
            your skin.
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
