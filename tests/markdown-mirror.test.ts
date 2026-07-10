import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  generateMarkdownForPath,
  resolveMarkdownRequest,
} from "../lib/markdown/generate";
import { buildFrontMatter } from "../lib/markdown/front-matter";
import { buildMarkdownResponseHeaders } from "../lib/markdown/headers";
import {
  listMarkdownPaths,
  markdownPageRegistry,
} from "../lib/markdown/registry";
import {
  canonicalHtmlUrl,
  markdownPathToHtmlPath,
  markdownUrl,
  normalizeHtmlPath,
  toAbsoluteUrl,
} from "../lib/markdown/urls";

describe("URL normalization", () => {
  it("normalizes homepage variants", () => {
    assert.equal(normalizeHtmlPath("/"), "");
    assert.equal(normalizeHtmlPath(""), "");
    assert.equal(normalizeHtmlPath("/index"), "");
  });

  it("strips trailing slashes from non-home paths", () => {
    assert.equal(normalizeHtmlPath("/about-us/"), "/about-us");
    assert.equal(normalizeHtmlPath("/blog/post/"), "/blog/post");
  });

  it("rejects path traversal", () => {
    assert.throws(() => normalizeHtmlPath("/../secret"));
  });

  it("maps markdown paths to html paths", () => {
    assert.equal(markdownPathToHtmlPath("/.md"), "");
    assert.equal(markdownPathToHtmlPath("/index.md"), "");
    assert.equal(markdownPathToHtmlPath("/about-us.md"), "/about-us");
    assert.equal(
      markdownPathToHtmlPath("/spa-services/dermaplaning-treatment.md"),
      "/spa-services/dermaplaning-treatment",
    );
  });

  it("builds non-trailing-slash absolute URLs", () => {
    assert.equal(canonicalHtmlUrl(""), "https://www.rejuvenateskinspa.com");
    assert.equal(
      canonicalHtmlUrl("/about-us"),
      "https://www.rejuvenateskinspa.com/about-us",
    );
    assert.equal(markdownUrl(""), "https://www.rejuvenateskinspa.com/.md");
    assert.equal(
      markdownUrl("", "index"),
      "https://www.rejuvenateskinspa.com/index.md",
    );
    assert.equal(
      markdownUrl("/contact"),
      "https://www.rejuvenateskinspa.com/contact.md",
    );
    assert.equal(toAbsoluteUrl("/about-us/"), "https://www.rejuvenateskinspa.com/about-us");
  });
});

describe("route resolution", () => {
  it("resolves public pages", () => {
    assert.deepEqual(resolveMarkdownRequest("/"), { status: "ok", path: "" });
    assert.deepEqual(resolveMarkdownRequest("/contact"), {
      status: "ok",
      path: "/contact",
    });
    assert.deepEqual(
      resolveMarkdownRequest("/microneedling/traditional-microneedling"),
      { status: "ok", path: "/microneedling/traditional-microneedling" },
    );
  });

  it("returns 404 for unknown and private-like paths", () => {
    assert.deepEqual(resolveMarkdownRequest("/a-nonexistent-page"), {
      status: "not_found",
    });
    assert.deepEqual(resolveMarkdownRequest("/api/contact"), {
      status: "not_found",
    });
    assert.deepEqual(resolveMarkdownRequest("/admin"), {
      status: "not_found",
    });
  });

  it("redirects legacy paths", () => {
    assert.deepEqual(resolveMarkdownRequest("/about-us/portfolio"), {
      status: "redirect",
      toHtmlPath: "/portfolio",
      permanent: true,
    });
  });
});

describe("front matter and headers", () => {
  it("emits required YAML fields", () => {
    const yaml = buildFrontMatter({
      title: 'Title with "quotes"',
      site: "Rejuvenate Skin Spa",
      domain: "www.rejuvenateskinspa.com",
      type: "page",
      description: "A description",
      canonical: "https://www.rejuvenateskinspa.com/about-us",
      markdown: "https://www.rejuvenateskinspa.com/about-us.md",
    });

    assert.match(yaml, /^---\n/);
    assert.match(yaml, /title: "Title with \\"quotes\\""/);
    assert.match(yaml, /canonical: "https:\/\/www\.rejuvenateskinspa\.com\/about-us"/);
    assert.match(yaml, /markdown: "https:\/\/www\.rejuvenateskinspa\.com\/about-us\.md"/);
    assert.doesNotMatch(yaml, /canonical: ".*\.md"/);
  });

  it("builds markdown response headers", () => {
    const headers = buildMarkdownResponseHeaders("/about-us") as Record<
      string,
      string
    >;
    assert.equal(headers["Content-Type"], "text/markdown; charset=utf-8");
    assert.equal(headers["X-Robots-Tag"], "noindex, follow");
    assert.match(headers.Link, /rel="canonical"/);
    assert.match(headers.Link, /about-us>; rel="canonical"/);
    assert.match(headers.Link, /about-us\.md>; rel="alternate"; type="text\/markdown"/);
  });
});

describe("markdown generation", () => {
  it("generates identical homepage bodies for /.md and /index.md variants", () => {
    const a = generateMarkdownForPath("", "default");
    const b = generateMarkdownForPath("", "index");
    assert.ok(a && b);

    const bodyA = a.split("---\n").slice(2).join("---\n");
    const bodyB = b.split("---\n").slice(2).join("---\n");
    assert.equal(bodyA, bodyB);

    assert.match(a, /markdown: "https:\/\/www\.rejuvenateskinspa\.com\/\.md"/);
    assert.match(b, /markdown: "https:\/\/www\.rejuvenateskinspa\.com\/index\.md"/);
    assert.match(a, /canonical: "https:\/\/www\.rejuvenateskinspa\.com"/);
    assert.match(a, /type: "homepage"/);
    assert.match(a, /# Rejuvenate Skin Spa/);
  });

  it("includes service pricing and absolute links", () => {
    const md = generateMarkdownForPath(
      "/microneedling/traditional-microneedling",
    );
    assert.ok(md);
    assert.match(md, /type: "service"/);
    assert.match(md, /## Pricing/);
    assert.match(md, /\$199/);
    assert.match(
      md,
      /https:\/\/www\.rejuvenateskinspa\.com\/microneedling\/traditional-microneedling/,
    );
    assert.doesNotMatch(md, /Header|Footer|cookie|gtm/i);
  });

  it("covers nested category and service pages", () => {
    const hub = generateMarkdownForPath("/enzyme-peel-facial");
    const nested = generateMarkdownForPath(
      "/enzyme-peel-facial/blueberry-enzyme-peel",
    );
    assert.ok(hub && nested);
    assert.match(hub, /type: "category"/);
    assert.match(nested, /Blueberry Enzyme Peel/);
    assert.match(hub, /blueberry-enzyme-peel/);
  });

  it("generates markdown for every registered public page", () => {
    const paths = listMarkdownPaths();
    assert.ok(paths.length >= 40);
    for (const path of paths) {
      const md = generateMarkdownForPath(path);
      assert.ok(md, `missing markdown for ${path || "/"}`);
      assert.match(md, /^---\n/);
      assert.match(md, /\n# /);
      assert.doesNotMatch(md, /canonical: ".*\.md"/);
      assert.doesNotMatch(
        md,
        /canonical: "https:\/\/www\.rejuvenateskinspa\.com\/.+\/"/,
      );
    }
  });

  it("registry paths are unique", () => {
    const paths = markdownPageRegistry.map((p) => p.path);
    assert.equal(paths.length, new Set(paths).size);
  });
});
