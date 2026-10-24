import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execFileSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const outputDir = path.join(rootDir, 'public', 'quotation');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const htmlPath = path.join(outputDir, 'quotation-fashion-temp.html');
const pdfPath = path.join(outputDir, 'Quotation-Ecommerce-Fashion-Ahmad-Ayub-Numan.pdf');

const htmlContent = `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<title>Surat Penawaran / Quotation Pembuatan Website E-Commerce Fashion Brand</title>
<style>
  @page {
    size: A4 portrait;
    margin: 11mm 14mm;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, sans-serif;
    color: #1e293b;
    background: #ffffff;
    font-size: 9.3pt;
    line-height: 1.45;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border-bottom: 2.5px solid #0f172a;
    padding-bottom: 11px;
    margin-bottom: 12px;
  }
  .company-brand h1 {
    font-size: 15.5pt;
    font-weight: 800;
    color: #0f172a;
    letter-spacing: -0.3px;
  }
  .company-brand p {
    font-size: 8.5pt;
    color: #64748b;
    margin-top: 2px;
  }
  .quotation-badge {
    text-align: right;
  }
  .badge-title {
    font-size: 13.5pt;
    font-weight: 800;
    color: #be185d;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  .badge-meta {
    font-size: 8.2pt;
    color: #475569;
    margin-top: 2px;
  }
  .info-grid {
    display: flex;
    justify-content: space-between;
    background: #fdf2f8;
    border: 1px solid #fbcfe8;
    border-radius: 6px;
    padding: 8px 13px;
    margin-bottom: 12px;
  }
  .info-col h3 {
    font-size: 7.6pt;
    text-transform: uppercase;
    color: #9d174d;
    font-weight: 700;
    margin-bottom: 2px;
  }
  .info-col p {
    font-size: 8.8pt;
    font-weight: 600;
    color: #0f172a;
  }
  .section-title {
    font-size: 10pt;
    font-weight: 700;
    color: #0f172a;
    margin-top: 10px;
    margin-bottom: 6px;
    border-left: 3.5px solid #be185d;
    padding-left: 8px;
    text-transform: uppercase;
    letter-spacing: 0.3px;
  }
  table.items {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 9px;
  }
  table.items th {
    background: #fdf2f8;
    color: #831843;
    font-weight: 700;
    text-align: left;
    padding: 6.5px 9px;
    font-size: 8.2pt;
    border: 1px solid #fbcfe8;
  }
  table.items td {
    padding: 6.5px 9px;
    font-size: 8.2pt;
    border: 1px solid #e2e8f0;
    vertical-align: top;
  }
  table.items tr:nth-child(even) td {
    background: #fafafa;
  }
  .item-desc {
    font-size: 7.6pt;
    color: #64748b;
    margin-top: 2px;
    line-height: 1.35;
  }
  .price-col {
    text-align: right;
    font-weight: 600;
    white-space: nowrap;
  }
  .total-card {
    display: flex;
    justify-content: flex-end;
    margin-top: 4px;
    margin-bottom: 12px;
  }
  .total-box {
    width: 320px;
    border: 1px solid #cbd5e1;
    border-radius: 6px;
    overflow: hidden;
  }
  .total-row {
    display: flex;
    justify-content: space-between;
    padding: 6px 12px;
    font-size: 8.5pt;
    border-bottom: 1px solid #e2e8f0;
  }
  .total-row.highlight {
    background: #be185d;
    color: #ffffff;
    font-weight: 800;
    font-size: 10pt;
    border-bottom: none;
  }
  .features-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    margin-bottom: 10px;
  }
  .feature-box {
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    padding: 6px 9px;
    background: #ffffff;
  }
  .feature-box h4 {
    font-size: 8.3pt;
    color: #be185d;
    margin-bottom: 2px;
  }
  .feature-box ul {
    margin-left: 14px;
    font-size: 7.6pt;
    color: #334155;
    line-height: 1.35;
  }
  .terms-box {
    background: #f8fafc;
    border-radius: 6px;
    border: 1px dashed #cbd5e1;
    padding: 6px 10px;
    font-size: 7.6pt;
    color: #475569;
    line-height: 1.38;
  }
  .terms-box ol {
    margin-left: 14px;
  }
  .footer-sig {
    margin-top: 14px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .sig-col {
    text-align: center;
    min-width: 220px;
  }
  .sig-label {
    font-size: 7.6pt;
    color: #64748b;
    margin-bottom: 38px;
  }
  .sig-name {
    font-weight: 700;
    font-size: 8.3pt;
    color: #0f172a;
    text-decoration: underline;
    white-space: nowrap;
  }
  .stamp-tag {
    font-size: 7.1pt;
    color: #64748b;
    margin-top: 2px;
    white-space: nowrap;
  }
</style>
</head>
<body>

  <div class="header">
    <div class="company-brand">
      <h1>AHMAD AYUB NU'MAN</h1>
      <p style="font-size: 8.8pt; color: #be185d; font-weight: 600;">Full-Stack Software Engineer & E-Commerce Web Consultant</p>
      <p style="font-size: 8pt; color: #64748b; margin-top: 2px;">WA: +62 895-3491-77555 • Email: ayb.n1994@gmail.com • Portfolio: portfolio-seven-theta-bovx80a70x.vercel.app</p>
    </div>
    <div class="quotation-badge">
      <div class="badge-title">OFFICIAL QUOTATION</div>
      <div class="badge-meta">Ref No: QTN-FASHION/2026/AAN-002</div>
      <div class="badge-meta">Tanggal: 21 Oktober 2026</div>
      <div class="badge-meta">Status: All-In Terima Beres</div>
    </div>
  </div>

  <div class="info-grid">
    <div class="info-col">
      <h3>Ditujukan Kepada:</h3>
      <p>Founder / Manajemen Brand Fashion</p>
      <p style="font-size: 7.6pt; font-weight: 400; color: #64748b;">Proyek E-Commerce Website Brand Fashion</p>
    </div>
    <div class="info-col">
      <h3>Konsep Desain & Fitur:</h3>
      <p>Editorial Lookbook & Fast Checkout</p>
      <p style="font-size: 7.6pt; font-weight: 400; color: #64748b;">Mobile-First, Color Swatches, Size Guide</p>
    </div>
    <div class="info-col">
      <h3>Waktu Pengerjaan:</h3>
      <p style="color: #16a34a; font-weight: 700;">5 – 7 Hari Kerja Selesai</p>
      <p style="font-size: 7.6pt; font-weight: 400; color: #64748b;">Garansi Sistem 6 Bulan + Free Training</p>
    </div>
  </div>

  <div class="section-title">Rincian Ruang Lingkup & Penawaran Harga All-In</div>
  <table class="items">
    <thead>
      <tr>
        <th style="width: 25px; text-align: center;">No</th>
        <th>Deskripsi Layanan & Spesifikasi Teknis</th>
        <th style="width: 75px; text-align: center;">Qty</th>
        <th style="width: 105px; text-align: right;">Biaya (IDR)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="text-align: center;">1</td>
        <td>
          <strong>Pengembangan Web E-Commerce Fashion (Custom Layout Editorial Lookbook)</strong>
          <div class="item-desc">
            • Desain estetik mewah & modern khusus industri fashion (Hero banner koleksi, lookbook model, new arrivals).<br>
            • Halaman katalog produk interaktif dengan kategori terstruktur (Atasan, Bawahan, Outer, Aksesori).<br>
            • 100% responsif mobile & tablet dengan optimasi loading kilat di bawah 1.8 detik.
          </div>
        </td>
        <td style="text-align: center;">Full Web</td>
        <td class="price-col">Rp 1.800.000</td>
      </tr>
      <tr>
        <td style="text-align: center;">2</td>
        <td>
          <strong>Fitur Spesifik Fashion (Interactive Color Swatches & Size Chart Guide)</strong>
          <div class="item-desc">
            • Pemilihan warna kain interaktif yang otomatis mengubah tampilan foto baju secara real-time.<br>
            • Pilihan ukuran (S/M/L/XL/All-Size) + pop-up modal panduan ukuran (Size Chart).<br>
            • Label status stok otomatis (Ready Stock, Pre-Order, atau Sold Out).
          </div>
        </td>
        <td style="text-align: center;">1 Sistem</td>
        <td class="price-col">Rp 600.000</td>
      </tr>
      <tr>
        <td style="text-align: center;">3</td>
        <td>
          <strong>Dual Checkout System (WhatsApp Gateway + Integrasi Payment Gateway)</strong>
          <div class="item-desc">
            • <strong>WhatsApp Order:</strong> Pembeli memilih varian, sistem langsung merangkum format chat pesanan otomatis ke WA admin.<br>
            • <strong>Payment Gateway:</strong> Siap integrasi QRIS & Virtual Account otomatis jika brand ingin pembayaran mandiri.
          </div>
        </td>
        <td style="text-align: center;">1 Modul</td>
        <td class="price-col">Rp 400.000</td>
      </tr>
      <tr>
        <td style="text-align: center;">4</td>
        <td>
          <strong>CMS Visual Admin Toko (Akses Kelola Produk Mandiri Tanpa Koding)</strong>
          <div class="item-desc">
            • Dashboard admin khusus tim brand: upload artikel baju baru, atur foto, ganti harga, dan buat voucher diskon.<br>
            • Disediakan video tutorial panduan langkah demi langkah cara pemakaian untuk staf.
          </div>
        </td>
        <td style="text-align: center;">1 Modul</td>
        <td class="price-col">Rp 300.000</td>
      </tr>
      <tr>
        <td style="text-align: center;">5</td>
        <td>
          <strong>Paket Domain Resmi (.com) + High-Speed Cloud VPS Hosting (1 Tahun Penuh)</strong>
          <div class="item-desc">
            • Domain resmi TLD (.com) 1 tahun + Server Cloud SSD High-Performance (tahan lonjakan traffic campaign drop day).<br>
            • Free SSL Keamanan (HTTPS Aman) + setup integrasi Meta Pixel (Instagram Ads) & Google Analytics.
          </div>
        </td>
        <td style="text-align: center;">1 Tahun</td>
        <td class="price-col">Rp 400.000</td>
      </tr>
    </tbody>
  </table>

  <div class="total-card">
    <div class="total-box">
      <div class="total-row highlight" style="display: flex; justify-content: space-between; padding: 7px 12px;">
        <span style="font-size: 9.5pt;">TOTAL HARGA ALL-IN TERIMA BERES</span>
        <span style="font-size: 11pt; color: #fdf2f8;">Rp 3.500.000</span>
      </div>
    </div>
  </div>

  <div class="section-title">Keunggulan & Layanan Purna Jual</div>
  <div class="features-grid">
    <div class="feature-box">
      <h4>✔ Visual Menjual & Mobile-First</h4>
      <ul>
        <li><strong>Estetika Brand Fashion:</strong> Gambar tajam tanpa pecah namun loading ringan sehingga pelanggan betah berbelanja.</li>
        <li><strong>Integrasi Media Sosial:</strong> Tombol chat langsung ke Instagram & WhatsApp admin.</li>
      </ul>
    </div>
    <div class="feature-box">
      <h4>✔ Garansi & Pendampingan Penuh</h4>
      <ul>
        <li><strong>Garansi Sistem 6 Bulan:</strong> Bebas biaya perbaikan jika ada kendala sistem / bug.</li>
        <li><strong>Bimbingan Admin:</strong> Diberikan video tutorial langkah demi langkah cara upload produk baru.</li>
      </ul>
    </div>
  </div>

  <div class="section-title">Ketentuan Kerja Sama</div>
  <div class="terms-box">
    <ol>
      <li><strong>Skema Pembayaran Fleksibel:</strong> DP 50% saat kick-off pengerjaan & penyerahan aset foto/logo, dan pelunasan 50% setelah website selesai 100% serta disetujui.</li>
      <li><strong>Estimasi Pengerjaan:</strong> 5 – 7 hari kerja setelah materi aset diterima lengkap.</li>
      <li><strong>Termasuk 2x Sesi Revisi:</strong> Penyesuaian warna, komposisi layout, dan penataan katalog sebelum go-live.</li>
    </ol>
  </div>

  <div class="footer-sig">
    <div class="sig-col">
      <p class="sig-label">Disetujui Oleh Klien,</p>
      <p class="sig-name">( Founder / Manajemen Brand )</p>
      <p class="stamp-tag">Tanggal: .............................</p>
    </div>
    <div class="sig-col">
      <p class="sig-label">Diajukan Oleh,</p>
      <p class="sig-name">Ahmad Ayub Nu'man</p>
      <p class="stamp-tag">Full-Stack Software Engineer & Web Consultant</p>
    </div>
  </div>

</body>
</html>`;

fs.writeFileSync(htmlPath, htmlContent, 'utf-8');

const browserCandidates = [
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
];

let browserPath = browserCandidates.find(p => fs.existsSync(p));

if (browserPath) {
    const args = [
        '--headless',
        '--disable-gpu',
        '--run-all-compositor-stages-before-draw',
        '--no-pdf-header-footer',
        `--print-to-pdf=${pdfPath}`,
        htmlPath
    ];

    execFileSync(browserPath, args, { stdio: 'pipe' });
    console.log('✓ SUCCESS: PDF Quotation Fashion (Realistic Price Rp 3.500.000) generated at:', pdfPath);
} else {
    console.log('Browser executable not found for PDF export.');
}
