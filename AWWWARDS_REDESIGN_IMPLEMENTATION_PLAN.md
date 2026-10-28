# AWWWARDS-TIER REDESIGN IMPLEMENTATION PLAN
**Portofolio Ahmad Ayub Nu'man — World-Class Creative Developer Experience**
*Benchmark: Awwwards Site of the Day / FWA of the Day / ReadCV / `andikadevs.space`*
*Arsitek: Principal Frontend Engineer & Creative Technologist*
*Status: Ready for Immediate Review & Execution*

---

## 1. Executive Vision & Filosofi Desain

Tujuan dari rencana ini adalah menghapus seluruh sisa tampilan "kotak kartu korporat biasa" dan mentransformasikannya menjadi **sebuah karya seni interaktif digital berstandar Awwwards / FWA**. Portofolio ini tidak sekadar menjadi tempat memajang link proyek, melainkan menjadi bukti langsung kemampuan Anda sebagai seorang **Senior Frontend Architect & Creative Technologist** yang menguasai fisika gerak, pencahayaan optik, dan rekayasa web modern.

### Perbedaan Mendasar: Desain Standar vs. Desain Standar Awwwards

| Parameter | Desain Biasa (Sebelumnya) | Standar Awwwards / FWA (Rencana Ini) |
|---|---|---|
| **Pencahayaan & Material** | Kotak putih datar (`bg-white border-slate-200`) | **Optical Depth & Refraktif Akrilik**: Lempengan kaca semi-transparan dengan *rim specular highlight* (`inset 0 1px 0 rgba(255,255,255,0.8)`), pendaran *ambient luminescence*, dan tekstur *cinema film grain*. |
| **Tipografi** | Ukuran standar (`text-5xl`), sans-serif umum | **Typographic Brutalism & Editorial Contrast**: Judul raksasa (`clamp(4rem, 10vw, 8.5rem)`), *tight negative letter-spacing* (`-0.05em`), disandingkan dengan koordinat *monospace micro-data* (`10px`). |
| **Fisika Teks** | Efek hover warna biasa | **Kinetic Character Wave Physics**: Setiap karakter huruf membal secara elastis (*spring bounce* `stiffness: 420, damping: 14`) dengan perpindahan warna indigo cair saat kursor melintas. |
| **Panggung Proyek** | Grid 3 kolom statis | **Physical 3D Stacked Card Deck (`.deck-card`)**: Tumpukan kartu berdimensi fisik 3D dengan rotasi perspektif, interaksi *drag/swipe*, mockup perangkat berbingkai logam reflektif, dan tombol navigasi kapsul melayang. |
| **Maskot Digital** | Robot flat diam di panggung | **Docked Living Companion (Aero-Bot)**: Menetap di sudut kanan bawah dengan animasi kedip mata (*eye-wink*), tatapan mata mengikuti kursor mouse, balon dialog per-section, dan reaksi suara mikro-haptik. |
| **Services & Borders** | Border statis abu-abu | **Raycast / Linear Spotlight Border Tracing**: Garis border kaca menyala terang mengikuti koordinat laser kursor kursor secara real-time. |
| **Sensori & Suara** | Hening | **Web Audio API UI Haptics**: Efek suara sintetis frekuensi kristal (*crystal blips* & *soft pops*) yang memberikan sensasi sentuhan fisik nyata. |

---

## 2. Palet Warna & Identitas Visual (Mewah & Eksklusif)

Sesuai preferensi mutlak Anda, palet warna tetap menggunakan identitas asli yang dinaikkan kelasnya (*elevated luxury*):
* **Canvas Background**: Alabaster Silk (`#F8FAFC`) dengan lapisan halus *Ambient Aurora Mesh* dan *SVG Cinema Noise Film Grain*.
* **Primary Laser / Accent**: Liquid Electric Indigo (`#4F46E5` & `#6366F1`).
* **Secondary Refraction**: Cyan Glow & Ice Sky (`#0284C7` & `#38BDF8`).
* **Textured Slate**: Deep Obsidian (`#0F172A`) untuk tipografi tegas berwibawa.
* **Status Glow**: Emerald Cyberpunk (`#10B981`) untuk indikator uptime dan ketersediaan kerja live.

