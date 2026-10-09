export const projects = [
    {
        id: 1,
        title: "SIM Ma'arif Cilacap (SIMMACI)",
        category: "Enterprise Education Governance",
        image: "/images/projects/simmaci/dashboard.webp",
        shortDesc: "Integrated administrative and civil service decree governance platform for 270+ educational institutions.",
        description: "SIMMACI is a centralized enterprise platform engineered for LP Ma'arif NU Cilacap, administering 270+ educational institutions, 2,000+ educators & staff (PTK), and 17,000+ active students. Streamlines institutional workflows through batch automated SK (Decree) generation, multi-tier approval verification queues, student data lifecycle synchronization, digital service archives, and real-time executive analytics.",
        challenge: "Centralizing disparate legacy records from over 270 institutions across multiple districts while establishing automated, verifiable civil decree (SK) generation and review workflows.",
        approach: "Architected a decoupled fullstack solution utilizing a high-performance React 19 SPA (Vite PWA) paired with a robust Laravel 12 REST API on PostgreSQL 16, automated Word/PDF batch document templating (PHPWord/Docxtemplater), S3/MinIO cloud storage isolation, and comprehensive test coverage (1,800+ PHPUnit/Pest test cases).",
        tools: ["React 19", "TypeScript", "Laravel 12", "PostgreSQL 16", "Tailwind CSS", "Vite PWA", "PHPUnit / Pest"],
        results: "Decreased manual decree issuance overhead by over 70%, eliminated record duplication across 270+ institutions, and achieved 100% test pass rate with 36,000+ assertions.",
        demoUrl: "https://sim-maarif-fullstack.vercel.app/dashboard",
        demoNote: "Public live demo available at sim-maarif-fullstack.vercel.app displaying full executive command center dashboards and decree services.",
        repoUrl: "https://github.com/ayebe51/simmaci",
        videoUrl: "",
        gallery: [
            {
                src: "/images/projects/simmaci/key-feature.webp",
                caption: "Batch Decree Generator — automated template configuration, custom numbering formats, and bulk issuance workflow.",
                alt: "SIMMACI Batch Decree Generator and Approval Workflow"
            },
            {
                src: "/images/projects/simmaci/supporting-view.webp",
                caption: "Centralized Decree Services & Archive Portal — multi-channel application forms, revision requests, and digital document repositories.",
                alt: "SIMMACI Centralized Decree Services and Archive Portal"
            }
        ]
    },
    {
        id: 2,
        title: "Koneksi Santri — Sistem Informasi Manajemen Pesantren",
        category: "Islamic Boarding School ERP",
        image: "/images/projects/koneksi-santri/dashboard.webp",
        shortDesc: "Integrated ERP platform for Pesantren featuring closed-loop student wallet, financial governance, smart gate security, and general ledger.",
        description: "A comprehensive enterprise management platform engineered for Islamic boarding schools (Pesantren). Features a closed-loop digital wallet system for cashless on-campus merchant & canteen spending with parent-controlled daily spending limits, biometric/QR smart gate security checkpoints for guardian pickup authorization, digital tuition billing, and consolidated double-entry general ledger accounting across multiple foundation branches.",
        challenge: "Eliminating unauthorized cash leakage and enforcing student safety during campus leave while managing complex campus finances across multi-entity foundations with strict data consistency.",
        approach: "Architected a distributed microservices ecosystem using Next.js 14 and NestJS on PostgreSQL with Prisma ORM, integrating RFID/QR merchant checkout terminals, automated WhatsApp webhook notification dispatches, and immutable audit ledgers.",
        tools: ["Next.js 14", "NestJS", "TypeScript", "PostgreSQL", "Prisma", "Closed-Loop Wallet", "Docker", "Tailwind CSS"],
        results: "Established a 100% cashless campus ecosystem with fraud-proof closed-loop wallet controls, auditable guardian pickup verification, and zero financial ledger discrepancies.",
        demoUrl: "https://admin.koneksisantri.tech",
        demoNote: "Showroom demo running with automated daily resets at 02:00 WIB. Interactive role selectors (Admin Pesantren, Bendahara, Ustadz, Wali Santri, Kasir) available directly on the login portal. Full credential access available upon request.",
        repoUrl: "https://github.com/ayebe51/koneksi-santri",
        videoUrl: "",
        gallery: [
            {
                src: "/images/projects/koneksi-santri/key-feature.webp",
                caption: "Smart Gate & Student Pickup Dispatch — QR-code authorized guardian gate permits with security checkpoint verification and real-time gate logs.",
                alt: "Koneksi Santri Smart Gate QR Security and Student Pickup Dispatch"
            },
            {
                src: "/images/projects/koneksi-santri/supporting-view.webp",
                caption: "Enterprise Multi-Entity General Ledger — double-entry accounting with consolidated trial balance (Neraca Saldo) and chart of accounts.",
                alt: "Koneksi Santri Multi-Entity General Ledger and Consolidated Trial Balance"
            }
        ]
    },
    {
        id: 3,
        title: "Enterprise Inventory + POS (Kiro ERP)",
        category: "Retail ERP & Point of Sale",
        image: "/images/projects/pos-inventory/dashboard.webp",
        shortDesc: "Omnichannel inventory, retail POS, and double-entry accounting platform for retail and wholesale distribution.",
        description: "A comprehensive enterprise web management platform built for Indonesian retail and wholesale distribution. Features multi-warehouse inventory tracking with an append-only transaction ledger (WAC/FIFO), fast cashier POS with shift balancing and cash drawer control, B2B sales orders, automated 3-way matching procurement (PR/PO/Goods Receipt), and PSAK-compliant financial accounting with live operational analytics.",
        challenge: "Maintaining strict inventory ledger integrity and sub-second cashier checkout performance under concurrent multi-warehouse and multi-branch retail operations.",
        approach: "Architected a domain-driven design (DDD) system with NestJS and Prisma on PostgreSQL, utilizing Redis caching, optimistic concurrency control, and Apache ECharts analytics dashboards.",
        tools: ["React 19", "NestJS", "TypeScript", "Prisma", "PostgreSQL", "Apache ECharts", "Ant Design"],
        results: "Delivered an auditable retail ecosystem supporting multi-warehouse replenishment, real-time inventory valuations, and zero discrepancy cashier reconciliations.",
        demoUrl: "https://inventory-pos-hazel.vercel.app",
        demoNote: "Production-ready enterprise retail system. Access to multi-branch operational accounts available upon inquiry for technical recruiter review.",
        repoUrl: "https://github.com/ayebe51/inventory-pos",
        videoUrl: "",
        gallery: []
    }
];

