"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlexrPlasmaSkinTighteningHero } from "@/components/plexr-plasma-skin-tightening-hero";
import { PlexrPlasmaFAQ } from "@/components/plexr-plasma-skin-tightening-faq";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const treatmentOptions = [
  {
    title: "Nano-Ablative Skin Resurfacing",
    description:
      "Gentle surface treatment with no downtime for subtle skin improvement and glow.",
    price: "Starting at $300",
    duration: "30-45 minutes",
    downtime: "None",
    href: "/plexr-plasma-skin-tightening/nano-ablative-skin-resurfacing",
    benefits: [
      "Improved skin texture",
      "Enhanced skin glow",
      "Minimal discomfort",
      "No recovery time needed",
    ],
  },
  {
    title: "Semi-Ablative Skin Resurfacing",
    description:
      "Moderate depth treatment for noticeable improvement in skin texture and tone.",
    price: "Starting at $800",
    duration: "45-60 minutes",
    downtime: "2-5 days",
    href: "/plexr-plasma-skin-tightening/semi-ablative-skin-resurfacing",
    benefits: [
      "Significant texture improvement",
      "Reduced fine lines",
      "Even skin tone",
      "Collagen stimulation",
    ],
  },
  {
    title: "Ablative Skin Resurfacing",
    description:
      "Deep treatment for dramatic skin tightening and wrinkle reduction results.",
    price: "Starting at $1,500",
    duration: "60-90 minutes",
    downtime: "7-10 days",
    href: "/plexr-plasma-skin-tightening/ablative-skin-resurfacing",
    benefits: [
      "Dramatic skin tightening",
      "Deep wrinkle reduction",
      "Significant rejuvenation",
      "Long-lasting results",
    ],
  },
];

const removalServices = [
  {
    title: "Mole Removal Treatment",
    description:
      "Safe, precise removal of unwanted moles using advanced plasma technology.",
    price: "Starting at $200",
    href: "/plexr-plasma-skin-tightening/mole-removal-treatment",
  },
  {
    title: "Skin Tag Removal Treatment",
    description:
      "Quick, effective removal of skin tags with minimal discomfort.",
    price: "Starting at $150",
    href: "/plexr-plasma-skin-tightening/skin-tag-removal-treatment",
  },
  {
    title: "Sun Spot Removal Treatment",
    description:
      "Target and eliminate sun spots for clearer, more even skin tone.",
    price: "Starting at $250",
    href: "/plexr-plasma-skin-tightening/sun-spot-removal-treatment",
  },
  {
    title: "Wart Removal Treatment",
    description: "Effective wart removal using precise plasma technology.",
    price: "Starting at $200",
    href: "/plexr-plasma-skin-tightening/wart-removal-treatment",
  },
];

