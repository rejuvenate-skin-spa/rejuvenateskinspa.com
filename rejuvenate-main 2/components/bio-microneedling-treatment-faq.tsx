"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqSections = [
  {
    title: "Understanding the Service",
    faqs: [
      {
        question: "What is biomicroneedling?",
        answer:
          "Bio microneedling is a natural, non-invasive skin treatment that uses microscopic siliceous spicules derived from freshwater sponges to create microchannels in the skin. Unlike traditional microneedling, it involves no needles or mechanical devices.",
      },
      {
        question:
          "How does bio microneedling differ from traditional microneedling?",
        answer:
          "Instead of needles, bio microneedling uses naturally derived spicules to stimulate the skin and enhance product absorption. It causes no bleeding and typically has a shorter recovery time.",
      },
      {
        question: "What are the benefits of biomicroneedling?",
        answer:
          "- Improves skin tone and texture\n- Helps with acne and enlarged pores\n- Reduces fine lines and pigmentation\n- Stimulates collagen production\n- Natural exfoliation with minimal downtime",
      },
      {
        question: "What skin concerns can biomicroneedling treat?",
        answer:
          "It is ideal for addressing acne, clogged pores, rough texture, hyperpigmentation, and early signs of aging.",
      },
      {
        question: "Is bio microneedling safe?",
        answer:
          "Yes. It is a safe and natural treatment with minimal risk of irritation or adverse effects, primarily when performed by a trained provider.",
      },
    ],
  },
  {
    title: "Treatment Experience",
    faqs: [
      {
        question: "What happens during a bio microneedling session?",
        answer:
          "After cleansing the skin, the spicule-infused serum is massaged into the treatment area. You may feel a prickly sensation as the spicules penetrate the skin. The treatment concludes with calming and hydrating products.",
      },
      {
        question: "Does bio microneedling hurt?",
        answer:
          "You may feel a mild tingling or prickling sensation during the procedure. Some clients experience slight sensitivity or itching for 1–2 days afterward.",
      },
      {
        question: "How many sessions will I need?",
        answer:
          "For best results, a series of 3–5 treatments spaced 2–4 weeks apart is recommended. Maintenance sessions help prolong results.",
      },
      {
        question: "Can biomicroneedling be performed on all skin types?",
        answer:
          "Yes. It is safe for all skin tones and types, including sensitive and acne-prone skin.",
      },
      {
        question: "What areas of the body can be treated?",
        answer:
          "Bio microneedling is commonly used on the face, but it can also be used on the neck, décolleté, back, and other areas with texture or pigmentation concerns.",
      },
    ],
  },
  {
    title: "Recovery & Results",
    faqs: [
      {
        question: "Is there downtime after bio microneedling?",
        answer:
          "Downtime is minimal. You may experience mild redness, sensitivity, or flaking for 1 to 3 days. Makeup can usually be worn after 24 hours.",
      },
      {
        question: "What should I avoid after microneedling with a bio-needle?",
        answer:
          "- Avoid sun exposure for 48–72 hours\n- Avoid exfoliants, acids, and active ingredients for 5–7 days\n- Follow aftercare instructions for hydration and barrier support",
      },
      {
        question: "When will I see results?",
        answer:
          "Skin often feels smoother and looks brighter within a few days. Continued improvement occurs with repeated treatments.",
      },
      {
        question: "How long do the results last?",
        answer:
          "With proper skincare, results can last several months. Ongoing treatments can maintain and enhance improvements.",
      },
      {
        question:
          "How much does bio microneedling cost at Rejuvenate Skin Spa?",
        answer:
          "Bio microneedling typically starts at $225 per session. Packages are available for multiple sessions at a discounted rate.",
      },
    ],
  },
];

export default function BioMicroneedlingTreatmentFAQ() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (itemId: string) => {
    setOpenItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  // Generate FAQ schema markup
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqSections.flatMap((section) =>
      section.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      }))
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section id="faq" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-4">
              SQT Bio Microneedling Services FAQ's
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our bio microneedling treatments
            </p>
          </div>

          <div className="space-y-8">
            {faqSections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h3 className="text-xl font-semibold text-sage-600 mb-4">
                  {section.title}
                </h3>
                <div className="space-y-2">
                  {section.faqs.map((faq, faqIndex) => {
                    const itemId = `${sectionIndex}-${faqIndex}`;
                    const isOpen = openItems.includes(itemId);

                    return (
                      <div
                        key={faqIndex}
                        className="bg-white border border-gray-300 rounded"
                      >
                        <button
                          className="w-full text-left p-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
                          onClick={() => toggleItem(itemId)}
                          aria-expanded={isOpen}
                          aria-controls={`faq-answer-${itemId}`}
                        >
                          <span className="font-medium text-gray-900 pr-4">
                            {faq.question}
                          </span>
                          <ChevronDown
                            className={`h-4 w-4 text-gray-600 transition-transform flex-shrink-0 ${
                              isOpen ? "transform rotate-180" : ""
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div
                            id={`faq-answer-${itemId}`}
                            className="px-4 pb-4 border-t border-gray-200"
                          >
                            <div className="text-gray-700 leading-relaxed pt-3">
                              {faq.answer.split("\n").map((line, lineIndex) => (
                                <div key={lineIndex}>
                                  {line}
                                  {lineIndex <
                                    faq.answer.split("\n").length - 1 && <br />}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
