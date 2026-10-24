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

// ==========================================
// DATA CV KHUSUS ADMIN ELEVAU (CETTA ONLINE CLASS)
// ==========================================
export const adminElevauCvDataId = {
    lang: "id",
    personal: {
        name: "Ahmad Ayub Nu'man, S.H.",
        title: "Education Operations & Student Administration Specialist",
        subtitle: "Manajemen Data Siswa • Google Workspace Tingkat Lanjut • Follow-Up Pembayaran • Layanan Komunikasi WhatsApp",
        location: "Cilacap, Jawa Tengah, Indonesia (Siap Full-Time WFH)",
        email: "ayb.n1994@gmail.com",
        phone: "+62 895 3491 77555",
        whatsappUrl: "https://wa.me/62895349177555",
        linkedin: "https://www.linkedin.com/in/ayub-numan-871406155",
        linkedinDisplay: "linkedin.com/in/ayub-numan-871406155",
        portfolio: "https://portfolio-seven-theta-bovx80a70x.vercel.app/",
        portfolioDisplay: "portfolio-seven-theta-bovx80a70x.vercel.app"
    },
    summary: "Tenaga profesional administrasi dan tata kelola operasional pendidikan dengan latar belakang Sarjana Hukum (S.H.) dan pengalaman 2+ tahun mengelola basis data serta administrasi berskala besar (270+ lembaga pendidikan, 17.000+ data siswa, dan 2.000+ tenaga pendidik). Sangat mahir mengoperasikan Google Workspace (Google Sheets tingkat lanjut dengan formula & validasi, Docs, Drive, Forms), sistem pendataan digital, penataan arsip cloud, serta pemantauan dan follow-up pembayaran siswa. Berpengalaman menangani komunikasi intensif berbasis WhatsApp dengan gaya ramah, sopan, fun, empati, dan solutif dalam menjembatani kebutuhan siswa, orang tua, alumni, maupun tutor/pengajar. Memiliki ketelitian tinggi, integritas data tanpa kompromi, etika kerja amanah, serta kemampuan koordinasi kerja jarak jauh (WFH) yang mandiri, disiplin, dan bertanggung jawab.",
    skills: {
        administrasiPendidikan: [
            "Administrasi Siswa & Siklus Belajar",
            "Manajemen & Pembagian Grup Kelas",
            "Distribusi Buku & Modul Pembelajaran",
            "Pengelolaan Folder Rekaman Kelas (Drive)",
            "Standarisasi SOP Administrasi"
        ],
        googleWorkspaceAndTools: [
            "Google Sheets (VLOOKUP, IF, Conditional Formatting, Pivot, Data Validation)",
            "Google Drive (Struktur Folder Terpusat & Izin Akses)",
            "Google Docs & Google Forms",
            "Microsoft Office (Excel, Word)",
            "Zoom & Google Meet"
        ],
        komunikasiAndCustomerCare: [
            "Customer Service & Complaint Handling",
            "Komunikasi Ramah, Fun, dan Tertata",
            "WhatsApp Business (Broadcast, Quick Replies, Labeling)",
            "Koordinasi Tutor & Murid",
            "Penanganan Pertanyaan & Relasi Alumni"
        ],
        administrasiKeuangan: [
            "Pemantauan Status Pembayaran Siswa",
            "Follow-up Penagihan Santun & Persuasif",
            "Rekonsiliasi Tagihan Biaya Kursus/SPP",
            "Pencatatan Riwayat Transaksi Siswa"
        ]
    },
    labels: {
        professionalSummary: "Ringkasan Profesional",
        technicalSkills: "Keahlian Utama & Penguasaan Tools",
        professionalExperience: "Pengalaman Kerja Profesional",
        selectedProjects: "Studi Kasus & Proyek Administrasi Relevan",
        education: "Pendidikan & Kualifikasi"
    },
    experience: [
        {
            role: "Koordinator Operasional Data & Tata Kelola Administrasi Pendidikan",
            subtitle: "Sistem Informasi Manajemen Madrasah & Lembaga",
            company: "LP Ma'arif NU Cilacap",
            location: "Cilacap, Jawa Tengah, Indonesia",
            period: "2024 – Sekarang",
            responsibilities: [
                "Mengelola dan memverifikasi basis data terpusat untuk 270+ lembaga pendidikan, 2.000+ tenaga pendidik (PTK), dan 17.000+ siswa dengan akurasi 100% dan zero-error data entry.",
                "Menata alur penerbitan dan distribusi dokumen massal (Surat Keputusan, lembar pengesahan, dan berkas siswa) secara rapi, terjadwal, dan terarsip digital.",
                "Mengorganisasi struktur repositori penyimpanan cloud (Google Drive & Cloud Storage) untuk ribuan modul, arsip kelas, dan dokumen kelembagaan dengan penamaan baku.",
                "Menangani koordinasi dan komunikasi harian dengan ratusan pimpinan satuan pendidikan dan staf operasional dalam menuntaskan pertanyaan serta kendala administrasi.",
                "Mengoperasikan spreadsheet untuk pemantauan kepatuhan administrasi, rekapitulasi data siswa per jenjang, dan pelaporan operasional berkala."
            ]
        },
        {
            role: "Spesialis Administrasi Siswa & Layanan Komunikasi Wali",
            subtitle: "Platform Manajemen Pendidikan & Pembayaran Siswa",
            company: "Koneksi Santri",
            location: "Jawa Tengah, Indonesia",
            period: "2024",
            responsibilities: [
                "Melakukan input data siswa baru, verifikasi berkas pendaftaran, serta pembagian grup komunikasi siswa dan wali murid secara terstruktur.",
                "Memantau jadwal jatuh tempo tagihan biaya pendidikan (SPP/kelas), menyusun daftar follow-up pembayaran, dan melakukan penagihan persuasif serta santun via WhatsApp.",
                "Mengelola broadcast informasi berkala kepada ratusan wali murid dan siswa terkait jadwal kegiatan, pengumuman penting, dan pembaharuan program.",
                "Menangani layanan bantuan pelanggan (customer service) dan penyelesaian keluhan terkait kendala pembayaran maupun administrasi secara cepat tanggap dan solutif.",
                "Mengarsipkan riwayat transaksi pembayaran dan menyajikan rekap data keuangan harian/bulanan secara transparan dan akurat."
            ]
        }
    ],
    projects: [
        {
            name: "SIMMACI — Tata Kelola Administrasi 17.000+ Siswa & 270 Satuan Pendidikan",
            techStack: "Google Workspace, Spreadsheet Terstruktur, Batch Document Generator, Cloud Storage",
            highlights: [
                "Menstandarisasi alur pendataan siswa dan verifikasi dokumen lintas lembaga, mengeliminasi duplikasi data dan mempercepat proses penerbitan dokumen administrasi resmi.",
                "Menata hierarki arsip digital multi-instansi sehingga mempermudah pencarian berkas siswa dan staf dalam hitungan detik."
            ]
        },
        {
            name: "Sistem Tagihan & Broadcast WhatsApp Siswa Terpadu (Koneksi Santri)",
            techStack: "WhatsApp Gateway, Spreadsheet Billing Tracker, Customer Support SOP",
            highlights: [
                "Membangun alur reminder pembayaran berkala via WhatsApp yang meningkatkan ketepatan waktu pelunasan biaya pendidikan santri/siswa secara signifikan.",
                "Merumuskan template respon pesan layanan yang santun dan profesional untuk merespon pertanyaan wali siswa terkait rincian tagihan dan perizinan."
            ]
        }
    ],
    education: [
        {
            degree: "Sarjana Hukum (S.H.) — Hukum Ekonomi Syariah",
            institution: "STAI At-Tahdzib Jombang",
            location: "Jombang, Jawa Timur, Indonesia",
            graduationYear: "Lulus 2019",
            notes: "Memiliki keunggulan dalam penalaran logis, kepatuhan terhadap SOP dan regulasi, verifikasi keabsahan dokumen, ketelitian tinggi dalam pencatatan data, serta etika kerja profesional dan amanah."
        }
    ]
};

