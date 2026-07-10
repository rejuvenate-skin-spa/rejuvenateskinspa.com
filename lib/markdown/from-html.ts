import { parse, type HTMLElement, type Node as HtmlNode } from "node-html-parser";
import { toAbsoluteUrl } from "./urls";

const SKIP_TAGS = new Set([
  "script",
  "style",
  "noscript",
  "svg",
  "iframe",
  "template",
]);

const SKIP_ATTR_SELECTORS = [
  "[aria-hidden='true']",
  "[data-markdown-ignore]",
];

interface FaqEntry {
  question: string;
  answer: string;
}

/**
 * Extract meaningful <main> content from a full HTML page document
 * and convert it to GitHub-flavored Markdown.
 *
 * FAQ accordion answers are client-toggled and absent from SSR HTML, so
 * Q&A pairs are recovered from FAQPage JSON-LD embedded on the page.
 */
export function htmlPageToMarkdown(html: string): string {
  const root = parse(html, {
    blockTextElements: { script: true, style: true },
  });

  // Pull FAQs before scripts are stripped
  const faqs = extractFaqEntries(root);

  const main =
    root.querySelector("main") ?? root.querySelector("article") ?? root.body;

  if (!main) {
    return faqs.length ? formatFaqMarkdown(faqs) : "";
  }

  // Accordion UI only exposes section labels when collapsed — drop it and
  // re-append complete Q&A from JSON-LD below.
  for (const el of main.querySelectorAll("#faq, section#faq, [id='faq']")) {
    el.remove();
  }

  for (const selector of SKIP_ATTR_SELECTORS) {
    for (const el of main.querySelectorAll(selector)) {
      el.remove();
    }
  }

  for (const el of main.querySelectorAll(
    "script, style, noscript, svg, iframe, template",
  )) {
    el.remove();
  }

  for (const el of main.querySelectorAll(
    "[class*='sticky-mobile'], [class*='StickyMobile'], [data-radix-portal]",
  )) {
    el.remove();
  }

  let markdown = serializeNode(main)
    .replace(/\n{3,}/g, "\n\n")
    .replace(/[ \t]+\n/g, "\n")
    .trim();

  if (faqs.length) {
    markdown = `${markdown}\n\n${formatFaqMarkdown(faqs)}`.trim();
  }

  return markdown;
}

function extractFaqEntries(root: HTMLElement): FaqEntry[] {
  const entries: FaqEntry[] = [];
  const seen = new Set<string>();

  for (const script of root.querySelectorAll("script")) {
    const type = (script.getAttribute("type") || "").toLowerCase();
    if (type && type !== "application/ld+json") continue;

    const raw = (script.text || script.innerHTML || "").trim();
    if (!raw || !raw.includes("FAQPage")) continue;

    let data: unknown;
    try {
      data = JSON.parse(raw);
    } catch {
      continue;
    }

    const blocks = Array.isArray(data) ? data : [data];
    for (const block of blocks) {
      if (!block || typeof block !== "object") continue;
      const record = block as Record<string, unknown>;
      const typeValue = record["@type"];
      const isFaqPage =
        typeValue === "FAQPage" ||
        (Array.isArray(typeValue) && typeValue.includes("FAQPage"));
      if (!isFaqPage) continue;

      const entities = record.mainEntity;
      if (!Array.isArray(entities)) continue;

      for (const entity of entities) {
        if (!entity || typeof entity !== "object") continue;
        const item = entity as Record<string, unknown>;
        const question =
          typeof item.name === "string" ? item.name.trim() : "";
        const accepted = item.acceptedAnswer as
          | Record<string, unknown>
          | undefined;
        const answer =
          accepted && typeof accepted.text === "string"
            ? accepted.text.trim()
            : "";

        if (!question || !answer) continue;
        const key = `${question}::${answer}`;
        if (seen.has(key)) continue;
        seen.add(key);
        entries.push({ question, answer });
      }
    }
  }

  return entries;
}

function formatFaqMarkdown(faqs: FaqEntry[]): string {
  const parts = ["## Frequently Asked Questions", ""];

  for (const faq of faqs) {
    parts.push(`### ${faq.question}`, "", formatFaqAnswer(faq.answer), "");
  }

  return parts.join("\n").trim();
}

function formatFaqAnswer(answer: string): string {
  const trimmed = answer.trim();

  // buildFAQPage flattens newlines to spaces, which turns markdown bullets into
  // "- item - item". Restore a proper list when that pattern is present.
  if (/^-\s+/.test(trimmed) && trimmed.includes(" - ")) {
    const items = trimmed
      .split(/\s+-\s+/)
      .map((item, index) => {
        const text = (index === 0 ? item.replace(/^-+\s*/, "") : item).trim();
        return text ? `- ${text}` : "";
      })
      .filter(Boolean);
    if (items.length > 1) {
      return items.join("\n");
    }
  }

  const lines = trimmed.split("\n").map((line) => line.trimEnd());
  if (lines.some((line) => /^\s*-\s+/.test(line))) {
    return lines.join("\n").trim();
  }
  return lines.join("\n\n").trim();
}