// Archived / Supplementary Projects
export const archivedProjects = [
    {
        id: 4,
        title: "Zenith - AI-Powered Productivity SaaS",
        category: "SaaS Application",
        image: "/assets/zenith-dashboard.png",
        shortDesc: "Modern productivity SaaS with Kanban board, Deep Work Timer, and analytics.",
        description: "Zenith is a high-performance SaaS application designed for deep work and project management. Combines a robust Kanban system with integrated focus tools, analytics dashboard, and subscription-based monetization.",
        tools: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Shadcn UI", "Framer Motion", "Zustand"],
        demoUrl: "",
        repoUrl: "https://github.com/ayebe51/zenith",
        gallery: []
    },
    {
        id: 5,
        title: "Koperasi AIS",
        category: "Cooperative Management",
        image: "/assets/koperasi-ais.png",
        shortDesc: "Comprehensive cooperative management system with core business, accounting, and store features.",
        description: "A full-featured Management System built for cooperatives featuring Role-Based Access Control, robust accounting ledgers, savings/loans processing, and an integrated Day-to-Day Store (Unit Toko) module.",
        tools: ["React", "Laravel 12", "PostgreSQL", "Tailwind CSS"],
        demoUrl: "",
        repoUrl: "https://github.com/ayebe51/koperasi-ais",
        gallery: []
    }
];
