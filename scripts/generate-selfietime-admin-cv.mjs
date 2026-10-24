import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execFileSync } from 'child_process';
import {
    Document,
    Packer,
    Paragraph,
    TextRun,
    AlignmentType,
    BorderStyle
} from 'docx';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const outputDir = path.join(rootDir, 'tailored-cv');
const publicCvDir = path.join(rootDir, 'public', 'cv');

[outputDir, publicCvDir].forEach(dir => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
});

// =========================================================================
// DATA CV ADMIN OPERASIONAL - 100% OTENTIK, TANPA KLAIM PALSU, FORMAT FORMAL
// =========================================================================
export const adminOperasionalAuthenticCvData = {
    lang: "id",
    personal: {
        name: "Ahmad Ayub Nu'man, S.H.",
        title: "Staff Administrasi Operasional & Pengolahan Data",
        subtitle: "Rekapitulasi Data & Spreadsheet • Jurnal Administrasi & Kas • Penjadwalan & Notulen • Koordinasi Tim",
        location: "Cilacap, Jawa Tengah (Siap Bekerja On-Site / Bersedia Penempatan)",
        email: "ayb.n1994@gmail.com",
        phone: "+62 895 3491 77555",
        whatsappUrl: "https://wa.me/62895349177555",
        linkedin: "https://www.linkedin.com/in/ayub-numan-871406155",
        linkedinDisplay: "linkedin.com/in/ayub-numan-871406155",
        portfolio: "https://portfolio-seven-theta-bovx80a70x.vercel.app/",
        portfolioDisplay: "portfolio-seven-theta-bovx80a70x.vercel.app"
    },
    summary: "Lulusan Sarjana Hukum (S.H. — Hukum Ekonomi Syariah) dengan pengalaman 2+ tahun dalam tata kelola administrasi, rekapitulasi data volume besar, dan pencatatan kas operasional. Sangat mahir mengoperasikan Microsoft Excel (Pivot Table, VLOOKUP/XLOOKUP, formula IF logika, validasi data, dan Conditional Formatting untuk pemantauan data), Microsoft PowerPoint, serta sistem arsip digital. Memiliki kebiasaan kerja yang teliti, rapi, terorganisir, serta ketaatan tinggi pada SOP dan alur koordinasi lintas tim. Memiliki pemahaman kuat mengenai alur mutasi barang, kontrol batas minimum persediaan, pencatatan jurnal kas keluar (petty cash), serta penyusunan jadwal kerja dan notulen rapat yang terstruktur. Siap bekerja secara penuh waktu secara on-site dan bertanggung jawab.",
    skills: {
        administrasiDanData: [
            "Rekapitulasi & Verifikasi Data Volume Besar",
            "Jurnal Administrasi & Pencatatan Kas Operasional (Petty Cash)",
            "Pemahaman Alur Mutasi Stok & Reorder Point",
            "Penyusunan Jadwal Kerja & Notulen Rapat",
            "Pengarsipan Dokumen Fisik & Digital"
        ],
        softwareDanKomputer: [
            "Microsoft Excel (Pivot Table, VLOOKUP, IF, Conditional Formatting, Data Validation)",
            "Microsoft PowerPoint (Penyusunan Bahan Rapat & Notulen)",
            "Microsoft Word & Google Workspace (Docs, Sheets, Drive, Forms)",
            "Aplikasi Komunikasi Koordinasi Kerja (WhatsApp, Email, Zoom)"
        ],
        kompetensiHukumDanKepatuhan: [
            "Ketelitian Tinggi & Kepatuhan Prosedur (SOP)",
            "Pemeriksaan Keabsahan Nota & Bukti Transaksi",
            "Verifikasi Data Akurat Tanpa Selisih (Zero Error)",
            "Integritas & Etika Kerja Profesional Amanah"
        ],
        koordinasiDanKerjasama: [
            "Koordinasi Lintas Divisi (Purchasing, Gudang, & Lapangan)",
            "Komunikasi Solutif & Cepat Tanggap (Fast Response)",
            "Manajemen Waktu & Pemenuhan Timeline Kerja"
        ]
    },
    labels: {
        professionalSummary: "Ringkasan Profesional",
        technicalSkills: "Keahlian Utama & Penguasaan Software",
        professionalExperience: "Pengalaman Kerja Profesional",
        selectedProjects: "Studi Kasus & Portofolio Kemampuan Kerja",
        education: "Pendidikan & Kualifikasi"
    },
    experience: [
        {
            role: "Staf Tata Kelola Data & Administrasi Kelembagaan",
            subtitle: "Pengolahan Data, Verifikasi Berkas, & Pembukuan Operasional",
            company: "LP Ma'arif NU Cilacap",
            location: "Cilacap, Jawa Tengah, Indonesia",
            period: "2024 – Sekarang",
            responsibilities: [
                "Melakukan verifikasi, validasi, dan rekapitulasi basis data terpusat mencakup 17.000+ data peserta didik dan 2.000+ tenaga kerja dengan akurasi 100% dan zero error.",
                "Mengoperasikan spreadsheet Microsoft Excel untuk mengolah data jumlah besar, menyusun formula rekapitulasi otomatis, dan menyajikan laporan berkala kepada pimpinan.",
                "Menangani administrasi pencatatan pembukuan kas operasional, memeriksa kelengkapan nota bukti pengeluaran, serta merekonsiliasi kas keluar secara tertib.",
                "Menyusun jadwal kegiatan operasional, mengoordinasikan pemenuhan dokumen lintas unit kelembagaan, serta membuat notulen rapat koordinasi terstruktur.",
                "Mengorganisasi repositori arsip berkas digital dan dokumen resmi sehingga tertata rapi, sistematis, dan mudah ditelusuri kapan saja."
            ]
        },
        {
            role: "Pengembangan Kemampuan Administrasi & Tata Kelola Data (Mandiri)",
            subtitle: "Studi Kasus Sistem Inventaris, Jurnal Transaksi, & Alur Operasional",
            company: "Proyek Studi Kasus Administrasi & Operasional",
            location: "Indonesia",
            period: "2023 – 2024",
            responsibilities: [
                "Mempelajari dan mempraktikkan alur dokumen pengadaan barang (Purchase Request, Purchase Order, dan Goods Receipt) serta pencatatan mutasi barang.",
                "Merancang template lembar kerja Microsoft Excel untuk pemantauan ketersediaan barang dengan formula indikator stok aman dan batas minimum (reorder point).",
                "Membuat simulasi format laporan kas operasional harian (petty cash) dan rekonsiliasi pengeluaran kas tim.",
                "Menyusun template notulen rapat profesional dan matriks tindak lanjut (Action Items) berbasis timeline kerja."
            ]
        }
    ],
    projects: [
        {
            name: "Portofolio Simulasi Operasional & Mutasi Stok (Studi Kasus Selfie Time)",
            techStack: "Microsoft Excel, Monitoring Unit Remote, Jurnal Kas Operasional, SOP Refill Consumables",
            highlights: [
                "Merancang simulasi database Excel pemantauan stok consumable photobooth (kertas foto & plastik) dengan Conditional Formatting indikator stok aman/kritis otomatis.",
                "Menyusun draf SOP alur pengecekan unit secara remote saat opening dan format rekapitulasi kas kecil operasional terstandarisasi."
            ]
        },
        {
            name: "Sistem Rekapitulasi & Verifikasi Data Massal (SIMMACI)",
            techStack: "Excel Data Validation, Formula Logika, Pengarsipan Dokumen Terpusat",
            highlights: [
                "Menerapkan sistem validasi data dan rekapitulasi terstruktur yang mengeliminasi kesalahan entri data dan mempercepat pembuatan laporan operasional berkala."
            ]
        }
    ],
    education: [
        {
            degree: "Sarjana Hukum (S.H.) — Hukum Ekonomi Syariah",
            institution: "STAI At-Tahdzib Jombang",
            location: "Jombang, Jawa Timur, Indonesia",
            graduationYear: "Lulus 2019",
            notes: "Memiliki fondasi kuat dalam penalaran logis, ketelitian tinggi dalam pemeriksaan berkas dan angka transaksi, ketaatan pada prosedur baku (SOP), serta integritas kerja amanah."
        }
    ]
};

