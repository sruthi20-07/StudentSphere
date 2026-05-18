import React, { useState } from "react";
import { PASTEL, SERVICES, SERVICE_CATEGORIES, generateWhatsAppLink } from "../../constants/config.js";
import SectionHead from "../ui/SectionHead.jsx";
import Card from "../ui/Card.jsx";
import Btn from "../ui/Btn.jsx";

export default function ServicesTab() {
  const [category, setCategory] = useState("application");
  const items = SERVICES[category];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <SectionHead
        chip="What I Offer"
        chipColor={PASTEL.cyan}
        title="Services Built for"
        highlight="Students"
        highlightColor={PASTEL.cyan}
        sub="Affordable, student-friendly services for applications, resumes, and projects."
      />

      <div className="flex flex-nowrap sm:flex-wrap justify-start sm:justify-center gap-3 mb-10 overflow-x-auto hide-scrollbar pb-1">
        {SERVICE_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setCategory(cat.id)}
            className={`flex-shrink-0 px-4 py-2.5 rounded-2xl text-sm font-bold transition-all hover:scale-105 active:scale-95 ${
              category === cat.id ? "" : "bg-white border-2 border-gray-200 text-gray-600"
            }`}
            style={
              category === cat.id
                ? { background: cat.color.light, color: cat.color.text, border: `2px solid ${cat.color.accent}44` }
                : {}
            }
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((s) => (
          <Card key={s.name} className="p-6 flex flex-col hover:-translate-y-1 transition-transform">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4"
              style={{ background: s.color.light }}
            >
              {s.icon}
            </div>
            <h3 className="font-bold text-gray-800 mb-2">{s.name}</h3>
            <p className="text-sm text-gray-500 flex-grow mb-4">{s.desc}</p>
            <hr className="border-gray-100 mb-4" />
            <div className="flex items-center justify-between">
              <span className="font-black" style={{ color: s.color.text }}>
                From ₹{s.price}
              </span>
              <Btn color={s.color} variant="soft" href={generateWhatsAppLink(s.name)}>
                Enquire →
              </Btn>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