---

## 3. Spesifikasi Arsitektur Per Section (Awwwards Blueprint)

```
[01. FLOATING CAPSULE HUD]  --> Glassmorphic Pill + Live Dynamic Section Counter (00 / 06) + Sound + Language
[02. CINEMATIC HERO STAGE]  --> Typographic Brutalism + Character Split-Text Spring Wave + Mouse Radial Aurora
[03. DOCKED COMPANION GUIDE]--> Aero-Bot di Sudut Layar + Eye-Wink + Gaze Tracking + Contextual Dialogues
[04. BENTO ARCHITECTURE]    --> Frosted Squircle Frame + 3D Tilt Creator Portrait + System Blueprint Specs
[05. SERVICES ACCORDION]    --> Spotlight Border Tracing (Border Menyala Mengikuti Kursor) + 45° Smooth Indicator
[06. ARSENAL TICKER]        --> Dual Infinite Marquee + Feathered Edge Gradient Masking (Faded In/Out)
[07. 3D STACKED CARD DECK]  --> Physical .deck-card Stack (Perspective 1200px) + Drag/Swipe + View Switcher
[08. FINANCIAL LEDGER STATS]--> Metrik Kartu Transparan + Kinetic Odometer Number Rollup (3+, 270+, 1,800+)
[09. CONTACT TERMINAL]      --> Frosted Glass Terminal + Direct 1-Click WhatsApp & Email + Form Validasi WCAG AA
```

---

### Section 1: Floating Capsule HUD Header (`src/components/Header.jsx`)
- **Penempatan**: Mengambang di tengah atas layar (`fixed top-4 left-1/2 -translate-x-1/2 z-50`).
- **Material**: *Heavy Frosted Glass* tebal (`bg-white/80 backdrop-blur-2xl border border-white/60 shadow-xl shadow-slate-200/50`).
- **Fitur Awwwards**:
  - **Dynamic Section Progress Indicator**: Menampilkan counter live sesuai posisi scroll:  
    `00 / 06 — HERO`, `01 / 06 — ABOUT`, `02 / 06 — SERVICES`, `03 / 06 — ARSENAL`, `04 / 06 — SELECTED WORK`, `05 / 06 — TRACK RECORD`, `06 / 06 — CONTACT`.
  - **Fluid Active Pill Indicator**: Garis / kapsul indikator menu meluncur secara elastis menggunakan Framer Motion `layoutId`.
  - **Audio Haptics Control**: Tombol speaker untuk mengaktifkan/mematikan efek suara mikro Web Audio API.
  - **Bilingual Switcher & Terminal**: Tombol ID/EN dan tombol kilat `Ctrl+K`.

---

### Section 2: Cinematic Hero Stage (`src/components/Hero.jsx`)
- **Konsep**: Menghilangkan robot tengah sepenuhnya! Panggung difokuskan pada kekuatan tipografi arsitektural Ahmad Ayub.
- **Tipografi Utama**:
  - Baris 1: Monospaced tag berlatar kaca akrilik: `// AHMAD AYUB NU'MAN • SYSTEMS ARCHITECT`.
  - Baris 2: **Headline Kinetik Raksasa**:
    `"Engineering software that organizations quietly run on."`
    Menggunakan komponen `KineticSplitText` di mana setiap huruf membal ke atas saat mouse melintas (`y: -10px, scale: 1.15, color: #4F46E5`), persis seperti *"Developer who ships systems."* di `andikadevs.space`.
  - Baris 3: Dynamic Role Rotator dengan animasi karakter berganti halus:
    `[ FRONTEND ARCHITECT ]`, `[ FULL-STACK ENGINEER ]`, `[ SYSTEMS DEVELOPER ]`.
