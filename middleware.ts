import { NextRequest, NextResponse } from "next/server";
import { markdownPathToHtmlPath } from "@/lib/markdown/urls";
import { isPublicMarkdownPath } from "@/lib/markdown/registry";

/**
 * Rewrite public `*.md` requests to the Markdown mirror API.
 * Also stamps HTML requests with the current pathname for alternate link tags.
 *
 * Note: path is passed via request headers because Next.js middleware rewrites
 * can drop query string parameters on App Router API destinations.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Never interfere with the mirror API itself or Next internals
  if (
    pathname.startsWith("/api/markdown") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon")
  ) {
    return NextResponse.next();
  }

  // Real static Markdown files in /public (not page mirrors)
  if (pathname === "/sitemap.md") {
    return NextResponse.next();
  }

  const isMarkdownRequest =
    pathname === "/.md" ||
    pathname === "/index.md" ||
    (pathname.endsWith(".md") && pathname.length > 3);

  if (isMarkdownRequest) {
    // Skip recursive HTML fetches used to build Markdown mirrors
    if (request.headers.get("x-markdown-mirror-fetch") === "1") {
      return NextResponse.next();
    }

    let htmlPath: string;
    try {
      htmlPath = markdownPathToHtmlPath(pathname);
    } catch {
      return new NextResponse("Not Found\n", {
        status: 404,
        headers: {
          "Content-Type": "text/markdown; charset=utf-8",
          "X-Robots-Tag": "noindex, follow",
        },
      });
    }

    const rewriteUrl = request.nextUrl.clone();
    rewriteUrl.pathname = "/api/markdown";
    rewriteUrl.search = "";

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-markdown-path", htmlPath || "/");
    if (pathname === "/index.md") {
      requestHeaders.set("x-markdown-variant", "index");
    }

    return NextResponse.rewrite(rewriteUrl, {
      request: { headers: requestHeaders },
    });
  }

  // HTML pages: expose pathname for Markdown alternate <link> in the root layout
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", pathname);

  const normalized =
    pathname === "/"
      ? ""
      : pathname.endsWith("/")
        ? pathname.slice(0, -1)
        : pathname;

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });

  if (isPublicMarkdownPath(normalized === "/" ? "" : normalized)) {
    const origin = request.nextUrl.origin;
    const mdPath =
      normalized === "" || normalized === "/" ? "/.md" : `${normalized}.md`;
    response.headers.append(
      "Link",
      `<${origin}${mdPath}>; rel="alternate"; type="text/markdown"; title="Markdown version"`,
    );
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|.*\\.(?:png|jpg|jpeg|gif|webp|avif|svg|ico|css|js|map|txt|xml|webmanifest)$).*)",
    "/.md",
    "/index.md",
  ],
};
