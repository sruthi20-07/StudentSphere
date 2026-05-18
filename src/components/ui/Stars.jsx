import React from "react";

export default function Stars({ n = 5, size = "text-lg" }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={`${size} ${i <= n ? "text-amber-400" : "text-gray-200"}`}>
          ★
        </span>
      ))}
    </div>
  );
}
