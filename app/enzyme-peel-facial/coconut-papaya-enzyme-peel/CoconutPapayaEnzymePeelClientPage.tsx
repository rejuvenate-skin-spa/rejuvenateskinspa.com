"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Star, Users } from "lucide-react";
import Image from "next/image";
import CoconutPapayaEnzymePeelFAQ from "@/components/coconut-papaya-enzyme-peel-faq";
import CoconutPapayaEnzymePeelHero from "@/components/coconut-papaya-enzyme-peel-hero";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CoconutPapayaEnzymePeelClientPage() {
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

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
    const hour = now.getHours();
    const day = now.getDay();

    // Business hours: Monday-Friday 9AM-6PM, Saturday 9AM-4PM
    if (day === 0) return false; // Sunday closed
    if (day >= 1 && day <= 5) return hour >= 9 && hour < 18; // Mon-Fri 9AM-6PM
    if (day === 6) return hour >= 9 && hour < 16; // Saturday 9AM-4PM
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
      <CoconutPapayaEnzymePeelHero />

      {/* Treatment Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Tropical Hydrating Treatment (Level 0-2)
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our Coconut-Papaya Enzyme Peel combines the deep moisturizing
                benefits of coconut oil with the gentle exfoliating enzymes
                found in papaya. This luxurious treatment is perfect for dry or
                dehydrated skin that needs both nourishment and renewal.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-sage-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Deep Hydration
                    </h3>
                    <p className="text-gray-700">
                      Coconut extract provides intense moisture and nourishment
                      for dry skin
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-sage-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Gentle Exfoliation
                    </h3>
                    <p className="text-gray-700">
                      Papaya enzymes naturally dissolve dead skin cells without
                      irritation
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-sage-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Tropical Aromatherapy
                    </h3>
                    <p className="text-gray-700">
                      Enjoy the relaxing tropical scents that transport you to
                      paradise
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/coconut-papaya-enzyme-peel.jpg"
                alt="Coconut-Papaya Enzyme Peel Benefits"
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
              Discover the nourishing effects of our tropical Coconut-Papaya
              Enzyme Peel
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-sage-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Intense Hydration
                </h3>
                <p className="text-gray-700">
                  Coconut's natural moisturizing properties deeply hydrate and
                  nourish dry, thirsty skin.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-sage-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Smooth Texture
                </h3>
                <p className="text-gray-700">
                  Papaya enzymes gently remove rough patches, leaving skin silky
                  smooth and refined.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-sage-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Relaxing Experience
                </h3>
                <p className="text-gray-700">
                  Tropical aromas create a spa-like experience that relaxes both
                  mind and body.
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
        <CoconutPapayaEnzymePeelFAQ />
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-sage-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
            Ready for a Tropical Skin Escape?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book your Coconut-Papaya Enzyme Peel treatment today and experience
            deep hydration with tropical luxury.
          </p>
          <div className="flex justify-center">
            <Button
              onClick={handleGetInTouch}
              className="bg-white text-sage-600 hover:bg-gray-100 px-4 py-1.5 text-base shadow-md backdrop-blur-sm"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