- **Atmospheric Background**:
  - Grid arsitektur tipis dengan *mouse-following radial spotlight glow* yang mengikuti kursor secara presisi.
  - Parallax floating syntax chips (`</>`, `{}`, `()`, `[]`) di berbagai lapisan kedalaman (z-layers).
- **Magnetic Action Suite**:
  - Tombol magnetik (`MagneticButton`) dengan efek pendaran border cair (*liquid border glow*): *"SEE CASE STUDIES"*, *"DOWNLOAD ATS CV"*, dan *"PRESS [CTRL + K]"*.

---

### Section 3: Aero-Bot Docked Living Companion (`src/components/ui/CompanionGuide.jsx` & `AeroBotMascot.jsx`)
- **Posisi**: Sudut kanan bawah layar (`fixed bottom-6 right-6 z-40`), mengadopsi pola Tejo di `andikadevs.space`.
- **Fisika & Interaksi**:
  - **Eye-Wink / Blink Interaktif**: Mata kanan Aero-Bot berkedip ramah (*cute upward wink arc*) saat kursor mouse mendekat, serta berkedip otomatis secara berkala (*idle-wink*).
  - **Pupil Gaze Tracking**: Titik pupil mata melacak pergerakan kursor mouse di seluruh layar.
  - **Contextual Speech Bubble**: Balon dialog otomatis berganti teks sesuai section yang sedang dibaca pengunjung.
  - **Easter Eggs & Spin Physics**: Jika robot diklik, Aero-Bot berputar 360° dengan efek suara *pop*, menampilkan pesan rahasia yang lucu dan mengesankan.
  - **Mobile Touch Safety**: Di layar HP (< 768px), balon dialog terlipat secara default agar tidak menutupi tombol atau form.

---

### Section 4: About & System Architecture Bento (`src/components/About.jsx`)
- **Foto Profil Kaca 3D**:
  - Foto autentik Ahmad Ayub diletakkan di dalam bingkai *Frosted Squircle* tebal dengan efek kemiringan 3D interaktif (*interactive 3D tilt & glare* saat mouse bergerak).
  - Lencana status ketersediaan live (`Available for Engineering Roles • UTC+7`).
- **Editorial Copy & Core Pillars**:
  - Narasi profesional tentang arsitektur multi-tenant, rekonsiliasi buku besar, dan stabilitas produksi.
  - Tiga kartu pilar arsitektur akrilik transparan (*Fullstack Mastery*, *High Reliability & Zero Discrepancy*, *Remote Collaboration*).

---

### Section 5: Services dengan Spotlight Border Tracing (`src/components/Services.jsx`)
- **Mekanisme Spotlight Border**:
  - Setiap baris layanan memiliki pelacak mouse real-time yang memancarkan pendaran border menyala terang mengikuti titik kursor kursor (efek kartu Linear / Raycast).
- **Accordion Interaktif**:
  - Baris pertama aktif secara default dengan kontras teks tajam.
  - Indikator panah aksi berputar 45° secara mulus dengan kurva pegas saat baris dibuka/ditutup.
  - Tag keahlian teknis bergaya kapsul minimalis.

---

### Section 6: Core Arsenal Marquee (`src/components/Skills.jsx`)
- **Dual Infinite Marquee**:
  - Baris 1 bergerak ke kiri (kecepatan 32 detik) dengan teks solid hitam pekat diselingi teks bergaris (*text-stroke*).
  - Baris 2 bergerak ke kanan (kecepatan 36 detik) dengan aksen warna indigo dan sky blue.
- **Feathered Edge Gradient Masking**:
  - Sisi kiri dan kanan layar diberi gradien pudar transparan sepanjang 150px sehingga teks masuk dan keluar layar dengan transisi pudar yang mewah tanpa patahan visual.

---

