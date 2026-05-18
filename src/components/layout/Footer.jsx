import React from "react";
import { WA } from "../../constants/config.js";

export default function Footer({ setActive }) {
  const go = (id) => {
    setActive(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const linkBtn = (id, label) => (
    <button
      type="button"
      onClick={() => go(id)}
      className="text-gray-400 hover:text-white text-sm text-left transition-colors"
    >
      {label}
    </button>
  );

  return (
    <footer className="bg-gray-900 text-white pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black"
                style={{ background: "linear-gradient(135deg, #A78BFA, #F472B6)" }}
              >
                V
              </div>
              <span className="font-bold">Vindula Student Services</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-3">
              Helping students with applications, resumes, projects & career support.
            </p>
            <p className="text-gray-400 text-sm mb-1">🔒 Your info is always confidential.</p>
            <p className="text-gray-400 text-sm">📞 +91 63042 06091</p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-gray-300">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {linkBtn("home", "Home")}
              {linkBtn("about", "About")}
              {linkBtn("services", "Services")}
              {linkBtn("pricing", "Pricing")}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-gray-300">Services</h4>
            <div className="flex flex-col gap-2">
              {linkBtn("services", "Application Help")}
              {linkBtn("services", "Resume & Career")}
              {linkBtn("services", "Project Services")}
              {linkBtn("pricing", "Pricing")}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-gray-300">Connect</h4>
            <div className="flex flex-col gap-2">
              <a href={WA} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white text-sm transition-colors">
                WhatsApp
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Instagram
              </a>
              {linkBtn("reviews", "Reviews")}
              {linkBtn("contact", "Contact")}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-gray-500">
          <span>© 2024 Vindula Student Services. All rights reserved.</span>
          <span>Made with 💜 for students</span>
        </div>
      </div>
    </footer>
  );
}
