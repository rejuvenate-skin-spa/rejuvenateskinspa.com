"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Star, Users } from "lucide-react";
import Image from "next/image";
import PassionFruitEnzymePeelFAQ from "@/components/passion-fruit-enzyme-peel-faq";
import PassionFruitEnzymePeelHero from "@/components/passion-fruit-enzyme-peel-hero";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function PassionFruitEnzymePeelClientPage() {
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
    const day = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
    const hour = now.getHours();

    // Business hours: Monday-Friday 9AM-6PM, Saturday 9AM-4PM
    if (day === 0) return false; // Closed Sunday
    if (day >= 1 && day <= 5) return hour >= 9 && hour < 18; // Mon-Fri 9AM-6PM
    if (day === 6) return hour >= 9 && hour < 16; // Sat 9AM-4PM
    return false;
  };

  const handleGetInTouch = () => {
    if (isMobile && isBusinessHours()) {
      window.location.href = "tel:+14805551234";
    } else {
      router.push("/about-us/contact-us");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <PassionFruitEnzymePeelHero />

      {/* Treatment Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Exotic Anti-Aging Treatment (No tingle effect but medium to high
                heat factor)
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our Passion Fruit Enzyme Peel is packed with tropical radiance
                renewal. Experience the exotic allure of our Passion Fruit
                Enzyme Peel, a luxurious treatment that blends powerful
                anti-aging fruit enzymes with a 30% glycolic acid peel for deep
                exfoliation and cellular renewal. Rich in vitamins A and C and
                infused with collagen peptides, this advanced enzyme facial
                treatment boosts circulation, enhances firmness, and refines
                texture for a radiant, youthful glow.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Designed to stimulate natural collagen production and improve
                skin elasticity, this collagen-boosting facial delivers
                intensive rejuvenation while offering a sensorial escape to a
                tropical paradise. Reveal brighter, smoother, and more luminous
                skin with every treatment.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-sage-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Rich in Vitamins A & C
                    </h3>
                    <p className="text-gray-700">
                      Powerful antioxidants that promote collagen production and
                      skin renewal
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-sage-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Anti-Aging Properties
                    </h3>
                    <p className="text-gray-700">
                      Natural enzymes help reduce fine lines and improve skin
                      elasticity
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-sage-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Tones & Heats
                    </h3>
                    <p className="text-gray-700">
                      A wonderful and intense warmth develops when massaged into
                      your complexion
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-sage-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Tightens & Firms
                    </h3>
                    <p className="text-gray-700">Visibly improves elasticity</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-sage-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Exfoliates & Softens
                    </h3>
                    <p className="text-gray-700">
                      Smooths rough, dull skin and provides antioxidant
                      protection & renewal
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-amber-50 border-l-4 border-amber-500 rounded">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> Not recommended for clients with
                  rosacea, melasma, Fitzpatrick 4-6, or recently sun-exposed
                  skin due to its heat strength.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Passion Fruit Enzyme Peel Benefits"
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
              Discover the anti-aging power of our exotic Passion Fruit Enzyme
              Peel
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-sage-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Youthful Radiance
                </h3>
                <p className="text-gray-700">
                  Vitamins A and C work together to promote cell renewal and
                  restore youthful glow.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-sage-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Firmer Skin
                </h3>
                <p className="text-gray-700">
                  Natural enzymes help improve skin elasticity and firmness for
                  a more lifted appearance.
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
                  Exotic aromas and premium ingredients create an indulgent spa
                  experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Treatment Packages
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Single Treatment
                </h3>
                <div className="text-4xl font-bold text-sage-600 mb-2">
                  $120
                </div>
                <div className="text-sm text-gray-600 mb-4">60 minutes</div>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    Skin consultation
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    Enzyme facial peel
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    Hydrating mask
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    Post-treatment skincare
                  </li>
                </ul>
                <Button className="w-full bg-sage-600 hover:bg-sage-700">
                  Book Now
                </Button>
              </CardContent>
            </Card>

            <Card className="border-sage-600 shadow-lg transform scale-105">
              <CardContent className="p-6 text-center">
                <div className="bg-sage-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Monthly Package
                </h3>
                <div className="text-4xl font-bold text-sage-600 mb-2">
                  $320
                </div>
                <div className="text-sm text-gray-600 mb-4">3 treatments</div>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />3
                    enzyme peels
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    15% savings
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    Customized treatment plan
                  </li>
                </ul>
                <Button className="w-full bg-sage-600 hover:bg-sage-700">
                  Book Now
                </Button>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Seasonal Package
                </h3>
                <div className="text-4xl font-bold text-sage-600 mb-2">
                  $600
                </div>
                <div className="text-sm text-gray-600 mb-4">6 treatments</div>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />6
                    enzyme peels
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    25% savings
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    Priority booking
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    Complimentary add-ons
                  </li>
                </ul>
                <Button className="w-full bg-sage-600 hover:bg-sage-700">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div id="faq-section">
        <PassionFruitEnzymePeelFAQ />
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-sage-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
            Ready for an Exotic Anti-Aging Experience?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book your Passion Fruit Enzyme Peel treatment today and discover the
            luxury of exotic skincare.
          </p>
          <Button
            onClick={handleGetInTouch}
            className="bg-white text-sage-600 hover:bg-gray-100 px-4 py-1.5 text-base shadow-md backdrop-blur-sm"
          >
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
}
