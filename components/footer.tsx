import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Image
              src="/images/rejuvenate-logo.webp"
              alt="Rejuvenate Skin Spa"
              width={200}
              height={60}
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-600 mb-4 max-w-md">
              Experience the ultimate in skincare luxury with our advanced treatments and personalized approach to skin
              rejuvenation.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center text-sm text-gray-600">
                <Phone className="h-4 w-4 mr-2" />
                (555) 123-4567
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Mail className="h-4 w-4 mr-2" />
                info@rejuvenatespa.com
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/plasma-skin-tightening" className="text-gray-600 hover:text-sage-600">
                  Plasma Treatments
                </Link>
              </li>
              <li>
                <Link href="/biorepeel-treatment" className="text-gray-600 hover:text-sage-600">
                  BioRePeel
                </Link>
              </li>
              <li>
                <Link href="/chemical-peels" className="text-gray-600 hover:text-sage-600">
                  Chemical Peels
                </Link>
              </li>
              <li>
                <Link href="/spa-services" className="text-gray-600 hover:text-sage-600">
                  Spa Services
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-gray-600 hover:text-sage-600">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Visit Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-1 text-sage-600" />
                <div className="text-sm text-gray-600">
                  123 Wellness Boulevard
                  <br />
                  Beauty City, BC 12345
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-4 w-4 mr-2 mt-1 text-sage-600" />
                <div className="text-sm text-gray-600">
                  Mon-Fri: 9AM-7PM
                  <br />
                  Sat: 9AM-5PM
                  <br />
                  Sun: 10AM-4PM
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Rejuvenate Skin Spa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
