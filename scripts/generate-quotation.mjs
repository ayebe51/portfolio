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

const htmlPath = path.join(outputDir, 'quotation-temp.html');
const pdfPath = path.join(outputDir, 'Quotation-Website-Properti-Ahmad-Ayub-Numan.pdf');

const htmlContent = `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<title>Surat Penawaran / Quotation Pembuatan Website Properti</title>
<style>
  @page {
    size: A4 portrait;
    margin: 12mm 15mm;
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
    font-size: 9.5pt;
    line-height: 1.45;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border-bottom: 2.5px solid #0f172a;
    padding-bottom: 12px;
    margin-bottom: 14px;
  }
  .company-brand h1 {
    font-size: 16pt;
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
    font-size: 14pt;
    font-weight: 800;
    color: #2563eb;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  .badge-meta {
    font-size: 8.5pt;
    color: #475569;
    margin-top: 2px;
  }
  .info-grid {
    display: flex;
    justify-content: space-between;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    padding: 9px 14px;
    margin-bottom: 14px;
  }
  .info-col h3 {
    font-size: 7.8pt;
    text-transform: uppercase;
    color: #64748b;
    font-weight: 700;
    margin-bottom: 2px;
  }
  .info-col p {
    font-size: 9pt;
    font-weight: 600;
    color: #0f172a;
  }
  .section-title {
    font-size: 10.5pt;
    font-weight: 700;
    color: #0f172a;
    margin-top: 12px;
    margin-bottom: 7px;
    border-left: 3.5px solid #2563eb;
    padding-left: 8px;
    text-transform: uppercase;
    letter-spacing: 0.3px;
  }
  table.items {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 10px;
  }
  table.items th {
    background: #f1f5f9;
    color: #0f172a;
    font-weight: 700;
    text-align: left;
    padding: 6.5px 9px;
    font-size: 8.2pt;
    border: 1px solid #cbd5e1;
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
    margin-bottom: 14px;
  }
  .total-box {
    width: 310px;
    border: 1px solid #cbd5e1;
    border-radius: 6px;
    overflow: hidden;
  }
  .total-row {
    display: flex;
    justify-content: space-between;
    padding: 5px 11px;
    font-size: 8.2pt;
    border-bottom: 1px solid #e2e8f0;
  }
  .total-row.highlight {
    background: #0f172a;
    color: #ffffff;
    font-weight: 800;
    font-size: 9.8pt;
    border-bottom: none;
  }
  .features-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    margin-bottom: 12px;
  }
  .feature-box {
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    padding: 7px 10px;
    background: #ffffff;
  }
  .feature-box h4 {
    font-size: 8.5pt;
    color: #1e40af;
    margin-bottom: 3px;
  }
  .feature-box ul {
    margin-left: 14px;
    font-size: 7.8pt;
    color: #334155;
    line-height: 1.35;
  }
  .terms-box {
    background: #f8fafc;
    border-radius: 6px;
    border: 1px dashed #cbd5e1;
    padding: 7px 11px;
    font-size: 7.8pt;
    color: #475569;
    line-height: 1.4;
  }
  .terms-box ol {
    margin-left: 15px;
  }
  .footer-sig {
    margin-top: 16px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .sig-col {
    text-align: center;
    min-width: 240px;
  }
  .sig-label {
    font-size: 7.8pt;
    color: #64748b;
    margin-bottom: 45px;
  }
  .sig-name {
    font-weight: 700;
    font-size: 8.5pt;
    color: #0f172a;
    text-decoration: underline;
    white-space: nowrap;
  }
  .stamp-tag {
    font-size: 7.2pt;
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
      <p style="font-size: 9pt; color: #1e40af; font-weight: 600;">Full-Stack Software Engineer & Web Consultant</p>
      <p style="font-size: 8pt; color: #64748b; margin-top: 2px;">WA: +62 895-3491-77555 • Email: ayb.n1994@gmail.com • Portfolio: portfolio-seven-theta-bovx80a70x.vercel.app</p>
    </div>
    <div class="quotation-badge">
      <div class="badge-title">OFFICIAL QUOTATION</div>
      <div class="badge-meta">Ref No: QTN-WEB/2026/AAN-001</div>
      <div class="badge-meta">Tanggal: 21 Oktober 2026</div>
      <div class="badge-meta">Masa Berlaku: 14 Hari</div>
    </div>
  </div>

  <div class="info-grid">
    <div class="info-col">
      <h3>Ditujukan Kepada:</h3>
      <p>Bapak/Ibu Pimpinan & Tim Pengadaan</p>
      <p style="font-size: 7.8pt; font-weight: 400; color: #475569;">Proyek Website Properti / Real Estate</p>
    </div>
    <div class="info-col">
      <h3>Benchmark Referensi:</h3>
      <p>citralandmakassarproperty.com</p>
      <p style="font-size: 7.8pt; font-weight: 400; color: #475569;">Modern Luxury Property Landing Page</p>
    </div>
    <div class="info-col">
      <h3>Skema Pembayaran:</h3>
      <p style="color: #16a34a; font-weight: 700;">100% Pasca BAST (Tanpa DP)</p>
      <p style="font-size: 7.8pt; font-weight: 400; color: #475569;">Lama Pengerjaan: 4 – 7 Hari Kerja</p>
    </div>
  </div>

  <div class="section-title">Rincian Ruang Lingkup & Anggaran Biaya</div>
  <table class="items">
    <thead>
      <tr>
        <th style="width: 25px; text-align: center;">No</th>
        <th>Deskripsi Layanan & Spesifikasi Pekerjaan</th>
        <th style="width: 75px; text-align: center;">Qty</th>
        <th style="width: 105px; text-align: right;">Biaya (IDR)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="text-align: center;">1</td>
        <td>
          <strong>Pengembangan Web Properti (1 Homepage Luxury Style + 3 Subpage Produk)</strong>
          <div class="item-desc">
            • Hero Section visual banner promo & showcase properti unggulan (Citraland / Shila style).<br>
            • 3 Subpage Produk: Detail Tipe Unit (spesifikasi, denah layout 2D/3D), Masterplan Kawasan, & Halaman Kontak.<br>
            • 100% Responsive di Smartphone, Tablet, & Laptop dengan optimasi loading cepat.
          </div>
        </td>
        <td style="text-align: center;">Full Web</td>
        <td class="price-col">Rp 1.750.000</td>
      </tr>
      <tr>
        <td style="text-align: center;">2</td>
        <td>
          <strong>Fitur Simulasi Kalkulator KPR Interaktif & Dinamis</strong>
          <div class="item-desc">
            • Kalkulator perhitungan KPR otomatis real-time (Harga Unit, Uang Muka / DP %, Bunga %, Tenor 5-25 Tahun).<br>
            • Hasil perhitungan akurat tanpa reload halaman dan langsung terhubung dengan konsultasi sales via WhatsApp.
          </div>
        </td>
        <td style="text-align: center;">1 Sistem</td>
        <td class="price-col">Rp 500.000</td>
      </tr>
      <tr>
        <td style="text-align: center;">3</td>
        <td>
          <strong>Sistem CMS Visual Dashboard (Akses Admin Mandiri Tim Marketing)</strong>
          <div class="item-desc">
            • Akses dashboard admin visual editor tanpa koding untuk tim kantor.<br>
            • Bebas ubah harga unit rumah, tambah/ganti foto denah tipe unit, ganti nomor WA sales, dan upload brosur kapan saja.
          </div>
        </td>
        <td style="text-align: center;">1 Modul</td>
        <td class="price-col">Rp 450.000</td>
      </tr>
      <tr>
        <td style="text-align: center;">4</td>
        <td>
          <strong>Sistem Dual CTA (Form Database Leads Brosur + WhatsApp Gateway)</strong>
          <div class="item-desc">
            • Form pengumpulan database leads (Nama, No WA, Email, Domisili) dengan auto-forward ke email/Google Sheets.<br>
            • Tombol floating WhatsApp responsif dengan template chat otomatis ramah untuk closing sales cepat.
          </div>
        </td>
        <td style="text-align: center;">1 Modul</td>
        <td class="price-col">Rp 300.000</td>
      </tr>
      <tr>
        <td style="text-align: center;">5</td>
        <td>
          <strong>Paket Domain Resmi (.com) + High-Performance Managed KVM VPS (1 Tahun Penuh)</strong>
          <div class="item-desc">
            • <strong>Infrastruktur Server:</strong> Dedicated KVM VPS High Speed (2 vCPU, 8 GB RAM, NVMe Storage) — akses kilat, loading <1.8 detik, stabil untuk traffic iklan.<br>
            • <strong>Domain & Keamanan:</strong> Registrasi Domain resmi TLD (.com) 1 Tahun + Free Unlimited SSL (HTTPS Aman), Web Firewall, & setup email bisnis (e.g. sales@domain.com).
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
        <span style="font-size: 10pt;">TOTAL ALL-IN TERIMA BERES</span>
        <span style="font-size: 11pt; color: #60a5fa;">Rp 3.500.000</span>
      </div>
    </div>
  </div>

  <div class="section-title">Spesifikasi Teknis & Mekanisme Pengelolaan Konten</div>
  <div class="features-grid">
    <div class="feature-box">
      <h4>✔ Kemudahan Update Konten (Untuk Pemilik Web)</h4>
      <ul>
        <li><strong>CMS Visual Dashboard:</strong> Akses admin khusus dengan visual editor yang sangat mudah digunakan tanpa koding.</li>
        <li><strong>Mandiri & Fleksibel:</strong> Bisa bebas ganti harga unit, tambah foto/denah properti, upload brosur PDF baru, dan ganti nomor WhatsApp sales kapan saja.</li>
        <li><strong>Handover & Training:</strong> Disediakan Video Tutorial Screen-Recording & Buku Panduan PDF + sesi pendampingan saat serah terima.</li>
      </ul>
    </div>
    <div class="feature-box">
      <h4>✔ Kualitas, Tracking Iklan, & Layanan Purna Jual</h4>
      <ul>
        <li><strong>100% Responsive:</strong> Tampilan presisi di Smartphone, Tablet, & Laptop.</li>
        <li><strong>Tracking Iklan:</strong> Terintegrasi Google Analytics 4 & Meta Pixel (siap tracking campaign iklan Facebook, Instagram, & Google Ads).</li>
        <li><strong>Garansi Penuh 6 Bulan:</strong> Bebas biaya perbaikan jika ada kendala sistem / bug, dan siap dibantu jika tim marketing butuh asistensi teknis.</li>
      </ul>
    </div>
  </div>

  <div class="section-title">Skema Kerja & Sistem Pembayaran (Berbasis BAST)</div>
  <div class="terms-box">
    <ol>
      <li><strong>Tanpa Uang Muka (Zero DP):</strong> Klien tidak perlu membayar uang muka (DP) di awal. Pengerjaan langsung dimulai setelah materi disepakati.</li>
      <li><strong>Pembayaran 100% Pasca BAST:</strong> Pembayaran sebesar <strong>Rp 3.500.000,-</strong> dibayarkan setelah website selesai 100%, diuji coba seluruh fiturnya oleh tim klien, dinyatakan FIX/disetujui, dan dokumen <strong>Berita Acara Serah Terima (BAST)</strong> resmi ditandatangani.</li>
      <li><strong>Estimasi Waktu Pengerjaan:</strong> 4 – 7 hari kerja setelah materi aset (foto unit, brosur, price list, dan nomor WA) diterima lengkap.</li>
      <li><strong>Revisi:</strong> Termasuk 2x sesi revisi desain dan fungsional sebelum penandatanganan BAST final.</li>
    </ol>
  </div>

  <div class="footer-sig">
    <div class="sig-col">
      <p class="sig-label">Disetujui Oleh Klien,</p>
      <p class="sig-name">( Pimpinan / Manajemen Properti )</p>
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
    console.log('✓ SUCCESS: PDF Quotation generated at:', pdfPath);
} else {
    console.log('Browser executable not found for PDF export.');
}