// =========================================================================
// GENERATOR HTML CV DENGAN PALET WARNA NAVY/SLATE PROFESSIONAL (BEBAS PINK)
// =========================================================================
function generateAdminOperasionalFormalHtml(data) {
    const { personal, summary, skills, experience, projects, education, labels } = data;

    const skillCategories = [
        { label: "Administrasi & Pengolahan Data", val: skills.administrasiDanData.join(', ') },
        { label: "Software & Microsoft Office", val: skills.softwareDanKomputer.join(', ') },
        { label: "Ketelitian & Kepatuhan SOP", val: skills.kompetensiHukumDanKepatuhan.join(', ') },
        { label: "Koordinasi & Manajemen Waktu", val: skills.koordinasiDanKerjasama.join(', ') }
    ];

    return `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<title>${personal.name} - CV Admin Operasional</title>
<style>
  @page {
    size: A4 portrait;
    margin: 10mm 12mm 10mm 12mm;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 8.8pt;
    line-height: 1.35;
    color: #2d3748;
    background: #fff;
  }
  .header {
    text-align: center;
    border-bottom: 2px solid #1a365d;
    padding-bottom: 6px;
    margin-bottom: 8px;
  }
  .name {
    font-size: 17pt;
    font-weight: 700;
    color: #1a365d;
    letter-spacing: -0.3px;
    margin-bottom: 2px;
  }
  .role-title {
    font-size: 10pt;
    font-weight: 700;
    color: #2b6cb0;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 2px;
  }
  .subtitle {
    font-size: 8.5pt;
    color: #4a5568;
    font-weight: 500;
    margin-bottom: 5px;
  }
  .contact-bar {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 6px;
    font-size: 8pt;
    color: #4a5568;
  }
  .contact-bar span.sep { color: #cbd5e0; }
  .contact-bar a { color: #2b6cb0; text-decoration: none; font-weight: 500; }

  .section {
    margin-bottom: 7px;
    page-break-inside: avoid;
  }
  .section-title {
    font-size: 9.2pt;
    font-weight: 700;
    color: #1a365d;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-bottom: 1px solid #cbd5e0;
    padding-bottom: 2px;
    margin-bottom: 5px;
  }
  .summary-text {
    font-size: 8.5pt;
    line-height: 1.38;
    color: #2d3748;
    text-align: justify;
  }
  .skills-grid {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }
  .skill-row {
    display: flex;
    font-size: 8.3pt;
    line-height: 1.3;
  }
  .skill-category {
    font-weight: 700;
    color: #1a365d;
    width: 210px;
    flex-shrink: 0;
  }
  .skill-items {
    color: #4a5568;
    flex-grow: 1;
  }
  .item-block {
    margin-bottom: 6px;
  }
  .item-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 1px;
  }
  .item-title {
    font-size: 9pt;
    font-weight: 700;
    color: #1a202c;
  }
  .item-meta {
    font-size: 8pt;
    color: #4a5568;
    font-weight: 600;
  }
  .item-submeta {
    font-size: 8pt;
    color: #2b6cb0;
    margin-bottom: 2px;
    font-weight: 600;
  }
  ul.bullets {
    margin-left: 14px;
    margin-top: 2px;
  }
  ul.bullets li {
    font-size: 8.3pt;
    color: #2d3748;
    margin-bottom: 2px;
    line-height: 1.32;
    text-align: justify;
  }
  .edu-notes {
    font-size: 8pt;
    color: #4a5568;
    margin-top: 2px;
    line-height: 1.3;
    text-align: justify;
  }
  .portfolio-callout {
    background: #f7fafc;
    border-left: 3px solid #2b6cb0;
    padding: 5px 8px;
    margin-top: 5px;
    font-size: 8pt;
    color: #2b6cb0;
  }
</style>
</head>
<body>
  <div class="header">
    <div class="name">${personal.name}</div>
    <div class="role-title">${personal.title}</div>
    <div class="subtitle">${personal.subtitle}</div>
    <div class="contact-bar">
      <span>${personal.location}</span>
      <span class="sep">•</span>
      <a href="mailto:${personal.email}">${personal.email}</a>
      <span class="sep">•</span>
      <a href="${personal.whatsappUrl}">${personal.phone}</a>
      <span class="sep">•</span>
      <a href="${personal.linkedin}">${personal.linkedinDisplay}</a>
      <span class="sep">•</span>
      <a href="${personal.portfolio}">Portofolio Online</a>
    </div>
  </div>

  <div class="section">
    <div class="section-title">${labels.professionalSummary}</div>
    <p class="summary-text">${summary}</p>
  </div>

  <div class="section">
    <div class="section-title">${labels.technicalSkills}</div>
    <div class="skills-grid">
      ${skillCategories.map(sc => `
        <div class="skill-row">
          <span class="skill-category">${sc.label}:</span>
          <span class="skill-items">${sc.val}</span>
        </div>
      `).join('')}
    </div>
  </div>

  <div class="section">
    <div class="section-title">${labels.professionalExperience}</div>
    ${experience.map(exp => `
      <div class="item-block">
        <div class="item-header">
          <span class="item-title">${exp.role}</span>
          <span class="item-meta">${exp.period}</span>
        </div>
        <div class="item-submeta">${exp.company} • ${exp.subtitle} (${exp.location})</div>
        <ul class="bullets">
          ${exp.responsibilities.map(r => `<li>${r}</li>`).join('')}
        </ul>
      </div>
    `).join('')}
  </div>

  <div class="section">
    <div class="section-title">${labels.selectedProjects}</div>
    ${projects.map(proj => `
      <div class="item-block">
        <div class="item-header">
          <span class="item-title">${proj.name}</span>
        </div>
        <div class="item-submeta" style="color: #4a5568; font-weight: normal; font-style: italic;">Kompetensi: ${proj.techStack}</div>
        <ul class="bullets">
          ${proj.highlights.map(h => `<li>${h}</li>`).join('')}
        </ul>
      </div>
    `).join('')}
  </div>

  <div class="section">
    <div class="section-title">${labels.education}</div>
    ${education.map(edu => `
      <div class="item-block">
        <div class="item-header">
          <span class="item-title">${edu.degree} — ${edu.institution}</span>
          <span class="item-meta">${edu.graduationYear}</span>
        </div>
        <div class="item-submeta">${edu.location}</div>
        <p class="edu-notes">${edu.notes}</p>
      </div>
    `).join('')}
  </div>

  <div class="portfolio-callout">
    <strong>Lampiran Portofolio Kemampuan Kerja:</strong> Dokumen Portofolio Operasional (Simulasi Excel Mutasi Stok Consumables Photobooth, SOP Monitoring Unit Remote, Jurnal Kas Operasional, dan Format Notulen Meeting) disertakan terlampir sebagai bukti kompetensi teknis pelamar.
  </div>
</body>
</html>`;
}

