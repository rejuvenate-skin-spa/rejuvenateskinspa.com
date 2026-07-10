# Markdown Mirror

Dynamic Markdown alternates for every public, indexable HTML page.

## Architecture

```text
Browser request:  /about-us.md
        │
        ▼
 middleware.ts  ── rewrite ──▶  /api/markdown
        │                      (x-markdown-path: /about-us)
        ▼
 lib/markdown/*  resolve → generate front matter + body
        │
        ▼
 text/markdown response + Link / X-Robots-Tag headers
```

Path is passed with the `x-markdown-path` request header because Next.js middleware rewrites can drop query parameters on App Router API routes.

HTML pages keep their existing canonical URLs. The root layout adds:

```html
<link rel="alternate" type="text/markdown" href="https://www.rejuvenateskinspa.com/about-us.md" title="Markdown version" />
```

Middleware also appends a matching HTTP `Link` header on HTML responses.

## Routing

| Request | Behavior |
| --- | --- |
| `/.md` | Homepage Markdown (`markdown` front-matter field uses `/.md`) |
| `/index.md` | Same homepage body (`markdown` field uses `/index.md`) |
| `/about-us.md` | Markdown for `/about-us` |
| `/spa-services/dermaplaning-treatment.md` | Nested service Markdown |
| `/a-nonexistent-page.md` | `404` Markdown response |
| `/about-us/portfolio.md` | `308` → `/portfolio.md` (mirrors HTML redirects) |

`.md` is an alternate representation of an existing page. There is no physical `about-us.md` file on disk.

## URL normalization

All generated URLs use the site’s **non-trailing-slash** format:

- Homepage HTML: `https://www.rejuvenateskinspa.com`
- Homepage Markdown: `https://www.rejuvenateskinspa.com/.md` and `/index.md`
- Other pages: `https://www.rejuvenateskinspa.com/about-us` → `/about-us.md`

Helpers live in `lib/markdown/urls.ts`.

## Front matter

Every Markdown response begins with:

```yaml
---
title: "..."
site: "Rejuvenate Skin Spa"
domain: "www.rejuvenateskinspa.com"
type: "homepage|page|service|category|author|legal"
description: "..."
canonical: "https://www.rejuvenateskinspa.com/about-us"
markdown: "https://www.rejuvenateskinspa.com/about-us.md"
---
```

- `canonical` always points at the HTML page
- `markdown` points at the Markdown alternate
- Metadata is sourced from `lib/markdown/registry.ts` (aligned with page SEO titles/descriptions) plus `lib/site-config.ts`, `lib/services.ts`, and `lib/providers.ts`

## Content generation

Markdown bodies are generated from the **rendered HTML `<main>`** of each page (same SSR content users see), then cleaned of navigation chrome, scripts, and decorative UI. Front matter still comes from `lib/markdown/registry.ts`.

If HTML conversion fails, the mirror falls back to registry templates in `lib/markdown/content.ts`.

Static `/sitemap.md` in `public/` is served as a real file and is not treated as a page mirror.

## Caching

Markdown responses use:

```http
Cache-Control: public, s-maxage=3600, stale-while-revalidate=86400
```

Generation is pure and synchronous from static registries (compatible with static/CDN caching).

## Security

Only paths in `markdownPageRegistry` are served. Path traversal is rejected. API routes, drafts, and admin-style paths return `404`. Secrets and env vars are never included.

## Supporting new content types

1. Add the HTML page under `app/`.
2. Register it in `lib/markdown/registry.ts` (or extend `serviceRegistry` for treatment detail pages).
3. If the page needs custom body copy, add a branch in `lib/markdown/content.ts`.
4. Add/extend a case in `tests/markdown-mirror.test.ts`.

New `serviceRegistry` entries are picked up automatically as `type: "service"` Markdown pages.

## Testing

```bash
pnpm test
```

Automated coverage includes homepage `/.md` vs `/index.md`, nested routes, missing pages, redirects, headers, front matter, and URL normalization.

Manual smoke (with `pnpm dev`):

```bash
curl -sI http://localhost:3000/.md
curl -s http://localhost:3000/index.md | head
curl -sI http://localhost:3000/about-us.md
curl -sI http://localhost:3000/a-nonexistent-page.md
```
