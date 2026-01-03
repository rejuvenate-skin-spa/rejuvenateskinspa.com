"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, Shield, Star, Leaf, Sparkles, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import EnzymePeelFacialHero from "@/components/enzyme-peel-facial-hero";
import EnzymePeelFacialFAQ from "@/components/enzyme-peel-facial-faq";
import PhoneCtaButton from "@/components/phone-cta-button";

export default function EnzymePeelFacialPageClient() {
  const enzymePeels = [
    {
      name: "Pumpkin Orange Peel",
      features: ["Strongest 15% formula", "Deep exfoliation", "Clients may peel", "Anti-aging benefits"],
      price: "$120",
      intensity: "5",
      intensityColor: "bg-red-600",
      href: "/enzyme-peel-facial/pumpkin-orange-enzyme-peel",
    },
    {
      name: "Pomegranate Peel",
      features: ["Powerful antioxidants", "Brightening effect", "Anti-aging", "Packed with a punch"],
      price: "$120",
      intensity: "4-5",
      intensityColor: "bg-orange-600",
      href: "/enzyme-peel-facial/pomegranate-enzyme-peel",
    },
    {
      name: "Blueberry Peel",
      features: ["Glycolic & salicylic acid", "Antioxidant-rich", "Improves clarity", "Refines pores"],
      price: "$120",
      intensity: "3-4",
      intensityColor: "bg-yellow-600",
      href: "/enzyme-peel-facial/blueberry-enzyme-peel",
    },
    {
      name: "Cherry Peel",
      features: ["Brightening formula", "Deep hydration", "Even complexion", "Gentle exfoliation"],
      price: "$120",
      intensity: "3",
      intensityColor: "bg-yellow-500",
      href: "/enzyme-peel-facial/cherry-enzyme-peel",
    },
    {
      name: "Lemon Zest Peel",
      features: ["Zesty brightening", "Refreshes dull skin", "Vitamin C boost", "Natural glow"],
      price: "$120",
      intensity: "2-3",
      intensityColor: "bg-green-500",
      href: "/enzyme-peel-facial/lemon-enzyme-peel",
    },
    {
      name: "Coconut Papaya Peel",
      features: ["Mild & nourishing", "All skin types", "Sensitive skin safe", "Gentle hydration"],
      price: "$120",
      intensity: "0-2",
      intensityColor: "bg-green-400",
      href: "/enzyme-peel-facial/coconut-papaya-enzyme-peel",
    },
    {
      name: "Raspberry Peach Peel",
      features: ["Ultra-gentle formula", "Sensitive skin safe", "Soothing treatment", "Light exfoliation"],
      price: "$120",
      intensity: "0-2",
      intensityColor: "bg-green-400",
      href: "/enzyme-peel-facial/raspberry-peach-enzyme-peel",
    },
    {
      name: "Passion Fruit Peel",
      features: ["Warming sensation", "High heat factor", "Deep penetration", "Unique experience"],
      price: "$120",
      intensity: "HEAT",
      intensityColor: "bg-blue-500",
      href: "/enzyme-peel-facial/passion-fruit-enzyme-peel",
    },
  ];

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

      {/* Enzyme Peel Treatment Options */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Enzyme Peel Treatment Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect enzyme peel for your skin type and goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {enzymePeels.map((peel, index) => (
              <Card
                key={index}
                className="bg-white hover:shadow-lg transition-shadow duration-300 h-full"
              >
                <CardContent className="p-5 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`${peel.intensityColor} text-white px-2 py-1 rounded text-xs font-bold`}>
                      {peel.intensity}
                    </span>
                    <span className="text-lg font-bold text-sage-600">
                      {peel.price}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-3">
                    {peel.name}
                  </h3>
                  <ul className="space-y-1.5 mb-4 flex-grow">
                    {peel.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 text-xs text-gray-600">
                        <CheckCircle className="h-3 w-3 text-sage-600 flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-sage-600 text-sage-600 hover:bg-sage-50"
                  >
                    <Link href={peel.href}>
                      Learn More
                    </Link>
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
          <PhoneCtaButton className="bg-white text-sage-600 hover:bg-gray-100" />
        </div>
      </section>
    </div>
  );
}

