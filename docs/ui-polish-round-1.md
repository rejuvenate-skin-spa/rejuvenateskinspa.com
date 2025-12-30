# UI Polish Round 1

Checklist of improvements for the Rejuvenate Skin Spa website.

---

## Critical Fixes

- [x] `/portfolio` should never error; implement a designed "Coming Soon" placeholder state with an Instagram follow CTA

  **Acceptance Criteria:**
  - Navigating to `/portfolio` renders a styled placeholder page instead of a 404 or error
  - Page includes a "Coming Soon" message with on-brand typography and styling
  - Prominent Instagram follow CTA button linking to the spa's Instagram profile
  - Page uses the same layout wrapper (navigation + footer) as other pages

---

## Navigation/IA

- [x] Remove "Plexr Sales" from top navigation; relocate Plexr link to the footer under "Technology & Certifications"

  **Acceptance Criteria:**
  - "Plexr Sales" no longer appears in the main navigation header
  - Footer contains a new "Technology & Certifications" section (or similar heading)
  - Plexr link is present in the footer under this new section
  - No broken links or orphaned navigation items remain

---

## Visual Polish

- [x] Lighten hero overlays globally (reduce opacity and/or use a left-to-right gradient overlay so text remains readable but imagery is brighter)

  **Acceptance Criteria:**
  - All hero sections across the site have updated overlay styling
  - Background imagery is more visible while maintaining text legibility (WCAG contrast requirements met)
  - Gradient overlay fades from darker on the left (where text sits) to lighter/transparent on the right
  - Consistent overlay treatment across all pages (home, services, about, etc.)

---

## CTA Consistency

- [x] Keep primary CTAs as "Get in Touch" until GoHighLevel booking is integrated

  **Acceptance Criteria:**
  - All primary call-to-action buttons display "Get in Touch" label
  - No "Book Now" or booking-related CTAs appear until GoHighLevel integration is complete
  - "Get in Touch" CTAs link to the contact page or open a contact modal
  - Secondary/informational CTAs (e.g., "Learn More") are unaffected