### Section 7: Selected Works — 3D Stacked Card Deck (`src/components/PortfolioGrid.jsx` & `ProjectCard.jsx`)
- **Transformasi Terbesar (Pola Utama `andikadevs.space`)**:
  - Dilengkapi tombol kapsul switcher: **[ 3D Deck View ]** | **[ Grid View ]**.
  - **Mode 3D Stacked Deck**:
    - Kartu-kartu proyek unggulan (SIMMACI, Koneksi Santri, Kiro POS) ditumpuk dengan kedalaman fisik 3D (`perspective: 1200px`).
    - Kartu terdepan tampil penuh dengan sudut rotasi dinamis (`rotateX: -2deg, rotateY: 3deg`).
    - Dua kartu di belakangnya terlihat bertingkat (*fanned out stack*) dengan skala mengecil, pergeseran vertikal, dan opacity menurun.
    - Pengunjung dapat menggeser (*drag/swipe*) kartu atau menggunakan tombol navigasi kapsul melayang (*Prev / Next Card*).
  - **Detail Kartu Kaca Akrilik**:
    - Nomor indeks monospaced di kiri atas (`01`, `02`, `03`).
    - Status pill live demo di kanan atas dengan titik hijau berkedip.
    - Specular glare reflektif yang bergerak mengikuti arah kursor.
    - Tombol aksi langsung (Buka Demo Langsung, GitHub Repo, dan Detail Studi Kasus).

---

### Section 8: Track Record — Financial Ledger Visualizer (`src/components/Testimonials.jsx`)
- **Visualisasi Ala Dashboard Finansial Enterprise**:
  - Tiga kartu metrik kaca transparan dengan pendaran cahaya halus di sudut kartu.
  - **Kinetic Odometer Rollup**: Angka `3+`, `270+`, dan `1,800+` bergulir dari angka 0 ke target secara dinamis dengan kurva deselerasi eksponensial saat kartu masuk ke viewport.
  - Tag pilar sistem (*Multi-Tenant Architecture*, *Double-Entry Ledgers*, *Strict RBAC*).

---

### Section 9: Contact & Collaboration Terminal (`src/components/Contact.jsx`)
- **Terminal B2B Kaca Akrilik**:
  - Kartu profil Ahmad Ayub dengan status aktif WhatsApp.
  - Tombol aksi 1-klik menuju WhatsApp dengan pesan pembuka otomatis.
  - Formulir kontak dengan input field bersinar indigo saat fokus, lolos standar aksesibilitas WCAG 2.1 AA (`htmlFor` terhubung semantik ke `id`).

---

## 4. Matriks File yang Akan Dimatangkan

| File Path | Komponen | Perubahan Standar Awwwards |
|---|---|---|
| `src/components/ui/KineticSplitText.jsx` | `KineticSplitText` | Pemecahan huruf per-karakter dengan spring physics elastis dan pergeseran warna indigo cair. |
| `src/components/ui/KineticCounter.jsx` | `KineticCounter` | Animasi rolling odometer angka yang bergulir mulus dari 0 ke target. |
| `src/components/Header.jsx` | `Header` | Floating Capsule HUD dengan dynamic section counter (`00 / 06` s.d. `06 / 06`) dan audio toggle. |
| `src/components/Hero.jsx` | `Hero` | Panggung editorial raksasa, bebas robot tengah, mouse spotlight aurora, dan magnetic CTA suite. |
| `src/components/ui/CompanionGuide.jsx` | `CompanionGuide` | Aero-Bot menetap di sudut kanan bawah dengan eye-wink, tatapan kursor, dan dialog kontekstual. |
| `src/components/ui/AeroBotMascot.jsx` | `AeroBotMascot` | Vektor robot SVG dengan mata winking smile arc dan propulsi thruster plasma. |
| `src/components/Services.jsx` | `Services` | Spotlight border tracing real-time yang menyala terang mengikuti koordinat laser kursor. |
| `src/components/Skills.jsx` | `Skills` | Dual infinite marquee dengan feathered edge gradient mask transparan kiri-kanan. |
| `src/components/PortfolioGrid.jsx` | `PortfolioGrid` | 3D Stacked Card Deck (`.deck-card`) dengan swipe gesture dan switcher mode Grid. |
| `src/components/ProjectCard.jsx` | `ProjectCard` | Lempengan kaca akrilik tebal dengan specular glare 3D, indeks numerik, dan status live demo. |
| `src/components/Testimonials.jsx` | `Testimonials` | Tampilan dashboard akuntansi enterprise dengan angka rolling odometer kinetik. |
| `src/components/Contact.jsx` | `Contact` | Formulir B2B akrilik dengan direct WhatsApp launcher dan validasi aksesibilitas penuh. |
| `src/index.css` & `tailwind.config.cjs` | Styling Tokens | Konfigurasi token kaca akrilik, bayangan kristal, dan utilitas masking gradien. |

