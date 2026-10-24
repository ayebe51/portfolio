// Bilingual Projects Data for Ahmad Ayub Nu'man Portfolio

export const projectsEn = [
    {
        id: 1,
        title: "Enterprise Inventory + POS (Kiro ERP) — Retail Management",
        category: "React 19 & Data Visualization",
        filterCategories: ["all", "frontend", "fullstack"],
        image: "/images/projects/pos-inventory/dashboard.webp",
        shortDesc: "Omnichannel inventory, retail POS, and double-entry accounting platform for retail and wholesale distribution.",
        description: "A comprehensive enterprise web management platform built for Indonesian retail and wholesale distribution. Features multi-warehouse inventory tracking with an append-only transaction ledger (WAC/FIFO), fast cashier POS with shift balancing and cash drawer control, B2B sales orders, automated 3-way matching procurement (PR/PO/Goods Receipt), and PSAK-compliant financial accounting with live operational analytics.",
        challenge: "Maintaining strict inventory ledger integrity and sub-second cashier checkout performance under concurrent multi-warehouse and multi-branch retail operations.",
        approach: "Engineered a high-performance frontend using React 19, TypeScript, Ant Design, and Apache ECharts analytics dashboards with optimistic UI feedback and sub-second cashier operations, connected to a DDD backend with NestJS and Prisma on PostgreSQL.",
        tools: ["React 19", "TypeScript", "Apache ECharts", "Ant Design", "NestJS", "Prisma", "PostgreSQL"],
        results: "Delivered an auditable retail ecosystem supporting multi-warehouse replenishment, real-time inventory valuations, and zero discrepancy cashier reconciliations.",
        demoUrl: "https://inventory-pos-hazel.vercel.app",
        demoNote: "Production-ready enterprise retail system. Access to multi-branch operational accounts available upon inquiry for technical recruiter review.",
        repoType: "public",
        repoUrl: "https://github.com/ayebe51/inventory-pos",
        videoUrl: "",
        gallery: [
            {
                src: "/images/projects/pos-inventory/dashboard.webp",
                caption: "Omnichannel Analytics & Inventory Dashboard — sub-second multi-warehouse stock replenishment, cashier balancing, and ECharts live metrics.",
                alt: "Enterprise Inventory POS Dashboard and Real-Time Analytics",
                isMobile: false
            }
        ]
    },
    {
        id: 2,
        title: "Koneksi Santri — Integrated Pesantren ERP & Mobile Ecosystem",
        category: "Next.js 14 Portal & Mobile Ecosystem",
        filterCategories: ["all", "frontend", "fullstack", "mobile"],
        image: "/images/projects/koneksi-santri/dashboard.webp",
        shortDesc: "Integrated ERP & mobile platform for Pesantren featuring a Flutter guardian app (Portal Wali Santri), closed-loop cashless wallet, smart gate security, and general ledger.",
        description: "A comprehensive enterprise management platform engineered for Islamic boarding schools (Pesantren). Features a dedicated Flutter mobile application for guardians (Portal Wali Santri) to monitor cashless canteen spending in real time, configure daily spending caps, authorize student leave/pickup permits via QR Smart Gate, and track tuition billing. Backed by a Next.js 14 web superadmin and NestJS REST API on PostgreSQL with consolidated double-entry general ledger accounting across multi-branch foundations.",
        challenge: "Eliminating unauthorized cash leakage and enforcing student safety during campus leave while managing complex campus finances across multi-entity foundations with strict data consistency.",
        approach: "Architected a full-stack and mobile ecosystem combining a Flutter cross-platform mobile app for guardians, a responsive Next.js 14 App Router management portal, and NestJS REST microservices on PostgreSQL with Prisma ORM, integrating closed-loop wallet ledgers and QR security checkpoint verification.",
        tools: ["Next.js 14", "Flutter", "TypeScript", "Tailwind CSS", "NestJS", "PostgreSQL", "Prisma", "Docker"],
        results: "Established a 100% cashless campus ecosystem with fraud-proof closed-loop wallet controls, auditable guardian pickup verification, and zero financial ledger discrepancies.",
        demoUrl: "https://admin.koneksisantri.tech",
        demoNote: "Showroom demo running with automated daily resets at 02:00 WIB. Interactive role selectors (Pesantren Admin, Treasurer, Teacher/Ustadz, Guardian, Cashier) available directly on the login portal. Full enterprise codebase protected under private license; walkthrough available upon request.",
        repoType: "private",
        repoUrl: "https://github.com/ayebe51/koneksi-santri",
        videoUrl: "",
        gallery: [
            {
                src: "/images/projects/koneksi-santri/mobile-1-beranda.webp",
                caption: "Portal Wali Santri (Flutter Mobile) — Home & Digital Wallet: Real-time pocket money monitoring, instant top-up, student QR code, and canteen spending limit controls.",
                alt: "Portal Wali Santri Home and Student Digital Wallet",
                isMobile: true
            },
            {
                src: "/images/projects/koneksi-santri/mobile-2-tagihan.webp",
                caption: "Portal Wali Santri (Flutter Mobile) — Monthly Tuition Billing: Itemized breakdown of monthly pesantren fees (meals, dormitory, laundry, events) with payment status tracking.",
                alt: "Portal Wali Santri Tuition and Monthly Billing Breakdown",
                isMobile: true
            },
            {
                src: "/images/projects/koneksi-santri/mobile-3-hafalan.webp",
                caption: "Portal Wali Santri (Flutter Mobile) — Quran Memorization Tracking: Periodic progress reporting for Al-Qur'an tahfidz milestones (juz target and deposit evaluation grades).",
                alt: "Portal Wali Santri Quran Memorization Progress Tracking",
                isMobile: true
            },
            {
                src: "/images/projects/koneksi-santri/key-feature.webp",
                caption: "Web Superadmin — Smart Gate & Student Pickup Dispatch: QR-code authorized guardian pickup permits with security gate verification and real-time checkpoint logs.",
                alt: "Koneksi Santri Smart Gate QR Security and Student Pickup Dispatch",
                isMobile: false
            },
            {
                src: "/images/projects/koneksi-santri/supporting-view.webp",
                caption: "Web Superadmin — Multi-Entity General Ledger: Double-entry accounting with consolidated trial balance across multi-branch foundation entities.",
                alt: "Koneksi Santri Multi-Entity General Ledger and Consolidated Trial Balance",
                isMobile: false
            }
        ]
    },
    {
        id: 3,
        title: "SIMMACI — Enterprise Education Governance Platform",
        category: "Enterprise Web SPA & PWA",
        filterCategories: ["all", "frontend", "fullstack"],
        image: "/images/projects/simmaci/dashboard.webp",
        shortDesc: "Centralized administrative decree issuance and institutional governance platform for 270+ educational institutions, 2,000+ staff, and 17,000+ students.",
        description: "A centralized institutional governance platform built for LP Ma'arif NU Cilacap. Streamlines and automates periodic operational decree issuance, teacher credentialing, and multi-school administrative reviews across 270+ madrasahs and schools. Delivers real-time data synchronization with dedicated tenant isolation.",
        challenge: "Decentralized administration across 270+ educational institutions causing manual certificate issuance bottlenecks, duplicate teacher records, and high latency.",
        approach: "Architected a decoupled solution with a high-performance React 19 SPA (Vite PWA) featuring dynamic form generation, client-side batch templating previews (Docxtemplater), and responsive data tables, paired with a robust Laravel 12 REST API on PostgreSQL 16 with 1,800+ automated test cases.",
        tools: ["React 19", "TypeScript", "Tailwind CSS", "Vite PWA", "Laravel 12", "PostgreSQL 16", "PHPUnit / Pest"],
        results: "Decreased manual decree issuance overhead by over 70%, eliminated record duplication across 270+ institutions, and achieved 100% test pass rate with 36,000+ assertions.",
        demoUrl: "",
        demoNote: "Internal institutional platform for LP Ma'arif NU Cilacap administering 270+ institutions. Full codebase, database migrations, and 1,800+ automated test cases are accessible on GitHub. Live system walkthrough available upon interview request.",
        repoType: "public",
        repoUrl: "https://github.com/ayebe51/simmaci",
        videoUrl: "",
        gallery: [
            {
                src: "/images/projects/simmaci/key-feature.webp",
                caption: "Batch Decree Generator — automated template configuration, custom numbering formats, and bulk issuance workflow.",
                alt: "SIMMACI Batch Decree Generator and Approval Workflow",
                isMobile: false
            },
            {
                src: "/images/projects/simmaci/supporting-view.webp",
                caption: "Centralized Decree Services & Archive Portal — multi-channel application forms, revision requests, and digital document repositories.",
                alt: "SIMMACI Centralized Decree Services and Archive Portal",
                isMobile: false
            },
            {
                src: "/images/projects/simmaci/dashboard-admin-overview.webp",
                caption: "Executive Command Center & Regional Analytics — central monitoring for 270+ institutions, 2,000+ staff, and 17,000+ students.",
                alt: "SIMMACI Executive Command Center and Regional Analytics Dashboard",
                isMobile: false
            }
        ]
    }
];

