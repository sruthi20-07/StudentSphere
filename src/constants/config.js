export const PASTEL = {
  pink:   { bg: "#FFF0F5", accent: "#F472B6", light: "#FCE7F3", text: "#BE185D" },
  purple: { bg: "#F5F3FF", accent: "#A78BFA", light: "#EDE9FE", text: "#6D28D9" },
  blue:   { bg: "#EFF6FF", accent: "#60A5FA", light: "#DBEAFE", text: "#1D4ED8" },
  cyan:   { bg: "#ECFEFF", accent: "#22D3EE", light: "#CFFAFE", text: "#0E7490" },
  green:  { bg: "#F0FDF4", accent: "#34D399", light: "#D1FAE5", text: "#047857" },
  amber:  { bg: "#FFFBEB", accent: "#FBBF24", light: "#FEF3C7", text: "#92400E" },
  rose:   { bg: "#FFF1F2", accent: "#FB7185", light: "#FFE4E6", text: "#BE123C" },
  indigo: { bg: "#EEF2FF", accent: "#818CF8", light: "#E0E7FF", text: "#3730A3" },
};

export const MARQUEE_ITEMS = [
  "🤝 Student Friendly",
  "💰 Affordable Prices",
  "⚡ Fast Response",
  "🔒 Secure & Confidential",
  "💬 WhatsApp Support",
  "📦 On-Time Delivery",
  "🎓 EAMCET Counselling",
  "📄 Resume & Career Help",
];

export const TRUST_BADGES = [
  { emoji: "🤝", text: "Student Friendly", color: PASTEL.blue },
  { emoji: "💰", text: "Affordable Prices", color: PASTEL.green },
  { emoji: "⚡", text: "Fast Response", color: PASTEL.amber },
  { emoji: "🔒", text: "Secure & Confidential", color: PASTEL.purple },
  { emoji: "💬", text: "WhatsApp Support", color: PASTEL.cyan },
  { emoji: "📦", text: "On-Time Delivery", color: PASTEL.pink },
];

export const HOW_IT_WORKS = [
  { step: 1, icon: "💬", title: "Contact on WhatsApp", desc: "Message me with what you need — no complicated forms." },
  { step: 2, icon: "📎", title: "Share requirements", desc: "Send your documents, details, or project brief securely." },
  { step: 3, icon: "✨", title: "Work completed", desc: "I complete your application, resume, or project with care." },
  { step: 4, icon: "🎉", title: "Delivered with support", desc: "Get your work on time with revisions & WhatsApp help." },
];

export const SERVICE_CATEGORIES = [
  { id: "application", label: "📋 Application & Counselling", color: PASTEL.blue },
  { id: "resume", label: "💼 Resume & Career", color: PASTEL.purple },
  { id: "project", label: "💻 Project Services", color: PASTEL.green },
  { id: "other", label: "✨ Other Support", color: PASTEL.cyan },
];

