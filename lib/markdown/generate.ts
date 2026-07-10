import { siteConfig } from "@/lib/site-config";
import { assembleMarkdownDocument } from "./front-matter";
import { generateMarkdownBody } from "./content";
import { getMarkdownPage } from "./registry";
import {
  canonicalHtmlUrl,
  getSiteDomain,
  markdownUrl,
  normalizeHtmlPath,
} from "./urls";
import type { ResolveResult } from "./types";
import { htmlRedirects, isPublicMarkdownPath } from "./registry";

export function resolveMarkdownRequest(rawPath: string): ResolveResult {
  let htmlPath: string;
  try {
    htmlPath = normalizeHtmlPath(rawPath);
  } catch {
    return { status: "not_found" };
  }

  const redirect = htmlRedirects.find((r) => r.from === htmlPath);
  if (redirect) {
    return { status: "redirect", toHtmlPath: redirect.to, permanent: true };
  }

  if (!isPublicMarkdownPath(htmlPath)) {
    return { status: "not_found" };
  }

  return { status: "ok", path: htmlPath };
}

/**
 * Generate a full Markdown document (front matter + body) for a public HTML path.
 * Returns null if the path is not a public page.
 */
export function generateMarkdownForPath(
  htmlPath: string,
  markdownVariant: "default" | "index" = "default",
): string | null {
  const normalized = normalizeHtmlPath(htmlPath);
  const page = getMarkdownPage(normalized);
  if (!page) return null;

  const body = generateMarkdownBody(page);
  return assembleMarkdownDocument(
    {
      title: page.title,
      site: siteConfig.name,
      domain: getSiteDomain(),
      type: page.type,
      description: page.description,
      canonical: canonicalHtmlUrl(page.path),
      markdown: markdownUrl(page.path, markdownVariant),
    },
    body,
  );
}
