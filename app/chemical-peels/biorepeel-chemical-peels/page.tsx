import type { Metadata } from "next";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import { buildService } from "@/lib/schema";
import { getService, getStartingPrice, formatPrice } from "@/lib/services";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  Clock,
  Shield,
  Star,
  Zap,
  Heart,
  Award,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import BioRePeelFacialChemicalPeelHero from "@/components/biorepeel-facial-chemical-peel-hero";
import BioRePeelFacialChemicalPeelFAQ from "@/components/biorepeel-facial-chemical-peel-faq";
import { SmartContactCTA } from "@/components/SmartContactCTA";

export const metadata: Metadata = {
  title: "BioRePeel Chemical Peel | Next Generation TCA Peel | Rejuvenate Skin Spa | Queen Creek, AZ",
  description:
    "BioRePeelCl3® biphasic chemical peel treatment in Queen Creek, Arizona. Advanced TCA peel with amino acids, vitamins, and GABA. Minimal peeling, maximum results. Facial and body treatments available.",
  keywords:
    "BioRePeel, BioRePeelCl3, biphasic chemical peel, TCA peel, next generation peel, minimal downtime peel, Queen Creek Arizona, antioxidant peel, skin rejuvenation",
  alternates: { canonical: "/chemical-peels/biorepeel-chemical-peels" },
};

