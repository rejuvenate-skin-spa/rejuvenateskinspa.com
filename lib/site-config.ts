export const siteConfig = {
  name: "Rejuvenate Skin Spa",
  alternateName: "Rejuvenate Skin Spa Queen Creek",
  url:
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.rejuvenateskinspa.com",
  description:
    "Rejuvenate Skin Spa is a premier medical aesthetics spa in Queen Creek, Arizona, specializing in Plexr plasma skin tightening, microneedling, SQT bio-microneedling, chemical peels, and luxury facial treatments.",
  phoneTel: "+14802049366",
  phoneDisplay: "(480) 204-9366",
  email: "info@rejuvenateskinspa.com",
  address: {
    street: "20162 E. Sonoqui Blvd.",
    city: "Queen Creek",
    state: "AZ",
    zip: "85142",
    country: "US",
  },
  geo: {
    latitude: 33.2486,
    longitude: -111.6343,
  },
  image: "/og/og-home.jpg",
  logo: "/images/rejuvenate-logo.avif",
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card",
  areaServed: [
    {
      name: "Queen Creek",
      sameAs: "https://en.wikipedia.org/wiki/Queen_Creek,_Arizona",
    },
    { name: "San Tan Valley" },
    { name: "Gilbert" },
    { name: "Mesa" },
    { name: "Chandler" },
    { name: "Apache Junction" },
  ] as ReadonlyArray<{ name: string; sameAs?: string }>,
  openingHours: [
    {
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ] as string[],
      opens: "08:00",
      closes: "18:00",
    },
    {
      dayOfWeek: ["Saturday"] as string[],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  closedDays: ["Sunday"] as string[],
  sameAs: [
    "https://www.instagram.com/rejuvenate_skin_spa",
    "https://www.facebook.com/rejuvenateskin",
    "https://share.google/Dcputn5cVYrcgv5sy",
  ],
} as const;
