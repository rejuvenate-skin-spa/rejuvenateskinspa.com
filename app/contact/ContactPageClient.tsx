"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { siteConfig } from "@/lib/site-config"
// GoHighLevel booking embed - uncomment when ready to enable
// import { GoHighLevelEmbed } from "@/components/gohighlevel-embed"

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[280px] sm:h-[400px] lg:h-[500px] bg-gradient-to-r from-sage-100 to-sage-50 flex items-center">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
              Contact Rejuvenate Skin Spa
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Questions about a treatment? Ready to schedule a consultation? Reach out and let us help you take the next step.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">
                  Contact Us Directly
                </h2>
                <p className="text-gray-600 mb-8">
                  Call, email, or stop by our Queen Creek studio. We look forward to hearing from you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-sage-600 text-white rounded-full flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a
                      href={`tel:${siteConfig.phoneTel}`}
                      aria-label="Call Rejuvenate Skin Spa"
                      className="text-gray-600 hover:text-sage-600 transition-colors"
                    >
                      {siteConfig.phoneDisplay}
                    </a>
                    <p className="text-sm text-gray-500">
                      Mon-Fri: 8AM-6PM, Sat: 9AM-5PM, Sun: Closed
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-sage-600 text-white rounded-full flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      aria-label="Email Rejuvenate Skin Spa"
                      className="text-gray-600 hover:text-sage-600 transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                    <p className="text-sm text-gray-500">
                      We will get back to you promptly
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-sage-600 text-white rounded-full flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Location
                    </h3>
                    <p className="text-gray-600">
                      20162 E. Sonoqui Blvd.
                      <br />
                      Queen Creek AZ 85142
                    </p>
                    <p className="text-sm text-gray-500">
                      Free parking available
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-sage-600 text-white rounded-full flex items-center justify-center mr-4">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 5:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="shadow-lg">
              <CardContent className="p-5 sm:p-8">
                <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
                  Request a Consultation
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="service">Service of Interest</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="mt-1 w-full px-3 py-3 sm:py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sage-500 focus:border-sage-500 min-h-[48px] sm:min-h-0"
                    >
                      <option value="">Select a service</option>
                      <option value="plasma">Plasma Skin Tightening</option>
                      <option value="biorepeel">BioRePeel Treatment</option>
                      <option value="chemical-peels">Chemical Peels</option>
                      <option value="dermaplaning">Dermaplaning</option>
                      <option value="microneedling">Microneedling</option>
                      <option value="microblading">Microblading</option>
                      <option value="consultation">General Consultation</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your goals, questions, or preferred timing."
                      className="mt-1"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-sage-600 hover:bg-sage-700 text-white min-h-[48px] text-base"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    By submitting this form, you agree to our privacy policy and consent to be contacted about our services.
                  </p>
                  <p className="text-sm text-gray-600 text-center mt-4">
                    We are here to help you feel confident in your skin.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 
        ============================================================
        GOHIGHLEVEL ONLINE BOOKING EMBED
        ============================================================
        
        TO ENABLE ONLINE BOOKING:
        1. Uncomment the import at the top of this file
        2. Uncomment the section below
        3. Replace "YOUR_CALENDAR_ID" with your actual GoHighLevel calendar ID
           (Get this from: GoHighLevel > Calendars > Your Calendar > Embed > Copy iframe URL)
        
        Example URL format: 
        https://api.leadconnectorhq.com/widget/booking/ABC123xyz
        
        <section className="py-10 sm:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-4">
                Book Online
              </h2>
              <p className="text-lg text-gray-600">
                Select a time that works for you and we will confirm your appointment.
              </p>
            </div>
            <GoHighLevelEmbed 
              enabled={true}
              embedUrl="https://api.leadconnectorhq.com/widget/booking/YOUR_CALENDAR_ID"
              height="700px"
            />
          </div>
        </section>
        ============================================================
      */}

      {/* Map Section */}
      <section className="py-10 sm:py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-4">
              Visit Us in Queen Creek
            </h2>
            <p className="text-xl text-gray-600">
              Easy to find with free parking. We look forward to seeing you.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.8234567890123!2d-111.64841899999999!3d33.242644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDE0JzMzLjUiTiAxMTHCsDM4JzU0LjMiVw!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rejuvenate Skin Spa Location"
              className="w-full h-96"
            ></iframe>
            <div className="p-4 sm:p-6 bg-white">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Rejuvenate Skin Spa
                  </h3>
                  <p className="text-gray-600">
                    20162 E. Sonoqui Blvd., Queen Creek AZ 85142
                  </p>
                </div>
                <div className="flex">
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${33.242644},${-111.64841899999999}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full sm:w-auto px-4 py-3 sm:py-2 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors duration-200 min-h-[48px] sm:min-h-0"
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

