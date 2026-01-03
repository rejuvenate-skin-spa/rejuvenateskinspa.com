# UX / CRO Audit — Rejuvenate Skin Spa

**Date:** January 2026  
**Focus:** Phone CTA visibility, CTA consistency, accessibility, scroll depth optimization

---

## Executive Summary

The site has strong CTA fundamentals—consistent phone-based conversion, clear visual hierarchy, and good mobile tap targets. However, several small, high-impact improvements can increase mobile conversion rates and accessibility compliance.

---

## 1. Phone CTA Visibility on Mobile

### Current State
- ✅ Hero sections display phone number prominently
- ✅ Final CTA sections at bottom of every service page
- ✅ Mobile navigation includes "Get in Touch" button
- ⚠️ No sticky/floating phone CTA during scroll
- ⚠️ Desktop header has no phone CTA visible
- ⚠️ Mobile nav says "Get in Touch" but doesn't show number

### Issues Found

| Issue | File | Impact |
|-------|------|--------|
| No sticky mobile phone CTA | Site-wide | Users must scroll to hero or footer to call |
| Desktop header missing phone | `components/navigation.tsx` | Desktop users have no immediate CTA |
| Mobile nav hides phone number | `components/navigation.tsx` | "Get in Touch" is less clear than showing number |

### Recommendations

**HIGH PRIORITY — Add Sticky Mobile Phone CTA**

Create a floating phone button visible on scroll (mobile only):

```tsx
// components/sticky-phone-cta.tsx (NEW FILE)
"use client";

import { Phone } from "lucide-react";
import { useState, useEffect } from "react";

export function StickyPhoneCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (400px)
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <a
      href="tel:+14802049366"
      aria-label="Call Rejuvenate Skin Spa at (480) 204-9366"
      className="fixed bottom-6 right-6 z-50 lg:hidden bg-sage-600 hover:bg-sage-700 text-white p-4 rounded-full shadow-lg transition-all duration-200"
    >
      <Phone className="h-6 w-6" />
    </a>
  );
}
```

Add to `app/layout.tsx` after `<Footer />`.

**MEDIUM PRIORITY — Add Phone to Desktop Header**

File: `components/navigation.tsx`

After the desktop nav items (line ~243), add:

```tsx
{/* Desktop Phone CTA */}
<a
  href="tel:+14802049366"
  className="hidden lg:flex items-center gap-2 text-sage-600 hover:text-sage-700 font-medium ml-4"
>
  <Phone className="h-4 w-4" />
  (480) 204-9366
</a>
```

**LOW PRIORITY — Show Number in Mobile Nav**

File: `components/navigation.tsx` (line 334-339)

Change from:
```tsx
Get in Touch
```

To:
```tsx
<Phone className="h-5 w-5 mr-2" />
(480) 204-9366
```

---

## 2. CTA Consistency Across Services

### Current State
- ✅ All service pages end with phone CTA section
- ✅ Consistent sage-600 button color throughout
- ✅ Phone icon + number pattern used consistently
- ⚠️ Mixed labeling: "Get in Touch" vs phone number display

### Issues Found

| Issue | Location | Recommendation |
|-------|----------|----------------|
| Inconsistent CTA labels | Mobile nav vs heroes | Standardize on phone number display |
| "Learn More" ambiguity | Homepage service cards | Keep as-is (navigational, not conversion) |

### No Changes Required
The "Learn More" / "View Options" buttons on homepage cards are navigational CTAs leading to service pages—this is correct UX. The phone CTA pattern is otherwise consistent.

---

## 3. Redundant or Confusing CTAs

### Current State
- ✅ Single clear primary action (phone call)
- ✅ Secondary actions are navigational links
- ⚠️ Footer has conditional logic that may confuse

### Issue Found

**Footer Phone Logic (Low Impact)**

File: `components/footer.tsx` (lines 44-50)

Current behavior:
- Mobile + business hours → calls phone
- Otherwise → redirects to /contact

This adds unnecessary friction for desktop users who may want to call. A phone link should always trigger the phone.

**Recommendation:** Remove conditional logic, always use direct tel: link. Users on desktop without calling capability will see system handling (Skype, etc.).

```tsx
// Remove handlePhoneClick function entirely
// Change footer phone link to simple:
<a href="tel:+14802049366" className="...">
```

---

## 4. Scroll Depth and CTA Placement

