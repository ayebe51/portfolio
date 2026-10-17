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
import { frontendCvDataEn, frontendCvDataId } from '../src/data/cvData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const outputDir = path.join(rootDir, 'tailored-cv');
const publicCvDir = path.join(rootDir, 'public', 'cv');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}
if (!fs.existsSync(publicCvDir)) {
    fs.mkdirSync(publicCvDir, { recursive: true });
}

function generateHtmlCv(data) {
    const { personal, summary, skills, labels, experience, projects, education, lang } = data;
    const isId = lang === 'id';

    const skillCategories = isId ? [
        { label: "Core Web & Bahasa:", val: skills.coreWeb.join(', ') },
        { label: "Framework & Pustaka:", val: skills.frameworks.join(', ') },
        { label: "Arsitektur Komponen & UI:", val: skills.uiArchitecture.join(', ') },
        { label: "Performa & SEO:", val: skills.optimizationAndSeo.join(', ') },
        { label: "Pengujian & Tools:", val: skills.testingAndTools.join(', ') },
        { label: "Kolaborasi & Workflow:", val: skills.workflowAndCollab.join(', ') }
    ] : [
        { label: "Core Web & Languages:", val: skills.coreWeb.join(', ') },
        { label: "Frameworks & Libraries:", val: skills.frameworks.join(', ') },
        { label: "UI & Component Architecture:", val: skills.uiArchitecture.join(', ') },
        { label: "Performance & SEO:", val: skills.optimizationAndSeo.join(', ') },
        { label: "Testing & Tools:", val: skills.testingAndTools.join(', ') },
        { label: "Workflow & Collaboration:", val: skills.workflowAndCollab.join(', ') }
    ];

    return `<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="UTF-8">
<title>${personal.name} - ${personal.title} CV</title>
<style>
  @page {
    size: A4 portrait;
    margin: 10mm 14mm 10mm 14mm;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    color: #1a1a1a;
    line-height: 1.32;
    font-size: 9.1pt;
    background: #ffffff;
    -webkit-print-color-adjust: exact;
  }
  .header {
    text-align: center;
    border-bottom: 1.5pt solid #222222;
    padding-bottom: 6px;
    margin-bottom: 8px;
  }
  .header h1 {
    font-size: 19pt;
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
    margin-bottom: 2px;
    text-transform: uppercase;
    letter-spacing: 0.8px;
  }
  .header .subtitle {
    font-size: 8.5pt;
    color: #4a5568;
    margin-bottom: 4px;
    font-weight: 500;
  }
  .contact-bar {
    font-size: 8.2pt;
    color: #333333;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 4px 8px;
  }
  .contact-bar a {
    color: #1a1a1a;
    text-decoration: none;
  }
  .contact-bar span.sep {
    color: #999999;
  }
  
  .section {
    margin-bottom: 8px;
    page-break-inside: auto;
  }
  .section-title {
    font-size: 9.8pt;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    color: #1a202c;
    border-bottom: 1pt solid #cbd5e0;
    padding-bottom: 2px;
    margin-bottom: 4px;
  }
  
  .summary-text {
    font-size: 8.6pt;
    color: #2d3748;
    line-height: 1.38;
    text-align: justify;
  }

  .skills-grid {
    display: flex;
    flex-direction: column;
    gap: 2px;
    font-size: 8.4pt;
  }
  .skill-row {
    display: flex;
    line-height: 1.30;
  }
  .skill-category {
    font-weight: 700;
    color: #2d3748;
    width: 185px;
    flex-shrink: 0;
  }
  .skill-items {
    color: #4a5568;
    flex: 1;
  }

  .item-block {
    margin-bottom: 6px;
    page-break-inside: avoid;
  }
  .item-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 1px;
  }
  .item-title {
    font-size: 9.2pt;
    font-weight: 700;
    color: #1a202c;
  }
  .item-subtitle {
    font-size: 8.5pt;
    font-weight: 600;
    color: #2b6cb0;
  }
  .item-meta {
    font-size: 8.2pt;
    color: #4a5568;
    text-align: right;
    font-weight: 500;
  }
  .item-submeta {
    font-size: 8.2pt;
    color: #4a5568;
    margin-bottom: 2px;
    font-style: italic;
  }

  ul.bullets {
    margin-left: 14px;
    margin-top: 2px;
  }
  ul.bullets li {
    font-size: 8.4pt;
    color: #2d3748;
    margin-bottom: 2px;
    line-height: 1.32;
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

  .edu-notes {
    font-size: 8.1pt;
    color: #4a5568;
    margin-top: 2px;
    line-height: 1.30;
    text-align: justify;
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
      <span class="sep">•</span>
      <a href="${personal.portfolio}">${personal.portfolioDisplay}</a>
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
        ${(proj.demoDisplay || proj.repoDisplay) ? `
        <div class="project-links">
          ${proj.demoDisplay ? `${isId ? 'Demo Langsung:' : 'Live Demo:'} <a href="${proj.demoUrl}">${proj.demoDisplay}</a>` : ''}
          ${proj.demoDisplay && proj.repoDisplay ? ' | ' : ''}
          ${proj.repoDisplay ? `${isId ? 'Repositori:' : 'Repository:'} <a href="${proj.repoUrl}">${proj.repoDisplay}</a>` : ''}
        </div>` : ''}
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
        ${edu.notes ? `<p class="edu-notes">${edu.notes}</p>` : ''}
      </div>
    `).join('')}
  </div>

