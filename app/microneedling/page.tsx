import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Microneedling | Rejuvenate Skin Spa | Queen Creek, AZ",
  description:
    "Explore microneedling options at Rejuvenate Skin Spa in Queen Creek, AZ: Traditional Microneedling (CIT), SQT Bio-Microneedling, and Plasma Microneedling.",
};

const options = [
  {
    title: "Traditional Microneedling",
    description:
      "Classic collagen induction therapy (CIT) using ultra-fine needles to support smoother texture, refined pores, and visible rejuvenation over a treatment series.",
    href: "/microneedling/traditional-microneedling",
  },
  {
    title: "SQT Bio Microneedling",
    description:
      "Needle-free microneedling using marine sponge spicules to stimulate renewal and improve tone and texture with minimal downtime.",
    href: "/microneedling/sqt-bio-microneedling",
  },
  {
    title: "Plasma Microneedling",
    description:
      "Advanced resurfacing and tightening combining Plexr Plasma technology with targeted skin renewal for a smoother, more refined look.",
    href: "/microneedling/plasma-microneedling",
  },
];

export default function MicroneedlingHubPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="text-4xl font-semibold tracking-tight">Microneedling</h1>
      <p className="mt-4 text-base text-muted-foreground">
        We offer three microneedling approaches. Choose the option that best
        matches your goals and desired downtime.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {options.map((opt) => (
          <Link key={opt.href} href={opt.href} className="group">
            <Card className="h-full transition-shadow group-hover:shadow-md">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold">{opt.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  {opt.description}
                </p>
                <p className="mt-5 text-sm font-medium">Learn more →</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}


