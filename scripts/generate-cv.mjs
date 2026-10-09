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
import { cvDataEn, cvDataId } from '../src/data/cvData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const cvOutputDir = path.join(rootDir, 'public', 'cv');

if (!fs.existsSync(cvOutputDir)) {
    fs.mkdirSync(cvOutputDir, { recursive: true });
}

// 1. Generate HTML for ATS PDF
function generateHtmlCv(data) {
    const { personal, summary, skills, labels, experience, projects, education, lang } = data;
    const isId = lang === 'id';

    const skillCategories = isId ? [
        { label: "Bahasa Pemrograman:", val: skills.languages.join(', ') },
        { label: "Frontend Engineering:", val: skills.frontend.join(', ') },
        { label: "Backend & API:", val: skills.backend.join(', ') },
        { label: "Basis Data & ORM:", val: skills.databases.join(', ') },
        { label: "DevOps & Keamanan:", val: skills.devops.join(', ') },
        { label: "Arsitektur & Metodologi:", val: skills.architecture.join(', ') }
    ] : [
        { label: "Languages:", val: skills.languages.join(', ') },
        { label: "Frontend Engineering:", val: skills.frontend.join(', ') },
        { label: "Backend & APIs:", val: skills.backend.join(', ') },
        { label: "Databases & ORM:", val: skills.databases.join(', ') },
        { label: "DevOps & Cloud:", val: skills.devops.join(', ') },
        { label: "Architecture & Testing:", val: skills.architecture.join(', ') }
    ];

    const demoLabel = isId ? "Demo Langsung:" : "Live Demo:";
    const repoLabel = isId ? "Repositori:" : "Repository:";

    return `<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="UTF-8">
<title>${personal.name} - ${personal.title} CV (${lang.toUpperCase()})</title>
<style>
  @page {
    size: A4 portrait;
    margin: 11mm 15mm 11mm 15mm;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    color: #1a1a1a;
    line-height: 1.34;
    font-size: 9.3pt;
    background: #ffffff;
    -webkit-print-color-adjust: exact;
  }
  .header {
    text-align: center;
    border-bottom: 1.5pt solid #222222;
    padding-bottom: 7px;
    margin-bottom: 10px;
  }
  .header h1 {
    font-size: 19.5pt;
    font-weight: 700;
    color: #111111;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    margin-bottom: 2px;
  }
  .header .title {
    font-size: 10.5pt;
    font-weight: 700;
    color: #2b6cb0;
    margin-bottom: 3px;
    text-transform: uppercase;
    letter-spacing: 0.8px;
  }
  .header .subtitle {
    font-size: 8.8pt;
    color: #4a5568;
    margin-bottom: 5px;
    font-weight: 500;
  }
  .contact-bar {
    font-size: 8.3pt;
    color: #333333;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 6px 10px;
  }
  .contact-bar a {
    color: #1a1a1a;
    text-decoration: none;
  }
  .contact-bar span.sep {
    color: #999999;
  }
  
  .section {
    margin-bottom: 9px;
    page-break-inside: auto;
  }
  .section-title {
    font-size: 10pt;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    color: #1a202c;
    border-bottom: 1pt solid #cbd5e0;
    padding-bottom: 2px;
    margin-bottom: 5px;
  }
  
  .summary-text {
    font-size: 8.8pt;
    color: #2d3748;
    line-height: 1.42;
    text-align: justify;
  }

  .skills-grid {
    display: flex;
    flex-direction: column;
    gap: 2.5px;
    font-size: 8.6pt;
  }
  .skill-row {
    display: flex;
    line-height: 1.32;
  }
  .skill-category {
    font-weight: 700;
    color: #2d3748;
    width: 175px;
    flex-shrink: 0;
  }
  .skill-items {
    color: #4a5568;
    flex: 1;
  }

  .item-block {
    margin-bottom: 7px;
    page-break-inside: avoid;
  }
  .item-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 1px;
  }
  .item-title {
    font-size: 9.3pt;
    font-weight: 700;
    color: #1a202c;
  }
  .item-subtitle {
    font-size: 8.6pt;
    font-weight: 600;
    color: #2b6cb0;
  }
  .item-meta {
    font-size: 8.3pt;
    color: #4a5568;
    text-align: right;
    font-weight: 500;
  }
  .item-submeta {
    font-size: 8.3pt;
    color: #4a5568;
    margin-bottom: 2.5px;
    font-style: italic;
  }

  ul.bullets {
    margin-left: 15px;
    margin-top: 2px;
  }
  ul.bullets li {
    font-size: 8.5pt;
    color: #2d3748;
    margin-bottom: 2px;
    line-height: 1.34;
    text-align: justify;
  }
  
  .project-links {
    font-size: 7.8pt;
    color: #4a5568;
    margin-top: 1px;
  }
  .project-links a {
    color: #2b6cb0;
    text-decoration: underline;
  }
</style>
</head>
<body>

  <!-- HEADER -->
  <div class="header">
    <h1>${personal.name}</h1>
    <div class="title">${personal.title}</div>
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
      <a href="${personal.github}">${personal.githubDisplay}</a>
    </div>
  </div>

  <!-- SUMMARY -->
  <div class="section">
    <div class="section-title">${labels.professionalSummary}</div>
    <p class="summary-text">${summary}</p>
  </div>

  <!-- TECHNICAL SKILLS -->
  <div class="section">
    <div class="section-title">${labels.technicalSkills}</div>
    <div class="skills-grid">
      ${skillCategories.map(sc => `
        <div class="skill-row">
          <span class="skill-category">${sc.label}</span>
          <span class="skill-items">${sc.val}</span>
        </div>
      `).join('')}
    </div>
  </div>

  <!-- PROFESSIONAL EXPERIENCE -->
  <div class="section">
    <div class="section-title">${labels.professionalExperience}</div>
    ${experience.map(exp => `
      <div class="item-block">
        <div class="item-header">
          <span class="item-title">${exp.role} <span style="font-weight:400; color:#4a5568;">(${exp.subtitle})</span></span>
          <span class="item-meta">${exp.period}</span>
        </div>
        <div class="item-submeta">${exp.company} • ${exp.location}</div>
        <ul class="bullets">
          ${exp.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
        </ul>
      </div>
    `).join('')}
  </div>

  <!-- SELECTED PROJECTS -->
  <div class="section">
    <div class="section-title">${labels.selectedProjects}</div>
    ${projects.map(proj => `
      <div class="item-block">
        <div class="item-header">
          <span class="item-title">${proj.name}</span>
          <span class="item-meta" style="font-style:italic;">${proj.techStack}</span>
        </div>
        <div class="project-links">
          ${proj.demoUrl ? `${demoLabel} <a href="${proj.demoUrl}">${proj.demoDisplay}</a>` : ''}
          ${proj.demoUrl && proj.repoUrl ? ' | ' : ''}
          ${proj.repoUrl ? `${repoLabel} <a href="${proj.repoUrl}">${proj.repoDisplay}</a>` : ''}
        </div>
        <ul class="bullets">
          ${proj.highlights.map(h => `<li>${h}</li>`).join('')}
        </ul>
      </div>
    `).join('')}
  </div>

  <!-- EDUCATION -->
  <div class="section">
    <div class="section-title">${labels.education}</div>
    ${education.map(edu => `
      <div class="item-block" style="margin-bottom:0;">
        <div class="item-header">
          <span class="item-title">${edu.degree}</span>
          <span class="item-meta">${edu.graduationYear}</span>
        </div>
        <div class="item-submeta">${edu.institution} • ${edu.location}</div>
      </div>
    `).join('')}
  </div>

</body>
</html>`;
}

// 2. Generate PDF via Headless Edge
function buildPdf(htmlPath, pdfPath) {
    const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
    if (!fs.existsSync(edgePath)) {
        throw new Error(`Edge executable not found at ${edgePath}`);
    }

    const args = [
        '--headless',
        '--disable-gpu',
        '--run-all-compositor-stages-before-draw',
        '--no-pdf-header-footer',
        `--print-to-pdf=${pdfPath}`,
        htmlPath
    ];

    execFileSync(edgePath, args, { stdio: 'pipe' });
    console.log(`✓ PDF successfully generated: ${path.basename(pdfPath)}`);
}

// 3. Generate DOCX via 'docx' package
async function buildDocx(data, docxPath) {
    const { personal, summary, skills, labels, experience, projects, education, lang } = data;
    const isId = lang === 'id';

    const docChildren = [];

    // Header: Name
    docChildren.push(
        new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 50 },
            children: [
                new TextRun({
                    text: personal.name.toUpperCase(),
                    bold: true,
                    size: 32, // 16pt
                    color: "111111"
                })
            ]
        })
    );

    // Header: Title
    docChildren.push(
        new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 30 },
            children: [
                new TextRun({
                    text: personal.title.toUpperCase(),
                    bold: true,
                    size: 22, // 11pt
                    color: "2B6CB0"
                })
            ]
        })
    );

    // Header: Subtitle
    docChildren.push(
        new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 70 },
            children: [
                new TextRun({
                    text: personal.subtitle,
                    size: 18, // 9pt
                    color: "4A5568"
                })
            ]
        })
    );

    // Header: Contact Info
    docChildren.push(
        new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 160 },
            border: {
                bottom: {
                    color: "222222",
                    space: 5,
                    style: BorderStyle.SINGLE,
                    size: 12
                }
            },
            children: [
                new TextRun({ text: `${personal.location}  •  `, size: 17 }),
                new TextRun({ text: `${personal.email}  •  `, size: 17 }),
                new TextRun({ text: `${personal.phone}  •  `, size: 17 }),
                new TextRun({ text: `${personal.linkedinDisplay}  •  `, size: 17 }),
                new TextRun({ text: `${personal.githubDisplay}`, size: 17 })
            ]
        })
    );

    function createSectionHeading(title) {
        return new Paragraph({
            spacing: { before: 130, after: 70 },
            border: {
                bottom: {
                    color: "CBD5E0",
                    space: 3,
                    style: BorderStyle.SINGLE,
                    size: 6
                }
            },
            children: [
                new TextRun({
                    text: title.toUpperCase(),
                    bold: true,
                    size: 20, // 10pt
                    color: "1A202C"
                })
            ]
        });
    }

    // Professional Summary
    docChildren.push(createSectionHeading(labels.professionalSummary));
    docChildren.push(
        new Paragraph({
            spacing: { after: 120 },
            alignment: AlignmentType.JUSTIFIED,
            children: [
                new TextRun({
                    text: summary,
                    size: 18 // 9pt
                })
            ]
        })
    );

    // Technical Skills
    docChildren.push(createSectionHeading(labels.technicalSkills));
    const skillCategories = isId ? [
        { label: "Bahasa Pemrograman", val: skills.languages.join(", ") },
        { label: "Frontend Engineering", val: skills.frontend.join(", ") },
        { label: "Backend & API", val: skills.backend.join(", ") },
        { label: "Basis Data & ORM", val: skills.databases.join(", ") },
        { label: "DevOps & Keamanan", val: skills.devops.join(", ") },
        { label: "Arsitektur & Metodologi", val: skills.architecture.join(", ") }
    ] : [
        { label: "Programming Languages", val: skills.languages.join(", ") },
        { label: "Frontend Engineering", val: skills.frontend.join(", ") },
        { label: "Backend & APIs", val: skills.backend.join(", ") },
        { label: "Databases & ORM", val: skills.databases.join(", ") },
        { label: "DevOps & Cloud", val: skills.devops.join(", ") },
        { label: "Architecture & Testing", val: skills.architecture.join(", ") }
    ];

    skillCategories.forEach(sc => {
        docChildren.push(
            new Paragraph({
                spacing: { after: 35 },
                children: [
                    new TextRun({ text: `${sc.label}: `, bold: true, size: 17, color: "2D3748" }),
                    new TextRun({ text: sc.val, size: 17, color: "4A5568" })
                ]
            })
        );
    });

    // Professional Experience
    docChildren.push(createSectionHeading(labels.professionalExperience));
    experience.forEach(exp => {
        docChildren.push(
            new Paragraph({
                spacing: { before: 70, after: 15 },
                children: [
                    new TextRun({ text: `${exp.role} `, bold: true, size: 19, color: "1A202C" }),
                    new TextRun({ text: `(${exp.subtitle})`, size: 17, color: "4A5568" }),
                    new TextRun({ text: `\t${exp.period}`, bold: true, size: 17, color: "4A5568" })
                ]
            })
        );
        docChildren.push(
            new Paragraph({
                spacing: { after: 50 },
                children: [
                    new TextRun({ text: `${exp.company} • ${exp.location}`, italics: true, size: 17, color: "4A5568" })
                ]
            })
        );

        exp.responsibilities.forEach(resp => {
            docChildren.push(
                new Paragraph({
                    bullet: { level: 0 },
                    spacing: { after: 35 },
                    alignment: AlignmentType.JUSTIFIED,
                    children: [
                        new TextRun({ text: resp, size: 17, color: "2D3748" })
                    ]
                })
            );
        });
    });

    // Selected Projects
    const demoLabel = isId ? "Demo Langsung:" : "Live Demo:";
    const repoLabel = isId ? "Repositori:" : "Repository:";

    docChildren.push(createSectionHeading(labels.selectedProjects));
    projects.forEach(proj => {
        docChildren.push(
            new Paragraph({
                spacing: { before: 70, after: 15 },
                children: [
                    new TextRun({ text: proj.name, bold: true, size: 19, color: "1A202C" })
                ]
            })
        );
        docChildren.push(
            new Paragraph({
                spacing: { after: 35 },
                children: [
                    new TextRun({ text: `Tech Stack: ${proj.techStack}`, italics: true, size: 16, color: "4A5568" })
                ]
            })
        );
        docChildren.push(
            new Paragraph({
                spacing: { after: 35 },
                children: [
                    new TextRun({ text: `${demoLabel} ${proj.demoDisplay}  |  ${repoLabel} ${proj.repoDisplay}`, size: 16, color: "2B6CB0" })
                ]
            })
        );

        proj.highlights.forEach(h => {
            docChildren.push(
                new Paragraph({
                    bullet: { level: 0 },
                    spacing: { after: 25 },
                    alignment: AlignmentType.JUSTIFIED,
                    children: [
                        new TextRun({ text: h, size: 17, color: "2D3748" })
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
                spacing: { before: 70, after: 15 },
                children: [
                    new TextRun({ text: edu.degree, bold: true, size: 19, color: "1A202C" }),
                    new TextRun({ text: `\t${edu.graduationYear}`, size: 17, color: "4A5568" })
                ]
            })
        );
        docChildren.push(
            new Paragraph({
                spacing: { after: 35 },
                children: [
                    new TextRun({ text: `${edu.institution} • ${edu.location}`, italics: true, size: 17, color: "4A5568" })
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
                            top: 650,    // 0.45 inch
                            bottom: 650,
                            left: 800,   // 0.55 inch
                            right: 800
                        }
                    }
                },
                children: docChildren
            }
        ]
    });

    const buffer = await Packer.toBuffer(doc);
    fs.writeFileSync(docxPath, buffer);
    console.log(`✓ DOCX successfully generated: ${path.basename(docxPath)}`);
}

async function processCvVersion(data, suffix) {
    const isDefault = suffix === 'EN';
    const tempHtmlPath = path.join(rootDir, 'scripts', `temp_cv_${suffix.toLowerCase()}.html`);
    
    const specificPdfName = `Ahmad-Ayub-Numan-Full-Stack-Software-Engineer-CV-${suffix}.pdf`;
    const specificDocxName = `Ahmad-Ayub-Numan-Full-Stack-Software-Engineer-CV-${suffix}.docx`;
    
    const targetPdfPath = path.join(cvOutputDir, specificPdfName);
    const targetDocxPath = path.join(cvOutputDir, specificDocxName);

    // 1. Build HTML
    const htmlContent = generateHtmlCv(data);
    fs.writeFileSync(tempHtmlPath, htmlContent, 'utf-8');

    // 2. Build PDF
    buildPdf(tempHtmlPath, targetPdfPath);

    // 3. Build DOCX
    await buildDocx(data, targetDocxPath);

    // Aliases
    if (isDefault) {
        fs.copyFileSync(targetPdfPath, path.join(cvOutputDir, 'software-engineer-cv.pdf'));
        fs.copyFileSync(targetDocxPath, path.join(cvOutputDir, 'software-engineer-cv.docx'));
        fs.copyFileSync(targetPdfPath, path.join(cvOutputDir, 'Ahmad-Ayub-Numan-Full-Stack-Software-Engineer-CV.pdf'));
        fs.copyFileSync(targetDocxPath, path.join(cvOutputDir, 'Ahmad-Ayub-Numan-Full-Stack-Software-Engineer-CV.docx'));
    } else {
        fs.copyFileSync(targetPdfPath, path.join(cvOutputDir, 'software-engineer-cv-id.pdf'));
        fs.copyFileSync(targetDocxPath, path.join(cvOutputDir, 'software-engineer-cv-id.docx'));
    }

    if (fs.existsSync(tempHtmlPath)) {
        fs.unlinkSync(tempHtmlPath);
    }
}

async function main() {
    console.log('=== ATS CV Generator (Bilingual EN & ID) ===');

    // Process English
    console.log('\n[1/2] Generating English Version (EN)...');
    await processCvVersion(cvDataEn, 'EN');

    // Process Indonesian
    console.log('\n[2/2] Generating Indonesian Version (ID)...');
    await processCvVersion(cvDataId, 'ID');

    console.log('\n=== Both English & Indonesian CVs successfully generated and verified! ===');
}

main().catch(err => {
    console.error('Fatal error during CV generation:', err);
    process.exit(1);
});
