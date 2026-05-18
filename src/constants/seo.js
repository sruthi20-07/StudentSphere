/** Site URL for canonical, Open Graph, and sitemap (set VITE_SITE_URL in production). */
export const SITE_URL =
  (import.meta.env.VITE_SITE_URL || "https://student-sphere-one.vercel.app").replace(/\/$/, "");

export const SITE_NAME = "Vindula Student Services";

export const DEFAULT_TITLE =
  "Vindula Student Services | Resume, Projects & Counselling Help";

export const DEFAULT_DESCRIPTION =
  "Helping students with resumes, projects, counselling, scholarship applications, portfolio websites, React projects, Firebase projects and career support.";

export const KEYWORDS =
  "resume building, student services, portfolio websites, React projects, Firebase projects, EAMCET counselling, scholarship applications, career support, student help center, ATS resume, mini projects";

export const PAGE_SEO = {
  home: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  about: {
    title: `About | ${SITE_NAME}`,
    description:
      "Meet Vindula Sruthi — BTech student offering affordable help with applications, resumes, projects, and counselling for students and parents.",
  },
  services: {
    title: `Student Services | ${SITE_NAME}`,
    description:
      "EAMCET & POLYCET counselling, college admissions, resume building, React & Firebase projects, portfolio websites, and more — priced for students.",
  },
  pricing: {
    title: `Affordable Pricing | ${SITE_NAME}`,
    description:
      "Transparent student-friendly pricing for counselling, resumes, mini projects, portfolio websites, and career support. From ₹29 onwards.",
  },
  reviews: {
    title: `Student Reviews | ${SITE_NAME}`,
    description:
      "Read real feedback from students who used resume, project, and counselling services. Share your experience.",
  },
  contact: {
    title: `Contact & WhatsApp | ${SITE_NAME}`,
    description:
      "Contact Vindula Student Services on WhatsApp for resume help, projects, counselling, and quick enquiries. Confidential student support.",
  },
};

export const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  description: DEFAULT_DESCRIPTION,
  url: SITE_URL,
  telephone: "+91-63042-06091",
  areaServed: "IN",
  priceRange: "₹₹",
  serviceType: [
    "Resume Building",
    "EAMCET Counselling",
    "Portfolio Website Development",
    "React Projects",
    "Scholarship Application Help",
  ],
  audience: {
    "@type": "EducationalAudience",
    educationalRole: "student",
  },
};
