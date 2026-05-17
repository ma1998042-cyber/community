const items = [
  {
    number: "01",
    title: "30日間実践プログラム",
    description:
      "テーマ設計・集客・会場選び・当日運営・継続設計まで、30日間で何をすべきかを明確に整理。順番通りに進めるだけで、初回開催から月1定例化まで迷わず進めます。",
    checks: [
      "専用プラットフォームへのアクセス権",
      "チャットサポート（30日間）",
      "買い切り型・視聴期限なし",
      "テキスト形式・スマホでも受講可",
    ],
  },
  {
    number: "02",
    title: "リアルな知見が詰まったテンプレート集",
    description:
      "募集文・LINEメッセージ・当日の進行シートなど、実際の運営でそのまま使えるテンプレートをすべて提供します。ゼロから考える手間なくすぐに動き出せます。",
    checks: [
      "交流会募集文テンプレート",
      "LINEメッセージテンプレート（4種）",
      "当日進行シート・会話テーマ集",
      "コンセプト設計シート",
    ],
  },
  {
    number: "03",
    title: "初回〜継続開催に向けた集客・収益化方法",
    description:
      "知人声掛けからSNS・イベントプラットフォームまで、段階的な集客方法を解説。リピーターを増やす運営設計や将来的な収益化の選択肢も紹介します。",
    checks: [
      "集客チャネル別ガイド（SNS・口コミ・広告）",
      "参加費・収益設計の考え方",
      "リピーター獲得のためのフォロー方法",
      "スポンサー・紹介提携の始め方",
    ],
  },
];

export default function ProgramSection() {
  return (
    <section id="program" className="bg-[#0F172A] py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-[#60A5FA] text-sm font-bold tracking-widest mb-3">PROGRAM</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
            あなたの交流会スタートを実現する<br className="hidden md:block" />
            実践型プログラム内容
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((item) => (
            <div
              key={item.number}
              className="bg-white/5 border border-white/10 rounded-2xl px-6 py-7 flex flex-col gap-4 hover:bg-white/10 transition-colors duration-200"
            >
              <span className="text-[3rem] font-bold text-white/10 leading-none select-none">
                {item.number}
              </span>
              <h3 className="text-white font-bold text-base md:text-lg leading-snug">{item.title}</h3>
              <p className="text-white/70 text-sm leading-[1.9]">{item.description}</p>

              {/* チェックリスト */}
              <ul className="space-y-2 pt-1 border-t border-white/10">
                {item.checks.map((check, j) => (
                  <li key={j} className="flex items-start gap-2 text-white/80 text-xs leading-relaxed">
                    <span className="text-[#60A5FA] flex-shrink-0 mt-0.5">✓</span>
                    {check}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
