import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execFileSync } from 'child_process';
import {
    Document,
    Packer,
    Paragraph,
    TextRun,
    AlignmentType,
    BorderStyle
} from 'docx';

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

// =========================================================================
// DATA CV COPYWRITER & NARRATIVE CONTENT STRATEGIST
// =========================================================================
export const copywriterCvData = {
    lang: "id",
    personal: {
        name: "Ahmad Ayub Nu'man, S.H.",
        title: "Copywriter & Narrative Content Strategist",
        subtitle: "Persuasive Copywriting • Storytelling & Video Scripts • Social Media Captions & Headlines • Ads Copy • AI-Assisted Ideation",
        location: "Cilacap, Jawa Tengah (Siap Kerja Remote / WFH maupun Onsite)",
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
    summary: "Copywriter & Narrative Content Strategist dengan latar belakang Sarjana Hukum (S.H. — Hukum Ekonomi Syariah) dan pengalaman 2+ tahun dalam merangkai narasi persuasif, komunikasi kelembagaan, serta penulisan konten digital yang menggerakkan empati dan aksi nyata bagi audiens. Terbiasa memproduksi materi copywriting komprehensif: headline berdaya pikat tinggi (hook 3 detik), caption media sosial bernarasi storytelling yang menyentuh hati, naskah video pendek (TikTok/Reels/Shorts dengan visual cue), hingga materi iklan digital (Meta Ads) menggunakan formula AIDA dan PAS. Memiliki kepekaan mendalam terhadap psikologi target pasar, tata Bahasa Indonesia yang baku dan luwes, serta disiplin tinggi dalam bekerja dengan target dan deadline ketat. Mahir memanfaatkan generative AI (ChatGPT, Claude, Gemini) untuk akselerasi riset angle konten kreatif, variasi copy A/B testing, dan brainstorming ide secara produktif.",
    skills: {
        copywritingFormulas: [
            "Formula Copywriting Persuasif (AIDA, PAS, BAB, FAB)",
            "Direct-Response Copywriting & Clear Call-to-Action (CTA)",
            "Headline Crafting & Hook 3 Detik Pembuka Konten",
            "Penyusunan Sudut Pandang (Angle) Menjual & Unik"
        ],
        contentFormats: [
            "Caption Media Sosial (Instagram, TikTok, Facebook, LinkedIn)",
            "Naskah Video Pendek (Reels / TikTok / Shorts dengan Visual Cues)",
            "Materi Iklan Berbayar (Meta Ads, Instagram Ads, Banner Copy)",
            "Storytelling Kampanye Sosial, Edukasi & Dakwah Komunitas"
        ],
        storytellingAndEmpathy: [
            "Empathetic & Emotional Storytelling (Cerita yang Menggerakkan Hati)",
            "Konsistensi Tone of Voice & Karakter Brand (Brand Persona)",
            "Penguasaan Bahasa Indonesia Baku, Luwes & Santun (PUEBI/EYD)",
            "Penyampaian Pesan Edukatif, Nilai Islami & Kemanusiaan"
        ],
        audienceResearch: [
            "Pemetaan Persona Target Audiens & Demografi",
            "Identifikasi Pain Points, Emosi & Kebutuhan Pembaca",
            "Riset Tren Konten Media Sosial & Pola Interaksi (Engagement)",
            "Penyusunan Content Calendar & Manajemen Jadwal Publikasi"
        ],
        aiAndProductivity: [
            "AI-Assisted Brainstorming & Ideation (Claude, Gemini, ChatGPT)",
            "Eksplorasi Variasi Copywriting Cepat (A/B Hook Testing)",
            "Penyuntingan (Editing), Proofreading & Eliminasi Kata Mubazir",
            "Adaptasi Cepat Terhadap Brief Kreatif & Manajemen Deadline"
        ]
    },
    labels: {
        professionalSummary: "Ringkasan Profesional",
        technicalSkills: "Keahlian Copywriting & Konten (Core Competencies)",
        professionalExperience: "Pengalaman Kerja & Penulisan Komunikasi",
        selectedProjects: "Studi Kasus & Portofolio Karya Copywriting",
        education: "Pendidikan & Kualifikasi"
    },
    experience: [
        {
            role: "Lead Communication, Content Strategy & Documentation",
            subtitle: "Strategi Komunikasi Publik, Storytelling Edukasi, & Narasi Kelembagaan",
            company: "LP Ma'arif NU Cilacap",
            location: "Cilacap, Jawa Tengah",
            period: "2024 – Sekarang",
            responsibilities: [
                "Menyusun strategi narasi komunikasi publik, edukasi kelembagaan, dan pesan persuasif yang menjembatani hubungan dengan 270+ sekolah/madrasah, 2.000+ staf pendidik, dan 17.000+ peserta didik beserta wali murid.",
                "Memproduksi copywriting panduan sistem dan konten instruksional yang ringkas, humanis, dan mudah dipahami oleh pengguna lintas usia, memangkas kebingungan operasional lebih dari 70%.",
                "Menulis narasi penggalangan solidaritas, publikasi program kelembagaan, dan kampanye sosial dengan teknik storytelling yang menyentuh hati dan menggerakkan partisipasi aktif warga.",
                "Mengintegrasikan AI generatif (Claude, Gemini, ChatGPT) untuk brainstorming variasi angle pesan, proofreading cepat, dan memastikan keselarasan tone of voice yang amanah, santun, dan meyakinkan.",
                "Bekerja dengan disiplin tinggi memenuhi tenggat waktu (deadline) rilis berkas dokumen dan publikasi berkala secara tepat waktu."
            ]
        },
        {
            role: "Creative Copywriter & Digital Communication Specialist",
            subtitle: "Copywriting Kampanye Platform, Naskah Notifikasi, & Storytelling Pesantren",
            company: "Koneksi Santri (Ekosistem Pesantren & Portal Wali)",
            location: "Jawa Tengah (Hybrid)",
            period: "2024 – 2025",
            responsibilities: [
                "Merancang materi copywriting promosi dan edukasi untuk kampanye digital ekosistem pesantren yang ditujukan kepada wali santri dan pengasuh pondok, membangun kepercayaan pada adopsi teknologi.",
                "Menulis naskah pesan interaksi otomatis dan notifikasi WhatsApp yang santun, hangat, dan solutif untuk pengingat pembayaran SPP, laporan kantin nontunai, dan kabar perkembangan santri.",
                "Menyusun teks penawaran (landing page & materi publikasi) yang menonjolkan manfaat transparansi keuangan dan kedekatan emosional orang tua dengan anak di pondok.",
                "Merancang ide konten video pendek dan caption Instagram yang berfokus pada keseharian santri, nilai-nilai moralitas, dan pesan inspiratif yang menghasilkan engagement tinggi."
            ]
        }
    ],
    projects: [
        {
            name: "Kampanye Storytelling: Narasi Solidaritas & Edukasi Masa Depan Santri",
            format: "Social Media Storytelling, Short Video Scripts (Reels/TikTok), & Ad Copy",
            highlights: [
                "Merancang rangkaian naskah video pendek (Hook - Story - CTA) bertema perjuangan orang tua memondokkan anak, menghasilkan sentimen positif dan interaksi emosional tinggi.",
                "Menulis caption Instagram berbasis formula PAS (Problem-Agitate-Solve) yang persuasif dalam mengedukasi transparansi keuangan pesantren tanpa kesan menggurui."
            ]
        },
        {
            name: "Copywriting Peluncuran & Edukasi Sistem Tata Kelola SIMMACI",
            format: "Landing Page Copy, Guideline Microcopy, & Pengumuman Massal",
            highlights: [
                "Menyusun pesan komunikasi persuasif ke 270+ lembaga untuk beralih dari administrasi manual ke platform digital terpusat secara sukarela dan antusias.",
                "Membuat microcopy dan headline yang ramah pengguna, mempermudah adopsi teknologi oleh tenaga pendidik senior di berbagai daerah pelosok."
            ]
        },
        {
            name: "Meta Ads & Promotional Copy: Digitalisasi & Solusi Manajemen Retail",
            format: "Direct-Response Ad Copy, Hook A/B Testing, & Benefit-Driven Taglines",
            highlights: [
                "Menulis variasi copy iklan berbayar (Meta Ads) dengan fokus pada solusi sakit kepala pembukuan toko, mengonversi ketertarikan menjadi demo penggunaan aplikasi."
            ]
        }
    ],
    education: [
        {
            degree: "Sarjana Hukum (S.H.) — Hukum Ekonomi Syariah",
            institution: "STAI At-Tahdzib Jombang",
            location: "Jombang, Jawa Timur, Indonesia",
            graduationYear: "Lulus 2019",
            notes: "Memberikan fondasi penalaran logis, ketajaman analisis retorika argumentatif, penguasaan diksi santun dan etis, serta pemahaman mendalam tentang psikologi sosial masyarakat Muslim."
        }
    ]
};

// =========================================================================
// GENERATOR HTML CV (A4 CRISP ATS COMPLIANT)
// =========================================================================
function generateCopywriterHtml(data) {
    const { personal, summary, skills, labels, experience, projects, education } = data;

    const skillCategories = [
        { label: "Formula Copywriting", val: skills.copywritingFormulas.join(', ') },
        { label: "Format Konten Kreatif", val: skills.contentFormats.join(', ') },
        { label: "Storytelling & Narasi", val: skills.storytellingAndEmpathy.join(', ') },
        { label: "Riset & Target Audiens", val: skills.audienceResearch.join(', ') },
        { label: "AI & Produktivitas", val: skills.aiAndProductivity.join(', ') }
    ];

    return `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<title>Curriculum Vitae - ${personal.name} - Copywriter</title>
<style>
  @page {
    size: A4 portrait;
    margin: 10mm 12mm 10mm 12mm;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    color: #2d3748;
    background: #fff;
    font-size: 8.5pt;
    line-height: 1.35;
  }
  .header {
    text-align: center;
    border-bottom: 2px solid #1a365d;
    padding-bottom: 6px;
    margin-bottom: 8px;
  }
  .name {
    font-size: 17pt;
    font-weight: 800;
    color: #1a365d;
    letter-spacing: 0.5px;
    margin-bottom: 2px;
  }
  .role-title {
    font-size: 10.5pt;
    font-weight: 700;
    color: #c53030;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    margin-bottom: 2px;
  }
  .subtitle {
    font-size: 8.5pt;
    color: #4a5568;
    font-style: italic;
    margin-bottom: 4px;
  }
  .contact-bar {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 6px;
    font-size: 8pt;
    color: #4a5568;
  }
  .contact-bar span.sep { color: #cbd5e0; }
  .contact-bar a { color: #2b6cb0; text-decoration: none; font-weight: 600; }

  .section {
    margin-bottom: 7px;
    page-break-inside: avoid;
  }
  .section-title {
    font-size: 9.2pt;
    font-weight: 700;
    color: #1a365d;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-bottom: 1px solid #cbd5e0;
    padding-bottom: 2px;
    margin-bottom: 5px;
  }
  .summary-text {
    font-size: 8.5pt;
    line-height: 1.38;
    color: #2d3748;
    text-align: justify;
  }
  .skills-grid {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }
  .skill-row {
    display: flex;
    font-size: 8.3pt;
    line-height: 1.3;
  }
  .skill-category {
    font-weight: 700;
    color: #1a365d;
    width: 170px;
    flex-shrink: 0;
  }
  .skill-items {
    color: #4a5568;
    flex-grow: 1;
  }
  .item-block {
    margin-bottom: 6px;
  }
  .item-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 1px;
  }
  .item-title {
    font-size: 9pt;
    font-weight: 700;
    color: #1a202c;
  }
  .item-meta {
    font-size: 8pt;
    color: #4a5568;
    font-weight: 600;
  }
  .item-submeta {
    font-size: 8pt;
    color: #2b6cb0;
    margin-bottom: 2px;
    font-weight: 600;
  }
  ul.bullets {
    margin-left: 14px;
    margin-top: 2px;
  }
  ul.bullets li {
    font-size: 8.3pt;
    color: #2d3748;
    margin-bottom: 2px;
    line-height: 1.32;
    text-align: justify;
  }
  .edu-notes {
    font-size: 8pt;
    color: #4a5568;
    margin-top: 2px;
    line-height: 1.3;
    text-align: justify;
  }
  .portfolio-callout {
    background: #fff5f5;
    border-left: 3px solid #c53030;
    padding: 5px 8px;
    margin-top: 5px;
    font-size: 8pt;
    color: #9b2c2c;
  }
</style>
</head>
<body>
  <div class="header">
    <div class="name">${personal.name}</div>
    <div class="role-title">${personal.title}</div>
    <div class="subtitle">${personal.subtitle}</div>
    <div class="contact-bar">
      <span>${personal.location}</span>
      <span class="sep">•</span>
      <a href="mailto:${personal.email}">${personal.email}</a>
      <span class="sep">•</span>
      <a href="${personal.whatsappUrl}">${personal.phone}</a>
      <span class="sep">•</span>
      <a href="${personal.linkedin}">${personal.linkedinDisplay}</a>
      <span class="sep">•</span>
      <a href="${personal.portfolio}">${personal.portfolioDisplay}</a>
    </div>
  </div>

  <div class="section">
    <div class="section-title">${labels.professionalSummary}</div>
    <p class="summary-text">${summary}</p>
  </div>

  <div class="section">
    <div class="section-title">${labels.technicalSkills}</div>
    <div class="skills-grid">
      ${skillCategories.map(sc => `
        <div class="skill-row">
          <span class="skill-category">${sc.label}:</span>
          <span class="skill-items">${sc.val}</span>
        </div>
      `).join('')}
    </div>
  </div>

  <div class="section">
    <div class="section-title">${labels.professionalExperience}</div>
    ${experience.map(exp => `
      <div class="item-block">
        <div class="item-header">
          <span class="item-title">${exp.role}</span>
          <span class="item-meta">${exp.period}</span>
        </div>
        <div class="item-submeta">${exp.company} • ${exp.subtitle} (${exp.location})</div>
        <ul class="bullets">
          ${exp.responsibilities.map(r => `<li>${r}</li>`).join('')}
        </ul>
      </div>
    `).join('')}
  </div>

  <div class="section">
    <div class="section-title">${labels.selectedProjects}</div>
    ${projects.map(proj => `
      <div class="item-block">
        <div class="item-header">
          <span class="item-title">${proj.name}</span>
        </div>
        <div class="item-submeta" style="color: #4a5568; font-weight: normal; font-style: italic;">Format Karya: ${proj.format}</div>
        <ul class="bullets">
          ${proj.highlights.map(h => `<li>${h}</li>`).join('')}
        </ul>
      </div>
    `).join('')}
  </div>

  <div class="section">
    <div class="section-title">${labels.education}</div>
    ${education.map(edu => `
      <div class="item-block">
        <div class="item-header">
          <span class="item-title">${edu.degree} — ${edu.institution}</span>
          <span class="item-meta">${edu.graduationYear}</span>
        </div>
        <div class="item-submeta">${edu.location}</div>
        <p class="edu-notes">${edu.notes}</p>
      </div>
    `).join('')}
  </div>

  <div class="portfolio-callout">
    <strong>Lampiran Portofolio Tulisan & Copywriting:</strong> Berkas dokumen Portofolio Karya Teknis (Headline, Caption Storytelling, Naskah Video Pendek TikTok/Reels, dan Ad Copy Meta Ads) dilampirkan bersama dokumen CV ini sebagai bukti kompetensi penulisan nyata.
  </div>
</body>
</html>`;
}

// =========================================================================
// GENERATOR DOCX CV COPYWRITER
// =========================================================================
async function buildCopywriterDocx(data, docxPath) {
    const { personal, summary, skills, experience, projects, education, labels } = data;

    const createSectionHeading = (title) => {
        return new Paragraph({
            spacing: { before: 180, after: 60 },
            border: {
                bottom: {
                    color: "1A365D",
                    space: 4,
                    style: BorderStyle.SINGLE,
                    size: 12
                }
            },
            children: [
                new TextRun({
                    text: title.toUpperCase(),
                    bold: true,
                    size: 20,
                    color: "1A365D"
                })
            ]
        });
    };

    const docChildren = [
        new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 20 },
            children: [
                new TextRun({ text: personal.name, bold: true, size: 28, color: "1A365D" })
            ]
        }),
        new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 20 },
            children: [
                new TextRun({ text: personal.title.toUpperCase(), bold: true, size: 20, color: "C53030" })
            ]
        }),
        new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 40 },
            children: [
                new TextRun({ text: personal.subtitle, italics: true, size: 16, color: "4A5568" })
            ]
        }),
        new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 120 },
            children: [
                new TextRun({ text: `${personal.location}  •  ${personal.email}  •  ${personal.phone}  •  LinkedIn: ${personal.linkedinDisplay}  •  Portfolio: ${personal.portfolioDisplay}`, size: 15, color: "4A5568" })
            ]
        }),

        // Summary
        createSectionHeading(labels.professionalSummary),
        new Paragraph({
            alignment: AlignmentType.JUSTIFIED,
            spacing: { after: 80 },
            children: [
                new TextRun({ text: summary, size: 16, color: "2D3748" })
            ]
        }),

        // Skills
        createSectionHeading(labels.technicalSkills),
        new Paragraph({
            spacing: { after: 25 },
            children: [
                new TextRun({ text: "Formula Copywriting: ", bold: true, size: 16, color: "1A365D" }),
                new TextRun({ text: skills.copywritingFormulas.join(', '), size: 16, color: "4A5568" })
            ]
        }),
        new Paragraph({
            spacing: { after: 25 },
            children: [
                new TextRun({ text: "Format Konten Kreatif: ", bold: true, size: 16, color: "1A365D" }),
                new TextRun({ text: skills.contentFormats.join(', '), size: 16, color: "4A5568" })
            ]
        }),
        new Paragraph({
            spacing: { after: 25 },
            children: [
                new TextRun({ text: "Storytelling & Narasi: ", bold: true, size: 16, color: "1A365D" }),
                new TextRun({ text: skills.storytellingAndEmpathy.join(', '), size: 16, color: "4A5568" })
            ]
        }),
        new Paragraph({
            spacing: { after: 25 },
            children: [
                new TextRun({ text: "Riset & Target Audiens: ", bold: true, size: 16, color: "1A365D" }),
                new TextRun({ text: skills.audienceResearch.join(', '), size: 16, color: "4A5568" })
            ]
        }),
        new Paragraph({
            spacing: { after: 80 },
            children: [
                new TextRun({ text: "AI & Produktivitas: ", bold: true, size: 16, color: "1A365D" }),
                new TextRun({ text: skills.aiAndProductivity.join(', '), size: 16, color: "4A5568" })
            ]
        }),

        // Experience
        createSectionHeading(labels.professionalExperience)
    ];

    experience.forEach(exp => {
        docChildren.push(
            new Paragraph({
                spacing: { before: 80, after: 20 },
                children: [
                    new TextRun({ text: exp.role, bold: true, size: 18, color: "1A202C" }),
                    new TextRun({ text: `  (${exp.period})`, bold: true, size: 16, color: "4A5568" })
                ]
            }),
            new Paragraph({
                spacing: { after: 40 },
                children: [
                    new TextRun({ text: `${exp.company} • ${exp.subtitle} (${exp.location})`, italics: true, size: 15, color: "2B6CB0" })
                ]
            })
        );

        exp.responsibilities.forEach(resp => {
            docChildren.push(
                new Paragraph({
                    bullet: { level: 0 },
                    spacing: { after: 20 },
                    children: [
                        new TextRun({ text: resp, size: 15, color: "2D3748" })
                    ]
                })
            );
        });
    });

    // Projects
    docChildren.push(createSectionHeading(labels.selectedProjects));
    projects.forEach(proj => {
        docChildren.push(
            new Paragraph({
                spacing: { before: 80, after: 20 },
                children: [
                    new TextRun({ text: proj.name, bold: true, size: 17, color: "1A202C" })
                ]
            }),
            new Paragraph({
                spacing: { after: 40 },
                children: [
                    new TextRun({ text: `Format: ${proj.format}`, italics: true, size: 14, color: "4A5568" })
                ]
            })
        );

        proj.highlights.forEach(h => {
            docChildren.push(
                new Paragraph({
                    bullet: { level: 0 },
                    spacing: { after: 20 },
                    children: [
                        new TextRun({ text: h, size: 15, color: "2D3748" })
                    ]
                })
            );
        });
    });

    // Education
    docChildren.push(createSectionHeading(labels.education));
    education.forEach(edu => {
        docChildren.push(
            new Paragraph({
                spacing: { before: 80, after: 20 },
                children: [
                    new TextRun({ text: `${edu.degree} — ${edu.institution}`, bold: true, size: 17, color: "1A202C" }),
                    new TextRun({ text: `  (${edu.graduationYear})`, bold: true, size: 15, color: "4A5568" })
                ]
            }),
            new Paragraph({
                spacing: { after: 20 },
                children: [
                    new TextRun({ text: edu.location, italics: true, size: 15, color: "2B6CB0" })
                ]
            }),
            new Paragraph({
                spacing: { after: 60 },
                children: [
                    new TextRun({ text: edu.notes, size: 15, color: "4A5568" })
                ]
            })
        );
    });

    const doc = new Document({
        sections: [
            {
                properties: {
                    page: {
                        margin: {
                            top: 600,
                            bottom: 600,
                            left: 750,
                            right: 750
                        }
                    }
                },
                children: docChildren
            }
        ]
    });

    const buffer = await Packer.toBuffer(doc);
    fs.writeFileSync(docxPath, buffer);
    console.log(`✓ Tailored DOCX generated: ${path.basename(docxPath)}`);
}

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
        '--run-all-compositor-stages-before-draw',
        '--no-pdf-header-footer',
        `--print-to-pdf=${pdfPath}`,
        fileUrl
    ];

    execFileSync(browserPath, args, { stdio: 'pipe' });
    console.log(`✓ Tailored PDF generated: ${path.basename(pdfPath)}`);
}

