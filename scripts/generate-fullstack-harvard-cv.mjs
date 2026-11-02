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
    BorderStyle,
    TabStopType,
    TabStopPosition
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
// DATA CV FULL STACK SOFTWARE ENGINEER - HARVARD RESUME GUIDE STANDARD (EN & ID)
// =========================================================================

export const fullstackCvDataEn = {
    lang: "en",
    personal: {
        name: "Ahmad Ayub Nu'man, S.H.",
        location: "Cilacap, Central Java, Indonesia",
        phone: "+62 895 3491 77555",
        email: "ayb.n1994@gmail.com",
        github: "github.com/ayebe51",
        githubUrl: "https://github.com/ayebe51",
        linkedin: "linkedin.com/in/ayub-numan-871406155",
        linkedinUrl: "https://www.linkedin.com/in/ayub-numan-871406155",
        portfolio: "portfolio-seven-theta-bovx80a70x.vercel.app",
        portfolioUrl: "https://portfolio-seven-theta-bovx80a70x.vercel.app/"
    },
    summary: "Full-Stack Software Engineer with comprehensive experience directing the end-to-end software development lifecycle (SDLC), from domain modeling (DDD) and requirement discovery to automated testing (1,800+ test cases) and hardened container deployments (Docker/Linux VPS). Proven track record architecting institutional education governance (SIMMACI for 270+ institutions), multi-tenant financial ERP engines with Maker-Checker controls, and cross-platform mobile ecosystems. Combines deep hands-on expertise in React 19, TypeScript, Laravel 12, NestJS, and PostgreSQL 16 with legal governance acumen.",
    skillsCategories: [
        {
            category: "Languages",
            items: "TypeScript, JavaScript (ES6+), PHP 8+, Dart, SQL, HTML5, CSS3 / SASS"
        },
        {
            category: "Frontend Engineering",
            items: "React 18/19, Next.js (App Router), Flutter, Tailwind CSS, Zustand, Framer Motion, Vite PWA, Shadcn UI, Ant Design"
        },
        {
            category: "Backend & APIs",
            items: "Laravel 11/12, NestJS, Node.js, Express, RESTful APIs, Microservices, Role-Based Access Control (RBAC), API Security"
        },
        {
            category: "Databases & Storage",
            items: "PostgreSQL 16, MySQL, Prisma ORM, Schema Design, Composite Indexing, Query Optimization, MinIO / S3"
        },
        {
            category: "DevOps & Cloud",
            items: "Docker, Docker Compose, Linux/VPS Administration (Ubuntu), Nginx (HSTS/CSP), Coolify, Vercel, Git / GitHub"
        },
        {
            category: "Architecture & Quality",
            items: "Domain-Driven Design (DDD), Spec-Driven Development (SDD), Maker-Checker, Automated Testing (PHPUnit, Pest, Jest), DevSecOps"
        }
    ],
    experience: [
        {
            company: "LP MA'ARIF NU CILACAP",
            location: "Cilacap, Central Java, Indonesia",
            role: "Full-Stack Software Engineer & Lead Systems Architect",
            period: "2024 – Present",
            bullets: [
                "Architected and deployed SIMMACI, a decoupled full-stack governance platform (React 19 SPA + Laravel 12 REST API on PostgreSQL 16) administering 270+ educational institutions, 2,000+ staff, and 17,000+ active students across Cilacap regency.",
                "Engineered the institutional Core Financial System (Aplikasi Keuangan) using clean Domain-Driven Design (DDD), immutable double-entry journal ledgers, Money Value Objects, and Maker-Checker segregation of duties, eliminating calculation rounding errors and unauthorized disbursements.",
                "Automated batch decree (SK) generation and credentialing workflows via Docxtemplater and PHPWord templating engines, reducing administrative turnaround time by over 70% and eliminating duplicate personnel records.",
                "Built an end-to-end automated testing pipeline achieving 100% pass rate across 1,822 test cases (36,983 assertions) on SIMMACI via PHPUnit/Pest, and 63 financial unit/feature tests (193 assertions) guaranteeing strict balance invariants.",
                "Hardened production VPS infrastructure and application security: containerized multi-service deployment with Docker & Coolify on Linux VPS, configured Nginx reverse proxy with HSTS and CSP, resolved SEC-001–004 vulnerabilities, and locked down 27 API route guards."
            ]
        }
    ],
    projects: [
        {
            name: "SIMMACI — Enterprise Education Governance Platform",
            techStack: "React 19, TypeScript, Laravel 12, PostgreSQL 16, Tailwind CSS, Vite PWA, PHPUnit/Pest",
            urlDisplay: "github.com/ayebe51/simmaci",
            bullet: "Architected a decoupled single-page PWA dashboard featuring dynamic schema-driven form generation, multi-stage approval review queues, and isolated multi-tenant data pipelines, backed by 1,822 automated test cases ensuring zero production regressions."
        },
        {
            name: "Koneksi Santri — Pesantren ERP & Guardian Mobile Ecosystem",
            techStack: "Next.js 14, Flutter (Dart), NestJS, TypeScript, PostgreSQL, Prisma ORM, Docker",
            urlDisplay: "admin.koneksisantri.tech",
            bullet: "Engineered a full-stack ERP and cross-platform Flutter app (Portal Wali Santri) with a closed-loop cashless digital wallet, smart gate QR security authorization, automated tuition billing, and consolidated double-entry general ledgers across multi-branch pesantren."
        },
        {
            name: "Enterprise POS & Inventory (Kiro ERP) — Retail ERP & Omnichannel POS",
            techStack: "React 19, NestJS, TypeScript, PostgreSQL, Prisma ORM, Apache ECharts, Ant Design",
            urlDisplay: "inventory-pos-hazel.vercel.app",
            bullet: "Implemented a Domain-Driven Design (DDD) retail management system handling multi-warehouse stock replenishment, procurement 3-way matching (PR/PO/GR), and sub-second cashier POS checkout with an append-only inventory ledger enforcing WAC and FIFO valuations."
        }
    ],
    education: [
        {
            institution: "STAI AT-TAHDZIB JOMBANG",
            location: "Jombang, East Java, Indonesia",
            degree: "Bachelor of Laws (Sarjana Hukum - S.H.) — Islamic Economic Law",
            year: "Graduated 2019",
            bullet: "Rigorous academic training in legal compliance, statutory ethics, contract audits, and procedural integrity, directly reinforcing architectural governance, audit trails, and financial invariant verification in software engineering."
        }
    ],
    certifications: [
        {
            name: "Spec-Driven Development dengan Kiro",
            issuer: "Dicoding Indonesia",
            year: "Apr 2026 – Apr 2029 (Credential ID: EYX4Q03J6PDL)",
            bullet: "Certified competence in Spec-Driven Development (SDD): formal specification design, contract-first API contracts, automated test coverage, and end-to-end requirement traceability."
        }
    ]
};

