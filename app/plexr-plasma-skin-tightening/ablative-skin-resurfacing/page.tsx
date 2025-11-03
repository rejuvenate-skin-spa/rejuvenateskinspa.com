"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  Shield,
  Star,
  Zap,
  Heart,
  Users,
  AlertTriangle,
  Award,
} from "lucide-react";
import Image from "next/image";
import { AblativeSkinResurfacingFAQ } from "@/components/ablative-skin-resurfacing-faq";
import { AblativeSkinResurfacingHero } from "@/components/ablative-skin-resurfacing-hero";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function AblativeSkinResurfacingPage() {
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
      window.location.href = "tel:480-225-9549";
    } else {
      router.push("/about-us/contact-us");
    }
  };

  return (
    <div className="min-h-screen">
      <AblativeSkinResurfacingHero />

      {/* Treatment Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
                What Is Plexr Plasma Pen Fibroblast Skin Tightening (The Fibroblast Lift)?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                The Plexr Plasma Pen Fibroblast Lift is a revolutionary,
                non-surgical ablative treatment that harnesses the power of
                plasma energy to stimulate your skin's natural healing process.
                By activating fibroblast tissue, the cells responsible for
                producing collagen and elastin, Plexr Plasma Pen releases high-energy
                plasma that triggers deep skin regeneration, resulting
                in tightening, lifting, firming, and rejuvenation without
                invasive surgery or long recovery times.
              </p>
              <p className="text-lg text-gray-600">
                Instead of cutting or removing skin, the Plexr Plasma Pen uses a process called
                sublimation (vaporization) to precisely target and contract excess
                skin. This creates tiny, controlled "micro-injuries" on the
                surface while stimulating cell renewal at a deeper level. As
                your skin heals, it becomes stronger, smoother, and visibly more
                youthful.
              </p>
            </div>
            <div className="bg-sage-50 p-8 rounded-lg shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-playfair font-bold text-gray-900 mb-4">
                    How It Works.
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-sage-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-gray-900 text-sm">
                          Energized Plasma Pen Creation:
                        </strong>
                        <span className="text-gray-700 text-sm">
                          {" "}
                          Controlled micro-injuries are created that activate
                          fibroblast cells
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-sage-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-gray-900 text-sm">
                          Fibroblast Activation:
                        </strong>
                        <span className="text-gray-700 text-sm">
                          {" "}
                          Plasma energy from the Plexr Plasma Pen stimulates fibroblast cells to kickstart
                          collagen and elastin renewal.
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-sage-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-gray-900 text-sm">
                          Sublimation (Vaporization):
                        </strong>
                        <span className="text-gray-700 text-sm">
                          {" "}
                          Instead of cutting, the Plexr Plasma Pen gently vaporizes excess
                          tissue, tightening the skin naturally.
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-sage-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-gray-900 text-sm">
                          Healing & Remodeling:
                        </strong>
                        <span className="text-gray-700 text-sm">
                          {" "}
                          The skin's own repair process produces long-lasting
                          tightening and lifting results.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-playfair font-bold text-gray-900 mb-4">
                    Benefits of Plexr Plasma Pen Fibroblast Lift
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-sage-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">
                        Tightens loose or sagging skin (eyelids, jawline, neck, and more)
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-sage-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">
                        Reduces wrinkles, fine lines, and creases
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-sage-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">
                        Improves overall skin texture and tone
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-sage-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">
                        Stimulates collagen and elastin production
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-sage-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">
                        Delivers visible, natural-looking results without surgery, needles, or extended downtime
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-sage-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">
                        Results continue to improve as the skin remodels over time
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aftercare & Recovery */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              The Fibroblast Lift Aftercare and Recovery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Because ablative (sublimation) plasma treatments are more
              intensive, the healing process is an important part of achieving
              dramatic results. Here's what you can expect:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-sage-600 text-white rounded-full mb-2">
                  <span className="text-sm font-bold">1-3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  (Days 1–3)
                </h3>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-sage-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    Redness, swelling, and a "sunburned" sensation are common.
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-sage-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    Tiny brown "carbon crusts" or dots appear where the plasma
                    was applied.
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-sage-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Skin may feel tight or warm.</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-sage-600 text-white rounded-full mb-2">
                  <span className="text-sm font-bold">4-7</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  (Days 4–7) Healing Phase
                </h3>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-sage-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Swelling gradually subsides.</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-sage-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    Carbon crusts naturally flake off—do not pick or scratch
                    them.
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-sage-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>New pink skin begins to reveal itself underneath.</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-sage-600 text-white rounded-full mb-2">
                  <span className="text-xs font-bold">2-4W</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  (Weeks 2–4) Regeneration Phase
                </h3>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-sage-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    Skin tone evens out as collagen and elastin production
                    accelerate.
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-sage-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Mild redness may linger but fades with time.</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-sage-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    Makeup and gentle skincare can usually be resumed after dots
                    completely fall off. 3-5 days
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-sage-600 text-white rounded-full mb-2">
                  <span className="text-xs font-bold">1-3M</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Full Results (1–3 Months)
                </h3>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-sage-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    Skin becomes visibly tighter, smoother, and rejuvenated.
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-sage-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Improvements continue as new collagen forms.</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-sage-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    Results can last 2-5 years depending on lifestyle and skin
                    condition.
                  </span>
                </div>
              </div>
            </div>
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
              Ablative treatments are for those seeking maximum transformation
              and can accommodate extended downtime.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Perfect For:
              </h3>
              <ul className="space-y-4">
                {[
                  "Deep wrinkles and severe sun damage",
                  "Extensive acne scarring",
                  "Significant skin laxity",
                  "Multiple skin concerns requiring comprehensive treatment",
                  "Those seeking maximum possible improvement",
                  "Ability to take 7-10 days off work/social activities",
                  "Commitment to strict aftercare protocol",
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
                  "Active skin infections or autoimmune conditions",
                  "Pregnancy or breastfeeding",
                  "Recent isotretinoin use (within 6 months)",
                  "Unrealistic expectations",
                  "Inability to follow extensive aftercare",
                  "Cannot accommodate significant downtime",
                  "History of poor wound healing",
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

      <div id="faq-section">
        <AblativeSkinResurfacingFAQ />
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-sage-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-4">
            Ready for Maximum Transformation?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Experience the most comprehensive skin rejuvenation available with
            our advanced ablative plasma technology.
          </p>
          <div className="flex justify-center">
            <Button
              onClick={handleGetInTouch}
              className="bg-white text-sage-600 hover:bg-gray-100 px-6 py-2 shadow-lg backdrop-blur-sm"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