async function main() {
    console.log('=== Generating Tailored Copywriter CV ===');
    
    const tempHtmlPath = path.join(rootDir, 'scripts', 'temp_copywriter_cv.html');
    const pdfPath = path.join(outputDir, 'Ahmad-Ayub-Numan-Copywriter-CV.pdf');
    const docxPath = path.join(outputDir, 'Ahmad-Ayub-Numan-Copywriter-CV.docx');

    // 1. Generate HTML
    const html = generateCopywriterHtml(copywriterCvData);
    fs.writeFileSync(tempHtmlPath, html, 'utf-8');

    // 2. Generate PDF
    buildPdf(tempHtmlPath, pdfPath);

    // 3. Generate DOCX
    await buildCopywriterDocx(copywriterCvData, docxPath);

    // Clean temp HTML
    if (fs.existsSync(tempHtmlPath)) {
        fs.unlinkSync(tempHtmlPath);
    }

    // Copy to public/cv/ for web access
    try {
        fs.copyFileSync(pdfPath, path.join(publicCvDir, path.basename(pdfPath)));
        fs.copyFileSync(docxPath, path.join(publicCvDir, path.basename(docxPath)));
        console.log(`✓ Copied to public/cv/ for live web access`);
    } catch (e) {
        console.warn('Note copying to public/cv:', e.message);
    }

    console.log('\n=== Success! Tailored Copywriter CV generated successfully ===');
}

main().catch(err => {
    console.error('Error generating Copywriter CV:', err);
    process.exit(1);
});
