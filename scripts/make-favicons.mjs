import sharp from "sharp";
import path from "node:path";

const logo = path.resolve("public/images/branding/logo.png");

async function squareIcon(size, outPath, padPercent) {
  const inner = Math.round(size * (1 - padPercent * 2));
  const logoBuf = await sharp(logo).resize(inner, inner, { fit: "contain" }).toBuffer();
  await sharp({
    create: { width: size, height: size, channels: 4, background: "#ffffff" },
  })
    .composite([{ input: logoBuf, gravity: "center" }])
    .png()
    .toFile(outPath);
}

await squareIcon(32, path.resolve("app/icon.png"), 0.08);
await squareIcon(180, path.resolve("app/apple-icon.png"), 0.14);
console.log("Wrote app/icon.png and app/apple-icon.png");
