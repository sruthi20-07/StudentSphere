import React, { useRef } from "react";
import { useInView } from "../../hooks/useInView.js";
import { useCountUp } from "../../hooks/useCountUp.js";

export default function StatCounter({ label, target, suffix = "", color, icon }) {
  const ref = useRef();
  const visible = useInView(ref);
  const val = useCountUp(target, 2000, visible);
  return (
    <div ref={ref} className="flex items-center gap-4 p-4 rounded-2xl" style={{ background: color.bg }}>
      <div
        className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
        style={{ background: color.light }}
      >
        {icon}
      </div>
      <div>
        <div className="text-2xl font-black" style={{ color: color.text }}>
          {val}
          {suffix}
        </div>
        <div className="text-xs text-gray-500 font-medium">{label}</div>
      </div>
    </div>
  );
}
