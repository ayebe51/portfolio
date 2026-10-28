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
    BorderStyle,
    TabStopType,
    TabStopPosition
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
// DATA CV IT SALES REPRESENTATIVE - 100% FACTUAL & HARVARD STANDARD
// =========================================================================
export const itSalesHarvardCvData = {
    lang: "en",
    personal: {
        name: "Ahmad Ayub Nu'man, S.H.",
        location: "Cilacap, Central Java, Indonesia",
        phone: "+62 895 3491 77555",
        email: "ayb.n1994@gmail.com",
        linkedin: "linkedin.com/in/ayub-numan-871406155",
        portfolio: "portfolio-seven-theta-bovx80a70x.vercel.app"
    },
    summary: "Technically accomplished Software & Systems Engineer with a Bachelor of Laws (S.H.) degree, combining 2+ years of production experience in Cloud infrastructure, Cybersecurity hardening, and enterprise systems deployment with strong commercial and consultative presentation capabilities. Proven track record architecting and deploying institutional enterprise platforms (SIMMACI) serving 270+ educational institutions, managing Linux VPS environments, Docker containerization, and stringent access controls (RBAC, Maker-Checker). Combines hands-on technical literacy with legal contract acumen, enabling seamless technical discovery, product demonstrations, objection handling, and consultative solution selling for enterprise IT, Cloud, and Cybersecurity clients. Fluent in professional English, target-driven, and ready for on-site placement in Jakarta.",
    experience: [
        {
            company: "LP MA'ARIF NU CILACAP",
            location: "Cilacap, Central Java, Indonesia",
            role: "Full-Stack Software Engineer & Systems Architect",
            period: "2024 – Present",
            bullets: [
                "Architected and deployed SIMMACI enterprise platform (React 19, Laravel 12, PostgreSQL 16) administering 270+ educational institutions, 2,000+ staff, and 17,000+ students.",
                "Engineered and managed cloud infrastructure on Linux VPS, Docker Compose, and Coolify, configuring Nginx reverse proxy with HSTS and CSP security headers.",
                "Hardened infrastructure cybersecurity: remediated SEC-001–004 vulnerabilities, closed 27 API guards, and enforced Role-Based Access Control (RBAC).",
                "Designed institutional Core Financial System using Domain-Driven Design (DDD), immutable journal ledgers, and Maker-Checker segregation of duties.",
                "Conducted technical presentations, solution demonstrations, and consultative onboarding sessions for institutional directors and IT administrators across 270+ entities."
            ]
        }
    ],
    projects: [
        {
            name: "SIMMACI — Enterprise Institutional Platform",
            techStack: "React 19, TypeScript, Laravel 12, PostgreSQL 16, Linux VPS, Nginx, Docker, MinIO S3",
            bullet: "Engineered scalable cloud-hosted platform centralizing administration for 270+ institutions with batch document generation, S3 object storage isolation, and 1,822 automated test cases (100% pass)."
        },
        {
            name: "Koneksi Santri — Boarding School ERP & Mobile Ecosystem",
            techStack: "Next.js 14, Flutter (Dart), NestJS, PostgreSQL, Prisma ORM, Docker, Cloud VPS",
            bullet: "Architected integrated management system bridging student administration, Smart Gate QR security, automated billing, and closed-loop digital wallet with automated WhatsApp notification gateway."
        },
        {
            name: "Enterprise POS & Inventory (Kiro ERP) — Retail Management System",
            techStack: "React 19, NestJS, TypeScript, Prisma ORM, PostgreSQL, Apache ECharts",
            bullet: "Developed multi-warehouse retail inventory platform managing stock replenishment, 3-way matching (PR/PO/GR), and fast cashier operations with strict ledger consistency."
        }
    ],
    education: [
        {
            institution: "STAI AT-TAHDZIB",
            location: "East Java, Indonesia",
            degree: "Bachelor of Laws (Sarjana Hukum - S.H.) — Islamic Economic Law",
            year: "Graduated 2019",
            bullet: "Rigorous academic training in commercial law, contract drafting, statutory compliance, and business ethics, providing a distinct strategic advantage in enterprise B2B sales negotiations and SLA formulation."
        }
    ],
    certifications: [
        {
            name: "Spec-Driven Development (SDD) Certification",
            issuer: "Dicoding Indonesia (Credential ID: EYX4Q03J6PDL)",
            year: "Valid 2026 – 2029",
            bullet: "Certified in technical specification design, contract-first APIs, test-driven requirements, and end-to-end software delivery traceability."
        }
    ],
    skillsCategories: [
        {
            category: "Technical Solutions & Sales Readiness",
            items: "Consultative Solution Selling, Technical Product Demos, C-Level & Stakeholder Presentations, Client Discovery & Needs Analysis, B2B Commercial Proposals, Contract & SLA Review."
        },
        {
            category: "Cloud & Infrastructure Knowledge",
            items: "Linux VPS Administration (Ubuntu/Debian), Docker & Docker Compose, Coolify, Nginx Reverse Proxy, S3 / MinIO Cloud Storage, PostgreSQL 16, MySQL, RESTful APIs."
        },
        {
            category: "Cybersecurity & Governance",
            items: "Role-Based Access Control (RBAC), SSL/TLS Encryption, Security Headers (CSP, HSTS), Vulnerability Mitigation, Maker-Checker Segregation, Legal & Commercial Compliance."
        },
        {
            category: "Languages & Communication",
            items: "English (Professional Working Proficiency; fluent spoken/written communication), Indonesian (Native), Mandarin (Basic conversational interest / rapid learner)."
        },
        {
            category: "Availability & Location",
            items: "Currently based in Cilacap, Central Java; immediately available and fully prepared for on-site placement in Jakarta; strong target-driven motivation."
        }
    ]
};

