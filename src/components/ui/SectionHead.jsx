import React from "react";
import Chip from "./Chip.jsx";

export default function SectionHead({ chip, chipColor, title, highlight, highlightColor, sub }) {
  return (
    <div className="text-center mb-14">
      <Chip text={chip} color={chipColor || highlightColor} />
      <h2 className="text-3xl sm:text-4xl font-black text-gray-800 mb-3 leading-tight">
        {title}{" "}
        {highlight && <span style={{ color: highlightColor.text }}>{highlight}</span>}
      </h2>
      {sub && <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">{sub}</p>}
    </div>
  );
}
