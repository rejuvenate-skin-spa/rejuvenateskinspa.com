"use client";

import NanoAblativeSkinResurfacingHero from "@/components/nano-ablative-skin-resurfacing-hero";
import NanoAblativeSkinResurfacingFAQ from "@/components/nano-ablative-skin-resurfacing-faq";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  Clock,
  Shield,
  Star,
  Zap,
  Heart,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function NanoAblativeClientPage() {
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
    const arizonaTime = new Date(
      now.toLocaleString("en-US", { timeZone: "America/Phoenix" })
    );
    const day = arizonaTime.getDay();
    const hour = arizonaTime.getHours();

    return day >= 1 && day <= 6 && hour >= 8 && hour < 18;
  };

  const handlePrimaryClick = () => {
    if (isMobile && isBusinessHours()) {
      window.location.href = "tel:480-225-9549";
    } else {
      router.push("/about-us/contact-us");
    }
  };

  return (
    <div className="min-h-screen">
      <NanoAblativeSkinResurfacingHero />

      {/* Treatment Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-6">
                Next-generation in non-invasive plasma treatments with Zero
                downtime
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Considered the most gentle form of plasma skin resurfacing,
                  the Shower treatment works by creating invisible plasma
                  micro-channels on the skin's surface. These micro- pathways
                  stimulate natural collagen production, enhancing the skin's
                  ability to absorb infused serums at a deeper level—maximizing
                  hydration, radiance, cellular renewal, and overall skin
                  rejuvenation, from intense moisture replenishment to
                  brightening and anti- aging actives.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              {/* Image */}
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=400&width=500&text=Nano+Plasma+Technology"
                  alt="Nano plasma technology process"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </div>

              {/* How It Works Box */}
              <div className="bg-sage-50 p-6 rounded-lg border border-sage-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  The Plexr Plasma Shower – How It Works
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-sage-600 text-white rounded-full text-sm font-semibold">
                      1
                    </span>
                    <div>
                      <span className="font-medium text-gray-900">
                        Nano-Ablative Plasma Energy
                      </span>
                      <span className="text-gray-600">
                        {" "}
                        – The device uses a delicate plasma arc with a special
                        triangle tip to create microscopic, invisible channels
                        on the skin's surface.
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-sage-600 text-white rounded-full text-sm font-semibold">
                      2
                    </span>
                    <div>
                      <span className="font-medium text-gray-900">
                        Cellular Activation
                      </span>
                      <span className="text-gray-600">
                        {" "}
                        – These micro-pathways awaken fibroblast activity,
                        stimulating natural collagen and elastin production for
                        firmer, smoother skin.
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-sage-600 text-white rounded-full text-sm font-semibold">
                      3
                    </span>
                    <div>
                      <span className="font-medium text-gray-900">
                        Serum Infusion
                      </span>
                      <span className="text-gray-600">
                        {" "}
                        – Customized serums are then applied, penetrating deeply
                        through the channels for maximum absorption and
                        effectiveness.
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-sage-600 text-white rounded-full text-sm font-semibold">
                      4
                    </span>
                    <div>
                      <span className="font-medium text-gray-900">Redness</span>
                      <span className="text-gray-600">
                        {" "}
                        – possible redness, but is fades quickly
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits Box */}
              <div className="bg-white p-6 rounded-lg border border-sage-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Benefits of the Plexr Plasma Shower
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="text-sage-600">•</span>
                    <div>
                      <span className="font-medium text-gray-900">
                        Gentle Rejuvenation
                      </span>
                      <span className="text-gray-600">
                        {" "}
                        – Refreshes and revitalizes skin with zero downtime.
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-sage-600">•</span>
                    <div>
                      <span className="font-medium text-gray-900">
                        Collagen & Elastin Boost
                      </span>
                      <span className="text-gray-600">
                        {" "}
                        – Stimulates natural production for firmer, smoother
                        skin.
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-sage-600">•</span>
                    <div>
                      <span className="font-medium text-gray-900">
                        Enhanced Serum Absorption
                      </span>
                      <span className="text-gray-600">
                        {" "}
                        – Creates micro-channels that allow targeted serums to
                        penetrate more deeply for maximum results.
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-sage-600">•</span>
                    <div>
                      <span className="font-medium text-gray-900">
                        Preserves the Skin Barrier
                      </span>
                      <span className="text-gray-600">
                        {" "}
                        – Improves skin health without damaging its natural
                        protection.
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-sage-600">•</span>
                    <div>
                      <span className="font-medium text-gray-900">
                        Radiant Complexion
                      </span>
                      <span className="text-gray-600">
                        {" "}
                        – Brightens, tone, refines texture, and restores
                        youthful glow.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Treatment Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nano-ablative plasma can be used on various areas of the face and
              body for comprehensive skin improvement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                area: "Full facial or Neck",
                description:
                  "Rejuvenation for improved subtle lift, texture and tone,",
                singlePrice: "$250 SINGLE",
                packagePrice: "$675.00 PACKAGE OF 3",
                duration: "30-45 minutes",
              },
              {
                area: "Face AND Neck",
                description:
                  "Tighten, plumped, and smoothened for a more youthful and radiant glow.",
                singlePrice: "$350 SINGLE",
                packagePrice: "$800 PACKAGE OF 3",
                duration: "45-60 minutes",
              },
              {
                area: "Décolletage AND Neck",
                description:
                  "Improve chest area skin texture and reduce signs of sun damage and craping,",
                singlePrice: "$350 SINGLE",
                packagePrice: "$800 PACKAGE OF 3",
                duration: "45-60 minutes",
              },
              {
                area: "Face, Neck, Décolletage",
                description:
                  "Improve your overall appearance with a tighter, brighter, firmer, glowing, and youthful radiant skin.",
                singlePrice: "$450.00 SINGLE",
                packagePrice: "$1000.00 PACKAGE OF 3",
                duration: "60-90 minutes",
              },
            ].map((area, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300 rounded-lg"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {area.area}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {area.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="text-lg font-bold text-sage-600">
                      {area.singlePrice}
                    </div>
                    <div className="text-lg font-bold text-sage-600">
                      {area.packagePrice}
                    </div>
                    <div className="text-sm text-gray-500">{area.duration}</div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-sage-300 text-sage-700 hover:bg-sage-50 rounded-md bg-transparent"
                  >
                    Book Area
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Treatment Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your nano-ablative plasma treatment experience from consultation
              to results.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description:
                  "Comprehensive skin analysis and treatment planning.",
              },
              {
                step: "02",
                title: "Preparation",
                description:
                  "Gentle cleansing and numbing cream application if needed.",
              },
              {
                step: "03",
                title: "Treatment",
                description:
                  "Precise nano-ablative plasma application to targeted areas.",
              },
              {
                step: "04",
                title: "Aftercare",
                description:
                  "Soothing application and post-treatment instructions.",
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
      <section className="py-16 bg-white">
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
                price: "$250",
                duration: "45 minutes",
                features: [
                  "Nano-ablative plasma treatment",
                  "Skin consultation",
                  "Post-treatment care",
                  "Aftercare instructions",
                ],
              },
              {
                title: "Series of 3",
                price: "$675",
                duration: "3 treatments",
                features: [
                  "3 nano-ablative sessions",
                  "10% package savings",
                  "Customized treatment plan",
                  "Complimentary skincare consultation",
                ],
                popular: true,
              },
              {
                title: "Series of 6",
                price: "$1,200",
                duration: "6 treatments",
                features: [
                  "6 nano-ablative sessions",
                  "20% package savings",
                  "Priority booking",
                  "Free maintenance treatment",
                ],
              },
            ].map((pkg, index) => (
              <Card
                key={index}
                className={`relative rounded-lg ${
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
                    className={`w-full rounded-md ${
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

      <NanoAblativeSkinResurfacingFAQ />

      {/* CTA Section */}
      <section className="py-16 bg-sage-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-4">
            Ready for Ultra-Gentle Skin Renewal?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Experience the benefits of nano-ablative plasma technology with zero
            downtime and immediate results.
          </p>
          <Button
            onClick={handlePrimaryClick}
            size="lg"
            className="bg-white text-sage-600 hover:bg-gray-100 px-6 py-2 rounded-md"
          >
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
}