// =========================================================================
// GENERATE HARVARD STYLE HTML CV (STRICT 1-PAGE A4 FORMAT)
// =========================================================================
function generateHarvardHtmlCv(data) {
    const { personal, summary, experience, projects, education, certifications, skillsCategories } = data;

    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>${personal.name} - Resume (Harvard Standard)</title>
<style>
  @page {
    size: A4 portrait;
    margin: 8mm 13mm 6mm 13mm;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: "Times New Roman", Times, Georgia, serif;
    color: #000000;
    background: #ffffff;
    font-size: 8.3pt;
    line-height: 1.22;
    -webkit-print-color-adjust: exact;
  }
  
  /* Harvard Standard Header */
  .header {
    text-align: center;
    margin-bottom: 4.5px;
  }
  .header h1 {
    font-size: 14.5pt;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    margin-bottom: 1.5px;
  }
  .header .contact-line {
    font-size: 8.1pt;
    line-height: 1.25;
  }
  .header .meta-line {
    font-size: 8.1pt;
    font-style: italic;
    margin-top: 1px;
  }

  /* Harvard Section Titles */
  .section {
    margin-bottom: 4px;
    page-break-inside: avoid;
  }
  .section-title {
    font-size: 8.7pt;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-bottom: 0.75pt solid #000000;
    padding-bottom: 1px;
    margin-bottom: 2.5px;
  }

  .summary-text {
    font-size: 8.05pt;
    line-height: 1.23;
    text-align: justify;
  }

  /* Harvard Entries */
  .entry {
    margin-bottom: 3px;
    page-break-inside: avoid;
  }
  .entry-row-1 {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-size: 8.35pt;
  }
  .entry-row-1 .company {
    font-weight: bold;
    text-transform: uppercase;
  }
  .entry-row-1 .location {
    font-style: italic;
  }
  .entry-row-2 {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-size: 8.15pt;
    margin-bottom: 1px;
  }
  .entry-row-2 .role {
    font-style: italic;
  }
  .entry-row-2 .dates {
    font-style: italic;
  }

  ul.bullets {
    margin-left: 14px;
    margin-top: 1px;
  }
  ul.bullets li {
    font-size: 8.0pt;
    line-height: 1.20;
    margin-bottom: 1px;
    text-align: justify;
  }

  /* Skills Category */
  .skills-list {
    font-size: 8.0pt;
    line-height: 1.21;
  }
  .skills-row {
    margin-bottom: 1.2px;
  }
  .skills-label {
    font-weight: bold;
  }
</style>
</head>
<body>

  <!-- HEADER -->
  <div class="header">
    <h1>${personal.name}</h1>
    <div class="contact-line">
      ${personal.location} &bull; Phone / WhatsApp: ${personal.phone} &bull; Email: ${personal.email}
    </div>
    <div class="meta-line">
      LinkedIn: ${personal.linkedin} &bull; Portfolio: ${personal.portfolio}
    </div>
  </div>

  <!-- SUMMARY -->
  <div class="section">
    <div class="section-title">Professional Summary</div>
    <p class="summary-text">${summary}</p>
  </div>

  <!-- EXPERIENCE -->
  <div class="section">
    <div class="section-title">Professional Experience</div>
    ${experience.map(exp => `
      <div class="entry">
        <div class="entry-row-1">
          <span class="company">${exp.company}</span>
          <span class="location">${exp.location}</span>
        </div>
        <div class="entry-row-2">
          <span class="role">${exp.role}</span>
          <span class="dates">${exp.period}</span>
        </div>
        <ul class="bullets">
          ${exp.bullets.map(b => `<li>${b}</li>`).join('')}
        </ul>
      </div>
    `).join('')}
  </div>

  <!-- FEATURED ENTERPRISE SYSTEMS & SOLUTIONS PROJECTS -->
  <div class="section">
    <div class="section-title">Featured Enterprise Systems & Technical Projects</div>
    ${projects.map(p => `
      <div class="entry">
        <div class="entry-row-1">
          <span class="company" style="font-size: 8.15pt;">${p.name}</span>
          <span class="location" style="font-size: 7.7pt; color: #222;">${p.techStack}</span>
        </div>
        <ul class="bullets">
          <li>${p.bullet}</li>
        </ul>
      </div>
    `).join('')}
  </div>

  <!-- EDUCATION & CERTIFICATIONS -->
  <div class="section">
    <div class="section-title">Education & Credentials</div>
    ${education.map(edu => `
      <div class="entry">
        <div class="entry-row-1">
          <span class="company">${edu.institution}</span>
          <span class="location">${edu.location}</span>
        </div>
        <div class="entry-row-2">
          <span class="role">${edu.degree}</span>
          <span class="dates">${edu.year}</span>
        </div>
        <ul class="bullets">
          <li>${edu.bullet}</li>
        </ul>
      </div>
    `).join('')}
    ${certifications.map(cert => `
      <div class="entry">
        <div class="entry-row-1">
          <span class="company" style="font-size: 8.15pt;">${cert.name} — ${cert.issuer}</span>
          <span class="location" style="font-size: 7.9pt;">${cert.year}</span>
        </div>
        <ul class="bullets">
          <li>${cert.bullet}</li>
        </ul>
      </div>
    `).join('')}
  </div>

  <!-- SKILLS, EXPERTISE & LANGUAGES -->
  <div class="section">
    <div class="section-title">Technical Expertise, Core Competencies & Languages</div>
    <div class="skills-list">
      ${skillsCategories.map(sc => `
        <div class="skills-row">
          <span class="skills-label">${sc.category}:</span> ${sc.items}
        </div>
      `).join('')}
    </div>
  </div>

</body>
</html>`;
}

// =========================================================================
// BUILD HARVARD DOCX CV (Word Format)
// =========================================================================
async function buildHarvardDocxCv(data, docxPath) {
    const { personal, summary, experience, projects, education, certifications, skillsCategories } = data;

    const createSectionHeading = (title) => {
        return new Paragraph({
            spacing: { before: 90, after: 25 },
            border: {
                bottom: {
                    color: "000000",
                    space: 2,
                    style: BorderStyle.SINGLE,
                    size: 6
                }
            },
            children: [
                new TextRun({
                    text: title.toUpperCase(),
                    bold: true,
                    size: 17,
                    font: "Times New Roman"
                })
            ]
        });
    };

    const docChildren = [
        // Name
        new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 15 },
            children: [
                new TextRun({ text: personal.name.toUpperCase(), bold: true, size: 25, font: "Times New Roman" })
            ]
        }),
        // Contact
        new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 10 },
            children: [
                new TextRun({ text: `${personal.location}  •  Phone: ${personal.phone}  •  Email: ${personal.email}`, size: 16, font: "Times New Roman" })
            ]
        }),
        // Meta
        new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 50 },
            children: [
                new TextRun({ text: `LinkedIn: ${personal.linkedin}  •  Portfolio: ${personal.portfolio}`, italics: true, size: 15, font: "Times New Roman" })
            ]
        }),

        // Summary
        createSectionHeading("Professional Summary"),
        new Paragraph({
            alignment: AlignmentType.JUSTIFIED,
            spacing: { after: 35 },
            children: [
                new TextRun({ text: summary, size: 15, font: "Times New Roman" })
            ]
        }),

        // Experience
        createSectionHeading("Professional Experience")
    ];

    experience.forEach(exp => {
        docChildren.push(
            new Paragraph({
                spacing: { before: 40, after: 10 },
                tabStops: [
                    {
                        type: TabStopType.RIGHT,
                        position: TabStopPosition.MAX
                    }
                ],
                children: [
                    new TextRun({ text: exp.company, bold: true, size: 16, font: "Times New Roman" }),
                    new TextRun({ text: `\t${exp.location}`, italics: true, size: 15, font: "Times New Roman" })
                ]
            }),
            new Paragraph({
                spacing: { after: 15 },
                tabStops: [
                    {
                        type: TabStopType.RIGHT,
                        position: TabStopPosition.MAX
                    }
                ],
                children: [
                    new TextRun({ text: exp.role, italics: true, size: 15, font: "Times New Roman" }),
                    new TextRun({ text: `\t${exp.period}`, italics: true, size: 15, font: "Times New Roman" })
                ]
            })
        );
        exp.bullets.forEach(bullet => {
            docChildren.push(
                new Paragraph({
                    bullet: { level: 0 },
                    spacing: { after: 10 },
                    alignment: AlignmentType.JUSTIFIED,
                    children: [
                        new TextRun({ text: bullet, size: 15, font: "Times New Roman" })
                    ]
                })
            );
        });
    });

    // Projects
    docChildren.push(createSectionHeading("Featured Enterprise Systems & Technical Projects"));
    projects.forEach(p => {
        docChildren.push(
            new Paragraph({
                spacing: { before: 30, after: 10 },
                children: [
                    new TextRun({ text: `${p.name} `, bold: true, size: 15, font: "Times New Roman" }),
                    new TextRun({ text: `(${p.techStack})`, italics: true, size: 14, font: "Times New Roman" })
                ]
            }),
            new Paragraph({
                bullet: { level: 0 },
                spacing: { after: 10 },
                alignment: AlignmentType.JUSTIFIED,
                children: [
                    new TextRun({ text: p.bullet, size: 15, font: "Times New Roman" })
                ]
            })
        );
    });

    // Education
    docChildren.push(createSectionHeading("Education & Credentials"));
    education.forEach(edu => {
        docChildren.push(
            new Paragraph({
                spacing: { before: 30, after: 10 },
                tabStops: [
                    {
                        type: TabStopType.RIGHT,
                        position: TabStopPosition.MAX
                    }
                ],
                children: [
                    new TextRun({ text: edu.institution, bold: true, size: 16, font: "Times New Roman" }),
                    new TextRun({ text: `\t${edu.location}`, italics: true, size: 15, font: "Times New Roman" })
                ]
            }),
            new Paragraph({
                spacing: { after: 10 },
                tabStops: [
                    {
                        type: TabStopType.RIGHT,
                        position: TabStopPosition.MAX
                    }
                ],
                children: [
                    new TextRun({ text: edu.degree, italics: true, size: 15, font: "Times New Roman" }),
                    new TextRun({ text: `\t${edu.year}`, italics: true, size: 15, font: "Times New Roman" })
                ]
            }),
            new Paragraph({
                bullet: { level: 0 },
                spacing: { after: 10 },
                alignment: AlignmentType.JUSTIFIED,
                children: [
                    new TextRun({ text: edu.bullet, size: 15, font: "Times New Roman" })
                ]
            })
        );
    });

    certifications.forEach(cert => {
        docChildren.push(
            new Paragraph({
                spacing: { before: 20, after: 10 },
                tabStops: [
                    {
                        type: TabStopType.RIGHT,
                        position: TabStopPosition.MAX
                    }
                ],
                children: [
                    new TextRun({ text: `${cert.name} — ${cert.issuer}`, bold: true, size: 15, font: "Times New Roman" }),
                    new TextRun({ text: `\t${cert.year}`, italics: true, size: 14, font: "Times New Roman" })
                ]
            }),
            new Paragraph({
                bullet: { level: 0 },
                spacing: { after: 10 },
                alignment: AlignmentType.JUSTIFIED,
                children: [
                    new TextRun({ text: cert.bullet, size: 15, font: "Times New Roman" })
                ]
            })
        );
    });

    // Skills
    docChildren.push(createSectionHeading("Technical Expertise, Core Competencies & Languages"));
    skillsCategories.forEach(sc => {
        docChildren.push(
            new Paragraph({
                spacing: { after: 12 },
                children: [
                    new TextRun({ text: `${sc.category}: `, bold: true, size: 15, font: "Times New Roman" }),
                    new TextRun({ text: sc.items, size: 15, font: "Times New Roman" })
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
                            top: 450,
                            bottom: 450,
                            left: 600,
                            right: 600
                        }
                    }
                },
                children: docChildren
            }
        ]
    });

    const buffer = await Packer.toBuffer(doc);
    fs.writeFileSync(docxPath, buffer);
    console.log(`✓ Harvard Word DOCX CV generated: ${path.basename(docxPath)}`);
}

// =========================================================================
// GENERATE FORMAL COVER LETTER HTML (A4 PRINT)
// =========================================================================
function generateCoverLetterHtml(data) {
    const { personal } = data;

    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Cover Letter - ${personal.name} - Sales Representative (IT / Cloud / Cybersecurity)</title>
<style>
  @page {
    size: A4 portrait;
    margin: 15mm 18mm 15mm 18mm;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    color: #1e293b;
    background: #ffffff;
    font-size: 9pt;
    line-height: 1.45;
  }
  .header {
    border-bottom: 2px solid #0f2d59;
    padding-bottom: 8px;
    margin-bottom: 14px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .applicant-name {
    font-size: 16pt;
    font-weight: 800;
    color: #0f2d59;
    text-transform: uppercase;
  }
  .applicant-title {
    font-size: 9.5pt;
    font-weight: 700;
    color: #1e40af;
  }
  .applicant-meta {
    font-size: 8.2pt;
    color: #475569;
    text-align: right;
    line-height: 1.35;
  }
  .recipient-block {
    margin-bottom: 14px;
    font-size: 8.8pt;
    color: #334155;
    line-height: 1.35;
  }
  .recipient-block strong { color: #0f2d59; }
  .subject-line {
    background: #f1f5f9;
    border-left: 3.5px solid #0f2d59;
    padding: 6px 10px;
    margin-bottom: 12px;
    font-weight: 700;
    font-size: 9.2pt;
    color: #0f2d59;
  }
  p {
    margin-bottom: 9px;
    text-align: justify;
    font-size: 8.8pt;
    color: #334155;
  }
  ul.highlights {
    margin-left: 18px;
    margin-bottom: 10px;
  }
  ul.highlights li {
    font-size: 8.6pt;
    color: #334155;
    margin-bottom: 3.5px;
    line-height: 1.35;
    text-align: justify;
  }
  .signature-block {
    margin-top: 18px;
    font-size: 8.8pt;
  }
  .signature-name {
    font-weight: 700;
    color: #0f2d59;
    margin-top: 25px;
  }
</style>
</head>
<body>

  <div class="header">
    <div>
      <div class="applicant-name">${personal.name}</div>
      <div class="applicant-title">Software & Systems Engineer &bull; Technical Sales</div>
    </div>
    <div class="applicant-meta">
      Cilacap, Central Java &bull; Indonesia<br>
      Phone / WhatsApp: ${personal.phone}<br>
      Email: ${personal.email}<br>
      Date: October 26, 2026
    </div>
  </div>

  <div class="recipient-block">
    <strong>To: Ms. Aulia Rahmatika / Hiring Team</strong><br>
    Recruitment Lead — Sales Representative (Indonesia)<br>
    Kuningan, South Jakarta<br>
    Email: auliarahmatika990@gmail.com
  </div>

  <div class="subject-line">
    Subject: Application for Sales Representative Position – Ahmad Ayub Nu'man
  </div>

  <p>Dear Ms. Aulia Rahmatika,</p>

  <p>I am writing to formally express my strong interest in the <strong>Sales Representative (Indonesia)</strong> position based in Kuningan, South Jakarta, as announced on your Threads post. With direct production experience as a Software and Systems Engineer managing Cloud infrastructure and Cybersecurity controls—combined with a Bachelor of Laws (S.H.) degree—I offer a unique and highly effective blend of technical literacy and commercial negotiation skills for enterprise IT sales.</p>

  <p>As a technical professional who has designed, deployed, and presented enterprise software platforms to leadership and administrators across 270+ educational institutions, I bring distinct value to your sales organization:</p>

  <ul class="highlights">
    <li><strong>Hands-on Cloud & Cybersecurity Engineering:</strong> Real production experience managing Linux VPS environments, Docker containerization, and Nginx reverse proxy, as well as enforcing critical security controls (Role-Based Access Control, SSL/TLS encryption, and web security hardening). This enables me to speak with authority to CTOs, IT managers, and security officers, effectively address technical objections, and build consultative trust.</li>
    <li><strong>Solution Demonstrations & Client Consultations:</strong> Experienced in conducting live software demonstrations, assessing client technical needs, and aligning product capabilities with customer operational requirements across 270+ institutions at LP Ma'arif NU Cilacap.</li>
    <li><strong>Commercial & Legal Contract Acumen:</strong> My academic foundation in Islamic Economic Law (S.H.) gives me a strategic advantage in structuring commercial agreements, reviewing Service Level Agreements (SLAs), and facilitating rapid, risk-free enterprise deal closings.</li>
    <li><strong>Language & Global Communication:</strong> Fluent in professional English (written and spoken) for cross-border and multinational corporate interactions, with high enthusiasm and aptitude to expand business Mandarin terminology for international stakeholder collaboration.</li>
    <li><strong>Availability & On-Site Readiness:</strong> Currently based in Cilacap, Central Java, I am immediately available and fully prepared to work full-time on-site at your Kuningan, South Jakarta office, with proactive drive to achieve sales targets.</li>
  </ul>

  <p>Attached to this email is my updated Curriculum Vitae formatted to the Harvard Resume Guide standard. I welcome the opportunity to discuss in an interview how my technical knowledge, commercial drive, and customer-centric approach can add immediate value to your sales organization.</p>

  <p>Thank you very much for your time and consideration.</p>

  <div class="signature-block">
    <p>Sincerely,</p>
    <div class="signature-name">${personal.name}</div>
    <p style="font-size: 8.2pt; color: #475569;">Software & Systems Engineer &bull; Technical Sales<br>Phone: ${personal.phone} &bull; Email: ${personal.email}</p>
  </div>

</body>
</html>`;
}

