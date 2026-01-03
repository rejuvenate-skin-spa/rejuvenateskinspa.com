"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is microneedling?",
    answer:
      "Microneedling is a skin rejuvenation treatment that creates tiny channels in the skin to stimulate the body's natural collagen production. This process helps improve skin texture, tone, and overall appearance over time.",
  },
  {
    question: "How many sessions will I need?",
    answer:
      "Most clients see the best results from a series of 3–6 treatments, spaced several weeks apart. Your provider will recommend a plan based on your goals and the specific treatment type.",
  },
  {
    question: "Is there downtime?",
    answer:
      "Downtime varies by treatment. SQT Bio typically has minimal recovery, while Traditional and Plasma Microneedling may involve mild redness or sensitivity for 1–3 days. Most clients return to normal activities quickly.",
  },
  {
    question: "When will I see results?",
    answer:
      "Initial improvements may be noticeable within 1–2 weeks, but collagen remodeling continues over several months. Full results are typically seen after completing a series of treatments.",
  },
  {
    question: "Can microneedling help with texture and acne scarring?",
    answer:
      "Yes. Microneedling is commonly used to address uneven texture, enlarged pores, and the appearance of acne scars. Results depend on the severity of the concern and the treatment plan selected.",
  },
  {
    question: "Who should avoid microneedling?",
    answer:
      "Microneedling may not be suitable for those with active skin infections, certain skin conditions, or who are pregnant. Your provider will review your history during a consultation to determine if the treatment is appropriate for you.",
  },
  {
    question: "Is microneedling painful?",
    answer:
      "A topical numbing cream is typically applied before treatment to minimize discomfort. Most clients describe the sensation as mild pressure or a light prickling feeling.",
  },
  {
    question: "How do I know which microneedling option is right for me?",
    answer:
      "The best option depends on your skin concerns, sensitivity, and how much downtime you can accommodate. We're happy to discuss your goals by phone or during a consultation to help you choose.",
  },
];

export default function MicroneedlingHubFAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-2 max-w-3xl mx-auto">
          {faqs.map((faq, index) => {
            const isOpen = openItems.includes(index);

            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full text-left p-5 flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transition-transform flex-shrink-0 ${
                      isOpen ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 border-t border-gray-100">
                    <p className="text-sm text-gray-600 leading-relaxed pt-4">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

