import { NextResponse } from "next/server";
import { generateLlmsTxt } from "@/app/llms.txt/route";

/**
 * Serve llms.txt at /.well-known/llms.txt
 * Reuses the same generator as /llms.txt for consistency.
 */
export async function GET() {
  return new NextResponse(generateLlmsTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
