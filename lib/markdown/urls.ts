import { siteConfig } from "@/lib/site-config";

/**
 * URL helpers for the Markdown mirror.
 * All public URLs use the site's canonical non-trailing-slash format.
 */

export function getSiteOrigin(): string {
  return siteConfig.url.replace(/\/$/, "");
}

export function getSiteDomain(): string {
  try {
    return new URL(getSiteOrigin()).hostname;
  } catch {
    return "www.rejuvenateskinspa.com";
  }
}

/** Normalize an HTML path: leading slash, no trailing slash (except homepage → ""). */
export function normalizeHtmlPath(input: string): string {
  let path = input.trim();

  if (!path || path === "/" || path === "/index" || path === "/index.html") {
    return "";
  }

  // Strip query/hash if present
  path = path.split("?")[0].split("#")[0];

  // Decode and reject traversal
  try {
    path = decodeURIComponent(path);
  } catch {
    path = input;
  }

  if (path.includes("..") || path.includes("\\") || path.includes("\0")) {
    throw new Error("Invalid path");
  }

  if (!path.startsWith("/")) {
    path = `/${path}`;
  }

  // Remove trailing slash
  if (path.length > 1 && path.endsWith("/")) {
    path = path.slice(0, -1);
  }

  return path;
}

/** Convert a Markdown request pathname to its HTML path. */
export function markdownPathToHtmlPath(markdownPathname: string): string {
  let path = markdownPathname.trim();

  if (path === "/.md" || path === "/index.md") {
    return "";
  }

  if (path.endsWith(".md")) {
    path = path.slice(0, -3);
  }

  return normalizeHtmlPath(path || "/");
}

/** Absolute canonical HTML URL (never a Markdown URL). */
export function canonicalHtmlUrl(htmlPath: string): string {
  const normalized = normalizeHtmlPath(htmlPath);
  const origin = getSiteOrigin();
  return normalized ? `${origin}${normalized}` : origin;
}

/** Absolute Markdown URL for an HTML path. Homepage uses /.md by default. */
export function markdownUrl(
  htmlPath: string,
  variant: "default" | "index" = "default",
): string {
  const normalized = normalizeHtmlPath(htmlPath);
  const origin = getSiteOrigin();

  if (!normalized) {
    return variant === "index" ? `${origin}/index.md` : `${origin}/.md`;
  }

  return `${origin}${normalized}.md`;
}

/** Convert a site-relative or absolute URL to an absolute non-trailing-slash URL. */
export function toAbsoluteUrl(href: string): string {
  if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return href;
  }

  const origin = getSiteOrigin();

  if (href.startsWith("http://") || href.startsWith("https://")) {
    try {
      const url = new URL(href);
      if (url.origin === origin || url.hostname.endsWith("rejuvenateskinspa.com")) {
        let path = url.pathname;
        if (path.length > 1 && path.endsWith("/")) {
          path = path.slice(0, -1);
        }
        return path === "/" || path === "" ? origin : `${origin}${path}`;
      }
      return href;
    } catch {
      return href;
    }
  }

  if (href.startsWith("/")) {
    const normalized = normalizeHtmlPath(href);
    return normalized ? `${origin}${normalized}` : origin;
  }

  return `${origin}/${href.replace(/^\.\//, "")}`;
}