// =========================================================================
// GENERATOR HTML PORTOFOLIO DENGAN PENJELASAN STUDI KASUS MANDIRI & WARNA NAVY
// =========================================================================
function generateAdminOperasionalFormalPortfolioHtml() {
    return `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<title>Portofolio Kemampuan Kerja Admin Operasional - Ahmad Ayub Nu'man</title>
<style>
  @page {
    size: A4 portrait;
    margin: 12mm 14mm 12mm 14mm;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    color: #2d3748;
    background: #fff;
    font-size: 9pt;
    line-height: 1.45;
  }
  .page {
    page-break-after: always;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .page:last-child {
    page-break-after: avoid;
  }

  /* Cover Page */
  .cover-container {
    padding: 30px 20px;
    border: 2px solid #1a365d;
    border-radius: 8px;
    height: 95%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: linear-gradient(180deg, #f7fafc 0%, #edf2f7 100%);
  }
  .badge-tag {
    display: inline-block;
    background: #1a365d;
    color: #fff;
    font-size: 8.5pt;
    font-weight: 700;
    padding: 4px 12px;
    border-radius: 20px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }
  .cover-title {
    font-size: 23pt;
    font-weight: 800;
    color: #1a365d;
    line-height: 1.2;
    margin-top: 15px;
    margin-bottom: 8px;
  }
  .cover-subtitle {
    font-size: 11.5pt;
    color: #2b6cb0;
    font-weight: 600;
    margin-bottom: 20px;
  }
  .cover-desc {
    font-size: 9.3pt;
    color: #4a5568;
    line-height: 1.5;
    text-align: justify;
    border-left: 3px solid #2b6cb0;
    padding-left: 12px;
    margin-bottom: 25px;
  }
  .cover-author-box {
    background: #fff;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    padding: 16px;
    margin-top: 20px;
  }
  .author-name {
    font-size: 13pt;
    font-weight: 700;
    color: #1a202c;
  }
  .author-role {
    font-size: 9.5pt;
    color: #4a5568;
    margin-bottom: 8px;
  }
  .author-contacts {
    font-size: 8.5pt;
    color: #718096;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }

  /* Section Styling */
  .section-header {
    border-bottom: 2px solid #1a365d;
    padding-bottom: 4px;
    margin-bottom: 12px;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
  .section-num {
    font-size: 8pt;
    font-weight: 700;
    color: #2b6cb0;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  .section-heading {
    font-size: 13pt;
    font-weight: 700;
    color: #1a365d;
  }

  /* Cards */
  .card {
    background: #fff;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    padding: 10px 12px;
    margin-bottom: 10px;
  }
  .card-title {
    font-size: 9.5pt;
    font-weight: 700;
    color: #1a365d;
    margin-bottom: 4px;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .card-desc {
    font-size: 8.5pt;
    color: #4a5568;
    margin-bottom: 6px;
    line-height: 1.35;
  }

  /* Spreadsheet Mock Table */
  table.sheet-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 7.6pt;
    margin-top: 6px;
    margin-bottom: 6px;
  }
  table.sheet-table th {
    background: #1a365d;
    color: #fff;
    font-weight: 600;
    text-align: left;
    padding: 5px 6px;
    border: 1px solid #1a365d;
  }
  table.sheet-table td {
    padding: 4px 6px;
    border: 1px solid #e2e8f0;
    color: #2d3748;
  }
  table.sheet-table tr:nth-child(even) {
    background: #f7fafc;
  }
  .status-tag {
    display: inline-block;
    padding: 1px 6px;
    border-radius: 4px;
    font-weight: 600;
    font-size: 7.2pt;
  }
  .status-safe { background: #c6f6d5; color: #22543d; }
  .status-warning { background: #feebc8; color: #744210; }
  .status-danger { background: #fed7d7; color: #742a2a; }

  .grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  .sop-step {
    background: #f8fafc;
    border-left: 3px solid #2b6cb0;
    padding: 6px 10px;
    margin-bottom: 6px;
    font-size: 8.2pt;
  }
</style>
</head>
<body>

  <!-- ================= PAGE 1: COVER ================= -->
  <div class="page">
    <div class="cover-container">
      <div>
        <span class="badge-tag">Studi Kasus & Portofolio Kemampuan Kerja</span>
        <h1 class="cover-title">Portofolio Administrasi Operasional & Rekapitulasi Data</h1>
        <div class="cover-subtitle">Simulasi Studi Kasus: Pengendalian Mutasi Stok Consumable, Monitoring Unit, Jurnal Kas Operasional, dan Notulen Meeting</div>
        <p class="cover-desc">
          Dokumen ini disusun sebagai <strong>portofolio bukti kemampuan teknis (work sample)</strong> untuk posisi <strong>Admin Operasional di Selfie Time (PT Intinya Teknologi)</strong>. Dokumen ini mendemonstrasikan secara transparan penguasaan pelamar dalam pengoperasian Microsoft Excel tingkat lanjut (kontrol mutasi stok, formula batas minimum, validasi data), alur SOP monitoring kesiapan unit operasional, pencatatan jurnal kas kecil (petty cash), serta pembuatan notulen rapat terstruktur.
        </p>

        <div class="card" style="margin-top: 25px; border-color: #cbd5e0;">
          <div class="card-title" style="color: #1a365d;">Pilar Kemampuan Kerja yang Ditampilkan:</div>
          <ul style="margin-left: 18px; margin-top: 6px; font-size: 8.8pt; line-height: 1.5; color: #4a5568;">
            <li><strong>Showcase 1 — Lembar Kerja Excel Kontrol Mutasi Stok:</strong> Simulasi monitoring sisa persediaan kertas foto 4R, plastik frame, dan ribbon cartridge pada unit booth dengan formula peringatan batas minimum otomatis.</li>
            <li><strong>Showcase 2 — Draf SOP Monitoring Unit & Administrasi Pengadaan:</strong> Alur kerja pengecekan stok unit sebelum jam buka (opening) dan alur administrasi Purchase Request (PR) ke gudang dan purchasing.</li>
            <li><strong>Showcase 3 — Format Jurnal Kas Operasional Tim:</strong> Pencatatan pengeluaran kas kecil (petty cash) operasional dengan kelengkapan bukti nota dan saldo konsisten.</li>
            <li><strong>Showcase 4 — Format Penjadwalan & Notulen Rapat:</strong> Template notulen rapat evaluasi tim operasional dilengkapi dengan daftar Action Items, PIC, dan batas waktu pengerjaan.</li>
          </ul>
        </div>
      </div>

      <div class="cover-author-box">
        <div class="author-name">Ahmad Ayub Nu'man, S.H.</div>
        <div class="author-role">Kandidat Admin Operasional • PT Intinya Teknologi (Selfie Time)</div>
        <div class="author-contacts">
          <span>📍 Cilacap, Jawa Tengah (Siap Bekerja On-Site)</span>
          <span>📞 WhatsApp: +62 895 3491 77555</span>
          <span>✉️ Email: ayb.n1994@gmail.com</span>
        </div>
      </div>
    </div>
  </div>

  <!-- ================= PAGE 2: STOCK CONTROL SPREADSHEET ================= -->
  <div class="page">
    <div class="section-header">
      <div class="section-heading">Showcase 1: Simulasi Kontrol Mutasi Stok Consumable (Microsoft Excel)</div>
      <div class="section-num">Pilar 01 / Spreadsheet Data</div>
    </div>

    <p style="font-size: 8.5pt; color: #4a5568; margin-bottom: 8px;">
      Sebagai bukti keahlian Microsoft Excel dalam mendukung operasional Selfie Time, berikut simulasi lembar kerja pemantauan stok consumable (Kertas Foto 4R, Plastik Frame Strip, dan Ribbon) pada berbagai lokasi unit booth:
    </p>

    <div class="card">
      <div class="card-title">Tabel: "SelfieTime_LiveStock_Monitoring_Daily"</div>
      <table class="sheet-table">
        <thead>
          <tr>
            <th>ID Unit</th>
            <th>Lokasi Unit</th>
            <th>Item Consumable</th>
            <th>Stok Awal</th>
            <th>Mutasi Keluar</th>
            <th>Refill Masuk</th>
            <th>Sisa Stok</th>
            <th>Batas Min.</th>
            <th>Status Stok</th>
            <th>Tindakan Operasional</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>ST-01</strong></td>
            <td>Grand Indonesia Mall</td>
            <td>Paper 4R (Roll)</td>
            <td>12 roll</td>
            <td>4 roll</td>
            <td>0</td>
            <td>8 roll</td>
            <td>3 roll</td>
            <td><span class="status-tag status-safe">AMAN</span></td>
            <td>Stok mencukupi operasional</td>
          </tr>
          <tr>
            <td><strong>ST-01</strong></td>
            <td>Grand Indonesia Mall</td>
            <td>Plastik Frame Strip</td>
            <td>250 pcs</td>
            <td>180 pcs</td>
            <td>0</td>
            <td>70 pcs</td>
            <td>100 pcs</td>
            <td><span class="status-tag status-warning">PERLU REFILL</span></td>
            <td>Jadwalkan kirim refill 200 pcs</td>
          </tr>
          <tr>
            <td><strong>ST-02</strong></td>
            <td>Mall Kelapa Gading</td>
            <td>Paper 4R (Roll)</td>
            <td>4 roll</td>
            <td>3 roll</td>
            <td>0</td>
            <td>1 roll</td>
            <td>3 roll</td>
            <td><span class="status-tag status-danger">KRITIS (H-1)</span></td>
            <td>Refill darurat sebelum mall buka</td>
          </tr>
          <tr>
            <td><strong>ST-02</strong></td>
            <td>Mall Kelapa Gading</td>
            <td>Plastik Frame Strip</td>
            <td>300 pcs</td>
            <td>120 pcs</td>
            <td>200 pcs</td>
            <td>380 pcs</td>
            <td>100 pcs</td>
            <td><span class="status-tag status-safe">AMAN</span></td>
            <td>Stok fisik terverifikasi</td>
          </tr>
          <tr>
            <td><strong>EV-05</strong></td>
            <td>Pop-up Event Senayan</td>
            <td>Paper Strip Cut</td>
            <td>8 roll</td>
            <td>6 roll</td>
            <td>5 roll</td>
            <td>7 roll</td>
            <td>4 roll</td>
            <td><span class="status-tag status-safe">AMAN</span></td>
            <td>Buffer stock event aman</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="grid-2">
      <div class="card">
        <div class="card-title" style="color: #1a365d;">Formula Excel yang Diterapkan:</div>
        <ul style="margin-left: 14px; font-size: 8.2pt; color: #4a5568; line-height: 1.4;">
          <li><strong>Formula IF Dinamis:</strong> <code>=IF(Sisa &lt;= BatasMin*0.5, "KRITIS", IF(Sisa &lt;= BatasMin, "PERLU REFILL", "AMAN"))</code>.</li>
          <li><strong>Conditional Formatting:</strong> Penanda visual otomatis (Hijau = Aman, Kuning = Perlu Refill, Merah = Kritis).</li>
          <li><strong>VLOOKUP / XLOOKUP:</strong> Menarik otomatis data safety stock dan kontak PIC lapangan berdasarkan ID Unit.</li>
          <li><strong>Pivot Table:</strong> Rekapitulasi jumlah konsumsi kertas dan plastik per minggu sebagai dasar pengajuan barang ke Purchasing.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title" style="color: #1a365d;">Manfaat bagi Kelancaran Operasional:</div>
        <ul style="margin-left: 14px; font-size: 8.2pt; color: #4a5568; line-height: 1.4;">
          <li><strong>Mencegah Kehabisan Bahan:</strong> Mesin photobooth terpantau secara preventif sehingga tidak kehabisan kertas saat jam ramai mal.</li>
          <li><strong>Pencatatan Rapi & Tertata:</strong> Data mutasi keluar-masuk barang tercatat dengan nomor bukti sehingga mempermudah audit fisik.</li>
          <li><strong>Pelaporan Cepat ke Atasan:</strong> Status ketersediaan barang di seluruh unit dapat dilaporkan dalam hitungan menit.</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- ================= PAGE 3: REMOTE SOP & PROCUREMENT ================= -->
  <div class="page">
    <div class="section-header">
      <div class="section-heading">Showcase 2: Draf Alur Kerja Monitoring & Administrasi Pengadaan</div>
      <div class="section-num">Pilar 02 / Operations Flow</div>
    </div>

    <div class="card">
      <div class="card-title">Alur Kerja (SOP) Pemantauan Stok Unit Jarak Jauh (Remote Monitoring)</div>
      
      <div class="sop-step">
        <strong>1. Tahap Opening Unit (Pukul 09.30 - 10.00 WIB):</strong>
        <p style="margin-top: 2px; color: #4a5568;">Mengecek sistem dashboard kuota unit photobooth sebelum jam buka mal dimulai. Memastikan kuota roll kertas dan plastik berada di atas batas aman.</p>
      </div>

      <div class="sop-step">
        <strong>2. Tahap Koordinasi Refill Stok:</strong>
        <p style="margin-top: 2px; color: #4a5568;">Bila sisa stok mendekati batas minimum (peringatan kuning/merah), segera mengonfirmasi tim gudang (warehouse) dan kurir/staf lapangan agar stok tiba sebelum jam kunjungan ramai.</p>
      </div>

      <div class="sop-step">
        <strong>3. Tahap Konfirmasi & Input Berita Acara:</strong>
        <p style="margin-top: 2px; color: #4a5568;">Menerima bukti foto bahwa kertas atau plastik sudah berhasil dimasukkan ke unit oleh tim lapangan, lalu memperbarui catatan sisa stok pada lembar kerja harian.</p>
      </div>
    </div>

    <div class="card" style="margin-top: 10px;">
      <div class="card-title">Format Monitoring Pengadaan Barang Operasional (Procurement Tracking)</div>
      <div class="card-desc">Format pelacakan administrasi pengadaan barang pendukung operasional (lakban, plastik packing, ATK, sparepart):</div>
      <table class="sheet-table">
        <thead>
          <tr>
            <th>No. Pengajuan</th>
            <th>Tanggal PR</th>
            <th>Item Barang</th>
            <th>Qty</th>
            <th>Divisi Terkait</th>
            <th>Status Pengadaan</th>
            <th>Estimasi Tiba</th>
            <th>Verifikasi Fisik</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>PR-26/10-01</td>
            <td>18 Okt 2026</td>
            <td>Plastik Sleeve Custom 4R</td>
            <td>5.000 pcs</td>
            <td>Purchasing</td>
            <td>PO Vendor Disetujui</td>
            <td>22 Okt 2026</td>
            <td>Menunggu Pengiriman</td>
          </tr>
          <tr>
            <td>PR-26/10-02</td>
            <td>19 Okt 2026</td>
            <td>Thermal Ribbon Set</td>
            <td>20 set</td>
            <td>Warehouse Pusat</td>
            <td>Barang Keluar Gudang</td>
            <td>21 Okt 2026</td>
            <td>Tiba, Sesuai Surat Jalan</td>
          </tr>
          <tr>
            <td>PR-26/10-03</td>
            <td>20 Okt 2026</td>
            <td>Kabel HDMI & Lakban Bening</td>
            <td>10 pcs</td>
            <td>Purchasing</td>
            <td>Selesai Dibeli</td>
            <td>20 Okt 2026</td>
            <td>Selesai (Nota Terlampir)</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- ================= PAGE 4: PETTY CASH & MEETING MINUTES ================= -->
  <div class="page">
    <div class="section-header">
      <div class="section-heading">Showcase 3 & 4: Format Kas Operasional & Notulen Rapat</div>
      <div class="section-num">Pilar 03 & 04 / Finance & Minutes</div>
    </div>

    <div class="card">
      <div class="card-title">Showcase 3: Format Jurnal Kas Operasional Tim (Petty Cash Report)</div>
      <div class="card-desc">Contoh format pencatatan pengeluaran harian tim operasional lapangan dengan nomor bukti kas keluar:</div>
      <table class="sheet-table">
        <thead>
          <tr>
            <th>Tanggal</th>
            <th>No. Bukti</th>
            <th>Keterangan / Keperluan Operasional</th>
            <th>Penerima / PIC</th>
            <th>Debit (Masuk)</th>
            <th>Kredit (Keluar)</th>
            <th>Saldo Kas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>15/10/2026</td>
            <td>BKK-01</td>
            <td>Saldo Awal Kas Operasional Mingguan</td>
            <td>Finance Pusat</td>
            <td>Rp 2.000.000</td>
            <td>-</td>
            <td>Rp 2.000.000</td>
          </tr>
          <tr>
            <td>16/10/2026</td>
            <td>BKK-02</td>
            <td>Ongkir Kurir Instan Pengiriman Refill Kertas GI</td>
            <td>Kurir Ekspedisi</td>
            <td>-</td>
            <td>Rp 45.000</td>
            <td>Rp 1.955.000</td>
          </tr>
          <tr>
            <td>18/10/2026</td>
            <td>BKK-03</td>
            <td>Pembelian Baterai & Lakban Event Senayan</td>
            <td>Teknisi Lapangan</td>
            <td>-</td>
            <td>Rp 85.000</td>
            <td>Rp 1.870.000</td>
          </tr>
          <tr>
            <td>20/10/2026</td>
            <td>BKK-04</td>
            <td>Transportasi Teknisi Pengecekan Kamera MKG</td>
            <td>Teknisi Lapangan</td>
            <td>-</td>
            <td>Rp 50.000</td>
            <td>Rp 1.820.000</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="grid-2" style="margin-top: 10px;">
      <div class="card">
        <div class="card-title" style="color: #1a365d;">Showcase 4: Format Notulen Rapat</div>
        <div style="font-size: 8pt; color: #718096; margin-bottom: 4px;">Format Notulen Rapat Koordinasi Operasional</div>
        <ul style="margin-left: 14px; font-size: 8.2pt; color: #4a5568; line-height: 1.4;">
          <li><strong>Agenda:</strong> Evaluasi stok weekend dan kendala teknis unit photobooth.</li>
          <li><strong>Temuan:</strong> Kebutuhan plastik strip meningkat di unit mal saat akhir pekan.</li>
          <li><strong>Action Items:</strong>
            <br>• Purchasing pesan buffer stock tambahan (+500 pcs) — PIC: Purchasing (Deadline: Kamis).
            <br>• Teknisi cek sensor unit MKG — PIC: Teknisi (Deadline: Jumat pagi).
          </li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title" style="color: #1a365d;">Komitmen Kinerja & Tanggung Jawab</div>
        <div style="font-size: 8pt; color: #718096; margin-bottom: 4px;">Kesiapan Bekerja On-Site</div>
        <ul style="margin-left: 14px; font-size: 8.2pt; color: #4a5568; line-height: 1.4;">
          <li><strong>Ketelitian Tanpa Kompromi:</strong> Berlatar belakang Sarjana Hukum yang terbiasa memeriksa data dan berkas dengan cermat.</li>
          <li><strong>Disiplin & Tanggung Jawab:</strong> Terbiasa menyusun laporan berkala tepat waktu dan mematuhi SOP perusahaan.</li>
          <li><strong>Kesiapan Penuh:</strong> Siap bekerja secara on-site, berkoordinasi secara aktif dengan tim, dan siap belajar cepat.</li>
        </ul>
      </div>
    </div>
  </div>

</body>
</html>`;
}

