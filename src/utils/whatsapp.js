/**
 * Centralized WhatsApp enquiry links — one template per service / bundle.
 * Phone: 916304206091 (no + in wa.me URL)
 */

export const WA_PHONE = "916304206091";

const TEMPLATES = {
  "Resume Building": `Hi Vindula 👋

I want help with Resume Building.

Here are my details:
• Branch:
• Year:
• Skills:
• Internship experience:
• Preferred resume type:
• Target company/job:

Please share pricing and process.`,

  "Portfolio Website": `Hi Vindula 👋

I want a Portfolio Website.

Here are my requirements:
• Portfolio type:
• Sections needed:
• Preferred colors:
• Need contact form?:
• Need deployment?:
• Deadline:

Please share pricing and timeline.`,

  "React Project": `Hi Vindula 👋

I need help with a React Project.

Project details:
• Project title:
• Features required:
• Firebase needed?:
• Deadline:
• Documentation needed?:

Please share cost and development timeline.`,

  "Firebase Project": `Hi Vindula 👋

I need help with a Firebase Project.

Requirements:
• Authentication needed?:
• Database needed?:
• Hosting required?:
• Project type:
• Deadline:

Please share pricing and process.`,

  "Scholarship Application": `Hi Vindula 👋

I want help with Scholarship Applications.

Details:
• Scholarship name:
• Qualification:
• Required documents:
• Deadline:

Please guide me with the process.`,

  "EAMCET Counselling": `Hi Vindula 👋

I need guidance for EAMCET Counselling.

Details:
• Rank:
• Category:
• Preferred colleges:
• Preferred branch:
• State:

Please guide me through counselling.`,

  "POLYCET Counselling": `Hi Vindula 👋

I need guidance for POLYCET Counselling.

Details:
• Rank / merit:
• Category:
• Preferred colleges / branches:
• Diploma details:
• State:

Please guide me through counselling.`,

  "LinkedIn Setup": `Hi Vindula 👋

I want help setting up my LinkedIn profile.

Details:
• Current role/student status:
• Skills:
• Career goal:
• Need portfolio linking?:

Please share process and pricing.`,

  "Document Upload Help": `Hi Vindula 👋

I need help uploading documents.

Details:
• Which portal?:
• Document types:
• Deadline:
• Any errors showing?:

Please help me complete the process.`,

  "Job Applications": `Hi Vindula 👋

I need help with Job Applications.

Details:
• Target role:
• Resume ready?:
• Company names:
• Need ATS optimization?:

Please share process and support details.`,

  "Exam Registrations": `Hi Vindula 👋

I need help with Exam Registration.

Details:
• Exam name:
• Last date:
• Documents ready?:
• Category:

Please help me with registration.`,

  "Mini Projects": `Hi Vindula 👋

I need a Mini Project.

Requirements:
• Project topic:
• Technology:
• Need report/documentation?:
• Deadline:

Please share pricing and samples.`,

  "UI/UX Design": `Hi Vindula 👋

I need help with UI/UX Design.

Requirements:
• App/website type:
• Preferred style:
• Need Figma?:
• Deadline:

Please share pricing and design process.`,

  "College Admissions": `Hi Vindula 👋

I need help with College Admissions.

Details:
• Course / program:
• Colleges applying to:
• Documents ready?:
• Deadline:

Please share process and support.`,

  "Form Filling Services": `Hi Vindula 👋

I need help with Form Filling.

Details:
• Form / portal name:
• Purpose:
• Documents available?:
• Deadline:

Please help me complete it correctly.`,

  "Cover Letter Writing": `Hi Vindula 👋

I want help with Cover Letter Writing.

Details:
• Role / program applying for:
• Resume link or summary:
• Tone (formal / friendly):
• Deadline:

Please share pricing and process.`,

  "CV Building": `Hi Vindula 👋

I want help with CV Building.

Details:
• Academic / job purpose:
• Branch / field:
• Achievements to highlight:
• Deadline:

Please share pricing and process.`,

  "Internship Application Help": `Hi Vindula 👋

I need Internship Application Help.

Details:
• Field / domain:
• Year of study:
• Resume ready?:
• Target companies (if any):

Please share process and pricing.`,

  "GitHub Profile Setup": `Hi Vindula 👋

I want help with GitHub Profile Setup.

Details:
• Projects to showcase:
• Username preference:
• Need README templates?:

Please share process and pricing.`,

  "Academic Project Reports": `Hi Vindula 👋

I need help with Academic Project Reports.

Details:
• Project title:
• Format (IEEE / college format):
• Word count / pages:
• Deadline:

Please share pricing and timeline.`,

  "Study Material Help": `Hi Vindula 👋

I need Study Material Help.

Details:
• Subject / topic:
• Exam or course:
• Preferred format (notes / summary):
• Deadline:

Please share how you can help.`,

  "Doubt Clarification": `Hi Vindula 👋

I need Doubt Clarification help.

Details:
• Subject / topic:
• Where I'm stuck:
• Preferred time for chat:

Please let me know the next steps.`,

  "Project Reports": `Hi Vindula 👋

I need help with Project Reports.

Details:
• Project title:
• College requirements:
• Deadline:

Please share pricing and process.`,

  "Documentation Help": `Hi Vindula 👋

I need Documentation Help.

Details:
• Project / topic:
• Type (synopsis / report / manual):
• Format required:
• Deadline:

Please share pricing and timeline.`,

  "Quick Help": `Hi Vindula 👋

I'm interested in Quick Help (doubt clarification, small forms, study tips).

Details:
• What I need:
• Urgency / deadline:

Please share pricing and availability.`,

  "Application & Counselling": `Hi Vindula 👋

I'm interested in Application & Counselling help (EAMCET / POLYCET, admissions, scholarships, exams, jobs).

Details:
• What I need specifically:
• Rank / category (if counselling):
• Deadline:

Please share pricing and process.`,

  "Resume & Career": `Hi Vindula 👋

I'm interested in the Resume & Career package (resume/CV, LinkedIn, cover letter, internships, GitHub).

Details:
• What I need first:
• Branch / year:
• Career goal:

Please share pricing and process.`,

  "Projects & Design": `Hi Vindula 👋

I'm interested in Projects & Design (portfolio, mini/React/Firebase, UI/UX, reports).

Details:
• Type of project:
• Tech stack (if any):
• Deadline:

Please share pricing and timeline.`,

  General: `Hi Vindula 👋

I'd like to know more about your student services.

Details:
• What I need:
• Deadline:
• Any other notes:

Please share pricing and next steps.

Thank you!`,
};

