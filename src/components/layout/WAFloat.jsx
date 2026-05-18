import React from "react";
import { WA, WHATSAPP_SEND_HINT } from "../../constants/config.js";

export default function WAFloat() {
  return (
    <a
      href={WA}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center text-2xl hover:scale-110 active:scale-95 transition-transform"
      style={{
        background: "linear-gradient(135deg, #22c55e, #16a34a)",
        boxShadow: "0 8px 30px rgba(34,197,94,0.45)",
      }}
      title={WHATSAPP_SEND_HINT}
      aria-label="WhatsApp chat"
    >
      💬
    </a>
  );
}
