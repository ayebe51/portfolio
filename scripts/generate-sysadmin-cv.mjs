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
// DATA CV SYSTEM ADMINISTRATOR & INFRASTRUCTURE AUTOMATION - PUSKOMEDIA
// =========================================================================
export const sysAdminPuskomediaCvData = {
    lang: "id",
    personal: {
        name: "Ahmad Ayub Nu'man",
        title: "System Administrator & Infrastructure Automation",
        subtitle: "Linux Server Administration • Docker & Bash Automation • Web Server (Nginx) • Cloud & DNS • AI-Assisted Operations",
        location: "Cilacap, Jawa Tengah (Siap Kerja Onsite di Kantor Puskomedia Purwokerto)",
        email: "ayb.n1994@gmail.com",
        phone: "+62 895 3491 77555",
        whatsappUrl: "https://wa.me/62895349177555",
        github: "https://github.com/ayebe51",
        githubDisplay: "github.com/ayebe51",
        linkedin: "https://www.linkedin.com/in/ayub-numan-871406155",
        linkedinDisplay: "linkedin.com/in/ayub-numan-871406155",
        portfolio: "https://portfolio-seven-theta-bovx80a70x.vercel.app/",
        portfolioDisplay: "portfolio-seven-theta-bovx80a70x.vercel.app"
    },
    summary: "System Administrator & Infrastructure Automation Engineer dengan pengalaman 2+ tahun memimpin operasional server Linux (Ubuntu/Debian), kontainerisasi Docker, deployment skrip (Bash/Shell automation), konfigurasi reverse proxy Nginx, dan manajemen basis data PostgreSQL/MySQL untuk sistem produksi skala ratusan lembaga (SIMMACI mengelola 270+ sekolah/madrasah, 2.000+ staf, dan 17.000+ data siswa). Berpengalaman mengelola siklus rilis dan patch server zero-downtime, prosedur backup/restore database terotomasi, penegakan keamanan server (firewall UFW, SSH key-only, fail2ban, SSL/TLS Let's Encrypt), serta integrasi penyimpanan cloud/S3/MinIO. Mahir mengoptimalkan alur kerja harian berbasis Agentic AI (LLMs, Antigravity, Claude, Gemini) untuk troubleshooting error log secara kilat, automasi scripting pemeliharaan, dan peningkatan keandalan sistem. Berdomisili di Cilacap dengan kesiapan penuh untuk bekerja onsite di kantor operasional Puskomedia Purwokerto.",
    skills: {
        serverAndLinux: [
            "Ubuntu Server & Debian",
            "Bash / Shell Scripting & Automasi",
            "Systemd Services & Cron Automation",
            "SSH Hardening & Key Authentication",
            "Linux CLI Diagnostics (htop, iotop, netstat, journalctl)",
            "Server Resource Tuning & Log Rotation"
        ],
        webServersAndNetwork: [
            "Nginx (Reverse Proxy, Load Balancing, HTTP/2, HSTS, Rate Limiting)",
            "Apache Web Server",
            "SSL/TLS Encryption (Certbot / Let's Encrypt Automation)",
            "DNS Management (A, CNAME, MX, TXT Records & Propagasi)",
            "Firewall Security (UFW & iptables)",
            "Dasar Jaringan & Troubleshooting Konektivitas (TCP/IP)"
        ],
        containersAndDevOps: [
            "Docker & Docker Compose",
            "Coolify PaaS & Self-Hosted Infrastructure",
            "Git / GitHub Version Control (1.940+ Commits)",
            "Zero-Downtime Deployment Patching (Automated Bash)",
            "CI/CD Pipeline Fundamentals & Health Checks"
        ],
        databasesAndStorage: [
            "PostgreSQL 16 & MySQL / MariaDB",
            "Database Backup & Dump Automation (pg_dump, mysqldump)",
            "Database Restorasi & Verifikasi Integritas Data",
            "Indexing & Performa Query Relasional",
            "MinIO & AWS S3 Compatible Object Storage"
        ],
        securityAndHardening: [
            "Server Security Hardening",
            "Fail2ban Brute-Force Defense",
            "RBAC (Role-Based Access Control)",
            "Security Audit Trail & Access Log Monitoring",
            "Emergency Lockdown Mechanism (Proteksi Insiden)",
            "Prinsip Keamanan OWASP & Header Hardening (CSP, HSTS)"
        ],
        aiAndProductivity: [
            "AI-Assisted Server Operations & Log Diagnostics",
            "Agentic AI IDEs (Antigravity, Kiro, Codex, OpenCode)",
            "Prompt-Driven Bash & Config Scripting (Nginx/Docker)",
            "Automated Testing & Verifikasi Sistem (1.800+ Test Cases)"
        ]
    },
    labels: {
        professionalSummary: "Ringkasan Profesional",
        technicalSkills: "Keahlian Teknis Infrastruktur & Sistem (Technical Skills)",
        professionalExperience: "Pengalaman Kerja & Operasional Sistem",
        selectedProjects: "Proyek Infrastruktur & Rekayasa Sistem Unggulan",
        education: "Pendidikan & Kualifikasi"
    },
    experience: [
        {
            role: "Lead Systems & Software Engineer",
            subtitle: "Pengelolaan Infrastruktur Server Linux, Deployment Skrip, & Sistem Enterprise SIMMACI",
            company: "LP Ma'arif NU Cilacap",
            location: "Cilacap, Jawa Tengah",
            period: "2024 – Sekarang",
            responsibilities: [
                "Mengelola infrastruktur server produksi Linux (Ubuntu) dan arsitektur deployment terpusat untuk platform SIMMACI yang melayani 270+ sekolah/madrasah, 2.000+ staf, dan 17.000+ siswa dengan ketersediaan tinggi.",
                "Merancang dan mengeksekusi skrip deployment otomatis berbasis Bash (deploy-php-patch.sh) untuk update sistem, migrasi database, dan pembersihan cache produksi secara mulus tanpa downtime (zero-downtime maintenance).",
                "Mengonfigurasi dan memelihara Nginx reverse proxy, proteksi SSL/TLS Let's Encrypt, HTTP security headers (CSP, HSTS), serta mekanisme Emergency Lockdown untuk mitigasi insiden keamanan secara instan.",
                "Mengelola database relasional PostgreSQL 16 (skema, composite indexing, backup rutin, dan verifikasi integritas data) yang mendukung sistem administrasi dan pencatatan keuangan multi-tenant.",
                "Mengintegrasikan penyimpanan objek MinIO/S3 terisolasi untuk pengarsipan ribuan dokumen surat keputusan (SK) dan berkas kelembagaan secara aman dan terenkripsi.",
                "Memanfaatkan Agentic AI dalam alur kerja harian untuk mendeteksi error log, troubleshooting sistem secara cepat, serta menjaga stabilitas sistem melalui 1.822 automated test cases (100% pass rate)."
            ]
        },
        {
            role: "Systems & Backend Infrastructure Engineer",
            subtitle: "Infrastruktur Kontainer Docker, Multi-Service, & Webhook Notification Gateway",
            company: "Koneksi Santri (Proyek Ekosistem Pesantren & Portal Wali)",
            location: "Purwokerto & Sekitarnya (Hybrid)",
            period: "2024 – 2025",
            responsibilities: [
                "Menerapkan kontainerisasi Docker untuk lingkungan multi-service (Next.js web portal, NestJS API engine, PostgreSQL database) guna menjamin konsistensi antara staging dan production.",
                "Mengelola integrasi webhook gateway notifikasi otomatis berbasis API serta mengawasi keamanan arsitektur closed-loop digital wallet untuk transaksi nontunai kantin pesantren.",
                "Melakukan pengawasan beban server, log monitoring, dan pencegahan bottleneck saat lonjakan traffic pengumuman atau pembayaran SPP berkala."
            ]
        }
    ],
    projects: [
        {
            name: "SIMMACI — Linux Server Infrastructure & Automated Deployment Engine",
            techStack: "Linux (Ubuntu Server), Bash Scripting, Nginx Reverse Proxy, PostgreSQL 16, MinIO S3, Docker, SSL/TLS",
            repoUrl: "https://github.com/ayebe51/simmaci",
            repoDisplay: "github.com/ayebe51/simmaci",
            highlights: [
                "Infrastruktur server decoupled (React SPA + Laravel REST API) untuk administrasi 270+ sekolah/madrasah dengan skrip automasi bash deployment patch yang andal.",
                "Konfigurasi Nginx reverse proxy, proteksi SSL Let's Encrypt, backup database terotomasi, serta mitigasi insiden dengan fitur Emergency Lockdown Screen."
            ]
        },
        {
            name: "Koneksi Santri — Dockerized Multi-Service Ecosystem & Webhook Gateway",
            techStack: "Docker, Docker Compose, NestJS, Next.js, PostgreSQL, Prisma ORM, Linux VPS, Webhook API",
            repoUrl: "https://github.com/ayebe51/koneksi-santri",
            repoDisplay: "github.com/ayebe51/koneksi-santri",
            highlights: [
                "Deployment multi-kontainer Docker terisolasi untuk platform pesantren terpadu yang melayani administrasi santri, tagihan SPP, dan buku besar multi-cabang.",
                "Arsitektur webhook gateway real-time untuk pengiriman notifikasi otomatis serta keamanan transaksi closed-loop cashless wallet."
            ]
        },
        {
            name: "Enterprise POS & Inventory (Kiro ERP) — High-Availability Ledger Engine",
            techStack: "NestJS, React 19, TypeScript, PostgreSQL, Prisma, Apache ECharts, Linux",
            repoUrl: "https://github.com/ayebe51/inventory-pos",
            repoDisplay: "github.com/ayebe51/inventory-pos",
            highlights: [
                "Arsitektur server performa tinggi untuk penanganan mutasi stok ritel real-time sub-detik dengan pencatatan append-only dan integritas data mutlak."
            ]
        }
    ],
    education: [
        {
            degree: "Sarjana Hukum (S.H.) — Hukum Ekonomi Syariah",
            institution: "STAI At-Tahdzib Jombang",
            location: "Jombang, Jawa Timur, Indonesia",
            graduationYear: "Lulus 2019",
            notes: "Memiliki fondasi penalaran logis, etika kerja amanah (Muslim), dan dedikasi mendalam pada administrasi infrastruktur sistem dan teknologi cloud secara mandiri (Autodidact & Continuous Learning)."
        }
    ]
};

