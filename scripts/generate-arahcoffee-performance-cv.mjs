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
// DATA CV PERFORMANCE MANAGEMENT & REWARD SPECIALIST - ARAH COFFEE
// =========================================================================
export const performanceRewardArahCoffeeCvData = {
    lang: "id",
    personal: {
        name: "Ahmad Ayub Nu'man, S.H.",
        title: "Performance Management & People Analytics Specialist",
        subtitle: "KPI & Scorecard Framework • Pay-for-Performance & Incentive Modeling • Spreadsheet Analytics • Legal Compliance",
        location: "Cilacap, Jawa Tengah (Siap Penempatan / Bekerja Sesuai Kebutuhan ARAH Coffee)",
        email: "ayb.n1994@gmail.com",
        phone: "+62 895 3491 77555",
        whatsappUrl: "https://wa.me/62895349177555",
        linkedin: "https://www.linkedin.com/in/ayub-numan-871406155",
        linkedinDisplay: "linkedin.com/in/ayub-numan-871406155",
        portfolio: "https://portfolio-seven-theta-bovx80a70x.vercel.app/",
        portfolioDisplay: "portfolio-seven-theta-bovx80a70x.vercel.app"
    },
    summary: "Tenaga profesional data dan tata kelola dengan latar belakang Sarjana Hukum (S.H. — Hukum Ekonomi Syariah) dan pengalaman 2+ tahun dalam analisis data skala besar, evaluasi metrik kinerja kelembagaan, serta pemodelan analitis spreadsheet (Excel/Google Sheets). Memiliki pemahaman mendalam tentang perumusan KPI objektif, alur review performa dan kalibrasi evaluasi, perancangan skema insentif berbasis pay-for-performance, serta struktur skala upah dan kepatuhan hukum ketenagakerjaan. Berpengalaman mengelola basis data 2.000+ tenaga kerja di LP Ma'arif NU Cilacap serta memahami dinamika operasional ritel F&B multi-outlet (produktivitas outlet, waste control, dan target penjualan). Memiliki ketelitian numerik tinggi, penalaran logis berbasis data (analytical thinking), serta integritas dan kerahasiaan data yang terpercaya.",
    skills: {
        performanceManagement: [
            "Penyusunan Framework KPI & Balanced Scorecard",
            "Measurement Logic & Target Setting Objektif",
            "Performance Review & Calibration Matrix (9-Box Grid)",
            "Analisis Gap Produktivitas & People Analytics",
            "Koneksi KPI ke People Decision & Evaluasi Karir"
        ],
        compensationAndRewards: [
            "Desain Skema Insentif & Reward Pay-for-Performance",
            "Pemodelan Anggaran Bonus & Multi-Outlet Incentive Tiers",
            "Analisis Struktur Skala Upah (Salary Structure & Grids)",
            "Internal Equity & Dasar Salary Benchmarking",
            "Kepatuhan Regulasi Upah & Hukum Ketenagakerjaan"
        ],
        dataAnalyticsAndTools: [
            "Microsoft Excel / Google Sheets Tingkat Lanjut (Modeling, Pivot, VLOOKUP/XLOOKUP, IF Logika, Data Validation)",
            "People Analytics & Visualisasi Data Metrik Kinerja",
            "Microsoft PowerPoint (Penyusunan Scorecard & Executive Report)",
            "Pemahaman Dinamika Operasional F&B Multi-Outlet & Retail"
        ],
        softSkills: [
            "Analytical Thinking & Problem Solving Berbasis Data",
            "Kerahasiaan Tinggi (High Confidentiality & Integrity)",
            "Komunikasi Objektif & Kolaborasi Lintas Departemen",
            "Kepatuhan Prosedural & Etika Kerja Amanah"
        ]
    },
    labels: {
        professionalSummary: "Ringkasan Profesional",
        technicalSkills: "Keahlian Utama & Kompetensi",
        professionalExperience: "Pengalaman Kerja Profesional",
        selectedProjects: "Studi Kasus & Portofolio Pemodelan Kinerja",
        education: "Pendidikan & Kualifikasi"
    },
    experience: [
        {
            role: "Koordinator Tata Kelola Data & Evaluasi Kinerja Tenaga Kerja",
            subtitle: "Manajemen Data SDM, Metrik Kinerja, & Administrasi Lembaga",
            company: "LP Ma'arif NU Cilacap",
            location: "Cilacap, Jawa Tengah, Indonesia",
            period: "2024 – Sekarang",
            responsibilities: [
                "Mengelola dan menganalisis basis data terpusat untuk 2.000+ tenaga kerja/pendidik (PTK) dan 270+ unit satuan kelembagaan dengan integritas data 100%.",
                "Menjalankan evaluasi berkala pemenuhan standar kepatuhan dan indikator kinerja tenaga kerja, memvalidasi berkas penetapan surat keputusan (SK), serta mengidentifikasi gap produktivitas.",
                "Mengoperasikan spreadsheet Excel tingkat lanjut untuk mengolah data performa dalam jumlah besar, menyusun matriks rekapitulasi, dan menyajikan laporan analitis kepada jajaran pimpinan.",
                "Menangani administrasi pencatatan pembukuan kas operasional, verifikasi bukti pengeluaran, serta memastikan kepatuhan tata kelola sesuai ketentuan yang berlaku.",
                "Mengoordinasikan kalibrasi data berkala bersama pimpinan unit guna menjamin objektivitas evaluasi dan keadilan penilaian."
            ]
        },
        {
            role: "Pengembangan Model Kinerja & Sistem Ritel Multi-Outlet (Mandiri)",
            subtitle: "Studi Kasus KPI Scorecard, Skema Insentif, & Operasional F&B",
            company: "Proyek Pemodelan Kinerja & Inventaris Ritel",
            location: "Indonesia",
            period: "2023 – 2024",
            responsibilities: [
                "Merancang studi kasus framework KPI untuk bisnis F&B multi-outlet: menghubungkan target omzet toko, kecepatan pelayanan (speed of service), kepatuhan SOP, dan pengendalian waste.",
                "Menyusun simulasi pemodelan insentif pay-for-performance berbasis tier pencapaian target penjualan outlet guna mendorong produktivitas tim toko secara sehat.",
                "Membuat matriks kalibrasi penilaian kinerja karyawan (distribusi normal & 9-box talent matrix) untuk menghindari bias subjektif manajer dalam evaluasi.",
                "Menelaah regulasi pengupahan, struktur skala upah, dan kepatuhan hukum ketenagakerjaan berbasis latar belakang keilmuan Hukum Ekonomi Syariah."
            ]
        }
    ],
    projects: [
        {
            name: "Portofolio Framework KPI & Skema Insentif Multi-Outlet ARAH Coffee",
            techStack: "Excel Modeling, Balanced Scorecard, Pay-for-Performance Tiers, Salary Structure Analysis",
            highlights: [
                "Merancang kerangka KPI berbobot objektif untuk posisi Barista, Store Leader, dan Area Manager yang selaras dengan target profitabilitas dan kualitas layanan ARAH Coffee.",
                "Membangun kalkulator simulasi insentif bulanan toko berbasis spreadsheet dengan batas anggaran (budget cap) dan penguncian syarat minimum (gatekeeper metrik)."
            ]
        },
        {
            name: "Sistem Basis Data & Verifikasi Kinerja Massal (SIMMACI)",
            techStack: "Large Dataset Management, Automated Validation, Performance Verification",
            highlights: [
                "Menata alur pemantauan data performa dan administrasi ribuan staf secara terpusat, mengeliminasi duplikasi data dan mempercepat proses evaluasi periodik."
            ]
        }
    ],
    education: [
        {
            degree: "Sarjana Hukum (S.H.) — Hukum Ekonomi Syariah",
            institution: "STAI At-Tahdzib Jombang",
            location: "Jombang, Jawa Timur, Indonesia",
            graduationYear: "Lulus 2019",
            notes: "Memiliki fondasi kuat dalam hukum perikatan, keadilan kompensasi/remunerasi, kepatuhan regulasi ketenagakerjaan dan struktur skala upah, serta etika kerja amanah dan profesional."
        }
    ]
};

