# SEO Audit: Technical & On-Page

**Site:** Rejuvenate Skin Spa (Next.js App Router)  
**Focus:** Page titles, meta descriptions, H1s, internal linking, local SEO, URL structure

---

## Executive Summary

| Category | Status | Issues |
|----------|--------|--------|
| Page Titles | ⚠️ Needs Work | 8 issues (length, missing brand, inconsistency) |
| Meta Descriptions | ⚠️ Needs Work | 4 issues (length, missing location) |
| H1 Usage | ✅ Good | 1 minor issue |
| Local SEO | ⚠️ Needs Work | 6 titles missing "Queen Creek" |
| Internal Linking | ✅ Good | Recently improved with cross-links |
| Alt Text | ✅ Good | All images have descriptive alt text |
| URL Structure | ✅ Good | Consistent, hierarchical |
| Cannibalization Risk | ⚠️ Monitor | Microneedling hub vs subpages |

---

## 1. PAGE TITLES - Issues & Fixes

### 1.1 Missing "Queen Creek" Location (6 titles)

| File | Current Title | Fix |
|------|---------------|-----|
| `app/microneedling/traditional-microneedling/page.tsx` | "Traditional Microneedling \| Collagen Induction Therapy \| Rejuvenate Skin Spa" | "Traditional Microneedling \| Collagen Induction Therapy \| Queen Creek, AZ" |
| `app/enzyme-peel-facial/blueberry-enzyme-peel/page.tsx` | "Blueberry Enzyme Peel \| Antioxidant Facial Treatment \| Rejuvenate Skin Spa" | "Blueberry Enzyme Peel \| Antioxidant Facial \| Rejuvenate Skin Spa \| Queen Creek, AZ" |
| `app/enzyme-peel-facial/pumpkin-orange-enzyme-peel/page.tsx` | "Pumpkin-Orange Enzyme Peel \| Seasonal Renewal Facial \| Rejuvenate Skin Spa" | "Pumpkin-Orange Enzyme Peel \| Renewal Facial \| Rejuvenate Skin Spa \| Queen Creek, AZ" |
| `app/enzyme-peel-facial/passion-fruit-enzyme-peel/page.tsx` | "Passion Fruit Enzyme Peel \| 30% Glycolic Acid Treatment \| Rejuvenate Skin Spa" | "Passion Fruit Enzyme Peel \| Glycolic Acid \| Rejuvenate Skin Spa \| Queen Creek, AZ" |
| `app/enzyme-peel-facial/lemon-enzyme-peel/page.tsx` | "Lemon Zest Enzyme Peel \| Brightening Treatment for Sun Damage \| Rejuvenate Skin Spa" | "Lemon Enzyme Peel \| Brightening Treatment \| Rejuvenate Skin Spa \| Queen Creek, AZ" |
| `app/enzyme-peel-facial/pomegranate-enzyme-peel/page.tsx` | "Pomegranate Enzyme Peel \| Level 4-5 Antioxidant Renewal \| Rejuvenate Skin Spa" | "Pomegranate Enzyme Peel \| Antioxidant Renewal \| Rejuvenate Skin Spa \| Queen Creek, AZ" |

### 1.2 Titles Too Long (>60 chars, truncated in SERPs)

| File | Current (chars) | Fix |
|------|-----------------|-----|
| `app/spa-services/dermaplaning-treatment/page.tsx` | "Dermaplaning Facial Treatment \| Exfoliation & Peach Fuzz Removal \| Rejuvenate Skin Spa \| Queen Creek, AZ" (103) | "Dermaplaning Facial \| Exfoliation Treatment \| Queen Creek, AZ" (55) |
| `app/spa-services/page.tsx` | "Spa Services \| Dermaplaning, Microblading, Eyebrow Lamination \| Rejuvenate Skin Spa \| Queen Creek, AZ" (97) | "Spa Services \| Dermaplaning, Microblading & More \| Queen Creek, AZ" (60) |
| `app/plexr-plasma-skin-tightening/sun-spot-removal-treatment/page.tsx` | "Sun Spot Removal \| Age Spot Treatment \| Plexr Plasma \| Rejuvenate Skin Spa \| Queen Creek, AZ" (89) | "Sun Spot Removal \| Plexr Plasma Treatment \| Queen Creek, AZ" (55) |

