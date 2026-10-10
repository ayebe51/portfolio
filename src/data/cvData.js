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
        architecture: ["Domain-Driven Design (DDD)", "Segregation of Duties (Maker-Checker)", "Closed-Loop Wallets", "State Machines", "Automated Testing (PHPUnit, Pest, Jest)", "DevSecOps"]
    },
    labels: {
        professionalSummary: "Professional Summary",
        technicalSkills: "Technical Skills",
        professionalExperience: "Professional Experience",
        selectedProjects: "Selected Software Engineering Projects",
        education: "Education"
    },
    experience: [
        {
            role: "Staff IT & Sistem Informasi",
            subtitle: "Lead Full-Stack Systems Engineer & Product Owner",
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
        architecture: ["Domain-Driven Design (DDD)", "Segregation of Duties (Maker-Checker)", "Closed-Loop Wallets", "State Machines", "Pengujian Otomatis (PHPUnit, Pest, Jest)", "DevSecOps"]
    },
    labels: {
        professionalSummary: "Ringkasan Profesional",
        technicalSkills: "Keahlian Teknis",
        professionalExperience: "Pengalaman Kerja Profesional",
        selectedProjects: "Proyek Rekayasa Perangkat Lunak Unggulan",
        education: "Pendidikan Formal"
    },
    experience: [
        {
            role: "Staff IT & Sistem Informasi",
            subtitle: "Lead Full-Stack Systems Engineer & Product Owner",
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
    ]
};

export const cvData = cvDataEn;
