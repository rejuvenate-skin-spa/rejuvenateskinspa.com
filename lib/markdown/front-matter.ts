export interface MarkdownFrontMatter {
  title: string;
  site: string;
  domain: string;
  type: string;
  description: string;
  canonical: string;
  markdown: string;
}

function escapeYamlDoubleQuoted(value: string): string {
  return value.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n");
}

/** Build YAML front matter block matching the required mirror schema. */
export function buildFrontMatter(fields: MarkdownFrontMatter): string {
  const lines = [
    "---",
    `title: "${escapeYamlDoubleQuoted(fields.title)}"`,
    `site: "${escapeYamlDoubleQuoted(fields.site)}"`,
    `domain: "${escapeYamlDoubleQuoted(fields.domain)}"`,
    `type: "${escapeYamlDoubleQuoted(fields.type)}"`,
    `description: "${escapeYamlDoubleQuoted(fields.description)}"`,
    `canonical: "${escapeYamlDoubleQuoted(fields.canonical)}"`,
    `markdown: "${escapeYamlDoubleQuoted(fields.markdown)}"`,
    "---",
  ];
  return lines.join("\n");
}

export function assembleMarkdownDocument(
  fields: MarkdownFrontMatter,
  body: string,
): string {
  const trimmedBody = body.replace(/^\n+/, "").replace(/\n+$/, "");
  return `${buildFrontMatter(fields)}\n\n${trimmedBody}\n`;
}
