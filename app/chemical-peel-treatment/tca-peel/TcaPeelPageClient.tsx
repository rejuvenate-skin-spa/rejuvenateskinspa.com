"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { TcaPeelFAQ } from "@/components/tca-peel-faq";
import TcaPeelHero from "@/components/tca-peel-hero";
import { CheckCircle, Clock, Shield, Star } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function TcaPeelPageClient() {
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
      window.location.href = "tel:+14802818888";
    } else {
      router.push("/about-us/contact-us");
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <TcaPeelHero />

      {/* Treatment Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              About TCA Chemical Peels
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              TCA (Trichloroacetic Acid) peels are considered medium to deep
              depth chemical peels that provide significant skin rejuvenation by
              removing layers of damaged skin and stimulating new cell and
              collagen regrowth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                What Is a TCA 25% Peel?
              </h3>
              <p className="text-gray-600 mb-6">
                A TCA 25% peel is a medium to deep chemical peel using 25%
                trichloroacetic acid to deeply exfoliate, smooth uneven texture
                and tone, and support collagen stimulation for visible skin
                rejuvenation. Stronger than light peels, this medium-depth TCA
                peel penetrates into the epidermis and dermis middle skin layers
                to correct more advanced skin concerns—while maintaining a
                manageable recovery compared to fully deep peels.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-sage-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">
                    Medium to deep depth penetration for significant results
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-sage-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">
                    Stimulates collagen and elastin production
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-sage-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">
                    Effective for multiple skin concerns
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/chemical-peel-treatment-close-up.png"
                alt="TCA peel process"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              TCA Peel Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience comprehensive skin rejuvenation with our professional
              TCA chemical peel treatment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Star className="h-8 w-8 text-sage-600" />,
                title: "Reduces Deep Wrinkles",
                description:
                  "Effectively diminishes fine lines and deeper wrinkles for smoother skin texture.",
              },
              {
                icon: <CheckCircle className="h-8 w-8 text-sage-600" />,
                title: "Improves Acne Scars",
                description:
                  "Significantly reduces the appearance of acne scars and post-inflammatory marks.",
              },
              {
                icon: <Shield className="h-8 w-8 text-sage-600" />,
                title: "Sun Damage Repair",
                description:
                  "Addresses sun spots, age spots, and other forms of photodamage effectively.",
              },
              {
                icon: <Clock className="h-8 w-8 text-sage-600" />,
                title: "Skin Texture Enhancement",
                description:
                  "Improves overall skin texture, making it smoother and more refined.",
              },
              {
                icon: <Star className="h-8 w-8 text-sage-600" />,
                title: "Pore Size Reduction",
                description:
                  "Minimizes the appearance of enlarged pores for a more refined complexion.",
              },
              {
                icon: <CheckCircle className="h-8 w-8 text-sage-600" />,
                title: "Collagen Stimulation",
                description:
                  "Promotes natural collagen production for firmer, more youthful skin.",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="space-y-4">
                  <div className="flex justify-center">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Real TCA Peel Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the dramatic transformation possible with our professional TCA
              chemical peel treatments.
            </p>
          </div>

          <div className="flex justify-center gap-8 mb-12">
            <div className="relative rounded-lg shadow-lg overflow-hidden" style={{ width: '5in', height: '7in' }}>
              <Image
                src="/images/tca-peel-results-before.png"
                alt="TCA Peel Results Before"
                width={480}
                height={672}
                className="rounded-lg object-contain"
              />
            </div>
            <div className="relative rounded-lg shadow-lg overflow-hidden" style={{ width: '5in', height: '7in' }}>
              <Image
                src="/images/tca-peel-results-after.png"
                alt="TCA Peel Results After"
                width={480}
                height={672}
                className="rounded-lg object-contain"
              />
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-500 mb-4">
              *Results may vary. Individual results are not guaranteed and may
              vary from person to person.
            </p>
            <Button className="bg-sage-600 hover:bg-sage-700 text-white">
              View More Results
            </Button>
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              The TCA Peel Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach ensures safe, effective treatment with
              optimal results.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description:
                  "Comprehensive skin assessment and treatment planning with our expert aestheticians.",
              },
              {
                step: "02",
                title: "Preparation",
                description:
                  "Skin preparation and pre-treatment conditioning to optimize peel effectiveness.",
              },
              {
                step: "03",
                title: "Application",
                description:
                  "Careful application of TCA solution with precise timing and monitoring.",
              },
              {
                step: "04",
                title: "Recovery Care",
                description:
                  "Detailed aftercare instructions and follow-up support for optimal healing.",
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

      {/* Treatment Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">
                What to Expect
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    During Treatment
                  </h3>
                  <p className="text-gray-600">
                    You'll experience a controlled burning sensation as the TCA
                    solution is applied. This is normal and indicates the peel
                    is working effectively. The treatment typically takes 30-45
                    minutes.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Recovery Period
                  </h3>
                  <p className="text-gray-600">
                    Expect 3-5 days of peeling and healing. Your skin will
                    initially appear red and tight, followed by peeling that
                    reveals fresh, new skin underneath.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Results Timeline
                  </h3>
                  <p className="text-gray-600">
                    Initial results are visible after healing is complete.
                    Optimal results develop over 2-3 months as collagen
                    production increases and skin continues to improve.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Treatment Information
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">30-45 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Downtime:</span>
                    <span className="font-medium">3-5 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sessions Needed:</span>
                    <span className="font-medium">1-3 treatments</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Results Last:</span>
                    <span className="font-medium">1-2 years</span>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Ideal Candidates
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-4 w-4 text-sage-600 mr-2" />
                    Deep wrinkles and fine lines
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-4 w-4 text-sage-600 mr-2" />
                    Acne scars and texture issues
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-4 w-4 text-sage-600 mr-2" />
                    Sun damage and age spots
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-4 w-4 text-sage-600 mr-2" />
                    Uneven skin tone
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div id="faq-section">
        <TcaPeelFAQ />
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-sage-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-4">
            Ready for Dramatic Skin Transformation?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Schedule your TCA chemical peel consultation today and discover how
            this powerful treatment can rejuvenate your skin.
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