### 1.3 Missing Brand Name

| File | Current Title | Fix |
|------|---------------|-----|
| `app/plexr-plasma-skin-tightening/nano-ablative-skin-resurfacing/page.tsx` | "Nano-Ablative Skin Resurfacing \| Plexr Plasma Treatment \| Queen Creek, AZ" | "Nano-Ablative Resurfacing \| Plexr Plasma \| Rejuvenate Skin Spa \| Queen Creek, AZ" |
| `app/plexr-plasma-skin-tightening/page.tsx` | "Plexr Plasma Skin Tightening \| Non-Surgical Skin Rejuvenation \| Queen Creek, AZ" | "Plexr Plasma Skin Tightening \| Non-Surgical \| Rejuvenate Skin Spa \| Queen Creek, AZ" |

---

## 2. META DESCRIPTIONS - Issues & Fixes

### 2.1 Descriptions Over 160 Characters

| File | Current (chars) | Issue |
|------|-----------------|-------|
| `app/about-us/page.tsx` | 211 chars | Too long, will be truncated |
| `app/contact/page.tsx` | 178 chars | Slightly long |
| `app/enzyme-peel-facial/page.tsx` | 202 chars | Too long |

### 2.2 Weak/Missing CTA in Descriptions

| File | Current | Recommended Addition |
|------|---------|---------------------|
| `app/plexr-plasma-skin-tightening/page.tsx` | "Transform your skin with Plexr Plasma technology..." | Add "Schedule a consultation today." |
| `app/microneedling/page.tsx` | "Explore microneedling options..." | Add "Call (480) 204-9366 to book." |

---

## 3. H1 USAGE - Audit Results

### ✅ All Pages Have Single H1

Every page has exactly one H1 tag. Good structure.

### ⚠️ H1/Title Alignment Issue

| File | Title | H1 | Issue |
|------|-------|-----|-------|
| `app/microneedling/traditional-microneedling/page.tsx` | "Traditional Microneedling \| Collagen Induction Therapy..." | "Traditional Microneedling – Collagen Induction Therapy (CIT)" | Good alignment ✅ |
| `components/plasma-microneedling-treatment-hero.tsx` | (from page.tsx) "Plasma Microneedling \| Plexr Plasma Pen..." | "Plasma Pen Microneedling" | Minor mismatch - consider "Plasma Microneedling" |

---

## 4. CANNIBALIZATION RISK - Microneedling Pages

### Current Structure

```
/microneedling (hub)
  → Title: "Microneedling | Rejuvenate Skin Spa | Queen Creek, AZ"
  → H1: "Microneedling Services in Queen Creek, AZ"
  
/microneedling/traditional-microneedling
  → Title: "Traditional Microneedling | Collagen Induction Therapy..."
  → H1: "Traditional Microneedling – Collagen Induction Therapy (CIT)"
  
/microneedling/sqt-bio-microneedling
  → Title: "SQT Bio-Microneedling | Needle-Free Microneedling..."
  → H1: "SQT Bio Microneedling"
  
/microneedling/plasma-microneedling
  → Title: "Plasma Microneedling | Plexr Plasma Pen..."
  → H1: "Plasma Pen Microneedling"
```

### ✅ Good Differentiation

- Hub focuses on general "microneedling" comparisons
- Subpages target specific treatment types with unique modifiers
- No duplicate targeting

### Recommendation

Ensure hub page targets **comparison intent** ("microneedling options", "types of microneedling") while subpages target **treatment-specific intent**.

---