function serializeNode(node: HtmlNode): string {
  if (node.nodeType === 3) {
    return collapseWhitespace(node.text || "");
  }

  if (node.nodeType !== 1) {
    return "";
  }

  const el = node as HTMLElement;
  const tag = el.tagName?.toLowerCase?.() ?? "";

  if (!tag || SKIP_TAGS.has(tag)) {
    return "";
  }

  if (tag === "br") {
    return "  \n";
  }

  if (tag === "hr") {
    return "\n\n---\n\n";
  }

  if (tag === "img") {
    const alt = el.getAttribute("alt") || "";
    const src = el.getAttribute("src") || "";
    if (!src || src.startsWith("data:")) return "";
    return `\n\n![${alt}](${toAbsoluteUrl(src)})\n\n`;
  }

  if (tag === "a") {
    const href = el.getAttribute("href") || "";
    const content = serializeChildren(el).trim();
    if (!content) return "";
    if (!href || href.startsWith("javascript:")) return content;
    return `[${content}](${toAbsoluteUrl(href)})`;
  }

  // Keep visible button labels (e.g. non-FAQ CTAs)
  if (tag === "button") {
    const content = serializeChildren(el).trim();
    return content ? `\n\n${content}\n\n` : "";
  }

  if (/^h[1-6]$/.test(tag)) {
    const level = Number(tag[1]);
    const content = serializeChildren(el).trim();
    if (!content) return "";
    return `\n\n${"#".repeat(level)} ${content}\n\n`;
  }

  if (tag === "p") {
    const content = serializeChildren(el).trim();
    if (!content) return "";
    return `\n\n${content}\n\n`;
  }

  if (tag === "blockquote") {
    const content = serializeChildren(el).trim();
    if (!content) return "";
    return `\n\n${content
      .split("\n")
      .map((line) => `> ${line}`)
      .join("\n")}\n\n`;
  }

  if (tag === "ul" || tag === "ol") {
    const items = el.childNodes
      .filter(
        (child) => isElement(child) && child.tagName?.toLowerCase() === "li",
      )
      .map((child, index) => {
        const text = serializeChildren(child as HTMLElement).trim();
        if (!text) return "";
        const prefix = tag === "ol" ? `${index + 1}. ` : "- ";
        return `${prefix}${text.replace(/\n+/g, "\n  ")}`;
      })
      .filter(Boolean);
    if (!items.length) return "";
    return `\n\n${items.join("\n")}\n\n`;
  }

  if (tag === "li") {
    return serializeChildren(el).trim();
  }

  if (tag === "strong" || tag === "b") {
    const content = serializeChildren(el).trim();
    return content ? `**${content}**` : "";
  }

  if (tag === "em" || tag === "i") {
    const content = serializeChildren(el).trim();
    return content ? `*${content}*` : "";
  }

  if (tag === "table") {
    return serializeTable(el);
  }

  return serializeChildren(el);
}

function serializeChildren(el: HTMLElement): string {
  const parts = el.childNodes
    .map((child) => serializeNode(child))
    .filter(Boolean);
  let result = "";
  for (const part of parts) {
    if (!result) {
      result = part;
      continue;
    }
    if (needsSpaceBetween(result, part)) {
      result += " ";
    }
    result += part;
  }
  return result;
}

function needsSpaceBetween(before: string, after: string): boolean {
  if (/\s$/.test(before) || /^\s/.test(after)) return false;
  if (/\n$/.test(before) || /^\n/.test(after)) return false;
  if (/[\[(\*{#_-]$/.test(before) || before.endsWith("/")) return false;
  if (/^[\])}\*,.;:!?_-]/.test(after)) return false;
  return /[\w)\]*.>]$/.test(before) && /^[\w[(#*$]/.test(after);
}

function isElement(node: HtmlNode): node is HTMLElement {
  return node.nodeType === 1;
}

function serializeTable(table: HTMLElement): string {
  const rows = table.querySelectorAll("tr");
  if (!rows.length) return "";

  const parsed = rows.map((row) =>
    row
      .querySelectorAll("th, td")
      .map((cell) => serializeChildren(cell).replace(/\n+/g, " ").trim()),
  );

  const headerHasTh = Boolean(rows[0]?.querySelector("th"));
  const header = headerHasTh
    ? parsed[0]
    : parsed[0]?.map((_, i) => `Column ${i + 1}`);
  const body = headerHasTh ? parsed.slice(1) : parsed;

  if (!header?.length) return "";

  const lines = [
    `| ${header.join(" | ")} |`,
    `| ${header.map(() => "---").join(" | ")} |`,
    ...body.map((cols) => {
      const padded = [...cols];
      while (padded.length < header.length) padded.push("");
      return `| ${padded.slice(0, header.length).join(" | ")} |`;
    }),
  ];

  return `\n\n${lines.join("\n")}\n\n`;
}

function collapseWhitespace(text: string): string {
  return text.replace(/\s+/g, " ");
}

/**
 * Fetch the HTML representation of a public page from the same origin.
 */
export async function fetchPageHtml(
  origin: string,
  htmlPath: string,
): Promise<string | null> {
  const url = htmlPath ? `${origin}${htmlPath}` : `${origin}/`;

  try {
    const response = await fetch(url, {
      headers: {
        Accept: "text/html",
        "x-markdown-mirror-fetch": "1",
      },
      redirect: "follow",
    });

    if (!response.ok) {
      return null;
    }

    const contentType = response.headers.get("content-type") || "";
    if (!contentType.includes("text/html")) {
      return null;
    }

    return await response.text();
  } catch {
    return null;
  }
}