export const fullstackCvDataId = {
    lang: "id",
    personal: {
        name: "Ahmad Ayub Nu'man, S.H.",
        location: "Cilacap, Jawa Tengah, Indonesia",
        phone: "+62 895 3491 77555",
        email: "ayb.n1994@gmail.com",
        github: "github.com/ayebe51",
        githubUrl: "https://github.com/ayebe51",
        linkedin: "linkedin.com/in/ayub-numan-871406155",
        linkedinUrl: "https://www.linkedin.com/in/ayub-numan-871406155",
        portfolio: "portfolio-seven-theta-bovx80a70x.vercel.app",
        portfolioUrl: "https://portfolio-seven-theta-bovx80a70x.vercel.app/"
    },
    summary: "Full-Stack Software Engineer berpengalaman mengelola siklus penuh rekayasa perangkat lunak (end-to-end SDLC), mulai dari perancangan arsitektur domain (DDD) dan analisis kebutuhan bisnis hingga jaminan mutu otomatis (1.800+ test cases) serta orkestrasi deployment kontainer (Docker/Linux VPS). Terbukti sukses merancang platform tata kelola 270+ lembaga pendidikan (SIMMACI), sistem core banking/ERP dengan prinsip Maker-Checker, dan ekosistem mobile Flutter. Menguasai React 19, TypeScript, Laravel 12, NestJS, dan PostgreSQL 16 dipadukan pemahaman kepatuhan hukum.",
    skillsCategories: [
        {
            category: "Bahasa Pemrograman",
            items: "TypeScript, JavaScript (ES6+), PHP 8+, Dart, SQL, HTML5, CSS3 / SASS"
        },
        {
            category: "Frontend Engineering",
            items: "React 18/19, Next.js (App Router), Flutter, Tailwind CSS, Zustand, Framer Motion, Vite PWA, Shadcn UI, Ant Design"
        },
        {
            category: "Backend & API",
            items: "Laravel 11/12, NestJS, Node.js, Express, RESTful APIs, Microservices, Role-Based Access Control (RBAC), Keamanan API"
        },
        {
            category: "Basis Data & Penyimpanan",
            items: "PostgreSQL 16, MySQL, Prisma ORM, Desain Skema, Composite Indexing, Optimasi Kueri, MinIO / S3"
        },
        {
            category: "DevOps & Cloud",
            items: "Docker, Docker Compose, Administrasi Linux/VPS (Ubuntu), Nginx (HSTS/CSP), Coolify, Vercel, Git / GitHub"
        },
        {
            category: "Arsitektur & Jaminan Mutu",
            items: "Domain-Driven Design (DDD), Spec-Driven Development (SDD), Maker-Checker, Pengujian Otomatis (PHPUnit, Pest, Jest), DevSecOps"
        }
    ],
    experience: [
        {
            company: "LP MA'ARIF NU CILACAP",
            location: "Cilacap, Jawa Tengah, Indonesia",
            role: "Full-Stack Software Engineer & Lead Systems Architect",
            period: "2024 – Sekarang",
            bullets: [
                "Merancang dan menerapkan SIMMACI, platform terpisah full-stack (React 19 SPA + Laravel 12 REST API pada PostgreSQL 16) yang mengelola 270+ satuan pendidikan, 2.000+ PTK, dan 17.000+ peserta didik aktif di Kabupaten Cilacap.",
                "Mengembangkan Sistem Keuangan Lembaga (Aplikasi Keuangan) berbasis Domain-Driven Design (DDD), buku besar jurnal berpasangan (double-entry), Money Value Object, dan prinsip Maker-Checker untuk mencegah galat pembulatan dan penyelewengan dana.",
                "Membangun mesin otomasi penerbitan batch SK dan akreditasi pendidik berbasis Docxtemplater dan PHPWord, memangkas waktu kerja administratif lebih dari 70% dan mengeliminasi duplikasi data guru.",
                "Menerapkan pengujian mutu otomatis (automated testing) dengan kelulusan 100% pada 1.822 test cases (36.983 assertions) di SIMMACI via PHPUnit/Pest, serta 63 unit/feature tests verifikasi saldo invarian akuntansi.",
                "Melakukan security hardening pada VPS produksi: orkestrasi multi-kontainer Docker dan Coolify di Linux VPS, reverse proxy Nginx dengan HSTS & CSP, remediasi kerentanan SEC-001–004, dan penutupan 27 API route guards."
            ]
        }
    ],
    projects: [
        {
            name: "SIMMACI — Platform Tata Kelola Pendidikan Enterprise",
            techStack: "React 19, TypeScript, Laravel 12, PostgreSQL 16, Tailwind CSS, Vite PWA, PHPUnit/Pest",
            urlDisplay: "github.com/ayebe51/simmaci",
            bullet: "Merancang dashboard PWA yang decoupled dengan pembuatan formulir dinamis berbasis skema, antrean persetujuan bertingkat, dan isolasi data multi-tenant, didukung 1.822 test cases otomatis bebas regresi."
        },
        {
            name: "Koneksi Santri — ERP Pesantren & Ekosistem Mobile Wali Santri",
            techStack: "Next.js 14, Flutter (Dart), NestJS, TypeScript, PostgreSQL, Prisma ORM, Docker",
            urlDisplay: "admin.koneksisantri.tech",
            bullet: "Membangun ERP full-stack dan aplikasi Flutter lintas platform (Portal Wali Santri) dengan dompet digital tertutup (closed-loop cashless), izin keamanan Smart Gate QR, penagihan SPP digital, dan buku besar konsolidasi multi-cabang."
        },
        {
            name: "Enterprise POS & Inventory (Kiro ERP) — Ritel ERP & POS Omnichannel",
            techStack: "React 19, NestJS, TypeScript, PostgreSQL, Prisma ORM, Apache ECharts, Ant Design",
            urlDisplay: "inventory-pos-hazel.vercel.app",
            bullet: "Mengimplementasikan sistem retail Domain-Driven Design (DDD) untuk pengelolaan multi-gudang, pengadaan 3-way matching (PR/PO/GR), kasir POS sub-detik, dan mutasi stok append-only berstandar WAC dan FIFO."
        }
    ],
    education: [
        {
            institution: "STAI AT-TAHDZIB JOMBANG",
            location: "Jombang, Jawa Timur, Indonesia",
            degree: "Sarjana Hukum (S.H.) — Hukum Ekonomi Syariah",
            year: "Lulus 2019",
            bullet: "Pelatihan akademik komprehensif dalam kepatuhan hukum, etika kelembagaan, audit kontrak, dan integritas prosedural, yang secara langsung memperkuat tata kelola arsitektur sistem, audit trail, dan ketahanan transaksi finansial."
        }
    ],
    certifications: [
        {
            name: "Spec-Driven Development dengan Kiro",
            issuer: "Dicoding Indonesia",
            year: "Apr 2026 – Apr 2029 (ID Kredensial: EYX4Q03J6PDL)",
            bullet: "Kompetensi terverifikasi dalam Spec-Driven Development (SDD): perumusan spesifikasi formal, kontrak API kontraktual, cakupan pengujian otomatis, dan ketertelusuran kebutuhan sistem."
        }
    ]
};

