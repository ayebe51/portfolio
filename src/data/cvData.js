export const cvDataEn = {
    lang: "en",
    personal: {
        name: "Ahmad Ayub Nu'man",
        title: "Full-Stack Software Engineer",
        subtitle: "End-to-End Systems Architecture • Full-Stack Development • DevSecOps",
        location: "Cilacap, Central Java, Indonesia",
        email: "ayb.n1994@gmail.com",
        phone: "+62 895 3491 77555",
        whatsappUrl: "https://wa.me/62895349177555",
        github: "https://github.com/ayebe51",
        githubDisplay: "github.com/ayebe51",
        linkedin: "https://www.linkedin.com/in/ayub-numan-871406155",
        linkedinDisplay: "linkedin.com/in/ayub-numan-871406155",
        portfolio: "https://portfolio-seven-theta-bovx80a70x.vercel.app/",
        portfolioUrl: "https://portfolio-seven-theta-bovx80a70x.vercel.app/",
        portfolioDisplay: "portfolio-seven-theta-bovx80a70x.vercel.app"
    },
    summary: "Full-Stack Software Engineer with comprehensive experience directing the end-to-end software development lifecycle (SDLC) from business domain analysis to containerized production deployment. Proven track record architecting institutional education governance (SIMMACI for 270+ institutions) and multi-tenant core financial ERP engines with clean Domain-Driven Architecture (DDD), Segregation of Duties (Maker-Checker), and Money Value Objects. Experienced in rigorous quality assurance (1,800+ automated test cases), high-concurrency database design, and server hardening on Linux/Docker/Coolify.",
    skills: {
        languages: ["TypeScript", "JavaScript", "Dart", "PHP 8+", "SQL", "HTML5", "CSS3"],
        frontend: ["React 18/19", "Next.js (App Router)", "Flutter", "Tailwind CSS", "Blade", "Zustand", "Framer Motion", "Shadcn UI"],
        backend: ["Laravel 11/12", "NestJS", "Node.js", "Express", "RESTful APIs", "Microservices", "Role-Based Access Control (RBAC)"],
        databases: ["PostgreSQL 16", "MySQL", "Prisma ORM", "Schema Design", "Composite Indexing", "Database Constraints"],
        devops: ["Docker & Docker Compose", "Coolify", "Vercel", "Git / GitHub", "Linux/VPS Administration", "Nginx (HSTS/CSP)", "S3 / MinIO"],
        architecture: ["Spec-Driven Development (SDD)", "Domain-Driven Design (DDD)", "Segregation of Duties (Maker-Checker)", "Closed-Loop Wallets", "State Machines", "Automated Testing (PHPUnit, Pest, Jest)", "DevSecOps"]
    },
    labels: {
        professionalSummary: "Professional Summary",
        technicalSkills: "Technical Skills",
        professionalExperience: "Professional Experience",
        selectedProjects: "Selected Software Engineering Projects",
        education: "Education",
        certifications: "Certifications & Credentials"
    },
    experience: [
        {
            role: "Full-Stack Software Engineer",
            subtitle: "Lead Systems Architect & Product Lead",
            company: "LP Ma'arif NU Cilacap",
            location: "Cilacap, Central Java, Indonesia",
            period: "2024 – Present",
            responsibilities: [
                "Direct the end-to-end SDLC across institutional software platforms, leading product roadmaps, functional requirements, REST API contracts, and Linux VPS operations.",
                "Architected and deployed SIMMACI, a decoupled fullstack platform (React 19 SPA + Laravel 12 on PostgreSQL 16) administering 270+ educational institutions, 2,000+ staff (PTK), and 17,000+ students with automated batch decree (SK) generation and student lifecycle synchronization.",
                "Architected and engineered the Institutional Core Financial System (Aplikasi Keuangan) using clean Domain-Driven Architecture, Money Value Objects (preventing float rounding errors), and multi-tenant TenantScope.",
                "Engineered critical financial services including JournalPostingService, OpeningBalanceService, FiscalPeriodService, and sequential journal voucher allocation with a strict draft-to-posted state machine and Maker-Checker segregation.",
                "Executed comprehensive automated testing suites ensuring release stability: 1,822 test cases on SIMMACI (PHPUnit/Pest, 100% PASS, 36,983 assertions) and 63 financial unit/feature tests (193 assertions) verifying balance invariants.",
                "Hardened infrastructure and application security: remediated SEC-001–004 vulnerabilities, closed 27 API guards, sanitized Git history (1,945+ commits), and tuned Coolify/Docker memory limits with Nginx HSTS & CSP."
            ]
        }
    ],
    projects: [
        {
            name: "SIMMACI — Enterprise Education Governance Platform",
            techStack: "React 19, TypeScript, Laravel 12, PostgreSQL 16, Tailwind CSS, Vite PWA, PHPUnit/Pest",
            demoUrl: "",
            demoDisplay: "",
            repoUrl: "https://github.com/ayebe51/simmaci",
            repoDisplay: "github.com/ayebe51/simmaci",
            highlights: [
                "Architected a decoupled fullstack platform (React 19 SPA + Laravel 12 REST API on PostgreSQL 16) centralizing administration for 270+ educational institutions, 2,000+ staff, and 17,000+ students.",
                "Implemented automated Word/PDF batch document templating (PHPWord/Docxtemplater), multi-level review queues, S3/MinIO cloud storage isolation, and 1,822 automated PHPUnit/Pest test cases (100% PASS, 36,983 assertions)."
            ]
        },
        {
            name: "Koneksi Santri — Integrated Islamic Boarding School ERP & Mobile App",
            techStack: "Next.js 14, Flutter (Dart), NestJS, TypeScript, PostgreSQL, Prisma ORM, Docker",
            demoUrl: "https://admin.koneksisantri.tech",
            demoDisplay: "admin.koneksisantri.tech",
            repoUrl: "https://github.com/ayebe51/koneksi-santri",
            repoDisplay: "github.com/ayebe51/koneksi-santri",
            highlights: [
                "Engineered a dedicated Flutter mobile application for guardians (Portal Wali Santri) to monitor real-time canteen spending, manage closed-loop daily limits, and receive smart gate pickup alerts.",
                "Architected an integrated web & mobile ERP bridging student administration, QR-code Smart Gate security checkouts, automated tuition billing, and multi-branch general ledger accounting.",
                "Designed a closed-loop digital wallet system with instant balance ledgers, fraud-proof transaction verification, and automated WhatsApp notification dispatch."
            ]
        },
        {
            name: "Enterprise POS & Inventory (Kiro ERP) — Retail ERP & Omnichannel POS",
            techStack: "React 19, NestJS, TypeScript, Prisma ORM, PostgreSQL, Apache ECharts",
            demoUrl: "https://inventory-pos-hazel.vercel.app",
            demoDisplay: "inventory-pos-hazel.vercel.app",
            repoUrl: "https://github.com/ayebe51/inventory-pos",
            repoDisplay: "github.com/ayebe51/inventory-pos",
            highlights: [
                "Implemented a Domain-Driven Design (DDD) retail management system handling multi-warehouse stock replenishment, procurement 3-way matching, and POS cashier operations.",
                "Engineered an append-only inventory movement ledger enforcing Weighted Average Cost (WAC) and FIFO valuation models with sub-second transaction consistency."
            ]
        }
    ],
    education: [
        {
            degree: "Sarjana Hukum (S.H.) — Islamic Economic Law",
            institution: "STAI At-Tahdzib Jombang",
            location: "Jombang, East Java, Indonesia",
            graduationYear: "Graduated 2019"
        }
    ],
    certifications: [
        {
            name: "Spec-Driven Development dengan Kiro",
            issuer: "Dicoding Indonesia (Dicoding Academy)",
            location: "Indonesia",
            issueDate: "April 2026",
            expiryDate: "April 2029",
            credentialId: "EYX4Q03J6PDL",
            credentialUrl: "https://www.dicoding.com/certificates/EYX4Q03J6PDL",
            description: "Certified competence in Spec-Driven Development (SDD) using Kiro: comprehensive technical specification design, contract-first APIs, automated test coverage, and end-to-end requirement traceability."
        }
    ]
};

