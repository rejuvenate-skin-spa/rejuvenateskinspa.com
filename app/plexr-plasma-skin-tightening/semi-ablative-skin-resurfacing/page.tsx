"use client";

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
  AlertTriangle,
} from "lucide-react";
import Image from "next/image";
import SemiAblativeSkinResurfacingFAQ from "@/components/semi-ablative-skin-resurfacing-faq";
import SemiAblativeSkinResurfacingHero from "@/components/semi-ablative-skin-resurfacing-hero";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function SemiAblativeSkinResurfacingPage() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
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
      window.location.href = "tel:480-225-9549";
    } else {
      router.push("/about-us/contact-us");
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <SemiAblativeSkinResurfacingHero />

      {/* Treatment Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-6">
                Advanced Skin Transformation
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Discover the next level of plasma innovation with
                  Semi-Ablative Plexr Plasma, also known as Plexr CAT
                  Resurfacing. This breakthrough treatment delivers powerful,
                  visible, and proven results, while enhancing skin quality and
                  continued improvements.
                </p>
                <p>
                  The Cat Resurface technology is engineered to awakens
                  fibroblast activity, stimulates the production of new collagen
                  and elastin, and flawlessly resurface the skin. The results
                  are restored firmness, refined texture and tone, and radiant
                  rejuvenation, and all achieved without scapples or needles.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500&text=Advanced+Plasma+Technology"
                alt="Advanced plasma technology process"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
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
              Experience significant skin improvements with our advanced
              semi-ablative plasma technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: "Powerful Results, Less Downtime",
                description:
                  "Delivers deeper rejuvenation than gentle plasma treatments, while still being less invasive than fully ablative procedures.",
              },
              {
                icon: Zap,
                title: "Stimulates Collagen & Elastin",
                description:
                  "Activates fibroblast cells to boost natural collagen and elastin production, restoring firmness and elasticity.",
              },
              {
                icon: Shield,
                title: "Smoother, Tighter Skin",
                description:
                  "Visibly reduces fine lines, wrinkles, and mild sagging for a firmer, more youthful appearance.",
              },
              {
                icon: Heart,
                title: "Improved Skin Texture",
                description:
                  "Refines uneven texture, softens rough patches, and minimizes the look of enlarged pores.",
              },
              {
                icon: Clock,
                title: "Long-Lasting Results",
                description:
                  "Skin continues to regenerate and improve for weeks after treatment, with results lasting up to 1–2 years.",
              },
              {
                icon: Users,
                title: "Non-Surgical Alternative",
                description:
                  "Achieve noticeable lifting and tightening without needles, scalpels, or extended recovery.",
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
              Semi-ablative plasma treatments are ideal for addressing specific
              skin concerns on various areas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                area: "Full Face",
                description:
                  "Comprehensive facial resurfacing for overall skin transformation.",
                price: "$800",
                duration: "60 minutes",
              },
              {
                area: "Upper Face",
                description:
                  "Target forehead, crow's feet, and upper eyelid concerns.",
                price: "$500",
                duration: "45 minutes",
              },
              {
                area: "Lower Face",
                description:
                  "Address smile lines, jowls, and lower facial concerns.",
                price: "$500",
                duration: "45 minutes",
              },
              {
                area: "Neck & Décolletage",
                description:
                  "Improve neck and chest area texture and tightening.",
                price: "$600",
                duration: "50 minutes",
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
                    <div className="text-2xl font-bold text-sage-600">
                      {area.price}
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

      {/* Recovery Timeline */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Recovery Timeline
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding your healing process for optimal results and
              planning.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                day: "Day 1",
                title: "Treatment Day",
                description:
                  "Immediate tightening effect with mild swelling and redness.",
                status: "active",
              },
              {
                day: "Day 2-3",
                title: "Initial Healing",
                description: "Micro-crusting begins, skin feels tight and dry.",
                status: "healing",
              },
              {
                day: "Day 4-5",
                title: "Peeling Phase",
                description:
                  "Natural peeling reveals fresh, new skin underneath.",
                status: "peeling",
              },
              {
                day: "Day 6-7",
                title: "New Skin",
                description:
                  "Fresh, rejuvenated skin with improved texture visible.",
                status: "renewal",
              },
              {
                day: "Week 2+",
                title: "Full Results",
                description:
                  "Continued improvement as collagen production increases.",
                status: "results",
              },
            ].map((phase, index) => (
              <div
                key={index}
                className="text-center bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-sage-600 text-white rounded-full text-sm font-bold mb-4">
                  {phase.day.split(" ")[1]}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {phase.title}
                </h3>
                <p className="text-gray-600 text-sm">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal Candidates */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Ideal Candidates
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Semi-ablative treatments are perfect for those seeking significant
              improvements with manageable downtime.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Perfect For:
              </h3>
              <ul className="space-y-4">
                {[
                  "Moderate to deep wrinkles and fine lines",
                  "Acne scarring and textural irregularities",
                  "Sun damage and age spots",
                  "Uneven skin tone and texture",
                  "Mild to moderate skin laxity",
                  "Those who can accommodate 2-5 days downtime",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Not Recommended For:
              </h3>
              <ul className="space-y-4">
                {[
                  "Active skin infections or conditions",
                  "Pregnancy or breastfeeding",
                  "Recent sun exposure or tanning",
                  "Unrealistic expectations for results",
                  "Inability to follow aftercare instructions",
                  "Those seeking zero downtime treatments",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
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
                price: "$800",
                duration: "60 minutes",
                features: [
                  "Semi-ablative plasma treatment",
                  "Comprehensive consultation",
                  "Post-treatment care kit",
                  "Follow-up appointment",
                ],
              },
              {
                title: "Series of 2",
                price: "$1,440",
                duration: "2 treatments",
                features: [
                  "2 semi-ablative sessions",
                  "10% package savings",
                  "Customized treatment plan",
                  "Priority booking",
                ],
                popular: true,
              },
              {
                title: "Series of 3",
                price: "$1,920",
                duration: "3 treatments",
                features: [
                  "3 semi-ablative sessions",
                  "20% package savings",
                  "Complimentary skincare consultation",
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

      {/* FAQ Section */}
      <div id="faq-section">
        <SemiAblativeSkinResurfacingFAQ />
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-sage-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-4">
            Ready for Dramatic Skin Transformation?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Experience significant skin improvements with our advanced
            semi-ablative plasma technology.
          </p>
          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-white text-sage-600 hover:bg-gray-100 rounded-md px-6 py-2"
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
