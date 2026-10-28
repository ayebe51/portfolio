export const translations = {
    en: {
        nav: {
            brand: "AHMAD AYUB // SYS_ENG.V2",
            status: "AVAILABLE FOR HIGH-STAKES ROLES",
            about: "About",
            architecture: "Architecture",
            services: "Expertise",
            portfolio: "Systems",
            datasheet: "Datasheet",
            contact: "Contact",
            downloadCv: "Download CV (ATS) ▾",
            letsTalk: "Let's Talk",
            terminal: "⌘K / Jump"
        },
        hero: {
            eyebrow: "SPEC_ID: 2026 // FULL-STACK & DISTRIBUTED SYSTEMS ARCHITECT",
            headlineTop: "ARCHITECTING MISSION-CRITICAL SYSTEMS.",
            headlineBottom: "CRAFTING PRECISION USER INTERFACES.",
            desc: "Bridging mission-critical backend reliability (NestJS, PostgreSQL 16, Laravel 12) with high-craft, sub-second web front-ends (React 19, Next.js 14, Flutter). Proven track record across 270+ institutions, 1,800+ test suites, and zero discrepancy financial ledgers.",
            exploreWork: "EXPLORE ARCHITECTURE ➔",
            cmdBtn: "COMMAND PALETTE (⌘K)",
            status: "Available for High-Reliability Systems",
            downloadCv: "Download CV",
            letsTalk: "Let's Talk",
            scrollDown: "Scroll to Inspect"
        },
        telemetry: {
            badge: "LIVE SYSTEM TELEMETRY",
            items: [
                {
                    count: "270+",
                    label: "Institutions Managed",
                    sub: "Centralized SIMMACI Governance"
                },
                {
                    count: "17,000+",
                    label: "Registered Users",
                    sub: "Students, Teachers, & Staff"
                },
                {
                    count: "1,800+",
                    label: "Automated Test Cases",
                    sub: "100% CI/CD Pass (36K+ Assertions)"
                },
                {
                    count: "0 Gap",
                    label: "Ledger Discrepancy",
                    sub: "Multi-Tenant & Closed-Loop Wallets"
                }
            ]
        },
        architecture: {
            badge: "INTERACTIVE SYSTEM BLUEPRINT",
            title: "Mission-Critical System Pipeline",
            subtitle: "Interactive blueprint illustrating edge client rendering, gateway tenant isolation, and distributed persistence integrity.",
            inspectHint: "Click any node to inspect telemetry, patterns, and data consistency models",
            inspectTitle: "Node Telemetry & Specifications",
            nodes: {
                client: {
                    id: "client",
                    step: "NODE 01",
                    tag: "EDGE & CLIENT ENGINE",
                    name: "Client Edge & UI Engine",
                    tech: "React 19 • Next.js 14 • Flutter • Vite PWA",
                    desc: "Sub-100ms optimistic UI updates, client-side batch docx generation (Docxtemplater), biometric mobile wallet for guardians, and offline-capable PWA tables.",
                    metrics: "Sub-100ms UI Latency • Optimistic Feedback",
                    throughput: "17,000+ Active Clients",
                    patterns: "Client-side Batch Templating, Optimistic State, Biometric Auth"
                },
                gateway: {
                    id: "gateway",
                    step: "NODE 02",
                    tag: "DOMAIN CORE & GATEWAY",
                    name: "API Gateway & Microservices",
                    tech: "NestJS • Laravel 12 • Express • Node.js",
                    desc: "Strict tenant isolation per school/branch, JWT + granular RBAC authorization, Maker-Checker transaction verification, and token-bucket rate limiting.",
                    metrics: "Zero Cross-Tenant Leakage • Auditable RBAC",
                    throughput: "Sub-50ms API Routing",
                    patterns: "Multi-Tenant Middleware, Maker-Checker Guards, Rate Limiting"
                },
                ledger: {
                    id: "ledger",
                    step: "NODE 03",
                    tag: "PERSISTENCE & AUDIT LEDGER",
                    name: "Distributed Ledger & Storage",
                    tech: "PostgreSQL 16 • Redis • Prisma • Eloquent",
                    desc: "Row-level locking on wallet/stock mutations, double-entry append-only accounting ledger, Redis caching, and 1,800+ automated test cases in CI/CD.",
                    metrics: "1,800+ Tests Passed • 100% CI/CD Pass Rate",
                    throughput: "ACID Guarantees • 0 Financial Discrepancies",
                    patterns: "Append-only Audit Log, Pessimistic Row Locking, Redis Cache"
                }
            },
            simulator: {
                triggerBtn: "RUN TRANSACTION SIMULATION",
                runningBtn: "TRANSMITTING DATA PACKET...",
                statusIdle: "READY TO SIMULATE",
                statusActive: "SIMULATING PIPELINE...",
                step1Badge: "Node 01 // Payload Built (+12ms)",
                step2Badge: "Node 02 // Tenant & JWT Verified (+24ms)",
                step3Badge: "Node 03 // PostgreSQL Row-Lock Committed (+18ms)",
                stepComplete: "Roundtrip Complete: 54ms // HTTP 200 OK",
                terminalTitle: "LIVE DISTRIBUTED TRANSACTION STREAM // DDL & AUDIT LOG",
                clearBtn: "Reset Simulation"
            }
        },
        portfolio: {
            badge: "PRODUCTION CASE STUDIES",
            title: "Engineered Systems in Production",
            subtitle: "Real-world web architectures handling high-concurrency operations, strict ledger audits, and sub-second user interactions.",
            perspectiveSys: "System Architecture",
            perspectiveUI: "UI Craft & Speed",
            specsBtn: "Inspect Specs & DDL",
            liveDemo: "Live System",
            github: "GitHub Code",
            proprietary: "Private Enterprise Codebase",
            requestWalkthrough: "Request Code Walkthrough",
            filters: {
                all: "All Systems",
                frontend: "Front-End & UI Craft",
                fullstack: "Full-Stack & Distributed",
                mobile: "Mobile Ecosystem"
            }
        },
        modal: {
            challenge: "System Challenge & Bottleneck",
            approach: "Architectural Approach & Engineering",
            results: "Operational Results & Verification",
            tools: "Engine & Technology Stack",
            liveDemoAccess: "Live System Access:",
            mobileTitle: "Flutter Mobile App — Portal Wali Santri",
            screens: "Screens",
            webTitle: "Web Management ERP & Infrastructure",
            defaultGalleryTitle: "System Interface & Telemetry Views",
            viewLive: "Launch Live System",
            sourceCode: "Inspect GitHub Code",
            showcaseSpecs: "Showcase Specs",
            proprietaryCode: "Proprietary Enterprise System",
            requestWalkthrough: "Request Architecture Walkthrough",
            close: "Close Blueprint (ESC)"
        },
        datasheet: {
            badge: "TECHNICAL DATASHEET",
            title: "Technical Stack & System Capabilities",
            subtitle: "Auditable technical proficiencies, architectural patterns, and production battle-tested runtimes.",
            headers: {
                layer: "Domain Layer",
                stack: "Core Engine / Technology",
                patterns: "Architectural Patterns & Reliability",
                status: "Production Verification"
            },
            rows: [
                {
                    layer: "Backend Engines & Microservices",
                    stack: "NestJS, Laravel 12, Node.js, Express, Docker Compose",
                    patterns: "Domain-Driven Design (DDD), Multi-Tenant Isolation, Maker-Checker Verification, REST APIs",
                    status: "Production Standard"
                },
                {
                    layer: "Data Integrity & Ledgers",
                    stack: "PostgreSQL 16, Redis, Prisma ORM, Eloquent",
                    patterns: "ACID Transactions, Row-Level Locking, Append-Only Transaction Ledgers, WAC/FIFO Inventory",
                    status: "Zero Discrepancy Audited"
                },
                {
                    layer: "Front-End SPAs & Mobile",
                    stack: "React 19, Next.js 14, TypeScript, Flutter, Tailwind CSS, Apache ECharts",
                    patterns: "Optimistic UI, Client-side Batch Templating (Docxtemplater), Responsive Data Tables, Web Vitals",
                    status: "Sub-Second UX Certified"
                },
                {
                    layer: "Automated QA & CI/CD",
                    stack: "Pest, PHPUnit, Jest, Supertest, GitHub Actions",
                    patterns: "1,800+ Test Suite, 36,000+ Assertions, Contract Testing, Regression Verification",
                    status: "100% CI Pass Rate"
                }
            ]
        },
        services: {
            title: "Engineering Disciplines",
            subtitle: "Core architectural capabilities delivered across frontend and distributed systems.",
            items: [
                {
                    id: "01",
                    title: "System Architecture & Multi-Tenant Design",
                    description: "Designing isolated multi-tenant web platforms, distributed databases, and high-throughput RESTful services. Specializing in data security, tenant partition schemes, and horizontal scaling.",
                    tags: ["Multi-Tenancy", "PostgreSQL", "NestJS", "Laravel 12", "Docker"]
                },
                {
                    id: "02",
                    title: "High-Craft Front-End Engineering",
                    description: "Crafting sub-second, accessible, and reactive single-page applications using React 19, Next.js 14, and TypeScript. Specializing in optimistic state updates, responsive data tables, and client-side document compilation.",
                    tags: ["React 19", "Next.js 14", "TypeScript", "Tailwind CSS", "Optimistic UI"]
                },
                {
                    id: "03",
                    title: "Financial Ledgers & Inventory Accounting",
                    description: "Building fraud-proof double-entry general ledgers, append-only inventory stores (FIFO/WAC), closed-loop digital wallets, and automated 3-way matching procurement engines.",
                    tags: ["Double-Entry", "Append-Only", "Closed-Loop Wallet", "Row-Locking"]
                },
                {
                    id: "04",
                    title: "Real-Time Telemetry & Data Visualization",
                    description: "Engineering data-dense analytics dashboards using Apache ECharts with live operational metrics, cashier shift balancing, and executive multi-branch reporting.",
                    tags: ["Apache ECharts", "Real-Time Dashboards", "Operational Analytics"]
                },
                {
                    id: "05",
                    title: "Automated Testing & CI/CD Pipeline Engineering",
                    description: "Implementing comprehensive automated test suites (Pest, PHPUnit, Jest) reaching 1,800+ test cases and 36,000+ assertions with automated GitHub Actions CI/CD workflows.",
                    tags: ["Pest", "PHPUnit", "GitHub Actions", "1,800+ Tests", "CI/CD"]
                },
                {
                    id: "06",
                    title: "Cross-Platform Mobile Ecosystems",
                    description: "Developing cross-platform mobile apps using Flutter paired with Next.js web superadmins and NestJS backends, featuring QR smart-gate security and closed-loop wallets.",
                    tags: ["Flutter", "Dart", "Smart Gate QR", "Mobile Wallet", "Cross-Platform"]
                }
            ]
        },
        testimonials: {
            title: "Track Record & Verification",
            status: "Proven Production Metrics",
            stats: [
                {
                    number: "3",
                    label: "Enterprise Platforms",
                    description: "Architected SIMMACI for 270+ educational institutions, Koneksi Santri pesantren ERP & Flutter mobile app, and Kiro omnichannel retail POS.",
                    tags: ["SIMMACI (270+ Org)", "Koneksi Santri", "Kiro Retail POS"]
                },
                {
                    number: "Multi-Entity",
                    label: "Domain Architecture",
                    description: "Implemented double-entry accounting ledgers, Maker-Checker transaction verification, Money Value Objects, and append-only audit stores with strict RBAC.",
                    tags: ["Domain-Driven Design", "Maker-Checker", "Money Objects", "RBAC"]
                },
                {
                    number: "Full-Stack",
                    label: "Production Delivery",
                    description: "End-to-end engineering across React 19, Next.js, Flutter, Laravel 12, NestJS, TypeScript, and PostgreSQL 16. Delivered scalable RESTful APIs, Docker containers, and 1,800+ automated test cases with zero financial discrepancies.",
                    tags: ["React 19", "Next.js", "Flutter", "Laravel 12", "NestJS", "TypeScript", "PostgreSQL 16", "Docker", "PHPUnit/Pest"]
                }
            ]
        },
        contact: {
            badge: "COMMUNICATION DISPATCH",
            title: "Direct Engineering Dispatch",
            subtitle: "Available for Senior Front-End, Full-Stack, and System Engineering roles. Reach out directly via WhatsApp, email, or send an inquiry below.",
            whatsappLabel: "WhatsApp (Instant Chat)",
            emailLabel: "Direct Email Address",
            copyEmail: "Copy Email: ayb.n1994@gmail.com",
            copied: "COPIED TO CLIPBOARD ✓",
            statusBadge: "Available Immediately for High-Stakes Roles",
            location: "Cilacap, Central Java (WIB / UTC+7)",
            nameLabel: "Your Name / Organization",
            namePlaceholder: "e.g. Engineering Lead / Recruiter",
            emailInputLabel: "Work Email",
            emailPlaceholder: "lead@company.com",
            messageLabel: "Project Scope / Role Opportunity",
            messagePlaceholder: "Discussing high-performance web systems or frontend architecture...",
            sendBtn: "DISPATCH INQUIRY ➔",
            sendingBtn: "DISPATCHING...",
            successMsg: "✓ Inquiry dispatched successfully! I will follow up shortly.",
            errorMsg: "✗ Failed to open mail client. Please email directly to ayb.n1994@gmail.com"
        },
        footer: {
            tagline: "High-integrity distributed system engineering paired with sub-second front-end craft.",
            downloadCv: "Download ATS CV (PDF / DOCX)",
            rights: "All rights reserved.",
            builtWith: "Engineered with React 19, Vite, Tailwind CSS & Lenis",
            timeZone: "WIB // UTC+7"
        },
        cvModal: {
            badge: "ATS-FRIENDLY CURRICULUM VITAE",
            title: "Download Engineering CV",
            subtitle: "Formatted for Applicant Tracking Systems (ATS) and technical engineering directors.",
            selectRoleLabel: "Target Engineering Discipline:",
            roleFrontend: "Front-End Developer / UI Engineer",
            roleFrontendDesc: "React 19 • Next.js 14 • TypeScript • Sub-Second UI Architecture",
            roleFullstack: "Full-Stack & Distributed System Engineer",
            roleFullstackDesc: "React 19 • Laravel 12 • NestJS • PostgreSQL 16 • 1,800+ Tests",
            tabEn: "English (EN)",
            tabId: "Bahasa Indonesia (ID)",
            pdfTitle: "Download Vector PDF",
            pdfDesc: "Submission-ready vector PDF • 100% ATS searchable text",
            docxTitle: "Download Editable Word (DOCX)",
            docxDesc: "Standard Microsoft Word format for recruiter agency ingestion",
            recommended: "Recommended",
            editable: "Editable",
            verified: "Verified against production repositories",
            openPdf: "Inspect PDF in Browser",
            close: "Close Dialog (ESC)"
        },
        commandPalette: {
            placeholder: "Type a command or jump to system (projects, architecture, CV, contact)...",
            projects: "Production Systems",
            navigation: "Architecture & Jump",
            actions: "Direct Actions",
            closeHelp: "ESC to close • ↑↓ to navigate • ENTER to select"
        }
    },
    id: {
        nav: {
            brand: "AHMAD AYUB // SYS_ENG.V2",
            status: "TERSEDIA UNTUK SISTEM KRITIS",
            about: "Tentang",
            architecture: "Arsitektur",
            services: "Keahlian",
            portfolio: "Sistem",
            datasheet: "Datasheet",
            contact: "Kontak",
            downloadCv: "Unduh CV (ATS) ▾",
            letsTalk: "Diskusi",
            terminal: "⌘K / Pintas"
        },
        hero: {
            eyebrow: "SPEC_ID: 2026 // FULL-STACK & DISTRIBUTED SYSTEMS ARCHITECT",
            headlineTop: "ARCHITECTING MISSION-CRITICAL SYSTEMS.",
            headlineBottom: "CRAFTING PRECISION USER INTERFACES.",
            desc: "Memadukan keandalan arsitektur backend terdistribusi (NestJS, PostgreSQL 16, Laravel 12) dengan craft antarmuka web sub-detik berkinerja tinggi (React 19, Next.js 14, Flutter). Rekam jejak nyata mengelola 270+ lembaga, 1.800+ automated test suite, dan buku besar keuangan tanpa selisih.",
            exploreWork: "JELAJAHI ARSITEKTUR ➔",
            cmdBtn: "COMMAND PALETTE (⌘K)",
            status: "Terbuka untuk Rekayasa Sistem Berkeandalan Tinggi",
            downloadCv: "Unduh CV",
            letsTalk: "Hubungi Saya",
            scrollDown: "Gulir untuk Inspeksi"
        },
        telemetry: {
            badge: "TELEMETRI SISTEM LIVE",
            items: [
                {
                    count: "270+",
                    label: "Lembaga Dikelola",
                    sub: "Tata Kelola Terpusat SIMMACI"
                },
                {
                    count: "17,000+",
                    label: "Pengguna Terdaftar",
                    sub: "Siswa, Guru & Tenaga Kependidikan"
                },
                {
                    count: "1,800+",
                    label: "Automated Test Suite",
                    sub: "100% CI/CD Pass (36K+ Assertions)"
                },
                {
                    count: "0 Selisih",
                    label: "Integritas Ledger",
                    sub: "Multi-Tenant & Dompet Digital Tertutup"
                }
            ]
        },
        architecture: {
            badge: "BLUEPRINT ARSITEKTUR INTERAKTIF",
            title: "Pipeline Sistem Berkeandalan Tinggi",
            subtitle: "Diagram arsitektural interaktif yang mengilustrasikan rendering edge klien, isolasi tenant gateway, dan integritas ledger terdistribusi.",
            inspectHint: "Klik pada masing-masing node untuk memeriksa telemetri, pola desain, dan konsistensi data",
            inspectTitle: "Telemetri & Spesifikasi Node",
            nodes: {
                client: {
                    id: "client",
                    step: "NODE 01",
                    tag: "EDGE & CLIENT ENGINE",
                    name: "Client Edge & UI Engine",
                    tech: "React 19 • Next.js 14 • Flutter • Vite PWA",
                    desc: "Pembaruan UI optimistik sub-100ms, generator batch dokumen docx di sisi klien (Docxtemplater), dompet digital mobile wali santri, dan tabel PWA siap offline.",
                    metrics: "Latensi UI Sub-100ms • Umpan Balik Optimistik",
                    throughput: "17.000+ Klien Aktif",
                    patterns: "Client-side Batch Templating, Optimistic State, Biometric Auth"
                },
                gateway: {
                    id: "gateway",
                    step: "NODE 02",
                    tag: "DOMAIN CORE & GATEWAY",
                    name: "API Gateway & Microservices",
                    tech: "NestJS • Laravel 12 • Express • Node.js",
                    desc: "Isolasi tenant ketat per madrasah/cabang, autentikasi JWT + otorisasi RBAC berbutir halus, verifikasi transaksi Maker-Checker, dan rate limiting token-bucket.",
                    metrics: "Nol Kebocoran Lintas Tenant • RBAC Tervalidasi",
                    throughput: "Routing API Sub-50ms",
                    patterns: "Multi-Tenant Middleware, Maker-Checker Guards, Rate Limiting"
                },
                ledger: {
                    id: "ledger",
                    step: "NODE 03",
                    tag: "PERSISTENCE & AUDIT LEDGER",
                    name: "Distributed Ledger & Storage",
                    tech: "PostgreSQL 16 • Redis • Prisma • Eloquent",
                    desc: "Pessimistic row-locking untuk transaksi saldo dompet dan stok, buku besar akuntansi append-only double-entry, caching Redis, dan 1.800+ test case otomatis di CI/CD.",
                    metrics: "1.800+ Automated Tests • 100% CI/CD Pass Rate",
                    throughput: "Jaminan Transaksi ACID • 0 Selisih Finansial",
                    patterns: "Append-only Audit Log, Pessimistic Row Locking, Redis Cache"
                }
            },
            simulator: {
                triggerBtn: "JALANKAN SIMULASI TRANSAKSI",
                runningBtn: "TRANSMISI PAKET DATA...",
                statusIdle: "SIAP SIMULASI",
                statusActive: "MENYIMULASIKAN PIPELINE...",
                step1Badge: "Node 01 // Payload Selesai (+12ms)",
                step2Badge: "Node 02 // Tenant & JWT Tervalidasi (+24ms)",
                step3Badge: "Node 03 // PostgreSQL Row-Lock Selesai (+18ms)",
                stepComplete: "Roundtrip Selesai: 54ms // HTTP 200 OK",
                terminalTitle: "STREAM TRANSAKSI TERDISTRIBUSI REAL-TIME // DDL & AUDIT LOG",
                clearBtn: "Reset Simulasi"
            }
        },
        portfolio: {
            badge: "STUDI KASUS PRODUKSI",
            title: "Sistem Produksi yang Dibangun",
            subtitle: "Arsitektur web dunia nyata yang menangani operasi konkuren tinggi, audit ledger ketat, dan interaksi pengguna sub-detik.",
            perspectiveSys: "Arsitektur Sistem",
            perspectiveUI: "Craft Front-End & Kecepatan",
            specsBtn: "Bedah Spesifikasi & DDL",
            liveDemo: "Sistem Live",
            github: "Kode GitHub",
            proprietary: "Kode Enterprise Privat",
            requestWalkthrough: "Minta Walkthrough Arsitektur",
            filters: {
                all: "Semua Sistem",
                frontend: "Front-End & UI Craft",
                fullstack: "Full-Stack & Terdistribusi",
                mobile: "Ekosistem Mobile"
            }
        },
        modal: {
            challenge: "Tantangan Sistem & Bottleneck",
            approach: "Pendekatan Arsitektur & Rekayasa",
            results: "Hasil Operasional & Verifikasi",
            tools: "Engine & Stack Teknologi",
            liveDemoAccess: "Akses Demo Sistem:",
            mobileTitle: "Aplikasi Mobile Flutter — Portal Wali Santri",
            screens: "Layar",
            webTitle: "Web Superadmin ERP & Infrastruktur",
            defaultGalleryTitle: "Antarmuka Sistem & Tampilan Telemetri",
            viewLive: "Buka Sistem Live",
            sourceCode: "Lihat Kode GitHub",
            showcaseSpecs: "Spesifikasi Sistem",
            proprietaryCode: "Sistem Enterprise Terproteksi",
            requestWalkthrough: "Minta Walkthrough Kode",
            close: "Tutup Dokumen (ESC)"
        },
        datasheet: {
            badge: "DATASHEET REKAYASA",
            title: "Stack Teknologi & Kapabilitas Sistem",
            subtitle: "Kemampuan teknis teruji, pola arsitektur terpilih, dan runtime produksi berstandar tinggi.",
            headers: {
                layer: "Lapisan Domain",
                stack: "Core Engine / Teknologi",
                patterns: "Pola Desain & Keandalan",
                status: "Status Verifikasi"
            },
            rows: [
                {
                    layer: "Backend Engines & Microservices",
                    stack: "NestJS, Laravel 12, Node.js, Express, Docker Compose",
                    patterns: "Domain-Driven Design (DDD), Isolasi Multi-Tenant, Verifikasi Maker-Checker, REST APIs",
                    status: "Standar Produksi"
                },
                {
                    layer: "Integritas Data & Ledger",
                    stack: "PostgreSQL 16, Redis, Prisma ORM, Eloquent",
                    patterns: "Transaksi ACID, Row-Level Locking, Append-Only Transaction Ledgers, Valuasi WAC/FIFO",
                    status: "Diaudit 0 Selisih"
                },
                {
                    layer: "Front-End SPAs & Mobile",
                    stack: "React 19, Next.js 14, TypeScript, Flutter, Tailwind CSS, Apache ECharts",
                    patterns: "UI Optimistik, Client-side Batch Templating (Docxtemplater), Tabel Responsif, Web Vitals",
                    status: "Tersertifikasi Sub-Detik"
                },
                {
                    layer: "Automated QA & CI/CD",
                    stack: "Pest, PHPUnit, Jest, Supertest, GitHub Actions",
                    patterns: "1.800+ Test Suite, 36.000+ Assertions, Pengujian Kontrak, Verifikasi Regresi",
                    status: "100% CI Pass Rate"
                }
            ]
        },
        services: {
            title: "Disiplin Rekayasa",
            subtitle: "Kapabilitas arsitektur yang dihadirkan di sisi antarmuka maupun sistem terdistribusi.",
            items: [
                {
                    id: "01",
                    title: "Arsitektur Sistem & Desain Multi-Tenant",
                    description: "Merancang platform web multi-tenant terisolasi, basis data terdistribusi, dan layanan RESTful bertrafik tinggi dengan partisi data yang aman.",
                    tags: ["Multi-Tenancy", "PostgreSQL", "NestJS", "Laravel 12", "Docker"]
                },
                {
                    id: "02",
                    title: "Front-End Engineering Berstandar Tinggi",
                    description: "Membangun SPA yang responsif, aksesibel, dan sub-detik menggunakan React 19, Next.js 14, dan TypeScript dengan pembaruan state optimistik dan generator dokumen batch di klien.",
                    tags: ["React 19", "Next.js 14", "TypeScript", "Tailwind CSS", "Optimistic UI"]
                },
                {
                    id: "03",
                    title: "Buku Besar Keuangan & Akuntansi Inventaris",
                    description: "Membangun buku besar akuntansi double-entry bebas kebocoran, mutasi stok append-only (FIFO/WAC), dompet digital tertutup, dan pengadaan 3-way matching otomatis.",
                    tags: ["Double-Entry", "Append-Only", "Closed-Loop Wallet", "Row-Locking"]
                },
                {
                    id: "04",
                    title: "Telemetri Real-Time & Visualisasi Data",
                    description: "Mengembangkan dashboard analitik kaya data menggunakan Apache ECharts dengan pemantauan metrik operasional live, kontrol shift kasir, dan laporan konsolidasi multi-cabang.",
                    tags: ["Apache ECharts", "Real-Time Dashboards", "Operational Analytics"]
                },
                {
                    id: "05",
                    title: "Automated Testing & Rekayasa Pipeline CI/CD",
                    description: "Mengimplementasikan suite pengujian otomatis komprehensif (Pest, PHPUnit, Jest) mencapai 1.800+ test case dan 36.000+ assertions dengan alur kerja GitHub Actions.",
                    tags: ["Pest", "PHPUnit", "GitHub Actions", "1.800+ Tests", "CI/CD"]
                },
                {
                    id: "06",
                    title: "Ekosistem Mobile Lintas Platform",
                    description: "Mengembangkan aplikasi mobile Flutter yang terhubung dengan web portal Next.js dan backend NestJS, dilengkapi integrasi Smart Gate QR dan dompet digital tertutup.",
                    tags: ["Flutter", "Dart", "Smart Gate QR", "Mobile Wallet", "Cross-Platform"]
                }
            ]
        },
        testimonials: {
            title: "Rekam Jejak & Verifikasi",
            status: "Metrik Produksi Nyata",
            stats: [
                {
                    number: "3",
                    label: "Platform Enterprise",
                    description: "Membangun SIMMACI untuk 270+ lembaga pendidikan, ERP pesantren Koneksi Santri & aplikasi Flutter, dan kasir omnichannel ritel Kiro ERP.",
                    tags: ["SIMMACI (270+ Org)", "Koneksi Santri", "Kiro Retail POS"]
                },
                {
                    number: "Multi-Entity",
                    label: "Arsitektur Domain",
                    description: "Menerapkan buku besar akuntansi double-entry, verifikasi Maker-Checker, Value Objects uang, dan audit store append-only dengan RBAC ketat.",
                    tags: ["Domain-Driven Design", "Maker-Checker", "Money Objects", "RBAC"]
                },
                {
                    number: "Full-Stack",
                    label: "Pengiriman Produksi",
                    description: "Rekayasa end-to-end melintasi React 19, Next.js, Flutter, Laravel 12, NestJS, TypeScript, dan PostgreSQL 16. Menghasilkan RESTful API terukur, kontainer Docker, dan 1.800+ test cases otomatis dengan 0 selisih finansial.",
                    tags: ["React 19", "Next.js", "Flutter", "Laravel 12", "NestJS", "TypeScript", "PostgreSQL 16", "Docker", "PHPUnit/Pest"]
                }
            ]
        },
        contact: {
            badge: "KOMUNIKASI LANGSUNG",
            title: "Saluran Kontak Rekayasa",
            subtitle: "Terbuka untuk posisi Senior Front-End, Full-Stack, dan System Engineering. Hubungi langsung melalui WhatsApp, email, atau kirimkan formulir di bawah.",
            whatsappLabel: "WhatsApp (Chat Langsung)",
            emailLabel: "Alamat Email Resmi",
            copyEmail: "Salin Email: ayb.n1994@gmail.com",
            copied: "TERSALIN KE CLIPBOARD ✓",
            statusBadge: "Tersedia Segera untuk Sistem Kritis",
            location: "Cilacap, Jawa Tengah (WIB / UTC+7)",
            nameLabel: "Nama Anda / Organisasi",
            namePlaceholder: "cth. Engineering Lead / Recruiter",
            emailInputLabel: "Email Kerja",
            emailPlaceholder: "lead@perusahaan.com",
            messageLabel: "Kebutuhan Sistem / Peluang Posisi",
            messagePlaceholder: "Mendiskusikan sistem web performa tinggi atau arsitektur frontend...",
            sendBtn: "KIRIM PESAN ➔",
            sendingBtn: "MENGIRIMKAN...",
            successMsg: "✓ Pesan berhasil terkirim! Saya akan segera merespons.",
            errorMsg: "✗ Gagal membuka aplikasi email. Silakan kirim email langsung ke ayb.n1994@gmail.com"
        },
        footer: {
            tagline: "Rekayasa sistem terdistribusi berkeandalan tinggi dipadukan dengan craft antarmuka web sub-detik.",
            downloadCv: "Unduh CV ATS (PDF / DOCX)",
            rights: "Hak cipta dilindungi undang-undang.",
            builtWith: "Dibangun dengan React 19, Vite, Tailwind CSS & Lenis",
            timeZone: "WIB // UTC+7"
        },
        cvModal: {
            badge: "CURRICULUM VITAE SIAP ATS",
            title: "Unduh CV Rekayasa Perangkat Lunak",
            subtitle: "Diformat khusus untuk Applicant Tracking Systems (ATS) dan technical hiring director.",
            selectRoleLabel: "Pilih Disiplin Rekayasa Target:",
            roleFrontend: "Front-End Developer / UI Engineer",
            roleFrontendDesc: "React 19 • Next.js 14 • TypeScript • Arsitektur UI Sub-Detik",
            roleFullstack: "Full-Stack & Distributed System Engineer",
            roleFullstackDesc: "React 19 • Laravel 12 • NestJS • PostgreSQL 16 • 1.800+ Tests",
            tabEn: "English (EN)",
            tabId: "Bahasa Indonesia (ID)",
            pdfTitle: "Unduh Format PDF Vektor",
            pdfDesc: "PDF vektor siap kirim • 100% teks terbaca oleh parser ATS",
            docxTitle: "Unduh Format Word (DOCX)",
            docxDesc: "Format standar Microsoft Word untuk pemrosesan agensi rekrutmen",
            recommended: "Rekomendasi",
            editable: "Dapat Diedit",
            verified: "Terverifikasi dengan repositori produksi",
            openPdf: "Buka PDF di Tab Baru",
            close: "Tutup Dialog (ESC)"
        },
        commandPalette: {
            placeholder: "Ketik perintah atau loncat ke sistem (proyek, arsitektur, CV, kontak)...",
            projects: "Sistem Produksi",
            navigation: "Arsitektur & Navigasi",
            actions: "Aksi Langsung",
            closeHelp: "ESC untuk tutup • ↑↓ navigasi • ENTER untuk memilih"
        }
    }
};
