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

function generateCopywriterPortfolioHtml() {
    return `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<title>Portofolio Copywriting & Storytelling - Ahmad Ayub Nu'man</title>
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
    font-size: 8.5pt;
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
    border: 2px solid #9b2c2c;
    border-radius: 8px;
    height: 96%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: linear-gradient(180deg, #fffaf0 0%, #fff5f5 100%);
  }
  .badge-tag {
    display: inline-block;
    background: #c53030;
    color: #fff;
    font-size: 8pt;
    font-weight: 700;
    padding: 3px 12px;
    border-radius: 16px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }
  .cover-title {
    font-size: 20pt;
    font-weight: 800;
    color: #742a2a;
    line-height: 1.25;
    margin-top: 12px;
    margin-bottom: 6px;
  }
  .cover-subtitle {
    font-size: 10.5pt;
    color: #c53030;
    font-weight: 600;
    margin-bottom: 15px;
  }
  .cover-quote {
    font-size: 9.5pt;
    color: #4a5568;
    font-style: italic;
    line-height: 1.45;
    text-align: justify;
    border-left: 3px solid #c53030;
    padding-left: 10px;
    margin-bottom: 16px;
    background: #fff;
    padding: 8px 12px;
    border-radius: 4px;
  }
  .cover-author-box {
    background: #fff;
    border: 1px solid #fed7d7;
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
    color: #c53030;
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
    border-bottom: 2px solid #9b2c2c;
    padding-bottom: 6px;
    margin-bottom: 12px;
  }
  .page-header-title {
    font-size: 11pt;
    font-weight: 700;
    color: #742a2a;
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
    padding: 9px 12px;
    margin-bottom: 9px;
  }
  .card-title {
    font-size: 9.2pt;
    font-weight: 700;
    color: #742a2a;
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

  /* Copy Showcase Box */
  .copy-box {
    background: #f7fafc;
    border-left: 3px solid #c53030;
    padding: 8px 10px;
    border-radius: 0 4px 4px 0;
    font-size: 8.2pt;
    line-height: 1.38;
    color: #2d3748;
    margin-top: 4px;
    margin-bottom: 6px;
  }
  .copy-box strong { color: #1a202c; }

  /* Video Script Table */
  table.script-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 7.7pt;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  table.script-table th {
    background: #742a2a;
    color: #fff;
    font-weight: 600;
    text-align: left;
    padding: 5px 6px;
    border: 1px solid #742a2a;
  }
  table.script-table td {
    padding: 4px 6px;
    border: 1px solid #e2e8f0;
    color: #2d3748;
    vertical-align: top;
  }
  table.script-table tr:nth-child(even) {
    background: #fffaf0;
  }

  /* Matrix Table */
  table.matrix-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 7.8pt;
    margin-top: 6px;
    margin-bottom: 6px;
  }
  table.matrix-table th {
    background: #742a2a;
    color: #fff;
    font-weight: 600;
    text-align: left;
    padding: 5px 7px;
    border: 1px solid #742a2a;
  }
  table.matrix-table td {
    padding: 4px 7px;
    border: 1px solid #e2e8f0;
    color: #2d3748;
  }
  table.matrix-table tr:nth-child(even) {
    background: #fffaf0;
  }

  .grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
  .badge-pill {
    display: inline-block;
    padding: 2px 7px;
    border-radius: 10px;
    font-size: 7pt;
    font-weight: 700;
    text-transform: uppercase;
  }
  .badge-red { background: #fff5f5; color: #c53030; border: 1px solid #feb2b2; }
  .badge-green { background: #f0fff4; color: #276749; border: 1px solid #c6f6d5; }
  .badge-blue { background: #ebf8ff; color: #2b6cb0; border: 1px solid #bee3f8; }
</style>
</head>
<body>

  <!-- ================= PAGE 1: COVER ================= -->
  <div class="page">
    <div class="cover-container">
      <div>
        <span class="badge-tag">Work Sample & Portofolio Karya</span>
        <h1 class="cover-title">Portofolio Copywriting, Storytelling & Konten Persuasif</h1>
        <div class="cover-subtitle">Headline & Hook 3 Detik • Caption Media Sosial • Naskah Video Pendek • Materi Iklan Ads • AI-Assisted Ideation</div>
        
        <div class="cover-quote">
          "Cerita yang baik bisa menggerakkan banyak hati. Di era banjir informasi, tugas copywriter bukan sekadar merangkai kata-kata indah, melainkan membangun koneksi emosional yang tulus, menyentuh titik keresahan terdalam audiens, dan menggerakkan mereka mengambil aksi nyata dengan sukarela."
        </div>

        <div class="card" style="margin-top: 10px; border-color: #cbd5e0;">
          <div class="card-title">📌 Pemetaan Karya terhadap Kebutuhan Posisi Copywriter</div>
          <table class="matrix-table">
            <thead>
              <tr>
                <th style="width: 25%;">Kualifikasi Lowongan</th>
                <th style="width: 35%;">Pendekatan Teknis Penulisan</th>
                <th style="width: 40%;">Sampel dalam Dokumen Ini</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1. Menulis Persuasif & Menjual</strong></td>
                <td>Penerapan formula AIDA (Attention, Interest, Desire, Action) dan PAS (Problem, Agitate, Solve) yang berorientasi konversi.</td>
                <td>Showcase Headline, Ad Copy berbayar Meta Ads, dan Call-to-Action teruji di halaman 2 & 4.</td>
              </tr>
              <tr>
                <td><strong>2. Caption, Headline & Script Video</strong></td>
                <td>Penyusunan hook 3 detik pembuka, pacing ritme visual dan audio video pendek, serta caption long-form bernarasi.</td>
                <td>Naskah Video Reels/TikTok (dengan visual cues & voiceover) serta caption inspiratif di halaman 2 & 3.</td>
              </tr>
              <tr>
                <td><strong>3. Storytelling & Target Audiens</strong></td>
                <td>Empathetic storytelling bernilai humanis, edukatif, dan menyentuh nilai kebaikan sosial/keluarga/keumatan.</td>
                <td>Studi Kasus Narasi Kisah Perjuangan Santri & Kampanye Solidaritas Sosial di halaman 3.</td>
              </tr>
              <tr>
                <td><strong>4. AI Ideation & Target Deadline</strong></td>
                <td>Pemanfaatan AI generatif (Claude, Gemini, ChatGPT) sebagai akselerator riset angle, variasi hook, dan konsistensi deadline.</td>
                <td>Metodologi AI-Assisted Copywriting & Content Workflow di halaman 4.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="cover-author-box">
        <div class="author-name">Ahmad Ayub Nu'man, S.H.</div>
        <div class="author-role">Copywriter & Narrative Content Strategist</div>
        <div class="author-meta">
          📍 Domisili: Cilacap, Jawa Tengah (Tersedia untuk Remote/WFH maupun Onsite)<br>
          📞 WhatsApp / Telepon: +62 895-3491-77555 &nbsp;•&nbsp; ✉️ Email: ayb.n1994@gmail.com<br>
          🌐 Portofolio Online: <a href="https://portfolio-seven-theta-bovx80a70x.vercel.app/" style="color: #c53030; text-decoration: none; font-weight: 600;">portfolio-seven-theta-bovx80a70x.vercel.app</a>
        </div>
      </div>
    </div>
  </div>

  <!-- ================= PAGE 2: HEADLINE & HOOK BANK ================= -->
  <div class="page">
    <div class="page-header">
      <div class="page-header-title">Showcase 1: Headline Crafting & Hook 3 Detik (AIDA & PAS)</div>
      <div class="page-header-meta">Thumb-Stopping Power • High Engagement</div>
    </div>

    <div class="card">
      <div class="card-title">
        <span>⚡ Seni Memikat Pembaca dalam 3 Detik Pertama</span>
        <span class="badge-pill badge-red">Attention Grabbing</span>
      </div>
      <p class="card-desc">
        Headline bukan sekadar judul, melainkan "iklan untuk membaca kalimat berikutnya". Berikut adalah koleksi formula headline dan hook 3 detik yang dirancang untuk berbagai objektif kampanye konten:
      </p>

      <div class="grid-2">
        <div>
          <div class="card-title" style="font-size: 8.5pt; color: #2d3748;">❤️ Angle Emosional & Storytelling (Kebaikan / Sosial)</div>
          <div class="copy-box">
            <strong>Hook 1:</strong> "Di balik tas usang ini, ada doa seorang ibu yang tak pernah putus di sepertiga malam."<br>
            <span style="font-size: 7.3pt; color: #718096;">Formula: Visual Contrast + Emotional Trigger</span>
          </div>
          <div class="copy-box">
            <strong>Hook 2:</strong> "Bukan tentang seberapa banyak yang kita beri, tapi seberapa dalam kita peduli."<br>
            <span style="font-size: 7.3pt; color: #718096;">Formula: Perspective Shift (Paradox)</span>
          </div>
          <div class="copy-box">
            <strong>Hook 3:</strong> "Pernahkah kamu merasa lelah berbuat baik? Baca ini sebelum kamu menyerah."<br>
            <span style="font-size: 7.3pt; color: #718096;">Formula: Relatable Vulnerability + Open Loop</span>
          </div>
        </div>

        <div>
          <div class="card-title" style="font-size: 8.5pt; color: #2d3748;">🎯 Angle Solutif & Direct-Response (Edukasi / Penjualan)</div>
          <div class="copy-box">
            <strong>Hook 1:</strong> "3 Kesalahan fatal yang bikin kontenmu sepi peminat (walau sudah posting tiap hari)."<br>
            <span style="font-size: 7.3pt; color: #718096;">Formula: Pain Agitation + Specific Number</span>
          </div>
          <div class="copy-box">
            <strong>Hook 2:</strong> "Jangan beli buku ini kalau kamu belum siap mengubah cara berpikirmu tentang uang."<br>
            <span style="font-size: 7.3pt; color: #718096;">Formula: Reverse Psychology + High Value Curiosity</span>
          </div>
          <div class="copy-box">
            <strong>Hook 3:</strong> "Cara tenang mengelola bisnis tanpa harus begadang tiap malam merekap laporan."<br>
            <span style="font-size: 7.3pt; color: #718096;">Formula: Desired State without Pain (Without Formula)</span>
          </div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-title">🔬 Studi Kasus A/B Testing Headline: Mengapa Versi B Lebih Menghasilkan Aksi?</div>
      <table class="matrix-table">
        <thead>
          <tr>
            <th style="width: 25%;">Versi A (Standar / Kurang Kuat)</th>
            <th style="width: 35%;">Versi B (Copywriting Persuasif)</th>
            <th style="width: 40%;">Analisis Psikologi Audiens</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>"Mari bantu anak-anak yatim penghafal Quran di pelosok."</td>
            <td><strong>"Sepasang sepatu bolong ini menempuh 5 km jalan berbatu tiap subuh demi melafalkan ayat suci."</strong></td>
            <td>Versi A terlalu umum dan terasa seperti ajakan kaku. Versi B menyajikan detail sensorik konkret (*sepatu bolong, 5 km, jalan berbatu*), membangkitkan empati seketika sebelum mengajak berdonasi.</td>
          </tr>
          <tr>
            <td>"Aplikasi pesantren terbaik untuk kemudahan wali santri."</td>
            <td><strong>"Tenangnya hati orang tua saat tahu kabar, uang saku, dan senyum anak di pondok selalu terpantau aman."</strong></td>
            <td>Versi A fokus pada fitur (*aplikasi terbaik*). Versi B fokus pada *emotional benefit* orang tua (*ketenangan hati, kasih sayang, rasa aman*).</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="card" style="margin-top: 4px; background: #fffaf0; border-color: #feebc8;">
      <div class="card-title" style="color: #c53030;">💡 Prinsip Utama: "Ide -> Proses -> Dampak"</div>
      <p class="card-desc" style="color: #742a2a; margin-bottom: 0;">
        Setiap baris kalimat pertama harus memiliki satu misi tunggal: membuat audiens berhenti scrolling, menaruh perhatian, dan melanjutkan membaca baris kedua dengan rasa ingin tahu yang alami.
      </p>
    </div>
  </div>

  <!-- ================= PAGE 3: SCRIPT VIDEO & STORYTELLING ================= -->
  <div class="page">
    <div class="page-header">
      <div class="page-header-title">Showcase 2: Naskah Video Pendek (TikTok/Reels) & Storytelling</div>
      <div class="page-header-meta">Format Naskah Produksi • Hook, Story & CTA</div>
    </div>

    <div class="card">
      <div class="card-title">
        <span>🎬 Naskah Video 1: "Langkah Kecil yang Menggerakkan Hati" (Durasi: 45-60 Detik)</span>
        <span class="badge-pill badge-red">Video Script</span>
      </div>
      <p class="card-desc">
        Naskah konten video pendek berformat storytelling humanis yang memadukan narasi audio, arahan visual, dan teks layar (*on-screen text*) untuk membangkitkan rasa syukur dan kepedulian:
      </p>

      <table class="script-table">
        <thead>
          <tr>
            <th style="width: 14%;">Waktu</th>
            <th style="width: 30%;">Visual Cue & Adegan</th>
            <th style="width: 36%;">Narasi Suara (Voiceover / VO)</th>
            <th style="width: 20%;">On-Screen Text (OST)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>00:00 - 00:03</strong><br><span style="font-size: 6.8pt; color: #c53030;">(The 3s Hook)</span></td>
            <td>Close-up tangan renta mengikat tali sepatu usang anak kecil di teras sederhana waktu fajar. Kamera perlahan naik.</td>
            <td>"Pernah nggak kamu bertanya-tanya, apa yang membuat seorang anak tetap tersenyum meski hidupnya serba sederhana?"</td>
            <td><strong>"Pernah mikir ini nggak? 🥺"</strong></td>
          </tr>
          <tr>
            <td><strong>00:04 - 00:18</strong><br><span style="font-size: 6.8pt; color: #718096;">(Story Bridge)</span></td>
            <td>Anak kecil berjalan menyusuri pematang sawah menuju madrasah/masjid. Sesekali menyapa tetangga dengan senyum lebar.</td>
            <td>"Bagi Rayhan, bahagia itu bukan tentang mainan mahal. Bahagia itu sesederhana bisa duduk mengaji bersama teman-temannya di ujung desa ini."</td>
            <td>"Bukan tentang apa yang kita punya..."</td>
          </tr>
          <tr>
            <td><strong>00:19 - 00:35</strong><br><span style="font-size: 6.8pt; color: #718096;">(Emotional Climax)</span></td>
            <td>Rayhan membuka Al-Quran yang halamannya sudah dijilid rapi dengan lakban. Wajahnya khusyuk melantunkan ayat suci.</td>
            <td>"Di matanya, tak ada keluh kesah. Yang ada hanya mimpi besar: kelak ingin menghadiahkan mahkota kemuliaan untuk ayah dan ibunya di surga."</td>
            <td><strong>"Mimpi sederhana, tekad luar biasa."</strong></td>
          </tr>
          <tr>
            <td><strong>00:36 - 00:50</strong><br><span style="font-size: 6.8pt; color: #276749;">(The Call to Action)</span></td>
            <td>Kamera menyorot suasana kelas madrasah yang penuh tawa. Text CTA muncul jelas di layar bawah.</td>
            <td>"Satu cerita baik hari ini bisa menggerakkan ribuan hati. Yuk, jadi bagian dari senyum anak-anak pejuang mimpi ini. Klik link di bio untuk kirim kebaikanmu hari ini."</td>
            <td><strong>"Jadilah jembatan mimpi mereka 👉 Link di Bio"</strong></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="card">
      <div class="card-title">📖 Contoh Caption Instagram: Storytelling yang Membangun Koneksi Nyata</div>
      <div class="copy-box">
        <strong>[Headline / First Line]</strong><br>
        Berapa harga sebuah ketenangan bagi seorang ibu yang menitipkan buah hatinya di pondok pesantren?<br><br>
        <strong>[Body Storytelling]</strong><br>
        Minggu pertama melepas anak ke pesantren selalu jadi minggu terpanjang bagi setiap orang tua. Di rumah, piring makan yang biasa terisi kini tersisa kosong. Setiap kali adzan Maghrib berkumandang, hati ibu berbisik: <em>"Sudah makankah dia di sana? Sedang sehatkah hari ini?"</em><br><br>
        Bagi seorang ibu, cinta bukan sekadar pelukan hangat setiap hari, melainkan keberanian untuk merelakan anaknya dididik menjadi pribadi tangguh dan berakhlak mulia.<br><br>
        Itulah mengapa, kabar sekecil apa pun tentang senyum santri, kegiatan mengaji, dan kesehatan mereka adalah oase penyejuk yang tak ternilai bagi orang tua di rumah.<br><br>
        <strong>[Call to Action / Closing]</strong><br>
        Tag ayah dan ibu tercinta yang selalu mendoakan langkahmu tanpa lelah. Semoga setiap doa mereka berbuah keberkahan yang tak bertepi. 🤲✨
      </div>
    </div>
  </div>

  <!-- ================= PAGE 4: AD COPY & AI IDEATION ================= -->
  <div class="page">
    <div class="page-header">
      <div class="page-header-title">Showcase 3: Materi Iklan (Meta Ads) & AI-Assisted Ideation</div>
      <div class="page-header-meta">High Conversion Copy • Modern Content Workflow</div>
    </div>

    <div class="card">
      <div class="card-title">
        <span>📢 Materi Iklan Berbayar: Meta Ads (Instagram & Facebook Ads)</span>
        <span class="badge-pill badge-red">Direct-Response Ad</span>
      </div>
      <p class="card-desc">
        Format materi iklan digital terstruktur lengkap dengan Primary Text, Headline, Description, dan Call-to-Action yang dirancang untuk mengonversi audiens dingin (*cold audience*) menjadi tindakan:
      </p>

      <div class="grid-2">
        <div class="copy-box" style="margin-top: 0;">
          <strong>🎯 Kampanye: Edukasi & Donasi Program Sosial</strong><br><br>
          <strong>[Primary Text]:</strong><br>
          "Uang 50 ribu hari ini mungkin hanya cukup untuk dua cangkir kopi kekinian. Tapi bagi adik-adik di pedalaman, 50 ribu berarti paket buku tulis dan nutrisi untuk satu bulan belajar.<br><br>
          Jangan tunggu kaya untuk berbuat baik, karena kebaikan yang tulus tak pernah diukur dari besarnya angka, melainkan dari keikhlasan hati.<br><br>
          Mari sisihkan secangkir kopimu hari ini untuk menyalakan pelita harapan mereka."<br><br>
          <strong>[Headline Iklan]:</strong> Ubah 50 Ribumu Jadi Senyum Abadi Anak Pelosok.<br>
          <strong>[Description]:</strong> 100% Penyaluran Amanah & Terverifikasi.<br>
          <strong>[CTA Button]:</strong> <em>Donasi Sekarang</em>
        </div>

        <div class="copy-box" style="margin-top: 0;">
          <strong>🎯 Kampanye: Penawaran Produk / Solusi Usaha</strong><br><br>
          <strong>[Primary Text]:</strong><br>
          "Masih sering pusing akhir bulan karena uang kas toko nggak pernah cocok sama sisa stok di gudang?<br><br>
          Bukan karena kamu nggak teliti, tapi mencatat stok manual di nota kertas memang rawan hilang dan salah hitung.<br><br>
          Saatnya beralih ke pembukuan otomatis yang bisa dipantau langsung lewat HP. Catatan rapi, stok akurat, dan waktu istirahatmu bersama keluarga tak lagi terganggu rekap kasir."<br><br>
          <strong>[Headline Iklan]:</strong> Pantau Penjualan Toko dari HP, Bebas Pusing Selisih Stok!<br>
          <strong>[Description]:</strong> Coba Gratis 14 Hari Tanpa Komitmen Kartu Kredit.<br>
          <strong>[CTA Button]:</strong> <em>Daftar Sekarang</em>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-title">🤖 Alur Kerja Modern: "AI-Assisted Ideation, Human-Touch Execution"</div>
      <p class="card-desc">
        Sebagai copywriter modern, teknologi AI (Claude, Gemini, ChatGPT) diperlakukan sebagai <strong>asisten riset dan pengganda ide kreatif</strong> tanpa menghilangkan sentuhan empati manusia:
      </p>

      <table class="matrix-table">
        <thead>
          <tr>
            <th style="width: 25%;">Tahapan Workflow</th>
            <th style="width: 35%;">Peran AI Tools (Akselerasi)</th>
            <th style="width: 40%;">Sentuhan Manusia (Human Touch)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>1. Riset & Brainstorming Angle</strong></td>
            <td>Memetakan 20+ variasi sudut pandang audiens, menggali keresahan tersembunyi (*unspoken desires*), dan mencari tren terkini dalam hitungan detik.</td>
            <td>Memilih 2-3 angle yang paling selaras dengan identitas brand, keaslian nilai moral, dan kehangatan emosi manusia.</td>
          </tr>
          <tr>
            <td><strong>2. Drafting & Variasi Hook</strong></td>
            <td>Menghasilkan 10 variasi headline dengan berbagai formula (AIDA, PAS, Curiosity Hook) untuk bahan A/B testing konten.</td>
            <td>Menyaring dan menyempurnakan diksi agar terdengar alami, santun, tidak hiperbolis, dan enak dibaca (*rhythm & cadence*).</td>
          </tr>
          <tr>
            <td><strong>3. Proofreading & Deadline</strong></td>
            <td>Mengecek kesalahan ketik (typo), kalimat berbelit-belit, dan memastikan kepatuhan terhadap batasan karakter platform.</td>
            <td>Menjaga ketepatan rasa bahasa (*taste*), memastikan emosi cerita tersampaikan dengan tulus, dan menuntaskan brief tepat waktu.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="card" style="margin-top: 6px; background: #fffaf0; border-color: #feebc8;">
      <div class="card-title" style="color: #c53030;">🤝 Komitmen Kerja: Kreatif, Berkarakter & Tepat Waktu</div>
      <p class="card-desc" style="color: #742a2a; margin-bottom: 0;">
        Saya siap berkolaborasi erat dengan tim kreatif, content creator, desainer grafis, dan digital marketer untuk menerjemahkan gagasan menjadi pesan-pesan bermakna yang tidak hanya disukai audiens, tetapi juga menggerakkan dampak nyata bagi pertumbuhan perusahaan.
      </p>
    </div>
  </div>

</body>
</html>`;
}

async function main() {
    console.log('=== Generating Tailored Copywriter Portfolio Showcase ===');

    const tempHtmlPath = path.join(rootDir, 'scripts', 'temp_copywriter_portfolio.html');
    const pdfPath = path.join(outputDir, 'Ahmad-Ayub-Numan-Portofolio-Copywriting.pdf');

    // 1. Generate HTML
    const html = generateCopywriterPortfolioHtml();
    fs.writeFileSync(tempHtmlPath, html, 'utf-8');

    // 2. Generate PDF
    buildPdf(tempHtmlPath, pdfPath);

    // 3. Clean temp HTML
    if (fs.existsSync(tempHtmlPath)) {
        fs.unlinkSync(tempHtmlPath);
    }

    // 4. Copy to public/cv/ for web access
    try {
        fs.copyFileSync(pdfPath, path.join(publicCvDir, path.basename(pdfPath)));
        console.log(`✓ Copied to public/cv/ for live web access`);
    } catch (e) {
        console.warn('Note copying to public/cv:', e.message);
    }

    console.log('\n=== Success! Copywriter Portfolio Showcase PDF generated successfully ===');
}

main().catch(err => {
    console.error('Error generating Copywriter portfolio:', err);
    process.exit(1);
});