</body>
</html>`;
}

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
        console.warn(`⚠ Headless browser not found, cannot build ${path.basename(pdfPath)}`);
        return;
    }

    const args = [
        '--headless',
        '--disable-gpu',
        '--run-all-compositor-stages-before-draw',
        '--no-pdf-header-footer',
        `--print-to-pdf=${pdfPath}`,
        htmlPath
    ];

    execFileSync(browserPath, args, { stdio: 'pipe' });
    console.log(`✓ Front-End PDF generated: ${path.basename(pdfPath)}`);
}

async function buildDocx(data, docxPath) {
    const { personal, summary, skills, labels, experience, projects, education, lang } = data;
    const isId = lang === 'id';

    const docChildren = [];

    // Header: Name
    docChildren.push(
        new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 40 },
            children: [
                new TextRun({
                    text: personal.name.toUpperCase(),
                    bold: true,
                    size: 30,
                    color: "111111"
                })
            ]
        })
    );

    // Header: Title
    docChildren.push(
        new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 25 },
            children: [
                new TextRun({
                    text: personal.title.toUpperCase(),
                    bold: true,
                    size: 21,
                    color: "2B6CB0"
                })
            ]
        })
    );

    // Header: Subtitle
    docChildren.push(
        new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 60 },
            children: [
                new TextRun({
                    text: personal.subtitle,
                    size: 17,
                    color: "4A5568"
                })
            ]
        })
    );

    // Header: Contact Info
    docChildren.push(
        new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 140 },
            border: {
                bottom: {
                    color: "222222",
                    space: 5,
                    style: BorderStyle.SINGLE,
                    size: 12
                }
            },
            children: [
                new TextRun({ text: `${personal.location}  •  `, size: 16 }),
                new TextRun({ text: `${personal.email}  •  `, size: 16 }),
                new TextRun({ text: `${personal.phone}  •  `, size: 16 }),
                new TextRun({ text: `${personal.linkedinDisplay}  •  `, size: 16 }),
                new TextRun({ text: `${personal.githubDisplay}  •  `, size: 16 }),
                new TextRun({ text: `${personal.portfolioDisplay}`, size: 16 })
            ]
        })
    );

    function createSectionHeading(title) {
        return new Paragraph({
            spacing: { before: 110, after: 60 },
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
                    size: 19,
                    color: "1A202C"
                })
            ]
        });
    }

    // Professional Summary
    docChildren.push(createSectionHeading(labels.professionalSummary));
    docChildren.push(
        new Paragraph({
            spacing: { after: 100 },
            alignment: AlignmentType.JUSTIFIED,
            children: [
                new TextRun({
                    text: summary,
                    size: 17
                })
            ]
        })
    );

    // Technical Skills
    docChildren.push(createSectionHeading(labels.technicalSkills));
    const skillCategories = isId ? [
        { label: "Core Web & Bahasa", val: skills.coreWeb.join(", ") },
        { label: "Framework & Pustaka", val: skills.frameworks.join(", ") },
        { label: "Arsitektur Komponen & UI", val: skills.uiArchitecture.join(", ") },
        { label: "Performa & SEO", val: skills.optimizationAndSeo.join(", ") },
        { label: "Pengujian & Tools", val: skills.testingAndTools.join(", ") },
        { label: "Kolaborasi & Workflow", val: skills.workflowAndCollab.join(", ") }
    ] : [
        { label: "Core Web & Languages", val: skills.coreWeb.join(", ") },
        { label: "Frameworks & Libraries", val: skills.frameworks.join(", ") },
        { label: "UI & Component Architecture", val: skills.uiArchitecture.join(", ") },
        { label: "Performance & SEO", val: skills.optimizationAndSeo.join(", ") },
        { label: "Testing & Tools", val: skills.testingAndTools.join(", ") },
        { label: "Workflow & Collaboration", val: skills.workflowAndCollab.join(", ") }
    ];

    skillCategories.forEach(sc => {
        docChildren.push(
            new Paragraph({
                spacing: { after: 30 },
                children: [
                    new TextRun({ text: `${sc.label}: `, bold: true, size: 16, color: "2D3748" }),
                    new TextRun({ text: sc.val, size: 16, color: "4A5568" })
                ]
            })
        );
    });

    // Professional Experience
    docChildren.push(createSectionHeading(labels.professionalExperience));
    experience.forEach(exp => {
        docChildren.push(
            new Paragraph({
                spacing: { before: 60, after: 15 },
                children: [
                    new TextRun({ text: `${exp.role} `, bold: true, size: 18, color: "1A202C" }),
                    new TextRun({ text: `(${exp.subtitle})`, size: 16, color: "4A5568" }),
                    new TextRun({ text: `\t${exp.period}`, bold: true, size: 16, color: "4A5568" })
                ]
            })
        );
        docChildren.push(
            new Paragraph({
                spacing: { after: 40 },
                children: [
                    new TextRun({ text: `${exp.company} • ${exp.location}`, italics: true, size: 16, color: "4A5568" })
                ]
            })
        );

        exp.responsibilities.forEach(resp => {
            docChildren.push(
                new Paragraph({
                    bullet: { level: 0 },
                    spacing: { after: 30 },
                    alignment: AlignmentType.JUSTIFIED,
                    children: [
                        new TextRun({ text: resp, size: 16, color: "2D3748" })
                    ]
                })
            );
        });
    });

    // Selected Projects
    docChildren.push(createSectionHeading(labels.selectedProjects));
    projects.forEach(proj => {
        docChildren.push(
            new Paragraph({
                spacing: { before: 60, after: 15 },
                children: [
                    new TextRun({ text: proj.name, bold: true, size: 18, color: "1A202C" })
                ]
            })
        );
        docChildren.push(
            new Paragraph({
                spacing: { after: 30 },
                children: [
                    new TextRun({ text: `Tech Stack: ${proj.techStack}`, italics: true, size: 15, color: "4A5568" })
                ]
            })
        );
        const linkRuns = [];
        const demoPrefix = isId ? "Demo Langsung: " : "Live Demo: ";
        const repoPrefix = isId ? "Repositori: " : "Repository: ";
        if (proj.demoDisplay) {
            linkRuns.push(new TextRun({ text: `${demoPrefix}${proj.demoDisplay}`, size: 15, color: "2B6CB0" }));
        }
        if (proj.demoDisplay && proj.repoDisplay) {
            linkRuns.push(new TextRun({ text: "  |  ", size: 15, color: "718096" }));
        }
        if (proj.repoDisplay) {
            linkRuns.push(new TextRun({ text: `${repoPrefix}${proj.repoDisplay}`, size: 15, color: "2B6CB0" }));
        }
        if (linkRuns.length > 0) {
            docChildren.push(
                new Paragraph({
                    spacing: { after: 30 },
                    children: linkRuns
                })
            );
        }

        proj.highlights.forEach(h => {
            docChildren.push(
                new Paragraph({
                    bullet: { level: 0 },
                    spacing: { after: 25 },
                    alignment: AlignmentType.JUSTIFIED,
                    children: [
                        new TextRun({ text: h, size: 16, color: "2D3748" })
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
                spacing: { before: 60, after: 15 },
                children: [
                    new TextRun({ text: edu.degree, bold: true, size: 18, color: "1A202C" }),
                    new TextRun({ text: `\t${edu.graduationYear}`, size: 16, color: "4A5568" })
                ]
            })
        );
        docChildren.push(
            new Paragraph({
                spacing: { after: 30 },
                children: [
                    new TextRun({ text: `${edu.institution} • ${edu.location}`, italics: true, size: 16, color: "4A5568" })
                ]
            })
        );
        if (edu.notes) {
            docChildren.push(
                new Paragraph({
                    spacing: { after: 40 },
                    alignment: AlignmentType.JUSTIFIED,
                    children: [
                        new TextRun({ text: edu.notes, size: 15, color: "4A5568" })
                    ]
                })
            );
        }
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
    console.log(`✓ Front-End DOCX generated: ${path.basename(docxPath)}`);
}

async function main() {
    console.log('=== Front-End Developer ATS CV Generator ===');
    console.log(`Public CV folder: ${publicCvDir}`);
    console.log(`Tailored CV folder: ${outputDir}`);

    const tempHtmlPath = path.join(rootDir, 'scripts', 'temp_frontend_cv.html');

    // 1. English Front-End CV
    console.log('\n--- Generating Front-End CV (EN) ---');
    const htmlEn = generateHtmlCv(frontendCvDataEn);
    fs.writeFileSync(tempHtmlPath, htmlEn, 'utf-8');
    
    const pdfPublicEn = path.join(publicCvDir, 'Ahmad-Ayub-Numan-Frontend-Developer-CV-EN.pdf');
    const docxPublicEn = path.join(publicCvDir, 'Ahmad-Ayub-Numan-Frontend-Developer-CV-EN.docx');
    const pdfTailored = path.join(outputDir, 'Ahmad-Ayub-Numan-Frontend-Developer-CV.pdf');
    const docxTailored = path.join(outputDir, 'Ahmad-Ayub-Numan-Frontend-Developer-CV.docx');

    buildPdf(tempHtmlPath, pdfPublicEn);
    await buildDocx(frontendCvDataEn, docxPublicEn);

    // Keep tailored-cv updated
    if (fs.existsSync(pdfPublicEn)) fs.copyFileSync(pdfPublicEn, pdfTailored);
    if (fs.existsSync(docxPublicEn)) fs.copyFileSync(docxPublicEn, docxTailored);

    // 2. Indonesian Front-End CV
    console.log('\n--- Generating Front-End CV (ID) ---');
    const htmlId = generateHtmlCv(frontendCvDataId);
    fs.writeFileSync(tempHtmlPath, htmlId, 'utf-8');

    const pdfPublicId = path.join(publicCvDir, 'Ahmad-Ayub-Numan-Frontend-Developer-CV-ID.pdf');
    const docxPublicId = path.join(publicCvDir, 'Ahmad-Ayub-Numan-Frontend-Developer-CV-ID.docx');

    buildPdf(tempHtmlPath, pdfPublicId);
    await buildDocx(frontendCvDataId, docxPublicId);

    if (fs.existsSync(tempHtmlPath)) {
        fs.unlinkSync(tempHtmlPath);
    }

    console.log('\n=== Success! Front-End Developer CVs ready in public/cv/ and tailored-cv/ ===');
}

main().catch(err => {
    console.error('Error generating Front-End Developer CV:', err);
    process.exit(1);
});