export const cvDataId = {
    lang: "id",
    personal: {
        name: "Ahmad Ayub Nu'man",
        title: "Full-Stack Software Engineer",
        subtitle: "Arsitektur Sistem End-to-End • Full-Stack Development • DevSecOps",
        location: "Cilacap, Jawa Tengah, Indonesia",
        email: "ayb.n1994@gmail.com",
        phone: "+62 895 3491 77555",
        whatsappUrl: "https://wa.me/62895349177555",
        github: "https://github.com/ayebe51",
        githubDisplay: "github.com/ayebe51",
        linkedin: "https://www.linkedin.com/in/ayub-numan-871406155",
        linkedinDisplay: "linkedin.com/in/ayub-numan-871406155",
        portfolio: "https://portfolio-seven-theta-bovx80a70x.vercel.app/",
        portfolioUrl: "https://portfolio-seven-theta-bovx80a70x.vercel.app/",
        portfolioDisplay: "portfolio-seven-theta-bovx80a70x.vercel.app"
    },
    summary: "Full-Stack Software Engineer dengan rekam jejak kepemilikan penuh siklus rekayasa perangkat lunak (end-to-end SDLC), mulai dari perumusan analisis proses bisnis, arsitektur teknis, rekayasa full-stack, hingga orkestrasi deployment VPS/Docker. Berpengalaman merancang platform tata kelola pendidikan (SIMMACI untuk 270+ madrasah/sekolah) serta mesin inti akuntansi keuangan (Core Financial ERP) berbasis Domain-Driven Design (DDD), Segregation of Duties (Maker-Checker), dan Money Value Object. Terbiasa dengan jaminan mutu otomatis (1.800+ automated test cases) dan penguatan keamanan server (security hardening).",
    skills: {
        languages: ["TypeScript", "JavaScript", "Dart", "PHP 8+", "SQL", "HTML5", "CSS3"],
        frontend: ["React 18/19", "Next.js (App Router)", "Flutter", "Tailwind CSS", "Blade", "Zustand", "Framer Motion", "Shadcn UI"],
        backend: ["Laravel 11/12", "NestJS", "Node.js", "Express", "RESTful APIs", "Microservices", "Role-Based Access Control (RBAC)"],
        databases: ["PostgreSQL 16", "MySQL", "Prisma ORM", "Perancangan Skema", "Composite Indexing", "Database Constraints"],
        devops: ["Docker & Docker Compose", "Coolify", "Vercel", "Git / GitHub", "Administrasi Linux/VPS", "Nginx (HSTS/CSP)", "S3 / MinIO"],
        architecture: ["Spec-Driven Development (SDD)", "Domain-Driven Design (DDD)", "Segregation of Duties (Maker-Checker)", "Closed-Loop Wallets", "State Machines", "Pengujian Otomatis (PHPUnit, Pest, Jest)", "DevSecOps"]
    },
    labels: {
        professionalSummary: "Ringkasan Profesional",
        technicalSkills: "Keahlian Teknis",
        professionalExperience: "Pengalaman Kerja Profesional",
        selectedProjects: "Proyek Rekayasa Perangkat Lunak Unggulan",
        education: "Pendidikan Formal",
        certifications: "Sertifikasi & Kredensial"
    },
    experience: [
        {
            role: "Full-Stack Software Engineer",
            subtitle: "Lead Systems Architect & Product Lead",
            company: "LP Ma'arif NU Cilacap",
            location: "Cilacap, Jawa Tengah, Indonesia",
            period: "2024 – Sekarang",
            responsibilities: [
                "Mengelola siklus penuh pengembangan sistem informasi (PM hingga DevOps), mencakup roadmap produk, perumusan proses bisnis lintas madrasah, kontrak REST API, dan tata kelola VPS Linux.",
                "Merancang dan membangun SIMMACI, platform terpisah (React 19 SPA + Laravel 12 pada PostgreSQL 16) yang mengelola 270+ satuan pendidikan, 2.000+ PTK, dan 17.000+ peserta didik dengan otomasi penerbitan batch SK dan sinkronisasi data siswa.",
                "Merancang dan mengembangkan Sistem Keuangan Lembaga (Aplikasi Keuangan) berbasis Domain-Driven Design (DDD), Money Value Object (mencegah galat floating-point), dan multi-tenant TenantScope.",
                "Mengembangkan layanan backend finansial kritis (JournalPostingService, OpeningBalanceService, FiscalPeriodService), alokator nomor jurnal sekuensial, dan state machine jurnal dengan prinsip Maker-Checker.",
                "Menerapkan pengujian mutu otomatis (automated testing): 1.822 test cases pada SIMMACI (PHPUnit/Pest, 100% PASS, 36.983 assertions) dan 63 accounting tests (193 assertions) yang memverifikasi saldo invarian secara ketat.",
                "Melakukan audit dan hardening keamanan: remediasi celah SEC-001 s.d. SEC-004, penutupan 27 API guards, sanitasi 1.945+ riwayat commit Git, serta optimasi kontainer Docker dan Coolify dengan Nginx HSTS & CSP."
            ]
        }
    ],
    projects: [
        {
            name: "SIMMACI — Platform Tata Kelola Pendidikan Enterprise",
            techStack: "React 19, TypeScript, Laravel 12, PostgreSQL 16, Tailwind CSS, Vite PWA, PHPUnit/Pest",
            demoUrl: "",
            demoDisplay: "",
            repoUrl: "https://github.com/ayebe51/simmaci",
            repoDisplay: "github.com/ayebe51/simmaci",
            highlights: [
                "Merancang platform enterprise terpisah (React 19 SPA + Laravel 12 REST API pada PostgreSQL 16) yang menyatukan administrasi 270+ madrasah dan sekolah di seluruh Kabupaten Cilacap.",
                "Membangun template dokumen batch Word/PDF otomatis (PHPWord/Docxtemplater) dengan penomoran dinamis, verifikasi bertingkat, penyimpanan S3/MinIO, serta 1.822 test cases PHPUnit/Pest (100% PASS)."
            ]
        },
        {
            name: "Koneksi Santri — Sistem Informasi Manajemen Pesantren & Mobile App",
            techStack: "Next.js 14, Flutter (Dart), NestJS, TypeScript, PostgreSQL, Prisma ORM, Docker",
            demoUrl: "https://admin.koneksisantri.tech",
            demoDisplay: "admin.koneksisantri.tech",
            repoUrl: "https://github.com/ayebe51/koneksi-santri",
            repoDisplay: "github.com/ayebe51/koneksi-santri",
            highlights: [
                "Mengembangkan aplikasi mobile Flutter untuk wali santri (Portal Wali Santri) guna memantau saldo dompet digital santri, mengatur limit belanja harian kantin, dan menerima notifikasi izin keluar kampus.",
                "Membangun platform sistem manajemen pesantren yang menghubungkan administrasi santri, izin penjemputan via Smart Gate QR, penagihan SPP digital, dan pembukuan buku besar konsolidasi multi-cabang.",
                "Merancang sistem dompet digital tertutup (closed-loop wallet) dengan pencatatan saldo instan, verifikasi transaksi bebas fraud, dan integrasi notifikasi WhatsApp otomatis."
            ]
        },
        {
            name: "Enterprise POS & Inventory (Kiro ERP) — Retail ERP & POS Omnichannel",
            techStack: "React 19, NestJS, TypeScript, Prisma ORM, PostgreSQL, Apache ECharts",
            demoUrl: "https://inventory-pos-hazel.vercel.app",
            demoDisplay: "inventory-pos-hazel.vercel.app",
            repoUrl: "https://github.com/ayebe51/inventory-pos",
            repoDisplay: "github.com/ayebe51/inventory-pos",
            highlights: [
                "Mengimplementasikan sistem retail Domain-Driven Design (DDD) untuk pengelolaan multi-gudang, pengadaan 3-way matching (PR/PO/GR), dan kasir POS cepat.",
                "Membangun buku besar mutasi stok append-only yang menegakkan kalkulasi valuasi Weighted Average Cost (WAC) dan FIFO dengan konsistensi sub-detik."
            ]
        }
    ],
    education: [
        {
            degree: "Sarjana Hukum (S.H.) — Hukum Ekonomi Syariah",
            institution: "STAI At-Tahdzib Jombang",
            location: "Jombang, Jawa Timur, Indonesia",
            graduationYear: "Lulus 2019"
        }
    ],
    certifications: [
        {
            name: "Spec-Driven Development dengan Kiro",
            issuer: "Dicoding Indonesia (Dicoding Academy)",
            location: "Indonesia",
            issueDate: "April 2026",
            expiryDate: "April 2029",
            credentialId: "EYX4Q03J6PDL",
            credentialUrl: "https://www.dicoding.com/certificates/EYX4Q03J6PDL",
            description: "Kompetensi terverifikasi dalam metodologi Spec-Driven Development (SDD) menggunakan Kiro: perumusan spesifikasi teknis terstruktur, desain berbasis kontrak, validasi pengujian otomatis, dan ketertelusuran kebutuhan sistem."
        }
    ]
};