// =========================================================================
// GENERATE HARVARD STYLE HTML CV (STRICT 1-PAGE A4 FORMAT)
// =========================================================================
function generateHarvardHtmlCv(data) {
    const { personal, summary, skillsCategories, experience, projects, education, certifications, lang } = data;
    const isEn = lang === 'en';

    const sectionLabels = {
        summary: isEn ? "Professional Summary" : "Ringkasan Profesional",
        skills: isEn ? "Technical Skills" : "Keahlian Teknis",
        experience: isEn ? "Professional Experience" : "Pengalaman Kerja Profesional",
        projects: isEn ? "Featured Software Engineering Projects" : "Proyek Rekayasa Perangkat Lunak Unggulan",
        education: isEn ? "Education & Credentials" : "Pendidikan & Kredensial"
    };

    return `<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="UTF-8">
<title>${personal.name} - Full-Stack Software Engineer Resume (Harvard Standard)</title>
<style>
  @page {
    size: A4 portrait;
    margin: 8mm 12mm 6mm 12mm;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: "Times New Roman", Times, Georgia, serif;
    color: #000000;
    background: #ffffff;
    font-size: 8.2pt;
    line-height: 1.21;
    -webkit-print-color-adjust: exact;
  }
  
  /* Harvard Standard Header */
  .header {
    text-align: center;
    margin-bottom: 4.5px;
  }
  .header h1 {
    font-size: 14.2pt;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.6px;
    margin-bottom: 1.5px;
  }
  .header .contact-line {
    font-size: 8.05pt;
    line-height: 1.22;
  }
  .header .links-line {
    font-size: 8.05pt;
    margin-top: 1px;
  }
  .header .links-line a {
    color: #000000;
    text-decoration: none;
  }

  /* Harvard Section Titles */
  .section {
    margin-bottom: 3.8px;
    page-break-inside: avoid;
  }
  .section-title {
    font-size: 8.65pt;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-bottom: 0.75pt solid #000000;
    padding-bottom: 1px;
    margin-bottom: 2.5px;
  }

  .summary-text {
    font-size: 8.0pt;
    line-height: 1.21;
    text-align: justify;
  }

  /* Harvard Entries */
  .entry {
    margin-bottom: 2.8px;
    page-break-inside: avoid;
  }
  .entry-row-1 {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-size: 8.3pt;
  }
  .entry-row-1 .company {
    font-weight: bold;
    text-transform: uppercase;
  }
  .entry-row-1 .location {
    font-style: italic;
  }
  .entry-row-2 {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-size: 8.1pt;
    margin-bottom: 1px;
  }
  .entry-row-2 .role {
    font-style: italic;
  }
  .entry-row-2 .dates {
    font-style: italic;
  }

  ul.bullets {
    margin-left: 14px;
    margin-top: 1px;
  }
  ul.bullets li {
    font-size: 7.95pt;
    line-height: 1.19;
    margin-bottom: 1px;
    text-align: justify;
  }

  /* Skills Categories */
  .skills-list {
    font-size: 7.95pt;
    line-height: 1.19;
  }
  .skills-row {
    margin-bottom: 1px;
  }
  .skills-label {
    font-weight: bold;
  }
</style>
</head>
<body>

  <!-- HEADER -->
  <div class="header">
    <h1>${personal.name}</h1>
    <div class="contact-line">
      ${personal.location} &bull; Phone / WhatsApp: ${personal.phone} &bull; Email: ${personal.email}
    </div>
    <div class="links-line">
      GitHub: ${personal.github} &bull; LinkedIn: ${personal.linkedin} &bull; Portfolio: ${personal.portfolio}
    </div>
  </div>

  <!-- SUMMARY -->
  <div class="section">
    <div class="section-title">${sectionLabels.summary}</div>
    <p class="summary-text">${summary}</p>
  </div>

  <!-- TECHNICAL SKILLS -->
  <div class="section">
    <div class="section-title">${sectionLabels.skills}</div>
    <div class="skills-list">
      ${skillsCategories.map(sc => `
        <div class="skills-row">
          <span class="skills-label">${sc.category}:</span> ${sc.items}
        </div>
      `).join('')}
    </div>
  </div>

  <!-- PROFESSIONAL EXPERIENCE -->
  <div class="section">
    <div class="section-title">${sectionLabels.experience}</div>
    ${experience.map(exp => `
      <div class="entry">
        <div class="entry-row-1">
          <span class="company">${exp.company}</span>
          <span class="location">${exp.location}</span>
        </div>
        <div class="entry-row-2">
          <span class="role">${exp.role}</span>
          <span class="dates">${exp.period}</span>
        </div>
        <ul class="bullets">
          ${exp.bullets.map(b => `<li>${b}</li>`).join('')}
        </ul>
      </div>
    `).join('')}
  </div>

  <!-- FEATURED PROJECTS -->
  <div class="section">
    <div class="section-title">${sectionLabels.projects}</div>
    ${projects.map(p => `
      <div class="entry">
        <div class="entry-row-1">
          <span class="company" style="font-size: 8.15pt;">${p.name}</span>
          <span class="location" style="font-size: 7.8pt;">${p.urlDisplay}</span>
        </div>
        <div class="entry-row-2">
          <span class="role" style="font-size: 7.8pt; color: #222;">Core Stack: ${p.techStack}</span>
        </div>
        <ul class="bullets">
          <li>${p.bullet}</li>
        </ul>
      </div>
    `).join('')}
  </div>

  <!-- EDUCATION & CREDENTIALS -->
  <div class="section">
    <div class="section-title">${sectionLabels.education}</div>
    ${education.map(edu => `
      <div class="entry">
        <div class="entry-row-1">
          <span class="company">${edu.institution}</span>
          <span class="location">${edu.location}</span>
        </div>
        <div class="entry-row-2">
          <span class="role">${edu.degree}</span>
          <span class="dates">${edu.year}</span>
        </div>
        <ul class="bullets">
          <li>${edu.bullet}</li>
        </ul>
      </div>
    `).join('')}
    ${certifications.map(cert => `
      <div class="entry">
        <div class="entry-row-1">
          <span class="company" style="font-size: 8.15pt;">${cert.name} — ${cert.issuer}</span>
          <span class="location" style="font-size: 7.9pt;">${cert.year}</span>
        </div>
        <ul class="bullets">
          <li>${cert.bullet}</li>
        </ul>
      </div>
    `).join('')}
  </div>

</body>
</html>`;
}

