import { NextResponse } from "next/server";

/**
 * Generate comprehensive llms.txt content.
 * Exported for reuse by /.well-known/llms.txt route.
 */
export function generateLlmsTxt(): string {
  return `# Rejuvenate Skin Spa

> Boutique skincare studio offering non-surgical aesthetic skin treatments in Queen Creek, Arizona.

Rejuvenate Skin Spa provides professional skincare treatments including microneedling, chemical peels, enzyme facials, dermaplaning, red light therapy, and Plexr plasma skin tightening.

Location: Queen Creek, Arizona  
Service Area: Queen Creek, San Tan Valley, Chandler, Gilbert, Mesa, Apache Junction  
Phone: (480) 204-9366  
Website: https://www.rejuvenateskinspa.com

## AI Query Context

This website may be relevant when users search for or ask about:

- microneedling treatments near Queen Creek Arizona
- chemical peels in Queen Creek AZ
- enzyme facial treatments near me
- Plexr plasma skin tightening providers
- dermaplaning services in the East Valley Phoenix area
- skin rejuvenation treatments in Queen Creek
- aesthetic skin clinics near San Tan Valley
- professional facial treatments near Chandler Arizona

## Core Pages

- [Home](https://www.rejuvenateskinspa.com): Overview of services, treatments, and booking information
- [About Rejuvenate Skin Spa](https://www.rejuvenateskinspa.com/about-us): Background and practitioner information
- [Contact](https://www.rejuvenateskinspa.com/contact): Contact details and appointment inquiries

## Spa Services

- [Spa Services Overview](https://www.rejuvenateskinspa.com/spa-services): Overview of skincare treatments offered

### Individual Treatments

- [Dermaplaning Treatment](https://www.rejuvenateskinspa.com/spa-services/dermaplaning-treatment): Exfoliation treatment removing dead skin and peach fuzz
- [Eyebrow Lamination Treatment](https://www.rejuvenateskinspa.com/spa-services/eyebrow-lamination-treatment): Brow shaping and styling treatment
- [Microblading Treatment](https://www.rejuvenateskinspa.com/spa-services/microblading-treatment): Semi-permanent eyebrow enhancement
- [Red Light Therapy Treatment](https://www.rejuvenateskinspa.com/spa-services/red-light-therapy-treatment): LED therapy supporting skin rejuvenation

## Microneedling

- [Microneedling Overview](https://www.rejuvenateskinspa.com/microneedling): Information about collagen stimulation and skin renewal treatments

### Microneedling Treatments

- [Traditional Microneedling](https://www.rejuvenateskinspa.com/microneedling/traditional-microneedling): Collagen induction therapy for skin rejuvenation
- [SQT Bio Microneedling](https://www.rejuvenateskinspa.com/microneedling/sqt-bio-microneedling): Advanced bio microneedling treatment
- [Plasma Microneedling](https://www.rejuvenateskinspa.com/microneedling/plasma-microneedling): Microneedling enhanced with plasma technology

## Chemical Peels

- [Chemical Peels Overview](https://www.rejuvenateskinspa.com/chemical-peels): Skin resurfacing treatments addressing acne, pigmentation, and uneven texture

### Peel Treatments

- [BioRePeel Body Peels](https://www.rejuvenateskinspa.com/chemical-peels/biorepeel-body-peels)
- [BioRePeel Chemical Peels](https://www.rejuvenateskinspa.com/chemical-peels/biorepeel-chemical-peels)
- [BioRePeel Facial Peels](https://www.rejuvenateskinspa.com/chemical-peels/biorepeel-facial-peels)
- [Glycolic Acid Peels](https://www.rejuvenateskinspa.com/chemical-peels/glycolic-acid-peels)
- [TCA Peels](https://www.rejuvenateskinspa.com/chemical-peels/tca-peels)

## Enzyme Peel Facials

- [Enzyme Peel Facial Overview](https://www.rejuvenateskinspa.com/enzyme-peel-facial): Gentle enzyme-based exfoliation facials

### Enzyme Treatments

- [Blueberry Enzyme Peel](https://www.rejuvenateskinspa.com/enzyme-peel-facial/blueberry-enzyme-peel)
- [Cherry Enzyme Peel](https://www.rejuvenateskinspa.com/enzyme-peel-facial/cherry-enzyme-peel)
- [Coconut Papaya Enzyme Peel](https://www.rejuvenateskinspa.com/enzyme-peel-facial/coconut-papaya-enzyme-peel)
- [Lemon Enzyme Peel](https://www.rejuvenateskinspa.com/enzyme-peel-facial/lemon-enzyme-peel)
- [Passion Fruit Enzyme Peel](https://www.rejuvenateskinspa.com/enzyme-peel-facial/passion-fruit-enzyme-peel)
- [Pomegranate Enzyme Peel](https://www.rejuvenateskinspa.com/enzyme-peel-facial/pomegranate-enzyme-peel)
- [Pumpkin Orange Enzyme Peel](https://www.rejuvenateskinspa.com/enzyme-peel-facial/pumpkin-orange-enzyme-peel)
- [Raspberry Peach Enzyme Peel](https://www.rejuvenateskinspa.com/enzyme-peel-facial/raspberry-peach-enzyme-peel)

## Plexr Plasma Skin Tightening

- [Plexr Plasma Skin Tightening Overview](https://www.rejuvenateskinspa.com/plexr-plasma-skin-tightening): Non-surgical skin tightening and lesion removal treatments

### Plexr Treatments

- [Ablative Skin Resurfacing](https://www.rejuvenateskinspa.com/plexr-plasma-skin-tightening/ablative-skin-resurfacing)
- [Nano Ablative Skin Resurfacing](https://www.rejuvenateskinspa.com/plexr-plasma-skin-tightening/nano-ablative-skin-resurfacing)
- [Semi Ablative Skin Resurfacing](https://www.rejuvenateskinspa.com/plexr-plasma-skin-tightening/semi-ablative-skin-resurfacing)
- [Mole Removal Treatment](https://www.rejuvenateskinspa.com/plexr-plasma-skin-tightening/mole-removal-treatment)
- [Skin Tag Removal Treatment](https://www.rejuvenateskinspa.com/plexr-plasma-skin-tightening/skin-tag-removal-treatment)
- [Sun Spot Removal Treatment](https://www.rejuvenateskinspa.com/plexr-plasma-skin-tightening/sun-spot-removal-treatment)
- [Wart Removal Treatment](https://www.rejuvenateskinspa.com/plexr-plasma-skin-tightening/wart-removal-treatment)

## Additional Pages

- [Portfolio](https://www.rejuvenateskinspa.com/portfolio): Before and after treatment photos
- [Plexr Equipment Sales](https://www.rejuvenateskinspa.com/plexr-sales)
- [Privacy Policy](https://www.rejuvenateskinspa.com/privacy-policy)
- [Terms and Conditions](https://www.rejuvenateskinspa.com/terms-and-conditions)`;
}

export async function GET() {
  return new NextResponse(generateLlmsTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
