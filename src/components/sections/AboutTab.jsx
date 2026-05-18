import React from "react";
import { PASTEL, TRUST_BADGES } from "../../constants/config.js";
import Chip from "../ui/Chip.jsx";
import Card from "../ui/Card.jsx";
import HowItWorks from "./HowItWorks.jsx";

const CARDS = [
  { icon: "🎓", title: "BTech Student", sub: "Engineering", color: PASTEL.purple },
  { icon: "💬", title: "WhatsApp Support", sub: "Always available", color: PASTEL.green },
  { icon: "⚡", title: "Fast Delivery", sub: "24–48 hours", color: PASTEL.amber },
  { icon: "🔒", title: "100% Confidential", sub: "Your data is safe", color: PASTEL.blue },
  { icon: "💰", title: "Affordable", sub: "From ₹29 onwards", color: PASTEL.cyan },
  { icon: "✨", title: "Custom Work", sub: "Every task is unique", color: PASTEL.pink },
];

const ROWS = [
  { icon: "🎓", text: "BTech Student — I understand your college journey", color: PASTEL.purple },
  { icon: "📋", text: "EAMCET, POLYCET, admissions & scholarship help", color: PASTEL.blue },
  { icon: "💸", text: "Affordable pricing from ₹29 — made for students", color: PASTEL.green },
  { icon: "📱", text: "Friendly WhatsApp support — quick & easy", color: PASTEL.cyan },
  { icon: "🔒", text: "All documents kept strictly confidential", color: PASTEL.pink },
];

export default function AboutTab() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <div className="grid md:grid-cols-2 gap-12 mb-14">
        <div>
          <Chip text="About Me" color={PASTEL.purple} />
          <h2 className="text-3xl sm:text-4xl font-black text-gray-800 mb-6">
            Hi, I&apos;m Vindula Sruthi 👋
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            I&apos;m a BTech student offering friendly, affordable help for counselling, college
            applications, resumes, projects, and more. Parents and students can reach me easily on
            WhatsApp — no complicated process.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Whether you need EAMCET counselling guidance, a professional resume, or a mini project for
            college — I&apos;m here to support you with patience, clarity, and complete confidentiality.
          </p>
          <div className="space-y-3">
            {ROWS.map((r) => (
              <article
                key={r.text}
                className="flex items-center gap-3 p-3 rounded-2xl"
                style={{ background: r.color.bg }}
              >
                <span className="text-xl">{r.icon}</span>
                <span className="text-sm font-medium text-gray-700">{r.text}</span>
              </article>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {CARDS.map((c) => (
            <Card
              key={c.title}
              className="p-4 text-center hover:-translate-y-1 transition-transform"
              style={{ background: c.color.bg, borderColor: c.color.light }}
            >
              <p className="text-3xl mb-2">{c.icon}</p>
              <p className="font-bold text-sm text-gray-800">{c.title}</p>
              <p className="text-xs text-gray-500 mt-1">{c.sub}</p>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-14">
        {TRUST_BADGES.map((t) => (
          <span
            key={t.text}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold"
            style={{ background: t.color.light, color: t.color.text }}
          >
            {t.emoji} {t.text}
          </span>
        ))}
      </div>

      <HowItWorks />
    </section>
  );
}
