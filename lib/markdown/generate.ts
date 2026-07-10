import { siteConfig } from "@/lib/site-config";
import { assembleMarkdownDocument } from "./front-matter";
import { generateMarkdownBody } from "./content";
import { htmlPageToMarkdown, fetchPageHtml } from "./from-html";
import { getMarkdownPage, htmlRedirects, isPublicMarkdownPath } from "./registry";
import {
  canonicalHtmlUrl,
  getSiteDomain,
  markdownUrl,
  normalizeHtmlPath,
} from "./urls";
import type { ResolveResult } from "./types";

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

function buildDocument(
  htmlPath: string,
  body: string,
  markdownVariant: "default" | "index",
): string | null {
  const normalized = normalizeHtmlPath(htmlPath);
  const page = getMarkdownPage(normalized);
  if (!page) return null;

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

/**
 * Sync generator using registry/content templates (fallback + unit tests).
 */
export function generateMarkdownForPath(
  htmlPath: string,
  markdownVariant: "default" | "index" = "default",
): string | null {
  const normalized = normalizeHtmlPath(htmlPath);
  const page = getMarkdownPage(normalized);
  if (!page) return null;
  return buildDocument(normalized, generateMarkdownBody(page), markdownVariant);
}

/**
 * Prefer full page content extracted from the rendered HTML <main>.
 * Falls back to registry templates if HTML cannot be fetched/converted.
 */
export async function generateMarkdownForPathAsync(
  htmlPath: string,
  options: {
    origin: string;
    markdownVariant?: "default" | "index";
  },
): Promise<string | null> {
  const normalized = normalizeHtmlPath(htmlPath);
  const page = getMarkdownPage(normalized);
  if (!page) return null;

  const variant = options.markdownVariant ?? "default";
  const html = await fetchPageHtml(options.origin, normalized);

  if (html) {
    const fromHtml = htmlPageToMarkdown(html);
    // Require a real heading + substantial body so we don't ship empty shells
    if (fromHtml.includes("#") && fromHtml.length > 200) {
      return buildDocument(normalized, fromHtml, variant);
    }
  }

  return buildDocument(normalized, generateMarkdownBody(page), variant);
}
