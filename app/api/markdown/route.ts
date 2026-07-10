import { NextRequest, NextResponse } from "next/server";
import {
  generateMarkdownForPathAsync,
  resolveMarkdownRequest,
} from "@/lib/markdown/generate";
import { buildMarkdownResponseHeaders } from "@/lib/markdown/headers";
import { markdownUrl } from "@/lib/markdown/urls";

export const runtime = "nodejs";

function notFoundMarkdown(): NextResponse {
  return new NextResponse("Not Found\n", {
    status: 404,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "X-Robots-Tag": "noindex, follow",
    },
  });
}

export async function GET(request: NextRequest) {
  const pathParam =
    request.headers.get("x-markdown-path") ??
    request.nextUrl.searchParams.get("path");
  const variantParam =
    request.headers.get("x-markdown-variant") ??
    request.nextUrl.searchParams.get("variant");
  const variant = variantParam === "index" ? "index" : "default";

  if (pathParam === null) {
    return notFoundMarkdown();
  }

  const resolved = resolveMarkdownRequest(pathParam);

  if (resolved.status === "not_found") {
    return notFoundMarkdown();
  }

  if (resolved.status === "redirect") {
    const absolute = markdownUrl(resolved.toHtmlPath);
    const destination = new URL(
      new URL(absolute).pathname,
      request.nextUrl.origin,
    ).toString();
    return NextResponse.redirect(destination, resolved.permanent ? 308 : 307);
  }

  const markdown = await generateMarkdownForPathAsync(resolved.path, {
    origin: request.nextUrl.origin,
    markdownVariant: variant,
  });

  if (!markdown) {
    return notFoundMarkdown();
  }

  return new NextResponse(markdown, {
    status: 200,
    headers: buildMarkdownResponseHeaders(resolved.path),
  });
}
