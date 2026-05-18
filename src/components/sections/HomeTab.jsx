import React from "react";
import { PASTEL, WA, MARQUEE_ITEMS, TRUST_BADGES, WHATSAPP_SEND_HINT } from "../../constants/config.js";
import Btn from "../ui/Btn.jsx";
import HowItWorks from "./HowItWorks.jsx";

const FLOATING = [
  { emoji: "📚", className: "top-16 left-8 text-4xl" },
  { emoji: "🎓", className: "top-20 right-12 text-5xl" },
  { emoji: "💼", className: "top-1/2 left-6 text-4xl" },
  { emoji: "📄", className: "top-1/2 right-8 text-4xl" },
  { emoji: "🚀", className: "bottom-32 right-16 text-5xl" },
  { emoji: "⭐", className: "top-1/3 left-1/4 text-3xl" },
];

const HIGHLIGHTS = [
  { emoji: "🎓", label: "Counselling Help", color: PASTEL.blue },
  { emoji: "📄", label: "Resume & Career", color: PASTEL.purple },
  { emoji: "💻", label: "Projects & Reports", color: PASTEL.green },
  { emoji: "💬", label: "WhatsApp Support", color: PASTEL.cyan },
];

export default function HomeTab({ setActive }) {
  const marquee = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #FFF5FF 0%, #EFF6FF 40%, #F0FDF4 100%)",
      }}
    >
      <div
        className="absolute top-0 left-0 w-72 h-72 rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{ background: PASTEL.purple.accent }}
      />
      <div
        className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: PASTEL.pink.accent }}
      />

      {FLOATING.map((f, i) => (
        <span
          key={i}
          className={`absolute opacity-35 animate-floatBob pointer-events-none ${f.className}`}
          style={{ animationDelay: `${i * 0.5}s` }}
        >
          {f.emoji}
        </span>
      ))}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center min-h-[calc(100vh-220px)]">
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
              style={{ background: PASTEL.green.light, color: PASTEL.green.text }}
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available for new students ✨
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-800 leading-tight mb-4">
              Helping{" "}
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Students
              </span>{" "}
              Achieve More
            </h1>

            <p className="text-gray-600 text-lg mb-1">Applications · Resumes · Projects · Career Support</p>
            <p className="text-gray-500 mb-8">Built by a student, for students & parents.</p>

            <div className="flex flex-wrap gap-3 mb-2">
              <Btn color={PASTEL.purple} variant="primary" onClick={() => setActive("services")}>
                🎯 View Services
              </Btn>
              <Btn color={PASTEL.green} variant="primary" href={WA}>
                💬 WhatsApp Me
              </Btn>
            </div>
            <p className="text-xs text-gray-400 mb-8 max-w-md leading-relaxed">{WHATSAPP_SEND_HINT}</p>

            <div className="flex flex-wrap gap-2">
              {TRUST_BADGES.map((t) => (
                <span
                  key={t.text}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                  style={{ background: t.color.light, color: t.color.text }}
                >
                  {t.emoji} {t.text}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-8 hover:-translate-y-1 transition-transform">
            <div className="flex flex-col items-center text-center">
              <div
                className="w-20 h-20 rounded-3xl flex items-center justify-center text-white font-black text-2xl mb-4"
                style={{ background: "linear-gradient(135deg, #A78BFA, #F472B6)" }}
              >
                VS
              </div>
              <h3 className="text-xl font-black text-gray-800">Vindula Sruthi</h3>
              <p className="font-semibold mb-4" style={{ color: PASTEL.purple.text }}>
                Student Services Helper
              </p>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                Affordable help for counselling, applications, resumes, projects & more — all on WhatsApp.
              </p>
              <div className="grid grid-cols-2 gap-3 w-full mb-6">
                {HIGHLIGHTS.map((h) => (
                  <div
                    key={h.label}
                    className="rounded-2xl p-3 text-center"
                    style={{ background: h.color.bg }}
                  >
                    <div className="text-xl mb-1">{h.emoji}</div>
                    <div className="text-xs font-semibold text-gray-700">{h.label}</div>
                  </div>
                ))}
              </div>
              <Btn color={PASTEL.green} variant="primary" href={WA} fullWidth>
                💬 Chat on WhatsApp
              </Btn>
              <p className="text-[11px] text-gray-400 mt-3 leading-relaxed">{WHATSAPP_SEND_HINT}</p>
            </div>
          </div>
        </div>

        <div className="mt-16 mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-center text-gray-800 mb-2">
            How It <span style={{ color: PASTEL.indigo.text }}>Works</span>
          </h2>
          <p className="text-center text-gray-500 text-sm mb-8 max-w-md mx-auto">
            Simple 4-step process — no stress, just WhatsApp.
          </p>
          <HowItWorks embedded />
        </div>
      </div>

      <div className="overflow-hidden py-3" style={{ background: PASTEL.purple.light }}>
        <div className="flex w-max animate-marquee">
          {marquee.map((item, i) => (
            <span
              key={i}
              className="flex-shrink-0 px-8 text-sm font-semibold whitespace-nowrap"
              style={{ color: PASTEL.purple.text }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
