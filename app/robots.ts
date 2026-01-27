import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.rejuvenateskinspa.com"
  const isProduction = process.env.VERCEL_ENV === "production"

  if (isProduction) {
    return {
      rules: {
        userAgent: "*",
        allow: "/",
      },
      sitemap: `${baseUrl}/sitemap.xml`,
    }
  }

  // Preview / local: disallow all
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
  }
}
