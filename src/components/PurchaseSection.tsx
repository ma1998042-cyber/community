const includes = [
  "30日間実践プログラム",
  "募集テンプレート",
  "LINEメッセージテンプレート",
  "コンセプト設計シート",
  "当日進行シート",
  "開催チェックリスト",
  "60分Zoom相談サポート（1回）",
];

export default function PurchaseSection() {
  return (
    <section id="purchase" className="bg-[#0F172A] py-20 md:py-28 relative overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #2563EB 0%, transparent 70%)" }}
      />

      <div className="max-w-2xl mx-auto px-6 text-center relative">
        <p className="text-[#60A5FA] text-sm font-bold tracking-widest mb-4">ご購入はこちら</p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-3">
          小さなコミュニティ実践講座
        </h2>
        <p className="text-[#64748B] text-sm mb-10">買い切り型オンライン講座 / テキスト形式</p>

        <div className="mb-10">
          <p className="text-white text-5xl md:text-6xl font-bold tracking-tight">¥79,800</p>
          <p className="text-[#475569] text-sm mt-2">税込 / 買い切り / 追加費用なし</p>
        </div>

        <div className="bg-[#1E293B] rounded-2xl p-6 md:p-8 mb-10 text-left border border-[#334155]">
          <p className="text-[#94A3B8] text-xs font-bold mb-5 text-center tracking-widest">含まれるもの</p>
          <ul className="space-y-3">
            {includes.map((item) => (
              <li key={item} className="flex items-center gap-3 text-[#CBD5E1] text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <a
          href="#"
          className="inline-block bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold px-10 py-5 rounded-xl text-lg transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 w-full max-w-sm"
        >
          今すぐ購入する
        </a>
        <p className="mt-5 text-[#475569] text-xs leading-relaxed">
          購入後7日以内のご連絡で全額返金対応しております。<br />
          ※ テンプレートダウンロード後・Zoom相談ご利用後を除く
        </p>
      </div>
    </section>
  );
}
