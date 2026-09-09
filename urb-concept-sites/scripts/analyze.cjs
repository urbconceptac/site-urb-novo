const sharp = require('sharp');

async function analyze() {
  const { data, info } = await sharp('./src/assets/images/hero_cutout_neon_man_1788979435796.jpg')
    .raw()
    .toBuffer({ resolveWithObject: true });

  const w = info.width;
  const h = info.height;

  // Let's analyze pixel luminance and color distribution
  let minBrightness = 255;
  let maxBrightness = 0;
  let darkPixelCount = 0;
  let brightPixelCount = 0;

  for (let y = 0; y < h; y += 10) {
    for (let x = 0; x < w; x += 10) {
      const idx = (y * w + x) * info.channels;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      const lum = 0.299 * r + 0.587 * g + 0.114 * b;
      if (lum < minBrightness) minBrightness = lum;
      if (lum > maxBrightness) maxBrightness = lum;
      if (lum < 5) darkPixelCount++;
      else brightPixelCount++;
    }
  }

  console.log(`Min lum: ${minBrightness}, Max lum: ${maxBrightness}`);
  console.log(`Dark (<5): ${darkPixelCount}, Bright (>=5): ${brightPixelCount}`);
}

analyze();
