import React from "react";

export default function Card({ children, className = "", style = {} }) {
  return (
    <div className={`bg-white rounded-3xl shadow-sm border border-gray-100 ${className}`} style={style}>
      {children}
    </div>
  );
}