/** Map UI / config labels → template keys in TEMPLATES */
const SERVICE_NAME_TO_KEY = {
  "Resume Building": "Resume Building",
  "Portfolio Websites": "Portfolio Website",
  "Portfolio Website": "Portfolio Website",
  "React Projects": "React Project",
  "React Project": "React Project",
  "Firebase Projects": "Firebase Project",
  "Firebase Project": "Firebase Project",
  "Scholarship Applications": "Scholarship Application",
  "Scholarship Application": "Scholarship Application",
  "EAMCET Counselling Help": "EAMCET Counselling",
  "EAMCET Counselling": "EAMCET Counselling",
  "POLYCET Counselling Help": "POLYCET Counselling",
  "LinkedIn Profile Setup": "LinkedIn Setup",
  "LinkedIn Setup": "LinkedIn Setup",
  "Document Upload Help": "Document Upload Help",
  "Job Applications": "Job Applications",
  "Exam Registrations": "Exam Registrations",
  "Mini Projects": "Mini Projects",
  "UI/UX Prototype Design": "UI/UX Design",
  "UI/UX Design Help": "UI/UX Design",
  "College Admissions": "College Admissions",
  "Form Filling Services": "Form Filling Services",
  "Cover Letter Writing": "Cover Letter Writing",
  "CV Building": "CV Building",
  "Internship Application Help": "Internship Application Help",
  "GitHub Profile Setup": "GitHub Profile Setup",
  "Academic Project Reports": "Academic Project Reports",
  "Study Material Help": "Study Material Help",
  "Doubt Clarification": "Doubt Clarification",
  "Project Reports": "Project Reports",
  "Documentation Help": "Documentation Help",
  "Quick Help": "Quick Help",
  "Application & Counselling": "Application & Counselling",
  "Resume & Career": "Resume & Career",
  "Projects & Design": "Projects & Design",
  Other: "General",
};

function getMessageBody(serviceName) {
  if (!serviceName || typeof serviceName !== "string" || !serviceName.trim()) {
    return TEMPLATES.General;
  }
  const trimmed = serviceName.trim();
  const key = SERVICE_NAME_TO_KEY[trimmed] || trimmed;
  if (TEMPLATES[key]) return TEMPLATES[key];
  return `Hi Vindula 👋

I'm interested in: ${trimmed}

Details:
• What I need:
• Deadline:
• Any other notes:

Please share pricing and next steps.

Thank you!`;
}

/**
 * Full WhatsApp URL for wa.me with pre-filled message.
 * @param {string} [serviceName] - Service or bundle label from UI; omit for general enquiry.
 * @returns {string}
 */
export function generateWhatsAppLink(serviceName) {
  const text = getMessageBody(serviceName);
  return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(text)}`;
}

/**
 * Open WhatsApp in a new tab (same behaviour as Btn with target="_blank").
 * @param {string} [serviceName]
 */
export function openWhatsApp(serviceName) {
  const url = generateWhatsAppLink(serviceName);
  window.open(url, "_blank", "noopener,noreferrer");
}

/** Generic enquiry link (navbar, float, footer, home, contact default). */
export const WA = generateWhatsAppLink();