// ==========================================
// FUNGSI GENERATOR HTML CV
// ==========================================
function generateAdminCvHtml(data) {
    const { personal, summary, skills, experience, projects, education, labels } = data;

    const skillCategories = [
        { label: "Administrasi Pendidikan", val: skills.administrasiPendidikan.join(', ') },
        { label: "Google Workspace & Software", val: skills.googleWorkspaceAndTools.join(', ') },
        { label: "Komunikasi & Customer Care", val: skills.komunikasiAndCustomerCare.join(', ') },
        { label: "Administrasi Keuangan & Follow-up", val: skills.administrasiKeuangan.join(', ') }
    ];

    return `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<title>${personal.name} - CV Admin ElevaU</title>
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
    border-bottom: 2px solid #2b6cb0;
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
    width: 200px;
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
    background: #ebf8ff;
    border-left: 3px solid #3182ce;
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
    <strong>Lampiran Portofolio Lengkap:</strong> Dokumen Portofolio Administrasi & Operasional Edukasi (Showcase Google Sheets, SOP Chat WhatsApp, Manajemen Drive, dan Billing Tracker) disertakan dalam berkas terpisah atau dapat diakses via tautan terlampir.
  </div>
</body>
</html>`;
}

// ==========================================
// FUNGSI GENERATOR HTML PORTOFOLIO ADMIN
// ==========================================
function generateAdminPortfolioHtml() {
    return `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<title>Portofolio Administrasi & Operasional Edukasi - Ahmad Ayub Nu'man</title>
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
    border: 2px solid #2b6cb0;
    border-radius: 8px;
    height: 95%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: linear-gradient(180deg, #f7fafc 0%, #edf2f7 100%);
  }
  .badge-tag {
    display: inline-block;
    background: #2b6cb0;
    color: #fff;
    font-size: 8.5pt;
    font-weight: 700;
    padding: 4px 12px;
    border-radius: 20px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }
  .cover-title {
    font-size: 24pt;
    font-weight: 800;
    color: #1a365d;
    line-height: 1.2;
    margin-top: 15px;
    margin-bottom: 8px;
  }
  .cover-subtitle {
    font-size: 12pt;
    color: #2b6cb0;
    font-weight: 600;
    margin-bottom: 20px;
  }
  .cover-desc {
    font-size: 9.5pt;
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
    border-bottom: 2px solid #2b6cb0;
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

  /* Card and Components */
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
    font-size: 7.8pt;
    margin-top: 6px;
    margin-bottom: 6px;
  }
  table.sheet-table th {
    background: #2b6cb0;
    color: #fff;
    font-weight: 600;
    text-align: left;
    padding: 5px 6px;
    border: 1px solid #2b6cb0;
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
  .status-paid { background: #c6f6d5; color: #22543d; }
  .status-followup { background: #feebc8; color: #744210; }
  .status-sent { background: #bee3f8; color: #2a4365; }

  /* Chat Showcase Box */
  .chat-box {
    background: #edf2f7;
    border-left: 3px solid #38a169;
    border-radius: 4px;
    padding: 8px 10px;
    margin-bottom: 8px;
    font-size: 8.2pt;
    line-height: 1.38;
  }
  .chat-title {
    font-weight: 700;
    color: #276749;
    margin-bottom: 3px;
    display: flex;
    justify-content: space-between;
  }
  .chat-bubble {
    background: #fff;
    border-radius: 6px;
    padding: 6px 9px;
    color: #1a202c;
    border: 1px solid #e2e8f0;
    margin-top: 4px;
    font-family: inherit;
    white-space: pre-wrap;
  }

  /* Folder Tree */
  .folder-tree {
    background: #f8fafc;
    border: 1px solid #cbd5e0;
    border-radius: 6px;
    padding: 10px 14px;
    font-family: "Courier New", Courier, monospace;
    font-size: 8pt;
    line-height: 1.45;
    color: #2d3748;
    margin-top: 6px;
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
        <span class="badge-tag">Dokumen Portofolio Profesional</span>
        <h1 class="cover-title">Portofolio Administrasi & Operasional Edukasi</h1>
        <div class="cover-subtitle">Simulasi Manajemen Data Siswa, SOP Komunikasi WhatsApp, Follow-Up Tagihan, dan Tata Kelola Arsip Google Drive</div>
        <p class="cover-desc">
          Dokumen ini disusun sebagai portofolio kerja komprehensif untuk posisi <strong>Admin ElevaU di Cetta Online Class</strong>. Memuat demonstrasi keahlian praktis dalam pengolahan data kelas berbasis Google Sheets tingkat lanjut, standarisasi komunikasi WhatsApp dan customer care yang ramah serta solutif, penataan arsip Google Drive sistematis, dan rekam jejak tata kelola administrasi pendidikan skala besar.
        </p>

        <div class="card" style="margin-top: 25px; border-color: #cbd5e0;">
          <div class="card-title" style="color: #2b6cb0;">Ringkasan Pilar Kompetensi yang Ditampilkan:</div>
          <ul style="margin-left: 18px; margin-top: 6px; font-size: 8.8pt; line-height: 1.5; color: #4a5568;">
            <li><strong>Showcase 1 — Database & Operasional Siswa (Google Sheets):</strong> Struktur rekap data kelas, formula otomatis (VLOOKUP, IF, Conditional Formatting), dan status follow-up pembayaran.</li>
            <li><strong>Showcase 2 — Customer Service & SOP Komunikasi WhatsApp:</strong> Script greeting onboarding ceria/fun, follow-up tagihan humanis, dan penyelesaian komplain (complaint handling).</li>
            <li><strong>Showcase 3 — Manajemen Berkas & Arsip Google Drive:</strong> Hirarki folder modul ajar, rekaman Zoom, dan presensi per batch dengan tata kelola izin akses.</li>
            <li><strong>Showcase 4 — Studi Kasus Nyata:</strong> Pengalaman mengelola 17.000+ data siswa & 270 sekolah (SIMMACI) serta penagihan SPP digital (Koneksi Santri).</li>
          </ul>
        </div>
      </div>

      <div class="cover-author-box">
        <div class="author-name">Ahmad Ayub Nu'man, S.H.</div>
        <div class="author-role">Kandidat Admin ElevaU • Spesialis Administrasi & Operasional Pendidikan</div>
        <div class="author-contacts">
          <span>📍 Cilacap, Jawa Tengah (Siap Full-Time WFH)</span>
          <span>📞 WhatsApp: +62 895 3491 77555</span>
          <span>✉️ Email: ayb.n1994@gmail.com</span>
        </div>
      </div>
    </div>
  </div>

  <!-- ================= PAGE 2: SPREADSHEET SHOWCASE ================= -->
  <div class="page">
    <div class="section-header">
      <div class="section-heading">Showcase 1: Database Siswa & Operasional Kelas (Google Sheets)</div>
      <div class="section-num">Pilar 01 / Data Management</div>
    </div>

    <p style="font-size: 8.5pt; color: #4a5568; margin-bottom: 8px;">
      Sebagai gambaran penanganan administrasi murid di ElevaU, berikut simulasi lembar kerja Google Sheets terstruktur yang mengintegrasikan status pembayaran, pengiriman buku/modul, tutor, dan folder rekaman kelas secara otomatis.
    </p>

    <div class="card">
      <div class="card-title">Simulasi Sheet: "ElevaU_Master_Database_Batch05"</div>
      <table class="sheet-table">
        <thead>
          <tr>
            <th>ID Siswa</th>
            <th>Nama Lengkap</th>
            <th>Program / Kelas</th>
            <th>Tutor</th>
            <th>Status Bayar</th>
            <th>Kirim Buku</th>
            <th>Folder Rekaman</th>
            <th>Follow-Up Admin</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>ELV-2401</strong></td>
            <td>Nabila Putri</td>
            <td>General English B1</td>
            <td>Miss Sarah</td>
            <td><span class="status-tag status-paid">LUNAS</span></td>
            <td><span class="status-tag status-sent">Terkirim (JNE)</span></td>
            <td>drive.google.com/elv01</td>
            <td>Onboarded, masuk grup WA</td>
          </tr>
          <tr>
            <td><strong>ELV-2402</strong></td>
            <td>Rian Pratama</td>
            <td>Mandarin Basic 1</td>
            <td>Laoshi Chen</td>
            <td><span class="status-tag status-followup">MENUNGGU (H-1)</span></td>
            <td><span class="status-tag" style="background:#fed7d7; color:#742a2a;">Pending Bayar</span></td>
            <td>drive.google.com/elv02</td>
            <td>Follow-up reminder WA sent</td>
          </tr>
          <tr>
            <td><strong>ELV-2403</strong></td>
            <td>Dewi Anggraini</td>
            <td>Korean Beginner A</td>
            <td>Ssaem Min</td>
            <td><span class="status-tag status-paid">LUNAS</span></td>
            <td><span class="status-tag status-sent">Terkirim (SiCepat)</span></td>
            <td>drive.google.com/elv03</td>
            <td>Buku diterima, ready kelas</td>
          </tr>
          <tr>
            <td><strong>ELV-2404</strong></td>
            <td>Budi Santoso</td>
            <td>Japanese N5 Fast</td>
            <td>Sensei Kenji</td>
            <td><span class="status-tag status-followup">CICILAN KE-2</span></td>
            <td><span class="status-tag status-sent">Terkirim (J&T)</span></td>
            <td>drive.google.com/elv04</td>
            <td>Jatuh tempo tgl 25 Okt</td>
          </tr>
          <tr>
            <td><strong>ELV-2405</strong></td>
            <td>Jessica Tan</td>
            <td>General English A2</td>
            <td>Mr. David</td>
            <td><span class="status-tag status-paid">LUNAS</span></td>
            <td><span class="status-tag status-sent">Terkirim (JNE)</span></td>
            <td>drive.google.com/elv05</td>
            <td>Onboarded, modul diterima</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="grid-2">
      <div class="card">
        <div class="card-title" style="color: #2b6cb0;">Formula & Fitur Spreadsheet yang Dikuasai:</div>
        <ul style="margin-left: 14px; font-size: 8.2pt; color: #4a5568; line-height: 1.4;">
          <li><strong>Data Validation & Dropdown:</strong> Menghindari typo status (LUNAS, FOLLOW-UP, CICILAN) dengan opsi dropdown otomatis.</li>
          <li><strong>Conditional Formatting:</strong> Penandaan warna otomatis (Hijau = Lunas, Kuning = Perlu Follow-Up, Merah = Tertunggak).</li>
          <li><strong>VLOOKUP / XLOOKUP:</strong> Menarik otomatis kontak WA siswa, riwayat batch, atau link drive materi berdasarkan ID Siswa.</li>
          <li><strong>Formula IF & COUNTIF:</strong> Rekapitulasi langsung jumlah murid lunas, belum bayar, dan rasio kehadiran harian.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title" style="color: #2b6cb0;">Manfaat bagi Operasional ElevaU:</div>
        <ul style="margin-left: 14px; font-size: 8.2pt; color: #4a5568; line-height: 1.4;">
          <li><strong>Zero Overlap:</strong> Jadwal kelas dan alokasi tutor terpantau rapi tanpa bentrok waktu.</li>
          <li><strong>Pelacakan Logistik Buku:</strong> Nomor resi ekspedisi langsung terhubung dengan data kontak murid untuk memudahkan konfirmasi.</li>
          <li><strong>Rekapitulasi Cepat ke Manajemen:</strong> Laporan status penagihan dan keaktifan murid dapat disajikan dalam hitungan menit.</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- ================= PAGE 3: WHATSAPP SOP ================= -->
  <div class="page">
    <div class="section-header">
      <div class="section-heading">Showcase 2: SOP Komunikasi WhatsApp & Customer Care</div>
      <div class="section-num">Pilar 02 / Communication</div>
    </div>

    <p style="font-size: 8.5pt; color: #4a5568; margin-bottom: 8px;">
      Sesuai karakter Cetta Online Class yang interaktif, inklusif, dan fun, berikut template komunikasi WhatsApp nyata untuk menangani onboarding, reminder pembayaran sopan, dan penanganan keluhan murid.
    </p>

    <!-- Chat 1 -->
    <div class="chat-box">
      <div class="chat-title">
        <span>Template 1: Greeting & Onboarding Murid Baru (Fun & Informatif)</span>
        <span style="font-size: 7.5pt; color: #718096;">Fase Pendaftaran Siswa</span>
      </div>
      <div class="chat-bubble">
Halo Kak [Nama Siswa]! Selamat datang di keluarga besar ElevaU Cetta Online Class! 🎉✨

Senang banget Kakak bergabung di kelas [Nama Program/Bahasa, misal: English B1 Batch 5]. Aku [Nama Admin], admin operasional yang bakal nemenin Kakak selama proses belajar nanti.

Biar belajarnya makin siap dan lancar, berikut info penting untuk Kakak ya:
1. 🔗 Link Grup WhatsApp Kelas: [Link Grup] (Yuk langsung gabung sekarang!)
2. 📚 Modul/Buku Pembelajaran: Sudah kami siapkan dan akan dikirim ke alamat Kakak via [Ekspedisi] (No. Resi: [Resi]).
3. 📁 Folder Rekaman Pembelajaran: [Link Google Drive] (Bisa di-bookmark untuk review materi kapan saja).

Kalau Kakak ada pertanyaan seputar kelas atau persiapan belajar, langsung chat aku di sini ya Kak. Semangat belajarnya and see you in class! 🚀</div>
    </div>

    <!-- Chat 2 -->
    <div class="chat-box" style="border-left-color: #dd6b20;">
      <div class="chat-title" style="color: #c05621;">
        <span>Template 2: Follow-Up Pembayaran yang Santun & Persuasif (H-1 / Hari H)</span>
        <span style="font-size: 7.5pt; color: #718096;">Fase Penagihan / Billing</span>
      </div>
      <div class="chat-bubble">
Halo Kak [Nama Siswa], selamat pagi! Semoga harinya menyenangkan ya Kak 😊

Aku izin mengingatkan dengan hangat mengenai penyelesaian biaya administrasi untuk kelas [Nama Program], yang jatuh tempo pada hari [Hari/Tanggal].

Rincian tagihan:
• Program: [Nama Program]
• Nominal: Rp [Nominal]
• Rekening Resmi Cetta: [Nama Bank] - [No Rekening] a.n. PT Cetta Group

Untuk memastikan slot kelas Kakak tetap aman dan pengiriman modul bisa segera kami proses ke ekspedisi, mohon konfirmasi bukti transfernya via chat ini ya Kak.

Kalau Kakak ada kendala pada metode pembayaran, jangan ragu untuk sharing ke kami agar bisa kami bantu carikan solusi terbaiknya. Terima kasih banyak Kak! 🙏✨</div>
    </div>

    <!-- Chat 3 -->
    <div class="chat-box" style="border-left-color: #e53e3e;">
      <div class="chat-title" style="color: #c53030;">
        <span>Template 3: Complaint Handling (Murid Melapor Link Zoom Error / Rekaman Terlambat)</span>
        <span style="font-size: 7.5pt; color: #718096;">Fase Customer Support</span>
      </div>
      <div class="chat-bubble">
Halo Kak [Nama Siswa], mohon maaf banget ya Kak atas ketidaknyamanan yang terjadi terkait [kendala, misal: link Zoom belum bisa diakses / video rekaman kemarin belum muncul di Drive].

Terima kasih banyak sudah langsung mengabarkan ke kami. Saat ini [penjelasan tindakan nyata, misal: aku sudah update link Zoom cadangan di bawah ini dan langsung infokan ke Tutor].

🔗 Link Akses Baru: [Link Zoom/Drive Baru]
🔑 Passcode: [Passcode]

Aku pastikan kendala ini terselesaikan dengan cepat agar sesi belajar Kakak tetap maksimal. Jika masih ada kendala saat masuk kelas, langsung kabari aku ya Kak, aku stand-by mendampingi! 🙏💙</div>
    </div>
  </div>

  <!-- ================= PAGE 4: GOOGLE DRIVE & CASE STUDY ================= -->
  <div class="page">
    <div class="section-header">
      <div class="section-heading">Showcase 3 & 4: Manajemen Google Drive & Studi Kasus Riil</div>
      <div class="section-num">Pilar 03 & 04 / Operations & Evidence</div>
    </div>

    <div class="card">
      <div class="card-title">Showcase 3: Struktur Standarisasi Folder Google Drive (Class Operations)</div>
      <div class="card-desc">
        Kerapian folder cloud storage menjamin kemudahan akses bagi siswa, tutor, dan tim internal. Berikut hierarki folder terstandarisasi yang saya terapkan:
      </div>
      <div class="folder-tree">
📁 00_ElevaU_Operations/
├── 📁 Batch_05_Oktober_2026/
│   ├── 📁 01_General_English_B1_Sarah/
│   │   ├── 📁 01_Modul_dan_Slide_Materi/ [Hak Akses: Viewer untuk Siswa]
│   │   ├── 📁 02_Video_Rekaman_Zoom/     [Naming: Pertemuan_01_Grammar.mp4]
│   │   ├── 📁 03_Presensi_dan_Quiz/      [Google Form & Rekap Spreadsheet]
│   │   └── 📁 04_Resi_dan_Logistik_Buku/ [Scan Bukti Resi Pengiriman]
│   ├── 📁 02_Mandarin_Basic1_Chen/
│   └── 📁 03_Japanese_N5_Kenji/
└── 📁 SOP_dan_Template_Admin/
    ├── 📄 SOP_Onboarding_Murid_Baru.pdf
    ├── 📄 Script_FollowUp_Pembayaran_2026.docx
    └── 📊 Template_Rekap_Presensi_Kelas.xlsx
      </div>
    </div>

    <div class="section-header" style="margin-top: 14px; margin-bottom: 8px;">
      <div class="section-heading" style="font-size: 11pt;">Showcase 4: Rekam Jejak Pengalaman Riil Tata Kelola Administrasi</div>
      <div class="section-num">Bukti Kredibilitas</div>
    </div>

    <div class="grid-2">
      <div class="card">
        <div class="card-title" style="color: #2b6cb0;">SIMMACI (LP Ma'arif NU Cilacap)</div>
        <div style="font-size: 8pt; color: #718096; margin-bottom: 4px;">Skala: 270+ Lembaga, 17.000+ Siswa, 2.000+ PTK</div>
        <ul style="margin-left: 14px; font-size: 8.2pt; color: #4a5568; line-height: 1.4;">
          <li>Bertanggung jawab memastikan integritas dan akurasi 100% pada verifikasi ribuan berkas data siswa dan tenaga pendidik.</li>
          <li>Mengotomasi pembuatan dan pengarsipan ribuan surat keputusan (SK) serta dokumen administrasi resmi tanpa kesalahan penomoran.</li>
          <li>Menangani koordinasi jarak jauh dengan ratusan staf tata usaha sekolah secara disiplin, tertata, dan solutif.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title" style="color: #2b6cb0;">Koneksi Santri (Sistem Penagihan & Layanan)</div>
        <div style="font-size: 8pt; color: #718096; margin-bottom: 4px;">Skala: Ratusan Wali Murid & Santri Aktif</div>
        <ul style="margin-left: 14px; font-size: 8.2pt; color: #4a5568; line-height: 1.4;">
          <li>Mengoperasikan database penagihan SPP/biaya kursus dan menyusun jadwal reminder tagihan berkala.</li>
          <li>Menangani komunikasi intensif dengan wali murid melalui WhatsApp: menjawab pertanyaan saldo, perizinan, dan kendala transaksi dengan ramah dan cepat tanggap.</li>
          <li>Menjaga rekonsiliasi data pembayaran harian dengan catatan akuntansi tanpa selisih.</li>
        </ul>
      </div>
    </div>

    <div class="card" style="background: #ebf8ff; border-color: #bee3f8; margin-top: 6px;">
      <div style="font-size: 8.5pt; color: #2b6cb0; line-height: 1.4;">
        <strong>Komitmen Kerja Jarak Jauh (Full-Time WFH):</strong>
        Memiliki perangkat laptop performa tinggi, koneksi internet stabil (fiber optik + backup seluler), kebiasaan pelaporan kerja transparan (daily check-in/out), dan siap memberikan respon cepat (fast response) selama jam operasional kelas ElevaU.
      </div>
    </div>
  </div>

</body>
</html>`;
}