export default function PlexrPlasmaPageClient() {
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

  const handleGetInTouch = () => {
    if (isMobile && isBusinessHours()) {
      window.location.href = "tel:+14802259549";
    } else {
      router.push("/about-us/contact-us");
    }
  };

  return (
    <div className="min-h-screen">
      <PlexrPlasmaSkinTighteningHero />

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-6">
              Revolutionary Plexr Plasma Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Jump aboard and experience the future of skin rejuvenation powered
              by Plexr's cutting-edge advanced plasma technology. This
              revolutionary treatment delivers remarkable results by tightening,
              firming, and lifting the skin, all without surgery, needles,
              general anesthesia, or long recovery times.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
                What Makes Plexr Plasma Different?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-sage-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="text-gray-700">
                    <strong>True Plasma Technology</strong>
                    <ul className="mt-2 ml-4 space-y-1 text-sm">
                      <li>
                        • Many "plasma pens" are really just low-grade
                        electrical arc tools.
                      </li>
                      <li>
                        • Plexr uses real plasma energy, ionizing the air
                        between the device and your skin for safe, controlled
                        results.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-sage-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="text-gray-700">
                    <strong>Medical-Grade & Globally Recognized</strong>
                    <ul className="mt-2 ml-4 space-y-1 text-sm">
                      <li>
                        • CE-certified and used by dermatologists, doctors, and
                        advanced aestheticians.
                      </li>
                      <li>
                        • Backed by years of research and clinical studies.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-sage-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="text-gray-700">
                    <strong>Precision & Safety</strong>
                    <ul className="mt-2 ml-4 space-y-1 text-sm">
                      <li>• Targets even the most delicate areas.</li>
                      <li>
                        • Advanced energy control means fewer side effects, more
                        predictable healing.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-sage-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="text-gray-700">
                    <strong>Superior Results</strong>
                    <ul className="mt-2 ml-4 space-y-1 text-sm">
                      <li>
                        • Produces natural collagen remodeling for long-lasting
                        tightening, lifting, and rejuvenation.
                      </li>
                      <li>
                        • Known as the "gold standard" in plasma skin
                        tightening.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-sage-50 p-8 rounded-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Treatment Areas
              </h4>
              <div className="grid grid-cols-2 gap-3 text-sm mb-6">
                <div className="space-y-2">
                  <p className="text-gray-700">• face</p>
                  <p className="text-gray-700">• neck</p>
                  <p className="text-gray-700">• arms</p>
                  <p className="text-gray-700">• breasts</p>
                  <p className="text-gray-700">• stomach</p>
                  <p className="text-gray-700">• buttocks</p>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-700">• Chest</p>
                  <p className="text-gray-700">• thighs</p>
                  <p className="text-gray-700">• knee</p>
                  <p className="text-gray-700">• hands</p>
                </div>
              </div>

              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Plasma Removal Services
              </h4>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="space-y-2">
                  <p className="text-gray-700">• Moles</p>
                  <p className="text-gray-700">• warts</p>
                  <p className="text-gray-700">• skin tags</p>
                  <p className="text-gray-700">• stretch marks</p>
                  <p className="text-gray-700">• tattoos</p>
                  <p className="text-gray-700">• pigmentation/sunspots</p>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-700">• melasma</p>
                  <p className="text-gray-700">• Keloids</p>
                  <p className="text-gray-700">• acne scars</p>
                  <p className="text-gray-700">• moles/ fibroids/cysts</p>
                  <p className="text-gray-700">• skin tags</p>
                  <p className="text-gray-700">• sunspot</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Options */}
      <section className="py-16 bg-sage-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Plexr Plasma Skin Treatment Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from three intensity levels to achieve your desired results
              with the appropriate recovery time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {treatmentOptions.map((treatment, index) => (
              <Card
                key={index}
                className="h-full hover:shadow-lg transition-shadow bg-white"
              >
                <CardContent className="p-6 h-full flex flex-col bg-white">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {treatment.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    {treatment.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-gray-700">
                        Duration:
                      </span>
                      <span className="text-sm text-gray-600">
                        {treatment.duration}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-gray-700">
                        Downtime:
                      </span>
                      <span className="text-sm text-gray-600">
                        {treatment.downtime}
                      </span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      Key Benefits:
                    </h4>
                    <ul className="space-y-1">
                      {treatment.benefits.map((benefit, benefitIndex) => (
                        <li
                          key={benefitIndex}
                          className="text-sm text-gray-600 flex items-center"
                        >
                          <div className="w-1.5 h-1.5 bg-sage-500 rounded-full mr-2 flex-shrink-0"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <Button
                      asChild
                      className="w-full bg-sage-600 hover:bg-sage-700"
                    >
                      <Link href="/about-us/contact-us">
                        Contact us for pricing
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Removal Services */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Plexr Removal Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Safely and effectively remove unwanted skin imperfections with
              precision plasma technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {removalServices.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow bg-white"
              >
                <CardContent className="p-6 text-center bg-white">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {service.description}
                  </p>
                  <Button
                    asChild
                    size="sm"
                    className="bg-sage-600 hover:bg-sage-700"
                  >
                    <Link href={service.href}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Real Results from Plexr Plasma
            </h2>
            <p className="text-xl text-gray-600">
              See the dramatic transformations achieved with our Plexr plasma
              treatments.
            </p>
          </div>
          <BeforeAfterSlider />
        </div>
      </section>

      {/* FAQ Section */}
      <PlexrPlasmaFAQ />

      {/* CTA Section */}
      <section className="py-16 bg-sage-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4">
            Ready to Transform Your Skin?
          </h2>
          <p className="text-xl text-sage-100 mb-8 max-w-2xl mx-auto">
            Enjoy a free over-the-phone consultation. Because every client's
            skin and goals are unique, pricing is fully customized based on your
            specific needs and the treatment area(s) involved. During your
            consultation, we'll discuss your concerns, treatment options, and
            create a tailored plan designed just for you. TREATMENT PACKAGES ARE
            ALSO AVAILABLE. Together, you and your provider will design a plan
            that's right for you and fits into your budget, call today.
          </p>
          <Button
            onClick={handleGetInTouch}
            className="bg-white text-sage-600 hover:bg-gray-100 px-6 py-2 text-base font-medium rounded-lg shadow-lg"
          >
            Call for Pricing
          </Button>
        </div>
      </section>
    </div>
  );
}
