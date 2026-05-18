import React from "react";
import { PASTEL, PRICING, generateWhatsAppLink, WHATSAPP_SEND_HINT } from "../../constants/config.js";
import SectionHead from "../ui/SectionHead.jsx";
import Card from "../ui/Card.jsx";
import Btn from "../ui/Btn.jsx";

const FAQS = [
  {
    icon: "⏱️",
    q: "How long does delivery take?",
    a: "Most tasks are done in 24–48 hours. Bigger projects like React apps take 3–5 days.",
  },
  {
    icon: "💳",
    q: "How do payments work?",
    a: "UPI/GPay/PhonePe. Under ₹99 — full upfront. Larger projects — 50% advance, 50% after delivery.",
  },
  {
    icon: "🎨",
    q: "Can you customize projects?",
    a: "Absolutely! Every project is built fresh from scratch to match your exact requirements.",
  },
];

export default function PricingTab() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <SectionHead
        chip="Pricing"
        chipColor={PASTEL.amber}
        title="Simple, Student-First"
        highlight="Pricing"
        highlightColor={PASTEL.amber}
        sub="Transparent pricing with no hidden fees."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {PRICING.map((plan) => (
          <Card
            key={plan.name}
            className={`p-6 flex flex-col relative hover:-translate-y-1 transition-transform ${
              plan.popular ? "border-2" : ""
            }`}
            style={
              plan.popular
                ? {
                    borderColor: plan.color.accent,
                    background: `linear-gradient(180deg, ${plan.color.bg} 0%, #fff 60%)`,
                  }
                : {}
            }
          >
            {plan.popular && (
              <span
                className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white whitespace-nowrap"
                style={{ background: "linear-gradient(135deg, #A78BFA, #F472B6)" }}
              >
                ⭐ Most Popular
              </span>
            )}
            <div className="text-3xl mb-3">{plan.icon}</div>
            <h3 className="font-bold text-gray-800 mb-2">{plan.name}</h3>
            <div className="mb-1">
              {plan.priceLabel ? (
                <span className="text-2xl sm:text-3xl font-black block leading-tight" style={{ color: plan.color.text }}>
                  {plan.priceLabel}
                </span>
              ) : (
                <>
                  {plan.priceCaption === "from" && (
                    <span className="text-gray-500 text-sm font-semibold mr-1">From</span>
                  )}
                  <span className="text-3xl font-black" style={{ color: plan.color.text }}>
                    ₹{plan.price}
                  </span>
                  <span className="text-gray-400 text-sm ml-1">onwards</span>
                </>
              )}
            </div>
            {plan.projectNote && (
              <p className="text-xs text-gray-500 mt-2 mb-1 leading-relaxed">{plan.projectNote}</p>
            )}
            <ul className="space-y-2 my-6 flex-grow">
              {plan.features.map((f) => (
                <li key={f} className="text-sm text-gray-600 flex gap-2">
                  <span style={{ color: plan.color.text }}>✓</span> {f}
                </li>
              ))}
            </ul>
            <Btn
              color={plan.color}
              variant={plan.popular ? "primary" : "ghost"}
              href={generateWhatsAppLink(plan.name)}
              fullWidth
            >
              Get Started
            </Btn>
          </Card>
        ))}
      </div>

      <p className="text-xs text-gray-400 text-center mb-10 max-w-md mx-auto leading-relaxed">
        {WHATSAPP_SEND_HINT}
      </p>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {FAQS.map((f) => (
          <Card key={f.q} className="p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <h3 className="font-bold text-gray-800 mb-2">{f.q}</h3>
            <p className="text-sm text-gray-500">{f.a}</p>
          </Card>
        ))}
      </div>

      <p className="text-center text-sm text-gray-500">
        🔒 Your documents and information are kept secure and confidential.
      </p>
    </div>
  );
}
