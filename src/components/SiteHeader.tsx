"use client";

import { useState, useEffect } from "react";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white shadow-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center flex-shrink-0 cursor-pointer"
        >
          <p className="text-[#0F172A] font-bold text-sm md:text-base leading-tight tracking-tight hover:text-[#2563EB] transition-colors">
            小さなコミュニティ実践講座
          </p>
        </button>

        {/* ナビゲーション */}
        <nav className="hidden lg:flex items-center gap-6">
          {[
            { label: "講座内容", href: "#program" },
            { label: "カリキュラム", href: "#curriculum" },
            { label: "受講の流れ", href: "#how-to" },
            { label: "講師紹介", href: "#instructor" },
            { label: "よくある質問", href: "#faq" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[#374151] hover:text-[#2563EB] text-sm font-medium transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 flex-shrink-0">
          <a
            href="#purchase"
            className="inline-flex items-center bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs md:text-sm font-bold px-4 py-2.5 rounded-lg transition-colors duration-200 shadow-sm"
          >
            今すぐ交流会を始める
          </a>
          <a
            href="#zoom-consult"
            className="hidden sm:inline-flex items-center bg-white hover:bg-[#EFF6FF] text-[#2563EB] text-xs md:text-sm font-bold px-4 py-2.5 rounded-lg transition-colors duration-200 border border-[#2563EB]"
          >
            Zoom相談（60分）
          </a>
        </div>
      </div>
    </header>
  );
}
