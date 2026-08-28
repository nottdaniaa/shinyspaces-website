import sharp from "sharp";
import path from "node:path";

const W = 1200;
const H = 630;

const bg = await sharp(path.resolve("public/images/hero/heber-city-living-room.jpg"))
  .resize(W, H, { fit: "cover", position: "right" })
  .toBuffer();

const logo = await sharp(path.resolve("public/images/branding/logo.png"))
  .resize(150)
  .toBuffer();

const overlaySvg = Buffer.from(`
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="fade" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0f3a3a" stop-opacity="0.92"/>
      <stop offset="45%" stop-color="#0f3a3a" stop-opacity="0.75"/>
      <stop offset="75%" stop-color="#0f3a3a" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#0f3a3a" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#fade)"/>
  <text x="70" y="330" font-family="Georgia, 'Times New Roman', serif" font-size="54" font-weight="700" fill="#ffffff">Professional Cleaning</text>
  <text x="70" y="395" font-family="Georgia, 'Times New Roman', serif" font-size="54" font-weight="700" fill="#ffffff">Services in Heber City</text>
  <text x="70" y="450" font-family="Arial, sans-serif" font-size="26" fill="#e8f2f0">Heber City, Midway, Park City &amp; the Heber Valley</text>
</svg>
`);

await sharp(bg)
  .composite([
    { input: overlaySvg, top: 0, left: 0 },
    { input: logo, top: 60, left: 70 },
  ])
  .jpeg({ quality: 85 })
  .toFile(path.resolve("public/images/og-default.jpg"));

console.log("Wrote public/images/og-default.jpg");