// ==========================================
// FUNGSI GENERATOR DOCX CV
// ==========================================
async function buildAdminDocx(data, docxPath) {
    const { personal, summary, skills, experience, projects, education, labels } = data;

    const createSectionHeading = (title) => {
        return new Paragraph({
            spacing: { before: 180, after: 60 },
            border: {
                bottom: {
                    color: "2B6CB0",
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
                new TextRun({ text: "Administrasi Pendidikan: ", bold: true, size: 17, color: "1A365D" }),
                new TextRun({ text: skills.administrasiPendidikan.join(', '), size: 17, color: "4A5568" })
            ]
        }),
        new Paragraph({
            spacing: { after: 30 },
            children: [
                new TextRun({ text: "Google Workspace & Software: ", bold: true, size: 17, color: "1A365D" }),
                new TextRun({ text: skills.googleWorkspaceAndTools.join(', '), size: 17, color: "4A5568" })
            ]
        }),
        new Paragraph({
            spacing: { after: 30 },
            children: [
                new TextRun({ text: "Komunikasi & Customer Care: ", bold: true, size: 17, color: "1A365D" }),
                new TextRun({ text: skills.komunikasiAndCustomerCare.join(', '), size: 17, color: "4A5568" })
            ]
        }),
        new Paragraph({
            spacing: { after: 80 },
            children: [
                new TextRun({ text: "Administrasi Keuangan & Follow-up: ", bold: true, size: 17, color: "1A365D" }),
                new TextRun({ text: skills.administrasiKeuangan.join(', '), size: 17, color: "4A5568" })
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
    console.log(`✓ Admin DOCX generated: ${path.basename(docxPath)}`);
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

    const args = [
        '--headless',
        '--disable-gpu',
        '--run-all-compositor-stages-before-draw',
        '--no-pdf-header-footer',
        `--print-to-pdf=${pdfPath}`,
        htmlPath
    ];

    execFileSync(browserPath, args, { stdio: 'pipe' });
    console.log(`✓ Generated PDF: ${path.basename(pdfPath)}`);
}

// ==========================================
// MAIN CONTROLLER
// ==========================================
async function main() {
    console.log('=== Admin ElevaU CV & Portfolio Generator ===');
    console.log(`Output folder: ${outputDir}`);

    // 1. GENERATE TAILORED ADMIN CV
    console.log('\n[1/2] Generating Tailored Admin CV (PDF & DOCX)...');
    const tempCvHtml = path.join(rootDir, 'scripts', 'temp_admin_elevau_cv.html');
    const cvPdfPath = path.join(outputDir, 'Ahmad-Ayub-Numan-Admin-ElevaU-CV.pdf');
    const cvDocxPath = path.join(outputDir, 'Ahmad-Ayub-Numan-Admin-ElevaU-CV.docx');

    fs.writeFileSync(tempCvHtml, generateAdminCvHtml(adminElevauCvDataId), 'utf-8');
    buildPdf(tempCvHtml, cvPdfPath);
    await buildAdminDocx(adminElevauCvDataId, cvDocxPath);
    if (fs.existsSync(tempCvHtml)) fs.unlinkSync(tempCvHtml);

    // 2. GENERATE ADMIN PORTFOLIO SHOWCASE
    console.log('\n[2/2] Generating Admin Portfolio Showcase (PDF)...');
    const tempPortfolioHtml = path.join(rootDir, 'scripts', 'temp_admin_elevau_portfolio.html');
    const portfolioPdfPath = path.join(outputDir, 'Ahmad-Ayub-Numan-Portofolio-Admin-ElevaU.pdf');

    fs.writeFileSync(tempPortfolioHtml, generateAdminPortfolioHtml(), 'utf-8');
    buildPdf(tempPortfolioHtml, portfolioPdfPath);
    if (fs.existsSync(tempPortfolioHtml)) fs.unlinkSync(tempPortfolioHtml);

    // Copy to public/cv/ for web access
    [cvPdfPath, cvDocxPath, portfolioPdfPath].forEach(filePath => {
        try {
            fs.copyFileSync(filePath, path.join(publicCvDir, path.basename(filePath)));
        } catch (e) {}
    });

    console.log('\n=== Success! All Admin ElevaU documents generated successfully! ===');
}

main().catch(err => {
    console.error('Error generating Admin files:', err);
    process.exit(1);
});
