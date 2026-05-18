import React from "react";

export default function Chip({ text, color }) {
  return (
    <span
      style={{
        background: color.light,
        color: color.text,
        borderColor: color.accent + "44",
      }}
      className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase border mb-4"
    >
      {text}
    </span>
  );
}