export default function BioRePeelTreatmentPage() {
  const facialStarting = getStartingPrice(getService("/chemical-peels/biorepeel-facial-peels")!);
  const bodyStarting = getStartingPrice(getService("/chemical-peels/biorepeel-body-peels")!);

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd("/chemical-peels/biorepeel-chemical-peels")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildService(getService("/chemical-peels/biorepeel-chemical-peels")!)) }}
      />
      {/* Hero Section */}
      <BioRePeelFacialChemicalPeelHero />

      {/* Treatment Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-6">
                What is BioRePeel?
              </h2>
              <div className="space-y-4 text-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  BioRePeelCl3® Biphasic Chemical Peel
                </h3>
                <p>
                  BioRePeelCl3® is a patented biphasic chemical peel that combines TCA with amino acids, vitamins, and GABA. The treatment exfoliates dead skin cells, accelerates cellular renewal, and boosts radiance with minimal visible peeling.
                </p>
                <p>
                  Made in Italy to international quality standards, BioRePeel works for all skin types year-round. Rejuvenate Skin Spa in Queen Creek offers BioRePeel as a standalone treatment or combined with other services for enhanced results.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/biorepeel-next-gen.avif"
                alt="BioRePeelCl3 Next Generation Chemical Peel"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              BioRePeel Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              BioRePeel delivers deep rejuvenation with minimal downtime. Ideal for clients seeking visible improvement without extended recovery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Immediate Results",
                description:
                  "See visible improvement in skin texture and radiance after just one treatment.",
              },
              {
                icon: Shield,
                title: "Minimal Peeling",
                description:
                  "Advanced formula provides deep rejuvenation with little to no visible peeling.",
              },
              {
                icon: Star,
                title: "All Skin Types",
                description:
                  "Safe and effective for all skin types and ethnicities, including sensitive skin.",
              },
              {
                icon: Clock,
                title: "Year-Round Treatment",
                description:
                  "Can be performed any time of year, even during summer months.",
              },
              {
                icon: Heart,
                title: "Multi-Action Formula",
                description:
                  "Combines exfoliation, hydration, and anti-aging benefits in one treatment.",
              },
              {
                icon: Award,
                title: "Clinically Proven",
                description:
                  "Backed by clinical studies and used by professionals worldwide.",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="text-center bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-sage-600 text-white rounded-full mb-4">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              BioRePeel Treatment Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect BioRePeel treatment for your specific skin
              needs and concerns.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "BioRePeel 35 TCA Facial",
                description:
                  "Perfect for facial rejuvenation with gentle yet effective TCA concentration.",
                benefits: [
                  "Improves skin texture and tone",
                  "Reduces fine lines and wrinkles",
                  "Minimizes pore appearance",
                  "Brightens complexion",
                  "Stimulates collagen production",
                ],
                duration: "45-60 minutes",
                price: `From ${formatPrice(facialStarting!.price)}`,
                href: "/chemical-peels/biorepeel-facial-peels",
                image:
                  "/images/biorepeel-35-tca-facial-treatment.avif",
                popular: true,
              },
              {
                title: "BioRePeel 50 TCA Body",
                description:
                  "Higher concentration formula designed for body treatments and stubborn skin concerns.",
                benefits: [
                  "Treats body acne and scarring",
                  "Improves skin texture on body",
                  "Reduces hyperpigmentation",
                  "Smooths rough skin areas",
                  "Rejuvenates décolletage and hands",
                ],
                duration: "60-90 minutes",
                price: `From ${formatPrice(bodyStarting!.price)}`,
                href: "/chemical-peels/biorepeel-body-peels",
                image:
                  "/images/biorepeel-50-tca-body-treatment.avif",
              },
            ].map((treatment, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300 ring-2 ring-sage-600"
              >
                {treatment.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-sage-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="relative h-48">
                  <Image
                    src={treatment.image || "/placeholder.svg"}
                    alt={treatment.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {treatment.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{treatment.description}</p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Benefits:
                      </h4>
                      <ul className="space-y-1">
                        {treatment.benefits.map((benefit, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-gray-600 flex items-center"
                          >
                            <CheckCircle className="h-4 w-4 text-sage-600 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex justify-between items-center text-sm">
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 mr-2 text-sage-600" />
                        {treatment.duration}
                      </div>
                      <div className="flex items-center text-sage-600 font-semibold">
                        <Star className="h-4 w-4 mr-1" />
                        {treatment.price}
                      </div>
                    </div>
                  </div>

                  <Link href={treatment.href}>
                    <Button className="w-full bg-sage-600 hover:bg-sage-700 text-white">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              How BioRePeel Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the science behind this revolutionary treatment.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Biphasic Action",
                description:
                  "Two-phase formula works on surface and deep skin layers simultaneously.",
              },
              {
                step: "02",
                title: "Cellular Renewal",
                description:
                  "TCA and amino acids stimulate natural cell turnover and regeneration.",
              },
              {
                step: "03",
                title: "Collagen Boost",
                description:
                  "Vitamins and GABA promote collagen synthesis for firmer skin.",
              },
              {
                step: "04",
                title: "Skin Transformation",
                description:
                  "Reveals smoother, brighter, more youthful-looking skin.",
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

      {/* Before & After */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Real Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the transformative power of BioRePeel treatments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative">
              <Image
                src="/images/biorepeel-real-results-1.avif"
                alt="BioRePeel before and after results"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm">
                After 3 treatments
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/biorepeel-real-results-2.avif"
                alt="BioRePeel skin transformation"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm">
                After 6 treatments
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-500 mb-4">
              *Results may vary. Individual results are not guaranteed and may
              vary from person to person.
            </p>
            <Link href="/portfolio">
              <Button className="bg-sage-600 hover:bg-sage-700 text-white">
                View More Results
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Who May Want to Postpone */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-playfair font-bold text-gray-900 mb-6">
            Who May Want to Postpone a BioRePeel
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
              <span>Known sensitivity to TCA or any BioRePeel ingredients</span>
            </li>
          </ul>
          <p className="mt-6 text-gray-600">
            While BioRePeel is gentler than traditional TCA peels and suitable for most skin types, a consultation ensures the treatment is appropriate for your skin and health history.
          </p>
        </div>
      </section>

      {/* Why Choose Rejuvenate */}
      <section className="py-12 bg-sage-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-playfair font-bold text-gray-900 mb-6">
            Why Choose Rejuvenate Skin Spa for BioRePeel
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Rejuvenate Skin Spa in Queen Creek, Arizona offers BioRePeelCl3® treatments performed by a licensed cosmetologist with advanced certifications in chemical peel applications. We offer both the BioRePeel 35 TCA facial peel and the BioRePeel 50 TCA body peel, and every treatment begins with a skin assessment to determine the right formula and protocol for your concerns.
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
            <Link href="/chemical-peels/glycolic-acid-peels" className="text-sage-600 hover:text-sage-700 font-medium underline">
              Glycolic Acid Peels →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div id="faq">
        <BioRePeelFacialChemicalPeelFAQ />
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-sage-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-4">
            Ready to Experience BioRePeel?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Discover the revolutionary treatment that's transforming skin
            rejuvenation with minimal downtime and maximum results.
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

