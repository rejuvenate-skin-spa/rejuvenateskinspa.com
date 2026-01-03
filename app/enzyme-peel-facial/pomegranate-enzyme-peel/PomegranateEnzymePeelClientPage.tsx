"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Star, Users, Phone } from "lucide-react";
import Image from "next/image";
import PomegranateEnzymePeelFAQ from "@/components/pomegranate-enzyme-peel-faq";
import PomegranateEnzymePeelHero from "@/components/pomegranate-enzyme-peel-hero";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/site-config";

export default function PomegranateEnzymePeelClientPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <PomegranateEnzymePeelHero />

      {/* Treatment Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Premium Antioxidant Renewal Treatment (level 4-5)
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our Pomegranate Enzyme Peel represents the pinnacle of natural
                skincare luxury. Packed with the highest concentration of
                antioxidants found in natural skincare and powered by
                pomegranate extracts, nature's richest sources of antioxidant,
                this brightening facial treatment provides unparalleled
                protection against environmental damage, while promoting
                cellular regeneration, collagen production, skin renewal for a
                visibly smoother, firmer, radiant glow.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                In addition, the Pomegranate Enzyme Facial Peel is also
                formulated for aging, oily, and acne- prone skin. Powered by
                pomegranate's potent antioxidants, it works to target irregular
                pigmentation, acne scars, and sun damage while exfoliating dead
                skin cells to brighten, deeply hydrate, clarify and refine your
                skin's overall tone and texture.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-sage-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Highest Antioxidant Content
                    </h3>
                    <p className="text-gray-700">
                      Pomegranate contains more antioxidants than any other
                      fruit for maximum protection
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-sage-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Cellular Regeneration
                    </h3>
                    <p className="text-gray-700">
                      Promotes rapid cell turnover and skin renewal for youthful
                      radiance
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-sage-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Premium Luxury
                    </h3>
                    <p className="text-gray-700">
                      Our most exclusive treatment using the finest pomegranate
                      extracts
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/pomegranate-enzyme-peel-benefits.png"
                alt="Pomegranate Enzyme Peel Benefits"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Treatment Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the ultimate in antioxidant protection with our premium
              Pomegranate Enzyme Peel
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-sage-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Maximum Protection
                </h3>
                <p className="text-gray-700">
                  Unparalleled antioxidant protection shields skin from
                  environmental damage and premature aging.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-sage-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Age Reversal
                </h3>
                <p className="text-gray-700">
                  Powerful enzymes help reverse signs of aging and restore
                  youthful skin vitality.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-sage-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Luxury Experience
                </h3>
                <p className="text-gray-700">
                  Our most premium treatment offering the ultimate in luxury
                  skincare indulgence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-sage-100 text-sage-800">Pricing</Badge>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pomegranate Peel Treatment Options
            </h2>
            <p className="text-xl text-gray-600">
              Professional enzyme peel treatments for radiant skin
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-stretch max-w-5xl mx-auto">
            {/* Single Treatment Card */}
            <Card className="border border-gray-200 hover:shadow-md transition-shadow h-full bg-white">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="min-h-[28px] mb-3" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  Single Treatment
                </h3>
                <div className="text-3xl font-bold text-sage-600 mb-1 text-center">
                  $120
                </div>
                <div className="min-h-[20px] mb-3" />
                <ul className="space-y-3 mb-6 flex-grow">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Powerful antioxidants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Brightening effect</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Anti-aging benefits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">No downtime</span>
                  </li>
                </ul>
                <Button
                  asChild
                  className="w-full mt-auto bg-sage-600 hover:bg-sage-700 text-white"
                >
                  <a href={`tel:${siteConfig.phoneTel}`} aria-label="Call Rejuvenate Skin Spa" className="flex items-center justify-center gap-2">
                    <Phone className="h-5 w-5" />
                    {siteConfig.phoneDisplay}
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* 3-Treatment Package Card (Featured) */}
            <Card className="border border-sage-300 hover:shadow-md transition-shadow bg-white h-full">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex justify-center mb-3">
                  <Badge className="bg-sage-600 text-white text-xs px-3 py-1">
                    Most Popular
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  3-Treatment Package
                </h3>
                <div className="text-3xl font-bold text-sage-600 mb-1 text-center">
                  $320
                </div>
                <div className="text-xs text-sage-700 font-medium mb-3 text-center">
                  Save $40 ($107 per session)
                </div>
                <ul className="space-y-3 mb-6 flex-grow">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Powerful antioxidants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Cumulative brightening results</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Enhanced collagen stimulation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Package savings included</span>
                  </li>
                </ul>
                <Button
                  asChild
                  className="w-full mt-auto bg-sage-600 hover:bg-sage-700 text-white"
                >
                  <a href={`tel:${siteConfig.phoneTel}`} aria-label="Call Rejuvenate Skin Spa" className="flex items-center justify-center gap-2">
                    <Phone className="h-5 w-5" />
                    {siteConfig.phoneDisplay}
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* 6-Treatment Package Card */}
            <Card className="border border-gray-200 hover:shadow-md transition-shadow h-full bg-white">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex justify-center mb-3">
                  <Badge className="bg-gray-600 text-white text-xs px-3 py-1">
                    Best Value
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  6-Treatment Package
                </h3>
                <div className="text-3xl font-bold text-sage-600 mb-1 text-center">
                  $599
                </div>
                <div className="text-xs text-sage-700 font-medium mb-3 text-center">
                  Save $121 ($100 per session)
                </div>
                <ul className="space-y-3 mb-6 flex-grow">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Maximum transformation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Long-term skin health</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Sustained collagen boost</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Best per-session value</span>
                  </li>
                </ul>
                <Button
                  asChild
                  className="w-full mt-auto bg-sage-600 hover:bg-sage-700 text-white"
                >
                  <a href={`tel:${siteConfig.phoneTel}`} aria-label="Call Rejuvenate Skin Spa" className="flex items-center justify-center gap-2">
                    <Phone className="h-5 w-5" />
                    {siteConfig.phoneDisplay}
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Package Pricing Callout */}
          <div className="mt-10 bg-white border border-sage-200 rounded-lg p-6 max-w-2xl mx-auto">
            <h4 className="text-base font-semibold text-gray-900 mb-3">How package pricing works</h4>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Clients who choose a treatment series may pay per session at the single-treatment rate. When the full series is completed, the package discount is applied to the final treatment.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Clients may also choose to pay for the full series upfront to receive the package pricing immediately.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div id="faq-section">
        <PomegranateEnzymePeelFAQ />
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-sage-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
            Ready for the Ultimate Antioxidant Experience?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Treat yourself to a premium Pomegranate Enzyme Peel today and
            experience the pinnacle of natural skincare luxury.
          </p>
          <div className="flex justify-center">
            <Button
              asChild
              className="bg-white text-sage-600 hover:bg-gray-100 px-6 py-3 text-base shadow-md"
            >
              <a href={`tel:${siteConfig.phoneTel}`} aria-label="Call Rejuvenate Skin Spa" className="flex items-center justify-center gap-2">
                <Phone className="h-5 w-5" />
                {siteConfig.phoneDisplay}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