// =========================================================================
// BUILD HARVARD DOCX CV (Word Format)
// =========================================================================
async function buildHarvardDocxCv(data, docxPath) {
    const { personal, summary, skillsCategories, experience, projects, education, certifications, lang } = data;
    const isEn = lang === 'en';

    const sectionLabels = {
        summary: isEn ? "Professional Summary" : "Ringkasan Profesional",
        skills: isEn ? "Technical Skills" : "Keahlian Teknis",
        experience: isEn ? "Professional Experience" : "Pengalaman Kerja Profesional",
        projects: isEn ? "Featured Software Engineering Projects" : "Proyek Rekayasa Perangkat Lunak Unggulan",
        education: isEn ? "Education & Credentials" : "Pendidikan & Kredensial"
    };

    const createSectionHeading = (title) => {
        return new Paragraph({
            spacing: { before: 80, after: 20 },
            border: {
                bottom: {
                    color: "000000",
                    space: 2,
                    style: BorderStyle.SINGLE,
                    size: 6
                }
            },
            children: [
                new TextRun({
                    text: title.toUpperCase(),
                    bold: true,
                    size: 17,
                    font: "Times New Roman"
                })
            ]
        });
    };

    const docChildren = [
        // Name
        new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 15 },
            children: [
                new TextRun({ text: personal.name.toUpperCase(), bold: true, size: 25, font: "Times New Roman" })
            ]
        }),
        // Contact
        new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 10 },
            children: [
                new TextRun({ text: `${personal.location}  •  Phone / WhatsApp: ${personal.phone}  •  Email: ${personal.email}`, size: 16, font: "Times New Roman" })
            ]
        }),
        // Links
        new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 40 },
            children: [
                new TextRun({ text: `GitHub: ${personal.github}  •  LinkedIn: ${personal.linkedin}  •  Portfolio: ${personal.portfolio}`, italics: true, size: 15, font: "Times New Roman" })
            ]
        }),

        // Summary
        createSectionHeading(sectionLabels.summary),
        new Paragraph({
            alignment: AlignmentType.JUSTIFIED,
            spacing: { after: 25 },
            children: [
                new TextRun({ text: summary, size: 15, font: "Times New Roman" })
            ]
        }),

        // Skills
        createSectionHeading(sectionLabels.skills)
    ];

    skillsCategories.forEach(sc => {
        docChildren.push(
            new Paragraph({
                spacing: { after: 8 },
                children: [
                    new TextRun({ text: `${sc.category}: `, bold: true, size: 15, font: "Times New Roman" }),
                    new TextRun({ text: sc.items, size: 15, font: "Times New Roman" })
                ]
            })
        );
    });

    // Experience
    docChildren.push(createSectionHeading(sectionLabels.experience));
    experience.forEach(exp => {
        docChildren.push(
            new Paragraph({
                spacing: { before: 30, after: 8 },
                tabStops: [
                    {
                        type: TabStopType.RIGHT,
                        position: TabStopPosition.MAX
                    }
                ],
                children: [
                    new TextRun({ text: exp.company, bold: true, size: 16, font: "Times New Roman" }),
                    new TextRun({ text: `\t${exp.location}`, italics: true, size: 15, font: "Times New Roman" })
                ]
            }),
            new Paragraph({
                spacing: { after: 12 },
                tabStops: [
                    {
                        type: TabStopType.RIGHT,
                        position: TabStopPosition.MAX
                    }
                ],
                children: [
                    new TextRun({ text: exp.role, italics: true, size: 15, font: "Times New Roman" }),
                    new TextRun({ text: `\t${exp.period}`, italics: true, size: 15, font: "Times New Roman" })
                ]
            })
        );
        exp.bullets.forEach(bullet => {
            docChildren.push(
                new Paragraph({
                    bullet: { level: 0 },
                    spacing: { after: 8 },
                    alignment: AlignmentType.JUSTIFIED,
                    children: [
                        new TextRun({ text: bullet, size: 15, font: "Times New Roman" })
                    ]
                })
            );
        });
    });

    // Projects
    docChildren.push(createSectionHeading(sectionLabels.projects));
    projects.forEach(p => {
        docChildren.push(
            new Paragraph({
                spacing: { before: 25, after: 6 },
                tabStops: [
                    {
                        type: TabStopType.RIGHT,
                        position: TabStopPosition.MAX
                    }
                ],
                children: [
                    new TextRun({ text: p.name, bold: true, size: 15, font: "Times New Roman" }),
                    new TextRun({ text: `\t${p.urlDisplay}`, italics: true, size: 14, font: "Times New Roman" })
                ]
            }),
            new Paragraph({
                spacing: { after: 6 },
                children: [
                    new TextRun({ text: `Core Stack: ${p.techStack}`, italics: true, size: 14, font: "Times New Roman" })
                ]
            }),
            new Paragraph({
                bullet: { level: 0 },
                spacing: { after: 8 },
                alignment: AlignmentType.JUSTIFIED,
                children: [
                    new TextRun({ text: p.bullet, size: 15, font: "Times New Roman" })
                ]
            })
        );
    });

    // Education & Credentials
    docChildren.push(createSectionHeading(sectionLabels.education));
    education.forEach(edu => {
        docChildren.push(
            new Paragraph({
                spacing: { before: 25, after: 6 },
                tabStops: [
                    {
                        type: TabStopType.RIGHT,
                        position: TabStopPosition.MAX
                    }
                ],
                children: [
                    new TextRun({ text: edu.institution, bold: true, size: 16, font: "Times New Roman" }),
                    new TextRun({ text: `\t${edu.location}`, italics: true, size: 15, font: "Times New Roman" })
                ]
            }),
            new Paragraph({
                spacing: { after: 6 },
                tabStops: [
                    {
                        type: TabStopType.RIGHT,
                        position: TabStopPosition.MAX
                    }
                ],
                children: [
                    new TextRun({ text: edu.degree, italics: true, size: 15, font: "Times New Roman" }),
                    new TextRun({ text: `\t${edu.year}`, italics: true, size: 15, font: "Times New Roman" })
                ]
            }),
            new Paragraph({
                bullet: { level: 0 },
                spacing: { after: 8 },
                alignment: AlignmentType.JUSTIFIED,
                children: [
                    new TextRun({ text: edu.bullet, size: 15, font: "Times New Roman" })
                ]
            })
        );
    });

    certifications.forEach(cert => {
        docChildren.push(
            new Paragraph({
                spacing: { before: 15, after: 6 },
                tabStops: [
                    {
                        type: TabStopType.RIGHT,
                        position: TabStopPosition.MAX
                    }
                ],
                children: [
                    new TextRun({ text: `${cert.name} — ${cert.issuer}`, bold: true, size: 15, font: "Times New Roman" }),
                    new TextRun({ text: `\t${cert.year}`, italics: true, size: 14, font: "Times New Roman" })
                ]
            }),
            new Paragraph({
                bullet: { level: 0 },
                spacing: { after: 8 },
                alignment: AlignmentType.JUSTIFIED,
                children: [
                    new TextRun({ text: cert.bullet, size: 15, font: "Times New Roman" })
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
                            top: 450,
                            bottom: 450,
                            left: 550,
                            right: 550
                        }
                    }
                },
                children: docChildren
            }
        ]
    });

    const buffer = await Packer.toBuffer(doc);
    fs.writeFileSync(docxPath, buffer);
    console.log(`✓ Harvard Word DOCX CV generated: ${path.basename(docxPath)}`);
}