// =========================================================================
// GENERATOR HTML CV SYSADMIN (A4 CRISP ATS COMPLIANT)
// =========================================================================
function generateSysAdminHtml(data) {
    const { personal, summary, skills, labels, experience, projects, education } = data;

    const skillCategories = [
        { label: "Server & Linux OS", val: skills.serverAndLinux.join(', ') },
        { label: "Web Server & Proxy", val: skills.webServersAndNetwork.join(', ') },
        { label: "Kontainer & DevOps", val: skills.containersAndDevOps.join(', ') },
        { label: "Database & Storage", val: skills.databasesAndStorage.join(', ') },
        { label: "Keamanan & Hardening", val: skills.securityAndHardening.join(', ') },
        { label: "AI & Produktivitas", val: skills.aiAndProductivity.join(', ') }
    ];

    return `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<title>Curriculum Vitae - ${personal.name} - System Administrator</title>
<style>
  @page {
    size: A4 portrait;
    margin: 10mm 12mm 10mm 12mm;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    color: #2d3748;
    background: #fff;
    font-size: 8.5pt;
    line-height: 1.35;
  }
  .header {
    text-align: center;
    border-bottom: 2px solid #1a365d;
    padding-bottom: 6px;
    margin-bottom: 8px;
  }
  .name {
    font-size: 17pt;
    font-weight: 800;
    color: #1a365d;
    letter-spacing: 0.5px;
    margin-bottom: 2px;
  }
  .role-title {
    font-size: 10.5pt;
    font-weight: 700;
    color: #2b6cb0;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    margin-bottom: 2px;
  }
  .subtitle {
    font-size: 8.5pt;
    color: #4a5568;
    font-style: italic;
    margin-bottom: 4px;
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
  .contact-bar a { color: #2b6cb0; text-decoration: none; font-weight: 600; }

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
    width: 170px;
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
      <a href="${personal.github}">${personal.githubDisplay}</a>
      <span class="sep">•</span>
      <a href="${personal.linkedin}">${personal.linkedinDisplay}</a>
      <span class="sep">•</span>
      <a href="${personal.portfolio}">${personal.portfolioDisplay}</a>
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
          <span class="item-meta"><a href="${proj.repoUrl}" style="color: #2b6cb0; text-decoration: none;">${proj.repoDisplay}</a></span>
        </div>
        <div class="item-submeta" style="color: #4a5568; font-weight: normal; font-style: italic;">Stack & Infrastruktur: ${proj.techStack}</div>
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
    <strong>Portofolio & Verifikasi Kode:</strong> Seluruh konfigurasi server, skrip automasi bash deployment patch, dan arsitektur sistem dapat ditinjau langsung melalui GitHub (<a href="https://github.com/ayebe51" style="color: #2b6cb0; font-weight: 600;">github.com/ayebe51</a>) dan live demo portofolio (<a href="${personal.portfolio}" style="color: #2b6cb0; font-weight: 600;">${personal.portfolioDisplay}</a>).
  </div>
</body>
</html>`;
}

