"use client";

export default function SiteFooter() {
  return (
    <footer className="bg-[#0F172A] py-12 border-t border-[#1E293B]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mb-2 cursor-pointer group"
        >
          <p className="text-white font-bold text-base group-hover:text-[#60A5FA] transition-colors">
            小さなコミュニティ実践講座
          </p>
        </button>
        <p className="text-[#475569] text-sm mb-8">1ヶ月で自分の交流会を開催する実践プログラム</p>
        <div className="flex flex-wrap justify-center gap-6 text-[#475569] text-xs mb-8">
          <a href="/tokusho" className="hover:text-[#60A5FA] transition-colors">特定商取引法に基づく表記</a>
          <a href="/privacy" className="hover:text-[#60A5FA] transition-colors">プライバシーポリシー</a>
          <a href="#" className="hover:text-[#60A5FA] transition-colors">お問い合わせ</a>
        </div>
        <p className="text-[#334155] text-xs">© 2026 小さなコミュニティ実践講座. All rights reserved.</p>
      </div>
    </footer>
  );
}
