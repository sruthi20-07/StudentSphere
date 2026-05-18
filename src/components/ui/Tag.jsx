import React from "react";

export default function Tag({ text, color }) {
  return (
    <span
      style={{ background: color.light, color: color.text }}
      className="px-2.5 py-0.5 rounded-lg text-xs font-semibold"
    >
      {text}
    </span>
  );
}
