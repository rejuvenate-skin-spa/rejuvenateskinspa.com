import { MetadataRoute } from "next"

/**
 * Production rules mirror public/robots.txt (AI crawler allows + /book disallow).
 * Preview / local environments disallow all indexing.
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.rejuvenateskinspa.com"
  const isProduction = process.env.VERCEL_ENV === "production"

  if (!isProduction) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    }
  }

  const aiAllow = [
    "/",
    "/llms.txt",
    "/llms-full.txt",
    "/ai.txt",
    "/ai-sitemap.xml",
    "/rag-index.json",
    "/rag-index.jsonl",
    "/ai-entities.json",
    "/ai-intent.json",
    "/*.md",
  ]

  return {
    rules: [
      {
        userAgent: "GPTBot",
        allow: aiAllow,
        disallow: "/book",
      },
      {
        userAgent: "ClaudeBot",
        allow: aiAllow,
        disallow: "/book",
      },
      {
        userAgent: "Google-Extended",
        allow: aiAllow,
        disallow: "/book",
      },
      {
        userAgent: "PerplexityBot",
        allow: aiAllow,
        disallow: "/book",
      },
      {
        userAgent: "FacebookBot",
        allow: "/",
        disallow: "/book",
      },
      {
        userAgent: "CCBot",
        allow: aiAllow,
        disallow: "/book",
      },
      {
        userAgent: "*",
        allow: "/",
        disallow: "/book",
      },
    ],
    sitemap: [`${baseUrl}/sitemap.xml`, `${baseUrl}/ai-sitemap.xml`],
  }
}
