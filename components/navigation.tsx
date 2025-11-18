"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigationItems = [
  {
    title: "Plasma",
    href: "/plexr-plasma-skin-tightening",
    submenu: [
      {
        title: "Ablative Skin Resurfacing",
        href: "/plexr-plasma-skin-tightening/ablative-skin-resurfacing",
      },
      {
        title: "Nano-Ablative Skin Resurfacing",
        href: "/plexr-plasma-skin-tightening/nano-ablative-skin-resurfacing",
      },
      {
        title: "Semi-Ablative Skin Resurfacing",
        href: "/plexr-plasma-skin-tightening/semi-ablative-skin-resurfacing",
      },
      {
        title: "Mole Removal",
        href: "/plexr-plasma-skin-tightening/mole-removal-treatment",
      },
      {
        title: "Skin Tag Removal",
        href: "/plexr-plasma-skin-tightening/skin-tag-removal-treatment",
      },
      {
        title: "Sun Spot Removal",
        href: "/plexr-plasma-skin-tightening/sun-spot-removal-treatment",
      },
      {
        title: "Wart Removal",
        href: "/plexr-plasma-skin-tightening/wart-removal-treatment",
      },
    ],
  },
  {
    title: "Microneedling",
    href: "/spa-services/microneedling-treatment",
    submenu: [
      {
        title: "SQT Bio Microneedling",
        href: "/spa-services/bio-microneedling-treatment",
      },
      {
        title: "Plasma Microneedling",
        href: "/spa-services/plasma-microneedling-treatment",
      },
    ],
  },
  {
    title: "Chemical Peels",
    href: "/chemical-peels",
    submenu: [
      { title: "BioRePeel", href: "/biorepeel-facial-chemical-peel" },
      {
        title: "BioRePeel 35 TCA Facial Peel",
        href: "/biorepeel-facial-chemical-peel/35-tca-peel",
      },
      {
        title: "BioRePeel 50 TCA Body Peel",
        href: "/biorepeel-facial-chemical-peel/50-tca-peel",
      },
      { title: "TCA Peels", href: "/chemical-peel-treatment/tca-peel" },
      {
        title: "Glycolic Acid Peels",
        href: "/chemical-peel-treatment/glycolic-acid-peel",
      },
    ],
  },
  {
    title: "Enzyme Peels",
    href: "/enzyme-peel-facial",
    submenu: [
      {
        title: "Blueberry Enzyme Peel",
        href: "/enzyme-peel-facial/blueberry-enzyme-peel",
      },
      {
        title: "Cherry Enzyme Peel",
        href: "/enzyme-peel-facial/cherry-enzyme-peel",
      },
      {
        title: "Coconut-Papaya Enzyme Peel",
        href: "/enzyme-peel-facial/coconut-papaya-enzyme-peel",
      },
      {
        title: "Lemon Zest Enzyme Peel",
        href: "/enzyme-peel-facial/lemon-enzyme-peel",
      },
      {
        title: "Passion Fruit Enzyme Peel",
        href: "/enzyme-peel-facial/passion-fruit-enzyme-peel",
      },
      {
        title: "Pomegranate Enzyme Peel",
        href: "/enzyme-peel-facial/pomegranate-enzyme-peel",
      },
      {
        title: "Pumpkin-Orange Enzyme Peel",
        href: "/enzyme-peel-facial/pumpkin-orange-enzyme-peel",
      },
      {
        title: "Raspberry-Peach Enzyme Peel",
        href: "/enzyme-peel-facial/raspberry-peach-enzyme-peel",
      },
    ],
  },
  {
    title: "Other Services",
    href: "/spa-services",
    submenu: [
      {
        title: "Dermaplaning Facial",
        href: "/spa-services/dermaplaning-treatment",
      },
      { title: "Microblading", href: "/spa-services/microblading-treatment" },
      {
        title: "Eyebrow Lamination",
        href: "/spa-services/eyebrow-lamination-treatment",
      },
      {
        title: "Red Light Therapy",
        href: "/spa-services/red-light-therapy-treatment",
      },
    ],
  },
  {
    title: "About Us",
    href: "/about-us",
    submenu: [
      { title: "Portfolio", href: "/about-us/portfolio" },
      { title: "Contact Us", href: "/about-us/contact-us" },
      { title: "Plexr Sales", href: "/about-us/plexr-sales" },
    ],
  },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<
    string | null
  >(null);

  const handleMouseEnter = (itemTitle: string) => {
    setActiveDropdown(itemTitle);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMobileDropdown = (itemTitle: string) => {
    setActiveMobileDropdown(
      activeMobileDropdown === itemTitle ? null : itemTitle
    );
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    setActiveMobileDropdown(null);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/rejuvenate-logo.webp"
              alt="Rejuvenate Skin Spa"
              width={200}
              height={60}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div
                key={item.title}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(item.title)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  className="flex items-center text-gray-700 hover:text-sage-600 transition-colors duration-200 font-medium py-2"
                >
                  {item.title}
                  {item.submenu.length > 0 && (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.submenu.length > 0 && (
                  <div
                    className={`absolute top-full left-0 mt-0 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50 transition-all duration-200 ${
                      activeDropdown === item.title
                        ? "opacity-100 visible transform translate-y-0"
                        : "opacity-0 invisible transform -translate-y-2"
                    }`}
                    onMouseEnter={() => handleMouseEnter(item.title)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.title}
                        href={subItem.href}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-sage-600 transition-colors duration-200"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
              onClick={closeMobileMenu}
            />

            {/* Mobile Menu */}
            <div className="fixed top-20 left-0 right-0 bottom-0 bg-white z-50 lg:hidden overflow-y-auto">
              <div className="px-4 py-6 space-y-4">
                {navigationItems.map((item) => (
                  <div
                    key={item.title}
                    className="border-b border-gray-100 pb-4"
                  >
                    {/* Main Menu Item */}
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        className="text-gray-700 font-medium text-lg py-2 flex-1"
                        onClick={closeMobileMenu}
                      >
                        {item.title}
                      </Link>
                      {item.submenu.length > 0 && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleMobileDropdown(item.title)}
                          className="p-2"
                        >
                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-200 ${
                              activeMobileDropdown === item.title
                                ? "rotate-180"
                                : ""
                            }`}
                          />
                        </Button>
                      )}
                    </div>

                    {/* Submenu */}
                    {item.submenu.length > 0 && (
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          activeMobileDropdown === item.title
                            ? "max-h-96 opacity-100 mt-2"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="pl-4 space-y-2">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.title}
                              href={subItem.href}
                              className="block text-gray-600 hover:text-sage-600 py-2 text-sm transition-colors duration-200 visited:text-gray-600 active:text-gray-600"
                              onClick={closeMobileMenu}
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}

                {/* Book Consultation Button */}
                <div className="pt-4">
                  <a
                    href="tel:1-480-225-9549"
                    className="w-full bg-sage-600 hover:bg-sage-700 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200 flex items-center justify-center"
                  >
                    Book Consultation
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
