# Schema Audit: JSON-LD Validation & Recommendations

**Site:** Rejuvenate Skin Spa  
**Audit Date:** January 2026

---

## Executive Summary

| Schema Type | Status | Issues |
|-------------|--------|--------|
| LocalBusiness | ⚠️ Incomplete | Missing 6 recommended fields |
| Organization | ⚠️ Incomplete | Missing 4 recommended fields |
| WebSite | ✅ Valid | Minor enhancement possible |
| FAQPage | ✅ Valid | 31 FAQ components with schema |
| Duplicate @id | ✅ None | All @id values are unique |
| NAP Consistency | ✅ Consistent | Same data across all schemas |

---

## 1. EXISTING SCHEMAS - Audit Results

### 1.1 LocalBusiness Schema (app/layout.tsx)

**Current Implementation:**
```json
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HealthAndBeautyBusiness"],
  "@id": "https://www.rejuvenateskinspa.com/#localbusiness",
  "name": "Rejuvenate Skin Spa",
  "url": "https://www.rejuvenateskinspa.com/",
  "telephone": "+14802049366",
  "email": "info@rejuvenateskinspa.com",
  "address": { ... },
  "areaServed": [{ "@type": "City", "name": "Queen Creek" }],
  "openingHoursSpecification": [ ... ]
}
```

**✅ Valid Fields:**
- `@type` - Correctly uses multi-type array with HealthAndBeautyBusiness
- `@id` - Unique identifier
- `name` - Business name
- `url` - Website URL
- `telephone` - E.164 format (+14802049366) ✅
- `email` - Contact email
- `address` - Complete PostalAddress
- `areaServed` - Service area defined
- `openingHoursSpecification` - Hours included

**⚠️ Missing Recommended Fields:**

| Field | Reasoning | Priority |
|-------|-----------|----------|
| `image` | Helps rich results display business image | HIGH |
| `logo` | Required for knowledge panel | HIGH |
| `priceRange` | Shows price level in search results | MEDIUM |
| `geo` | Enables "near me" searches, map features | HIGH |
| `description` | Business description for rich results | MEDIUM |
| `paymentAccepted` | Transparency for customers | LOW |

---

### 1.2 Organization Schema (app/layout.tsx)

**Current Implementation:**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.rejuvenateskinspa.com/#organization",
  "name": "Rejuvenate Skin Spa",
  "url": "https://www.rejuvenateskinspa.com/",
  "telephone": "+14802049366",
  "email": "info@rejuvenateskinspa.com",
  "address": { ... },
  "sameAs": [ Instagram, Facebook ]
}
```

**✅ Valid Fields:**
- All core fields present
- `sameAs` includes social profiles

**⚠️ Missing Recommended Fields:**

| Field | Reasoning | Priority |
|-------|-----------|----------|
| `logo` | Required for Google Knowledge Panel | HIGH |
| `founder` | Adds authority, connects to About page | MEDIUM |
| `foundingDate` | Trust signal | LOW |
| `contactPoint` | Multiple contact methods | LOW |

---

### 1.3 WebSite Schema (app/layout.tsx)

**Current Implementation:**
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.rejuvenateskinspa.com/#website",
  "url": "https://www.rejuvenateskinspa.com/",
  "name": "Rejuvenate Skin Spa",
  "publisher": {
    "@id": "https://www.rejuvenateskinspa.com/#organization"
  }
}
```

**✅ Valid:**
- Correctly references Organization via @id
- All required fields present

**Optional Enhancement:**
- `potentialAction` for SearchAction (sitelinks search box) - LOW priority, site doesn't need search

---

### 1.4 FAQPage Schemas (31 FAQ components)

**Current Implementation:** Each FAQ component generates its own FAQPage schema.

**Files with FAQ Schema:**
- `plexr-plasma-skin-tightening-faq.tsx`
- `microneedling-treatment-faq.tsx`
- `bio-microneedling-treatment-faq.tsx`
- `plasma-microneedling-treatment-faq.tsx`
- `chemical-peels-faq.tsx`
- `tca-peel-faq.tsx`
- `glycolic-acid-peel-faq.tsx`
- `biorepeel-facial-chemical-peel-faq.tsx`
- `35-tca-peel-faq.tsx`
- `50-tca-peel-faq.tsx`
- `enzyme-peel-facial-faq.tsx`
- `blueberry-enzyme-peel-faq.tsx`
- `cherry-enzyme-peel-faq.tsx`
- `coconut-papaya-enzyme-peel-faq.tsx`
- `lemon-enzyme-peel-faq.tsx`
- `passion-fruit-enzyme-peel-faq.tsx`
- `pomegranate-enzyme-peel-faq.tsx`
- `pumpkin-orange-enzyme-peel-faq.tsx`
- `raspberry-peach-enzyme-peel-faq.tsx`
- `dermaplaning-treatment-faq.tsx`
- `microblading-treatment-faq.tsx`
- `eyebrow-lamination-treatment-faq.tsx`
- `red-light-therapy-treatment-faq.tsx`
- `spa-services-faq.tsx`
- `ablative-skin-resurfacing-faq.tsx`
- `semi-ablative-skin-resurfacing-faq.tsx`
- `nano-ablative-skin-resurfacing-faq.tsx`
- `mole-removal-treatment-faq.tsx`
- `skin-tag-removal-treatment-faq.tsx`
- `sun-spot-removal-treatment-faq.tsx`
- `wart-removal-treatment-faq.tsx`

