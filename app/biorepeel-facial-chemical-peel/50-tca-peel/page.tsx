"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  Clock,
  Shield,
  Star,
  Zap,
  Target,
  Award,
} from "lucide-react";
import Image from "next/image";
import BioRePeel50TCABodyPeelFAQ from "@/components/50-tca-peel-faq";
import FiftyTCAPeelHero from "@/components/50-tca-peel-hero";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function BioRePeel50TCABodyPage() {
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
    const hour = now.getHours();
    const day = now.getDay();
    return day >= 1 && day <= 5 && hour >= 9 && hour < 17;
  };

  const handleGetInTouch = () => {
    if (isMobile && isBusinessHours()) {
      window.location.href = "tel:+14802818888";
    } else {
      router.push("/about-us/contact-us");
    }
  };

  return (
    <div className="min-h-screen">
      <FiftyTCAPeelHero />

      {/* Treatment Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-6">
                Intensive Body Skin Rejuvenation
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  BioRePeel 50 TCA is specifically formulated for body
                  treatments, featuring a higher concentration of 50%
                  Trichloroacetic Acid combined with amino acids and vitamins.
                  This powerful formula is designed to address more stubborn
                  skin concerns on the body.
                </p>
                <p>
                  The thicker skin on the body can handle this higher
                  concentration, making it ideal for treating areas like the
                  back, chest, arms, and legs where traditional facial
                  treatments may not be strong enough to achieve desired
                  results.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500&text=50+TCA+Body+Formula"
                alt="BioRePeel 50 TCA body formula"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Areas */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Treatment Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              BioRePeel 50 TCA can effectively treat various body areas for
              comprehensive skin improvement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                area: "Back & Shoulders",
                description:
                  "Treat back acne, scarring, and rough texture for smoother skin.",
                duration: "60 minutes",
              },
              {
                area: "Chest & Décolletage",
                description:
                  "Address sun damage, age spots, and fine lines in delicate areas.",
                duration: "45 minutes",
              },
              {
                area: "Arms & Hands",
                description:
                  "Improve skin texture and reduce age spots on arms and hands.",
                duration: "45 minutes",
              },
              {
                area: "Legs",
                description:
                  "Smooth rough skin and improve overall texture on legs.",
                duration: "75 minutes",
              },
            ].map((area, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {area.area}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {area.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="text-sm text-gray-500">{area.duration}</div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-sage-300 text-sage-700 hover:bg-sage-50 bg-transparent"
                  >
                    Book Area
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Treatment Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience dramatic improvements in body skin texture and
              appearance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Treats Body Acne",
                description:
                  "Effectively addresses back acne, chest acne, and body breakouts.",
              },
              {
                icon: Star,
                title: "Reduces Scarring",
                description:
                  "Minimizes the appearance of acne scars and other body imperfections.",
              },
              {
                icon: Zap,
                title: "Improves Texture",
                description:
                  "Smooths rough, bumpy skin for a more refined appearance.",
              },
              {
                icon: Shield,
                title: "Fades Hyperpigmentation",
                description:
                  "Reduces dark spots, age spots, and uneven skin tone.",
              },
              {
                icon: Award,
                title: "Professional Strength",
                description:
                  "Higher concentration formula for more dramatic results.",
              },
              {
                icon: Clock,
                title: "Long-Lasting Results",
                description:
                  "Provides lasting improvement with proper maintenance.",
              },
            ].map((benefit, index) => (
              <div key={index} className="text-center">
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
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Treatment Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your BioRePeel 50 TCA body treatment experience.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                step: "01",
                title: "Assessment",
                description:
                  "Thorough evaluation of treatment areas and skin concerns.",
              },
              {
                step: "02",
                title: "Preparation",
                description: "Cleansing and preparation of treatment areas.",
              },
              {
                step: "03",
                title: "Application",
                description:
                  "Careful application of BioRePeel 50 formula to target areas.",
              },
              {
                step: "04",
                title: "Monitoring",
                description:
                  "Close monitoring during treatment for optimal results.",
              },
              {
                step: "05",
                title: "Aftercare",
                description:
                  "Post-treatment care and detailed recovery instructions.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-600 text-white rounded-full text-xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal Candidates */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-6">
                Is BioRePeel 50 Right for You?
              </h2>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Ideal for treating:
                </h3>
                <ul className="space-y-2">
                  {[
                    "Persistent body acne and breakouts",
                    "Acne scarring on back and chest",
                    "Rough, bumpy skin texture",
                    "Hyperpigmentation and dark spots",
                    "Sun damage on décolletage and arms",
                    "Keratosis pilaris (chicken skin)",
                  ].map((condition, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-sage-600 mr-3" />
                      {condition}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500&text=Body+Treatment+Results"
                alt="Body treatment results"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Recovery & Aftercare */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Recovery & Aftercare
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proper aftercare ensures optimal results and healing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                What to Expect
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-sage-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Days 1-3: Initial Healing
                    </h4>
                    <p className="text-gray-600">
                      Mild redness and sensitivity. Keep treated areas clean and
                      moisturized.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-sage-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Days 3-7: Peeling Phase
                    </h4>
                    <p className="text-gray-600">
                      Light peeling may occur. Avoid picking and use gentle
                      moisturizers.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-sage-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Days 7-14: Renewal
                    </h4>
                    <p className="text-gray-600">
                      New skin emerges smoother and more refined. Results become
                      visible.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500&text=Recovery+Timeline"
                alt="Recovery timeline"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div id="faq-section">
        <BioRePeel50TCABodyPeelFAQ />
      </div>

      {/* Pricing & Packages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Treatment Investment
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Single Area Treatment",
                price: "$250-$350",
                duration: "45-75 minutes",
                features: [
                  "BioRePeel 50 TCA treatment",
                  "Area-specific consultation",
                  "Post-treatment care",
                  "Detailed aftercare instructions",
                  "Follow-up check-in",
                ],
                popular: true,
              },
              {
                title: "Multiple Area Package",
                price: "$600-$800",
                duration: "2-3 areas",
                features: [
                  "Treat 2-3 body areas",
                  "15% package discount",
                  "Comprehensive consultation",
                  "Extended aftercare support",
                  "Priority rebooking",
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
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {pkg.title}
                  </h3>
                  <div className="text-4xl font-bold text-sage-600 mb-2">
                    {pkg.price}
                  </div>
                  <p className="text-gray-500 mb-6">{pkg.duration}</p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-gray-600 flex items-center justify-center"
                      >
                        <CheckCircle className="h-4 w-4 text-sage-600 mr-2 flex-shrink-0" />
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
                    Book Consultation
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sage-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-4">
            Transform Your Body Skin Today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Experience the powerful results of BioRePeel 50 TCA and achieve the
            smooth, clear body skin you deserve.
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
