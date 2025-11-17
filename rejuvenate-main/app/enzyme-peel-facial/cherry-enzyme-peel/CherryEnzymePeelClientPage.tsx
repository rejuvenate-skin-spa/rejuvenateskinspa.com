"use client";

import { CherryEnzymePeelHero } from "@/components/cherry-enzyme-peel-hero";
import { CherryEnzymePeelFAQ } from "@/components/cherry-enzyme-peel-faq";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function CherryEnzymePeelClientPage() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const isBusinessHours = () => {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();

    // Monday-Friday 9 AM - 6 PM, Saturday 9 AM - 4 PM
    if (day >= 1 && day <= 5) {
      return hour >= 9 && hour < 18;
    } else if (day === 6) {
      return hour >= 9 && hour < 16;
    }
    return false;
  };

  const handleGetInTouchClick = () => {
    if (isMobile && isBusinessHours()) {
      window.location.href = "tel:+14802818084";
    } else {
      router.push("/about-us/contact-us");
    }
  };

  return (
    <main className="min-h-screen">
      <CherryEnzymePeelHero />

      {/* Treatment Overview */}
      <section id="treatment-overview" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <Badge className="bg-sage-100 text-sage-800 mb-4">Level 3</Badge>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-6">
              Brightening Cherry Enzyme Peel Treatment
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Infused with natural cherry enzymes, this luminous fruit enzyme
              peel combines restorative exfoliation with antioxidant
              protection to restore clarity, radiance, and glow.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              This gentle yet effective cherry enzyme peel harnesses the power
              of 5% lactic acid, blended with 1% arbutin and 1% kojic acid, to
              visibly brighten dull skin, even out skin tone, smooth skin
              texture, hydrate and rejuvenate your skin complexion. Safely
              suitable for most skin types.
            </p>
          </div>
          <div className="bg-sage-50 p-8 rounded-2xl mt-8">
            <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
              Treatment Benefits
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-sage-600 mr-3">✓</span>
                <span className="text-gray-700">
                  Brightens dull, tired-looking skin
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-sage-600 mr-3">✓</span>
                <span className="text-gray-700">
                  Improves skin texture and smoothness
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-sage-600 mr-3">✓</span>
                <span className="text-gray-700">
                  Reduces appearance of age spots
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-sage-600 mr-3">✓</span>
                <span className="text-gray-700">
                  Stimulates collagen production
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-sage-600 mr-3">✓</span>
                <span className="text-gray-700">
                  Provides natural antioxidant protection
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Your Cherry Enzyme Peel Experience
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the transformative power of our carefully crafted cherry
              enzyme treatment process
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-sage-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Skin Analysis
                </h3>
                <p className="text-gray-600">
                  Comprehensive skin assessment to customize your cherry enzyme
                  peel treatment for optimal results
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-sage-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Cherry Enzyme Application
                </h3>
                <p className="text-gray-600">
                  Gentle application of our cherry enzyme blend to exfoliate and
                  nourish your skin naturally
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-sage-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Hydration & Protection
                </h3>
                <p className="text-gray-600">
                  Finish with hydrating serums and protective moisturizer to
                  lock in your radiant results
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-8">
            Cherry Enzyme Peel Investment
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <Card className="border-2 border-sage-200 hover:border-sage-400 transition-colors">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Single Treatment
                </h3>
                <div className="text-4xl font-bold text-sage-600 mb-4">
                  $120
                </div>
                <p className="text-gray-600 mb-6">
                  Perfect for trying our cherry enzyme peel
                </p>
                <Button className="w-full bg-sage-600 hover:bg-sage-700">
                  Book Single Session
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-sage-400 bg-sage-50 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-sage-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Save $40
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Treatment Series
                </h3>
                <div className="text-4xl font-bold text-sage-600 mb-4">
                  $320
                </div>
                <p className="text-gray-600 mb-2">3 sessions (normally $360)</p>
                <p className="text-sm text-sage-600 mb-6">
                  Best value for optimal results
                </p>
                <Button className="w-full bg-sage-600 hover:bg-sage-700">
                  Book Treatment Series
                </Button>
              </CardContent>
            </Card>
          </div>

          <p className="text-gray-600 mt-8 max-w-2xl mx-auto">
            All treatments include consultation, aftercare products, and
            personalized skincare recommendations. Contact us for package deals
            and seasonal promotions.
          </p>
        </div>
      </section>

      <section className="py-16 bg-sage-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-6">
            Ready for Radiant, Glowing Skin?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the natural brightening power of our Cherry Enzyme Peel.
            Book your consultation today and discover your most radiant
            complexion.
          </p>
          <Button
            onClick={handleGetInTouchClick}
            className="bg-sage-600 hover:bg-sage-700 text-white px-4 py-1.5 text-base font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
          >
            Get in Touch
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <div id="faq-section">
        <CherryEnzymePeelFAQ />
      </div>

      {/* Related Treatments */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Explore More Enzyme Treatments
            </h2>
            <p className="text-lg text-gray-600">
              Discover our complete collection of natural enzyme peel treatments
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardContent className="p-6">
                <div className="h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Blueberry Enzyme Peel
                </h3>
                <p className="text-gray-600 mb-4">
                  Antioxidant-rich treatment for mature and damaged skin
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sage-600 font-semibold">From $85</span>
                  <Link href="/enzyme-peel-facial/blueberry-enzyme-peel">
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardContent className="p-6">
                <div className="h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Pumpkin Orange Peel
                </h3>
                <p className="text-gray-600 mb-4">
                  Vitamin A and C treatment for skin renewal and glow
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sage-600 font-semibold">From $95</span>
                  <Link href="/enzyme-peel-facial/pumpkin-orange-enzyme-peel">
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardContent className="p-6">
                <div className="h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Passion Fruit Peel
                </h3>
                <p className="text-gray-600 mb-4">
                  Brightening treatment with natural fruit acids
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sage-600 font-semibold">From $100</span>
                  <Link href="/enzyme-peel-facial/passion-fruit-enzyme-peel">
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/enzyme-peel-facial">
              <Button size="lg" className="bg-sage-600 hover:bg-sage-700">
                View All Enzyme Treatments
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