---

## 5. Rencana Eksekusi & Quality Gates

Eksekusi akan dilakukan secara bertahap dan sistematis:

1. **Phase 1: Foundation & Primitives (Physics & Lighting)**
   - Memastikan hooks kursor spotlight, synthesizer audio haptics, dan komponen split-text terpasang optimal.
2. **Phase 2: Hero Stage & Capsule HUD Mastery**
   - Menghidupkan panggung Hero dengan tipografi raksasa, rotasi peran teknis, dan counter numerik HUD.
3. **Phase 3: Aero-Bot Living Companion**
   - Mengunci Aero-Bot di sudut kanan bawah dengan mata berkedip (*eye-wink*) dan dialog dinamis.
4. **Phase 4: 3D Stacked Card Deck & Showcase**
   - Mematangkan arsitektur tumpukan kartu 3D dengan rotasi perspektif dan transisi swipe elastis.
5. **Phase 5: Spotlight Services, Marquee Masking & Kinetic Odometer**
   - Memasang border beam laser pada Services dan angka bergulir pada Track Record.
6. **Phase 6: Quality Gate & Visual Polish**
   - Menjalankan `npm run lint` (wajib 0 error dan 0 warning).
   - Menjalankan `npm run build` (wajib sukses meng-compile bundle produksi).
   - Verifikasi langsung melalui browser subagent di resolusi Desktop (1440x900) dan Mobile (390x844).

---

## 6. Definition of Done (DoD)

Proyek dinyatakan **BERHASIL MENCAPAI STANDAR AWWWARDS** apabila:
- [ ] Headline Hero memiliki efek **Split-Text Character Wave Hover** yang membal saat kursor melintas.
- [ ] Panggung Hero bersih dari robot tengah; Aero-Bot berfungsi sebagai **docked companion di pojok kanan bawah** dengan animasi kedip mata dan dialog interaktif.
- [ ] Header tampil sebagai **Floating Capsule HUD** dengan counter section numerik live (`01 / 06 — ABOUT`).
- [ ] Kartu Services memiliki **Spotlight Border Tracing** yang menyala mengikuti posisi kursor.
- [ ] Showcase Proyek memiliki fitur **3D Stacked Card Deck** yang dapat di-swipe dan digeser dengan perspektif fisik.
- [ ] Metrik Track Record bergulir dinamis dari 0 ke target dengan **Kinetic Odometer Counter**.
- [ ] Ticker Skills memiliki **Feathered Edge Gradient Masking** yang pudar mulus di kedua sisi.
- [ ] Tampilan 100% responsif pada viewport mobile 390px tanpa horizontal scrollbar.
- [ ] `npm run lint` menghasilkan **0 error dan 0 warning**.
- [ ] `npm run build` berhasil meng-compile bundle produksi.
- [ ] Terverifikasi secara visual melalui rekaman browser session.

---
*Dokumen ini adalah cetak biru resmi untuk membangun desain standar Awwwards / FWA / ReadCV pada Portofolio Ahmad Ayub Nu'man.*
