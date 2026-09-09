const sharp = require('sharp');
const fs = require('fs');

async function makeTransparentCutout() {
  const inputPath = './src/assets/images/hero_cutout_neon_man_1788979435796.jpg';
  const { data, info } = await sharp(inputPath)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const w = info.width;
  const h = info.height;
  const channels = info.channels;

  // We want to create an RGBA buffer
  const rgba = Buffer.alloc(w * h * 4);

  // 1. Calculate luminance for each pixel
  const lum = new Float32Array(w * h);
  for (let i = 0; i < w * h; i++) {
    const r = data[i * channels];
    const g = data[i * channels + 1];
    const b = data[i * channels + 2];
    lum[i] = 0.299 * r + 0.587 * g + 0.114 * b;
  }

  // 2. Identify the character and neon ring bounding region
  // In the center and lower-center is the man; behind him is the neon ring.
  // BFS from edges: any pixel reachable from the border with low luminance (< 12) is definitely external background.
  const isBg = new Uint8Array(w * h); // 0 = unknown, 1 = background, 2 = object
  const queue = [];

  // Seed borders
  for (let x = 0; x < w; x++) {
    queue.push(0 * w + x);
    queue.push((h - 1) * w + x);
  }
  for (let y = 0; y < h; y++) {
    queue.push(y * w + 0);
    queue.push(y * w + (w - 1));
  }

  // Threshold: background is near black. Outer edges have lum < 15
  for (const idx of queue) {
    if (lum[idx] < 20) {
      isBg[idx] = 1;
    }
  }

  let head = 0;
  while (head < queue.length) {
    const curr = queue[head++];
    const cx = curr % w;
    const cy = Math.floor(curr / w);

    // Neighbors
    const neighbors = [];
    if (cx > 0) neighbors.push(curr - 1);
    if (cx < w - 1) neighbors.push(curr + 1);
    if (cy > 0) neighbors.push(curr - w);
    if (cy < h - 1) neighbors.push(curr + w);

    for (const n of neighbors) {
      if (isBg[n] === 0) {
        // If it's dark, it's background
        if (lum[n] < 16) {
          isBg[n] = 1;
          queue.push(n);
        }
      }
    }
  }

  // Now compute distance from background for smooth anti-aliased edge
  // For pixels marked background, alpha is 0
  // For pixels not background, alpha is determined by luminance or distance
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = y * w + x;
      const srcIdx = idx * channels;
      const dstIdx = idx * 4;

      const r = data[srcIdx];
      const g = data[srcIdx + 1];
      const b = data[srcIdx + 2];
      const l = lum[idx];

      rgba[dstIdx] = r;
      rgba[dstIdx + 1] = g;
      rgba[dstIdx + 2] = b;

      if (isBg[idx] === 1) {
        rgba[dstIdx + 3] = 0; // completely transparent
      } else {
        // Non-background pixel
        let alpha = 255;

        // If luminance is very low (< 25), smoothly ramp alpha
        if (l < 25) {
          alpha = Math.round(((l - 5) / 20) * 255);
          if (alpha < 0) alpha = 0;
          if (alpha > 255) alpha = 255;
        }

        // Bottom fade: smoothly fade out bottom 10% of image (y > h * 0.90) so character melts into scene
        if (y > h * 0.88) {
          const fadeProgress = (y - h * 0.88) / (h * 0.12);
          alpha = Math.round(alpha * (1 - fadeProgress));
        }

        rgba[dstIdx + 3] = alpha;
      }
    }
  }

  // Save as high quality PNG
  await sharp(rgba, {
    raw: {
      width: w,
      height: h,
      channels: 4,
    }
  })
  .png({ compressionLevel: 8 })
  .toFile('public/hero-character.png');

  console.log('Successfully generated public/hero-character.png');
}

makeTransparentCutout();
