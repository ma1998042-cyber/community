const features = [
  {
    emoji: "🗺️",
    number: "01",
    title: "30日間実践プログラム",
    description:
      "テーマ設計から初回開催、月1定例化まで、30日単位で何をすべきかが明確になっています。「次に何をすればいいか分からない」で止まらず、順番通りに進めるだけで交流会開催まで辿り着ける設計です。",
  },
  {
    emoji: "📋",
    number: "02",
    title: "すぐ使えるテンプレート集",
    description:
      "募集文・LINEメッセージ・当日の進行シート・リマインド文など、実際の運営で使えるテンプレートをそのまま提供します。ゼロから考える手間なく、すぐに動き出せます。",
  },
  {
    emoji: "🎥",
    number: "03",
    title: "60分 Zoom個別サポート",
    description:
      "テーマ・集客・参加費の設定など、交流会の正解は人によって異なります。本講座では60分のZoom相談を用意しており、あなたの状況に合わせて個別に相談できます。",
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-[#F8FAFF] py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[#2563EB] text-sm font-bold tracking-widest mb-3">FEATURES</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F172A] leading-tight">
            講座の3つの特徴
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.number}
              className="bg-white rounded-2xl border border-[#DBEAFE] p-8 flex flex-col gap-4 hover:border-[#93C5FD] hover:shadow-md transition-all duration-200"
            >
              {/* 番号＋絵文字 */}
              <div className="flex items-center gap-3">
                <span className="text-[#BFDBFE] text-3xl font-bold leading-none">{f.number}</span>
                <span className="text-3xl leading-none">{f.emoji}</span>
              </div>

              {/* タイトル */}
              <h3 className="text-[#0F172A] text-lg font-bold leading-snug">{f.title}</h3>

              {/* 説明文 */}
              <p className="text-[#374151] text-sm leading-[2]">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
