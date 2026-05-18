import React from "react";
import { HOW_IT_WORKS, PASTEL } from "../../constants/config.js";
import SectionHead from "../ui/SectionHead.jsx";
import Card from "../ui/Card.jsx";

export default function HowItWorks({ embedded = false }) {
  return (
    <section className={embedded ? "" : "max-w-6xl mx-auto px-4 sm:px-6 py-10"}>
      {!embedded && (
        <SectionHead
          chip="Simple Process"
          chipColor={PASTEL.indigo}
          title="How It"
          highlight="Works"
          highlightColor={PASTEL.indigo}
          sub="Getting help is easy — just 4 simple steps on WhatsApp."
        />
      )}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {HOW_IT_WORKS.map((step, i) => (
          <Card
            key={step.step}
            className="p-5 text-center hover:-translate-y-1 transition-transform relative"
            style={{ background: PASTEL.indigo.bg }}
          >
            <span
              className="absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black text-white"
              style={{ background: PASTEL.indigo.accent }}
            >
              {step.step}
            </span>
            <div className="text-3xl mb-3">{step.icon}</div>
            <h3 className="font-bold text-gray-800 text-sm mb-2">{step.title}</h3>
            <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
            {i < HOW_IT_WORKS.length - 1 && (
              <span className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 text-gray-300 text-lg">
                →
              </span>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
}
