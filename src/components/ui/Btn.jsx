import React from "react";

export default function Btn({
  children,
  variant = "primary",
  color,
  href,
  onClick,
  type = "button",
  className = "",
  fullWidth = false,
}) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm transition-transform hover:scale-105 active:scale-95 " +
    (fullWidth ? "w-full " : "") +
    className;

  let style = {};
  let cls = base;

  if (variant === "primary") {
    style = {
      background: `linear-gradient(135deg, ${color.accent}, ${color.text})`,
      color: "#fff",
      boxShadow: `0 8px 24px ${color.accent}55`,
    };
  } else if (variant === "ghost") {
    style = {
      background: "#fff",
      border: `2px solid ${color.accent}`,
      color: color.text,
    };
  } else if (variant === "soft") {
    style = {
      background: color.light,
      color: color.text,
    };
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls} style={style}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cls} style={style}>
      {children}
    </button>
  );
}
