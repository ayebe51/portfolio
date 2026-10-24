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
import { nghFullStackCvDataEn } from '../src/data/cvData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const tailoredOutputDir = path.join(rootDir, 'tailored-cv');
const publicOutputDir = path.join(rootDir, 'public', 'cv');

if (!fs.existsSync(tailoredOutputDir)) {
    fs.mkdirSync(tailoredOutputDir, { recursive: true });
}
if (!fs.existsSync(publicOutputDir)) {
    fs.mkdirSync(publicOutputDir, { recursive: true });
}

function generateHtmlCv(data) {
    const { personal, summary, skills, labels, experience, projects, education, certifications } = data;

    const skillCategories = [
        { label: "Core & Languages:", val: skills.languages.join(', ') },
        { label: "Frontend & UI/UX:", val: skills.frontend.join(', ') },
        { label: "Backend & Automation:", val: skills.backend.join(', ') },
        { label: "Databases & Modeling:", val: skills.databases.join(', ') },
        { label: "AI & Engineering Workflows:", val: skills.aiAndWorkflow.join(', ') },
        { label: "Testing & Quality Assurance:", val: skills.testingAndQuality.join(', ') },
        { label: "Mobile & Infrastructure:", val: skills.mobileAndDevops.join(', ') }
    ];

    const demoLabel = "Live Demo:";
    const repoLabel = "Repository:";

    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>${personal.name} - ${personal.title} CV (NGH Bali Property Group)</title>
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
    font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif;
    color: #1a202c;
    background: #ffffff;
    font-size: 8.6pt;
    line-height: 1.34;
  }
  
  .header {
    text-align: center;
    border-bottom: 1.5pt solid #1a202c;
    padding-bottom: 6px;
    margin-bottom: 8px;
  }
  .header h1 {
    font-size: 17pt;
    font-weight: 800;
    color: #111111;
    letter-spacing: 0.6px;
    text-transform: uppercase;
    margin-bottom: 2px;
  }
  .header .title {
    font-size: 10.8pt;
    font-weight: 700;
    color: #2b6cb0;
    margin-bottom: 2px;
    text-transform: uppercase;
    letter-spacing: 0.8px;
  }
  .header .subtitle {
    font-size: 8.6pt;
    color: #4a5568;
    margin-bottom: 4px;
    font-weight: 600;
  }
  .contact-bar {
    font-size: 8.1pt;
    color: #2d3748;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 3px 8px;
  }
  .contact-bar a {
    color: #2b6cb0;
    text-decoration: none;
    font-weight: 500;
  }
  .contact-bar span.sep {
    color: #a0aec0;
  }
  .location-badge {
    display: block;
    margin-top: 3px;
    font-size: 8.1pt;
    font-weight: 700;
    color: #2c5282;
    background: #ebf8ff;
    padding: 2px 8px;
    border-radius: 4px;
    display: inline-block;
  }
  
  .section {
    margin-bottom: 8px;
    page-break-inside: auto;
  }
  .section-title {
    font-size: 9.6pt;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    color: #1a202c;
    border-bottom: 1pt solid #cbd5e0;
    padding-bottom: 2px;
    margin-bottom: 4px;
  }
  
  .summary-text {
    font-size: 8.5pt;
    color: #2d3748;
    line-height: 1.36;
    text-align: justify;
  }

  .skills-grid {
    display: flex;
    flex-direction: column;
    gap: 2px;
    font-size: 8.3pt;
  }
  .skill-row {
    display: flex;
    line-height: 1.28;
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
    font-size: 8.3pt;
    color: #2d3748;
    margin-bottom: 2px;
    line-height: 1.32;
    text-align: justify;
  }
  
  .project-links {
    font-size: 7.9pt;
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
      <span>${personal.email}</span>
      <span class="sep">•</span>
      <span>${personal.phone}</span>
      <span class="sep">•</span>
      <a href="${personal.linkedin}">${personal.linkedinDisplay}</a>
      <span class="sep">•</span>
      <a href="${personal.github}">${personal.githubDisplay}</a>
      <span class="sep">•</span>
      <a href="${personal.portfolio}">${personal.portfolioDisplay}</a>
    </div>
    <div class="location-badge">
      📍 ${personal.location}
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
        ${edu.notes ? `<p class="edu-notes">${edu.notes}</p>` : ''}
      </div>
    `).join('')}
  </div>

  <!-- CERTIFICATIONS -->
  ${certifications && certifications.length > 0 ? `
  <div class="section" style="margin-top:6px;">
    <div class="section-title">${labels.certifications}</div>
    ${certifications.map(cert => `
      <div class="item-block" style="margin-bottom:0;">
        <div class="item-header">
          <span class="item-title">${cert.name}</span>
          <span class="item-meta">${cert.issueDate || ''}</span>
        </div>
        <div class="item-submeta">${cert.issuer}${cert.credentialId ? ` • Credential ID: ${cert.credentialId}` : ''}</div>
        ${cert.description ? `<p class="edu-notes">${cert.description}</p>` : ''}
      </div>
    `).join('')}
  </div>
  ` : ''}

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
        console.warn(`⚠ Warning: Headless browser not found, cannot build ${path.basename(pdfPath)}`);
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
    console.log(`✓ PDF generated: ${path.basename(pdfPath)}`);
}

async function buildDocx(data, docxPath) {
    const { personal, summary, skills, labels, experience, projects, education, certifications } = data;

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
                    size: 30, // 15pt
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
            spacing: { after: 50 },
            children: [
                new TextRun({
                    text: personal.subtitle,
                    size: 17,
                    color: "4A5568"
                })
            ]
        })
    );

    // Header: Contact Info & Location
    docChildren.push(
        new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 120 },
            border: {
                bottom: {
                    color: "222222",
                    space: 5,
                    style: BorderStyle.SINGLE,
                    size: 12
                }
            },
            children: [
                new TextRun({ text: `${personal.location}\n`, bold: true, color: "2B6CB0", size: 16 }),
                new TextRun({ text: `${personal.email}  •  ${personal.phone}  •  ${personal.linkedinDisplay}  •  ${personal.githubDisplay}  •  ${personal.portfolioDisplay}`, size: 16 })
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
    const skillCategories = [
        { label: "Core & Languages", val: skills.languages.join(", ") },
        { label: "Frontend & UI/UX", val: skills.frontend.join(", ") },
        { label: "Backend & Automation", val: skills.backend.join(", ") },
        { label: "Databases & Modeling", val: skills.databases.join(", ") },
        { label: "AI & Engineering Workflows", val: skills.aiAndWorkflow.join(", ") },
        { label: "Testing & Quality Assurance", val: skills.testingAndQuality.join(", ") },
        { label: "Mobile & Infrastructure", val: skills.mobileAndDevops.join(", ") }
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
                spacing: { before: 60, after: 20 },
                children: [
                    new TextRun({ text: exp.role, bold: true, size: 18, color: "1A202C" }),
                    new TextRun({ text: ` (${exp.subtitle})`, size: 17, color: "4A5568" }),
                    new TextRun({ text: `\t${exp.period}`, bold: true, size: 16, color: "4A5568" })
                ]
            })
        );

        docChildren.push(
            new Paragraph({
                spacing: { after: 40 },
                children: [
                    new TextRun({ text: `${exp.company} • ${exp.location}`, italics: true, size: 16, color: "718096" })
                ]
            })
        );

        exp.responsibilities.forEach(resp => {
            docChildren.push(
                new Paragraph({
                    bullet: { level: 0 },
                    spacing: { after: 25 },
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
                    new TextRun({ text: proj.name, bold: true, size: 17, color: "1A202C" }),
                    new TextRun({ text: `\t${proj.techStack}`, italics: true, size: 15, color: "4A5568" })
                ]
            })
        );

        const linkRuns = [];
        if (proj.demoUrl) {
            linkRuns.push(new TextRun({ text: `Live Demo: ${proj.demoDisplay}  `, size: 15, color: "2B6CB0" }));
        }
        if (proj.repoUrl) {
            linkRuns.push(new TextRun({ text: `Repository: ${proj.repoDisplay}`, size: 15, color: "2B6CB0" }));
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
                    spacing: { after: 20 },
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
                spacing: { before: 40, after: 20 },
                children: [
                    new TextRun({ text: edu.degree, bold: true, size: 17, color: "1A202C" }),
                    new TextRun({ text: `\t${edu.graduationYear}`, size: 16, color: "4A5568" })
                ]
            })
        );
        docChildren.push(
            new Paragraph({
                spacing: { after: 30 },
                children: [
                    new TextRun({ text: `${edu.institution} • ${edu.location}`, italics: true, size: 16, color: "718096" })
                ]
            })
        );
        if (edu.notes) {
            docChildren.push(
                new Paragraph({
                    spacing: { after: 40 },
                    children: [
                        new TextRun({ text: edu.notes, size: 15, color: "4A5568" })
                    ]
                })
            );
        }
    });

    // Certifications
    if (certifications && certifications.length > 0) {
        docChildren.push(createSectionHeading(labels.certifications));
        certifications.forEach(cert => {
            docChildren.push(
                new Paragraph({
                    spacing: { before: 40, after: 20 },
                    children: [
                        new TextRun({ text: cert.name, bold: true, size: 17, color: "1A202C" }),
                        new TextRun({ text: `\t${cert.issueDate || ''}`, size: 16, color: "4A5568" })
                    ]
                })
            );
            docChildren.push(
                new Paragraph({
                    spacing: { after: 25 },
                    children: [
                        new TextRun({ text: `${cert.issuer}${cert.credentialId ? ` • Credential ID: ${cert.credentialId}` : ''}`, italics: true, size: 16, color: "718096" })
                    ]
                })
            );
            if (cert.description) {
                docChildren.push(
                    new Paragraph({
                        spacing: { after: 40 },
                        children: [
                            new TextRun({ text: cert.description, size: 15, color: "4A5568" })
                        ]
                    })
                );
            }
        });
    }

    const doc = new Document({
        sections: [
            {
                properties: {
                    page: {
                        margin: {
                            top: 720,
                            bottom: 720,
                            left: 850,
                            right: 850
                        }
                    }
                },
                children: docChildren
            }
        ]
    });

    const buffer = await Packer.toBuffer(doc);
    fs.writeFileSync(docxPath, buffer);
    console.log(`✓ DOCX generated: ${path.basename(docxPath)}`);
}

async function main() {
    console.log('=== Generating Tailored CV for NGH Bali Property Group ===\n');

    const htmlContent = generateHtmlCv(nghFullStackCvDataEn);
    const tempHtmlPath = path.join(tailoredOutputDir, 'ngh-cv-temp.html');
    fs.writeFileSync(tempHtmlPath, htmlContent, 'utf-8');

    const baseName = 'Ahmad-Ayub-Numan-Full-Stack-Developer-NGH-Bali-CV';
    const tailoredPdf = path.join(tailoredOutputDir, `${baseName}.pdf`);
    const tailoredDocx = path.join(tailoredOutputDir, `${baseName}.docx`);
    const publicPdf = path.join(publicOutputDir, `${baseName}.pdf`);
    const publicDocx = path.join(publicOutputDir, `${baseName}.docx`);

    // 1. Build PDF
    buildPdf(tempHtmlPath, tailoredPdf);
    if (fs.existsSync(tailoredPdf)) {
        fs.copyFileSync(tailoredPdf, publicPdf);
        console.log(`✓ Copied to public/cv: ${path.basename(publicPdf)}`);
    }

    // 2. Build DOCX
    await buildDocx(nghFullStackCvDataEn, tailoredDocx);
    if (fs.existsSync(tailoredDocx)) {
        fs.copyFileSync(tailoredDocx, publicDocx);
        console.log(`✓ Copied to public/cv: ${path.basename(publicDocx)}`);
    }

    if (fs.existsSync(tempHtmlPath)) {
        fs.unlinkSync(tempHtmlPath);
    }

    console.log('\n=== Success! NGH Tailored CV successfully generated in PDF and DOCX formats ===');
}

main().catch(err => {
    console.error('Error generating NGH tailored CV:', err);
    process.exit(1);
});
