import { canonicalHtmlUrl, markdownUrl } from "./urls";

/** HTTP headers required for Markdown mirror responses. */
export function buildMarkdownResponseHeaders(htmlPath: string): HeadersInit {
  const canonical = canonicalHtmlUrl(htmlPath);
  const alternate = markdownUrl(htmlPath);

  return {
    "Content-Type": "text/markdown; charset=utf-8",
    "X-Robots-Tag": "noindex, follow",
    Link: `<${canonical}>; rel="canonical", <${alternate}>; rel="alternate"; type="text/markdown"`,
    "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
  };
}

/** Link header value for HTML pages pointing at their Markdown alternate. */
export function buildHtmlMarkdownAlternateHeader(htmlPath: string): string {
  const alternate = markdownUrl(htmlPath);
  return `<${alternate}>; rel="alternate"; type="text/markdown"; title="Markdown version"`;
}