## 5. LOCAL SEO SIGNALS

### ✅ Strong Signals Present

- JSON-LD LocalBusiness schema in `app/layout.tsx`
- Address: 20162 E. Sonoqui Blvd., Queen Creek, AZ 85142
- Phone: +14802049366
- Business hours specified
- "Queen Creek" in most titles and descriptions

### ⚠️ Missing Local Modifiers in 6 Enzyme Peel Titles

See Section 1.1 above.

### Recommendation

Add service area schema for nearby cities:
- San Tan Valley
- Gilbert
- Mesa
- Chandler

---

## 6. INTERNAL LINKING - Audit Results

### ✅ Recently Improved

Cross-links added between:
- Plexr → Microneedling pages
- Microneedling variants → Hub page
- Service pages → Related treatments

### Suggestion

Add breadcrumb schema to improve navigation signals.

---

## 7. ALT TEXT - Audit Results

### ✅ All Images Have Descriptive Alt Text

No empty alt="" attributes found (except intentional decorative icons).

### Minor Improvements

| File | Current Alt | Suggested |
|------|-------------|-----------|
| `components/footer.tsx` | "Instagram" | "Rejuvenate Skin Spa on Instagram" |
| `components/footer.tsx` | "Facebook" | "Rejuvenate Skin Spa on Facebook" |

---

## 8. URL STRUCTURE - Audit Results

### ✅ Consistent Hierarchical Structure

```
/plexr-plasma-skin-tightening/
  └── nano-ablative-skin-resurfacing/
  └── semi-ablative-skin-resurfacing/
  └── mole-removal-treatment/
  
/microneedling/
  └── traditional-microneedling/
  └── sqt-bio-microneedling/
  └── plasma-microneedling/
  
/chemical-peels/
  └── biorepeel-chemical-peels/
  └── tca-peels/
  └── glycolic-acid-peels/
```

### ✅ No Trailing Slash Issues

Next.js handles consistently.

---

## Priority Fixes

### HIGH PRIORITY (Impact on rankings)

1. **Add "Queen Creek, AZ" to 6 enzyme peel titles** — Local SEO signal
2. **Shorten 3 overly long titles** — Prevents truncation in SERPs
3. **Add brand name to 2 Plexr titles** — Brand consistency

### MEDIUM PRIORITY

4. **Shorten 3 meta descriptions** — Better SERP display
5. **Add CTAs to meta descriptions** — Improve click-through rate
6. **Align H1 on Plasma Microneedling page** — Consistency

### LOW PRIORITY

7. **Improve footer social icon alt text** — Minor accessibility/SEO
8. **Add breadcrumb schema** — Navigation signals

---

## Implementation Checklist

### Titles to Update (8 files)

- [ ] `app/microneedling/traditional-microneedling/page.tsx`
- [ ] `app/enzyme-peel-facial/blueberry-enzyme-peel/page.tsx`
- [ ] `app/enzyme-peel-facial/pumpkin-orange-enzyme-peel/page.tsx`
- [ ] `app/enzyme-peel-facial/passion-fruit-enzyme-peel/page.tsx`
- [ ] `app/enzyme-peel-facial/lemon-enzyme-peel/page.tsx`
- [ ] `app/enzyme-peel-facial/pomegranate-enzyme-peel/page.tsx`
- [ ] `app/spa-services/dermaplaning-treatment/page.tsx`
- [ ] `app/plexr-plasma-skin-tightening/nano-ablative-skin-resurfacing/page.tsx`

### Descriptions to Update (3 files)

- [ ] `app/about-us/page.tsx` — Shorten to <160 chars
- [ ] `app/enzyme-peel-facial/page.tsx` — Shorten to <160 chars
- [ ] `app/contact/page.tsx` — Shorten to <160 chars

### H1 to Align (1 file)

- [ ] `components/plasma-microneedling-treatment-hero.tsx` — Change to "Plasma Microneedling"

