"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, Shield, Star, Leaf, Sparkles } from "lucide-react";
import Image from "next/image";
import EnzymePeelFacialHero from "@/components/enzyme-peel-facial-hero";
import EnzymePeelFacialFAQ from "@/components/enzyme-peel-facial-faq";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function EnzymePeelFacialPageClient() {
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

  const handleGetInTouch = () => {
    if (isMobile) {
      const now = new Date();
      const hour = now.getHours();
      const day = now.getDay();

      // Business hours: Mon-Fri 9AM-6PM, Sat 9AM-4PM, closed Sunday
      const isBusinessHours =
        (day >= 1 && day <= 5 && hour >= 9 && hour < 18) || // Mon-Fri 9AM-6PM
        (day === 6 && hour >= 9 && hour < 16); // Sat 9AM-4PM

      if (isBusinessHours) {
        window.location.href = "tel:+14802818888";
      } else {
        router.push("/about-us/contact-us");
      }
    } else {
      router.push("/about-us/contact-us");
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <EnzymePeelFacialHero />

      {/* Treatment Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            <div className="relative h-full">
              <div className="bg-sage-50 p-6 rounded-lg border border-sage-200 h-full flex flex-col">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  ENZYME INTENSITY CHART
                </h3>
                <p className="text-sm text-gray-600 mb-4 text-center">
                  Tingle and tightening strength. 5 = STRONGEST
                </p>
                <div className="space-y-3 flex-1">
                  <div className="flex items-center justify-between p-2 bg-white rounded border">
                    <div>
                      <span className="font-medium text-gray-900">
                        1. 15% Pumpkin-Orange
                      </span>
                      <span className="text-sm text-gray-600 block">
                        Strongest! Clients may peel
                      </span>
                    </div>
                    <span className="bg-red-600 text-white px-2 py-1 rounded text-sm font-bold">
                      (5)
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-white rounded border">
                    <div>
                      <span className="font-medium text-gray-900">
                        2. Pomegranate
                      </span>
                      <span className="text-sm text-gray-600 block">
                        Packed with a punch!
                      </span>
                    </div>
                    <span className="bg-orange-600 text-white px-2 py-1 rounded text-sm font-bold">
                      (4-5)
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-white rounded border">
                    <div>
                      <span className="font-medium text-gray-900">
                        3. Blueberry
                      </span>
                      <span className="text-sm text-gray-600 block">
                        Brightening & Active!
                      </span>
                    </div>
                    <span className="bg-yellow-600 text-white px-2 py-1 rounded text-sm font-bold">
                      (3-4)
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-white rounded border">
                    <div>
                      <span className="font-medium text-gray-900">
                        4. Cherry
                      </span>
                      <span className="text-sm text-gray-600 block">
                        Brightening & Hydrating
                      </span>
                    </div>
                    <span className="bg-yellow-500 text-white px-2 py-1 rounded text-sm font-bold">
                      (3)
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-white rounded border">
                    <div>
                      <span className="font-medium text-gray-900">
                        5. Lemon Zest
                      </span>
                      <span className="text-sm text-gray-600 block">
                        Brightening & Zesty
                      </span>
                    </div>
                    <span className="bg-green-500 text-white px-2 py-1 rounded text-sm font-bold">
                      (2-3)
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-white rounded border">
                    <div>
                      <span className="font-medium text-gray-900">
                        6. Coconut Papaya
                      </span>
                      <span className="text-sm text-gray-600 block">
                        Mild safe for all skins
                      </span>
                    </div>
                    <span className="bg-green-400 text-white px-2 py-1 rounded text-sm font-bold">
                      (0-2)
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-white rounded border">
                    <div>
                      <span className="font-medium text-gray-900">
                        7. Raspberry Peach
                      </span>
                      <span className="text-sm text-gray-600 block">
                        Mild safe for all skins
                      </span>
                    </div>
                    <span className="bg-green-400 text-white px-2 py-1 rounded text-sm font-bold">
                      (0-2)
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-white rounded border">
                    <div>
                      <span className="font-medium text-gray-900">
                        8. Passionfruit
                      </span>
                      <span className="text-sm text-gray-600 block">
                        Little to no tingle BUT HIGH SKIN HEAT FACTOR
                      </span>
                    </div>
                    <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm font-bold">
                      HEAT
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center h-full">
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-6">
                Natural Skin Renewal & Rejuvenation
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Harness the power of our 100% natural Fruit Enzyme Facial
                  Peel, and experience ultimate skin- renewing treatment.
                </p>
                <p>
                  The professional enzyme facial gently will exfoliate your skin
                  using fruit-based enzymes to dissolve dull, dry and damage
                  skin cells and reveal a brighter, smoother, and more radiant
                  complexion. Packed with powerhouse antioxidants and developed
                  with pharmaceutical-grade formulations, our natural enzyme
                  peel targets fine lines, uneven texture, sun damage, and
                  clogged pores, while stimulating collagen renewal for visibly
                  youthful skin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Features */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Treatment Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the gentle yet powerful effects of natural enzyme
              exfoliation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: "100% Natural",
                description:
                  "Made from pure fruit enzymes with no harsh chemicals or synthetic ingredients.",
              },
              {
                icon: Shield,
                title: "Gentle on Skin",
                description:
                  "Perfect for sensitive skin types that cannot tolerate traditional chemical peels.",
              },
              {
                icon: Sparkles,
                title: "Immediate Glow",
                description:
                  "See instant results with brighter, more radiant skin after just one treatment.",
              },
              {
                icon: Clock,
                title: "No Downtime",
                description:
                  "Return to your daily activities immediately with no peeling or recovery time.",
              },
              {
                icon: Star,
                title: "Anti-Aging",
                description:
                  "Stimulates cell renewal and collagen production for younger-looking skin.",
              },
              {
                icon: CheckCircle,
                title: "All Skin Types",
                description:
                  "Safe and effective for all skin types, including acne-prone and mature skin.",
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

      {/* Treatment Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              What to Expect
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your enzyme facial peel experience from start to finish.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description:
                  "Skin analysis and treatment customization based on your specific needs.",
              },
              {
                step: "02",
                title: "Cleansing",
                description:
                  "Deep cleansing to prepare your skin for optimal enzyme penetration.",
              },
              {
                step: "03",
                title: "Enzyme Application",
                description:
                  "Gentle application of our custom enzyme blend for 15-20 minutes.",
              },
              {
                step: "04",
                title: "Hydration",
                description:
                  "Nourishing mask and moisturizer to seal in the benefits.",
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

      {/* Pricing & Packages */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Treatment Packages
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Single Treatment",
                price: "$120",
                duration: "60 minutes",
                features: [
                  "Skin consultation",
                  "Enzyme facial peel",
                  "Hydrating mask",
                  "Post-treatment skincare",
                ],
              },
              {
                title: "Monthly Package",
                price: "$320",
                duration: "3 treatments",
                features: [
                  "3 enzyme peels",
                  "15% savings",
                  "Customized treatment plan",
                  "Take-home skincare kit",
                ],
                popular: true,
              },
              {
                title: "Seasonal Package",
                price: "$600",
                duration: "6 treatments",
                features: [
                  "6 enzyme peels",
                  "25% savings",
                  "Priority booking",
                  "Complimentary add-ons",
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
                      Most Popular
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
      <div id="faq-section">
        <EnzymePeelFacialFAQ />
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-sage-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-4">
            Ready for Radiant, Glowing Skin?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Experience the gentle power of enzyme peels and reveal your skin's
            natural glow.
          </p>
          <Button
            size="lg"
            className="bg-white text-sage-600 hover:bg-gray-100 px-6 py-2"
            onClick={handleGetInTouch}
          >
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
}

