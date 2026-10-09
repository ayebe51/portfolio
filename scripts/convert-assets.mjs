import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const SOURCEDIR_SIMMACI = 'D:/apss-source/SS porto/simmaci';
const SOURCEDIR_KONEKSI = 'D:/apss-source/SS porto/KoneksiSantri';
const SOURCEDIR_POS = 'D:/apss-source/SS porto/Inventory+POS';

const OUTDIR_BASE = 'public/images/projects';

const mappings = [
  // 1. SIMMACI
  {
    project: 'simmaci',
    source: path.join(SOURCEDIR_SIMMACI, 'screencapture-simmaci-dashboard-2026-10-09-08_23_43.png'),
    output: 'dashboard.webp',
    title: 'SIMMACI Executive Command Center Dashboard',
    sanitize: null,
  },
  {
    project: 'simmaci',
    source: path.join(SOURCEDIR_SIMMACI, 'screencapture-simmaci-dashboard-sk-generator-center-2026-10-09-08_24_24.png'),
    output: 'key-feature.webp',
    title: 'SIMMACI Batch Decree Generator & Approval Workflow',
    sanitize: null,
  },
  {
    project: 'simmaci',
    source: path.join(SOURCEDIR_SIMMACI, 'screencapture-simmaci-dashboard-sk-center-2026-10-09-08_24_02.png'),
    output: 'supporting-view.webp',
    title: 'SIMMACI Centralized Decree Services & Archive Portal',
    sanitize: null,
  },

  // 2. Koneksi Santri
  {
    project: 'koneksi-santri',
    source: path.join(SOURCEDIR_KONEKSI, 'screencapture-admin-koneksisantri-tech-dashboard-2026-10-09-08_25_48.png'),
    output: 'dashboard.webp',
    title: 'Koneksi Santri Financial & Operational Executive Dashboard',
    sanitize: null,
  },
  {
    project: 'koneksi-santri',
    source: path.join(SOURCEDIR_KONEKSI, 'screencapture-admin-koneksisantri-tech-akademik-penjemputan-2026-10-09-08_26_10.png'),
    output: 'key-feature.webp',
    title: 'Koneksi Santri Smart Gate QR Security & Student Pickup Dispatch',
    sanitize: async (sharpInstance) => {
      // Mask personal phone number for privacy preservation
      const svgMask = Buffer.from(`
        <svg width="115" height="20" xmlns="http://www.w3.org/2000/svg">
          <rect width="115" height="20" fill="#ffffff"/>
          <text x="4" y="15" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="13.5" font-weight="400" fill="#4b5563">0895-••••-••••</text>
        </svg>
      `);
      const compositedBuffer = await sharpInstance
        .composite([{ input: svgMask, left: 902, top: 588 }])
        .toBuffer();
      return sharp(compositedBuffer);
    },
  },
  {
    project: 'koneksi-santri',
    source: path.join(SOURCEDIR_KONEKSI, 'screencapture-admin-koneksisantri-tech-keuangan-general-ledger-2026-10-09-08_26_56.png'),
    output: 'supporting-view.webp',
    title: 'Koneksi Santri Multi-Entity General Ledger & Consolidated Trial Balance',
    sanitize: null,
  },

  // 3. Enterprise Inventory + POS
  {
    project: 'pos-inventory',
    source: path.join(SOURCEDIR_POS, 'screencapture-inventory-pos-hazel-vercel-app-2026-10-09-08_27_54.png'),
    output: 'dashboard.webp',
    title: 'Enterprise Inventory + POS Operational Overview Dashboard',
    sanitize: null,
  },
];

async function run() {
  console.log('--- Starting Screenshot Conversion to WebP ---');
  const results = [];

  for (const item of mappings) {
    const targetDir = path.join(OUTDIR_BASE, item.project);
    fs.mkdirSync(targetDir, { recursive: true });
    const targetPath = path.join(targetDir, item.output);

    let pipeline = sharp(item.source);

    if (item.sanitize) {
      pipeline = await item.sanitize(pipeline);
    }

    const info = await pipeline
      .webp({ quality: 90, effort: 6 })
      .toFile(targetPath);

    const srcStat = fs.statSync(item.source);
    const resultObj = {
      project: item.project,
      assetName: item.output,
      title: item.title,
      srcFile: path.basename(item.source),
      srcSizeKB: Math.round(srcStat.size / 1024),
      destPath: targetPath,
      destWidth: info.width,
      destHeight: info.height,
      destSizeKB: Math.round(info.size / 1024),
      reductionPct: Math.round((1 - info.size / srcStat.size) * 100) + '%',
      sanitized: item.sanitize !== null,
    };

    results.push(resultObj);
    console.log(`Processed: [${item.project}] ${item.output} (${resultObj.destWidth}x${resultObj.destHeight}, ${resultObj.destSizeKB} KB, saved ${resultObj.reductionPct})`);
  }

  console.log('--- Completed All Conversions ---');
  console.log(JSON.stringify(results, null, 2));
}

run().catch(console.error);