// =========================================================================
// BROWSER & PDF BUILDER HELPER
// =========================================================================
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

// =========================================================================
// MAIN GENERATOR
// =========================================================================
async function main() {
    console.log('=== Full-Stack Software Engineer Harvard Resume Generator ===');
    console.log(`Output folder: ${outputDir}`);

    // 1. GENERATE HARVARD CV EN (PDF & DOCX)
    const tempCvEnHtml = path.join(rootDir, 'scripts', 'temp_fullstack_harvard_cv_en.html');
    const cvEnPdfPath = path.join(outputDir, 'Ahmad-Ayub-Numan-Full-Stack-Engineer-Harvard-CV-EN.pdf');
    const cvEnDocxPath = path.join(outputDir, 'Ahmad-Ayub-Numan-Full-Stack-Engineer-Harvard-CV-EN.docx');
    const cvPrimaryPdfPath = path.join(outputDir, 'Ahmad-Ayub-Numan-Full-Stack-Software-Engineer-Harvard-CV.pdf');
    const cvPrimaryDocxPath = path.join(outputDir, 'Ahmad-Ayub-Numan-Full-Stack-Software-Engineer-Harvard-CV.docx');

    fs.writeFileSync(tempCvEnHtml, generateHarvardHtmlCv(fullstackCvDataEn), 'utf-8');
    buildPdf(tempCvEnHtml, cvEnPdfPath);
    await buildHarvardDocxCv(fullstackCvDataEn, cvEnDocxPath);

    try {
        fs.copyFileSync(cvEnPdfPath, cvPrimaryPdfPath);
        fs.copyFileSync(cvEnDocxPath, cvPrimaryDocxPath);
    } catch (e) {}

    if (fs.existsSync(tempCvEnHtml)) fs.unlinkSync(tempCvEnHtml);

    // 2. GENERATE HARVARD CV ID (PDF & DOCX)
    const tempCvIdHtml = path.join(rootDir, 'scripts', 'temp_fullstack_harvard_cv_id.html');
    const cvIdPdfPath = path.join(outputDir, 'Ahmad-Ayub-Numan-Full-Stack-Engineer-Harvard-CV-ID.pdf');
    const cvIdDocxPath = path.join(outputDir, 'Ahmad-Ayub-Numan-Full-Stack-Engineer-Harvard-CV-ID.docx');

    fs.writeFileSync(tempCvIdHtml, generateHarvardHtmlCv(fullstackCvDataId), 'utf-8');
    buildPdf(tempCvIdHtml, cvIdPdfPath);
    await buildHarvardDocxCv(fullstackCvDataId, cvIdDocxPath);

    if (fs.existsSync(tempCvIdHtml)) fs.unlinkSync(tempCvIdHtml);

    // 3. COPY ALL GENERATED FILES & STANDARD ALIASES TO public/cv/
    const allFiles = [
        cvEnPdfPath,
        cvEnDocxPath,
        cvPrimaryPdfPath,
        cvPrimaryDocxPath,
        cvIdPdfPath,
        cvIdDocxPath
    ];

    allFiles.forEach(filePath => {
        try {
            if (fs.existsSync(filePath)) {
                fs.copyFileSync(filePath, path.join(publicCvDir, path.basename(filePath)));
            }
        } catch (e) {}
    });

    // Ensure all standard legacy aliases also point to the Harvard Standard CV
    const aliasMap = [
        [cvEnPdfPath, path.join(publicCvDir, 'Ahmad-Ayub-Numan-Full-Stack-Software-Engineer-CV-EN.pdf')],
        [cvEnDocxPath, path.join(publicCvDir, 'Ahmad-Ayub-Numan-Full-Stack-Software-Engineer-CV-EN.docx')],
        [cvEnPdfPath, path.join(publicCvDir, 'Ahmad-Ayub-Numan-Full-Stack-Software-Engineer-CV.pdf')],
        [cvEnDocxPath, path.join(publicCvDir, 'Ahmad-Ayub-Numan-Full-Stack-Software-Engineer-CV.docx')],
        [cvEnPdfPath, path.join(publicCvDir, 'software-engineer-cv.pdf')],
        [cvEnDocxPath, path.join(publicCvDir, 'software-engineer-cv.docx')],
        [cvIdPdfPath, path.join(publicCvDir, 'Ahmad-Ayub-Numan-Full-Stack-Software-Engineer-CV-ID.pdf')],
        [cvIdDocxPath, path.join(publicCvDir, 'Ahmad-Ayub-Numan-Full-Stack-Software-Engineer-CV-ID.docx')],
        [cvIdPdfPath, path.join(publicCvDir, 'software-engineer-cv-id.pdf')],
        [cvIdDocxPath, path.join(publicCvDir, 'software-engineer-cv-id.docx')]
    ];

    aliasMap.forEach(([src, dst]) => {
        try {
            if (fs.existsSync(src)) {
                fs.copyFileSync(src, dst);
            }
        } catch (e) {}
    });

    console.log('\n=== Success! All Full-Stack Engineer Harvard CV files generated successfully! ===');
}

main().catch(err => {
    console.error('Error generating Full-Stack Harvard files:', err);
    process.exit(1);
});

