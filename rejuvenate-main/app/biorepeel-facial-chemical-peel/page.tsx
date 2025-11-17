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
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import BioRePeelFacialChemicalPeelHero from "@/components/biorepeel-facial-chemical-peel-hero";
import BioRePeelFacialChemicalPeelFAQ from "@/components/biorepeel-facial-chemical-peel-faq";

export default function BioRePeelTreatmentPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <BioRePeelFacialChemicalPeelHero />

      {/* Treatment Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-6">
                Next Generation Chemical Peel
              </h2>
              <div className="space-y-4 text-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  BioRePeelCl3® Biphasic, Patented Antioxidant Peel
                </h3>
                <p>
                  BioRePeelCl3® is an innovative biphasic, patented chemical
                  peel with powerful antioxidant, revitalizing, and peeling
                  action. It exfoliates dead skin cells to accelerate cellular
                  renewal, while amino acids, vitamins, and GABA boost radiance
                  and support skin rejuvenation. The lipophilic phase provides a
                  protective filming and moisturizing effect, enhancing
                  absorption and comfort. Made in Italy to international quality
                  standards, BioRePeelCl3® can also be used in synergy with
                  other treatments to amplify results and reveal smoother, more
                  youthful-looking skin.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/biorepeel-next-gen.jpg"
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
              Why Choose BioRePeel?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of chemical peels with advanced technology
              and superior results.
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
                price: "From $200",
                href: "/biorepeel-facial-chemical-peel/35-tca-peel",
                image:
                  "/images/biorepeel-35-tca-facial-treatment.jpg",
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
                price: "From $250",
                href: "/biorepeel-facial-chemical-peel/50-tca-peel",
                image:
                  "/images/biorepeel-50-tca-body-treatment.png",
              },
            ].map((treatment, index) => (
              <Card
                key={index}
                className={`overflow-hidden hover:shadow-lg transition-shadow duration-300 ${
                  treatment.popular ? "ring-2 ring-sage-600" : ""
                }`}
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
                      Learn More & Book
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
                src="/placeholder.svg?height=400&width=500&text=Before+After+Results+1"
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
                src="/placeholder.svg?height=400&width=500&text=Before+After+Results+2"
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
            <Link href="/about-us/portfolio">
              <Button className="bg-sage-600 hover:bg-sage-700 text-white">
                View More Results
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Treatment Packages */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Treatment Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the package that best fits your skin goals and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Single Treatment",
                price: "$200",
                duration: "One session",
                features: [
                  "BioRePeel 35 TCA facial",
                  "Skin consultation",
                  "Post-treatment care",
                  "Aftercare instructions",
                ],
              },
              {
                title: "Rejuvenation Series",
                price: "$500",
                duration: "3 treatments",
                features: [
                  "3 BioRePeel sessions",
                  "15% package savings",
                  "Customized treatment plan",
                  "Complimentary skincare kit",
                ],
                popular: true,
              },
              {
                title: "Complete Transformation",
                price: "$900",
                duration: "6 treatments",
                features: [
                  "6 BioRePeel sessions",
                  "25% package savings",
                  "Priority booking",
                  "Free maintenance treatment",
                ],
              },
            ].map((pkg, index) => (
              <Card
                key={index}
                className={`relative ${
                  pkg.popular ? "ring-2 ring-sage-600" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-sage-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Best Value
                    </span>
                  </div>
                )}
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {pkg.title}
                  </h3>
                  <div className="text-3xl font-bold text-sage-600 mb-1">
                    {pkg.price}
                  </div>
                  <p className="text-gray-500 mb-6">{pkg.duration}</p>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-gray-600 flex items-center justify-center"
                      >
                        <CheckCircle className="h-4 w-4 text-sage-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      pkg.popular
                        ? "bg-sage-600 hover:bg-sage-700 text-white"
                        : "bg-white border border-sage-600 text-sage-600 hover:bg-sage-50"
                    }`}
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-sage-600 hover:bg-gray-100"
            >
              Book Your Treatment
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
  );
}
