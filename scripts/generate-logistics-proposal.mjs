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

const htmlPath = path.join(outputDir, 'proposal-logistics-temp.html');
const pdfPath = path.join(outputDir, 'Proposal-Web-App-Logistik-Operasional-Costing-Ahmad-Ayub-Numan.pdf');
const pdfFinalPath = path.join(outputDir, 'PROPOSAL_LOGISTIK_OPERASIONAL_COSTING_FINAL.pdf');

const htmlContent = `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<title>Technical & Commercial Proposal — Logistics Operations & Job Costing Web App</title>
<style>
  @page {
    size: A4 portrait;
    margin: 9.5mm 12mm;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, sans-serif;
    color: #0f172a;
    background: #ffffff;
    font-size: 8.3pt;
    line-height: 1.36;
  }
  .page {
    position: relative;
    height: 100%;
  }
  .page-break {
    page-break-before: always;
  }
  
  /* Header Styles */
  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border-bottom: 2px solid #0f172a;
    padding-bottom: 7px;
    margin-bottom: 8px;
  }
  .company-brand h1 {
    font-size: 13.5pt;
    font-weight: 800;
    color: #0f172a;
    letter-spacing: -0.3px;
  }
  .company-brand p {
    font-size: 7.7pt;
    color: #475569;
    margin-top: 1px;
  }
  .header-meta {
    text-align: right;
  }
  .badge-title {
    font-size: 11pt;
    font-weight: 800;
    color: #1d4ed8;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  .badge-meta {
    font-size: 7.4pt;
    color: #64748b;
    margin-top: 1px;
  }
  
  /* Info Grid */
  .info-grid {
    display: flex;
    justify-content: space-between;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 5px;
    padding: 6px 9px;
    margin-bottom: 8px;
  }
  .info-col h3 {
    font-size: 6.8pt;
    text-transform: uppercase;
    color: #64748b;
    font-weight: 700;
    margin-bottom: 1.5px;
  }
  .info-col p {
    font-size: 8pt;
    font-weight: 600;
    color: #0f172a;
  }

  /* Section Titles */
  .section-title {
    font-size: 8.9pt;
    font-weight: 700;
    color: #0f172a;
    margin-top: 7px;
    margin-bottom: 4px;
    display: flex;
    align-items: center;
    gap: 5px;
    border-bottom: 1.5px solid #e2e8f0;
    padding-bottom: 2.5px;
  }
  .section-num {
    background: #1d4ed8;
    color: #ffffff;
    font-size: 6.8pt;
    font-weight: 700;
    width: 14.5px;
    height: 14.5px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
  }
  
  /* Callout Boxes */
  .callout {
    background: #eff6ff;
    border-left: 3.5px solid #2563eb;
    padding: 5.5px 8.5px;
    border-radius: 0 4px 4px 0;
    font-size: 7.8pt;
    color: #1e3a8a;
    margin-bottom: 7.5px;
    line-height: 1.33;
  }
  .callout-dark {
    background: #f8fafc;
    border-left: 3.5px solid #0f172a;
    padding: 5.5px 8.5px;
    border-radius: 0 4px 4px 0;
    font-size: 7.8pt;
    color: #0f172a;
    margin-bottom: 7px;
    line-height: 1.32;
  }

  /* Tables */
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 7px;
    font-size: 7.8pt;
  }
  th {
    background: #0f172a;
    color: #ffffff;
    font-weight: 600;
    text-align: left;
    padding: 4px 5.5px;
    font-size: 7.2pt;
    text-transform: uppercase;
    letter-spacing: 0.3px;
  }
  td {
    padding: 4.2px 5.5px;
    border-bottom: 1px solid #e2e8f0;
    vertical-align: top;
  }
  tr:nth-child(even) td {
    background: #f8fafc;
  }
  .col-price {
    text-align: right;
    white-space: nowrap;
    font-weight: 700;
    color: #0f172a;
  }
  
  /* Cards Grid */
  .card-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6px;
    margin-bottom: 7px;
  }
  .card {
    background: #ffffff;
    border: 1px solid #cbd5e1;
    border-radius: 5px;
    padding: 5.5px 7.5px;
  }
  .card-title {
    font-size: 8pt;
    font-weight: 700;
    color: #1d4ed8;
    margin-bottom: 2px;
    display: flex;
    justify-content: space-between;
  }
  .card-body {
    font-size: 7.4pt;
    color: #334155;
    line-height: 1.3;
  }
  .card-body ul {
    margin-left: 11px;
    margin-top: 1.2px;
  }
  .card-body li {
    margin-bottom: 1px;
  }

  /* Badges */
  .pill {
    display: inline-block;
    padding: 1px 4.5px;
    border-radius: 8px;
    font-size: 6.4pt;
    font-weight: 700;
    text-transform: uppercase;
  }
  .pill-blue { background: #dbeafe; color: #1e40af; }
  .pill-green { background: #dcfce7; color: #166534; }
  .pill-amber { background: #fef3c7; color: #92400e; }

  /* Pricing Highlights */
  .price-highlight-box {
    display: flex;
    gap: 8px;
    margin: 6.5px 0;
  }
  .price-card {
    flex: 1;
    border: 1.5px solid #cbd5e1;
    border-radius: 5px;
    padding: 7px 9px;
    background: #ffffff;
  }
  .price-card.featured {
    border-color: #2563eb;
    background: #f0f7ff;
    position: relative;
  }
  .featured-tag {
    position: absolute;
    top: -6.5px;
    right: 9px;
    background: #2563eb;
    color: #ffffff;
    font-size: 6.1pt;
    font-weight: 800;
    padding: 1.2px 5.5px;
    border-radius: 7px;
    text-transform: uppercase;
    letter-spacing: 0.4px;
  }
  .price-tier-name {
    font-size: 8.1pt;
    font-weight: 700;
    color: #0f172a;
  }
  .price-val {
    font-size: 11.5pt;
    font-weight: 800;
    color: #1d4ed8;
    margin: 1.5px 0;
  }
  .price-desc {
    font-size: 7.1pt;
    color: #475569;
    line-height: 1.24;
  }

  /* Signatures */
  .sig-section {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    padding-top: 6px;
    border-top: 1px dashed #cbd5e1;
  }
  .sig-box {
    width: 45%;
    text-align: center;
  }
  .sig-title {
    font-size: 7.3pt;
    color: #64748b;
    margin-bottom: 35px;
  }
  .sig-name {
    font-size: 8.2pt;
    font-weight: 700;
    color: #0f172a;
    border-bottom: 1px solid #94a3b8;
    padding-bottom: 1.2px;
    display: inline-block;
    min-width: 155px;
  }
  .sig-role {
    font-size: 6.9pt;
    color: #475569;
    margin-top: 1px;
  }
  
  .footer-note {
    font-size: 6.6pt;
    color: #94a3b8;
    text-align: center;
    margin-top: 6px;
  }
</style>
</head>
<body>

  <!-- ==================== PAGE 1 ==================== -->
  <div class="page">
    <div class="header">
      <div class="company-brand">
        <h1>Ahmad Ayub Nu'man</h1>
        <p>Full-Stack Software Engineer • Enterprise Logistics & Operational ERP Architect</p>
        <p>Cilacap, Central Java, Indonesia (WIB) | +62 895 3491 77555 | ayb.n1994@gmail.com</p>
      </div>
      <div class="header-meta">
        <div class="badge-title">PROJECT PROPOSAL</div>
        <div class="badge-meta">Logistics Operations & Job Costing Web App</div>
        <div class="badge-meta">Ref: <strong>PRJ-LOG-202610-01</strong> | Date: 22 Oktober 2026</div>
      </div>
    </div>

    <div class="info-grid">
      <div class="info-col">
        <h3>Ditujukan Kepada</h3>
        <p>Project Owner / Manajemen Logistik Kontainer</p>
      </div>
      <div class="info-col">
        <h3>Fokus Bisnis</h3>
        <p>Ekspor & Domestik Kontainer (FCL/LCL)</p>
      </div>
      <div class="info-col">
        <h3>Timezone & Bahasa</h3>
        <p>WIB • Bahasa Indonesia / English</p>
      </div>
      <div class="info-col">
        <h3>Model Kontrak</h3>
        <p><strong>Scope (One Project, One Total Price)</strong></p>
      </div>
    </div>

    <div class="callout">
      <strong>Core Architectural Concept: "Single Job Number as the Immutable Operational Backbone"</strong><br>
      Menghubungkan seluruh titik sentuh yang selama ini terfragmentasi di Excel, WhatsApp chat, dan software akuntansi menjadi satu alur kontinu:<br>
      <code>Order Intake ➔ Booking & Kapal ➔ Depo & Truk (Kontainer/Segel) ➔ Dokumen Pabean ➔ Costing & AI OCR ➔ Ready to Bill ➔ Closed</code>.<br>
      <em>Kami mengapresiasi ketersediaan alur proses dan SOP per role dari owner—ini memastikan tim dapat langsung melakukan eksekusi cepat begitu NDA ditandatangani tanpa membuang waktu discovery dari nol.</em>
    </div>

    <div class="section-title">
      <span class="section-num">1</span> Rincian Lingkup Pekerjaan: Model "Scope (One Project, One Total Price)"
    </div>

    <div style="font-size: 7.5pt; color: #334155; margin-bottom: 5px;">
      <em>*Sesuai ketentuan owner, seluruh 4 modul di bawah ini merupakan satu kesatuan pekerjaan borongan (lump-sum) yang sudah tercakup penuh di dalam satu harga penawaran tetap tanpa ada biaya tersembunyi:*</em>
    </div>

    <div class="card-grid">
      <div class="card">
        <div class="card-title">
          <span>1. Foundation & Tata Kelola</span>
          <span class="pill pill-blue">One Total Price</span>
        </div>
        <div class="card-body">
          <ul>
            <li><strong>Login & RBAC:</strong> Akses berjenjang (Superadmin, Ops, Costing/Keuangan, Manajemen).</li>
            <li><strong>Master Data Terpusat:</strong> Pelanggan, Vendor (Pelayaran, Trucking, Depo), Tarif, & Tipe Biaya.</li>
            <li><strong>Job Number Engine:</strong> Penomoran otomatis & unik (cth: <code>EXP-202610-001</code> / <code>DOM-202610-001</code>).</li>
            <li><strong>Audit Trail & File Storage:</strong> Riwayat perubahan data lengkap, S3 storage terenkripsi, & backup.</li>
          </ul>
        </div>
      </div>

      <div class="card">
        <div class="card-title">
          <span>2. Operasional Kontainer & Board</span>
          <span class="pill pill-blue">One Total Price</span>
        </div>
        <div class="card-body">
          <ul>
            <li><strong>Order Intake:</strong> Quotation, detail komoditas, pelabuhan muat/bongkar, & instruksi penanganan.</li>
            <li><strong>Booking & Jadwal Kapal:</strong> Tracking feeder/mother vessel, ETD/ETA, nomor booking, closing time.</li>
            <li><strong>Trucking & Depot:</strong> Alokasi armada, nomor kontainer (20'/40'/HQ), & nomor segel (seal number).</li>
            <li><strong>Dokumen & Pabean:</strong> Checklist kelengkapan & deadline PEB, BL, DO, serta izin kepabeanan.</li>
          </ul>
        </div>
      </div>

      <div class="card">
        <div class="card-title">
          <span>3. Job Costing & Ekstraksi AI</span>
          <span class="pill pill-blue">One Total Price</span>
        </div>
        <div class="card-body">
          <ul>
            <li><strong>Planned vs Actual Cost:</strong> Matriks perbandingan biaya rencana awal vs realisasi riil vendor per job.</li>
            <li><strong>AI Vendor Invoice OCR:</strong> Ekstraksi otomatis kuitansi/invoice vendor lokal (PDF/foto) ke tabel data.</li>
            <li><strong>Variance Threshold & Approval:</strong> Peringatan otomatis jika selisih > batas; butuh approval manajer.</li>
            <li><strong>Rebillable & Job Closing:</strong> Flagging biaya reimbursable, penguncian finansial job pasca-closing.</li>
            <li><strong>Cash Advance (Termasuk):</strong> Pencatatan uang jalan supir/operasional lapangan & penyelesaiannya.</li>
          </ul>
        </div>
      </div>

      <div class="card">
        <div class="card-title">
          <span>4. Manajemen & Analytics</span>
          <span class="pill pill-blue">One Total Price</span>
        </div>
        <div class="card-body">
          <ul>
            <li><strong>Executive Dashboard:</strong> Real-time margin %, total revenue, tren biaya per vendor, & performa rute.</li>
            <li><strong>AI Assistant for Variance:</strong> Ringkasan otomatis anomali biaya dan rekomendasi efisiensi pengeluaran.</li>
            <li><strong>Laporan Standar & Excel:</strong> Rekapitulasi operasional dan finansial siap ekspor & cetak.</li>
            <li><strong>Data Import:</strong> Fitur impor data master awal dari file Excel yang ada saat ini.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="callout-dark" style="margin-bottom: 6px;">
      <strong>Fokus Papan Khusus: "Ready to Depart / Ready to Bill" Visual Board</strong><br>
      • <strong>Gate 1 (Ready to Depart):</strong> Kontainer tervalidasi fisik di depo + Nomor segel terverifikasi + Booking kapal confirmed + Status pabean (PEB/NPE) lengkap.<br>
      • <strong>Gate 2 (Ready to Bill):</strong> Biaya aktual vendor terinput & verified + Selisih biaya (variance) di-approve manajer + Biaya rebillable terkonfirmasi.
    </div>

    <table style="margin-top: 2px;">
      <thead>
        <tr>
          <th>Modul Opsional Tambahan (Priced Separately)</th>
          <th>Deskripsi Fitur & Pendekatan Teknis</th>
          <th style="width: 100px; text-align: right;">Harga Terpisah</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Integrasi Software Akuntansi (Studi & CSV)</strong></td>
          <td>Studi alur & pemetaan format CSV otomatis untuk Jurnal.id / Accurate / Zahir / Xero.</td>
          <td class="col-price">Rp 3.500.000</td>
        </tr>
        <tr>
          <td><strong>Portal Tracking Pelanggan (Customer Portal)</strong></td>
          <td>Akses mandiri klien untuk tracking status kontainer, estimasi kapal, & download BL/Invoice.</td>
          <td class="col-price">Rp 5.000.000</td>
        </tr>
        <tr>
          <td><strong>Pelatihan Staf & Dokumentasi SOP Lengkap</strong></td>
          <td>Buku panduan PDF lengkap per role + 2x sesi training video interaktif (direkam untuk internal).</td>
          <td class="col-price">Rp 2.000.000</td>
        </tr>
      </tbody>
    </table>

    <div style="font-size: 7.1pt; color: #64748b; background: #f1f5f9; padding: 3.5px 7px; border-radius: 4px;">
      <strong>Konfirmasi Batasan (Out of Scope):</strong> Sebagaimana tertuang pada brief owner, proyek ini <u>tidak mencakup</u>: gateway pembayaran / transfer dana, penerbitan faktur pajak resmi pemerintah (e-Faktur), serta aplikasi mobile native (akses mobile sepenuhnya menggunakan Responsive Web App).
    </div>
  </div>

  <!-- ==================== PAGE 2 ==================== -->
  <div class="page page-break">
    <div class="header">
      <div class="company-brand">
        <h1>Ahmad Ayub Nu'man — Architecture, AI QA & Schedule</h1>
      </div>
      <div class="header-meta">
        <div class="badge-meta">Proposal: Web App Logistik Operasional & Costing</div>
      </div>
    </div>

    <div class="section-title">
      <span class="section-num">2</span> Rekomendasi Tech Stack & Riset Biaya Hosting Bulanan (Standar Produksi)
    </div>

    <table>
      <thead>
        <tr>
          <th style="width: 130px;">Lapisan Sistem</th>
          <th>Teknologi Rekomendasi</th>
          <th>Justifikasi Teknis & Kualitas Industri</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Frontend SPA</strong></td>
          <td>React 19 / Next.js (TypeScript) + Tailwind</td>
          <td>Performa sub-detik, antarmuka responsif ramah operasional desktop/tablet, pemfilteran data tabel instan.</td>
        </tr>
        <tr>
          <td><strong>Backend API</strong></td>
          <td>Laravel 12 (PHP 8.3+) ATAU NestJS (Node.js)</td>
          <td>Arsitektur modular, Maker-Checker service layer yang bersih, performa tinggi, dan mudah dirawat.</td>
        </tr>
        <tr>
          <td><strong>Database</strong></td>
          <td>PostgreSQL 16 (Enterprise Relational DB)</td>
          <td>Jaminan integritas finansial penuh (ACID compliance), foreign key ketat, dan pencegahan data ganda.</td>
        </tr>
        <tr>
          <td><strong>File Storage</strong></td>
          <td>Dedicated S3 Storage (AWS / Cloudflare R2 Paid)</td>
          <td>Penyimpanan terenkripsi dokumen BL, PEB, & invoice vendor dengan SLA 99.9% dan kecepatan akses tinggi.</td>
        </tr>
        <tr>
          <td><strong>AI Invoice Reading</strong></td>
          <td>Claude 3.5 Sonnet / OpenAI GPT-4o Vision API</td>
          <td>Mengekstrak kuitansi/invoice vendor lokal acak menjadi format data terstruktur dengan akurasi tinggi.</td>
        </tr>
      </tbody>
    </table>

    <div class="callout" style="background: #f8fafc; border-color: #0f172a; color: #0f172a;">
      <strong>Riset Biaya Infrastruktur Bulanan (Monthly OPEX Standar Bisnis): ~Rp 950.000 – Rp 1.450.000 / Bulan</strong><br>
      <em>*Seluruh layanan menggunakan tier berbayar resmi (non-gratisan) dengan SLA 99.9% dan proteksi backup harian:*</em><br>
      • <strong>Cloud VPS Server (4 vCPU, 4–8 GB RAM NVMe — Biznet GIO / IDCloudHost / Hetzner):</strong> Rp 350.000 – Rp 550.000 / bln.<br>
      • <strong>Automated Daily Snapshot & Off-Site Database Backup (Disaster Recovery):</strong> Rp 100.000 – Rp 150.000 / bln.<br>
      • <strong>Enterprise Object Storage (Paid Tier, Kapasitas Arsip Dokumen Kontainer Puluhan GB):</strong> Rp 120.000 – Rp 200.000 / bln.<br>
      • <strong>Transactional Email Gateway (Resend / Brevo Paid SMTP untuk Notifikasi & Alert):</strong> Rp 150.000 – Rp 250.000 / bln.<br>
      • <strong>AI Document Extraction API (Kuota ~500 – 1.000 invoice vendor/bulan dengan schema JSON validation):</strong> Rp 230.000 – Rp 300.000 / bln.
    </div>

    <div class="section-title">
      <span class="section-num">3</span> Pemanfaatan AI & Standar Kualitas Kode (Testing & Code Review)
    </div>

    <div class="card-grid">
      <div class="card">
        <div class="card-title">
          <span>AI-Assisted Workflow (Cursor & Claude)</span>
          <span class="pill pill-green">Akselerasi 3x</span>
        </div>
        <div class="card-body">
          <ul>
            <li><strong>Rapid Scaffolding:</strong> Pembentukan kerangka tabel, skema DTO, dan endpoint CRUD 3x lebih cepat.</li>
            <li><strong>Invoice Prompt Tuning:</strong> Optimalisasi ekstraksi field lokal (THC, Demurrage, Lift On/Off, Ongkos Truk).</li>
            <li><strong>Edge-Case Generation:</strong> AI dimanfaatkan untuk mensintesis skenario anomali biaya dan batas approval.</li>
          </ul>
        </div>
      </div>

      <div class="card">
        <div class="card-title">
          <span>Testing, Code Review & Maintainability</span>
          <span class="pill pill-blue">Disiplin Senior</span>
        </div>
        <div class="card-body">
          <ul>
            <li><strong>Automated Testing:</strong> Unit & Feature testing (Pest/Jest) memverifikasi batas approval sebelum release.</li>
            <li><strong>Code Review & Linting:</strong> Pengecekan statis (ESLint, TypeScript strict, PHPStan) menjamin kode bersih.</li>
            <li><strong>Money Value Objects:</strong> Mencegah error pembulatan floating-point pada kalkulasi biaya dan margin.</li>
            <li><strong>Database Invariants:</strong> Unique constraints pada Job No + Container No mencegah duplikasi data.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="section-title">
      <span class="section-num">4</span> Jadwal Kerja & Pembagian Milestone (Realistis: 9–10 Minggu / 5 Sprint)
    </div>

    <table>
      <thead>
        <tr>
          <th style="width: 75px;">Sprint</th>
          <th>Fokus Deliverables & Aktivitas Kunci</th>
          <th style="width: 70px;">Alokasi</th>
          <th style="width: 85px; text-align: right;">Termin Escrow</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Sprint 1</strong></td>
          <td>Finalisasi Workflow Pasca-NDA, Database Schema, Multi-role RBAC, Master Data, & Job Number Engine.</td>
          <td>Minggu 1–2</td>
          <td class="col-price">Rp 8.000.000</td>
        </tr>
        <tr>
          <td><strong>Sprint 2</strong></td>
          <td>Order Intake, Booking Kapal/Feeder, Dispatch Truk & Depo (Kontainer/Seal), Dokumen Pabean, & Board.</td>
          <td>Minggu 3–4</td>
          <td class="col-price">Rp 8.000.000</td>
        </tr>
        <tr>
          <td><strong>Sprint 3</strong></td>
          <td>Job Costing Engine (Planned vs Actual), Approval Selisih Biaya, Cash Advance, & Job Closing Lock.</td>
          <td>Minggu 5–6</td>
          <td class="col-price">Rp 8.000.000</td>
        </tr>
        <tr>
          <td><strong>Sprint 4</strong></td>
          <td>Integrasi & Kalibrasi AI Invoice OCR (ekstraksi sampel invoice vendor lokal), Dashboard Manajemen, & Excel.</td>
          <td>Minggu 7–8</td>
          <td class="col-price">Rp 8.000.000</td>
        </tr>
        <tr>
          <td><strong>Sprint 5</strong></td>
          <td>Migrasi Data Awal Excel, Pengujian Menyeluruh (UAT Bersama Staf), Deployment Server Produksi, & Handover.</td>
          <td>Minggu 9–10</td>
          <td class="col-price">Rp 7.500.000</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- ==================== PAGE 3 ==================== -->
  <div class="page page-break">
    <div class="header">
      <div class="company-brand">
        <h1>Ahmad Ayub Nu'man — Investment, Portfolio & Legal Terms</h1>
      </div>
      <div class="header-meta">
        <div class="badge-meta">Proposal: Web App Logistik Operasional & Costing</div>
      </div>
    </div>

    <div class="section-title">
      <span class="section-num">5</span> Struktur Total Investasi (Sesuai Budget Range Rp 35 - 50 Juta)
    </div>

    <div class="price-highlight-box">
      <div class="price-card">
        <div class="price-tier-name">PAKET CORE SCOPE (ONE TOTAL PRICE)</div>
        <div class="price-val">Rp 39.500.000</div>
        <div class="price-desc">
          Satu harga borongan mengunci seluruh 4 modul inti: Foundation, Operasional Depo/Kapal, Costing + AI OCR Invoice + Cash Advance, Management Dashboard, serta Garansi Bug 30 Hari.
        </div>
      </div>

      <div class="price-card featured">
        <div class="featured-tag">REKOMENDASI LENGKAP</div>
        <div class="price-tier-name">PAKET ALL-IN COMPLETE</div>
        <div class="price-val">Rp 46.500.000</div>
        <div class="price-desc">
          Semua Modul Core + Integrasi CSV Software Akuntansi + Dokumentasi SOP & Pelatihan Staf + Garansi Diperpanjang Menjadi 60 Hari Pasca Go-Live.
        </div>
      </div>
    </div>

    <div class="section-title">
      <span class="section-num">6</span> Garansi & Biaya Pemeliharaan (Maintenance) Pasca Delivery
    </div>
    <div class="card-grid" style="margin-bottom: 6.5px;">
      <div class="card">
        <div class="card-title">
          <span>Garansi Sistem (Termasuk)</span>
          <span class="pill pill-green">Free 30–60 Hari</span>
        </div>
        <div class="card-body">
          Perbaikan gratis 100% untuk setiap bug teknis, deviasi fungsional, atau kendala kalkulasi sistem pasca serah terima hingga sistem benar-benar stabil.
        </div>
      </div>
      <div class="card">
        <div class="card-title">
          <span>Opsi Pemeliharaan Rutin (SLA)</span>
          <span class="pill pill-amber">Opsional</span>
        </div>
        <div class="card-body">
          • <strong>On-Demand:</strong> Rp 250.000 / jam untuk request fitur baru.<br>
          • <strong>Retainer Bulanan:</strong> Rp 1.500.000 / bln (monitoring kesehatan server, audit backup database, dan alokasi 6 jam enhancement/bln).
        </div>
      </div>
    </div>

    <div class="section-title">
      <span class="section-num">7</span> Portofolio Sistem Bisnis Relevan (ERP, TMS, Workflow, Operasional)
    </div>
    <table style="margin-bottom: 6.5px;">
      <thead>
        <tr>
          <th>Nama Sistem / Platform</th>
          <th>Arsitektur & Relevansi Alur Bisnis Logistik</th>
          <th style="width: 140px;">Verifikasi / Link Demo</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Enterprise Supply Chain & Operational Finance (Kiro ERP)</strong></td>
          <td>Arsitektur pengadaan <strong>3-way matching otomatis</strong> (PO vs Surat Jalan vs Invoice Vendor — setara dengan Planned vs Actual Costing logistik), multi-gudang, valuasi stok WAC/FIFO, dan analitik margin kotor real-time.</td>
          <td><a href="https://inventory-pos-hazel.vercel.app" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">inventory-pos-hazel.vercel.app</a></td>
        </tr>
        <tr>
          <td><strong>Operational Fleet & Gate Dispatch Platform (Koneksi ERP Engine)</strong></td>
          <td>Sistem otorisasi pos gerbang berbasis QR security (identik dengan <strong>Depot Gate-In / Gate-Out Kontainer & Truk</strong>), alur persetujuan Maker-Checker, dan ledger transaksi tertutup tanpa selisih.</td>
          <td><a href="https://admin.koneksisantri.tech" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">admin.koneksisantri.tech</a></td>
        </tr>
        <tr>
          <td><strong>High-Volume Document Compliance & Governance Engine (SIMMACI)</strong></td>
          <td>Pengelolaan siklus dokumen terpusat berkapasitas ribuan entitas, batch document generator (identik dengan <strong>Shipping Instruction, Manifest, & Dokumen Pabean</strong>), serta <strong>1.822 automated test cases (100% pass)</strong>.</td>
          <td><a href="https://github.com/ayebe51/simmaci" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">github.com/ayebe51/simmaci</a></td>
        </tr>
      </tbody>
    </table>

    <div class="section-title">
      <span class="section-num">8</span> Kepemilikan Source Code, Data & Ketentuan Legalitas
    </div>
    <div style="font-size: 7.5pt; color: #334155; line-height: 1.32; margin-bottom: 8px;">
      • <strong>Konfirmasi Hak Milik 100%:</strong> Seluruh kode sumber (source code), skrip migrasi, basis data, dan data operasional sepenuhnya menjadi milik perusahaan Anda tanpa royalti atau vendor lock-in.<br>
      • <strong>Perjanjian Kerahasiaan (NDA):</strong> Sepenuhnya bersedia menandatangani mutual NDA sebelum menerima dokumen rinci proses bisnis.<br>
      • <strong>Pembayaran Berbasis Milestone:</strong> Seluruh pembayaran bertahap di Projects.co.id hanya dicairkan setelah pengujian (test sign-off) berhasil.
    </div>

    <div class="sig-section">
      <div class="sig-box">
        <p class="sig-title">Disetujui Oleh Klien,</p>
        <p class="sig-name">( Pimpinan / Manajemen Logistik )</p>
        <p class="sig-role">Tanggal: ........................................</p>
      </div>
      <div class="sig-box">
        <p class="sig-title">Diajukan Oleh,</p>
        <p class="sig-name">Ahmad Ayub Nu'man</p>
        <p class="sig-role">Lead Full-Stack Software Engineer</p>
      </div>
    </div>

    <div class="footer-note">
      Dokumen ini sah sebagai penawaran teknis dan komersial resmi untuk platform web operasional & costing logistik kontainer.
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
    console.log('✓ SUCCESS: PDF Proposal generated at:', pdfPath);

    // Also copy / generate to distinct FINAL filename to eliminate browser/viewer cache issues
    const argsFinal = [
        '--headless',
        '--disable-gpu',
        '--run-all-compositor-stages-before-draw',
        '--no-pdf-header-footer',
        `--print-to-pdf=${pdfFinalPath}`,
        htmlPath
    ];
    execFileSync(browserPath, argsFinal, { stdio: 'pipe' });
    console.log('✓ SUCCESS: PDF Proposal FINAL generated at:', pdfFinalPath);
} else {
    console.log('Browser executable not found for PDF export.');
}
