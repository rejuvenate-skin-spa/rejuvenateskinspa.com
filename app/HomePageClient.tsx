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
      window.location.href = "tel:4802049366";
    } else {
      router.push("/contact");
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
              Signature Treatments at Rejuvenate Skin Spa
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced skincare treatments designed to deliver visible, lasting results. Each service is customized to your skin type and goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Plexr Plasma Skin Tightening",
                description:
                  "Non-surgical skin tightening using Plexr plasma pen technology",
                image: "/images/plasma-skin-tightening-treatment-rejuvenate-skin-spa-queen-creek-az.png",
                href: "/plexr-plasma-skin-tightening",
                linkText: "View Plasma Options",
                features: [
                  "Three intensity levels",
                  "Firms and lifts the look of skin",
                  "Smooths fine lines and wrinkles",
                  "Minimal downtime",
                ],
              },
              {
                title: "Microneedling",
                description:
                  "Collagen induction therapy for improved texture, tone, and firmness",
                image: "/images/microneedling-feature.png",
                href: "/spa-services/microneedling-treatment",
                linkText: "View Microneedling Options",
                features: [
                  "Improves skin texture and tone",
                  "Supports firmer-looking skin",
                  "Softens the look of fine lines",
                  "Encourages collagen production",
                ],
              },
              {
                title: "Chemical and Enzyme Peels",
                description:
                  "Professional-grade peels for smoother, brighter skin",
                image: "/images/2537645807-skin-peel.jpg",
                href: "/chemical-peels",
                linkText: "View Peel Options",
                features: [
                  "Brightens dull-looking skin",
                  "Smooths rough texture",
                  "Helps even skin tone",
                  "Supports clearer-looking skin",
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
                      {service.linkText || "Learn More"}
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
              Rejuvenate Skin Spa in Queen Creek, AZ combines professional-grade technology with personalized care. Plexr plasma skin tightening, medical-grade chemical peels, collagen-boosting microneedling, and curated spa services are all tailored to your unique skin goals.
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
            Schedule a Consultation in Queen Creek
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact Rejuvenate Skin Spa to discuss your skincare goals. We offer personalized treatment plans designed to deliver real, visible results.
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

