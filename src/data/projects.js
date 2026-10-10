// Bilingual Projects Data for Ahmad Ayub Nu'man Portfolio

export const projectsEn = [
    {
        id: 1,
        title: "SIMMACI — Enterprise Education Governance Platform",
        category: "Enterprise Education Platform",
        image: "/images/projects/simmaci/dashboard.webp",
        shortDesc: "Centralized administrative decree issuance and institutional governance platform for 270+ educational institutions, 2,000+ staff, and 17,000+ students.",
        description: "A centralized institutional governance platform built for LP Ma'arif NU Cilacap. Streamlines and automates periodic operational decree issuance, teacher credentialing, and multi-school administrative reviews across 270+ madrasahs and schools. Delivers real-time data synchronization with dedicated tenant isolation.",
        challenge: "Decentralized administration across 270+ educational institutions causing manual certificate issuance bottlenecks, duplicate teacher records, and high latency.",
        approach: "Architected a decoupled fullstack solution utilizing a high-performance React 19 SPA (Vite PWA) paired with a robust Laravel 12 REST API on PostgreSQL 16, automated Word/PDF batch document templating (PHPWord/Docxtemplater), S3/MinIO cloud storage isolation, and comprehensive test coverage (1,800+ PHPUnit/Pest test cases).",
        tools: ["React 19", "TypeScript", "Laravel 12", "PostgreSQL 16", "Tailwind CSS", "Vite PWA", "PHPUnit / Pest"],
        results: "Decreased manual decree issuance overhead by over 70%, eliminated record duplication across 270+ institutions, and achieved 100% test pass rate with 36,000+ assertions.",
        demoUrl: "",
        demoNote: "Internal institutional platform for LP Ma'arif NU Cilacap administering 270+ institutions. Full codebase, database migrations, and 1,800+ automated test cases are accessible on GitHub. Live system walkthrough available upon interview request.",
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
            }
        ]
    },
    {
        id: 2,
        title: "Koneksi Santri — Integrated Pesantren ERP & Mobile Ecosystem",
        category: "Pesantren ERP & Mobile Ecosystem",
        image: "/images/projects/koneksi-santri/dashboard.webp",
        shortDesc: "Integrated ERP & mobile platform for Pesantren featuring a Flutter guardian app (Portal Wali Santri), closed-loop cashless wallet, smart gate security, and general ledger.",
        description: "A comprehensive enterprise management platform engineered for Islamic boarding schools (Pesantren). Features a dedicated Flutter mobile application for guardians (Portal Wali Santri) to monitor cashless canteen spending in real time, configure daily spending caps, authorize student leave/pickup permits via QR Smart Gate, and track tuition billing. Backed by a Next.js 14 web superadmin and NestJS REST API on PostgreSQL with consolidated double-entry general ledger accounting across multi-branch foundations.",
        challenge: "Eliminating unauthorized cash leakage and enforcing student safety during campus leave while managing complex campus finances across multi-entity foundations with strict data consistency.",
        approach: "Architected a full-stack and mobile ecosystem combining a Flutter cross-platform app for guardians, Next.js 14 management portal, and NestJS REST microservices on PostgreSQL with Prisma ORM, integrating closed-loop wallet ledgers, QR security checkpoint verification, and automated notification dispatches.",
        tools: ["Next.js 14", "Flutter", "NestJS", "TypeScript", "PostgreSQL", "Prisma", "Closed-Loop Wallet", "Docker"],
        results: "Established a 100% cashless campus ecosystem with fraud-proof closed-loop wallet controls, auditable guardian pickup verification, and zero financial ledger discrepancies.",
        demoUrl: "https://admin.koneksisantri.tech",
        demoNote: "Showroom demo running with automated daily resets at 02:00 WIB. Interactive role selectors (Pesantren Admin, Treasurer, Teacher/Ustadz, Guardian, Cashier) available directly on the login portal. Full credential access available upon request.",
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
        title: "Enterprise Inventory + POS (Kiro ERP) — Retail Management",
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

export const projectsId = [
    {
        id: 1,
        title: "SIMMACI — Platform Tata Kelola Pendidikan Enterprise",
        category: "Platform Pendidikan Enterprise",
        image: "/images/projects/simmaci/dashboard.webp",
        shortDesc: "Platform penerbitan SK dinas dan tata kelola terpusat untuk 270+ madrasah/sekolah, 2.000+ PTK, dan 17.000+ peserta didik.",
        description: "Sistem tata kelola institusi terpadu yang dibangun untuk LP Ma'arif NU Cilacap. Mengotomasi alur penerbitan Surat Keputusan (SK) berkala, sinkronisasi data siswa, dan manajemen kepegawaian secara terpusat untuk ratusan lembaga pendidikan dengan isolasi tenant yang aman.",
        challenge: "Administrasi terdesentralisasi di 270+ sekolah yang menimbulkan antrean penerbitan SK manual, duplikasi data guru, dan latensi pembaruan data yang tinggi.",
        approach: "Merancang arsitektur decoupled full-stack menggunakan React 19 SPA (Vite PWA) dan REST API Laravel 12 pada PostgreSQL 16, templating dokumen Word/PDF batch otomatis (PHPWord/Docxtemplater), isolasi penyimpanan cloud S3/MinIO, serta jaminan mutu 1.800+ test cases PHPUnit/Pest.",
        tools: ["React 19", "TypeScript", "Laravel 12", "PostgreSQL 16", "Tailwind CSS", "Vite PWA", "PHPUnit / Pest"],
        results: "Memangkas beban kerja penerbitan SK manual lebih dari 70%, mengeliminasi duplikasi data guru, dan meraih 100% test pass rate dengan 36.000+ assertions.",
        demoUrl: "",
        demoNote: "Platform institusi internal LP Ma'arif NU Cilacap yang mengelola 270+ lembaga. Seluruh kode sumber, migrasi basis data, dan 1.800+ automated test cases dapat diakses di GitHub. Walkthrough sistem live dapat dipresentasikan saat sesi interview teknis.",
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
            }
        ]
    },
    {
        id: 2,
        title: "Koneksi Santri — Sistem Informasi Manajemen Pesantren & Ekosistem Mobile",
        category: "ERP Pesantren & Ekosistem Mobile",
        image: "/images/projects/koneksi-santri/dashboard.webp",
        shortDesc: "Platform ERP & aplikasi mobile terpadu pesantren dengan aplikasi wali santri (Flutter), dompet digital non-tunai, pos jaga smart gate, dan buku besar akuntansi.",
        description: "Platform manajemen enterprise terpadu yang dirancang khusus untuk pondok pesantren. Dilengkapi aplikasi mobile Flutter khusus wali santri (Portal Wali Santri) untuk memantau transaksi uang saku non-tunai di kantin/koperasi secara real-time, mengatur limit belanja harian, otorisasi izin keluar santri via Smart Gate QR, dan tagihan SPP digital. Didukung web superadmin Next.js 14 dan microservices NestJS pada PostgreSQL dengan akuntansi buku besar konsolidasi multi-cabang yayasan.",
        challenge: "Mengeliminasi kebocoran uang saku santri dan menjamin keamanan santri saat keluar kampus sembari mengelola keuangan kompleks multi-cabang yayasan dengan konsistensi data yang ketat.",
        approach: "Merancang ekosistem full-stack dan mobile yang memadukan aplikasi mobile Flutter wali santri, portal manajemen Next.js 14, dan microservices NestJS pada PostgreSQL dengan Prisma ORM, pencatatan saldo dompet tertutup, verifikasi pos keamanan QR, dan notifikasi otomatis.",
        tools: ["Next.js 14", "Flutter", "NestJS", "TypeScript", "PostgreSQL", "Prisma", "Closed-Loop Wallet", "Docker"],
        results: "Mewujudkan 100% lingkungan kampus non-tunai dengan kontrol dompet digital bebas fraud, verifikasi penjemputan santri yang dapat diaudit, dan nol selisih buku besar keuangan.",
        demoUrl: "https://admin.koneksisantri.tech",
        demoNote: "Demo showroom berjalan dengan reset otomatis harian pukul 02:00 WIB. Selektor role interaktif (Admin Pesantren, Bendahara, Ustadz, Wali Santri, Kasir) tersedia langsung di halaman login. Kredensial lengkap dapat diberikan sesuai permintaan.",
        repoUrl: "https://github.com/ayebe51/koneksi-santri",
        videoUrl: "",
        gallery: [
            {
                src: "/images/projects/koneksi-santri/mobile-1-beranda.webp",
                caption: "Portal Wali Santri (Flutter Mobile) — Beranda & Saldo Dompet Digital: Monitoring saldo uang saku real-time, top-up cepat, QR santri, dan kontrol limit belanja kantin.",
                alt: "Portal Wali Santri Beranda dan Saldo Dompet Digital Santri",
                isMobile: true
            },
            {
                src: "/images/projects/koneksi-santri/mobile-2-tagihan.webp",
                caption: "Portal Wali Santri (Flutter Mobile) — Manajemen Tagihan SPP: Rincian pos biaya bulanan santri (makan, asrama, laundry, maulid) dengan pelacakan status pembayaran.",
                alt: "Portal Wali Santri Tagihan dan Rincian Biaya Bulanan",
                isMobile: true
            },
            {
                src: "/images/projects/koneksi-santri/mobile-3-hafalan.webp",
                caption: "Portal Wali Santri (Flutter Mobile) — Monitoring Progres Hafalan: Pelaporan berkala capaian tahfidz Al-Qur'an (target juz dan histori nilai setoran santri).",
                alt: "Portal Wali Santri Monitoring Progres Hafalan Al-Quran",
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
        title: "Enterprise Inventory + POS (Kiro ERP) — Kasir & Ritel",
        category: "ERP Ritel & Point of Sale",
        image: "/images/projects/pos-inventory/dashboard.webp",
        shortDesc: "Platform persediaan ritel omnichannel, kasir POS cepat, dan akuntansi double-entry untuk distribusi ritel dan grosir.",
        description: "Platform manajemen ritel komprehensif yang dirancang untuk rantai distribusi ritel dan grosir. Dilengkapi pencatatan mutasi stok multi-gudang berbasis append-only ledger (valuasi WAC/FIFO), terminal kasir POS cepat dengan kontrol shift kas, pesanan penjualan B2B, pengadaan 3-way matching otomatis (PR/PO/Penerimaan Barang), dan akuntansi keuangan standar PSAK dengan analitik operasional real-time.",
        challenge: "Menjaga integritas data stok inventaris dan kecepatan transaksi kasir sub-detik di tengah tingginya transaksi konkuren multi-gudang dan cabang ritel.",
        approach: "Merancang arsitektur Domain-Driven Design (DDD) menggunakan NestJS dan Prisma pada PostgreSQL, caching Redis, optimistic concurrency control, dan dashboard analitik Apache ECharts.",
        tools: ["React 19", "NestJS", "TypeScript", "Prisma", "PostgreSQL", "Apache ECharts", "Ant Design"],
        results: "Menghasilkan ekosistem ritel yang dapat diaudit penuh dengan otomatisasi pengisian stok multi-gudang, valuasi stok real-time, dan rekonsiliasi kasir tanpa selisih.",
        demoUrl: "https://inventory-pos-hazel.vercel.app",
        demoNote: "Sistem ritel enterprise siap produksi. Akun operasional cabang dapat disediakan bagi recruiter teknis untuk evaluasi lebih mendalam.",
        repoUrl: "https://github.com/ayebe51/inventory-pos",
        videoUrl: "",
        gallery: []
    }
];

export const getProjects = (lang = 'en') => {
    return lang === 'id' ? projectsId : projectsEn;
};

// Default export for backward compatibility
export const projects = projectsEn;
