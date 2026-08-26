import sharp from "sharp";

const CREAM = "#fdf3e0";

// mozjpeg at q85 is the sweet spot: comfortably under WhatsApp's 500KB
// link-preview cap with no visible quality loss (verified against the
// largest legacy episode OG images, see issue #44). Flatten first since
// source PNGs can carry an alpha channel JPEG can't.
export async function toCompressedJpeg(pngBuffer) {
  return sharp(pngBuffer).flatten({ background: CREAM }).jpeg({ quality: 85, mozjpeg: true }).toBuffer();
}
