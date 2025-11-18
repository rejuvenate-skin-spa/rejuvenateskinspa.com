"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Award, Users, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { HomeHero } from "@/components/home-hero";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function HomePageClient() {
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

    // Monday-Saturday (1-6), 8am-6pm
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
      <HomeHero />

      {/* Featured Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-sage-600 mb-4">
              Our Signature Treatments
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Come explore our most advanced and sought-after skincare treatments,
              each crafted to target your specific concerns and deliver visible,
              lasting results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Plasma Skin Tightening",
                description:
                  "Cutting-edge technology that offers dramatic skin tightening results",
                image: "/images/plasma-skin-tightening-treatment-rejuvenate-skin-spa-queen-creek-az.png",
                href: "/plasma-skin-tightening",
                features: [
                  "3 levels of intensity",
                  "Tightens & lifts sagging skin",
                  "Smooths fine lines & wrinkles",
                  "Minimal downtime, long-lasting results",
                ],
              },
              {
                title: "Microneedling",
                description:
                  "The collagen induction therapy that offers visible results",
                image: "/images/microneedling-feature.png",
                href: "/microneedling-treatment",
                features: [
                  "Traditional Microneedling",
                  "SQT Bio Microneedling",
                  "PLEXR Plasma Microneedling",
                ],
              },
              {
                title: "Peels",
                description:
                  "Ground breaking peels that revolutionize ultra fine results",
                image: "/images/2537645807-skin-peel.jpg",
                href: "/chemical-peels",
                features: [
                  "BioREPeel",
                  "25% TCA Chemical Peel",
                  "20% & 40% Glycolic Peel",
                  "EXOTIC and Powerful Fruit Enzyme Peels",
                ],
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-1 mb-4">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-sage-600 flex items-center"
                      >
                        <div className="w-1.5 h-1.5 bg-sage-600 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={service.href}>
                    <Button
                      variant="outline"
                      className="w-full border-sage-300 text-sage-700 hover:bg-sage-50 rounded-md bg-transparent"
                    >
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Why Choose Rejuvenate Skin Spa
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our philosophy goes beyond skincare, it's about transformation.
              From cutting-edge plasma pen skin tightening, next-generation chemical
              peels, and power house enzymes peels, to precision services like
              microneedling, dermaplaning, brow artistry, and redlight therapy,
              every treatment is meticulously tailored to your unique skin needs. We combine
              state-of-the-art technology, medical-grade actives, and elite
              techniques in a serene, boutique environment to reveal the best
              version of you...radiant, youthful, and empowered.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                treatment: "Plasma Skin Tightening",
                quote:
                  "The results exceeded my expectations. My skin looks years younger and the treatment was completely comfortable.",
                rating: 5,
              },
              {
                name: "Maria Rodriguez",
                treatment: "BioRePeel Treatment",
                quote:
                  "Amazing experience! The staff is professional and the results speak for themselves. My skin has never looked better.",
                rating: 5,
              },
              {
                name: "Jennifer Chen",
                treatment: "Chemical Peel",
                quote:
                  "I was nervous about getting a chemical peel, but the team made me feel comfortable and the results are incredible.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 rounded-lg">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <blockquote className="text-gray-600 mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-sage-600">
                      {testimonial.treatment}
                    </div>
                  </div>
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
            Ready to Transform Your Skin?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Schedule your consultation today and discover how our advanced
            treatments can help you achieve the radiant, youthful skin you
            deserve.
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