export const SERVICES = {
  application: [
    { icon: "📊", name: "EAMCET Counselling Help", desc: "Seat allotment guidance & certificate verification support", price: 99, color: PASTEL.blue },
    { icon: "📈", name: "POLYCET Counselling Help", desc: "Diploma counselling process made simple step-by-step", price: 99, color: PASTEL.blue },
    { icon: "🎓", name: "College Admissions", desc: "Help with college admission forms & online applications", price: 29, color: PASTEL.blue },
    { icon: "🏆", name: "Scholarship Applications", desc: "Find & apply for scholarships with guided support", price: 79, color: PASTEL.blue },
    { icon: "📁", name: "Document Upload Help", desc: "Correct formatting, scanning & uploading documents", price: 29, color: PASTEL.blue },
    { icon: "💼", name: "Job Applications", desc: "Online job portal applications & form filling help", price: 79, color: PASTEL.blue },
    { icon: "✍️", name: "Exam Registrations", desc: "JEE, EAMCET, NEET & other exam registration forms", price: 49, color: PASTEL.blue },
    { icon: "📝", name: "Form Filling Services", desc: "Any online/offline form filling done carefully for you", price: 29, color: PASTEL.blue },
  ],
  resume: [
    { icon: "📄", name: "Resume Building", desc: "Professional ATS-friendly resume tailored for you", price: 79, color: PASTEL.purple },
    { icon: "🔗", name: "LinkedIn Profile Setup", desc: "Complete LinkedIn optimization for jobs & internships", price: 50, color: PASTEL.purple },
    { icon: "✉️", name: "Cover Letter Writing", desc: "Personalized cover letters for every application", price: 30, color: PASTEL.purple },
    { icon: "📋", name: "CV Building", desc: "Academic & professional CV for higher studies or jobs", price: 30, color: PASTEL.purple },
    { icon: "🏢", name: "Internship Application Help", desc: "Find, apply & prepare for internship opportunities", price: 50, color: PASTEL.purple },
    { icon: "🐙", name: "GitHub Profile Setup", desc: "Professional GitHub with pinned repos & README", price: 50, color: PASTEL.purple },
  ],
  project: [
    { icon: "🌐", name: "Portfolio Websites", desc: "Beautiful personal portfolio to showcase your work", priceDisplay: "Starts from ₹199", color: PASTEL.green },
    { icon: "🔧", name: "Mini Projects", desc: "HTML/CSS/JS mini projects for college submissions", priceDisplay: "Starts from ₹199", color: PASTEL.green },
    { icon: "⚛️", name: "React Projects", desc: "Modern React apps with hooks & clean UI", priceDisplay: "Starts from ₹199", color: PASTEL.green },
    { icon: "🔥", name: "Firebase Projects", desc: "Full-stack apps with Firebase auth & database", priceDisplay: "Starts from ₹199", color: PASTEL.green },
    { icon: "📑", name: "Project Reports", desc: "Well-formatted project reports for college submissions", priceDisplay: "Starts from ₹199", color: PASTEL.green },
    { icon: "🎨", name: "UI/UX Prototype Design", desc: "Figma wireframes & clickable prototypes", priceDisplay: "Starts from ₹199", color: PASTEL.green },
  ],
  other: [
    { icon: "📚", name: "Study Material Help", desc: "Organized notes, summaries & study resources", priceDisplay: "Starts from your requirement", color: PASTEL.cyan },
    { icon: "❓", name: "Doubt Clarification", desc: "Quick academic & project doubt clearing on WhatsApp", priceDisplay: "Starts from your requirement", color: PASTEL.cyan },
    { icon: "🖌️", name: "UI/UX Design (Prototype)", desc: "Screen designs, layouts & visual improvements", priceDisplay: "Starts from your requirement", color: PASTEL.cyan },
  ],
};

export const PRICING = [
  {
    icon: "📝",
    name: "Quick Help",
    priceLabel: "Starts from your requirement",
    color: PASTEL.cyan,
    popular: false,
    features: [
      "Doubt clarification",
      "Form filling services",
      "Document upload help",
      "Study material help",
      "WhatsApp support",
    ],
  },
  {
    icon: "📋",
    name: "Application & Counselling",
    price: 29,
    priceCaption: "from",
    color: PASTEL.blue,
    popular: false,
    features: [
      "EAMCET / POLYCET help",
      "College admissions",
      "Scholarship applications",
      "Exam registrations",
      "Job applications",
    ],
  },
  {
    icon: "📄",
    name: "Resume & Career",
    price: 30,
    priceCaption: "from",
    color: PASTEL.purple,
    popular: true,
    features: [
      "Resume / CV building",
      "LinkedIn profile setup",
      "Cover letter writing",
      "Internship application help",
      "GitHub profile setup",
    ],
  },
  {
    icon: "💻",
    name: "Projects & Design",
    price: 199,
    priceCaption: "from",
    projectNote: "Projects are based on requirements. Pricing starts from ₹199",
    color: PASTEL.green,
    popular: false,
    features: [
      "Mini & React projects",
      "Portfolio websites",
      "UI/UX prototype design",
      "Project reports",
      "Firebase projects",
    ],
  },
];

export const REVIEW_SERVICES = [
  "Resume Building",
  "Portfolio Website",
  "React Project",
  "Firebase Project",
  "Scholarship Application",
  "EAMCET Counselling",
  "LinkedIn Setup",
  "Documentation Help",
  "Other",
];

export const TABS = [
  { id: "home", label: "Home", icon: "🏠", color: PASTEL.purple },
  { id: "about", label: "About", icon: "👤", color: PASTEL.blue },
  { id: "services", label: "Services", icon: "🎯", color: PASTEL.cyan },
  { id: "pricing", label: "Pricing", icon: "💰", color: PASTEL.amber },
  { id: "reviews", label: "Reviews", icon: "⭐", color: PASTEL.pink },
  { id: "contact", label: "Contact", icon: "💬", color: PASTEL.rose },
];

/** WhatsApp deep links — use generateWhatsAppLink(serviceName, customMessage) */
export { generateWhatsAppLink, WA, WA_PHONE, openWhatsApp, WHATSAPP_SEND_HINT } from "../utils/whatsapp.js";
