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
// DATA CV EMBASSY DRIVER - FACTUAL & HARVARD RESUME GUIDE STANDARD
// =========================================================================
export const embassyDriverHarvardCvData = {
    lang: "en",
    personal: {
        name: "Ahmad Ayub Nu'man",
        location: "Cilacap, Central Java, Indonesia",
        phone: "+62 895 3491 77555",
        email: "ayb.n1994@gmail.com",
        license: "Indonesian Driving License: SIM A (Valid & Active) • Clean Driving Record"
    },
    summary: "Safety-conscious, dependable, and disciplined Professional Driver with verified experience chauffeuring executive institutional leadership during official duty trips (dinas luar) and managing field transportation logistics. Experienced in driving across regional highways, inter-city corridors, and Greater Jakarta routes with a valid Indonesian Driving License (SIM A) and an accident-free record. Proficient in defensive driving, daily mechanical vehicle inspections (fluids, brakes, tires), vehicle detailing, and secure delivery of official documents and supplies across 270+ educational institutions. Demonstrates good conversational English, high protocol awareness, and absolute discretion regarding official matters. Fully flexible, willing to relocate to Jakarta, and available for irregular operational schedules, early morning departures, evenings, and weekend assignments.",
    experience: [
        {
            company: "LP MA'ARIF NU CILACAP",
            location: "Cilacap, Central Java, Indonesia",
            role: "Institutional Operations & Official Executive Chauffeur",
            period: "2024 – Present",
            bullets: [
                "Entrusted as dedicated chauffeur for institutional executive leadership (Chairman H. Ali Sodiqin & Secretary Ngadino) during official external duty trips (dinas luar), leadership conferences, and inter-city travel with a zero-incident safety record.",
                "Manage operational road transport and secure distribution of official decrees, examination logistics, and supplies across an expansive network of 270+ madrasahs and schools.",
                "Execute rigorous daily pre-trip and post-trip vehicle safety inspections (engine oil, coolant, brake fluid, lights, battery, and tire pressure) and maintain immaculate vehicle cleanliness inside and out.",
                "Navigate regional highways, inter-provincial corridors, and urban routes utilizing real-time GPS navigation (Google Maps, Waze) to anticipate traffic conditions and guarantee timely arrivals.",
                "Uphold absolute discretion, professional protocol, and strict confidentiality regarding high-level leadership deliberations and official correspondence during transit.",
                "Maintain complete adherence to defensive driving techniques, passenger comfort standards, traffic safety laws, and emergency vehicle readiness."
            ]
        }
    ],
    education: [
        {
            institution: "STAI AT-TAHDZIB",
            location: "East Java, Indonesia",
            degree: "Bachelor of Laws (Sarjana Hukum - S.H.)",
            year: "Graduated 2019",
            bullet: "Rigorous academic training in legal compliance, statutory ethics, institutional governance, and procedural integrity, reinforcing strict adherence to official protocols and confidentiality."
        }
    ],
    skillsCategories: [
        {
            category: "Licenses & Driving Record",
            items: "Indonesian Driving License SIM A (Active & Valid); Clean Driving Record (Zero at-fault accidents, zero traffic violations); Defensive Driving Certified principles."
        },
        {
            category: "Core Driving & Navigation",
            items: "Official Duty Chauffeur (Dinas Luar), Greater Jakarta & Inter-City Road Mastery, Real-Time GPS Route Planning (Waze, Google Maps), Airport Transfers (CGK & HLP)."
        },
        {
            category: "Vehicle Care & Maintenance",
            items: "Pre-Trip & Post-Trip Mechanical Inspections (Engine Oil, Coolant, Brake Fluid, Battery, Tire Pressure), Detailing & Sanitization, Workshop Servicing Coordination."
        },
        {
            category: "Protocol & Professionalism",
            items: "Absolute Discretion & Confidentiality of Official Matters, Punctuality (15–30 min advance arrival), Executive Etiquette, Flexible Hours Availability (40 hrs/week + time off compensation)."
        },
        {
            category: "Languages",
            items: "English (Good Spoken Proficiency; fluent passenger interaction and route briefings), Indonesian (Native Speaker)."
        }
    ],
    references: [
        {
            name: "H. Ali Sodiqin, S.Ag., M.Pd.I.",
            title: "Chairman (Ketua)",
            organization: "LP Ma'arif NU Cilacap",
            phone: "+62 819-3404-2125",
            email: "maarifcilacap.official@gmail.com",
            relationship: "Primary Institutional Leader & Executive Passenger",
            contact: "Tel: +62 819-3404-2125"
        },
        {
            name: "Ngadino, S.Pd.I., M.Pd.",
            title: "Secretary (Sekretaris)",
            organization: "LP Ma'arif NU Cilacap",
            phone: "+62 813-2830-8530",
            email: "ngadino.maarif@gmail.com",
            relationship: "Institutional Secretary & Operational Supervisor",
            contact: "Tel: +62 813-2830-8530"
        }
    ]
};

