"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Star, Users, Clock, Droplets, Heart } from "lucide-react";
import Image from "next/image";
import RaspberryPeachEnzymePeelFAQ from "@/components/raspberry-peach-enzyme-peel-faq";
import RaspberryPeachEnzymePeelHero from "@/components/raspberry-peach-enzyme-peel-hero";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const RaspberryPeachEnzymePeelClientPage = () => {
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
    return day >= 1 && day <= 6 && hour >= 9 && hour <= 18;
  };

  const handleGetInTouch = () => {
    if (isMobile && isBusinessHours()) {
      window.location.href = "tel:+14801234567";
    } else {
      router.push("/about-us/contact-us");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <RaspberryPeachEnzymePeelHero />

      {/* Treatment Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Gentle Silky Hydrating Treatment
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Indulge in our Raspberry-Peach Enzyme Peel that delivers the
                perfect balance of gentle exfoliation and deep hydration. This
                luxurious enzyme facial blends the antioxidant-rich,
                anti-inflammatory properties of raspberry seed enzymes with the
                soothing moisture of peach extract, revealing a complexion that
                feels refreshed, supple, and radiant.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Ideal for all skin types, this delicate yet highly effective
                peel helps calm redness, reduce irritation, and soften dry or
                flaky skin, leaving the complexion visibly smoother, balanced,
                and radiantly refreshed. Experience gentle skin renewal, maximum
                hydration, and soothing comfort in one luxurious treatment.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-sage-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Gentle Raspberry Exfoliation
                    </h3>
                    <p className="text-gray-700">
                      Natural raspberry enzymes provide the gentlest form of
                      skin renewal
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-sage-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Peach Hydration
                    </h3>
                    <p className="text-gray-700">
                      Rich peach extract deeply moisturizes and softens skin
                      texture
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-sage-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      All Skin Types
                    </h3>
                    <p className="text-gray-700">
                      Perfect for sensitive, dry, or mature skin needing gentle
                      care
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/raspberry-peach-enzyme-peel-benefits.jpg"
                alt="Raspberry-Peach Enzyme Peel Benefits"
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
              Experience the gentle, hydrating effects of our Raspberry-Peach
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
                  Silky Softness
                </h3>
                <p className="text-gray-700">
                  Peach extract leaves skin feeling incredibly soft and smooth
                  to the touch.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Droplets className="h-8 w-8 text-sage-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Deep Hydration
                </h3>
                <p className="text-gray-700">
                  Natural fruit moisture penetrates deeply for long-lasting skin
                  hydration.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-sage-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Gentle Care
                </h3>
                <p className="text-gray-700">
                  Perfect for sensitive skin types that need nurturing, gentle
                  treatment.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-sage-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Universal Appeal
                </h3>
                <p className="text-gray-700">
                  Suitable for all ages and skin types seeking gentle renewal.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-sage-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Quick Recovery
                </h3>
                <p className="text-gray-700">
                  Minimal downtime with immediate hydration and comfort.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-sage-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Natural Ingredients
                </h3>
                <p className="text-gray-700">
                  Pure fruit enzymes and extracts for natural skin enhancement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Treatment Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Affordable luxury for your skin care needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Single Treatment
                </h3>
                <div className="text-4xl font-bold text-sage-600 mb-4">$89</div>
                <p className="text-gray-700 mb-6">
                  Perfect for trying our gentle raspberry-peach treatment
                </p>
                <Button className="w-full bg-sage-600 hover:bg-sage-700">
                  Book Now
                </Button>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-sage-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Series of 3
                </h3>
                <div className="text-4xl font-bold text-sage-600 mb-2">
                  $240
                </div>
                <div className="text-sm text-gray-500 mb-4">Save $27</div>
                <p className="text-gray-700 mb-6">
                  Optimal results with our recommended treatment series
                </p>
                <Button className="w-full bg-sage-600 hover:bg-sage-700">
                  Book Series
                </Button>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Series of 6
                </h3>
                <div className="text-4xl font-bold text-sage-600 mb-2">
                  $450
                </div>
                <div className="text-sm text-gray-500 mb-4">Save $84</div>
                <p className="text-gray-700 mb-6">
                  Maximum value for long-term skin health
                </p>
                <Button className="w-full bg-sage-600 hover:bg-sage-700">
                  Book Series
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What to Expect
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your gentle raspberry-peach enzyme peel experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-sage-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Consultation
              </h3>
              <p className="text-gray-700">
                We assess your skin type and discuss your hydration goals.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-sage-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Preparation
              </h3>
              <p className="text-gray-700">
                Gentle cleansing prepares your skin for the enzyme treatment.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-sage-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Application
              </h3>
              <p className="text-gray-700">
                Raspberry-peach enzyme mask is applied for gentle exfoliation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-sage-600">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Hydration
              </h3>
              <p className="text-gray-700">
                Moisturizing treatment seals in hydration and softness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div id="faq-section">
        <RaspberryPeachEnzymePeelFAQ />
      </div>

      {/* Related Treatments */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Other Enzyme Peels
            </h2>
            <p className="text-xl text-gray-600">
              Explore our complete collection of natural enzyme treatments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Cherry Enzyme Peel
                </h3>
                <p className="text-gray-700 mb-4">
                  Antioxidant-rich treatment for brightening and anti-aging
                  benefits.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-sage-600 text-sage-600 hover:bg-sage-600 hover:text-white bg-transparent"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Blueberry Enzyme Peel
                </h3>
                <p className="text-gray-700 mb-4">
                  Vitamin-rich treatment for sensitive skin and gentle renewal.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-sage-600 text-sage-600 hover:bg-sage-600 hover:text-white bg-transparent"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Pumpkin Orange Peel
                </h3>
                <p className="text-gray-700 mb-4">
                  Seasonal favorite for deep exfoliation and skin renewal.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-sage-600 text-sage-600 hover:bg-sage-600 hover:text-white bg-transparent"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sage-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for Gentle, Hydrating Skin Care?
          </h2>
          <p className="text-xl text-sage-100 mb-8 max-w-2xl mx-auto">
            Experience the nurturing benefits of our Raspberry-Peach Enzyme
            Peel. Book your appointment today.
          </p>
          <div className="flex justify-center">
            <Button
              onClick={handleGetInTouch}
              className="bg-white text-sage-600 hover:bg-gray-100 px-4 py-1.5 text-base"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RaspberryPeachEnzymePeelClientPage;
