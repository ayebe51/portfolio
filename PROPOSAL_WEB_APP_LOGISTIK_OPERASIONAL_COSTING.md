# Dokumen Panduan & Naskah Proposal Resmi
## Proyek: Web App Operasional & Job Costing Logistik Kontainer (Ekspor & Domestik)
**Platform:** Projects.co.id | **Client Budget:** Rp 35.000.000 – Rp 50.000.000  
**Pengusul:** Ahmad Ayub Nu'man (Full-Stack Software Engineer • Cilacap, Jawa Tengah / WIB)  
**Kontak:** +62 895 3491 77555 | ayb.n1994@gmail.com | [Portfolio Website](https://portfolio-seven-theta-bovx80a70x.vercel.app/)

---

### 📂 Berkas Proposal PDF yang Telah Dibuat (Siap Dilampirkan)

File PDF resmi 3 halaman telah di-generate dan tersimpan di:
1. 📁 **`D:\apss-source\Portfolio\public\quotation\PROPOSAL_LOGISTIK_OPERASIONAL_COSTING_FINAL.pdf`** *(Gunakan file ini agar bebas dari cache browser)*
2. 📁 **`D:\apss-source\Portfolio\public\quotation\Proposal-Web-App-Logistik-Operasional-Costing-Ahmad-Ayub-Numan.pdf`**

---

### 📋 Pesan Bid Ringkas (Tinggal Salin ke Kolom Penawaran Projects.co.id)

```text
Halo Tim / Owner Proyek,

Salam kenal, saya Ahmad Ayub Nu'man, Full-Stack Software Engineer berbasis di Cilacap, Jawa Tengah (Zona Waktu WIB). Saya membaca dengan saksama kebutuhan web app operasional dan job costing logistik kontainer (ekspor & domestik) Anda.

Sangat tepat bahwa sistem ini dirancang dengan konsep "Single Source of Truth by Job Number" untuk menghubungkan alur yang saat ini tersebar di Excel, WhatsApp, dan software akuntansi. Kami juga sangat mengapresiasi bahwa Anda telah menyiapkan alur proses dan work rules per role, sehingga setelah penandatanganan NDA, pengembangan dapat langsung dieksekusi secara cepat tanpa proses discovery yang bertele-tele.

Berikut tanggapan lengkap sesuai 7 poin yang Anda minta:

1. Total Harga — Model "Scope (One Project, One Total Price)":
   • Paket Core Scope (Foundation, Operasional Kontainer, Costing + AI OCR Invoice + Cash Advance Uang Jalan, Management Dashboard): Rp 39.500.000 (Satu harga total pasti / lump-sum turnkey tanpa biaya tersembunyi).
   • Paket All-In Complete (Core Scope + Integrasi CSV Software Akuntansi + Dokumentasi SOP & Pelatihan Staf + Garansi 60 Hari): Rp 46.500.000.
   • Modul Opsional Terpisah: Integrasi CSV Akuntansi (Rp 3,5 jt), Customer Tracking Portal (Rp 5 jt), Training Staf & SOP (Rp 2 jt).
   *Catatan Out of Scope: Kami mengonfirmasi bahwa pembayaran/transfer dana, e-Faktur pajak resmi pemerintah, dan aplikasi mobile native berada di luar lingkup.

2. Total Durasi & Jadwal Kerja:
   • Total Durasi Realistis: 9 – 10 Minggu (Terbagi dalam 5 Sprint terstruktur dengan acceptance testing bertahap). Waktu ini dialokasikan secara matang untuk perancangan skema data kontainer/segel/kapal, kalibrasi AI OCR pada sampel invoice vendor lokal Indonesia, serta pendampingan UAT bersama tim operasional Anda.

3. Rekomendasi Tech Stack & Biaya Bulanan (Standar Produksi Berbayar / Non-Gratisan):
   • Stack: React 19/Next.js (TypeScript) + Laravel 12/NestJS + PostgreSQL 16 (ACID compliance) + Dedicated S3 Storage + Claude 3.5 Sonnet / GPT-4o Vision API.
   • Estimasi OPEX Server Resmi: ~Rp 950.000 – Rp 1.450.000 / bulan (mencakup Cloud VPS 4GB NVMe, automated daily disaster recovery backup, object storage S3 berbayar, transactional email SMTP resmi, dan kuota API AI Vision).

4. Pemanfaatan AI & Jaminan Kualitas (Testing & Code Review):
   • AI (Cursor/Claude) digunakan untuk akselerasi scaffolding kode dan prompt engineering ekstraksi invoice vendor lokal (THC, Demurrage, Lift on/off, Ongkos Truk).
   • Kualitas dijaga ketat melalui: Automated Testing (unit & feature tests Pest/Jest pada alur approval dan kalkulasi biaya), Code Review & Static Analysis (ESLint, TypeScript strict, PHPStan), Money Value Objects untuk akurasi desimal, dan database constraints ketat.

5. Garansi & Pemeliharaan:
   • Garansi Bug Free: 30 Hari (Core) / 60 Hari (All-In) pasca Go-Live gratis 100%.
   • Pemeliharaan Pasca Garansi: Pilihan On-demand (Rp 250.000/jam) atau Retainer SLA (Rp 1.500.000/bln mencakup monitoring server, audit backup, dan 6 jam enhancement/bln).

6. Portofolio Sistem Sejenis (ERP, TMS, Workflow, Operational Finance):
   • Enterprise Supply Chain & 3-Way Matching Procurement (Kiro ERP): https://inventory-pos-hazel.vercel.app (Arsitektur pencocokan PO vs Surat Jalan vs Invoice Vendor—identik dengan Job Costing).
   • Operational Gate Dispatch & Checkpoint Platform (Koneksi ERP Engine): https://admin.koneksisantri.tech (Otorisasi gate-in/out berbasis QR identik dengan alur Depo Kontainer & Truk).
   • Document Compliance & Governance Engine (SIMMACI): https://github.com/ayebe51/simmaci (Pengelolaan siklus dokumen terpusat dengan 1.822 automated test cases).

7. Kepemilikan & Legalitas:
   • 100% Source code, database, dan data operasional sepenuhnya menjadi milik perusahaan Anda.
   • Sepenuhnya siap menandatangani NDA dan menggunakan pembayaran bertahap berbasis milestone escrow Projects.co.id.

Dokumen proposal teknis dan komersial resmi lengkap (PDF 3 halaman) telah saya lampirkan pada penawaran ini. Saya siap untuk diskusi lanjutan atau Google Meet kapan pun Anda berkenan.

Terima kasih atas waktu dan pertimbangannya.
```

---

### 📊 Bedah Kesesuaian 7 Poin Narasi Owner

#### 1. Scope (One Project, One Total Price)
* **Paket Core Scope (Rp 39.500.000):**
  Mengikat seluruh modul wajib dalam satu harga borongan:
  * **Foundation:** Autentikasi, Multi-Role RBAC, Master Data (Vendor, Customer, Rate, Cost Type), Job Numbering Engine, Audit Log, Backup.
  * **Operations:** Order Intake, Booking Kapal (Feeder/Mother), Depo & Truk (Nomor Kontainer 20'/40'/HQ & Seal No), Pelacakan Dokumen Pabean (PEB, BL, DO), dan Papan *"Ready to Depart / Ready to Bill"*.
  * **Costing & AI:** Matriks Planned vs Actual per job, AI OCR ekstraksi kuitansi/invoice vendor lokal, approval selisih (variance), penguncian finansial job (*job closing lock*), dan pencatatan *Cash Advance* uang jalan.
  * **Management:** Dashboard margin %, tren biaya vendor, AI variance summary, ekspor laporan Excel, dan impor data master awal.
* **Paket All-In Complete (Rp 46.500.000):**
  Core Scope + Integrasi CSV Software Akuntansi + Dokumentasi SOP & Pelatihan Staf + Garansi 60 Hari.
* **Modul Tambahan Terpisah:**
  * Integrasi CSV Akuntansi: Rp 3.500.000
  * Customer Tracking Portal: Rp 5.000.000
  * Pelatihan Staf & SOP: Rp 2.000.000
* **Konfirmasi Out of Scope:** Tidak mencakup payment gateway/transfer dana, e-Faktur resmi, dan native mobile app.

#### 2. Durasi Kerja Realistis: 9 – 10 Minggu (5 Sprint)
* **Sprint 1 (Minggu 1–2):** Finalisasi proses pasca-NDA, skema database, RBAC, Master Data, & Job Number Engine.
* **Sprint 2 (Minggu 3–4):** Booking kapal, alokasi armada truk & depo, kontainer & segel, dokumen pabean, dan visual Kanban board.
* **Sprint 3 (Minggu 5–6):** Planned vs Actual costing, alur approval selisih, cash advance, dan job closing lock.
* **Sprint 4 (Minggu 7–8):** Integrasi AI Vision OCR invoice vendor lokal, tuning prompt, dashboard analitik, dan pelaporan.
* **Sprint 5 (Minggu 9–10):** Migrasi data awal Excel, UAT bersama staf operasional riil, bug-fixing, deployment VPS, dan handover.

#### 3. Tech Stack & Riset Biaya Hosting Bulanan (Standar Produksi)
* **Stack:** React 19 / Next.js (TypeScript) + Laravel 12 / NestJS + PostgreSQL 16 (ACID) + Dedicated S3 + Claude 3.5 Sonnet / GPT-4o Vision API.
* **Riset Biaya OPEX Bulanan (Non-Gratisan / SLA Berbayar):**
  * Cloud VPS 4GB NVMe (Biznet GIO / IDCloudHost): Rp 350.000 – Rp 550.000 / bln.
  * Automated Daily Snapshot & Off-Site Disaster Recovery Backup: Rp 100.000 – Rp 150.000 / bln.
  * Enterprise S3 Object Storage (Kapasitas puluhan GB arsip dokumen): Rp 120.000 – Rp 200.000 / bln.
  * Transactional Email Gateway resmi (Resend / Brevo SMTP): Rp 150.000 – Rp 250.000 / bln.
  * Kuota AI Document Extraction API (~500–1.000 invoice/bln): Rp 230.000 – Rp 300.000 / bln.
  * **Total: ~Rp 950.000 – Rp 1.450.000 / bulan.**

#### 4. Pemanfaatan AI, Testing & Code Review
* **AI:** Cursor & Claude 3.5 Sonnet untuk mempercepat penulisan boilerplate kode dan prompt tuning untuk invoice logistik Indonesia.
* **Testing:** Pest/Jest automated unit & feature tests untuk menguji alur approval, perhitungan margin, dan state machine status job.
* **Code Review:** Pengecekan statis (ESLint, TypeScript strict mode, PHPStan) untuk menjamin kode rapi, bebas bug, dan mudah dirawat jangka panjang.

#### 5. Garansi & Maintenance
* Garansi perbaikan bug gratis 30 hari (Core) atau 60 hari (All-In).
* Maintenance pasca garansi: On-demand Rp 250.000/jam atau Retainer Bulanan Rp 1.500.000/bln (termasuk 6 jam kerja/bln + audit backup).

#### 6. Portofolio Terarah
1. **Enterprise Supply Chain & Operational Finance (Kiro ERP):** [inventory-pos-hazel.vercel.app](https://inventory-pos-hazel.vercel.app) (3-way matching pengadaan barang vs surat jalan vs invoice vendor).
2. **Operational Fleet & Gate Dispatch Platform (Koneksi ERP Engine):** [admin.koneksisantri.tech](https://admin.koneksisantri.tech) (Otorisasi gate-in/gate-out QR dan ledger transaksi tertutup).
3. **High-Volume Document Compliance & Governance (SIMMACI):** [github.com/ayebe51/simmaci](https://github.com/ayebe51/simmaci) (Siklus hidup dokumen terpusat dengan 1.822 automated test cases).

#### 7. Kepemilikan & Syarat
* 100% hak cipta kode sumber dan database diserahkan penuh kepada klien.
* Bersedia menandatangani NDA dan menerima pembayaran bertahap berbasis milestone escrow.