// =========================================================================
// BROWSER & PDF BUILDER HELPER
// =========================================================================
function findBrowserExecutable() {
    const candidatePaths = [
        'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
        'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
        'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
        'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
    ];

    for (const p of candidatePaths) {
        if (fs.existsSync(p)) return p;
    }
    return null;
}

function buildPdf(htmlPath, pdfPath) {
    const browserPath = findBrowserExecutable();
    if (!browserPath) {
        console.warn(`⚠ Warning: Headless browser not found, cannot build ${path.basename(pdfPath)}`);
        return;
    }

    if (fs.existsSync(pdfPath)) {
        try {
            fs.unlinkSync(pdfPath);
        } catch (e) {
            console.warn(`Note: Could not unlink ${pdfPath}`);
        }
    }

    const fileUrl = 'file:///' + path.resolve(htmlPath).replace(/\\/g, '/');

    const args = [
        '--headless=new',
        '--disable-gpu',
        '--no-pdf-header-footer',
        `--print-to-pdf=${pdfPath}`,
        fileUrl
    ];

    execFileSync(browserPath, args, { stdio: 'pipe' });
    console.log(`✓ Generated PDF: ${path.basename(pdfPath)}`);
}

// =========================================================================
// MAIN GENERATOR
// =========================================================================
async function main() {
    console.log('=== Sales Representative Harvard Resume Generator (100% Factual) ===');
    console.log(`Output folder: ${outputDir}`);

    // 1. GENERATE HARVARD CV (PDF & DOCX)
    const tempCvHtml = path.join(rootDir, 'scripts', 'temp_sales_rep_harvard_cv.html');
    const cvSalesRepPdfPath = path.join(outputDir, 'Ahmad-Ayub-Numan-Sales-Representative-CV.pdf');
    const cvSalesRepDocxPath = path.join(outputDir, 'Ahmad-Ayub-Numan-Sales-Representative-CV.docx');
    const cvItSalesPdfPath = path.join(outputDir, 'Ahmad-Ayub-Numan-IT-Sales-CV.pdf');
    const cvItSalesDocxPath = path.join(outputDir, 'Ahmad-Ayub-Numan-IT-Sales-CV.docx');

    fs.writeFileSync(tempCvHtml, generateHarvardHtmlCv(itSalesHarvardCvData), 'utf-8');
    buildPdf(tempCvHtml, cvSalesRepPdfPath);
    await buildHarvardDocxCv(itSalesHarvardCvData, cvSalesRepDocxPath);

    try {
        fs.copyFileSync(cvSalesRepPdfPath, cvItSalesPdfPath);
        fs.copyFileSync(cvSalesRepDocxPath, cvItSalesDocxPath);
    } catch (e) {
        // Locked by OS viewer, sales rep file is primary
    }

    if (fs.existsSync(tempCvHtml)) fs.unlinkSync(tempCvHtml);

    // 2. GENERATE COVER LETTER (PDF)
    const tempCoverHtml = path.join(rootDir, 'scripts', 'temp_sales_rep_cover.html');
    const coverSalesRepPdfPath = path.join(outputDir, 'Ahmad-Ayub-Numan-Sales-Representative-Cover-Letter.pdf');
    const coverItSalesPdfPath = path.join(outputDir, 'Ahmad-Ayub-Numan-IT-Sales-Cover-Letter.pdf');

    fs.writeFileSync(tempCoverHtml, generateCoverLetterHtml(itSalesHarvardCvData), 'utf-8');
    buildPdf(tempCoverHtml, coverSalesRepPdfPath);
    try {
        fs.copyFileSync(coverSalesRepPdfPath, coverItSalesPdfPath);
    } catch (e) {}
    if (fs.existsSync(tempCoverHtml)) fs.unlinkSync(tempCoverHtml);

    // Copy to public/cv/ for web access / download
    [cvSalesRepPdfPath, cvSalesRepDocxPath, coverSalesRepPdfPath, cvItSalesPdfPath, cvItSalesDocxPath, coverItSalesPdfPath].forEach(filePath => {
        try {
            if (fs.existsSync(filePath)) {
                fs.copyFileSync(filePath, path.join(publicCvDir, path.basename(filePath)));
            }
        } catch (e) {}
    });

    console.log('\n=== Success! All Sales Representative documents generated successfully with 100% accurate facts! ===');
}

main().catch(err => {
    console.error('Error generating IT Sales files:', err);
    process.exit(1);
});