### Current State
- ✅ Hero CTA visible immediately
- ✅ Final CTA at page bottom
- ⚠️ Long pages have no mid-page CTA (3-4 screen scrolls)

### Analysis

Service pages follow this structure:
1. Hero with phone CTA ✅
2. Overview section (no CTA)
3. Benefits section (no CTA)
4. Treatment details (no CTA)
5. FAQ section (no CTA)
6. Final CTA ✅

On mobile, sections 2-5 can be 4-6 screens of scrolling without a CTA.

### Recommendation

**MEDIUM PRIORITY — Add Inline CTA After Benefits Section**

For longer service pages (enzyme peels, Plexr treatments), add a simple inline CTA after the benefits grid:

```tsx
{/* Inline CTA */}
<div className="text-center mt-8 pt-8 border-t border-gray-200">
  <p className="text-gray-600 mb-3">Questions about this treatment?</p>
  <a
    href="tel:+14802049366"
    className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-700 font-medium"
  >
    <Phone className="h-4 w-4" />
    (480) 204-9366
  </a>
</div>
```

**Affected files (examples):**
- `app/enzyme-peel-facial/blueberry-enzyme-peel/BlueberryEnzymePeelClientPage.tsx`
- `app/plexr-plasma-skin-tightening/ablative-skin-resurfacing/AblativeSkinResurfacingClientPage.tsx`
- Similar pattern for 10+ service pages

**Alternative:** The sticky phone CTA (Recommendation 1) solves this more elegantly with less code change.

---

## 5. Accessibility Issues

### Current State
- ✅ 44px minimum tap targets in navigation
- ✅ aria-labels on social icons
- ✅ aria-labels on Plexr treatment cards
- ⚠️ Phone CTAs lack aria-labels
- ⚠️ Inconsistent tel: format (+1 vs no prefix)
- ⚠️ Form inputs missing mobile-optimized sizing

### Issues Found

| Issue | Files | Fix |
|-------|-------|-----|
| Phone CTAs no aria-label | All phone links | Add `aria-label="Call Rejuvenate Skin Spa"` |
| tel: format inconsistent | `footer.tsx` uses `4802049366`, others use `+14802049366` | Standardize to `+14802049366` |
| Contact form inputs | `app/contact/ContactPageClient.tsx` | Add `min-h-[48px]` to inputs on mobile |

### Recommendations

**HIGH PRIORITY — Add aria-labels to Phone CTAs**

All phone CTAs should include:
```tsx
aria-label="Call Rejuvenate Skin Spa at (480) 204-9366"
```

Files requiring update (pattern search for `tel:`):
- `components/home-hero.tsx`
- `components/phone-cta-button.tsx`
- `components/footer.tsx`
- All hero components
- All client page CTA sections

**MEDIUM PRIORITY — Standardize Phone Format**

File: `components/footer.tsx` (line 74)

Change:
```tsx
href="tel:4802049366"
```

To:
```tsx
href="tel:+14802049366"
```

Also line 335 in `components/navigation.tsx`.

---

## Summary: Prioritized Action Items

### High Priority (High Impact, Low Effort)
1. **Add sticky mobile phone CTA** — Single new component, major mobile conversion lift
2. **Add aria-labels to phone CTAs** — Accessibility compliance, pattern replace

### Medium Priority
3. **Add phone number to desktop header** — Desktop conversion improvement
4. **Standardize tel: format** — Consistency fix
5. **Show phone number in mobile nav** — Clarity improvement

### Low Priority (Nice to Have)
6. **Simplify footer phone logic** — Remove conditional redirect
7. **Add inline mid-page CTAs** — Only if sticky CTA not implemented
8. **Enhance form input sizing** — Minor mobile UX

---

## Files Changed Summary

| Action | File | Priority |
|--------|------|----------|
| Create sticky phone CTA | `components/sticky-phone-cta.tsx` (new) | HIGH |
| Import sticky CTA | `app/layout.tsx` | HIGH |
| Add aria-labels | Multiple (25+ files) | HIGH |
| Add desktop phone | `components/navigation.tsx` | MEDIUM |
| Update mobile nav CTA | `components/navigation.tsx` | MEDIUM |
| Standardize tel format | `components/footer.tsx`, `components/navigation.tsx` | MEDIUM |
| Remove conditional logic | `components/footer.tsx` | LOW |

