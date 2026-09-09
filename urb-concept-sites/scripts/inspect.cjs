const sharp = require('sharp');

async function check() {
  const { data, info } = await sharp('./src/assets/images/hero_cutout_neon_man_1788979435796.jpg')
    .raw()
    .toBuffer({ resolveWithObject: true });

  console.log('Size:', info.width, 'x', info.height);
  const pts = [
    [0,0], [20,20], [info.width - 20, 20],
    [20, info.height - 20], [info.width - 20, info.height - 20],
    [Math.floor(info.width/2), 20], [20, Math.floor(info.height/2)]
  ];
  for (const [x, y] of pts) {
    const idx = (y * info.width + x) * info.channels;
    console.log(`pt (${x}, ${y}): R=${data[idx]}, G=${data[idx+1]}, B=${data[idx+2]}`);
  }
}

check();
