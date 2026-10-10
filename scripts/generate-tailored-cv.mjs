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

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Data tailored specifically for Web / Application Developer position
const tailoredCvDataId = {
    lang: "id",
    personal: {
        name: "Ahmad Ayub Nu'man",
        title: "Web & Application Developer",
        subtitle: "Full-Stack Web Systems • REST API Integration • Data Security • Agentic AI Workflows",
        location: "Cilacap, Jawa Tengah, Indonesia",
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
    summary: "Web & Application Developer dengan pengalaman 2+ tahun memimpin siklus hidup pengembangan aplikasi web end-to-end (SDLC), mulai dari perancangan antarmuka berbasis kebutuhan pengguna (UI/UX), arsitektur full-stack, integrasi REST API, hingga pengujian otomatis dan pemeliharaan server. Berhasil merancang dan mendeploy platform tata kelola pendidikan SIMMACI (270+ sekolah/madrasah, 17.000+ pengguna aktif) serta sistem ERP multi-tenant. Menguasai pemrograman PHP (Laravel), JavaScript/TypeScript (React, Next.js, NestJS), pengelolaan database PostgreSQL & MySQL, serta dasar keamanan aplikasi (RBAC, OWASP, audit integritas data). Terbiasa mengoperasikan Agentic AI IDE (Antigravity, Kiro, Codex, OpenCode) untuk akselerasi efisiensi rekayasa perangkat lunak, perancangan arsitektur, refaktorisasi, dan troubleshooting aplikasi (cepat beradaptasi dengan berbagai fondasi model seperti Claude dan Grok). Berlatar belakang pendidikan tinggi Islam (Muslim) dengan etika kerja amanah dan orientasi kuat pada kualitas solusi.",
    skills: {
        languages: ["PHP 8+", "JavaScript (ES6+)", "TypeScript", "SQL", "HTML5", "CSS3"],
        frontend: ["React 18/19", "Next.js (App Router)", "Tailwind CSS", "Blade", "Zustand", "Responsive UI/UX Design", "Translasi Kebutuhan Pengguna"],
        backend: ["Laravel 11/12", "NestJS", "Node.js", "Express", "RESTful APIs", "Integrasi Antar Sistem (Webhook, Gateway)", "Microservices"],
        databases: ["PostgreSQL 16", "MySQL", "Prisma ORM", "Perancangan Skema", "Composite Indexing", "Pengelolaan & Integritas Data"],
        testingAndTroubleshooting: ["Automated Testing (PHPUnit, Pest, Jest - 1.800+ Test Cases)", "Application Debugging", "Maintenance & Troubleshooting", "Log Analysis"],
        aiAndProductivity: ["Agentic AI IDEs (Antigravity, Kiro, Codex, OpenCode)", "Agentic Coding Workflows & Autonomous Development", "Prompt Engineering & Refactoring Otomatis (Adaptif Claude / Grok)"],
        devopsAndSecurity: ["Git / GitHub (1.940+ Commits)", "Docker & Docker Compose", "Linux/VPS Administration", "Dasar Keamanan Web (RBAC, CSP, HSTS, Input Sanitization)"]
    },
    labels: {
        professionalSummary: "Ringkasan Profesional",
        technicalSkills: "Keahlian Teknis (Technical Skills)",
        professionalExperience: "Pengalaman Kerja Profesional",
        selectedProjects: "Proyek Rekayasa Aplikasi Web Unggulan",
        education: "Pendidikan & Kualifikasi"
    },
    experience: [
        {
            role: "Staff IT & Sistem Informasi",
            subtitle: "Web & Application Developer • Lead Full-Stack Engineer",
            company: "LP Ma'arif NU Cilacap",
            location: "Cilacap, Jawa Tengah, Indonesia",
            period: "2024 – Sekarang",
            responsibilities: [
                "Menerjemahkan kebutuhan bisnis dan alur kerja pengguna (270+ institusi, 2.000+ PTK, 17.000+ siswa) menjadi spesifikasi fitur dan antarmuka aplikasi web yang responsif, intuitif, dan mudah digunakan (UI/UX).",
                "Merancang dan membangun aplikasi web enterprise SIMMACI dengan arsitektur terpisah (React 19 SPA + Laravel 12 REST API pada PostgreSQL 16), memfasilitasi administrasi institusi, pendataan PTK, dan siklus siswa secara tersentralisasi.",
                "Mengembangkan endpoint RESTful API yang aman dan terstruktur serta menghubungkan integrasi antar sistem: generator dokumen batch (SK) otomatis berbasis PHPWord, penyimpanan cloud terisolasi S3/MinIO, dan webhook notifikasi.",
                "Merancang dan merekayasa Sistem Keuangan Lembaga (Aplikasi Keuangan Multi-Tenant) berbasis Domain-Driven Design (DDD), Money Value Object (pencegahan float error), dan Segregation of Duties (Maker-Checker).",
                "Menerapkan pengujian mutu, debugging, dan pemeliharaan aplikasi secara intensif: 1.822 automated test cases pada SIMMACI (PHPUnit/Pest, 100% Pass, 36.983 assertions) dan 63 unit/feature tests verifikasi saldo invarian.",
                "Melakukan security hardening dan pemeliharaan server Linux/VPS & Docker: penutupan 27 API guards, audit akses berbasis peran (RBAC), remediasi celah keamanan SEC-001–004, dan konfigurasi Nginx HSTS & CSP.",
                "Mengintegrasikan alur kerja Agentic AI IDE (Antigravity, Kiro, Codex, OpenCode) ke dalam siklus rekayasa harian untuk akselerasi penulisan algoritma kompleks, refaktorisasi kode berkinerja tinggi, dan penyusunan skenario pengujian komprehensif."
            ]
        }
    ],
    projects: [
        {
            name: "SIMMACI — Enterprise Education Governance Platform",
            techStack: "React 19, TypeScript, Laravel 12, PostgreSQL 16, Tailwind CSS, REST API, PHPUnit/Pest",
            demoUrl: "https://sim-maarif-fullstack.vercel.app/dashboard",
            demoDisplay: "sim-maarif-fullstack.vercel.app",
            repoUrl: "https://github.com/ayebe51/simmaci",
            repoDisplay: "github.com/ayebe51/simmaci",
            highlights: [
                "Platform web decoupled (React SPA + Laravel REST API) untuk administrasi 270+ sekolah/madrasah, 2.000+ staf, dan 17.000+ peserta didik dengan otomasi penerbitan batch SK dan sinkronisasi data siswa.",
                "Menerapkan integrasi penyimpanan cloud S3/MinIO, alur persetujuan multi-level berbasis peran (RBAC), serta jaminan mutu 1.822 test cases otomatis (100% PASS, 36.983 assertions)."
            ]
        },
        {
            name: "Koneksi Santri — Integrated Islamic Boarding School ERP & Web App",
            techStack: "Next.js 14, TypeScript, NestJS, PostgreSQL, Prisma ORM, REST API, Docker",
            demoUrl: "https://admin.koneksisantri.tech",
            demoDisplay: "admin.koneksisantri.tech",
            repoUrl: "https://github.com/ayebe51/koneksi-santri",
            repoDisplay: "github.com/ayebe51/koneksi-santri",
            highlights: [
                "Aplikasi web ERP terintegrasi menghubungkan administrasi santri, tagihan SPP berkala, komunikasi wali santri, dan akuntansi buku besar multi-cabang.",
                "Merancang sistem dompet digital tertutup (closed-loop wallet) untuk transaksi kantin nontunai dengan kontrol limit harian wali dan integrasi gateway notifikasi WhatsApp otomatis."
            ]
        },
        {
            name: "Enterprise POS & Inventory (Kiro ERP) — Retail Management Web App",
            techStack: "React 19, NestJS, TypeScript, Prisma ORM, PostgreSQL, REST API, Apache ECharts",
            demoUrl: "https://inventory-pos-hazel.vercel.app",
            demoDisplay: "inventory-pos-hazel.vercel.app",
            repoUrl: "https://github.com/ayebe51/inventory-pos",
            repoDisplay: "github.com/ayebe51/inventory-pos",
            highlights: [
                "Aplikasi web kasir POS dan manajemen persediaan multi-gudang dengan pencatatan mutasi stok append-only dan valuasi Weighted Average Cost (WAC)/FIFO untuk konsistensi data real-time."
            ]
        }
    ],
    education: [
        {
            degree: "Sarjana Hukum (S.H.) — Hukum Ekonomi Syariah",
            institution: "STAI At-Tahdzib Jombang",
            location: "Jombang, Jawa Timur, Indonesia",
            graduationYear: "Lulus 2019",
            notes: "Fondasi logika sistematis, kepatuhan tata kelola, dan integritas tinggi (Muslim). Didukung 5+ tahun rekayasa perangkat lunak mandiri secara intensif (Autodidact & Continuous Learning) dengan portofolio aplikasi produksi nyata berskala puluhan ribu pengguna."
        }
    ]
};

const tailoredCvDataEn = {
    lang: "en",
    personal: {
        name: "Ahmad Ayub Nu'man",
        title: "Web & Application Developer",
        subtitle: "Full-Stack Web Systems • REST API Integration • Data Security • Agentic AI Workflows",
        location: "Cilacap, Central Java, Indonesia",
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
    summary: "Web & Application Developer with 2+ years of comprehensive experience directing the end-to-end software development lifecycle (SDLC) across modern web platforms. Proven track record architecting and deploying large-scale enterprise solutions (SIMMACI for 270+ institutions and 17,000+ active users) and multi-tenant financial ERP engines. Proficient in frontend engineering (HTML5, CSS3, JavaScript, React, Tailwind CSS), robust backend services (PHP/Laravel, Node.js/NestJS, TypeScript), relational databases (PostgreSQL, MySQL), RESTful API integrations, automated testing (1,800+ test cases), and web application security (RBAC, OWASP, server hardening). Experienced in leveraging Agentic AI IDEs and autonomous development tools (Antigravity, Kiro, Codex, OpenCode) for software engineering acceleration, architectural planning, and rapid troubleshooting (readily adaptable to Claude and Grok ecosystems).",
    skills: {
        languages: ["PHP 8+", "JavaScript (ES6+)", "TypeScript", "SQL", "HTML5", "CSS3"],
        frontend: ["React 18/19", "Next.js (App Router)", "Tailwind CSS", "Blade", "Zustand", "Responsive UI/UX Design", "User Requirement Mapping"],
        backend: ["Laravel 11/12", "NestJS", "Node.js", "Express", "RESTful APIs", "Inter-System Integration (Webhooks, Gateways)", "Microservices"],
        databases: ["PostgreSQL 16", "MySQL", "Prisma ORM", "Schema Design", "Composite Indexing", "Data Integrity & Management"],
        testingAndTroubleshooting: ["Automated Testing (PHPUnit, Pest, Jest - 1,800+ Test Cases)", "Application Debugging", "Maintenance & Troubleshooting", "Log Analysis"],
        aiAndProductivity: ["Agentic AI IDEs (Antigravity, Kiro, Codex, OpenCode)", "Agentic Coding Workflows & Autonomous Development", "Prompt Engineering & Automated Refactoring (Adaptable to Claude / Grok)"],
        devopsAndSecurity: ["Git / GitHub (1,940+ Commits)", "Docker & Docker Compose", "Linux/VPS Administration", "Web Security Fundamentals (RBAC, CSP, HSTS, Input Sanitization)"]
    },
    labels: {
        professionalSummary: "Professional Summary",
        technicalSkills: "Technical Skills",
        professionalExperience: "Professional Experience",
        selectedProjects: "Selected Web & Application Projects",
        education: "Education & Qualifications"
    },
    experience: [
        {
            role: "Staff IT & Sistem Informasi",
            subtitle: "Web & Application Developer • Lead Full-Stack Engineer",
            company: "LP Ma'arif NU Cilacap",
            location: "Cilacap, Central Java, Indonesia",
            period: "2024 – Present",
            responsibilities: [
                "Translated complex operational requirements across 270+ educational institutions, 2,000+ staff, and 17,000+ students into responsive, accessible, and intuitive web interfaces (UI/UX).",
                "Architected and deployed SIMMACI, a decoupled fullstack enterprise web platform (React 19 SPA + Laravel 12 REST API on PostgreSQL 16) centralizing governance, staff credentials, and student lifecycles.",
                "Engineered secure RESTful API contracts and seamless cross-system integrations: automated batch Word/PDF decree templating, S3/MinIO cloud storage isolation, and external webhook dispatches.",
                "Engineered the Institutional Core Financial System using clean Domain-Driven Architecture, Money Value Objects (preventing float rounding errors), and multi-tenant TenantScope with Maker-Checker segregation.",
                "Maintained strict software reliability through automated testing and debugging: 1,822 automated test cases on SIMMACI (PHPUnit/Pest, 100% Pass) and 63 financial invariant feature tests.",
                "Hardened web application and infrastructure security: closed 27 API guards, enforced Role-Based Access Control (RBAC), resolved SEC-001–004 vulnerabilities, and tuned Nginx HSTS & CSP.",
                "Utilized Agentic AI IDEs and autonomous tools (Antigravity, Kiro, Codex, OpenCode) within daily software workflows to accelerate complex algorithmic design, conduct code refactoring, and generate automated test suites."
            ]
        }
    ],
    projects: [
        {
            name: "SIMMACI — Enterprise Education Governance Platform",
            techStack: "React 19, TypeScript, Laravel 12, PostgreSQL 16, Tailwind CSS, REST API, PHPUnit/Pest",
            demoUrl: "https://sim-maarif-fullstack.vercel.app/dashboard",
            demoDisplay: "sim-maarif-fullstack.vercel.app",
            repoUrl: "https://github.com/ayebe51/simmaci",
            repoDisplay: "github.com/ayebe51/simmaci",
            highlights: [
                "Decoupled fullstack web platform (React SPA + Laravel REST API) centralizing operations for 270+ institutions, 2,000+ staff, and 17,000+ students with automated batch decree generation.",
                "Implemented S3/MinIO cloud storage isolation, multi-level review queues, and 1,822 automated PHPUnit/Pest test cases (100% PASS, 36,983 assertions)."
            ]
        },
        {
            name: "Koneksi Santri — Integrated Islamic Boarding School ERP & Web App",
            techStack: "Next.js 14, TypeScript, NestJS, PostgreSQL, Prisma ORM, REST API, Docker",
            demoUrl: "https://admin.koneksisantri.tech",
            demoDisplay: "admin.koneksisantri.tech",
            repoUrl: "https://github.com/ayebe51/koneksi-santri",
            repoDisplay: "github.com/ayebe51/koneksi-santri",
            highlights: [
                "Integrated ERP web application bridging student management, recurring tuition billing, parent communications, and multi-branch general ledger accounting.",
                "Engineered a closed-loop digital wallet system for cashless canteen transactions with parent-controlled spending limits and automated WhatsApp notification dispatch."
            ]
        },
        {
            name: "Enterprise POS & Inventory (Kiro ERP) — Retail Management Web App",
            techStack: "React 19, NestJS, TypeScript, Prisma ORM, PostgreSQL, REST API, Apache ECharts",
            demoUrl: "https://inventory-pos-hazel.vercel.app",
            demoDisplay: "inventory-pos-hazel.vercel.app",
            repoUrl: "https://github.com/ayebe51/inventory-pos",
            repoDisplay: "github.com/ayebe51/inventory-pos",
            highlights: [
                "Domain-Driven Design (DDD) retail management system handling multi-warehouse stock replenishment, cashier POS operations, and append-only inventory movement ledger."
            ]
        }
    ],
    education: [
        {
            degree: "Bachelor of Islamic Economic Law (S.H.)",
            institution: "STAI At-Tahdzib Jombang",
            location: "Jombang, East Java, Indonesia",
            graduationYear: "Graduated 2019",
            notes: "Developed strong logical reasoning, regulatory governance, and ethical integrity. Complemented by 5+ years of rigorous independent software engineering (Autodidact & Continuous Learning) with verified production platforms serving tens of thousands of users."
        }
    ]
};

function generateHtmlCv(data) {
    const { personal, summary, skills, labels, experience, projects, education, lang } = data;
    const isId = lang === 'id';

    const skillCategories = isId ? [
        { label: "Bahasa Pemrograman:", val: skills.languages.join(', ') },
        { label: "Frontend & UI/UX:", val: skills.frontend.join(', ') },
        { label: "Backend & Integrasi API:", val: skills.backend.join(', ') },
        { label: "Basis Data & ORM:", val: skills.databases.join(', ') },
        { label: "Testing & Troubleshooting:", val: skills.testingAndTroubleshooting.join(', ') },
        { label: "Agentic AI & AI IDEs:", val: skills.aiAndProductivity.join(', ') },
        { label: "DevOps, Git & Keamanan:", val: skills.devopsAndSecurity.join(', ') }
    ] : [
        { label: "Programming Languages:", val: skills.languages.join(', ') },
        { label: "Frontend & UI/UX:", val: skills.frontend.join(', ') },
        { label: "Backend & API Integration:", val: skills.backend.join(', ') },
        { label: "Databases & ORM:", val: skills.databases.join(', ') },
        { label: "Testing & Troubleshooting:", val: skills.testingAndTroubleshooting.join(', ') },
        { label: "Agentic AI & Workflows:", val: skills.aiAndProductivity.join(', ') },
        { label: "DevOps, Git & Security:", val: skills.devopsAndSecurity.join(', ') }
    ];

    const demoLabel = isId ? "Demo Langsung:" : "Live Demo:";
    const repoLabel = isId ? "Repositori:" : "Repository:";

    return `<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="UTF-8">
<title>${personal.name} - ${personal.title} CV (${lang.toUpperCase()})</title>
<style>
  @page {
    size: A4 portrait;
    margin: 10mm 14mm 10mm 14mm;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    color: #1a1a1a;
    line-height: 1.32;
    font-size: 9.1pt;
    background: #ffffff;
    -webkit-print-color-adjust: exact;
  }
  .header {
    text-align: center;
    border-bottom: 1.5pt solid #222222;
    padding-bottom: 6px;
    margin-bottom: 8px;
  }
  .header h1 {
    font-size: 19pt;
    font-weight: 700;
    color: #111111;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    margin-bottom: 2px;
  }
  .header .title {
    font-size: 10.5pt;
    font-weight: 700;
    color: #2b6cb0;
    margin-bottom: 2px;
    text-transform: uppercase;
    letter-spacing: 0.8px;
  }
  .header .subtitle {
    font-size: 8.6pt;
    color: #4a5568;
    margin-bottom: 4px;
    font-weight: 500;
  }
  .contact-bar {
    font-size: 8.2pt;
    color: #333333;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 4px 8px;
  }
  .contact-bar a {
    color: #1a1a1a;
    text-decoration: none;
  }
  .contact-bar span.sep {
    color: #999999;
  }
  
  .section {
    margin-bottom: 8px;
    page-break-inside: auto;
  }
  .section-title {
    font-size: 9.8pt;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    color: #1a202c;
    border-bottom: 1pt solid #cbd5e0;
    padding-bottom: 2px;
    margin-bottom: 4px;
  }
  
  .summary-text {
    font-size: 8.6pt;
    color: #2d3748;
    line-height: 1.38;
    text-align: justify;
  }

  .skills-grid {
    display: flex;
    flex-direction: column;
    gap: 2px;
    font-size: 8.4pt;
  }
  .skill-row {
    display: flex;
    line-height: 1.30;
  }
  .skill-category {
    font-weight: 700;
    color: #2d3748;
    width: 175px;
    flex-shrink: 0;
  }
  .skill-items {
    color: #4a5568;
    flex: 1;
  }

  .item-block {
    margin-bottom: 6px;
    page-break-inside: avoid;
  }
  .item-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 1px;
  }
  .item-title {
    font-size: 9.2pt;
    font-weight: 700;
    color: #1a202c;
  }
  .item-subtitle {
    font-size: 8.5pt;
    font-weight: 600;
    color: #2b6cb0;
  }
  .item-meta {
    font-size: 8.2pt;
    color: #4a5568;
    text-align: right;
    font-weight: 500;
  }
  .item-submeta {
    font-size: 8.2pt;
    color: #4a5568;
    margin-bottom: 2px;
    font-style: italic;
  }

  ul.bullets {
    margin-left: 14px;
    margin-top: 2px;
  }
  ul.bullets li {
    font-size: 8.4pt;
    color: #2d3748;
    margin-bottom: 2px;
    line-height: 1.32;
    text-align: justify;
  }
  
  .project-links {
    font-size: 7.8pt;
    color: #4a5568;
    margin-top: 1px;
  }
  .project-links a {
    color: #2b6cb0;
    text-decoration: underline;
  }

  .edu-notes {
    font-size: 8.1pt;
    color: #4a5568;
    margin-top: 2px;
    line-height: 1.30;
    text-align: justify;
  }
</style>
</head>
<body>

  <!-- HEADER -->
  <div class="header">
    <h1>${personal.name}</h1>
    <div class="title">${personal.title}</div>
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
      <a href="${personal.github}">${personal.githubDisplay}</a>
      <span class="sep">•</span>
      <a href="${personal.portfolio}">${personal.portfolioDisplay}</a>
    </div>
  </div>

  <!-- SUMMARY -->
  <div class="section">
    <div class="section-title">${labels.professionalSummary}</div>
    <p class="summary-text">${summary}</p>
  </div>

  <!-- TECHNICAL SKILLS -->
  <div class="section">
    <div class="section-title">${labels.technicalSkills}</div>
    <div class="skills-grid">
      ${skillCategories.map(sc => `
        <div class="skill-row">
          <span class="skill-category">${sc.label}</span>
          <span class="skill-items">${sc.val}</span>
        </div>
      `).join('')}
    </div>
  </div>

  <!-- PROFESSIONAL EXPERIENCE -->
  <div class="section">
    <div class="section-title">${labels.professionalExperience}</div>
    ${experience.map(exp => `
      <div class="item-block">
        <div class="item-header">
          <span class="item-title">${exp.role} <span style="font-weight:400; color:#4a5568;">(${exp.subtitle})</span></span>
          <span class="item-meta">${exp.period}</span>
        </div>
        <div class="item-submeta">${exp.company} • ${exp.location}</div>
        <ul class="bullets">
          ${exp.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
        </ul>
      </div>
    `).join('')}
  </div>

  <!-- SELECTED PROJECTS -->
  <div class="section">
    <div class="section-title">${labels.selectedProjects}</div>
    ${projects.map(proj => `
      <div class="item-block">
        <div class="item-header">
          <span class="item-title">${proj.name}</span>
          <span class="item-meta" style="font-style:italic;">${proj.techStack}</span>
        </div>
        <div class="project-links">
          ${proj.demoUrl ? `${demoLabel} <a href="${proj.demoUrl}">${proj.demoDisplay}</a>` : ''}
          ${proj.demoUrl && proj.repoUrl ? ' | ' : ''}
          ${proj.repoUrl ? `${repoLabel} <a href="${proj.repoUrl}">${proj.repoDisplay}</a>` : ''}
        </div>
        <ul class="bullets">
          ${proj.highlights.map(h => `<li>${h}</li>`).join('')}
        </ul>
      </div>
    `).join('')}
  </div>

  <!-- EDUCATION -->
  <div class="section">
    <div class="section-title">${labels.education}</div>
    ${education.map(edu => `
      <div class="item-block" style="margin-bottom:0;">
        <div class="item-header">
          <span class="item-title">${edu.degree}</span>
          <span class="item-meta">${edu.graduationYear}</span>
        </div>
        <div class="item-submeta">${edu.institution} • ${edu.location}</div>
        ${edu.notes ? `<p class="edu-notes">${edu.notes}</p>` : ''}
      </div>
    `).join('')}
  </div>

</body>
</html>`;
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

async function buildDocx(data, docxPath) {
    const { personal, summary, skills, labels, experience, projects, education, lang } = data;
    const isId = lang === 'id';

    const docChildren = [];

    // Header: Name
    docChildren.push(
        new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 40 },
            children: [
                new TextRun({
                    text: personal.name.toUpperCase(),
                    bold: true,
                    size: 30, // 15pt
                    color: "111111"
                })
            ]
        })
    );

    // Header: Title
    docChildren.push(
        new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 25 },
            children: [
                new TextRun({
                    text: personal.title.toUpperCase(),
                    bold: true,
                    size: 21,
                    color: "2B6CB0"
                })
            ]
        })
    );

    // Header: Subtitle
    docChildren.push(
        new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 60 },
            children: [
                new TextRun({
                    text: personal.subtitle,
                    size: 17,
                    color: "4A5568"
                })
            ]
        })
    );

    // Header: Contact Info
    docChildren.push(
        new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 140 },
            border: {
                bottom: {
                    color: "222222",
                    space: 5,
                    style: BorderStyle.SINGLE,
                    size: 12
                }
            },
            children: [
                new TextRun({ text: `${personal.location}  •  `, size: 16 }),
                new TextRun({ text: `${personal.email}  •  `, size: 16 }),
                new TextRun({ text: `${personal.phone}  •  `, size: 16 }),
                new TextRun({ text: `${personal.linkedinDisplay}  •  `, size: 16 }),
                new TextRun({ text: `${personal.githubDisplay}  •  `, size: 16 }),
                new TextRun({ text: `${personal.portfolioDisplay}`, size: 16 })
            ]
        })
    );

    function createSectionHeading(title) {
        return new Paragraph({
            spacing: { before: 110, after: 60 },
            border: {
                bottom: {
                    color: "CBD5E0",
                    space: 3,
                    style: BorderStyle.SINGLE,
                    size: 6
                }
            },
            children: [
                new TextRun({
                    text: title.toUpperCase(),
                    bold: true,
                    size: 19,
                    color: "1A202C"
                })
            ]
        });
    }

    // Professional Summary
    docChildren.push(createSectionHeading(labels.professionalSummary));
    docChildren.push(
        new Paragraph({
            spacing: { after: 100 },
            alignment: AlignmentType.JUSTIFIED,
            children: [
                new TextRun({
                    text: summary,
                    size: 17
                })
            ]
        })
    );

    // Technical Skills
    docChildren.push(createSectionHeading(labels.technicalSkills));
    const skillCategories = isId ? [
        { label: "Bahasa Pemrograman", val: skills.languages.join(", ") },
        { label: "Frontend & UI/UX", val: skills.frontend.join(", ") },
        { label: "Backend & Integrasi API", val: skills.backend.join(", ") },
        { label: "Basis Data & ORM", val: skills.databases.join(", ") },
        { label: "Testing & Troubleshooting", val: skills.testingAndTroubleshooting.join(", ") },
        { label: "Agentic AI & AI IDEs", val: skills.aiAndProductivity.join(", ") },
        { label: "DevOps, Git & Keamanan", val: skills.devopsAndSecurity.join(", ") }
    ] : [
        { label: "Programming Languages", val: skills.languages.join(", ") },
        { label: "Frontend & UI/UX", val: skills.frontend.join(", ") },
        { label: "Backend & API Integration", val: skills.backend.join(", ") },
        { label: "Databases & ORM", val: skills.databases.join(", ") },
        { label: "Testing & Troubleshooting", val: skills.testingAndTroubleshooting.join(", ") },
        { label: "Agentic AI & Workflows", val: skills.aiAndProductivity.join(", ") },
        { label: "DevOps, Git & Security", val: skills.devopsAndSecurity.join(", ") }
    ];

    skillCategories.forEach(sc => {
        docChildren.push(
            new Paragraph({
                spacing: { after: 30 },
                children: [
                    new TextRun({ text: `${sc.label}: `, bold: true, size: 16, color: "2D3748" }),
                    new TextRun({ text: sc.val, size: 16, color: "4A5568" })
                ]
            })
        );
    });

    // Professional Experience
    docChildren.push(createSectionHeading(labels.professionalExperience));
    experience.forEach(exp => {
        docChildren.push(
            new Paragraph({
                spacing: { before: 60, after: 15 },
                children: [
                    new TextRun({ text: `${exp.role} `, bold: true, size: 18, color: "1A202C" }),
                    new TextRun({ text: `(${exp.subtitle})`, size: 16, color: "4A5568" }),
                    new TextRun({ text: `\t${exp.period}`, bold: true, size: 16, color: "4A5568" })
                ]
            })
        );
        docChildren.push(
            new Paragraph({
                spacing: { after: 40 },
                children: [
                    new TextRun({ text: `${exp.company} • ${exp.location}`, italics: true, size: 16, color: "4A5568" })
                ]
            })
        );

        exp.responsibilities.forEach(resp => {
            docChildren.push(
                new Paragraph({
                    bullet: { level: 0 },
                    spacing: { after: 30 },
                    alignment: AlignmentType.JUSTIFIED,
                    children: [
                        new TextRun({ text: resp, size: 16, color: "2D3748" })
                    ]
                })
            );
        });
    });

    // Selected Projects
    const demoLabel = isId ? "Demo Langsung:" : "Live Demo:";
    const repoLabel = isId ? "Repositori:" : "Repository:";

    docChildren.push(createSectionHeading(labels.selectedProjects));
    projects.forEach(proj => {
        docChildren.push(
            new Paragraph({
                spacing: { before: 60, after: 15 },
                children: [
                    new TextRun({ text: proj.name, bold: true, size: 18, color: "1A202C" })
                ]
            })
        );
        docChildren.push(
            new Paragraph({
                spacing: { after: 30 },
                children: [
                    new TextRun({ text: `Tech Stack: ${proj.techStack}`, italics: true, size: 15, color: "4A5568" })
                ]
            })
        );
        docChildren.push(
            new Paragraph({
                spacing: { after: 30 },
                children: [
                    new TextRun({ text: `${demoLabel} ${proj.demoDisplay}  |  ${repoLabel} ${proj.repoDisplay}`, size: 15, color: "2B6CB0" })
                ]
            })
        );

        proj.highlights.forEach(h => {
            docChildren.push(
                new Paragraph({
                    bullet: { level: 0 },
                    spacing: { after: 25 },
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
                spacing: { before: 60, after: 15 },
                children: [
                    new TextRun({ text: edu.degree, bold: true, size: 18, color: "1A202C" }),
                    new TextRun({ text: `\t${edu.graduationYear}`, size: 16, color: "4A5568" })
                ]
            })
        );
        docChildren.push(
            new Paragraph({
                spacing: { after: 30 },
                children: [
                    new TextRun({ text: `${edu.institution} • ${edu.location}`, italics: true, size: 16, color: "4A5568" })
                ]
            })
        );
        if (edu.notes) {
            docChildren.push(
                new Paragraph({
                    spacing: { after: 40 },
                    alignment: AlignmentType.JUSTIFIED,
                    children: [
                        new TextRun({ text: edu.notes, size: 15, color: "4A5568" })
                    ]
                })
            );
        }
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

async function processTailoredVersion(data, suffix) {
    const tempHtmlPath = path.join(rootDir, 'scripts', `temp_tailored_${suffix.toLowerCase()}.html`);
    const pdfPath = path.join(outputDir, `Ahmad-Ayub-Numan-Web-Developer-CV-${suffix}.pdf`);
    const docxPath = path.join(outputDir, `Ahmad-Ayub-Numan-Web-Developer-CV-${suffix}.docx`);

    // 1. HTML
    const html = generateHtmlCv(data);
    fs.writeFileSync(tempHtmlPath, html, 'utf-8');

    // 2. PDF
    buildPdf(tempHtmlPath, pdfPath);

    // 3. DOCX
    await buildDocx(data, docxPath);

    if (fs.existsSync(tempHtmlPath)) {
        fs.unlinkSync(tempHtmlPath);
    }
}

async function main() {
    console.log('=== Tailored ATS CV Generator (Web & Application Developer) ===');
    console.log(`Output folder: ${outputDir}`);

    console.log('\n[1/2] Generating Tailored Indonesian Version (ID)...');
    await processTailoredVersion(tailoredCvDataId, 'ID');

    console.log('\n[2/2] Generating Tailored English Version (EN)...');
    await processTailoredVersion(tailoredCvDataEn, 'EN');

    // Also create ready-to-send default alias in tailored-cv/
    const idPdf = path.join(outputDir, 'Ahmad-Ayub-Numan-Web-Developer-CV-ID.pdf');
    const defaultPdf = path.join(outputDir, 'Ahmad-Ayub-Numan-Web-Application-Developer-CV.pdf');
    if (fs.existsSync(idPdf)) {
        try {
            fs.copyFileSync(idPdf, defaultPdf);
            console.log(`✓ Default alias PDF updated: ${path.basename(defaultPdf)}`);
        } catch (e) {
            console.warn(`ℹ Note: ${path.basename(defaultPdf)} is currently open in a PDF viewer. Please close it if you want it overwritten directly.`);
        }
    }

    const idDocx = path.join(outputDir, 'Ahmad-Ayub-Numan-Web-Developer-CV-ID.docx');
    const defaultDocx = path.join(outputDir, 'Ahmad-Ayub-Numan-Web-Application-Developer-CV.docx');
    if (fs.existsSync(idDocx)) {
        try {
            fs.copyFileSync(idDocx, defaultDocx);
            console.log(`✓ Default alias DOCX updated: ${path.basename(defaultDocx)}`);
        } catch (e) {
            console.warn(`ℹ Note: ${path.basename(defaultDocx)} is currently open in Word.`);
        }
    }

    console.log('\n=== Success! Tailored CVs saved to tailored-cv/ ===');
}

main().catch(err => {
    console.error('Error generating tailored CV:', err);
    process.exit(1);
});
