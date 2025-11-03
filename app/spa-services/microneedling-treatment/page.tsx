"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, Shield, Star, Zap, Heart } from "lucide-react";
import Image from "next/image";
import MicroneedlingTreatmentFAQ from "@/components/microneedling-treatment-faq";
import MicroneedlingTreatmentHero from "@/components/microneedling-treatment-hero";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function MicroneedlingTreatmentPage() {
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
        window.location.href = "tel:+14804474505";
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
      <MicroneedlingTreatmentHero />

      {/* Treatment Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-6">
                Microneedling with 3 Advanced Options
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Experience three transformative approaches to skin
                  rejuvenation — each designed to stimulate collagen, elastin,
                  and cellular renewal while accommodating your unique skin
                  type, concerns, and downtime preference.
                </p>

                <div className="space-y-4 mt-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      1. Traditional Microneedling (Collagen Induction Therapy)
                    </h3>
                    <p className="text-gray-600">
                      Uses ultra-fine needles to create controlled
                      micro-channels, boosting collagen production and improving
                      texture, firmness, and tone.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      2. SQT Bio-Microneedling (Needle-Free Marine Spicules)
                    </h3>
                    <p className="text-gray-600">
                      A cutting-edge, needle-free microneedling treatment
                      powered by natural marine spicules that exfoliate, renew,
                      and stimulate the skin without downtime or trauma often
                      called the "spicule facial."
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      3. Plexr Plasma Pen Microneedling (Plasma Energy
                      Microneedling)
                    </h3>
                    <p className="text-gray-600">
                      Harnesses nano-ablative plasma energy from the Plexr
                      Plasma Pen to create invisible micro- channels on the
                      skin's surface, stimulating fibroblast activity, collagen
                      remodeling, and deeper product absorption for a luminous,
                      lifted complexion.
                    </p>
                  </div>
                </div>

                <p className="mt-6">
                  Whether you choose Traditional Microneedling (CIT), SQT
                  Bio-Microneedling, or Plexr Plasma Pen Microneedling, each
                  treatment is expertly tailored to your individual skin goals —
                  revealing smoother texture, firmer skin, and a radiant glow.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/microneedling-treatment-rejuvenate-skin-spa-queen-creek-az.jpg"
                alt="Collagen stimulation process"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Traditional Microneedling Detail Section */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
                Traditional Microneedling – Collagen Induction Therapy (CIT)
              </h2>
              <p className="text-xl text-sage-600 font-semibold italic">
                Stimulate. Restore. Renew.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Restore smoother texture and a brighter, more even complexion
                with Collagen Induction Therapy (CIT), also known as traditional
                microneedling.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                This advanced rejuvenation treatment uses ultra-fine needles to
                create controlled micro-channels that stimulate collagen and
                elastin production, softening the appearance of fine lines, acne
                scars, and enlarged pores.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                CIT enhances serum absorption, refines uneven texture, and
                promotes firmer, more youthful- looking skin, all with minimal
                downtime. Ideal for clients seeking visibly improved skin
                results without harsh invasive procedures. This treatment
                delivers progressive skin renewal and a naturally radiant glow
                over a series of 3 to 6 sessions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Treatment Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how microneedling can transform your skin naturally.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Collagen Boost",
                description:
                  "Stimulates natural collagen and elastin production for firmer, younger-looking skin.",
              },
              {
                icon: Star,
                title: "Reduces Fine Lines",
                description:
                  "Smooths fine lines and wrinkles by improving skin structure and elasticity.",
              },
              {
                icon: Shield,
                title: "Minimizes Pores",
                description:
                  "Tightens and reduces the appearance of enlarged pores for smoother skin texture.",
              },
              {
                icon: Heart,
                title: "Improves Scars",
                description:
                  "Effectively reduces the appearance of acne scars and other skin imperfections.",
              },
              {
                icon: Clock,
                title: "Minimal Downtime",
                description:
                  "Quick recovery with only mild redness for 24-48 hours after treatment.",
              },
              {
                icon: CheckCircle,
                title: "All Skin Types",
                description:
                  "Safe and effective for all skin types and colors with customizable depth.",
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

      {/* Treatment Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Treatment Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Microneedling can be performed just about anywhere on the body for
              comprehensive skin improvements. Here are just a few
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Body Areas
                </h3>
                <p className="text-gray-600 mb-6">
                  Face, Neck, Decolletage, hands, arms, legs buttocks, stomach
                </p>
                <Button
                  variant="outline"
                  className="w-full border-sage-300 text-sage-700 hover:bg-sage-50 bg-transparent"
                  onClick={() => {
                    const faqSection = document.getElementById("faq-section");
                    if (faqSection) {
                      faqSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Scarring & Lines
                </h3>
                <p className="text-gray-600 mb-6">
                  Acne scars, stretch marks, wrinkles, fine lines
                </p>
                <Button
                  variant="outline"
                  className="w-full border-sage-300 text-sage-700 hover:bg-sage-50 bg-transparent"
                  onClick={() => {
                    const faqSection = document.getElementById("faq-section");
                    if (faqSection) {
                      faqSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Pigmentation Issues
                </h3>
                <p className="text-gray-600 mb-6">
                  Uneven skin tone, hyperpigmentation, melasma, sunspots
                </p>
                <Button
                  variant="outline"
                  className="w-full border-sage-300 text-sage-700 hover:bg-sage-50 bg-transparent"
                  onClick={() => {
                    const faqSection = document.getElementById("faq-section");
                    if (faqSection) {
                      faqSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              What to Expect
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your microneedling treatment from consultation to recovery.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description:
                  "Skin assessment and treatment plan customization based on your concerns.",
              },
              {
                step: "02",
                title: "Preparation",
                description:
                  "Cleansing and application of topical numbing cream for comfort.",
              },
              {
                step: "03",
                title: "Microneedling",
                description:
                  "Precise treatment using professional-grade microneedling device.",
              },
              {
                step: "04",
                title: "Recovery Care",
                description:
                  "Soothing serum application and detailed aftercare instructions.",
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
                price: "$200",
                duration: "60-90 minutes",
                features: [
                  "Full facial microneedling",
                  "Numbing cream included",
                  "Post-treatment serum",
                  "Aftercare instructions",
                ],
              },
              {
                title: "Series of 3",
                price: "$540",
                duration: "3 treatments",
                features: [
                  "3 microneedling sessions",
                  "10% package savings",
                  "Customized treatment plan",
                  "Complimentary skincare consultation",
                ],
                popular: true,
              },
              {
                title: "Series of 6",
                price: "$950",
                duration: "6 treatments",
                features: [
                  "6 microneedling sessions",
                  "20% package savings",
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
      <div id="faq-section">
        <MicroneedlingTreatmentFAQ />
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-sage-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-4">
            Ready to Boost Your Natural Collagen?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Experience the transformative power of microneedling and reveal your
            skin's natural radiance.
          </p>
          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-white text-sage-600 hover:bg-gray-100 px-6 py-2"
              onClick={handleGetInTouch}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