// =========================================================================
// GENERATOR DOCX CV SYSADMIN
// =========================================================================
async function buildSysAdminDocx(data, docxPath) {
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
                new TextRun({ text: personal.name, bold: true, size: 28, color: "1A365D" })
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
                new TextRun({ text: personal.subtitle, italics: true, size: 16, color: "4A5568" })
            ]
        }),
        new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 120 },
            children: [
                new TextRun({ text: `${personal.location}  •  ${personal.email}  •  ${personal.phone}  •  GitHub: ${personal.githubDisplay}  •  Portfolio: ${personal.portfolioDisplay}`, size: 15, color: "4A5568" })
            ]
        }),

        // Summary
        createSectionHeading(labels.professionalSummary),
        new Paragraph({
            alignment: AlignmentType.JUSTIFIED,
            spacing: { after: 80 },
            children: [
                new TextRun({ text: summary, size: 16, color: "2D3748" })
            ]
        }),

        // Skills
        createSectionHeading(labels.technicalSkills),
        new Paragraph({
            spacing: { after: 25 },
            children: [
                new TextRun({ text: "Server & Linux OS: ", bold: true, size: 16, color: "1A365D" }),
                new TextRun({ text: skills.serverAndLinux.join(', '), size: 16, color: "4A5568" })
            ]
        }),
        new Paragraph({
            spacing: { after: 25 },
            children: [
                new TextRun({ text: "Web Server & Proxy: ", bold: true, size: 16, color: "1A365D" }),
                new TextRun({ text: skills.webServersAndNetwork.join(', '), size: 16, color: "4A5568" })
            ]
        }),
        new Paragraph({
            spacing: { after: 25 },
            children: [
                new TextRun({ text: "Kontainer & DevOps: ", bold: true, size: 16, color: "1A365D" }),
                new TextRun({ text: skills.containersAndDevOps.join(', '), size: 16, color: "4A5568" })
            ]
        }),
        new Paragraph({
            spacing: { after: 25 },
            children: [
                new TextRun({ text: "Database & Storage: ", bold: true, size: 16, color: "1A365D" }),
                new TextRun({ text: skills.databasesAndStorage.join(', '), size: 16, color: "4A5568" })
            ]
        }),
        new Paragraph({
            spacing: { after: 25 },
            children: [
                new TextRun({ text: "Keamanan & Hardening: ", bold: true, size: 16, color: "1A365D" }),
                new TextRun({ text: skills.securityAndHardening.join(', '), size: 16, color: "4A5568" })
            ]
        }),
        new Paragraph({
            spacing: { after: 80 },
            children: [
                new TextRun({ text: "AI & Produktivitas: ", bold: true, size: 16, color: "1A365D" }),
                new TextRun({ text: skills.aiAndProductivity.join(', '), size: 16, color: "4A5568" })
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
                    new TextRun({ text: exp.role, bold: true, size: 18, color: "1A202C" }),
                    new TextRun({ text: `  (${exp.period})`, bold: true, size: 16, color: "4A5568" })
                ]
            }),
            new Paragraph({
                spacing: { after: 40 },
                children: [
                    new TextRun({ text: `${exp.company} • ${exp.subtitle} (${exp.location})`, italics: true, size: 15, color: "2B6CB0" })
                ]
            })
        );

        exp.responsibilities.forEach(resp => {
            docChildren.push(
                new Paragraph({
                    bullet: { level: 0 },
                    spacing: { after: 20 },
                    children: [
                        new TextRun({ text: resp, size: 15, color: "2D3748" })
                    ]
                })
            );
        });
    });

    // Projects
    docChildren.push(createSectionHeading(labels.selectedProjects));
    projects.forEach(proj => {
        docChildren.push(
            new Paragraph({
                spacing: { before: 80, after: 20 },
                children: [
                    new TextRun({ text: proj.name, bold: true, size: 17, color: "1A202C" }),
                    new TextRun({ text: `  [${proj.repoDisplay}]`, italics: true, size: 14, color: "2B6CB0" })
                ]
            }),
            new Paragraph({
                spacing: { after: 40 },
                children: [
                    new TextRun({ text: `Stack: ${proj.techStack}`, italics: true, size: 14, color: "4A5568" })
                ]
            })
        );

        proj.highlights.forEach(h => {
            docChildren.push(
                new Paragraph({
                    bullet: { level: 0 },
                    spacing: { after: 20 },
                    children: [
                        new TextRun({ text: h, size: 15, color: "2D3748" })
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
                spacing: { before: 80, after: 20 },
                children: [
                    new TextRun({ text: `${edu.degree} — ${edu.institution}`, bold: true, size: 17, color: "1A202C" }),
                    new TextRun({ text: `  (${edu.graduationYear})`, bold: true, size: 15, color: "4A5568" })
                ]
            }),
            new Paragraph({
                spacing: { after: 20 },
                children: [
                    new TextRun({ text: edu.location, italics: true, size: 15, color: "2B6CB0" })
                ]
            }),
            new Paragraph({
                spacing: { after: 60 },
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
    console.log(`✓ Tailored DOCX generated: ${path.basename(docxPath)}`);
}

function findBrowserExecutable() {
    const candidates = [
        process.env.CHROME_BIN,
        process.env.EDGE_BIN,
        'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
        'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
        'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
        'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
        'C:\\Users\\' + (process.env.USERNAME || 'user') + '\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe'
    ].filter(Boolean);

    for (const p of candidates) {
        if (fs.existsSync(p)) return p;
    }

    try {
        const whichCmd = process.platform === 'win32' ? 'where' : 'which';
        const browserBin = process.platform === 'win32' ? 'msedge' : 'google-chrome';
        const stdout = execFileSync(whichCmd, [browserBin], { stdio: 'pipe' }).toString().trim().split('\n')[0].trim();
        if (stdout && fs.existsSync(stdout)) return stdout;
    } catch {
        // Ignored
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
    console.log(`✓ Tailored PDF generated: ${path.basename(pdfPath)}`);
}

async function main() {
    console.log('=== Generating Tailored SysAdmin CV for Puskomedia Purwokerto ===');
    
    const tempHtmlPath = path.join(rootDir, 'scripts', 'temp_sysadmin_puskomedia.html');
    const puskomediaPdfPath = path.join(outputDir, 'Ahmad-Ayub-Numan-SysAdmin-Puskomedia-CV.pdf');
    const puskomediaDocxPath = path.join(outputDir, 'Ahmad-Ayub-Numan-SysAdmin-Puskomedia-CV.docx');
    
    const defaultPdfPath = path.join(outputDir, 'Ahmad-Ayub-Numan-SysAdmin-CV.pdf');
    const defaultDocxPath = path.join(outputDir, 'Ahmad-Ayub-Numan-SysAdmin-CV.docx');

    // 1. Generate HTML
    const html = generateSysAdminHtml(sysAdminPuskomediaCvData);
    fs.writeFileSync(tempHtmlPath, html, 'utf-8');

    // 2. Generate PDF
    buildPdf(tempHtmlPath, puskomediaPdfPath);

    // 3. Generate DOCX
    await buildSysAdminDocx(sysAdminPuskomediaCvData, puskomediaDocxPath);

    // Clean temp HTML
    if (fs.existsSync(tempHtmlPath)) {
        fs.unlinkSync(tempHtmlPath);
    }

    // 4. Create Clean Aliases
    try {
        fs.copyFileSync(puskomediaPdfPath, defaultPdfPath);
        fs.copyFileSync(puskomediaDocxPath, defaultDocxPath);
        console.log(`✓ Alias files created: ${path.basename(defaultPdfPath)} & ${path.basename(defaultDocxPath)}`);
    } catch (e) {
        console.warn('Note copying alias:', e.message);
    }

    // 5. Copy to public/cv/ for web portfolio download
    try {
        fs.copyFileSync(puskomediaPdfPath, path.join(publicCvDir, path.basename(puskomediaPdfPath)));
        fs.copyFileSync(puskomediaDocxPath, path.join(publicCvDir, path.basename(puskomediaDocxPath)));
        fs.copyFileSync(defaultPdfPath, path.join(publicCvDir, path.basename(defaultPdfPath)));
        fs.copyFileSync(defaultDocxPath, path.join(publicCvDir, path.basename(defaultDocxPath)));
        console.log(`✓ Files copied to public/cv/ for live web access`);
    } catch (e) {
        console.warn('Note copying to public/cv:', e.message);
    }

    console.log('\n=== Success! Tailored SysAdmin CV generated successfully ===');
}

main().catch(err => {
    console.error('Error generating SysAdmin CV:', err);
    process.exit(1);
});
