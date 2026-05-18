import React, { useState } from "react";
import { PASTEL, WA, WHATSAPP_SEND_HINT } from "../../constants/config.js";
import SectionHead from "../ui/SectionHead.jsx";
import Card from "../ui/Card.jsx";
import Btn from "../ui/Btn.jsx";

const CONTACTS = [
  { icon: "💬", title: "WhatsApp", sub: "+91 63042 06091 — fastest way!", href: WA, color: PASTEL.green },
  { icon: "📧", title: "Email", sub: "vindulasruthi20@gmail.com", href: "mailto:vindulasruthi20@gmail.com", color: PASTEL.blue },
  { icon: "📸", title: "Instagram", sub: "@matti._.burra", href: "#", color: PASTEL.pink },
];

const FAQS = [
  {
    q: "⏱️ How long does delivery take?",
    a: "Most tasks are done in 24–48 hours. Bigger projects may take 3–5 days — I'll always tell you upfront on WhatsApp.",
  },
  {
    q: "💳 How do payments work?",
    a: "UPI / GPay / PhonePe.",
  },
  {
    q: "🔒 Are my documents safe?",
    a: "100% confidential. Your documents and personal info are never shared with anyone. Safe for students & parents.",
  },
  {
    q: "👨‍👩‍👧 Can parents contact you?",
    a: "Yes! Parents are welcome to message on WhatsApp. I'll explain everything clearly and keep you updated.",
  },
  {
    q: "🎓 What services do you offer?",
    a: "EAMCET/POLYCET counselling, college admissions, resumes, projects, form filling, reports & more — all student-friendly prices.",
  },
];

export default function ContactTab() {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", service: "", message: "" });
  };

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <SectionHead
        chip="Contact"
        chipColor={PASTEL.rose}
        title="Let's Work"
        highlight="Together 🤝"
        highlightColor={PASTEL.rose}
        sub="Students & parents — message me on WhatsApp for quick, friendly help."
      />

      <Card
        className="p-5 sm:p-6 mb-8 max-w-3xl mx-auto text-center"
        style={{ background: PASTEL.green.bg, borderColor: PASTEL.green.light }}
      >
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          👋 <strong>Hey student!</strong> Stuck with an application, resume, or project? I&apos;m a fellow
          BTech student here to help — not a big company. Chat on WhatsApp, share what you need, and
          I&apos;ll guide you step by step. <strong>Parents welcome too</strong> — your child&apos;s documents
          stay private & secure. 🔒
        </p>
      </Card>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-14">
        <div>
          <div className="space-y-4 mb-6">
            {CONTACTS.map((c) => (
              <a
                key={c.title}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                title={c.href?.includes("wa.me") ? WHATSAPP_SEND_HINT : undefined}
                className="flex items-center gap-4 p-4 rounded-2xl transition-transform hover:-translate-y-1"
                style={{ background: c.color.bg }}
              >
                <span className="text-3xl">{c.icon}</span>
                <div>
                  <p className="font-bold text-gray-800">{c.title}</p>
                  <p className="text-sm text-gray-500">{c.sub}</p>
                </div>
              </a>
            ))}
          </div>

          <Btn color={PASTEL.green} variant="primary" href={WA} fullWidth className="mb-2">
            💬 Quick Chat on WhatsApp
          </Btn>
          <p className="text-xs text-gray-400 text-center mb-3 leading-relaxed">{WHATSAPP_SEND_HINT}</p>
          <p className="text-xs text-gray-500 text-center leading-relaxed">
            🔒 Confidential · 🤝 Student-friendly · ⚡ Fast replies · 📦 On-time delivery
          </p>
        </div>

        <Card className="p-6">
          <h3 className="text-lg font-black text-gray-800 mb-2">📬 Quick Enquiry</h3>
          <p className="text-xs text-gray-500 mb-4">
            Fill this form — I&apos;ll reply on WhatsApp. No spam, ever.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              required
              placeholder="Your full name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
            <input
              type="email"
              placeholder="Your email (optional)"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
            <input
              type="text"
              required
              placeholder="What service do you need?"
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
            <textarea
              rows={4}
              required
              placeholder="Tell me more about what you need..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-300 resize-none"
            />
            {sent && (
              <div
                className="p-3 rounded-xl text-sm font-medium"
                style={{ background: PASTEL.green.light, color: PASTEL.green.text }}
              >
                Thanks! I&apos;ll get back to you soon on WhatsApp. 💬
              </div>
            )}
            <Btn color={PASTEL.purple} variant="primary" fullWidth type="submit">
              Send Message 🚀
            </Btn>
          </form>
        </Card>
      </div>

      <div className="max-w-3xl mx-auto space-y-3">
        {FAQS.map((f, i) => (
          <Card key={i} className="overflow-hidden">
            <button
              type="button"
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
              className="w-full flex items-center justify-between p-5 text-left font-bold text-gray-800 hover:bg-gray-50 transition-colors gap-4"
            >
              <span>{f.q}</span>
              <span
                className={`text-gray-400 transition-transform flex-shrink-0 ${openFaq === i ? "rotate-180" : ""}`}
              >
                ▾
              </span>
            </button>
            {openFaq === i && (
              <p className="px-5 pb-5 text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-3">
                {f.a}
              </p>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
}
