"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { GlycolicAcidPeelFAQ } from "@/components/glycolic-acid-peel-faq"
import { GlycolicAcidPeelHero } from "@/components/glycolic-acid-peel-hero"
import { CheckCircle, Clock, Shield, Star, Sparkles, AlertTriangle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { SmartContactCTA } from "@/components/SmartContactCTA"
import { getService, formatPrice } from "@/lib/services"

export default function GlycolicAcidPeelPageClient() {
  const service = getService("/chemical-peels/glycolic-acid-peels")!;
  const pricing = service.pricing!;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <GlycolicAcidPeelHero />

      {/* Treatment Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              What Is a Glycolic Acid Peel?
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
                src="/images/glycolic-acid-peel-benefits.avif"
                alt="Glycolic acid peel benefits"
                width={500}
                height={400}
                className="rounded-lg shadow-lg object-cover"
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
            <div className="relative w-full h-[450px] overflow-hidden rounded-lg bg-gray-50 border border-gray-200">
              <Image
                src="/images/glycolic-acid-peel-results-before-after-2.avif"
                alt="Glycolic Acid Peel Results - Skin Texture"
                fill
                className="object-contain object-center"
              />
            </div>
            <div className="relative w-full h-[450px] overflow-hidden rounded-lg bg-gray-50 border border-gray-200">
              <Image
                src="/images/glycolic-acid-peel-results-2.avif"
                alt="Glycolic Acid Peel Results - Skin Brightness"
                fill
                className="object-contain object-center"
              />
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-500 mb-4">
              *Results may vary. Individual results are not guaranteed and may vary from person to person.
            </p>
            <Button asChild className="bg-sage-600 hover:bg-sage-700 text-white">
              <Link href="/portfolio">View More Results</Link>
            </Button>
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

      {/* Pricing Section */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-sage-100 text-sage-800">Pricing</Badge>
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Glycolic Acid Peel Treatment Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer different strengths to match your skin's needs and tolerance level.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {/* Light Peel Card */}
            <Card className="border border-gray-200 hover:shadow-md transition-shadow h-full bg-white">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="min-h-[28px] mb-3" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  Light Peel
                </h3>
                <p className="text-sm text-gray-500 mb-1 text-center">20–30% Concentration</p>
                <div className="text-3xl font-bold text-sage-600 mb-1 text-center">
                  {formatPrice(pricing[0].price)}
                </div>
                <p className="text-sm text-gray-500 mb-5 text-center">20–30 minutes</p>
                <p className="text-sm text-gray-600 mb-4 text-center">
                  Perfect for first-time clients or sensitive skin
                </p>
                <ul className="space-y-3 mb-6 flex-grow">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Gentle exfoliation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Minimal downtime</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Immediate glow</span>
                  </li>
                </ul>
                <p className="text-xs text-sage-600 font-medium mb-4 text-center">
                  Ideal for: Maintenance and prevention
                </p>
                <SmartContactCTA
                  showPhoneWhenOpen
                  className="w-full mt-auto bg-sage-600 hover:bg-sage-700 text-white"
                />
              </CardContent>
            </Card>

            {/* Medium Peel Card (Featured) */}
            <Card className="border border-sage-300 hover:shadow-md transition-shadow bg-white h-full">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex justify-center mb-3">
                  <Badge className="bg-sage-600 text-white text-xs px-3 py-1">
                    Most Popular
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  Medium Peel
                </h3>
                <p className="text-sm text-gray-500 mb-1 text-center">35–50% Concentration</p>
                <div className="text-3xl font-bold text-sage-600 mb-1 text-center">
                  {formatPrice(pricing[0].price)}
                </div>
                <p className="text-sm text-gray-500 mb-5 text-center">20–30 minutes</p>
                <p className="text-sm text-gray-600 mb-4 text-center">
                  Our most popular option for visible results
                </p>
                <ul className="space-y-3 mb-6 flex-grow">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Noticeable improvement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Balanced effectiveness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Moderate peeling</span>
                  </li>
                </ul>
                <p className="text-xs text-sage-600 font-medium mb-4 text-center">
                  Ideal for: Active skin concerns
                </p>
                <SmartContactCTA
                  showPhoneWhenOpen
                  className="w-full mt-auto bg-sage-600 hover:bg-sage-700 text-white"
                />
              </CardContent>
            </Card>

            {/* Deep Peel Card */}
            <Card className="border border-gray-200 hover:shadow-md transition-shadow h-full bg-white">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="min-h-[28px] mb-3" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  Deep Peel
                </h3>
                <p className="text-sm text-gray-500 mb-1 text-center">50–70% Concentration</p>
                <div className="text-3xl font-bold text-sage-600 mb-1 text-center">
                  {formatPrice(pricing[0].price)}
                </div>
                <p className="text-sm text-gray-500 mb-5 text-center">20–30 minutes</p>
                <p className="text-sm text-gray-600 mb-4 text-center">
                  Maximum strength for significant concerns
                </p>
                <ul className="space-y-3 mb-6 flex-grow">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Dramatic results</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Deep exfoliation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Advanced treatment</span>
                  </li>
                </ul>
                <p className="text-xs text-sage-600 font-medium mb-4 text-center">
                  Ideal for: Severe skin issues
                </p>
                <SmartContactCTA
                  showPhoneWhenOpen
                  className="w-full mt-auto bg-sage-600 hover:bg-sage-700 text-white"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who May Want to Postpone */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-playfair font-bold text-gray-900 mb-6">
            Who May Want to Postpone a Glycolic Acid Peel
          </h2>
          <ul className="space-y-3 text-gray-600 text-lg">
            <li className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
              <span>Active sunburn, rash, or open wounds on the treatment area</span>
            </li>
            <li className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
              <span>Pregnancy or nursing</span>
            </li>
            <li className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
              <span>Recent use of retinoids or prescription-strength exfoliants</span>
            </li>
            <li className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
              <span>Use of isotretinoin (Accutane) within the past 6 months</span>
            </li>
            <li className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
              <span>History of cold sores in the treatment area (discuss during consultation)</span>
            </li>
          </ul>
          <p className="mt-6 text-gray-600">
            Your practitioner will assess your skin and review your history during your consultation to ensure a glycolic acid peel is appropriate for you.
          </p>
        </div>
      </section>

      {/* Why Choose Rejuvenate */}
      <section className="py-12 bg-sage-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-playfair font-bold text-gray-900 mb-6">
            Why Choose Rejuvenate Skin Spa
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Rejuvenate Skin Spa in Queen Creek, Arizona offers professional-grade glycolic acid peels performed by a licensed cosmetologist. Each treatment is customized to your skin type and tolerance level, and begins with a skin analysis to determine the ideal concentration and approach. We focus on safe, progressive improvement rather than aggressive treatments.
          </p>
          <Link
            href="/about-us/bridgette-ball"
            className="inline-flex items-center text-sage-600 hover:text-sage-700 font-medium transition-colors"
          >
            Meet Bridgette Ball
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </div>
      </section>

      {/* Related Treatments */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-playfair font-bold text-gray-900 mb-4">
            Related Chemical Peel Treatments
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/chemical-peels" className="text-sage-600 hover:text-sage-700 font-medium underline">
              All Chemical Peels →
            </Link>
            <Link href="/chemical-peels/tca-peels" className="text-sage-600 hover:text-sage-700 font-medium underline">
              TCA Peels →
            </Link>
            <Link href="/chemical-peels/biorepeel-chemical-peels" className="text-sage-600 hover:text-sage-700 font-medium underline">
              BioRePeel →
            </Link>
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
            <SmartContactCTA
              variant="outline"
              size="lg"
              showPhoneWhenOpen
              className="bg-white text-sage-600 hover:bg-gray-100"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
