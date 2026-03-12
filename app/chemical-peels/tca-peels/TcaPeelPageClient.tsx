"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TcaPeelFAQ } from "@/components/tca-peel-faq";
import TcaPeelHero from "@/components/tca-peel-hero";
import { CheckCircle, Clock, Shield, Star, AlertTriangle, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import PhoneCtaButton from "@/components/phone-cta-button";
import { SmartContactCTA } from "@/components/SmartContactCTA";
import { getService, formatPrice } from "@/lib/services";

export default function TcaPeelPageClient() {
  const service = getService("/chemical-peels/tca-peels")!;
  const pricing = service.pricing!;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <TcaPeelHero />

      {/* Treatment Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              What Is a TCA Chemical Peel?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              TCA (Trichloroacetic Acid) peels are considered medium to deep
              depth chemical peels that provide significant skin rejuvenation by
              removing layers of damaged skin and stimulating new cell and
              collagen regrowth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                What Is a TCA 25% Peel?
              </h3>
              <p className="text-gray-600 mb-6">
                A TCA 25% peel is a medium to deep chemical peel using 25%
                trichloroacetic acid to deeply exfoliate, smooth uneven texture
                and tone, and support collagen stimulation for visible skin
                rejuvenation. Stronger than light peels, this medium-depth TCA
                peel penetrates into the epidermis and dermis middle skin layers
                to correct more advanced skin concerns—while maintaining a
                manageable recovery compared to fully deep peels.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-sage-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">
                    Medium to deep depth penetration for significant results
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-sage-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">
                    Stimulates collagen and elastin production
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-sage-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">
                    Effective for multiple skin concerns
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/chemical-peel-treatment-close-up.avif"
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
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              TCA Peel Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience comprehensive skin rejuvenation with our professional
              TCA chemical peel treatment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Star className="h-8 w-8 text-sage-600" />,
                title: "Reduces Deep Wrinkles",
                description:
                  "Effectively diminishes fine lines and deeper wrinkles for smoother skin texture.",
              },
              {
                icon: <CheckCircle className="h-8 w-8 text-sage-600" />,
                title: "Improves Acne Scars",
                description:
                  "Significantly reduces the appearance of acne scars and post-inflammatory marks.",
              },
              {
                icon: <Shield className="h-8 w-8 text-sage-600" />,
                title: "Sun Damage Repair",
                description:
                  "Addresses sun spots, age spots, and other forms of photodamage effectively.",
              },
              {
                icon: <Clock className="h-8 w-8 text-sage-600" />,
                title: "Skin Texture Enhancement",
                description:
                  "Improves overall skin texture, making it smoother and more refined.",
              },
              {
                icon: <Star className="h-8 w-8 text-sage-600" />,
                title: "Pore Size Reduction",
                description:
                  "Minimizes the appearance of enlarged pores for a more refined complexion.",
              },
              {
                icon: <CheckCircle className="h-8 w-8 text-sage-600" />,
                title: "Collagen Stimulation",
                description:
                  "Promotes natural collagen production for firmer, more youthful skin.",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="space-y-4">
                  <div className="flex justify-center">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {benefit.title}
                  </h3>
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
              Real TCA Peel Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the dramatic transformation possible with our professional TCA
              chemical peel treatments.
            </p>
          </div>

          <div className="flex justify-center gap-8 mb-12">
            <div className="relative rounded-lg shadow-lg overflow-hidden" style={{ width: '5in', height: '7in' }}>
              <Image
                src="/images/tca-peel-results-before.avif"
                alt="TCA Peel Results Before"
                width={480}
                height={672}
                className="rounded-lg object-contain"
              />
            </div>
            <div className="relative rounded-lg shadow-lg overflow-hidden" style={{ width: '5in', height: '7in' }}>
              <Image
                src="/images/tca-peel-results-after.avif"
                alt="TCA Peel Results After"
                width={480}
                height={672}
                className="rounded-lg object-contain"
              />
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-500 mb-4">
              *Results may vary. Individual results are not guaranteed and may
              vary from person to person.
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
              The TCA Peel Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach ensures safe, effective treatment with
              optimal results.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description:
                  "Comprehensive skin assessment and treatment planning with our expert aestheticians.",
              },
              {
                step: "02",
                title: "Preparation",
                description:
                  "Skin preparation and pre-treatment conditioning to optimize peel effectiveness.",
              },
              {
                step: "03",
                title: "Application",
                description:
                  "Careful application of TCA solution with precise timing and monitoring.",
              },
              {
                step: "04",
                title: "Recovery Care",
                description:
                  "Detailed aftercare instructions and follow-up support for optimal healing.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-600 text-white rounded-full text-xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
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
              <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">
                What to Expect
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    During Treatment
                  </h3>
                  <p className="text-gray-600">
                    You'll experience a controlled burning sensation as the TCA
                    solution is applied. This is normal and indicates the peel
                    is working effectively. The treatment typically takes 30-45
                    minutes.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Recovery Period
                  </h3>
                  <p className="text-gray-600">
                    Expect 3-5 days of peeling and healing. Your skin will
                    initially appear red and tight, followed by peeling that
                    reveals fresh, new skin underneath.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Results Timeline
                  </h3>
                  <p className="text-gray-600">
                    Initial results are visible after healing is complete.
                    Optimal results develop over 2-3 months as collagen
                    production increases and skin continues to improve.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Treatment Information
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">30-45 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Downtime:</span>
                    <span className="font-medium">3-5 days</span>
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
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Ideal Candidates
                </h3>
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

      {/* Pricing Section */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-sage-100 text-sage-800">Pricing</Badge>
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              TCA Peel Treatment Options
            </h2>
            <p className="text-lg text-gray-600">
              Professional TCA 25% chemical peel treatment
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <Card className="border border-sage-300 hover:shadow-md transition-shadow bg-white">
              <CardContent className="p-6 flex flex-col">
                <div className="flex justify-center mb-3">
                  <Badge className="bg-sage-600 text-white text-xs px-3 py-1">
                    Medium-Depth Peel
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  TCA 25% Peel
                </h3>
                <div className="text-3xl font-bold text-sage-600 mb-1 text-center">
                  {formatPrice(pricing[0].price)}
                </div>
                <p className="text-sm text-gray-500 mb-5 text-center">
                  30–45 minutes
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Reduces deep wrinkles & fine lines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Improves acne scars & texture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Addresses sun damage & age spots</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Stimulates collagen production</span>
                  </li>
                </ul>
                <PhoneCtaButton className="w-full" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who May Want to Postpone */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-playfair font-bold text-gray-900 mb-6">
            Who May Want to Postpone a TCA Peel
          </h2>
          <ul className="space-y-3 text-gray-600 text-lg">
            <li className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
              <span>Active sunburn, open wounds, or skin infections in the treatment area</span>
            </li>
            <li className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
              <span>Pregnancy or nursing</span>
            </li>
            <li className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
              <span>Use of isotretinoin (Accutane) within the past 6 months</span>
            </li>
            <li className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
              <span>Recent use of prescription retinoids or strong exfoliating products</span>
            </li>
            <li className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
              <span>History of cold sores in the treatment area (discuss during consultation)</span>
            </li>
          </ul>
          <p className="mt-6 text-gray-600">
            TCA peels are stronger than light chemical peels and require a professional assessment beforehand. Your practitioner will evaluate your skin and health history during your consultation.
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
            Rejuvenate Skin Spa in Queen Creek, Arizona offers professional-grade TCA peels performed by a licensed cosmetologist with advanced certifications in chemical peel applications. Every treatment begins with a skin assessment to determine the right approach for your concerns and tolerance level. We focus on safe, controlled application with clear aftercare guidance.
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
            <Link href="/chemical-peels/glycolic-acid-peels" className="text-sage-600 hover:text-sage-700 font-medium underline">
              Glycolic Acid Peels →
            </Link>
            <Link href="/chemical-peels/biorepeel-chemical-peels" className="text-sage-600 hover:text-sage-700 font-medium underline">
              BioRePeel →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div id="faq-section">
        <TcaPeelFAQ />
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-sage-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-4">
            Ready for Dramatic Skin Transformation?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Schedule your TCA chemical peel consultation today and discover how
            this powerful treatment can rejuvenate your skin.
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
  );
}
