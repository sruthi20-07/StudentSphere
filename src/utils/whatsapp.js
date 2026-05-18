/**
 * Centralized WhatsApp enquiry links.
 * URL format: https://wa.me/916304206091?text=<encodeURIComponent(message)>
 * Use <a href={url} target="_blank" rel="noreferrer"> (see Btn.jsx).
 */

export const WA_PHONE = "916304206091";

/** Tooltip + helper copy for WhatsApp links */
export const WHATSAPP_SEND_HINT = "After WhatsApp opens, press Send to start chatting.";

/** Keys = exact service / plan names from config (or aliases below). */
const TEMPLATES = {
  "EAMCET Counselling Help": `Hi Vindula 👋

I need help with EAMCET Counselling.

My details:
• Rank:
• Category:
• Preferred colleges:
• Preferred branch:
• State:

Please guide me through the counselling process.`,

  "POLYCET Counselling Help": `Hi Vindula 👋

I need help with POLYCET Counselling.

Details:
• Rank:
• Preferred college:
• Preferred branch:
• Documents ready?:

Please guide me with counselling.`,

  "College Admissions": `Hi Vindula 👋

I need help with College Admissions.

Details:
• Course:
• Preferred colleges:
• State:
• Admission type:

Please share admission guidance.`,

  "Scholarship Applications": `Hi Vindula 👋

I want help with Scholarship Applications.

Details:
• Scholarship name:
• Qualification:
• Required documents:
• Deadline:

Please guide me through the process.`,

  "Document Upload Help": `Hi Vindula 👋

I need help uploading documents.

Details:
• Portal name:
• Document types:
• Deadline:
• Error if any:

Please help me complete the upload.`,

  "Job Applications": `Hi Vindula 👋

I need help with Job Applications.

Details:
• Job role:
• Resume ready?:
• Companies applying for:
• ATS optimization needed?:

Please share process and pricing.`,

  "Exam Registrations": `Hi Vindula 👋

I need help with Exam Registration.

Details:
• Exam name:
• Last date:
• Documents ready?:

Please help me complete registration.`,

  "Form Filling Services": `Hi Vindula 👋

I need help with Form Filling Services.

Details:
• Form type:
• Last date:
• Documents ready?:

Please help me complete the form.`,

  "Resume Building": `Hi Vindula 👋

I want help with Resume Building.

Details:
• Branch:
• Year:
• Skills:
• Experience:
• Target role/company:

Please share pricing and samples.`,

  "LinkedIn Profile Setup": `Hi Vindula 👋

I want help setting up my LinkedIn profile.

Details:
• Current role/student status:
• Skills:
• Career goal:

Please share pricing and process.`,

  "Cover Letter Writing": `Hi Vindula 👋

I need a professional Cover Letter.

Details:
• Job role:
• Company:
• Experience:
• Skills:

Please share pricing.`,

  "CV Building": `Hi Vindula 👋

I want help building a professional CV.

Please share process and pricing.`,

  "Internship Application Help": `Hi Vindula 👋

I need help with Internship Applications.

Details:
• Preferred domain:
• Resume ready?:
• Companies:

Please guide me.`,

  "GitHub Profile Setup": `Hi Vindula 👋

I want help setting up my GitHub profile professionally.

Please share details and pricing.`,

  "Portfolio Websites": `Hi Vindula 👋

I want a Portfolio Website.

Requirements:
• Sections needed:
• Preferred colors:
• Need deployment?:
• Deadline:

Please share pricing and timeline.`,

  "Mini Projects": `Hi Vindula 👋

I need a Mini Project.

Details:
• Topic:
• Technology:
• Deadline:
• Documentation needed?:

Please share pricing and samples.`,

  "React Projects": `Hi Vindula 👋

I need help with a React Project.

Details:
• Features required:
• Firebase needed?:
• Deadline:

Please share pricing.`,

  "Firebase Projects": `Hi Vindula 👋

I need help with a Firebase Project.

Details:
• Authentication needed?:
• Database needed?:
• Hosting required?:

Please share process and pricing.`,

  "Project Reports": `Hi Vindula 👋

I need help preparing Project Reports.

Details:
• Project topic:
• Technology:
• Deadline:

Please share pricing.`,

  "UI/UX Prototype Design": `Hi Vindula 👋

I need help with UI/UX Prototype Design.

Details:
• Website/app type:
• Need Figma?:
• Preferred style:
• Deadline:

Please share pricing and design process.`,

  "Study Material Help": `Hi Vindula 👋

I need Study Material Help.

Details:
• Subject / topic:
• What format helps you most?:
• Deadline:

Please share pricing based on my requirement.`,

  "Doubt Clarification": `Hi Vindula 👋

I need Doubt Clarification.

Details:
• Subject / topic:
• Where I'm stuck:

Please share pricing based on my requirement.`,

  "UI/UX Design (Prototype)": `Hi Vindula 👋

I need help with UI/UX Design (Prototype).

Details:
• Website/app type:
• Need Figma?:
• Preferred style:
• Deadline:

Please share pricing based on my requirement.`,

  "Quick Help": `Hi Vindula 👋

I'm interested in Quick Help (doubt clarification, small tasks, study tips).

Details:
• What I need:
• Urgency / deadline:

Please share pricing based on my requirement.`,

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

/** Aliases → template key (must exist in TEMPLATES). */
const SERVICE_NAME_TO_KEY = {
  "Portfolio Website": "Portfolio Websites",
  "React Project": "React Projects",
  "Firebase Project": "Firebase Projects",
  "Scholarship Application": "Scholarship Applications",
  "EAMCET Counselling": "EAMCET Counselling Help",
  "POLYCET Counselling": "POLYCET Counselling Help",
  "LinkedIn Setup": "LinkedIn Profile Setup",
  "UI/UX Design Help": "UI/UX Design (Prototype)",
  "Documentation Help": "General",
  Other: "General",
};

function resolveTemplateKey(serviceName) {
  if (!serviceName || typeof serviceName !== "string" || !serviceName.trim()) {
    return "General";
  }
  const trimmed = serviceName.trim();
  if (TEMPLATES[trimmed]) return trimmed;
  return SERVICE_NAME_TO_KEY[trimmed] || trimmed;
}

function getMessageBody(serviceName) {
  const key = resolveTemplateKey(serviceName);
  if (TEMPLATES[key]) return TEMPLATES[key];
  return `Hi Vindula 👋

I'm interested in: ${serviceName.trim()}

Details:
• What I need:
• Deadline:
• Any other notes:

Please share pricing and next steps.

Thank you!`;
}

/**
 * Full WhatsApp URL for wa.me with pre-filled message.
 * @param {string} [serviceName] - Service or plan label from UI (template lookup).
 * @param {string} [customMessage] - If non-empty, used as the message body instead of templates.
 * @returns {string}
 */
export function generateWhatsAppLink(serviceName, customMessage) {
  const body =
    typeof customMessage === "string" && customMessage.trim().length > 0
      ? customMessage.trim()
      : getMessageBody(serviceName);
  return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(body)}`;
}

/**
 * Open WhatsApp in a new tab (same behaviour as Btn with target="_blank").
 * @param {string} [serviceName]
 * @param {string} [customMessage]
 */
export function openWhatsApp(serviceName, customMessage) {
  window.open(generateWhatsAppLink(serviceName, customMessage), "_blank", "noopener,noreferrer");
}

/** Generic enquiry link (navbar, float, footer, home, contact default). */
export const WA = generateWhatsAppLink();