export const frontendCvDataEn = {
    lang: "en",
    personal: {
        name: "Ahmad Ayub Nu'man",
        title: "Front-End Developer",
        subtitle: "Responsive Web Design (RWD) • Reusable Component Architecture • Web Performance & SEO Optimization",
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
    summary: "Detail-oriented Front-End Developer with 1+ years of production experience translating UI/UX mockups into pixel-perfect, accessible, and high-performance web applications. Highly proficient in HTML5, modern CSS3, SASS/SCSS, JavaScript (ES6+), and TypeScript, with strong expertise in React 18/19, Next.js, and Tailwind CSS. Proven track record architecting modular, reusable component libraries for complex enterprise dashboards and creative interactive web applications. Skilled in Responsive Web Design (RWD), cross-browser compatibility testing, Core Web Vitals optimization, and SEO best practices (semantic HTML, Open Graph, structured JSON-LD). Experienced using Git version control, command line tools, and Agile workflows (JIRA, Slack, Backlog). Driven by craftsmanship, clean code structure, and continuous learning.",
    skills: {
        coreWeb: ["HTML5 (Semantic)", "CSS3", "SASS / SCSS", "LESS", "JavaScript (ES6+)", "TypeScript", "Responsive Web Design (RWD)"],
        frameworks: ["React 18/19", "Next.js (App Router)", "Flutter", "Tailwind CSS", "Framer Motion", "Vite PWA", "Zustand", "Blade"],
        uiArchitecture: ["Reusable Component Architecture", "Design Mockup Implementation (Figma to Code)", "Mobile-First Design", "Design Systems"],
        optimizationAndSeo: ["SEO Principles (Meta Tags, Open Graph, JSON-LD Schema)", "Core Web Vitals", "Website Optimization", "Code Splitting"],
        testingAndTools: ["Cross-Browser Testing & Compatibility", "Responsive UI Testing", "Git & GitHub (1,940+ Commits)", "Command Line (CLI)"],
        workflowAndCollab: ["JIRA", "Slack", "Backlog", "Technical Team Documentation", "RESTful API Integration", "Information Security Basics (OWASP, RBAC)"]
    },
    labels: {
        professionalSummary: "Professional Summary",
        technicalSkills: "Technical Skills",
        professionalExperience: "Professional Experience",
        selectedProjects: "Featured Front-End Projects",
        education: "Education & Qualifications",
        certifications: "Certifications & Credentials"
    },
    experience: [
        {
            role: "Front-End & Web Systems Engineer",
            subtitle: "Lead UI Architect & Web Systems Developer",
            company: "LP Ma'arif NU Cilacap",
            location: "Cilacap, Central Java, Indonesia",
            period: "2024 – Present",
            responsibilities: [
                "Translated high-fidelity UI design mockups into responsive, accessible, and performant web interfaces using React 19, TypeScript, and Tailwind CSS, adhering strictly to mobile-first RWD standards.",
                "Architected modular and reusable UI component hierarchies for enterprise dashboard applications (SIMMACI), ensuring consistent design tokens, styling cohesion, and maintainability across 270+ institutional modules.",
                "Conducted rigorous cross-browser testing across Chrome, Microsoft Edge, Safari, Firefox, and mobile viewports, resolving layout regressions, CSS flexbox/grid edge cases, and rendering inconsistencies.",
                "Optimized website load times and Core Web Vitals through asset minification, modern image formats (WebP/SVG), tree-shaking, and Vite PWA client-side caching.",
                "Maintained and modified existing frontend codebases, refactoring monolithic views into clean, reusable components with clear prop interfaces and TypeScript typings.",
                "Integrated RESTful API endpoints with error boundaries, optimistic UI feedback, and asynchronous state management, delivering smooth data-driven dashboards.",
                "Maintained rigorous version control practices via Git and command line, documenting frontend component APIs, styling conventions, and deployment procedures for the engineering team."
            ]
        }
    ],
    projects: [
        {
            name: "SIMMACI — Enterprise Education Governance Dashboard & Web App",
            techStack: "React 19, TypeScript, Tailwind CSS, Vite PWA, Reusable Component Architecture, REST API",
            demoUrl: "",
            demoDisplay: "",
            repoUrl: "https://github.com/ayebe51/simmaci",
            repoDisplay: "github.com/ayebe51/simmaci",
            highlights: [
                "Engineered a responsive single-page dashboard application (SPA) administering 270+ institutions, 2,000+ staff, and 17,000+ student data records with interactive data tables and batch document generation interfaces.",
                "Developed a reusable component library (custom modals, filterable data tables, form validation controls, and summary metric cards) verified across all modern desktop and mobile browsers."
            ]
        },
        {
            name: "Creative Developer Portfolio (Ayub.dev) — Interactive Web Experience",
            techStack: "React, Tailwind CSS, Framer Motion, Lenis Smooth Scroll, Semantic SEO, Vite",
            demoUrl: "https://portfolio-seven-theta-bovx80a70x.vercel.app/",
            demoDisplay: "portfolio-seven-theta-bovx80a70x.vercel.app",
            repoUrl: "https://github.com/ayebe51/portfolio",
            repoDisplay: "github.com/ayebe51/portfolio",
            highlights: [
                "Designed and engineered a creative, dark-mode portfolio featuring fluid typography, magnetic buttons, micro-animations, and smooth inertia scrolling.",
                "Applied modern SEO best practices including semantic HTML5 structure, descriptive meta tags, Open Graph card protocols, and JSON-LD schema markup."
            ]
        },
        {
            name: "Koneksi Santri — Campus ERP Dashboard & Flutter Mobile Portal",
            techStack: "Next.js 14, Flutter (Dart), TypeScript, Tailwind CSS, REST API Integration",
            demoUrl: "https://admin.koneksisantri.tech",
            demoDisplay: "admin.koneksisantri.tech",
            repoUrl: "https://github.com/ayebe51/koneksi-santri",
            repoDisplay: "github.com/ayebe51/koneksi-santri",
            highlights: [
                "Developed clean, responsive dashboard interfaces and Flutter mobile views for student admissions, tuition billing, and guardian balance monitoring.",
                "Ensured full cross-platform responsiveness with adaptive layouts, accessible touch targets, and instant UI state updates."
            ]
        },
        {
            name: "Enterprise Retail POS & Inventory (Kiro ERP) — High-Speed Cashier UI",
            techStack: "React 19, TypeScript, Tailwind CSS, Apache ECharts, Responsive UI",
            demoUrl: "https://inventory-pos-hazel.vercel.app",
            demoDisplay: "inventory-pos-hazel.vercel.app",
            repoUrl: "https://github.com/ayebe51/inventory-pos",
            repoDisplay: "github.com/ayebe51/inventory-pos",
            highlights: [
                "Created an ergonomic, keyboard-friendly point-of-sale cashier interface and multi-warehouse inventory visualization dashboards with responsive chart breakdowns."
            ]
        }
    ],
    education: [
        {
            degree: "Bachelor of Islamic Economic Law (S.H.)",
            institution: "STAI At-Tahdzib Jombang",
            location: "Jombang, East Java, Indonesia",
            graduationYear: "Graduated 2019",
            notes: "Developed strong analytical thinking, ethical integrity, and attention to detail. Complemented by dedicated independent study and practical software engineering (Autodidact & Continuous Learning) with active production web applications."
        }
    ],
    certifications: [
        {
            name: "Spec-Driven Development with Kiro",
            issuer: "Dicoding Indonesia (Dicoding Academy)",
            location: "Indonesia",
            issueDate: "April 2026",
            expiryDate: "April 2029",
            credentialId: "EYX4Q03J6PDL",
            credentialUrl: "https://www.dicoding.com/certificates/EYX4Q03J6PDL",
            description: "Verified competency in Spec-Driven Development (SDD) using Kiro: structured technical specifications, contract-first design, automated test validation, and bidirectional traceability."
        }
    ]
};

export const frontendCvDataId = {
    lang: "id",
    personal: {
        name: "Ahmad Ayub Nu'man",
        title: "Front-End Developer",
        subtitle: "Desain Web Responsif (RWD) • Arsitektur Komponen Modular • Optimasi Performa Web & SEO",
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
    summary: "Front-End Developer dengan pengalaman 1+ tahun membangun aplikasi web berkinerja tinggi, aksesibel, dan responsif dari mockup UI/UX. Menguasai HTML5 semantik, modern CSS3, SASS/SCSS, JavaScript (ES6+), dan TypeScript dengan keahlian mendalam pada React 18/19, Next.js (App Router), dan Tailwind CSS. Berpengalaman merancang pustaka komponen modular dan desain sistem yang dapat digunakan kembali untuk dashboard enterprise (SIMMACI untuk 270+ lembaga) serta aplikasi interaktif. Terbiasa dengan Responsive Web Design (RWD), pengujian lintas browser, optimasi Core Web Vitals, dan praktik terbaik SEO. Mahir menggunakan Git, command line (CLI), serta integrasi RESTful API yang aman dan tangguh.",
    skills: {
        coreWeb: ["HTML5 (Semantik)", "CSS3", "SASS / SCSS", "LESS", "JavaScript (ES6+)", "TypeScript", "Responsive Web Design (RWD)"],
        frameworks: ["React 18/19", "Next.js (App Router)", "Flutter", "Tailwind CSS", "Framer Motion", "Vite PWA", "Zustand", "Blade"],
        uiArchitecture: ["Arsitektur Komponen Modular", "Implementasi Mockup Desain (Figma ke Kode)", "Desain Mobile-First", "Design Systems"],
        optimizationAndSeo: ["Prinsip SEO (Meta Tags, Open Graph, Skema JSON-LD)", "Core Web Vitals", "Optimasi Web", "Code Splitting"],
        testingAndTools: ["Pengujian Lintas Browser", "Pengujian UI Responsif", "Git & GitHub (1.940+ Commits)", "Command Line (CLI)"],
        workflowAndCollab: ["JIRA", "Slack", "Backlog", "Dokumentasi Teknis Tim", "Integrasi RESTful API", "Dasar Keamanan Web (OWASP, RBAC)"]
    },
    labels: {
        professionalSummary: "Ringkasan Profesional",
        technicalSkills: "Keahlian Teknis",
        professionalExperience: "Pengalaman Kerja Profesional",
        selectedProjects: "Proyek Front-End Pilihan",
        education: "Pendidikan & Kualifikasi",
        certifications: "Sertifikasi & Kredensial"
    },
    experience: [
        {
            role: "Front-End & Web Systems Engineer",
            subtitle: "Lead UI Architect & Web Systems Developer",
            company: "LP Ma'arif NU Cilacap",
            location: "Cilacap, Jawa Tengah, Indonesia",
            period: "2024 – Sekarang",
            responsibilities: [
                "Menerjemahkan mockup desain UI beresolusi tinggi menjadi antarmuka web yang responsif, aksesibel, dan berkinerja tinggi menggunakan React 19, TypeScript, dan Tailwind CSS sesuai standar mobile-first RWD.",
                "Merancang hierarki komponen UI yang modular dan dapat digunakan kembali untuk aplikasi dashboard enterprise (SIMMACI), menjaga konsistensi token desain dan kemudahan pemeliharaan lintas 270+ modul institusi.",
                "Melakukan pengujian lintas browser secara menyeluruh di Chrome, Edge, Safari, Firefox, dan perangkat mobile, menuntaskan regresi layout serta kompatibilitas CSS flexbox/grid.",
                "Mengoptimalkan waktu muat halaman dan Core Web Vitals melalui minifikasi aset, format gambar modern (WebP/SVG), tree-shaking, dan caching PWA di sisi klien.",
                "Memelihara dan memodifikasi basis kode frontend yang ada, merefaktorisasi tampilan monolitik menjadi komponen bersih dengan prop interface dan pengetikan TypeScript yang ketat.",
                "Mengintegrasikan endpoint RESTful API dengan error boundaries, umpan balik UI yang optimistik, dan state management asinkron untuk menyajikan dashboard berbasis data yang mulus.",
                "Menerapkan version control yang disiplin via Git dan command line, mendokumentasikan API komponen frontend, konvensi styling, dan alur rilis aplikasi."
            ]
        }
    ],
    projects: [
        {
            name: "SIMMACI — Dashboard Tata Kelola Pendidikan Enterprise & Web App",
            techStack: "React 19, TypeScript, Tailwind CSS, Vite PWA, Arsitektur Komponen Modular, REST API",
            demoUrl: "",
            demoDisplay: "",
            repoUrl: "https://github.com/ayebe51/simmaci",
            repoDisplay: "github.com/ayebe51/simmaci",
            highlights: [
                "Membangun aplikasi single-page dashboard responsif (SPA) yang mengelola 270+ institusi, 2.000+ staf, dan 17.000+ data siswa dengan tabel data interaktif dan antarmuka penerbitan dokumen batch.",
                "Mengembangkan pustaka komponen reusable (modal kustom, tabel data dengan filter, kontrol validasi form, dan kartu metrik ringkasan) yang teruji di berbagai browser desktop dan mobile."
            ]
        },
        {
            name: "Creative Developer Portfolio (Ayub.dev) — Pengalaman Web Interaktif",
            techStack: "React, Tailwind CSS, Framer Motion, Lenis Smooth Scroll, Semantic SEO, Vite",
            demoUrl: "https://portfolio-seven-theta-bovx80a70x.vercel.app/",
            demoDisplay: "portfolio-seven-theta-bovx80a70x.vercel.app",
            repoUrl: "https://github.com/ayebe51/portfolio",
            repoDisplay: "github.com/ayebe51/portfolio",
            highlights: [
                "Merancang dan membangun portofolio kreatif dark-mode dengan tipografi dinamis, tombol magnetik, micro-animations, dan inersia scrolling yang halus.",
                "Menerapkan standar SEO modern meliputi struktur HTML5 semantik, meta tags deskriptif, protokol Open Graph, dan markup skema JSON-LD."
            ]
        },
        {
            name: "Koneksi Santri — Dashboard ERP Pesantren & Portal Mobile Flutter",
            techStack: "Next.js 14, Flutter (Dart), TypeScript, Tailwind CSS, Integrasi REST API",
            demoUrl: "https://admin.koneksisantri.tech",
            demoDisplay: "admin.koneksisantri.tech",
            repoUrl: "https://github.com/ayebe51/koneksi-santri",
            repoDisplay: "github.com/ayebe51/koneksi-santri",
            highlights: [
                "Mengembangkan antarmuka dashboard responsif dan tampilan mobile Flutter untuk administrasi santri, tagihan SPP, dan pemantauan saldo wali santri.",
                "Memastikan responsivitas lintas platform dengan layout adaptif, target sentuh yang aksesibel, dan pembaruan state UI instan."
            ]
        },
        {
            name: "Enterprise Retail POS & Inventaris (Kiro ERP) — Antarmuka Kasir Berkecepatan Tinggi",
            techStack: "React 19, TypeScript, Tailwind CSS, Apache ECharts, UI Responsif",
            demoUrl: "https://inventory-pos-hazel.vercel.app",
            demoDisplay: "inventory-pos-hazel.vercel.app",
            repoUrl: "https://github.com/ayebe51/inventory-pos",
            repoDisplay: "github.com/ayebe51/inventory-pos",
            highlights: [
                "Menciptakan antarmuka kasir point-of-sale yang ergonomis dan keyboard-friendly serta dashboard visualisasi inventaris multi-gudang dengan grafik analitik responsif."
            ]
        }
    ],
    education: [
        {
            degree: "Sarjana Hukum (S.H.) — Hukum Ekonomi Syariah",
            institution: "STAI At-Tahdzib Jombang",
            location: "Jombang, Jawa Timur, Indonesia",
            graduationYear: "Lulus 2019",
            notes: "Mengembangkan pemikiran analitis yang tajam, integritas etis, dan ketelitian tinggi terhadap detail. Dilengkapi dengan studi mandiri berkesinambungan (Autodidak) serta praktik rekayasa perangkat lunak pada aplikasi web produksi aktif."
        }
    ],
    certifications: [
        {
            name: "Spec-Driven Development dengan Kiro",
            issuer: "Dicoding Indonesia (Dicoding Academy)",
            location: "Indonesia",
            issueDate: "April 2026",
            expiryDate: "April 2029",
            credentialId: "EYX4Q03J6PDL",
            credentialUrl: "https://www.dicoding.com/certificates/EYX4Q03J6PDL",
            description: "Kompetensi terverifikasi dalam metodologi Spec-Driven Development (SDD) menggunakan Kiro: perumusan spesifikasi teknis terstruktur, desain berbasis kontrak, validasi pengujian otomatis, dan ketertelusuran kebutuhan sistem."
        }
    ]
};

export const cvData = cvDataEn;