export const projectsId = [
    {
        id: 1,
        title: "Enterprise Inventory + POS (Kiro ERP) — Kasir & Ritel",
        category: "React 19 & Visualisasi Data",
        filterCategories: ["all", "frontend", "fullstack"],
        image: "/images/projects/pos-inventory/dashboard.webp",
        shortDesc: "Platform persediaan ritel omnichannel, kasir POS cepat, dan akuntansi double-entry untuk distribusi ritel dan grosir.",
        description: "Platform manajemen ritel komprehensif yang dirancang untuk rantai distribusi ritel dan grosir. Dilengkapi pencatatan mutasi stok multi-gudang berbasis append-only ledger (valuasi WAC/FIFO), terminal kasir POS cepat dengan kontrol shift kas, pesanan penjualan B2B, pengadaan 3-way matching otomatis (PR/PO/Penerimaan Barang), dan akuntansi keuangan standar PSAK dengan analitik operasional real-time.",
        challenge: "Menjaga integritas data stok inventaris dan kecepatan transaksi kasir sub-detik di tengah tingginya transaksi konkuren multi-gudang dan cabang ritel.",
        approach: "Membangun antarmuka enterprise interaktif menggunakan React 19, TypeScript, Ant Design, dan visualisasi data Apache ECharts dengan antarmuka kasir sub-detik, umpan balik UI optimistik, dan dashboard analitik inventaris responsif, terhubung ke backend DDD dengan NestJS dan Prisma pada PostgreSQL.",
        tools: ["React 19", "TypeScript", "Apache ECharts", "Ant Design", "NestJS", "Prisma", "PostgreSQL"],
        results: "Menghasilkan ekosistem ritel yang dapat diaudit penuh dengan otomatisasi pengisian stok multi-gudang, valuasi stok real-time, dan rekonsiliasi kasir tanpa selisih.",
        demoUrl: "https://inventory-pos-hazel.vercel.app",
        demoNote: "Sistem ritel enterprise siap produksi. Akun operasional cabang dapat disediakan bagi recruiter teknis untuk evaluasi lebih mendalam.",
        repoType: "public",
        repoUrl: "https://github.com/ayebe51/inventory-pos",
        videoUrl: "",
        gallery: [
            {
                src: "/images/projects/pos-inventory/dashboard.webp",
                caption: "Dashboard Analitik & Inventaris Omnichannel — pengisian stok multi-gudang sub-detik, rekonsiliasi kasir, dan metrik live ECharts.",
                alt: "Dashboard Enterprise Inventory POS dan Analitik Real-Time",
                isMobile: false
            }
        ]
    },
    {
        id: 2,
        title: "Koneksi Santri — Sistem ERP Pesantren & Ekosistem Mobile",
        category: "Next.js 14 Portal & Ekosistem Mobile",
        filterCategories: ["all", "frontend", "fullstack", "mobile"],
        image: "/images/projects/koneksi-santri/dashboard.webp",
        shortDesc: "Platform terpadu ERP & mobile pesantren dengan aplikasi wali santri berbasis Flutter, dompet digital tertutup (closed-loop), gerbang pintar, dan buku besar akuntansi.",
        description: "Ekosistem enterprise yang dikembangkan untuk institusi pesantren modern. Menghadirkan aplikasi mobile Flutter untuk wali santri (Portal Wali Santri) guna memantau uang saku digital secara realtime, membatasi limit belanja harian di kantin, mengesahkan izin penjemputan via Smart Gate QR, dan memantau status tagihan SPP. Didukung web superadmin Next.js 14 dan microservices NestJS pada PostgreSQL dengan pembukuan akuntansi double-entry multi-cabang.",
        challenge: "Mengeliminasi kebocoran uang saku tunai dan memastikan keamanan penjemputan santri, sembari mengelola keuangan kompleks multi-yayasan dengan konsistensi data mutlak.",
        approach: "Merancang ekosistem full-stack dan mobile terpadu: aplikasi Flutter untuk wali santri, portal web responsif Next.js 14 App Router, serta microservices NestJS pada PostgreSQL dengan Prisma ORM, memadukan buku besar dompet tertutup dan verifikasi pos keamanan QR.",
        tools: ["Next.js 14", "Flutter", "TypeScript", "Tailwind CSS", "NestJS", "PostgreSQL", "Prisma", "Docker"],
        results: "Menciptakan lingkungan kampus 100% nontunai dengan kontrol dompet tertutup bebas fraud, verifikasi penjemputan yang dapat diaudit, dan nol selisih buku besar keuangan.",
        demoUrl: "https://admin.koneksisantri.tech",
        demoNote: "Demo operasional live dengan reset otomatis setiap pukul 02:00 WIB. Pemilih peran interaktif (Admin Pesantren, Bendahara, Ustadz, Wali Santri, Kasir) tersedia langsung di portal login. Walkthrough arsitektur tersedia berdasarkan permintaan interview teknis.",
        repoType: "private",
        repoUrl: "https://github.com/ayebe51/koneksi-santri",
        videoUrl: "",
        gallery: [
            {
                src: "/images/projects/koneksi-santri/mobile-1-beranda.webp",
                caption: "Portal Wali Santri (Flutter Mobile) — Beranda & Dompet Digital: Monitoring uang jajan santri real-time, top-up instan, QR santri, dan kontrol limit belanja kantin.",
                alt: "Portal Wali Santri Beranda dan Dompet Digital Santri",
                isMobile: true
            },
            {
                src: "/images/projects/koneksi-santri/mobile-2-tagihan.webp",
                caption: "Portal Wali Santri (Flutter Mobile) — Tagihan Bulanan: Rincian SPP dan iuran pesantren (makan, asrama, laundry, kegiatan) dengan riwayat pembayaran terperinci.",
                alt: "Portal Wali Santri Rincian Tagihan Bulanan Santri",
                isMobile: true
            },
            {
                src: "/images/projects/koneksi-santri/mobile-3-hafalan.webp",
                caption: "Portal Wali Santri (Flutter Mobile) — Pemantauan Hafalan: Laporan capaian tahfidz Al-Qur'an (target juz dan evaluasi setoran berkala).",
                alt: "Portal Wali Santri Pemantauan Tahfidz dan Hafalan Santri",
                isMobile: true
            },
            {
                src: "/images/projects/koneksi-santri/key-feature.webp",
                caption: "Web Superadmin — Smart Gate & Student Pickup Dispatch: Otorisasi izin penjemputan santri via QR kode dengan verifikasi pos keamanan dan log real-time.",
                alt: "Koneksi Santri Smart Gate QR Security dan Student Pickup Dispatch",
                isMobile: false
            },
            {
                src: "/images/projects/koneksi-santri/supporting-view.webp",
                caption: "Web Superadmin — Multi-Entity General Ledger: Pembukuan buku besar akuntansi double-entry dengan neraca saldo konsolidasi multi-cabang yayasan.",
                alt: "Koneksi Santri Multi-Entity General Ledger dan Consolidated Trial Balance",
                isMobile: false
            }
        ]
    },
    {
        id: 3,
        title: "SIMMACI — Platform Tata Kelola Pendidikan Enterprise",
        category: "Web SPA & PWA Enterprise",
        filterCategories: ["all", "frontend", "fullstack"],
        image: "/images/projects/simmaci/dashboard.webp",
        shortDesc: "Platform penerbitan SK dinas dan tata kelola terpusat untuk 270+ madrasah/sekolah, 2.000+ PTK, dan 17.000+ peserta didik.",
        description: "Sistem tata kelola institusi terpadu yang dibangun untuk LP Ma'arif NU Cilacap. Mengotomasi alur penerbitan Surat Keputusan (SK) berkala, sinkronisasi data siswa, dan manajemen kepegawaian secara terpusat untuk ratusan lembaga pendidikan dengan isolasi tenant yang aman.",
        challenge: "Administrasi terdesentralisasi di 270+ sekolah yang menimbulkan antrean penerbitan SK manual, duplikasi data guru, dan latensi pembaruan data yang tinggi.",
        approach: "Merancang antarmuka performa tinggi React 19 SPA (Vite PWA) dengan alur formulir dinamis, pratinjau dokumen batch di sisi klien (Docxtemplater), dan tabel data responsif, didukung REST API Laravel 12 pada PostgreSQL 16 dengan 1.800+ automated test cases.",
        tools: ["React 19", "TypeScript", "Tailwind CSS", "Vite PWA", "Laravel 12", "PostgreSQL 16", "PHPUnit / Pest"],
        results: "Memangkas beban kerja penerbitan SK manual lebih dari 70%, mengeliminasi duplikasi data guru, dan meraih 100% test pass rate dengan 36.000+ assertions.",
        demoUrl: "",
        demoNote: "Platform institusi internal LP Ma'arif NU Cilacap yang mengelola 270+ lembaga. Seluruh kode sumber, migrasi basis data, dan 1.800+ automated test cases dapat diakses di GitHub. Walkthrough sistem live dapat dipresentasikan saat sesi interview teknis.",
        repoType: "public",
        repoUrl: "https://github.com/ayebe51/simmaci",
        videoUrl: "",
        gallery: [
            {
                src: "/images/projects/simmaci/key-feature.webp",
                caption: "Batch Decree Generator — konfigurasi template SK otomatis, format penomoran kustom, dan alur penerbitan dokumen massal.",
                alt: "SIMMACI Batch Decree Generator dan Alur Persetujuan",
                isMobile: false
            },
            {
                src: "/images/projects/simmaci/supporting-view.webp",
                caption: "Portal Layanan & Arsip SK Terpusat — formulir permohonan multi-kanal, revisi berkas, dan repositori arsip digital.",
                alt: "SIMMACI Portal Layanan dan Arsip Dokumen Terpusat",
                isMobile: false
            },
            {
                src: "/images/projects/simmaci/dashboard-admin-overview.webp",
                caption: "Dashboard Eksekutif & Pemetaan Wilayah — monitoring terpusat untuk 270+ madrasah/sekolah, 2.000+ guru, dan 17.000+ siswa.",
                alt: "SIMMACI Dashboard Eksekutif dan Pemetaan Wilayah",
                isMobile: false
            }
        ]
    }
];

export const getProjects = (lang = 'en') => {
    return lang === 'id' ? projectsId : projectsEn;
};

// Default export for backward compatibility
export const projects = projectsEn;
