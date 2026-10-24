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

const htmlPath = path.join(outputDir, 'quotation-belleshome-temp.html');
const pdfPath = path.join(outputDir, 'Quotation-Website-Belleshome-Ratusan-SKU-Ahmad-Ayub-Numan.pdf');

const htmlContent = `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<title>Surat Penawaran / Quotation Pembuatan Website Online Shop Ratusan SKU - BellesHome</title>
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
    color: #b45309;
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
    background: #fffbeb;
    border: 1px solid #fde68a;
    border-radius: 6px;
    padding: 8px 13px;
    margin-bottom: 12px;
  }
  .info-col h3 {
    font-size: 7.6pt;
    text-transform: uppercase;
    color: #92400e;
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
    border-left: 3.5px solid #b45309;
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
    background: #fffbeb;
    color: #92400e;
    font-weight: 700;
    text-align: left;
    padding: 6.5px 9px;
    font-size: 8.2pt;
    border: 1px solid #fde68a;
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
    background: #b45309;
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
    color: #b45309;
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
      <p style="font-size: 8.8pt; color: #b45309; font-weight: 600;">E-Commerce & High-Volume Catalog Systems Specialist</p>
      <p style="font-size: 8pt; color: #64748b; margin-top: 2px;">WA: +62 895-3491-77555 • Email: ayb.n1994@gmail.com • Portfolio: portfolio-seven-theta-bovx80a70x.vercel.app</p>
    </div>
    <div class="quotation-badge">
      <div class="badge-title">OFFICIAL QUOTATION</div>
      <div class="badge-meta">Ref No: QTN-SHOP/2026/AAN-003</div>
      <div class="badge-meta">Tanggal: 21 Oktober 2026</div>
      <div class="badge-meta">Status: All-In Terima Beres</div>
    </div>
  </div>

  <div class="info-grid">
    <div class="info-col">
      <h3>Ditujukan Kepada:</h3>
      <p>Kak Anggi & Manajemen BellesHome</p>
      <p style="font-size: 7.6pt; font-weight: 400; color: #64748b;">IG: @belleshome.etc (Home Decor & Lifestyle)</p>
    </div>
    <div class="info-col">
      <h3>Fokus Solusi Utama:</h3>
      <p>Katalog Ratusan SKU & Bulk Excel Sync</p>
      <p style="font-size: 7.6pt; font-weight: 400; color: #64748b;">Instant Search, Multi-Filter, & Fast Checkout</p>
    </div>
    <div class="info-col">
      <h3>Waktu Pengerjaan:</h3>
      <p style="color: #16a34a; font-weight: 700;">7 – 10 Hari Kerja Selesai</p>
      <p style="font-size: 7.6pt; font-weight: 400; color: #64748b;">Garansi 6 Bulan & Pendampingan</p>
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
          <strong>Pengembangan Website Online Shop BellesHome (Arsitektur Ratusan SKU)</strong>
          <div class="item-desc">
            • Desain estetik mewah khusus produk dekorasi rumah (vas keramik/kaca, figurine, tray organizer, ornamen meja).<br>
            • Halaman Beranda (Hero promo, New Arrivals, highlight showroom Kemang Jaksel, & FAQ pengiriman).<br>
            • Halaman Katalog Produk Dinamis yang tetap ringan dibuka di smartphone tanpa lagging.
          </div>
        </td>
        <td style="text-align: center;">Full Web</td>
        <td class="price-col">Rp 2.000.000</td>
      </tr>
      <tr>
        <td style="text-align: center;">2</td>
        <td>
          <strong>Sistem Bulk Import / Export Excel (Solusi Otomatisasi Ratusan SKU)</strong>
          <div class="item-desc">
            • <strong>Upload Massal Cepat:</strong> Cukup upload spreadsheet Excel, ratusan produk langsung tayang otomatis beserta foto, varian ukuran, dan stok.<br>
            • <strong>Update Harga & Stok Massal:</strong> Edit harga promo atau ubah ketersediaan ratusan barang dalam hitungan detik.
          </div>
        </td>
        <td style="text-align: center;">1 Modul</td>
        <td class="price-col">Rp 1.000.000</td>
      </tr>
      <tr>
        <td style="text-align: center;">3</td>
        <td>
          <strong>Instant Search & Multi-Level Filtering System</strong>
          <div class="item-desc">
            • Pencarian langsung tanpa reload halaman (ketik nama vas/figurine langsung muncul seketika).<br>
            • Multi-Filter: Berdasarkan kategori ruangan (Living, Dining, Bedroom), bahan material (Keramik, Kaca, Marmer), & rentang harga.<br>
            • Varian ukuran (S/M/L) & variasi warna/finishing produk.
          </div>
        </td>
        <td style="text-align: center;">1 Sistem</td>
        <td class="price-col">Rp 500.000</td>
      </tr>
      <tr>
        <td style="text-align: center;">4</td>
        <td>
          <strong>Smart WhatsApp Checkout + Opsi Pengiriman Khusus Home Decor</strong>
          <div class="item-desc">
            • Format order otomatis terkirim rapi ke WhatsApp admin BellesHome (nama, rincian barang, alamat kirim).<br>
            • Opsi pilihan pengiriman: Instant/Sameday (GoSend/Grab) area showroom Kemang, Ekspedisi Reguler/Kargo, dan opsi proteksi Packing Kayu / Bubble Wrap.
          </div>
        </td>
        <td style="text-align: center;">1 Modul</td>
        <td class="price-col">Rp 500.000</td>
      </tr>
      <tr>
        <td style="text-align: center;">5</td>
        <td>
          <strong>Paket Domain Resmi (.com) + High-Performance Cloud VPS (1 Tahun Penuh)</strong>
          <div class="item-desc">
            • Registrasi nama domain pilihan (.com) 1 Tahun Penuh.<br>
            • High-Performance Cloud VPS SSD (stabil dan cepat untuk menampung ratusan foto produk resolusi tinggi).<br>
            • Free SSL Keamanan (HTTPS Aman) + optimasi format WebP hemat kuota.
          </div>
        </td>
        <td style="text-align: center;">1 Tahun</td>
        <td class="price-col">Rp 500.000</td>
      </tr>
    </tbody>
  </table>

  <div class="total-card">
    <div class="total-box">
      <div class="total-row highlight" style="display: flex; justify-content: space-between; padding: 7px 12px;">
        <span style="font-size: 9.5pt;">TOTAL HARGA ALL-IN TERIMA BERES</span>
        <span style="font-size: 11pt; color: #fffbeb;">Rp 4.500.000</span>
      </div>
    </div>
  </div>

  <div class="section-title">Keunggulan & Layanan Purna Jual</div>
  <div class="features-grid">
    <div class="feature-box">
      <h4>✔ Kemudahan Operasional Staf Toko</h4>
      <ul>
        <li><strong>Bantuan Input Awal:</strong> Tim developer siap membantu proses impor data produk katalog awal.</li>
        <li><strong>Dashboard Admin Tanpa Koding:</strong> Sangat mudah dikelola oleh staf BellesHome dari HP maupun laptop.</li>
      </ul>
    </div>
    <div class="feature-box">
      <h4>✔ Garansi & Pendampingan Penuh</h4>
      <ul>
        <li><strong>Garansi Sistem 6 Bulan:</strong> Bebas biaya perbaikan kendala teknis / bug.</li>
        <li><strong>Video Tutorial Panduan:</strong> Video rekam layar cara mudah upload dan update produk via Excel.</li>
      </ul>
    </div>
  </div>

  <div class="section-title">Ketentuan Kerja Sama</div>
  <div class="terms-box">
    <ol>
      <li><strong>Skema Pembayaran Fleksibel:</strong> DP 50% saat mulai pengerjaan & penyerahan katalog produk, dan pelunasan 50% setelah website online shop selesai serta disetujui.</li>
      <li><strong>Estimasi Pengerjaan:</strong> 7 – 10 hari kerja setelah data katalog & materi awal diterima.</li>
      <li><strong>Termasuk 2x Sesi Revisi Desain:</strong> Penyesuaian layout dan penataan katalog sebelum go-live resmi.</li>
    </ol>
  </div>

  <div class="footer-sig">
    <div class="sig-col">
      <p class="sig-label">Disetujui Oleh Klien,</p>
      <p class="sig-name">( Kak Anggi / Manajemen BellesHome )</p>
      <p class="stamp-tag">Tanggal: .............................</p>
    </div>
    <div class="sig-col">
      <p class="sig-label">Diajukan Oleh,</p>
      <p class="sig-name">Ahmad Ayub Nu'man</p>
      <p class="stamp-tag">Full-Stack Software Engineer & Web Specialist</p>
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
    console.log('✓ SUCCESS: PDF Quotation Belleshome (Realistic Price Rp 4.500.000) generated at:', pdfPath);
} else {
    console.log('Browser executable not found for PDF export.');
}