// =========================================================================
// GENERATE HARVARD STYLE HTML CV (STRICT 1-PAGE A4 FORMAT)
// =========================================================================
function generateHarvardHtmlCv(data) {
    const { personal, summary, experience, education, skillsCategories, references } = data;

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
    font-size: 8.35pt;
    line-height: 1.23;
    -webkit-print-color-adjust: exact;
  }
  
  /* Harvard Standard Header */
  .header {
    text-align: center;
    margin-bottom: 5px;
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
  .header .license-line {
    font-size: 8.1pt;
    font-style: italic;
    margin-top: 1px;
  }

  /* Harvard Section Titles */
  .section {
    margin-bottom: 4.5px;
    page-break-inside: avoid;
  }
  .section-title {
    font-size: 8.8pt;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-bottom: 0.75pt solid #000000;
    padding-bottom: 1px;
    margin-bottom: 2.5px;
  }

  .summary-text {
    font-size: 8.1pt;
    line-height: 1.24;
    text-align: justify;
  }

  /* Harvard Experience Entries */
  .entry {
    margin-bottom: 3.5px;
    page-break-inside: avoid;
  }
  .entry-row-1 {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-size: 8.4pt;
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
    font-size: 8.2pt;
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
    font-size: 8.05pt;
    line-height: 1.21;
    margin-bottom: 1px;
    text-align: justify;
  }

  /* Skills Category */
  .skills-list {
    font-size: 8.05pt;
    line-height: 1.22;
  }
  .skills-row {
    margin-bottom: 1.2px;
  }
  .skills-label {
    font-weight: bold;
  }

  /* References Line */
  .ref-line {
    font-size: 8pt;
    line-height: 1.22;
    margin-bottom: 1.2px;
  }
  .ref-name {
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
    <div class="license-line">
      ${personal.license}
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

  <!-- EDUCATION -->
  <div class="section">
    <div class="section-title">Education</div>
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
  </div>

  <!-- SKILLS, LICENSES & ADDITIONAL INFORMATION -->
  <div class="section">
    <div class="section-title">Licenses, Skills & Additional Information</div>
    <div class="skills-list">
      ${skillsCategories.map(sc => `
        <div class="skills-row">
          <span class="skills-label">${sc.category}:</span> ${sc.items}
        </div>
      `).join('')}
    </div>
  </div>

  <!-- REFERENCES -->
  <div class="section">
    <div class="section-title">Professional References</div>
    ${references.map(ref => `
      <div class="ref-line">
        <span class="ref-name">&bull; ${ref.name}</span> &mdash; ${ref.title}, ${ref.organization} (${ref.contact})
      </div>
    `).join('')}
  </div>

</body>
</html>`;
}

// =========================================================================
// BUILD HARVARD DOCX CV (Word Format)
// =========================================================================
async function buildHarvardDocxCv(data, docxPath) {
    const { personal, summary, experience, education, skillsCategories, references } = data;

    const createSectionHeading = (title) => {
        return new Paragraph({
            spacing: { before: 100, after: 30 },
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
                    size: 18,
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
                new TextRun({ text: personal.name.toUpperCase(), bold: true, size: 26, font: "Times New Roman" })
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
        // License
        new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 60 },
            children: [
                new TextRun({ text: personal.license, italics: true, size: 15, font: "Times New Roman" })
            ]
        }),

        // Summary
        createSectionHeading("Professional Summary"),
        new Paragraph({
            alignment: AlignmentType.JUSTIFIED,
            spacing: { after: 40 },
            children: [
                new TextRun({ text: summary, size: 16, font: "Times New Roman" })
            ]
        }),

        // Experience
        createSectionHeading("Professional Experience")
    ];

    experience.forEach(exp => {
        docChildren.push(
            new Paragraph({
                spacing: { before: 50, after: 10 },
                tabStops: [
                    {
                        type: TabStopType.RIGHT,
                        position: TabStopPosition.MAX
                    }
                ],
                children: [
                    new TextRun({ text: exp.company, bold: true, size: 17, font: "Times New Roman" }),
                    new TextRun({ text: `\t${exp.location}`, italics: true, size: 16, font: "Times New Roman" })
                ]
            }),
            new Paragraph({
                spacing: { after: 20 },
                tabStops: [
                    {
                        type: TabStopType.RIGHT,
                        position: TabStopPosition.MAX
                    }
                ],
                children: [
                    new TextRun({ text: exp.role, italics: true, size: 16, font: "Times New Roman" }),
                    new TextRun({ text: `\t${exp.period}`, italics: true, size: 16, font: "Times New Roman" })
                ]
            })
        );
        exp.bullets.forEach(bullet => {
            docChildren.push(
                new Paragraph({
                    bullet: { level: 0 },
                    spacing: { after: 12 },
                    alignment: AlignmentType.JUSTIFIED,
                    children: [
                        new TextRun({ text: bullet, size: 15, font: "Times New Roman" })
                    ]
                })
            );
        });
    });

    // Education
    docChildren.push(createSectionHeading("Education"));
    education.forEach(edu => {
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
                    new TextRun({ text: edu.institution, bold: true, size: 17, font: "Times New Roman" }),
                    new TextRun({ text: `\t${edu.location}`, italics: true, size: 16, font: "Times New Roman" })
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
                    new TextRun({ text: edu.degree, italics: true, size: 16, font: "Times New Roman" }),
                    new TextRun({ text: `\t${edu.year}`, italics: true, size: 16, font: "Times New Roman" })
                ]
            }),
            new Paragraph({
                bullet: { level: 0 },
                spacing: { after: 20 },
                alignment: AlignmentType.JUSTIFIED,
                children: [
                    new TextRun({ text: edu.bullet, size: 15, font: "Times New Roman" })
                ]
            })
        );
    });

    // Skills, Licenses & Additional Information
    docChildren.push(createSectionHeading("Licenses, Skills & Additional Information"));
    skillsCategories.forEach(sc => {
        docChildren.push(
            new Paragraph({
                spacing: { after: 15 },
                children: [
                    new TextRun({ text: `${sc.category}: `, bold: true, size: 15, font: "Times New Roman" }),
                    new TextRun({ text: sc.items, size: 15, font: "Times New Roman" })
                ]
            })
        );
    });

    // References
    docChildren.push(createSectionHeading("Professional References"));
    references.forEach(ref => {
        docChildren.push(
            new Paragraph({
                bullet: { level: 0 },
                spacing: { after: 15 },
                children: [
                    new TextRun({ text: `${ref.name} `, bold: true, size: 15, font: "Times New Roman" }),
                    new TextRun({ text: `— ${ref.title}, ${ref.organization} (${ref.contact})`, size: 15, font: "Times New Roman" })
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
                            top: 500,
                            bottom: 500,
                            left: 650,
                            right: 650
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
// GENERATE STANDALONE PROFESSIONAL REFERENCES HTML (A4 PRINT)
// =========================================================================
function generateReferencesHtml(data) {
    const { personal, references } = data;

    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Professional References - ${personal.name} - Embassy Driver Position</title>
<style>
  @page {
    size: A4 portrait;
    margin: 18mm 20mm;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    color: #1e293b;
    background: #ffffff;
    font-size: 9.2pt;
    line-height: 1.45;
  }
  .header {
    border-bottom: 2px solid #0f2d59;
    padding-bottom: 10px;
    margin-bottom: 18px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .applicant-name {
    font-size: 17pt;
    font-weight: 800;
    color: #0f2d59;
    text-transform: uppercase;
  }
  .applicant-title {
    font-size: 10pt;
    font-weight: 700;
    color: #1e40af;
  }
  .applicant-meta {
    font-size: 8.5pt;
    color: #475569;
    text-align: right;
    line-height: 1.4;
  }
  .doc-title {
    background: #f8fafc;
    border-left: 4px solid #0f2d59;
    padding: 8px 12px;
    margin-bottom: 18px;
  }
  .doc-title h2 {
    font-size: 11pt;
    font-weight: 800;
    color: #0f2d59;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  .doc-title p {
    font-size: 8.5pt;
    color: #64748b;
    margin-top: 2px;
  }
  .intro-text {
    font-size: 9pt;
    color: #334155;
    margin-bottom: 18px;
    line-height: 1.45;
  }
  .ref-card {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-left: 3.5px solid #1e40af;
    border-radius: 4px;
    padding: 12px 14px;
    margin-bottom: 16px;
  }
  .ref-name {
    font-size: 10.5pt;
    font-weight: 800;
    color: #0f2d59;
  }
  .ref-title {
    font-size: 9pt;
    font-weight: 700;
    color: #1e40af;
    margin-bottom: 2px;
  }
  .ref-org {
    font-size: 8.8pt;
    color: #475569;
    margin-bottom: 6px;
  }
  .ref-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 8.6pt;
    margin-top: 6px;
  }
  .ref-table td {
    padding: 2.5px 0;
    vertical-align: top;
  }
  .ref-table td.label {
    width: 155px;
    font-weight: 700;
    color: #0f2d59;
  }
  .ref-table td.val {
    color: #334155;
  }
  .declaration-box {
    background: #eff6ff;
    border: 1px solid #bfdbfe;
    border-radius: 4px;
    padding: 10px 14px;
    margin-top: 20px;
    font-size: 8.6pt;
    color: #1e3a8a;
    line-height: 1.4;
  }
  .declaration-box strong { color: #0f2d59; }
</style>
</head>
<body>

  <div class="header">
    <div>
      <div class="applicant-name">${personal.name}</div>
      <div class="applicant-title">Professional Chauffeur & Embassy Driver</div>
    </div>
    <div class="applicant-meta">
      Cilacap, Central Java, Indonesia<br>
      Phone: ${personal.phone}<br>
      Email: ${personal.email}
    </div>
  </div>

  <div class="doc-title">
    <h2>Professional References</h2>
    <p>Position: Embassy Driver • Embassy of the Republic of Chile to Indonesia and ASEAN</p>
  </div>

  <p class="intro-text">
    The following institutional leaders of LP Ma'arif NU Cilacap can provide direct verification regarding my safe driving record, vehicle maintenance diligence, executive punctuality, discretion during official duty trips (dinas luar), and overall work reliability:
  </p>

  ${references.map((ref, idx) => `
    <div class="ref-card">
      <div class="ref-name">${idx + 1}. ${ref.name}</div>
      <div class="ref-title">${ref.title}</div>
      <div class="ref-org">${ref.organization}</div>
      <table class="ref-table">
        <tr>
          <td class="label">Professional Relationship:</td>
          <td class="val">${ref.relationship}</td>
        </tr>
        <tr>
          <td class="label">Telephone / WhatsApp:</td>
          <td class="val"><strong>${ref.phone}</strong></td>
        </tr>
        <tr>
          <td class="label">Verification Focus:</td>
          <td class="val">Safe driving during official leadership trips (dinas luar), school logistics delivery, pre-trip vehicle care, punctuality, and confidentiality.</td>
        </tr>
      </table>
    </div>
  `).join('')}

  <div class="declaration-box">
    <strong>Candidate Authorization:</strong>
    I hereby confirm that the references listed above have been informed and have given their consent to be contacted by the Selection Committee of the Embassy of the Republic of Chile in Jakarta to provide verbal or written verification of my qualifications and employment record.
  </div>

</body>
</html>`;
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
<title>Cover Letter - ${personal.name} - Embassy Driver Position</title>
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
      <div class="applicant-title">Professional Chauffeur & Embassy Driver</div>
    </div>
    <div class="applicant-meta">
      Cilacap, Central Java, Indonesia<br>
      Phone / WhatsApp: ${personal.phone}<br>
      Email: ${personal.email}<br>
      Date: October 26, 2026
    </div>
  </div>

  <div class="recipient-block">
    <strong>To: Selection Committee / Administration Office</strong><br>
    Embassy of the Republic of Chile to Indonesia and ASEAN<br>
    Jakarta, Indonesia<br>
    Email: echile.indonesia@minrel.gob.cl
  </div>

  <div class="subject-line">
    Subject: Application for Embassy Driver Position
  </div>

  <p>Dear Selection Committee,</p>

  <p>I am writing to formally submit my application for the <strong>Embassy Driver</strong> position at the Embassy of the Republic of Chile in Jakarta, as advertised in your vacancy announcement. With a valid Indonesian Driving License (SIM A), a completely clean driving record, extensive practical driving experience, and fluent spoken English communication skills, I am enthusiastic about the opportunity to provide exceptional, safe, and dependable transportation services to the Embassy personnel and visiting dignitaries.</p>

  <p>In my current role at LP Ma'arif NU Cilacap (2024 – Present), I am frequently entrusted to drive institutional vehicles for executive leadership (the Chairman and Secretary) during official external duty trips (<em>dinas luar</em>), inter-city journeys, and official institutional visits, as well as transporting logistics and educational supplies across 270+ madrasahs. I am confident that my qualifications directly address every key requirement of this position:</p>

  <ul class="highlights">
    <li><strong>Safe & Defensive Driving Record:</strong> I hold a valid SIM A with an accident-free record. I practice defensive driving habits, prioritizing smooth acceleration, passenger comfort, and strict adherence to traffic regulations, odd-even rules, and expressway navigation.</li>
    <li><strong>Daily Vehicle Maintenance & Cleanliness:</strong> I perform systematic pre-trip inspections (fluid levels, tire pressure, brakes, lights, wipers) and maintain vehicles in spotless, pristine condition inside and out, preventing mechanical issues.</li>
    <li><strong>Official Courier & Supply Transportation:</strong> Experienced in safely delivering official documents, institutional decrees, examination materials, and supplies across a large network of educational institutions with complete accountability.</li>
    <li><strong>Discretion & Confidentiality:</strong> Holding a Bachelor of Laws (S.H.) degree and regularly driving executive leadership during official business, I strictly uphold confidentiality and diplomatic discretion regarding all official matters heard or handled in transit.</li>
    <li><strong>English Communication & Schedule Flexibility:</strong> I communicate fluently and politely in spoken English with international visitors. I am fully prepared to work flexible hours, including early mornings, late evenings, and weekends according to official Embassy operational needs (compensated as time off).</li>
  </ul>

  <p>In accordance with the application procedure, I have attached:</p>
  <ol style="margin-left: 20px; margin-bottom: 10px; font-size: 8.6pt; color: #334155;">
    <li>My updated Curriculum Vitae (CV) formatted to the Harvard Resume Guide standard</li>
    <li>A copy of my valid Indonesian Driving License (SIM A)</li>
    <li>A copy of my National Identity Card (KTP)</li>
    <li>Contact details for my professional references (Chairman and Secretary of LP Ma'arif NU Cilacap)</li>
  </ol>

  <p>I welcome the opportunity to attend an in-person interview and a practical driving assessment at your earliest convenience to demonstrate my road competence and commitment to serving the Embassy of Chile. Thank you very much for your time and consideration.</p>

  <div class="signature-block">
    <p>Sincerely,</p>
    <div class="signature-name">${personal.name}</div>
    <p style="font-size: 8.2pt; color: #475569;">Applicant for Embassy Driver Position<br>Embassy of the Republic of Chile in Jakarta</p>
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
    console.log('=== Embassy of Chile Driver Harvard Resume Generator (Factual Revision) ===');
    console.log(`Output folder: ${outputDir}`);

    // 1. GENERATE HARVARD CV (PDF & DOCX)
    const tempCvHtml = path.join(rootDir, 'scripts', 'temp_embassy_driver_harvard_cv.html');
    const cvHarvardPdfPath = path.join(outputDir, 'Ahmad-Ayub-Numan-Embassy-Driver-Chile-Harvard-CV.pdf');
    const cvHarvardDocxPath = path.join(outputDir, 'Ahmad-Ayub-Numan-Embassy-Driver-Chile-Harvard-CV.docx');
    const cvPdfPath = path.join(outputDir, 'Ahmad-Ayub-Numan-Embassy-Driver-Chile-CV.pdf');
    const cvDocxPath = path.join(outputDir, 'Ahmad-Ayub-Numan-Embassy-Driver-Chile-CV.docx');

    fs.writeFileSync(tempCvHtml, generateHarvardHtmlCv(embassyDriverHarvardCvData), 'utf-8');
    buildPdf(tempCvHtml, cvHarvardPdfPath);
    await buildHarvardDocxCv(embassyDriverHarvardCvData, cvHarvardDocxPath);

    try {
        fs.copyFileSync(cvHarvardPdfPath, cvPdfPath);
        fs.copyFileSync(cvHarvardDocxPath, cvDocxPath);
    } catch (e) {
        // Locked by OS viewer, Harvard-named file is active
    }

    if (fs.existsSync(tempCvHtml)) fs.unlinkSync(tempCvHtml);

    // 2. GENERATE COVER LETTER (PDF)
    const tempCoverHtml = path.join(rootDir, 'scripts', 'temp_embassy_driver_cover.html');
    const coverPdfPath = path.join(outputDir, 'Ahmad-Ayub-Numan-Embassy-Driver-Cover-Letter.pdf');
    fs.writeFileSync(tempCoverHtml, generateCoverLetterHtml(embassyDriverHarvardCvData), 'utf-8');
    buildPdf(tempCoverHtml, coverPdfPath);
    if (fs.existsSync(tempCoverHtml)) fs.unlinkSync(tempCoverHtml);

    // 3. GENERATE PROFESSIONAL REFERENCES (PDF)
    const tempRefHtml = path.join(rootDir, 'scripts', 'temp_embassy_driver_ref.html');
    const refPdfPath = path.join(outputDir, 'Ahmad-Ayub-Numan-Embassy-Driver-Professional-References.pdf');
    fs.writeFileSync(tempRefHtml, generateReferencesHtml(embassyDriverHarvardCvData), 'utf-8');
    buildPdf(tempRefHtml, refPdfPath);
    if (fs.existsSync(tempRefHtml)) fs.unlinkSync(tempRefHtml);

    // Copy to public/cv/ for web access / download
    [cvHarvardPdfPath, cvHarvardDocxPath, coverPdfPath, refPdfPath].forEach(filePath => {
        try {
            fs.copyFileSync(filePath, path.join(publicCvDir, path.basename(filePath)));
        } catch (e) {}
    });

    console.log('\n=== Success! All revised Harvard-standard Embassy Driver files generated successfully! ===');
}

main().catch(err => {
    console.error('Error generating Harvard Embassy Driver files:', err);
    process.exit(1);
});
