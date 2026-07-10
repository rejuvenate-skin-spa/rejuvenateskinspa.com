export type MarkdownPageType =
  | "homepage"
  | "page"
  | "service"
  | "category"
  | "author"
  | "legal";

export interface MarkdownPageDefinition {
  /** Canonical HTML path without trailing slash. Homepage is "". */
  path: string;
  title: string;
  description: string;
  type: MarkdownPageType;
  /** Optional heading override (defaults to a cleaned title). */
  heading?: string;
}

export type ResolveResult =
  | { status: "ok"; path: string }
  | { status: "redirect"; toHtmlPath: string; permanent: boolean }
  | { status: "not_found" };
