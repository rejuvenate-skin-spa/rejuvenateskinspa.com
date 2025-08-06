import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Heart, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutUsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-r from-sage-100 to-sage-50 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-gray-900 leading-tight">
                About
                <span className="text-sage-600 block">Rejuvenate Skin Spa</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                Dedicated to helping you achieve your best skin through advanced treatments, personalized care, and a
                commitment to excellence in aesthetic medicine.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-sage-600 hover:bg-sage-700 text-white">
                  Meet Our Team
                </Button>
                <Link href="/about-us/contact-us">
                  <Button size="lg" variant="outline" className="border-sage-300 text-sage-700 hover:bg-sage-50">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Rejuvenate Skin Spa interior"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2018, Rejuvenate Skin Spa was born from a passion for helping people feel confident in
                  their own skin. Our founder, Dr. Sarah Mitchell, recognized the need for a spa that combined
                  cutting-edge technology with personalized, compassionate care.
                </p>
                <p>
                  What started as a small practice has grown into a premier destination for advanced skincare
                  treatments. We've helped thousands of clients achieve their skin goals through our innovative
                  treatments and commitment to excellence.
                </p>
                <p>
                  Today, we continue to stay at the forefront of aesthetic medicine, constantly updating our techniques
                  and equipment to provide the best possible results for our clients.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Dr. Sarah Mitchell, Founder"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything we do is guided by our core values and commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Excellence",
                description:
                  "We strive for perfection in every treatment and interaction, never settling for anything less than exceptional results.",
              },
              {
                icon: Heart,
                title: "Compassion",
                description:
                  "We understand that skincare is personal. We approach every client with empathy, understanding, and genuine care.",
              },
              {
                icon: Users,
                title: "Personalization",
                description:
                  "Every client is unique. We create customized treatment plans tailored to individual needs and goals.",
              },
              {
                icon: Star,
                title: "Innovation",
                description:
                  "We stay at the cutting edge of aesthetic medicine, continuously adopting the latest technologies and techniques.",
              },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-600 text-white rounded-full mb-4">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our certified professionals bring years of experience and a passion for helping you achieve your best
              skin.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Mitchell",
                title: "Founder & Medical Director",
                credentials: "MD, Board Certified Dermatologist",
                image: "/placeholder.svg?height=400&width=300",
                bio: "With over 15 years of experience in dermatology and aesthetic medicine, Dr. Mitchell is passionate about helping clients achieve healthy, beautiful skin.",
              },
              {
                name: "Jessica Chen",
                title: "Senior Aesthetician",
                credentials: "Licensed Aesthetician, Certified Plasma Specialist",
                image: "/placeholder.svg?height=400&width=300",
                bio: "Jessica specializes in advanced facial treatments and has performed over 2,000 successful plasma skin tightening procedures.",
              },
              {
                name: "Maria Rodriguez",
                title: "Chemical Peel Specialist",
                credentials: "Licensed Aesthetician, Chemical Peel Certified",
                image: "/placeholder.svg?height=400&width=300",
                bio: "Maria is our chemical peel expert with specialized training in TCA and glycolic acid treatments for all skin types.",
              },
            ].map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-64">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-sage-600 font-medium mb-1">{member.title}</p>
                  <p className="text-sm text-gray-500 mb-3">{member.credentials}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Certifications & Recognition
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence is recognized by leading industry organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "American Board of Dermatology",
              "International Association of Plasma Specialists",
              "Society of Plastic Surgical Skin Care Specialists",
              "Best Spa Award 2023",
            ].map((certification, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-sage-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <p className="font-medium text-gray-900">{certification}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sage-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-4">Ready to Start Your Skin Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let our expert team help you achieve the healthy, beautiful skin you deserve. Schedule your consultation
            today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-sage-600 hover:bg-gray-100">
              Schedule Consultation
            </Button>
            <Link href="/about-us/contact-us">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-sage-600"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
