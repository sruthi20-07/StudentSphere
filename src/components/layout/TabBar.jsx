import React, { useState, useEffect } from "react";
import { TABS, WA, PASTEL } from "../../constants/config.js";
import Btn from "../ui/Btn.jsx";

export default function TabBar({ active, setActive }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/97 backdrop-blur-md transition-shadow ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-14 flex items-center justify-between">
          <button
            type="button"
            onClick={() => setActive("home")}
            className="flex items-center gap-2.5 hover:opacity-90 transition-opacity"
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-white font-black text-sm"
              style={{ background: "linear-gradient(135deg, #A78BFA, #F472B6)" }}
            >
              V
            </div>
            <span className="font-bold text-gray-800 text-sm sm:text-base hidden xs:block">
              Vindula Student Services
            </span>
            <span className="font-bold text-gray-800 text-sm sm:hidden">Vindula</span>
          </button>
          <div className="hidden sm:block">
            <Btn href={WA} color={PASTEL.green} variant="primary">
              💬 WhatsApp
            </Btn>
          </div>
        </div>

        <div className="h-[46px] flex items-center overflow-x-auto hide-scrollbar gap-1 pb-1">
          {TABS.map((tab) => {
            const isActive = active === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActive(tab.id)}
                className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all relative ${
                  isActive ? "" : "text-gray-500 hover:text-gray-700"
                }`}
                style={
                  isActive
                    ? {
                        background: tab.color.light,
                        color: tab.color.text,
                        boxShadow: `inset 0 2px 8px ${tab.color.accent}33`,
                      }
                    : {}
                }
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
                {isActive && (
                  <span
                    className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                    style={{ background: tab.color.accent }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}

