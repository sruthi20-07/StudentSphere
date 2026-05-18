import React from "react";
import { PASTEL } from "../../constants/config.js";

const LABELS = ["", "Poor", "Fair", "Good", "Great", "Excellent"];

export default function StarRating({ value, onChange, size = "text-3xl" }) {
  return (
    <section>
      <div className="flex gap-1 sm:gap-2">
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => onChange(n)}
            className={`${size} transition-transform hover:scale-110 active:scale-95 ${
              n <= value ? "star-glow text-amber-400" : "text-gray-200"
            }`}
            aria-label={`Rate ${n} stars`}
          >
            ★
          </button>
        ))}
      </div>
      {value > 0 && (
        <p className="text-sm font-semibold mt-2" style={{ color: PASTEL.purple.text }}>
          {LABELS[value]}
        </p>
      )}
    </section>
  );
}