// =========================================================================
// GENERATOR DOCX CV FORMAL NAVY / SLATE (BEBAS PINK & BEBAS WFH)
// =========================================================================
async function buildAdminOperasionalFormalDocx(data, docxPath) {
    const { personal, summary, skills, experience, projects, education, labels } = data;

    const createSectionHeading = (title) => {
        return new Paragraph({
            spacing: { before: 180, after: 60 },
            border: {
                bottom: {
                    color: "1A365D",
                    space: 4,
                    style: BorderStyle.SINGLE,
                    size: 12
                }
            },
            children: [
                new TextRun({
                    text: title.toUpperCase(),
                    bold: true,
                    size: 20,
                    color: "1A365D"
                })
            ]
        });
    };

    const docChildren = [
        new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 20 },
            children: [
                new TextRun({ text: personal.name, bold: true, size: 30, color: "1A365D" })
            ]
        }),
        new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 20 },
            children: [
                new TextRun({ text: personal.title.toUpperCase(), bold: true, size: 20, color: "2B6CB0" })
            ]
        }),
        new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 40 },
            children: [
                new TextRun({ text: personal.subtitle, italics: true, size: 17, color: "4A5568" })
            ]
        }),
        new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 120 },
            children: [
                new TextRun({ text: `${personal.location}  •  ${personal.email}  •  ${personal.phone}  •  LinkedIn: ${personal.linkedinDisplay}`, size: 16, color: "4A5568" })
            ]
        }),

        // Summary
        createSectionHeading(labels.professionalSummary),
        new Paragraph({
            alignment: AlignmentType.JUSTIFIED,
            spacing: { after: 80 },
            children: [
                new TextRun({ text: summary, size: 17, color: "2D3748" })
            ]
        }),

        // Skills
        createSectionHeading(labels.technicalSkills),
        new Paragraph({
            spacing: { after: 30 },
            children: [
                new TextRun({ text: "Administrasi & Pengolahan Data: ", bold: true, size: 17, color: "1A365D" }),
                new TextRun({ text: skills.administrasiDanData.join(', '), size: 17, color: "4A5568" })
            ]
        }),
        new Paragraph({
            spacing: { after: 30 },
            children: [
                new TextRun({ text: "Software & Microsoft Office: ", bold: true, size: 17, color: "1A365D" }),
                new TextRun({ text: skills.softwareDanKomputer.join(', '), size: 17, color: "4A5568" })
            ]
        }),
        new Paragraph({
            spacing: { after: 30 },
            children: [
                new TextRun({ text: "Ketelitian & Kepatuhan SOP: ", bold: true, size: 17, color: "1A365D" }),
                new TextRun({ text: skills.kompetensiHukumDanKepatuhan.join(', '), size: 17, color: "4A5568" })
            ]
        }),
        new Paragraph({
            spacing: { after: 80 },
            children: [
                new TextRun({ text: "Koordinasi & Manajemen Waktu: ", bold: true, size: 17, color: "1A365D" }),
                new TextRun({ text: skills.koordinasiDanKerjasama.join(', '), size: 17, color: "4A5568" })
            ]
        }),

        // Experience
        createSectionHeading(labels.professionalExperience)
    ];

    experience.forEach(exp => {
        docChildren.push(
            new Paragraph({
                spacing: { before: 80, after: 20 },
                children: [
                    new TextRun({ text: `${exp.role} `, bold: true, size: 18, color: "1A202C" }),
                    new TextRun({ text: `\t${exp.period}`, bold: true, size: 16, color: "4A5568" })
                ]
            }),
            new Paragraph({
                spacing: { after: 40 },
                children: [
                    new TextRun({ text: `${exp.company} • ${exp.subtitle} (${exp.location})`, italics: true, size: 16, color: "2B6CB0" })
                ]
            })
        );
        exp.responsibilities.forEach(resp => {
            docChildren.push(
                new Paragraph({
                    bullet: { level: 0 },
                    spacing: { after: 20 },
                    alignment: AlignmentType.JUSTIFIED,
                    children: [
                        new TextRun({ text: resp, size: 16, color: "2D3748" })
                    ]
                })
            );
        });
    });

    // Projects
    docChildren.push(createSectionHeading(labels.selectedProjects));
    projects.forEach(p => {
        docChildren.push(
            new Paragraph({
                spacing: { before: 60, after: 20 },
                children: [
                    new TextRun({ text: p.name, bold: true, size: 17, color: "1A202C" })
                ]
            }),
            new Paragraph({
                spacing: { after: 30 },
                children: [
                    new TextRun({ text: `Kompetensi: ${p.techStack}`, italics: true, size: 15, color: "4A5568" })
                ]
            })
        );
        p.highlights.forEach(h => {
            docChildren.push(
                new Paragraph({
                    bullet: { level: 0 },
                    spacing: { after: 20 },
                    alignment: AlignmentType.JUSTIFIED,
                    children: [
                        new TextRun({ text: h, size: 16, color: "2D3748" })
                    ]
                })
            );
        });
    });

    // Education
    docChildren.push(createSectionHeading(labels.education));
    education.forEach(edu => {
        docChildren.push(
            new Paragraph({
                spacing: { before: 60, after: 20 },
                children: [
                    new TextRun({ text: `${edu.degree} — ${edu.institution}`, bold: true, size: 17, color: "1A202C" }),
                    new TextRun({ text: `\t${edu.graduationYear}`, size: 16, color: "4A5568" })
                ]
            }),
            new Paragraph({
                spacing: { after: 30 },
                children: [
                    new TextRun({ text: edu.location, italics: true, size: 15, color: "4A5568" })
                ]
            }),
            new Paragraph({
                spacing: { after: 40 },
                alignment: AlignmentType.JUSTIFIED,
                children: [
                    new TextRun({ text: edu.notes, size: 15, color: "4A5568" })
                ]
            })
        );
    });

    const doc = new Document({
        sections: [
            {
                properties: {
                    page: {
                        margin: {
                            top: 600,
                            bottom: 600,
                            left: 750,
                            right: 750
                        }
                    }
                },
                children: docChildren
            }
        ]
    });

    const buffer = await Packer.toBuffer(doc);
    fs.writeFileSync(docxPath, buffer);
    console.log(`✓ Admin Operasional Formal DOCX generated: ${path.basename(docxPath)}`);
}

