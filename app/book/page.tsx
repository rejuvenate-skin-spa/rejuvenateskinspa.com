import type { Metadata } from "next";
import BookPageClient from "./BookPageClient";

export const metadata: Metadata = {
  title: "Book an Appointment | Rejuvenate Skin Spa | Queen Creek, AZ",
  description:
    "Book your skincare appointment online at Rejuvenate Skin Spa in Queen Creek, AZ. Schedule facials, chemical peels, microneedling, plasma treatments, and more.",
  keywords:
    "book appointment, schedule facial, skincare appointment Queen Creek, Rejuvenate Skin Spa booking, spa appointment Arizona",
  alternates: { canonical: "/book" },
  openGraph: {
    title: "Book an Appointment | Rejuvenate Skin Spa",
    url: "/book",
    description:
      "Book your skincare appointment online at Rejuvenate Skin Spa in Queen Creek, AZ.",
    type: "website",
  },
};

export default function BookPage() {
  return <BookPageClient />;
}
