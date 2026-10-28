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
// DATA CV INDONESIAN LANGUAGE SPECIALIST & CONTENT STRATEGIST (ENGLISH)
// =========================================================================
export const indonesianSpecialistCvDataEn = {
    lang: "en",
    personal: {
        name: "Ahmad Ayub Nu'man, S.H.",
        title: "Indonesian Language Specialist & Content Strategist",
        subtitle: "Native Indonesian (EYD / PUEBI) • AI Data Training & RLHF Evaluation • Content Localization • Legal & Institutional Drafting • Prompt Engineering",
        location: "Cilacap, Central Java, Indonesia (Open to Remote Worldwide)",
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
    summary: "Detail-oriented Indonesian Language Specialist, Content Strategist, and Legal Researcher with a Bachelor of Laws (S.H.) degree and extensive experience in institutional communications, textual governance, and content localization. Native Indonesian speaker with authoritative mastery of standard Indonesian grammar, orthography, and syntax (PUEBI/EYD), combined with deep cultural nuance across formal, educational, and colloquial registers. Proven track record directing public messaging, regulatory administrative decrees, and instructional documentation across 270+ institutions. Experienced in leveraging and evaluating Large Language Models (LLMs) including Claude, ChatGPT, and Gemini for prompt engineering, RLHF data annotation, fact-checking, and bilingual translation/localization. Recognized for analytical rigor, ethical integrity, and exceptional written clarity under tight deadlines.",
    skills: {
        linguistics: [
            "Native Indonesian Fluency & Stylistics",
            "Indonesian Grammar, Syntax & Orthography (PUEBI / EYD)",
            "Formal, Administrative & Colloquial Registers",
            "Proofreading, Copy Editing & Linguistic Quality Assurance"
        ],
        translationAndLocalization: [
            "Bilingual English to Indonesian Translation & Localization",
            "Cultural Nuance Adaptation & Contextual Transcreation",
            "Terminology Consistency & Glossary Management",
            "Instructional Design & Microcopy Localization"
        ],
        aiEvaluation: [
            "AI Data Annotation & RLHF Model Evaluation",
            "Prompt Engineering & Edge-Case Stress Testing",
            "Hallucination Detection & Factual Verification",
            "AI Safety, Toxicity & Cultural Appropriateness Auditing"
        ],
        legalAndGovernance: [
            "Legal Drafting & Statutory Analysis (S.H. Law Background)",
            "Institutional Decree (SK) Drafting & Governance",
            "Contract Analysis & Regulatory Compliance",
            "Administrative Archiving & Quality Standards"
        ],
        contentAndCommunication: [
            "Persuasive Copywriting & Narrative Storytelling",
            "Public Messaging & Stakeholder Communications",
            "Research, Critical Reasoning & Fact-Checking",
            "Google Workspace, Microsoft Office, Markdown, Notion"
        ]
    },
    labels: {
        professionalSummary: "Professional Summary",
        technicalSkills: "Core Competencies & Linguistic Skills",
        professionalExperience: "Professional Experience",
        selectedProjects: "Featured Communications & Governance Projects",
        education: "Education & Qualifications",
        languages: "Languages & Cultural Competence"
    },
    experience: [
        {
            role: "Lead Communications, Documentation & Content Strategy",
            subtitle: "Institutional Communications, Policy Drafting & Public Narrative",
            company: "LP Ma'arif NU Cilacap",
            location: "Cilacap, Central Java, Indonesia",
            period: "2024 – Present",
            responsibilities: [
                "Direct official public messaging, instructional guides, and formal correspondence for a network of 270+ educational institutions, 2,000+ educators, and 17,000+ students and guardians.",
                "Draft and review administrative decrees (SK), institutional policies, and official circulars, guaranteeing 100% adherence to standard Indonesian grammar (EYD/PUEBI) and legal compliance.",
                "Produce user-centric instructional microcopy and operational manuals, reducing user ambiguity, misinterpretation, and operational support tickets by over 70%.",
                "Employ generative AI platforms (Claude, Gemini, ChatGPT) for prompt experimentation, rapid drafting, tone calibration, and bilingual cross-referencing while ensuring absolute factual precision.",
                "Execute rigorous quality assurance and editorial proofreading across hundreds of pages of institutional publications and digital portal announcements."
            ]
        },
        {
            role: "Bilingual Content Specialist & Communication Strategist",
            subtitle: "Platform Copywriting, Notification Scripts & Community Storytelling",
            company: "Koneksi Santri (Educational ERP & Mobile Portal)",
            location: "Central Java, Indonesia (Hybrid)",
            period: "2024 – 2025",
            responsibilities: [
                "Crafted empathetic bilingual promotional campaigns, instructional content, and guardian-facing communications, bridging complex technology with culturally respectful Indonesian storytelling.",
                "Authored automated WhatsApp notification scripts and interactive UI microcopy, ensuring a polite, reassuring, and solution-oriented tone of voice for tuition billing and student updates.",
                "Developed engaging short-form educational scripts and social media articles highlighting institutional transparency and student welfare, driving high engagement across community channels.",
                "Conducted A/B testing on messaging hooks and headlines to maximize clarity, readability, and adoption among diverse demographic groups."
            ]
        }
    ],
    projects: [
        {
            name: "Enterprise Institutional Communication & Governance Architecture (SIMMACI)",
            format: "Administrative Decrees, System Guidelines, Instructional Microcopy & Policy Formulation",
            highlights: [
                "Standardized administrative communication templates and automated document formulations (decrees, official certificates) for 270+ educational entities, establishing unified linguistic standards.",
                "Created comprehensive end-user documentation and contextual microcopy, facilitating seamless digital adoption across varied demographic backgrounds and senior staff."
            ]
        },
        {
            name: "Community Engagement & Educational Storytelling Campaigns",
            format: "Social Media Narratives, Short Video Scripts (Reels/TikTok), & Public Articles",
            highlights: [
                "Designed persuasive narrative campaigns centered on empathy, shared values, and educational investment, generating overwhelmingly positive stakeholder feedback and strong community trust.",
                "Structured persuasive frameworks (PAS & AIDA) to convey technical and financial transparency concepts clearly without technical jargon."
            ]
        }
    ],
    education: [
        {
            degree: "Bachelor of Laws (S.H.) — Islamic Economic Law",
            institution: "STAI At-Tahdzib Jombang",
            location: "Jombang, East Java, Indonesia",
            graduationYear: "Graduated 2019",
            notes: "Comprehensive academic training in textual interpretation, legal rhetoric, hermeneutics, argumentative logic, statutory drafting, and contractual ethics. Provided rigorous foundation for linguistic precision and analytical reasoning."
        }
    ],
    languagesList: [
        { lang: "Indonesian", level: "Native Speaker (Expert in formal EYD/PUEBI, professional and conversational registers)" },
        { lang: "English", level: "Professional Working Proficiency (Fluent written & spoken communication, translation, and localization)" },
        { lang: "Arabic", level: "Working Reading Knowledge (Classical and jurisprudential textual analysis)" }
    ]
};

// =========================================================================
// GENERATOR HTML CV (A4 CRISP ATS COMPLIANT)
// =========================================================================
function generateHtml(data) {
    const { personal, summary, skills, labels, experience, projects, education, languagesList } = data;

    const skillCategories = [
        { label: "Linguistics & Grammar", val: skills.linguistics.join(', ') },
        { label: "Translation & Localization", val: skills.translationAndLocalization.join(', ') },
        { label: "AI Training & Evaluation", val: skills.aiEvaluation.join(', ') },
        { label: "Legal & Governance Drafting", val: skills.legalAndGovernance.join(', ') },
        { label: "Content & Communications", val: skills.contentAndCommunication.join(', ') }
    ];

    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Curriculum Vitae - ${personal.name} - Indonesian Language Specialist</title>
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
    color: #2b6cb0;
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
    width: 175px;
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
  .lang-grid {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .lang-row {
    font-size: 8.3pt;
  }
  .lang-name {
    font-weight: 700;
    color: #1a365d;
  }
  .lang-desc {
    color: #4a5568;
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
        <div class="item-submeta" style="color: #4a5568; font-weight: normal; font-style: italic;">Focus: ${proj.format}</div>
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

  <div class="section">
    <div class="section-title">${labels.languages}</div>
    <div class="lang-grid">
      ${languagesList.map(l => `
        <div class="lang-row">
          <span class="lang-name">${l.lang}:</span>
          <span class="lang-desc"> ${l.level}</span>
        </div>
      `).join('')}
    </div>
  </div>
</body>
</html>`;
}

// =========================================================================
// GENERATOR DOCX CV
// =========================================================================
async function buildDocx(data, docxPath) {
    const { personal, summary, skills, experience, projects, education, labels, languagesList } = data;

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
                new TextRun({ text: personal.title.toUpperCase(), bold: true, size: 20, color: "2B6CB0" })
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
                new TextRun({ text: `${personal.location}  •  ${personal.email}  •  ${personal.phone}  •  LinkedIn: ${personal.linkedinDisplay}`, size: 15, color: "4A5568" })
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
                new TextRun({ text: "Linguistics & Grammar: ", bold: true, size: 16, color: "1A365D" }),
                new TextRun({ text: skills.linguistics.join(', '), size: 16, color: "4A5568" })
            ]
        }),
        new Paragraph({
            spacing: { after: 25 },
            children: [
                new TextRun({ text: "Translation & Localization: ", bold: true, size: 16, color: "1A365D" }),
                new TextRun({ text: skills.translationAndLocalization.join(', '), size: 16, color: "4A5568" })
            ]
        }),
        new Paragraph({
            spacing: { after: 25 },
            children: [
                new TextRun({ text: "AI Training & Evaluation: ", bold: true, size: 16, color: "1A365D" }),
                new TextRun({ text: skills.aiEvaluation.join(', '), size: 16, color: "4A5568" })
            ]
        }),
        new Paragraph({
            spacing: { after: 25 },
            children: [
                new TextRun({ text: "Legal & Governance Drafting: ", bold: true, size: 16, color: "1A365D" }),
                new TextRun({ text: skills.legalAndGovernance.join(', '), size: 16, color: "4A5568" })
            ]
        }),
        new Paragraph({
            spacing: { after: 80 },
            children: [
                new TextRun({ text: "Content & Communications: ", bold: true, size: 16, color: "1A365D" }),
                new TextRun({ text: skills.contentAndCommunication.join(', '), size: 16, color: "4A5568" })
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
                    new TextRun({ text: `Focus: ${proj.format}`, italics: true, size: 14, color: "4A5568" })
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

    // Languages
    docChildren.push(createSectionHeading(labels.languages));
    languagesList.forEach(l => {
        docChildren.push(
            new Paragraph({
                spacing: { after: 20 },
                children: [
                    new TextRun({ text: `${l.lang}: `, bold: true, size: 16, color: "1A365D" }),
                    new TextRun({ text: l.level, size: 16, color: "4A5568" })
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
    console.log('=== Generating Indonesian Language Specialist CV (English) ===');
    
    const tempHtmlPath = path.join(rootDir, 'scripts', 'temp_indonesian_specialist_cv.html');
    const pdfPath = path.join(outputDir, 'Ahmad-Ayub-Numan-Indonesian-Language-Specialist-CV-EN.pdf');
    const docxPath = path.join(outputDir, 'Ahmad-Ayub-Numan-Indonesian-Language-Specialist-CV-EN.docx');

    // 1. Generate HTML
    const html = generateHtml(indonesianSpecialistCvDataEn);
    fs.writeFileSync(tempHtmlPath, html, 'utf-8');

    // 2. Generate PDF
    buildPdf(tempHtmlPath, pdfPath);

    // 3. Generate DOCX
    await buildDocx(indonesianSpecialistCvDataEn, docxPath);

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

    console.log('\n=== Success! Indonesian Language Specialist CV (EN) generated successfully ===');
}

main().catch(err => {
    console.error('Error generating Indonesian Language Specialist CV:', err);
    process.exit(1);
});