function findBrowserExecutable() {
    const candidatePaths = [
        'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
        'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
        'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
        'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
    ];

    for (const p of candidatePaths) {
        if (fs.existsSync(p)) return p;
    }
    return null;
}

function buildPdf(htmlPath, pdfPath) {
    const browserPath = findBrowserExecutable();
    if (!browserPath) {
        console.warn(`⚠ Warning: Headless browser not found, cannot build ${path.basename(pdfPath)}`);
        return;
    }

    if (fs.existsSync(pdfPath)) {
        try {
            fs.unlinkSync(pdfPath);
        } catch (e) {
            console.warn(`Note: Could not unlink ${pdfPath}, may be open in viewer.`);
        }
    }

    const fileUrl = 'file:///' + path.resolve(htmlPath).replace(/\\/g, '/');

    const args = [
        '--headless=new',
        '--disable-gpu',
        '--no-pdf-header-footer',
        `--print-to-pdf=${pdfPath}`,
        fileUrl
    ];

    execFileSync(browserPath, args, { stdio: 'pipe' });
    console.log(`✓ Generated PDF: ${path.basename(pdfPath)}`);
}

// ==========================================
// MAIN CONTROLLER
// ==========================================
async function main() {
    console.log('=== Admin Operasional Selfie Time (Formal Navy / Authentic) Generator ===');
    console.log(`Output folder: ${outputDir}`);

    // 1. GENERATE TAILORED FORMAL ADMIN OPERASIONAL CV
    console.log('\n[1/2] Generating Tailored Formal Admin Operasional CV (PDF & DOCX)...');
    const tempCvHtml = path.join(rootDir, 'scripts', 'temp_admin_operasional_formal_cv.html');
    const cvPdfPath = path.join(outputDir, 'Ahmad-Ayub-Numan-Admin-Operasional-SelfieTime-CV.pdf');
    const cvDocxPath = path.join(outputDir, 'Ahmad-Ayub-Numan-Admin-Operasional-SelfieTime-CV.docx');

    fs.writeFileSync(tempCvHtml, generateAdminOperasionalFormalHtml(adminOperasionalAuthenticCvData), 'utf-8');
    buildPdf(tempCvHtml, cvPdfPath);
    await buildAdminOperasionalFormalDocx(adminOperasionalAuthenticCvData, cvDocxPath);
    if (fs.existsSync(tempCvHtml)) fs.unlinkSync(tempCvHtml);

    // 2. GENERATE FORMAL ADMIN OPERASIONAL PORTFOLIO SHOWCASE
    console.log('\n[2/2] Generating Formal Admin Operasional Portfolio Showcase (PDF)...');
    const tempPortfolioHtml = path.join(rootDir, 'scripts', 'temp_admin_operasional_formal_portfolio.html');
    const portfolioPdfPath = path.join(outputDir, 'Ahmad-Ayub-Numan-Portofolio-Admin-Operasional-SelfieTime.pdf');

    fs.writeFileSync(tempPortfolioHtml, generateAdminOperasionalFormalPortfolioHtml(), 'utf-8');
    buildPdf(tempPortfolioHtml, portfolioPdfPath);
    if (fs.existsSync(tempPortfolioHtml)) fs.unlinkSync(tempPortfolioHtml);

    // Copy to public/cv/ for web access
    [cvPdfPath, cvDocxPath, portfolioPdfPath].forEach(filePath => {
        try {
            fs.copyFileSync(filePath, path.join(publicCvDir, path.basename(filePath)));
        } catch (e) {}
    });

    console.log('\n=== Success! All Formal Admin Operasional documents generated successfully! ===');
}

main().catch(err => {
    console.error('Error generating Admin Operasional files:', err);
    process.exit(1);
});
