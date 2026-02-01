/**
 * Generate OG image for homepage with logo overlay
 *
 * Usage: node scripts/generate-og-home.mjs
 *
 * Input:  public/images/semi-ablative-resurfacing-hero.png
 * Output: public/og/og-home.jpg (1200x630, < 500KB)
 */

import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const CONFIG = {
  // Input paths
  heroImage: path.join(ROOT, "public/images/semi-ablative-resurfacing-hero.png"),
  logoImage: path.join(ROOT, "public/images/rejuvenate-logo.webp"),

  // Output
  outputPath: path.join(ROOT, "public/og/og-home.jpg"),

  // Dimensions
  width: 1200,
  height: 630,

  // Logo settings
  logoPadding: 48,
  logoWidth: 240, // Target logo width
  badgePadding: 16, // Padding inside the badge
  badgeRadius: 12, // Rounded corner radius
  badgeOpacity: 0.9, // 90% white

  // Quality (tune to stay under 500KB)
  jpegQuality: 82,
};

async function generateOgImage() {
  console.log("Generating OG home image...");

  // 1. Load and resize hero image to 1200x630 (cover crop)
  const heroBuffer = await sharp(CONFIG.heroImage)
    .resize(CONFIG.width, CONFIG.height, {
      fit: "cover",
      position: "center",
    })
    .toBuffer();

  // 2. Create subtle gradient overlay for premium look
  // Dark gradient from left side for text readability
  const gradientSvg = `
    <svg width="${CONFIG.width}" height="${CONFIG.height}">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:rgb(0,0,0);stop-opacity:0.35" />
          <stop offset="50%" style="stop-color:rgb(0,0,0);stop-opacity:0.15" />
          <stop offset="100%" style="stop-color:rgb(0,0,0);stop-opacity:0.05" />
        </linearGradient>
      </defs>
      <rect width="${CONFIG.width}" height="${CONFIG.height}" fill="url(#grad)" />
    </svg>
  `;
  const gradientBuffer = Buffer.from(gradientSvg);

  // 3. Load and resize logo
  const logoMeta = await sharp(CONFIG.logoImage).metadata();
  const logoAspect = logoMeta.width / logoMeta.height;
  const logoHeight = Math.round(CONFIG.logoWidth / logoAspect);

  const logoBuffer = await sharp(CONFIG.logoImage)
    .resize(CONFIG.logoWidth, logoHeight, { fit: "contain" })
    .toBuffer();

  // 4. Create badge background (semi-opaque white rounded rectangle)
  const badgeWidth = CONFIG.logoWidth + CONFIG.badgePadding * 2;
  const badgeHeight = logoHeight + CONFIG.badgePadding * 2;
  const badgeOpacityHex = Math.round(CONFIG.badgeOpacity * 255)
    .toString(16)
    .padStart(2, "0");

  const badgeSvg = `
    <svg width="${badgeWidth}" height="${badgeHeight}">
      <rect 
        x="0" y="0" 
        width="${badgeWidth}" height="${badgeHeight}" 
        rx="${CONFIG.badgeRadius}" ry="${CONFIG.badgeRadius}"
        fill="#ffffff${badgeOpacityHex}"
      />
    </svg>
  `;
  const badgeBuffer = Buffer.from(badgeSvg);

  // 5. Composite badge with logo
  const badgeWithLogo = await sharp(badgeBuffer)
    .composite([
      {
        input: logoBuffer,
        top: CONFIG.badgePadding,
        left: CONFIG.badgePadding,
      },
    ])
    .png()
    .toBuffer();

  // 6. Final composite: hero + gradient + badge with logo
  const finalImage = await sharp(heroBuffer)
    .composite([
      // Subtle gradient overlay
      {
        input: gradientBuffer,
        top: 0,
        left: 0,
        blend: "over",
      },
      // Logo badge in top-left
      {
        input: badgeWithLogo,
        top: CONFIG.logoPadding,
        left: CONFIG.logoPadding,
      },
    ])
    .jpeg({ quality: CONFIG.jpegQuality })
    .toBuffer();

  // 7. Write output
  fs.mkdirSync(path.dirname(CONFIG.outputPath), { recursive: true });
  fs.writeFileSync(CONFIG.outputPath, finalImage);

  // 8. Report results
  const stats = fs.statSync(CONFIG.outputPath);
  const meta = await sharp(CONFIG.outputPath).metadata();

  console.log("\n✅ OG image generated successfully!");
  console.log(`   Path: ${CONFIG.outputPath}`);
  console.log(`   Dimensions: ${meta.width}x${meta.height}`);
  console.log(`   Size: ${(stats.size / 1024).toFixed(1)} KB`);

  if (stats.size > 500 * 1024) {
    console.warn("\n⚠️  Warning: File size exceeds 500KB. Consider lowering jpegQuality.");
  }
}

generateOgImage().catch((err) => {
  console.error("Error generating OG image:", err);
  process.exit(1);
});