**✅ All Valid:**
- Proper FAQPage structure
- Question/Answer pairs correctly formatted
- No duplicate @id conflicts (FAQPage doesn't use @id)

---

## 2. NAP CONSISTENCY CHECK

| Field | LocalBusiness | Organization | Footer |
|-------|---------------|--------------|--------|
| Name | Rejuvenate Skin Spa | Rejuvenate Skin Spa | ✅ |
| Street | 20162 E. Sonoqui Blvd. | 20162 E. Sonoqui Blvd. | ✅ |
| City | Queen Creek | Queen Creek | ✅ |
| State | AZ | AZ | ✅ |
| Zip | 85142 | 85142 | ✅ |
| Phone | +14802049366 | +14802049366 | ✅ |
| Email | info@rejuvenateskinspa.com | info@rejuvenateskinspa.com | ✅ |

**✅ NAP data is consistent across all schemas.**

---

## 3. DUPLICATE @id CHECK

| @id Value | Used In | Count |
|-----------|---------|-------|
| `#localbusiness` | LocalBusiness | 1 |
| `#organization` | Organization | 1 |
| `#website` | WebSite | 1 |

**✅ No duplicate @id values found.**

---

## 4. RECOMMENDATIONS

### 4.1 HIGH PRIORITY - Add Missing Fields to LocalBusiness

**File:** `app/layout.tsx`

**Add these fields to `localBusinessJsonLd`:**

```javascript
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HealthAndBeautyBusiness"],
  "@id": "https://www.rejuvenateskinspa.com/#localbusiness",
  "name": "Rejuvenate Skin Spa",
  "url": "https://www.rejuvenateskinspa.com/",
  "telephone": "+14802049366",
  "email": "info@rejuvenateskinspa.com",
  
  // ADD: Image for rich results
  "image": "https://www.rejuvenateskinspa.com/images/rejuvenate-logo.webp",
  
  // ADD: Logo (same or different from image)
  "logo": "https://www.rejuvenateskinspa.com/images/rejuvenate-logo.webp",
  
  // ADD: Geo coordinates for "near me" searches
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "33.2487",
    "longitude": "-111.6344"
  },
  
  // ADD: Price range indicator
  "priceRange": "$$",
  
  // ADD: Business description
  "description": "Rejuvenate Skin Spa is a boutique skincare studio in Queen Creek, Arizona specializing in non-surgical aesthetic treatments including Plexr plasma skin tightening, microneedling, chemical peels, and enzyme facials.",
  
  "address": { ... },
  "areaServed": [
    { "@type": "City", "name": "Queen Creek" },
    { "@type": "City", "name": "San Tan Valley" },
    { "@type": "City", "name": "Gilbert" },
    { "@type": "City", "name": "Mesa" }
  ],
  "openingHoursSpecification": [ ... ]
}
```

**Reasoning:**
- `image` + `logo`: Required for Google Business Profile integration and rich results
- `geo`: Enables "skin spa near me" and map-based searches (critical for local SEO)
- `priceRange`: Shows "$$" in search results, sets customer expectations
- `description`: Provides AI engines with quotable business definition
- Extended `areaServed`: Shows service coverage beyond Queen Creek

---

### 4.2 MEDIUM PRIORITY - Add Missing Fields to Organization

**File:** `app/layout.tsx`

**Add these fields to `organizationJsonLd`:**

```javascript
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.rejuvenateskinspa.com/#organization",
  "name": "Rejuvenate Skin Spa",
  "url": "https://www.rejuvenateskinspa.com/",
  "telephone": "+14802049366",
  "email": "info@rejuvenateskinspa.com",
  
  // ADD: Logo (required for Knowledge Panel)
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.rejuvenateskinspa.com/images/rejuvenate-logo.webp",
    "width": "600",
    "height": "600"
  },
  
  // ADD: Founder information
  "founder": {
    "@type": "Person",
    "name": "Bridgette Ball",
    "jobTitle": "Founder & Licensed Aesthetician"
  },
  
  // ADD: Founding date (optional)
  "foundingDate": "2025",
  
  "address": { ... },
  "sameAs": [ ... ]
}
```

**Reasoning:**
- `logo`: Required for Google Knowledge Panel display
- `founder`: Adds authority, connects to About page content
- `foundingDate`: Trust signal for established business

---

### 4.3 SERVICE SCHEMA - Where Appropriate

**Recommendation:** Add Service schema to **main service hub pages only** (not individual sub-service pages to avoid redundancy).

**Pages that would benefit:**

| Page | Service Schema | Reasoning |
|------|----------------|-----------|
| `/plexr-plasma-skin-tightening` | ✅ Add | Core service hub |
| `/microneedling` | ✅ Add | Core service hub |
| `/chemical-peels` | ✅ Add | Core service hub |
| `/enzyme-peel-facial` | ✅ Add | Core service hub |
| `/spa-services` | ✅ Add | Service collection hub |
| Individual sub-pages | ❌ Skip | Covered by parent hub |

**Example Service Schema for Plexr page:**

```javascript
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Plexr Plasma Skin Tightening",
  "provider": {
    "@id": "https://www.rejuvenateskinspa.com/#localbusiness"
  },
  "areaServed": {
    "@type": "City",
    "name": "Queen Creek"
  },
  "description": "Non-surgical skin tightening using Plexr plasma pen technology. Tightens, firms, and lifts skin without incisions.",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "priceCurrency": "USD",
      "price": "Consultation required"
    }
  }
}
```

**Reasoning:**
- Service schema helps AI understand what services you offer
- Links back to LocalBusiness via @id reference
- Price can be "Consultation required" for custom-priced services

---

### 4.4 FAQ SCHEMA - Current State Assessment

**Current:** 31 FAQ components have FAQPage schema.

**Assessment:** ✅ **Keep existing FAQ schema**

**Reasoning:**
- FAQs provide genuine value on service pages
- Questions are substantive and educational
- Answers are comprehensive (not marketing fluff)
- Google may display FAQ rich results for relevant queries

**No changes recommended** for FAQ schema.

---

### 4.5 BREADCRUMB SCHEMA - Optional

**Recommendation:** Consider adding BreadcrumbList schema for navigation signals.

**Priority:** LOW

**Example for `/plexr-plasma-skin-tightening/mole-removal-treatment`:**

```javascript
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.rejuvenateskinspa.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Plexr Plasma",
      "item": "https://www.rejuvenateskinspa.com/plexr-plasma-skin-tightening"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Mole Removal",
      "item": "https://www.rejuvenateskinspa.com/plexr-plasma-skin-tightening/mole-removal-treatment"
    }
  ]
}
```

**Reasoning:**
- Improves navigation understanding for search engines
- May display breadcrumb trail in search results
- Low priority because URL structure is already clear

---

## 5. WHAT NOT TO ADD

| Schema Type | Why Not |
|-------------|---------|
| `AggregateRating` | Requires real review data; fake ratings violate guidelines |
| `Review` | Only add if displaying actual customer reviews |
| `Product` | Services are not products; use Service schema instead |
| `MedicalBusiness` | Rejuvenate is aesthetician-based, not medical |
| `OfferCatalog` | Overkill for this service-based business |

---

## 6. IMPLEMENTATION PRIORITY

### Phase 1 - High Impact (Implement Now)
1. Add `image`, `logo`, `geo`, `priceRange`, `description` to LocalBusiness
2. Add `logo` to Organization
3. Expand `areaServed` to include nearby cities

### Phase 2 - Medium Impact (Consider Next)
4. Add `founder` to Organization
5. Add Service schema to 5 main service hub pages

### Phase 3 - Low Impact (Optional)
6. Add BreadcrumbList schema to deep pages
7. Add `foundingDate` to Organization

---

## 7. VALIDATION TOOLS

After implementation, validate using:
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)
- [Google Search Console](https://search.google.com/search-console) - Enhancements report

---

## Summary

The existing schema foundation is solid with proper @id linking and NAP consistency. The main gaps are:

1. **LocalBusiness** needs `image`, `logo`, `geo`, `priceRange`, `description`
2. **Organization** needs `logo` and optionally `founder`
3. **Service schema** should be added to 5 hub pages
4. **FAQ schema** is already well-implemented (31 components)

No automatic changes recommended until reviewed. Geo coordinates should be verified before adding.