// =========================================================================
// GENERATOR HTML CV FORMAL NAVY / SLATE
// =========================================================================
function generatePerformanceCvHtml(data) {
    const { personal, summary, skills, experience, projects, education, labels } = data;

    const skillCategories = [
        { label: "Performance Management", val: skills.performanceManagement.join(', ') },
        { label: "Compensation & Rewards", val: skills.compensationAndRewards.join(', ') },
        { label: "Data Analytics & Software", val: skills.dataAnalyticsAndTools.join(', ') },
        { label: "Soft Skills & Kepatuhan", val: skills.softSkills.join(', ') }
    ];

    return `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<title>${personal.name} - CV Performance Management & Reward Specialist</title>
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
    width: 215px;
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
    <strong>Lampiran Portofolio Kemampuan Analitis:</strong> Dokumen Portofolio Studi Kasus (Framework KPI Multi-Outlet F&B, Pemodelan Skema Insentif Pay-for-Performance, Matriks Kalibrasi Evaluasi, dan Analisis Struktur Upah) dilampirkan sebagai bukti kompetensi kerja pelamar.
  </div>
</body>
</html>`;
}

// =========================================================================
// GENERATOR HTML PORTOFOLIO STUDI KASUS PERFORMANCE & REWARDS F&B
// =========================================================================
function generatePerformancePortfolioHtml() {
    return `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<title>Portofolio Performance Management & Reward - Ahmad Ayub Nu'man</title>
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
    font-size: 22pt;
    font-weight: 800;
    color: #1a365d;
    line-height: 1.25;
    margin-top: 15px;
    margin-bottom: 8px;
  }
  .cover-subtitle {
    font-size: 11pt;
    color: #2b6cb0;
    font-weight: 600;
    margin-bottom: 20px;
  }
  .cover-desc {
    font-size: 9.2pt;
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

  /* Table */
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

  .grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
</style>
</head>
<body>

  <!-- ================= PAGE 1: COVER ================= -->
  <div class="page">
    <div class="cover-container">
      <div>
        <span class="badge-tag">Studi Kasus & Work Sample</span>
        <h1 class="cover-title">Portofolio Pemodelan Performance Management & Reward</h1>
        <div class="cover-subtitle">Desain KPI Multi-Outlet, Simulasi Skema Insentif Pay-for-Performance, Matriks Kalibrasi, dan Analisis Struktur Upah F&B</div>
        <p class="cover-desc">
          Dokumen ini disusun sebagai <strong>portofolio studi kasus kemampuan teknis (work sample)</strong> untuk posisi <strong>Performance Management & Reward Specialist di ARAH Coffee</strong>. Dokumen ini mendemonstrasikan secara transparan pemahaman pelamar dalam menghubungkan sasaran bisnis ritel kedai kopi multi-outlet ke KPI individu yang terukur, merancang pemodelan insentif berbasis kinerja, alur kalibrasi evaluasi yang adil, serta analisis struktur pengupahan yang mematuhi hukum ketenagakerjaan.
        </p>

        <div class="card" style="margin-top: 25px; border-color: #cbd5e0;">
          <div class="card-title" style="color: #1a365d;">Pilar Kemampuan Kerja yang Ditampilkan:</div>
          <ul style="margin-left: 18px; margin-top: 6px; font-size: 8.8pt; line-height: 1.5; color: #4a5568;">
            <li><strong>Showcase 1 — Framework KPI Multi-Outlet F&B (Balanced Scorecard):</strong> Penurunan target perusahaan ke KPI Store Leader dan Barista (Sales, Cost of Sales/Waste, Speed of Service, dan Audit SOP).</li>
            <li><strong>Showcase 2 — Simulasi Pemodelan Insentif Pay-for-Performance:</strong> Formula insentif bulanan toko berbasis tier pencapaian target omzet dengan syarat minimum kualitas (gatekeeper metrics).</li>
            <li><strong>Showcase 3 — Matriks Kalibrasi Evaluasi Kinerja (9-Box Talent Matrix):</strong> Metodologi standardisasi penilaian performa tim antar cabang guna mencegah bias subjektif manajer.</li>
            <li><strong>Showcase 4 — Analisis Struktur & Skala Upah:</strong> Desain rentang gaji (Min, Mid, Max) berkeadilan internal sesuai kepatuhan regulasi ketenagakerjaan.</li>
          </ul>
        </div>
      </div>

      <div class="cover-author-box">
        <div class="author-name">Ahmad Ayub Nu'man, S.H.</div>
        <div class="author-role">Kandidat Performance Management & Reward Specialist • ARAH Coffee</div>
        <div class="author-contacts">
          <span>📍 Cilacap, Jawa Tengah (Siap Penempatan / Bekerja Sesuai Kebutuhan)</span>
          <span>📞 WhatsApp: +62 895 3491 77555</span>
          <span>✉️ Email: ayb.n1994@gmail.com</span>
        </div>
      </div>
    </div>
  </div>

  <!-- ================= PAGE 2: KPI FRAMEWORK ================= -->
  <div class="page">
    <div class="section-header">
      <div class="section-heading">Showcase 1: Framework KPI & Measurement Logic Multi-Outlet (F&B)</div>
      <div class="section-num">Pilar 01 / KPI Setting</div>
    </div>

    <p style="font-size: 8.5pt; color: #4a5568; margin-bottom: 8px;">
      Penurunan target pertumbuhan ARAH Coffee ke level operasional outlet (Store Leader & Tim Barista) dengan indikator objektif dan terukur:
    </p>

    <div class="card">
      <div class="card-title">Matriks KPI: Store Leader & Tim Barista ARAH Coffee</div>
      <table class="sheet-table">
        <thead>
          <tr>
            <th>Perspektif</th>
            <th>Indikator Kinerja (KPI)</th>
            <th>Bobot</th>
            <th>Target Bulanan</th>
            <th>Measurement Logic / Formula</th>
            <th>Sumber Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Financial</strong></td>
            <td>Pencapaian Target Penjualan Outlet (Sales Target)</td>
            <td><strong>40%</strong></td>
            <td>100% Target Omzet</td>
            <td><code>(Total Penjualan Aktual / Target Omzet) * 100%</code></td>
            <td>POS System / ERP</td>
          </tr>
          <tr>
            <td><strong>Operational</strong></td>
            <td>Pengendalian Waste & Spillage (Cost Control)</td>
            <td><strong>20%</strong></td>
            <td>&lt; 1.5% dari Bahan Baku</td>
            <td><code>(Nilai Bahan Rusak / Total Pemakaian Bahan) * 100%</code></td>
            <td>Log Mutasi Stok</td>
          </tr>
          <tr>
            <td><strong>Customer</strong></td>
            <td>Speed of Service (Waktu Pembuatan Minuman)</td>
            <td><strong>20%</strong></td>
            <td>Rata-rata &lt; 3.5 Menit/Cup</td>
            <td><code>Rata-rata durasi transaksi ke pick-up counter</code></td>
            <td>Kitchen Display / Timer</td>
          </tr>
          <tr>
            <td><strong>Compliance</strong></td>
            <td>Audit Kebersihan, Kualitas Rasa, & SOP Toko</td>
            <td><strong>20%</strong></td>
            <td>Skor Audit &ge; 90%</td>
            <td><code>(Poin Checklist Terpenuhi / Total Poin SOP) * 100%</code></td>
            <td>Mystery Shopper / Area Mgr</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="grid-2">
      <div class="card">
        <div class="card-title" style="color: #1a365d;">Measurement Logic yang Adil:</div>
        <ul style="margin-left: 14px; font-size: 8.2pt; color: #4a5568; line-height: 1.4;">
          <li><strong>Menghindari Target "Asal Angka":</strong> Target penjualan bulanan outlet disesuaikan dengan tren historis, lokasi mal/stand-alone, dan seasonality.</li>
          <li><strong>Gatekeeper Metric:</strong> Jika skor Audit SOP & Kualitas rasa di bawah 80%, insentif penjualan dipotong 50% untuk mencegah barista mengejar omzet tapi mengorbankan kepuasan pelanggan.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title" style="color: #1a365d;">Dampak ke Produktivitas:</div>
        <ul style="margin-left: 14px; font-size: 8.2pt; color: #4a5568; line-height: 1.4;">
          <li><strong>Keseimbangan Aspek Finansial & Mutu:</strong> Barista termotivasi melayani pelanggan secara cepat tanpa membuang-buang susu/biji kopi.</li>
          <li><strong>Transparan & Terukur:</strong> Karyawan mengetahui setiap hari posisi pencapaian angka mereka melalui dashboard POS.</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- ================= PAGE 3: INCENTIVE & REWARD MODELING ================= -->
  <div class="page">
    <div class="section-header">
      <div class="section-heading">Showcase 2: Simulasi Pemodelan Insentif Pay-for-Performance</div>
      <div class="section-num">Pilar 02 / Reward Modeling</div>
    </div>

    <div class="card">
      <div class="card-title">Skema Insentif Bulanan Tim Outlet Berbasis Tier Pencapaian</div>
      <div class="card-desc">Contoh simulasi struktur insentif outlet F&B dengan sistem tiering dan multiplier performa:</div>
      <table class="sheet-table">
        <thead>
          <tr>
            <th>Tier Pencapaian Omzet</th>
            <th>Multiplier Insentif</th>
            <th>Insentif Barista (per orang)</th>
            <th>Insentif Store Leader</th>
            <th>Syarat Minimum Kualitas (Gate)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>&lt; 90% Target</td>
            <td>0x (Tidak Cair)</td>
            <td>Rp 0</td>
            <td>Rp 0</td>
            <td>-</td>
          </tr>
          <tr>
            <td>90% – 99.9% Target</td>
            <td>0.75x</td>
            <td>Rp 300.000</td>
            <td>Rp 600.000</td>
            <td>Audit SOP &ge; 85%, Waste &le; 2.0%</td>
          </tr>
          <tr>
            <td>100% – 109.9% Target</td>
            <td>1.0x (Baseline)</td>
            <td>Rp 500.000</td>
            <td>Rp 1.000.000</td>
            <td>Audit SOP &ge; 90%, Waste &le; 1.5%</td>
          </tr>
          <tr>
            <td>110% – 119.9% Target</td>
            <td>1.25x</td>
            <td>Rp 750.000</td>
            <td>Rp 1.500.000</td>
            <td>Audit SOP &ge; 90%, Waste &le; 1.5%</td>
          </tr>
          <tr>
            <td>&ge; 120% Target (Super Stretch)</td>
            <td>1.5x (Maksimal)</td>
            <td>Rp 1.000.000</td>
            <td>Rp 2.000.000</td>
            <td>Audit SOP &ge; 92%, Waste &le; 1.2%</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="grid-2" style="margin-top: 10px;">
      <div class="card">
        <div class="card-title" style="color: #1a365d;">Formula Excel yang Digunakan:</div>
        <ul style="margin-left: 14px; font-size: 8.2pt; color: #4a5568; line-height: 1.4;">
          <li><strong>Formula Logika Bertingkat:</strong> <code>=IFS(Sales% &lt; 0.9, 0, Sales% &lt; 1.0, 0.75, Sales% &lt; 1.1, 1.0, Sales% &lt; 1.2, 1.25, TRUE, 1.5)</code>.</li>
          <li><strong>Fungsi Verifikasi Syarat:</strong> <code>=IF(AND(AuditScore &gt;= 0.9, Waste &lt;= 0.015), Multiplier*BasePool, Multiplier*BasePool*0.5)</code>.</li>
          <li><strong>Simulasi Anggaran (Budget Modeling):</strong> Mengunci batas maksimal anggaran insentif tidak melebihi 10% dari kelebihan margin kotor (*profit margin sharing*).</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title" style="color: #1a365d;">Keuntungan Finansial bagi ARAH Coffee:</div>
        <ul style="margin-left: 14px; font-size: 8.2pt; color: #4a5568; line-height: 1.4;">
          <li><strong>Self-Funding Incentive:</strong> Insentif hanya dibayarkan dari uang hasil surplus penjualan, sehingga tidak membebani kas perusahaan saat target tidak tercapai.</li>
          <li><strong>Retensi Barista Terbaik:</strong> Barista yang berkinerja tinggi merasa jerih payahnya dihargai secara adil dan nyata.</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- ================= PAGE 4: CALIBRATION & SALARY STRUCTURE ================= -->
  <div class="page">
    <div class="section-header">
      <div class="section-heading">Showcase 3 & 4: Kalibrasi Performa & Struktur Skala Upah</div>
      <div class="section-num">Pilar 03 & 04 / Equity & Grading</div>
    </div>

    <div class="card">
      <div class="card-title">Showcase 3: Matriks Kalibrasi Evaluasi Kinerja (Kurva Distribusi)</div>
      <div class="card-desc">Standardisasi penilaian agar evaluasi performa tahunan antar outlet tidak bias (tidak semua dinilai 'Bagus' atau 'Jelek'):</div>
      <table class="sheet-table">
        <thead>
          <tr>
            <th>Rating Kinerja</th>
            <th>Kategori Evaluasi</th>
            <th>Target Distribusi</th>
            <th>Tindak Lanjut / People Decision</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Rating 5</strong></td>
            <td>Role Model / Outstanding</td>
            <td>5% – 10%</td>
            <td>Prioritas promosi (Store Leader), bonus maksimal, mentoring program.</td>
          </tr>
          <tr>
            <td><strong>Rating 4</strong></td>
            <td>Exceed Expectations</td>
            <td>20% – 25%</td>
            <td>Kenaikan gaji merit increase, insentif performa di atas rata-rata.</td>
          </tr>
          <tr>
            <td><strong>Rating 3</strong></td>
            <td>Meets Expectations (Standar)</td>
            <td>50% – 60%</td>
            <td>Pertahankan standar, pelatihan berkala untuk peningkatan keterampilan.</td>
          </tr>
          <tr>
            <td><strong>Rating 2</strong></td>
            <td>Needs Improvement</td>
            <td>5% – 10%</td>
            <td>Program Pendampingan / Performance Improvement Plan (PIP) selama 3 bulan.</td>
          </tr>
          <tr>
            <td><strong>Rating 1</strong></td>
            <td>Unsatisfactory</td>
            <td>&lt; 5%</td>
            <td>Evaluasi kelayakan kontrak kerja sesuai kepatuhan hukum ketenagakerjaan.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="card" style="margin-top: 10px;">
      <div class="card-title">Showcase 4: Desain Dasar Struktur Skala Upah (Salary Structure)</div>
      <div class="card-desc">Simulasi rentang upah (Grade) berbasis keadilan internal, kompetensi, dan UMR:</div>
      <table class="sheet-table">
        <thead>
          <tr>
            <th>Job Grade</th>
            <th>Posisi Jabatan</th>
            <th>Gaji Minimum (Entry)</th>
            <th>Gaji Midpoint (Standar)</th>
            <th>Gaji Maksimum (Plafon)</th>
            <th>Spread (Rentang)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Grade 1</td>
            <td>Junior Barista / Crew Store</td>
            <td>UMR Wilayah</td>
            <td>UMR + 10%</td>
            <td>UMR + 25%</td>
            <td>25%</td>
          </tr>
          <tr>
            <td>Grade 2</td>
            <td>Senior Barista / Specialist</td>
            <td>UMR + 15%</td>
            <td>UMR + 30%</td>
            <td>UMR + 45%</td>
            <td>30%</td>
          </tr>
          <tr>
            <td>Grade 3</td>
            <td>Store Leader / Supervisor Outlet</td>
            <td>Rp 6.000.000</td>
            <td>Rp 7.500.000</td>
            <td>Rp 9.000.000</td>
            <td>50%</td>
          </tr>
          <tr>
            <td>Grade 4</td>
            <td>Area Manager (Multi-Outlet)</td>
            <td>Rp 9.500.000</td>
            <td>Rp 12.000.000</td>
            <td>Rp 15.000.000</td>
            <td>57%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</body>
</html>`;
}

