"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Clock,
  DollarSign,
  Star,
  CheckCircle,
  Users,
  Zap,
  Sparkles,
  Heart,
  Shield,
  Leaf,
} from "lucide-react";
import BioMicroneedlingTreatmentFAQ from "@/components/bio-microneedling-treatment-faq";
import BioMicroneedlingTreatmentHero from "@/components/bio-microneedling-treatment-hero";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function BioMicroneedlingClientPage() {
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
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
    <div className="min-h-screen bg-gradient-to-b from-sage-50 to-white">
      {/* Hero Section */}
      <BioMicroneedlingTreatmentHero />

      {/* What is SQT Bio Microneedling */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-sage-100 text-sage-800">
                Advanced Treatment
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-playfair">
                What SQT Bio-Microneedling
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                This revolutionary needle-free microneedling treatment uses
                millions of microscopic, marine- derived sponge spicules to
                naturally activate the skin's repair and renewal process. As
                these mineral-rich spicules are gently massaged into the skin,
                they create invisible micro-channels that enhance the absorption
                of potent serums, peptides, and nutrients deep within the dermal
                layers. This process awakens cellular activity, triggering a
                natural exfoliation and regeneration cycle that accelerates cell
                turnover and stimulates the production of fresh collagen and
                elastin. The result is skin that feels smoother, firmer,
                brighter, and more refined, all without needles or downtime. The
                natural yet powerful path to Collagen Renewal.
              </p>
            </div>
            <div className="relative">
              <img
                src="/images/bio-microneedling-treatment-rejuvenate-skin-spa-queen-creek-az.jpg"
                alt="SQT Bio Microneedling Treatment"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-sage-100 text-sage-800">
              Treatment Benefits
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-playfair">
              Why Choose SQT Bio Microneedling?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience natural spicule infusion technology for deep skin
              rejuvenation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-sage-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Non-invasive & Needle-Free
                </h3>
                <p className="text-gray-600">
                  No needles, bleeding, or downtime, just natural spicule
                  infusion that rejuvenates from within.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Leaf className="h-12 w-12 text-sage-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  100% Natural Ingredients
                </h3>
                <p className="text-gray-600">
                  Made from marine-derived sponge spicules and plant-based
                  actives, free from harsh chemicals or toxins.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Zap className="h-12 w-12 text-sage-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Enhanced Product Absorption
                </h3>
                <p className="text-gray-600">
                  Creates micro-channels that allow serums and nutrients to
                  penetrate up to 3x deeper.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Sparkles className="h-12 w-12 text-sage-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Stimulates Collagen & Elastin
                </h3>
                <p className="text-gray-600">
                  Triggers deep cellular renewal and fibroblast activation for
                  firmer, smoother, more youthful skin.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Heart className="h-12 w-12 text-sage-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Skin Repair & Renewal
                </h3>
                <p className="text-gray-600">
                  Reduces the appearance of fine lines, roughness, and uneven
                  pigmentation for a rejuvenated, refined, and luminous glow.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Star className="h-12 w-12 text-sage-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Clinically Proven Results
                </h3>
                <p className="text-gray-600">
                  Delivers visible improvement in clarity, firmness, and
                  radiance after just one treatment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Treatment Areas */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-sage-100 text-sage-800">
              Treatment Areas
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-playfair">
              What Can SQT Bio Microneedling Treat?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Bio microneedling effectively addresses a wide range of skin
              concerns
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-sage-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                Fine Lines & Wrinkles
              </h3>
              <p className="text-gray-600 text-sm">
                Reduce signs of aging around eyes, mouth, and forehead
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-sage-200">
              <h3 className="font-semibold text-gray-900 mb-2">Acne Scars</h3>
              <p className="text-gray-600 text-sm">
                Improve texture and appearance of acne scarring
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-sage-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                Hyperpigmentation
              </h3>
              <p className="text-gray-600 text-sm">
                Even out skin tone and reduce dark spots
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-sage-200">
              <h3 className="font-semibold text-gray-900 mb-2">Large Pores</h3>
              <p className="text-gray-600 text-sm">
                Minimize pore appearance for smoother skin
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-sage-200">
              <h3 className="font-semibold text-gray-900 mb-2">Skin Texture</h3>
              <p className="text-gray-600 text-sm">
                Improve overall skin smoothness and radiance
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-sage-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                Stretch Marks
              </h3>
              <p className="text-gray-600 text-sm">
                Reduce appearance of stretch marks on body
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-sage-100 text-sage-800">Pricing</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-playfair">
              Investment in Your Skin
            </h2>
            <p className="text-lg text-gray-600">
              Professional bio microneedling with organic serums
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Single Treatment
                </h3>
                <div className="text-4xl font-bold text-sage-600 mb-4">
                  $250
                </div>
                <p className="text-gray-600 mb-6">
                  Complete bio microneedling treatment with organic serums and
                  aftercare guidance.
                </p>
                <ul className="text-left space-y-2 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    <span>Skin consultation & analysis</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    <span>Bio microneedling treatment</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    <span>Organic bio-serum application</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    <span>Post-treatment care kit</span>
                  </li>
                </ul>
                <Button className="w-full bg-sage-600 hover:bg-sage-700">
                  Book Single Session
                </Button>
              </CardContent>
            </Card>

            <Card className="border-sage-200 hover:shadow-lg transition-shadow bg-sage-50">
              <CardContent className="p-8 text-center">
                <Badge className="mb-4 bg-sage-600 text-white">
                  Best Value
                </Badge>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  3-Treatment Package
                </h3>
                <div className="text-4xl font-bold text-sage-600 mb-4">
                  $650
                </div>
                <div className="text-sm text-gray-500 mb-4">
                  Save $100 • $216 per session
                </div>
                <p className="text-gray-600 mb-6">
                  Optimal results package with three treatments spaced 4-6 weeks
                  apart for maximum collagen stimulation.
                </p>
                <ul className="text-left space-y-2 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    <span>Everything in single treatment</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    <span>3 bio microneedling sessions</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    <span>Progress tracking & photos</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-2" />
                    <span>Customized serum selection</span>
                  </li>
                </ul>
                <Button className="w-full bg-sage-600 hover:bg-sage-700">
                  Book Package
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div id="faq-section">
        <BioMicroneedlingTreatmentFAQ />
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-sage-600 to-sage-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">
            Ready to Transform Your Skin?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Experience the power of bio microneedling with organic serums for
            naturally radiant skin
          </p>
          <div className="flex justify-center">
            <Button
              size="lg"
              onClick={handleGetInTouch}
              className="bg-white text-sage-700 hover:bg-gray-100 px-6 py-2 shadow-lg backdrop-blur-sm"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
