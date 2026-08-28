import sharp from "sharp";
import path from "node:path";

const src = path.resolve("public/images/branding/logo.jpeg");
const dest = path.resolve("public/images/branding/logo.png");

const image = sharp(src).ensureAlpha();
const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;

for (let i = 0; i < width * height; i++) {
  const idx = i * channels;
  const r = data[idx];
  const g = data[idx + 1];
  const b = data[idx + 2];
  // Background is near-pure white; alpha falls off as pixels approach white,
  // so anti-aliased edges fade out smoothly instead of leaving a white fringe.
  const whiteness = Math.min(r, g, b);
  const alpha = 255 - whiteness;
  data[idx + 3] = alpha;
}

await sharp(data, { raw: { width, height, channels } })
  .png()
  .toFile(dest);

console.log(`Wrote ${dest}`);
