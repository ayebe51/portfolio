import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execFileSync } from 'child_process';

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

function findBrowserExecutable() {
    const candidates = [
        process.env.CHROME_BIN,
        process.env.EDGE_BIN,
        'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
        'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
        'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
        'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
        'C:\\Users\\' + (process.env.USERNAME || 'user') + '\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe'
    ].filter(Boolean);

    for (const p of candidates) {
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

    const fileUrl = 'file:///' + path.resolve(htmlPath).replace(/\\/g, '/');

    const args = [
        '--headless',
        '--disable-gpu',
        '--no-pdf-header-footer',
        `--print-to-pdf=${pdfPath}`,
        fileUrl
    ];

    execFileSync(browserPath, args, { stdio: 'pipe' });
    console.log(`✓ Generated PDF: ${path.basename(pdfPath)}`);
}

function generateSysAdminPortfolioHtml() {
    return `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<title>Portofolio Rekayasa Infrastruktur & Linux SysAdmin - Ahmad Ayub Nu'man</title>
<style>
  @page {
    size: A4 portrait;
    margin: 10mm 12mm 10mm 12mm;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    color: #2d3748;
    background: #fff;
    font-size: 8.6pt;
    line-height: 1.4;
  }
  .page {
    page-break-after: always;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .page:last-child {
    page-break-after: avoid;
  }

  /* Cover Page */
  .cover-container {
    padding: 24px 20px;
    border: 2px solid #1a365d;
    border-radius: 8px;
    height: 96%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: linear-gradient(180deg, #f7fafc 0%, #edf2f7 100%);
  }
  .badge-tag {
    display: inline-block;
    background: #1a365d;
    color: #fff;
    font-size: 8pt;
    font-weight: 700;
    padding: 3px 10px;
    border-radius: 16px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }
  .cover-title {
    font-size: 20pt;
    font-weight: 800;
    color: #1a365d;
    line-height: 1.25;
    margin-top: 12px;
    margin-bottom: 6px;
  }
  .cover-subtitle {
    font-size: 10.5pt;
    color: #2b6cb0;
    font-weight: 600;
    margin-bottom: 15px;
  }
  .cover-desc {
    font-size: 8.8pt;
    color: #4a5568;
    line-height: 1.45;
    text-align: justify;
    border-left: 3px solid #2b6cb0;
    padding-left: 10px;
    margin-bottom: 18px;
  }
  .cover-author-box {
    background: #fff;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    padding: 12px 16px;
    margin-top: 10px;
  }
  .author-name {
    font-size: 12pt;
    font-weight: 700;
    color: #1a202c;
  }
  .author-role {
    font-size: 9pt;
    color: #2b6cb0;
    font-weight: 600;
    margin-bottom: 6px;
  }
  .author-meta {
    font-size: 8pt;
    color: #4a5568;
    line-height: 1.5;
  }

  /* Inner Pages */
  .page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #1a365d;
    padding-bottom: 6px;
    margin-bottom: 12px;
  }
  .page-header-title {
    font-size: 11pt;
    font-weight: 700;
    color: #1a365d;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  .page-header-meta {
    font-size: 8pt;
    color: #718096;
    font-weight: 600;
  }

  /* Cards */
  .card {
    background: #fff;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    padding: 10px 12px;
    margin-bottom: 10px;
  }
  .card-title {
    font-size: 9.3pt;
    font-weight: 700;
    color: #1a365d;
    margin-bottom: 4px;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .card-desc {
    font-size: 8.3pt;
    color: #4a5568;
    margin-bottom: 6px;
    line-height: 1.35;
    text-align: justify;
  }

  /* Code block */
  .code-box {
    background: #1a202c;
    color: #e2e8f0;
    font-family: "Consolas", "Courier New", monospace;
    font-size: 7.4pt;
    padding: 8px 10px;
    border-radius: 5px;
    line-height: 1.35;
    margin: 5px 0;
    overflow-x: hidden;
  }
  .code-box .comment { color: #718096; font-style: italic; }
  .code-box .cmd { color: #63b3ed; font-weight: bold; }
  .code-box .str { color: #68d391; }
  .code-box .var { color: #f6ad55; }

  /* Tables */
  table.matrix-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 7.8pt;
    margin-top: 6px;
    margin-bottom: 6px;
  }
  table.matrix-table th {
    background: #1a365d;
    color: #fff;
    font-weight: 600;
    text-align: left;
    padding: 5px 7px;
    border: 1px solid #1a365d;
  }
  table.matrix-table td {
    padding: 4px 7px;
    border: 1px solid #e2e8f0;
    color: #2d3748;
  }
  table.matrix-table tr:nth-child(even) {
    background: #f7fafc;
  }

  .grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
  ul.clean-bullets {
    margin-left: 14px;
    margin-top: 3px;
    margin-bottom: 4px;
  }
  ul.clean-bullets li {
    font-size: 8.2pt;
    color: #2d3748;
    margin-bottom: 2px;
    line-height: 1.32;
    text-align: justify;
  }
  .badge-pill {
    display: inline-block;
    padding: 2px 7px;
    border-radius: 10px;
    font-size: 7pt;
    font-weight: 700;
    text-transform: uppercase;
  }
  .badge-blue { background: #ebf8ff; color: #2b6cb0; border: 1px solid #bee3f8; }
  .badge-green { background: #f0fff4; color: #276749; border: 1px solid #c6f6d5; }
  .badge-amber { background: #fffaf0; color: #9c4221; border: 1px solid #feebc8; }
</style>
</head>
<body>

  <!-- ================= PAGE 1: COVER ================= -->
  <div class="page">
    <div class="cover-container">
      <div>
        <span class="badge-tag">Work Sample & Portofolio Teknis</span>
        <h1 class="cover-title">Portofolio Rekayasa Infrastruktur, Linux SysAdmin & AI Operations</h1>
        <div class="cover-subtitle">Administrasi Server Linux, Kontainerisasi Docker, Otomasi Bash Deployment, Manajemen Database, Mitigasi Insiden & AI-Assisted Operations</div>
        
        <p class="cover-desc">
          Dokumen ini disusun sebagai <strong>bukti kerja teknis (work sample)</strong> untuk posisi <strong>System Administrator (SysAdmin) di PT Puskomedia Indonesia Kreatif (Purwokerto)</strong>. Dokumen ini mendemonstrasikan rekam jejak praktis pelamar dalam mengelola server produksi Linux (Ubuntu/Debian), arsitektur zero-downtime deployment, reverse proxy Nginx & SSL hardening, pengelolaan database PostgreSQL/MySQL skala ratusan instansi, serta pemanfaatan aktif <strong>Artificial Intelligence (AI)</strong> untuk mempercepat analisis log insiden dan scripting operasional harian.
        </p>

        <div class="card" style="margin-top: 15px; border-color: #cbd5e0;">
          <div class="card-title">📌 Pemetaan Kualifikasi terhadap Kebutuhan Puskomedia</div>
          <table class="matrix-table">
            <thead>
              <tr>
                <th style="width: 28%;">Kebutuhan Puskomedia</th>
                <th style="width: 32%;">Bukti Implementasi Teknis</th>
                <th style="width: 40%;">Dampak Terukur di Lingkungan Produksi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1. Bisa Pakai AI</strong><br><span style="font-size: 7pt; color: #718096;">Troubleshooting & Produktivitas</span></td>
                <td>Pemanfaatan Agentic AI (LLMs, Antigravity, Claude, Gemini) untuk Root Cause Analysis error log, generate skrip bash, & validasi testing.</td>
                <td>Mempercepat diagnosa anomali server dari hitungan jam ke sub-menit; 1.822 automated test cases (100% PASS).</td>
              </tr>
              <tr>
                <td><strong>2. Administrasi Server & Hosting</strong><br><span style="font-size: 7pt; color: #718096;">Linux, Nginx, Docker, VPS</span></td>
                <td>Manajemen VPS produksi SIMMACI & Koneksi Santri: Docker Compose, Nginx Reverse Proxy, certbot SSL/TLS, MinIO S3 object storage.</td>
                <td>Menjamin uptime dan stabilitas akses terpusat bagi 270+ lembaga pendidikan, 2.000+ staf, dan 17.000+ data peserta didik.</td>
              </tr>
              <tr>
                <td><strong>3. Siap Onsite di Purwokerto</strong><br><span style="font-size: 7pt; color: #718096;">Domisili & Mobilitas</span></td>
                <td>Berdomisili di Cilacap (tetangga terdekat Banyumas/Purwokerto). Akses transportasi lancar menuju kantor operasional Teluk.</td>
                <td>Kesiapan penuh untuk hadir onsite harian, berkolaborasi langsung dengan tim dev & teknis jaringan Puskonet.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="cover-author-box">
        <div class="author-name">Ahmad Ayub Nu'man</div>
        <div class="author-role">System Administrator & Infrastructure Automation Engineer</div>
        <div class="author-meta">
          📍 Domisili: Cilacap, Jawa Tengah (Siap Penempatan Onsite Purwokerto)<br>
          📞 WhatsApp / Telepon: +62 895-3491-77555 &nbsp;•&nbsp; ✉️ Email: ayb.n1994@gmail.com<br>
          🌐 Portofolio Online: <a href="https://portfolio-seven-theta-bovx80a70x.vercel.app/" style="color: #2b6cb0; text-decoration: none; font-weight: 600;">portfolio-seven-theta-bovx80a70x.vercel.app</a> &nbsp;•&nbsp; 🐙 GitHub: <a href="https://github.com/ayebe51" style="color: #2b6cb0; text-decoration: none; font-weight: 600;">github.com/ayebe51</a>
        </div>
      </div>
    </div>
  </div>

  <!-- ================= PAGE 2: STUDI KASUS 1 ================= -->
  <div class="page">
    <div class="page-header">
      <div class="page-header-title">Studi Kasus 1: Otomasi Deployment & Server Patching Berkelanjutan</div>
      <div class="page-header-meta">Sistem SIMMACI • 270+ Lembaga Pendidikan</div>
    </div>

    <div class="card">
      <div class="card-title">
        <span>🚀 Konteks Produksi: Skrip Pemeliharaan Darurat & Zero-Downtime Patch</span>
        <span class="badge-pill badge-green">Production Ready</span>
      </div>
      <p class="card-desc">
        Pada platform <strong>SIMMACI (LP Ma'arif NU Cilacap)</strong>, pembaruan keamanan runtime PHP, migrasi skema database, atau rilis fitur baru tidak boleh memutus proses administrasi ribuan guru di siang hari. Untuk itu, dirancang skrip automasi berbasis bash (<code>deploy-php-patch.sh</code>) yang mengorkestrasi 5 tahapan rilis aman secara otomatis:
      </p>
      
      <div class="code-box">
<span class="comment">#!/bin/bash</span>
<span class="cmd">set</span> -e
<span class="var">TIMESTAMP</span>=$(<span class="cmd">date</span> +%Y%m%d_%H%M%S)
<span class="var">BACKUP_DIR</span>=<span class="str">"/root/backup_pre_patch_\${TIMESTAMP}"</span>

<span class="comment"># 1. Automated Pre-Deployment Snapshot Database</span>
<span class="cmd">mkdir</span> -p <span class="str">"$BACKUP_DIR"</span>
<span class="var">DB_CONTAINER</span>=$(<span class="cmd">docker ps</span> --filter <span class="str">"status=running"</span> --format <span class="str">"{{.Names}}"</span> | <span class="cmd">grep</span> -iE <span class="str">'db|postgres'</span> | <span class="cmd">head</span> -n 1)
<span class="cmd">docker exec</span> <span class="str">"$DB_CONTAINER"</span> pg_dump -U sim_user -d sim_maarif | <span class="cmd">gzip</span> > <span class="str">"\${BACKUP_DIR}/sim_maarif_backup.sql.gz"</span>

<span class="comment"># 2. Synchronize Git Branch & Pull Assets</span>
<span class="cmd">git fetch</span> origin &amp;&amp; <span class="cmd">git pull</span> origin main

<span class="comment"># 3. Rebuild Image Multi-stage Tanpa Cache</span>
<span class="cmd">docker compose</span> -f docker-compose.coolify.yml build --pull --no-cache backend

<span class="comment"># 4. Graceful Recreate Service (Backend, Queue Workers, Cron Scheduler)</span>
<span class="cmd">docker compose</span> -f docker-compose.coolify.yml up -d --force-recreate backend queue scheduler

<span class="comment"># 5. Automated Post-Deployment Verification (Runtime & Health Check)</span>
<span class="var">PHP_VER</span>=$(<span class="cmd">docker exec</span> <span class="str">"$BACKEND_C"</span> php -v | <span class="cmd">head</span> -n 1)
<span class="cmd">echo</span> <span class="str">"✓ Runtime Aktif: $PHP_VER"</span>
      </div>
    </div>

    <div class="grid-2">
      <div class="card">
        <div class="card-title">🛡️ Safety Guard & Rollback Ready</div>
        <ul class="clean-bullets">
          <li><strong>Opsi Rollback Instan:</strong> Setiap eksekusi skrip selalu mendahului dengan kompresi gzip snapshot database sebelum container diutak-atik. Jika terjadi error, database dapat di-restore dalam &lt; 60 detik.</li>
          <li><strong>Error Trapping (set -e):</strong> Skrip langsung berhenti jika terdapat kode return error pada tahap build atau fetch, mencegah container rusak naik ke production.</li>
          <li><strong>Queue & Scheduler Isolation:</strong> Worker antrean latar belakang dan cron scheduler di-restart sinkron guna mencegah race-condition job lama.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title">⚙️ Kontainerisasi Docker & Coolify</div>
        <ul class="clean-bullets">
          <li><strong>Multi-Container Orchestration:</strong> Memisahkan Nginx reverse proxy, Laravel API backend, PostgreSQL 16 database, Redis cache, dan MinIO object storage.</li>
          <li><strong>Resource Limiting:</strong> Membatasi konsumsi RAM dan CPU per kontainer untuk mencegah server freeze saat terjadi batch export SK massal (ribuan dokumen PDF/Word).</li>
          <li><strong>Persistent Storage:</strong> Volume terisolasi untuk data database dan berkas unggahan pengguna.</li>
        </ul>
      </div>
    </div>

    <div class="card" style="margin-top: 5px;">
      <div class="card-title">📊 Nilai Relevansi bagi Puskomedia (Server Hosting Desa & Aplikasi Terpusat)</div>
      <p class="card-desc">
        Pola otomasi ini sangat relevan untuk pengelolaan ratusan website desa (*Sistem Informasi Desa*) dan aplikasi sekolah yang di-hosting Puskomedia. Skrip pemeliharaan terpusat memungkinkan tim SysAdmin memperbarui ratusan instance secara berkala dan konsisten tanpa perlu konfigurasi manual satu per satu.
      </p>
    </div>
  </div>

  <!-- ================= PAGE 3: STUDI KASUS 2 ================= -->
  <div class="page">
    <div class="page-header">
      <div class="page-header-title">Studi Kasus 2: Nginx Reverse Proxy, SSL, & Server Hardening</div>
      <div class="page-header-meta">Keamanan Jaringan & Penanganan Akses</div>
    </div>

    <div class="card">
      <div class="card-title">
        <span>🔒 Arsitektur Nginx Reverse Proxy & HTTP Security Headers</span>
        <span class="badge-pill badge-blue">Security Hardened</span>
      </div>
      <p class="card-desc">
        Mengonfigurasi Nginx sebagai gerbang utama (reverse proxy) yang menangani terminasi SSL, optimasi kompresi HTTP/2, serta proteksi keamanan berlapis:
      </p>

      <div class="code-box">
<span class="comment"># Konfigurasi Rate Limiting & SSL Hardening pada Nginx</span>
limit_req_zone <span class="var">$binary_remote_addr</span> zone=login_limit:10m rate=5r/m;
limit_conn_zone <span class="var">$binary_remote_addr</span> zone=addr_limit:10m;

server {
    listen 443 ssl http2;
    server_name portal.lembaga.id;

    <span class="comment"># SSL Protocols & Ciphers Modern</span>
    ssl_certificate /etc/letsencrypt/live/portal.lembaga.id/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/portal.lembaga.id/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;

    <span class="comment"># Security Headers Hardening</span>
    add_header X-Frame-Options "DENY" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;

    <span class="comment"># Proteksi Brute-Force Endpoint Login API</span>
    location /api/v1/auth/login {
        limit_req zone=login_limit burst=3 nodelay;
        proxy_pass http://backend_upstream;
    }
}
      </div>
    </div>

    <div class="grid-2">
      <div class="card">
        <div class="card-title">🚨 Emergency Lockdown Protocol</div>
        <p class="card-desc">
          Membangun mekanisme <strong>Emergency Lockdown</strong> pada sistem SIMMACI (tersedia di komponen <code>EmergencyLockdownScreen.tsx</code>) yang dapat diaktifkan dalam hitungan detik ketika terdeteksi indikasi anomali keamanan:
        </p>
        <ul class="clean-bullets">
          <li><strong>Session Kill:</strong> Memutus paksa seluruh token sesi aktif pengguna selain role Superadmin.</li>
          <li><strong>Read-Only Mode:</strong> Memblokir semua mutasi data (POST, PUT, DELETE) di level gateway API untuk mencegah manipulasi database.</li>
          <li><strong>Audit Trail Isolation:</strong> Mengunci log akses untuk kebutuhan forensik dan investigasi insiden.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title">🛡️ Server OS Hardening & Jaringan</div>
        <ul class="clean-bullets">
          <li><strong>Firewall UFW:</strong> Menerapkan kebijakan *default deny*, hanya membuka port 80 (HTTP), 443 (HTTPS), dan custom port SSH dengan autentikasi berbasis Public Key (menonaktifkan password login).</li>
          <li><strong>Fail2ban Integration:</strong> Mengisolasi otomatis alamat IP yang terdeteksi melakukan port-scanning atau gagal login SSH berulang kali.</li>
          <li><strong>DNS & Domain Propagation:</strong> Terbiasa mengelola record DNS (A, CNAME, MX, TXT/SPF/DKIM) untuk integritas pengiriman email dan reputasi domain institusi.</li>
        </ul>
      </div>
    </div>

    <div class="card" style="margin-top: 5px;">
      <div class="card-title">🌐 Konektivitas Jaringan & ISP (Relevansi Puskonet)</div>
      <p class="card-desc">
        Memiliki pemahaman praktis mengenai alur jaringan client-to-server, routing TCP/IP, NAT, dan troubleshooting latency/packet loss. Pengalaman ini mendukung kebutuhan pemeliharaan infrastruktur jaringan internet desa (Puskonet) yang dikembangkan oleh Puskomedia.
      </p>
    </div>
  </div>

  <!-- ================= PAGE 4: STUDI KASUS 3 ================= -->
  <div class="page">
    <div class="page-header">
      <div class="page-header-title">Studi Kasus 3: AI-Assisted Server Ops & Manajemen Database</div>
      <div class="page-header-meta">Implementasi Syarat Utama: "Bisa Pakai AI"</div>
    </div>

    <div class="card">
      <div class="card-title">
        <span>🤖 Implementasi Syarat: "Bisa Pakai AI" dalam Rutinitas SysAdmin</span>
        <span class="badge-pill badge-blue">AI-Assisted Operations</span>
      </div>
      <p class="card-desc">
        AI bukan sekadar alat obrolan, melainkan <strong>pengganda produktivitas harian (force multiplier)</strong> yang diterapkan secara disiplin dalam rekayasa dan operasional sistem:
      </p>
      <table class="matrix-table">
        <thead>
          <tr>
            <th style="width: 28%;">Alur Kerja Operasional</th>
            <th style="width: 32%;">Teknik Pemanfaatan AI</th>
            <th style="width: 40%;">Efisiensi & Keunggulan Nyata</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Log Triage & Incident RCA</strong></td>
            <td>Memasukkan error stack trace (Nginx log, Docker logs, Postgres query log) ke LLM untuk mendeteksi akar masalah dan CVE terkait secara instan.</td>
            <td>Waktu diagnosa masalah sistem turun drastis; anomali locking tabel atau memory leak terdeteksi sebelum menyebabkan server crash.</td>
          </tr>
          <tr>
            <td><strong>Scripting & Automasi Server</strong></td>
            <td>Prompt-driven drafting untuk skrip Bash kompleks, regex filter, dan template konfigurasi Docker Compose/Nginx.</td>
            <td>Menghasilkan skrip pemeliharaan yang memiliki validasi input ketat, penanganan error (fail-safe), dan portabel antar server Linux.</td>
          </tr>
          <tr>
            <td><strong>Quality Assurance & Testing</strong></td>
            <td>Membangun skenario pengujian komprehensif menggunakan Agentic AI IDE (Antigravity, Kiro, Claude).</td>
            <td>Menghasilkan 1.822 test cases otomatis (100% pass rate) pada SIMMACI, menjamin update sistem tidak merusak fitur eksisting.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="grid-2">
      <div class="card">
        <div class="card-title">🗄️ Database Administration (PostgreSQL & MySQL)</div>
        <ul class="clean-bullets">
          <li><strong>Pencadangan Terjadwal (Automated Cron):</strong> Menjalankan dump berkala dengan rotasi penyimpanan untuk efisiensi kapasitas disk.</li>
          <li><strong>Query Optimization:</strong> Menganalisis slow query melalui EXPLAIN ANALYZE dan menambahkan composite indexing untuk menekan penggunaan CPU server.</li>
          <li><strong>Integrasi Cloud Object Storage:</strong> Mengonfigurasi S3-compatible storage (MinIO) untuk memisahkan beban penyimpanan aset statis/dokumen dari disk utama server.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title">🤝 Kesiapan Kerja Onsite di Purwokerto</div>
        <ul class="clean-bullets">
          <li><strong>Lokasi Geografis Ideal:</strong> Berdomisili di Cilacap, hanya berjarak singkat ke Purwokerto. Sangat siap hadir onsite di kantor operasional Puskomedia (kawasan Teluk, Purwokerto Selatan).</li>
          <li><strong>Etika Kerja Amanah:</strong> Berlatar belakang pendidikan tinggi Islam (Muslim) dengan prinsip integritas tinggi, penjagaan kerahasiaan data server, dan dedikasi pemecahan masalah teknis.</li>
          <li><strong>Kolaboratif & Komunikatif:</strong> Terbiasa berkoordinasi lintas tim pengembang, teknisi lapangan, dan pengguna akhir.</li>
        </ul>
      </div>
    </div>

    <div class="card" style="margin-top: 10px; background: #ebf8ff; border-color: #bee3f8;">
      <div class="card-title" style="color: #2b6cb0;">🚀 Komitmen Kontribusi untuk Puskomedia</div>
      <p class="card-desc" style="color: #2c5282;">
        Saya siap mendedikasikan keahlian administrasi Linux, otomasi kontainer Docker, penanganan jaringan, dan produktivitas berbasis AI untuk menjaga infrastruktur Puskomedia tetap andal, aman, dan berkinerja tinggi dalam melayani ekosistem desa dan masyarakat luas.
      </p>
    </div>
  </div>

</body>
</html>`;
}

async function main() {
    console.log('=== Generating Tailored SysAdmin Portfolio Showcase ===');

    const tempHtmlPath = path.join(rootDir, 'scripts', 'temp_sysadmin_portfolio.html');
    const puskomediaPdfPath = path.join(outputDir, 'Ahmad-Ayub-Numan-Portofolio-SysAdmin-Puskomedia.pdf');
    const defaultPdfPath = path.join(outputDir, 'Ahmad-Ayub-Numan-Portofolio-SysAdmin.pdf');

    // 1. Generate HTML
    const html = generateSysAdminPortfolioHtml();
    fs.writeFileSync(tempHtmlPath, html, 'utf-8');

    // 2. Generate PDF
    buildPdf(tempHtmlPath, puskomediaPdfPath);

    // 3. Clean temp HTML
    if (fs.existsSync(tempHtmlPath)) {
        fs.unlinkSync(tempHtmlPath);
    }

    // 4. Create Clean Alias
    try {
        fs.copyFileSync(puskomediaPdfPath, defaultPdfPath);
        console.log(`✓ Alias created: ${path.basename(defaultPdfPath)}`);
    } catch (e) {
        console.warn('Note copying alias:', e.message);
    }

    // 5. Copy to public/cv/ for web access
    try {
        fs.copyFileSync(puskomediaPdfPath, path.join(publicCvDir, path.basename(puskomediaPdfPath)));
        fs.copyFileSync(defaultPdfPath, path.join(publicCvDir, path.basename(defaultPdfPath)));
        console.log(`✓ Copied to public/cv/ for live web access`);
    } catch (e) {
        console.warn('Note copying to public/cv:', e.message);
    }

    console.log('\n=== Success! SysAdmin Portfolio Showcase PDF generated successfully ===');
}

main().catch(err => {
    console.error('Error generating SysAdmin portfolio:', err);
    process.exit(1);
});