// =========================================================================
// GENERATOR DOCX CV FORMAL NAVY
// =========================================================================
async function buildPerformanceDocx(data, docxPath) {
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
                new TextRun({ text: "Performance Management: ", bold: true, size: 17, color: "1A365D" }),
                new TextRun({ text: skills.performanceManagement.join(', '), size: 17, color: "4A5568" })
            ]
        }),
        new Paragraph({
            spacing: { after: 30 },
            children: [
                new TextRun({ text: "Compensation & Rewards: ", bold: true, size: 17, color: "1A365D" }),
                new TextRun({ text: skills.compensationAndRewards.join(', '), size: 17, color: "4A5568" })
            ]
        }),
        new Paragraph({
            spacing: { after: 30 },
            children: [
                new TextRun({ text: "Data Analytics & Software: ", bold: true, size: 17, color: "1A365D" }),
                new TextRun({ text: skills.dataAnalyticsAndTools.join(', '), size: 17, color: "4A5568" })
            ]
        }),
        new Paragraph({
            spacing: { after: 80 },
            children: [
                new TextRun({ text: "Soft Skills & Kepatuhan: ", bold: true, size: 17, color: "1A365D" }),
                new TextRun({ text: skills.softSkills.join(', '), size: 17, color: "4A5568" })
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
    console.log(`✓ Performance & Rewards DOCX generated: ${path.basename(docxPath)}`);
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
            console.warn(`Note: Could not unlink ${pdfPath}`);
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
    console.log('=== Performance & Reward Specialist ARAH Coffee Generator ===');
    console.log(`Output folder: ${outputDir}`);

    // 1. GENERATE TAILORED FORMAL CV
    console.log('\n[1/2] Generating Performance & Reward CV (PDF & DOCX)...');
    const tempCvHtml = path.join(rootDir, 'scripts', 'temp_arahcoffee_perf_cv.html');
    const cvPdfPath = path.join(outputDir, 'Ahmad-Ayub-Numan-Performance-Reward-ArahCoffee-CV.pdf');
    const cvDocxPath = path.join(outputDir, 'Ahmad-Ayub-Numan-Performance-Reward-ArahCoffee-CV.docx');

    fs.writeFileSync(tempCvHtml, generatePerformanceCvHtml(performanceRewardArahCoffeeCvData), 'utf-8');
    buildPdf(tempCvHtml, cvPdfPath);
    await buildPerformanceDocx(performanceRewardArahCoffeeCvData, cvDocxPath);
    if (fs.existsSync(tempCvHtml)) fs.unlinkSync(tempCvHtml);

    // 2. GENERATE PORTFOLIO SHOWCASE
    console.log('\n[2/2] Generating Performance & Reward Portfolio Showcase (PDF)...');
    const tempPortfolioHtml = path.join(rootDir, 'scripts', 'temp_arahcoffee_perf_portfolio.html');
    const portfolioPdfPath = path.join(outputDir, 'Ahmad-Ayub-Numan-Portofolio-Performance-Reward-ArahCoffee.pdf');

    fs.writeFileSync(tempPortfolioHtml, generatePerformancePortfolioHtml(), 'utf-8');
    buildPdf(tempPortfolioHtml, portfolioPdfPath);
    if (fs.existsSync(tempPortfolioHtml)) fs.unlinkSync(tempPortfolioHtml);

    // Copy to public/cv/ for web access
    [cvPdfPath, cvDocxPath, portfolioPdfPath].forEach(filePath => {
        try {
            fs.copyFileSync(filePath, path.join(publicCvDir, path.basename(filePath)));
        } catch (e) {}
    });

    console.log('\n=== Success! All ARAH Coffee Performance & Reward documents generated successfully! ===');
}

main().catch(err => {
    console.error('Error generating ARAH Coffee files:', err);
    process.exit(1);
});
