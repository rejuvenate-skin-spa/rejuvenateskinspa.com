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
  FileText,
} from "lucide-react";
import Image from "next/image";
import { MoleRemovalTreatmentFAQ } from "@/components/mole-removal-treatment-faq";
import { MoleRemovalTreatmentHero } from "@/components/mole-removal-treatment-hero";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function MoleRemovalTreatmentPage() {
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
      {/* Hero Section */}
      <MoleRemovalTreatmentHero />

      {/* Important Notice */}
      <section className="py-8 bg-amber-50 border-l-4 border-amber-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start">
            <AlertTriangle className="h-6 w-6 text-amber-600 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-amber-800 mb-2">
                Medical Clearance May Be Required
              </h3>
              <p className="text-amber-700">
                If requested, all moles should be evaluated and cleared by a dermatologist or
                physician before removal treatment. We require written medical
                clearance confirming the mole is benign and safe for cosmetic
                removal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-6">
                Say Goodbye to unwanted moles with Plexr Plasma
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Plexr Plasma mole removal offers a safe, precise, and
                  non-surgical method for removing unwanted moles, skin tags,
                  and other small benign lesions. Using controlled plasma
                  energy, the treatment sublimates (gently vaporizes)
                  superficial skin tissue without cutting or stitching,
                  minimizing the risk of scarring. This type of procedure allows for precise depth
                  control and immediate tissue coagulation, resulting in minimal
                  bleeding and faster healing compared to conventional excision
                  method
                </p>
                <p>
                  and clients seeking a non-invasive, cosmetic alternative for
                  the removal of benign moles, skin tags, or similar
                  imperfections with limited chances of scaring
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500&text=Precise+Plasma+Removal"
                alt="Precise plasma mole removal process"
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
              Experience the rewards of advanced abaltive plasma technology for safe mole removals and similar skin imperfections with limited chances of scaring.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Lower Risk of Scarring",
                description:
                  "Precise plasma energy minimizes damage to surrounding tissue, compared you traditional removal methods, leaving you a better cosmetic outcome.",
              },
              {
                icon: Zap,
                title: "No Bleeding",
                description:
                  "Plasma technology immediately coagulates tissue, eliminating bleeding during treatment.",
              },
              {
                icon: Clock,
                title: "Quick Treatment",
                description:
                  "Most moles can be removed in 15-30 minutes with immediate results.",
              },
              {
                icon: Heart,
                title: "Comfortable Procedure",
                description:
                  "Local anesthesia ensures a comfortable experience throughout the treatment, and No scalpels, cutting, or stitches",
              },
              {
                icon: Star,
                title: "Single Session",
                description:
                  "Most moles are completely removed in just one treatment session.",
              },
              {
                icon: Users,
                title: "Expert Care",
                description:
                  "Performed by trained professionals with extensive plasma technology experience.",
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

          <div className="text-center mt-8">
            <p className="text-gray-600 max-w-2xl mx-auto">
              Most clients experience only mild redness or tiny crusts at the
              treatment site, which naturally heal within 3–7 days.
            </p>
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
              Your mole removal treatment experience from consultation to
              complete healing.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                step: "01",
                title: "Medical Clearance",
                description:
                  "Obtain dermatologist evaluation and written clearance for mole removal.",
              },
              {
                step: "02",
                title: "Consultation",
                description:
                  "Review medical clearance and plan precise removal approach.",
              },
              {
                step: "03",
                title: "Preparation",
                description:
                  "Local anesthesia application and treatment area preparation.",
              },
              {
                step: "04",
                title: "Removal",
                description:
                  "Precise plasma removal with immediate tissue coagulation.",
              },
              {
                step: "05",
                title: "Aftercare",
                description:
                  "Wound care instructions and follow-up appointment scheduling.",
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

      {/* Medical Requirements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Medical Requirements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              If moles, lessions or any other skin imperfections look
              suspicious, mandatory medical clearance will required for a safety
              mole removal treatment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <FileText className="h-6 w-6 text-sage-600 mr-3" />
                Required Documentation, if requested by your Plasma provider
              </h3>
              <ul className="space-y-4">
                {[
                  "Written medical clearance from dermatologist or physician",
                  "Confirmation that mole is benign (non-cancerous)",
                  "Recent medical evaluation (within 6 months)",
                  "Clear photographs of the mole for documentation",
                  "Medical history and current medications list",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-sage-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <AlertTriangle className="h-6 w-6 text-amber-500 mr-3" />
                Cannot Treat
              </h3>
              <ul className="space-y-4">
                {[
                  "Suspicious or changing moles",
                  "Moles with irregular borders or colors",
                  "Recently biopsied areas",
                  "Moles in sensitive areas without specialist approval",
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

      {/* Aftercare */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Aftercare Instructions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proper aftercare ensures optimal healing and minimal scarring.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                period: "First 24 Hours",
                instructions: [
                  "Keep area clean and dry",
                  "Apply prescribed antibiotic ointment",
                  "Avoid water contact",
                  "No strenuous activity",
                ],
              },
              {
                period: "Days 2-4",
                instructions: [
                  "Gentle cleansing with mild soap",
                  "Continue antibiotic ointment",
                  "Protect from sun exposure",
                  "Allow natural scab formation",
                ],
              },
              {
                period: "Days 3-7",
                instructions: [
                  "Scab will naturally fall off",
                  "Apply sunscreen to new skin",
                  "Moisturize regularly",
                  "Monitor healing progress",
                ],
              },
            ].map((phase, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6 bg-white">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {phase.period}
                  </h3>
                  <ul className="space-y-2">
                    {phase.instructions.map((instruction, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-gray-600 flex items-start"
                      >
                        <CheckCircle className="h-4 w-4 text-sage-600 mr-2 mt-0.5 flex-shrink-0" />
                        {instruction}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div id="faq-section">
        <MoleRemovalTreatmentFAQ />
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-sage-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-4">
            Ready to Remove Your Mole Safely?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Schedule your consultation today. Remember to obtain medical
            clearance before your appointment.
          </p>
          <div className="flex justify-center">
            <Button
              onClick={handleGetInTouch}
              className="bg-white text-sage-600 hover:bg-gray-100 rounded-md px-6 py-2 shadow-lg backdrop-blur-sm"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
