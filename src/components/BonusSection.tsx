const bonuses = [
  {
    emoji: "🎥",
    title: "Zoom相談サポート（60分）",
    description:
      "学んだだけで終わらせないために、Zoom相談を設けています。「テーマはこれで大丈夫か」「この募集文で人は集まるか」——迷いが生まれた瞬間に個別で相談できる環境が、受講者を開催まで引っ張る力になります。一人だと後回しにしがちな判断も、誰かと話すことで前に進めます。",
  },
  {
    emoji: "💬",
    title: "1ヶ月間のチャットサポート",
    description:
      "「やってみます」で終わらせず、実際に動くまでをサポートするのがチャットサポートの役割です。告知文の確認、会場選びの相談、当日の不安——小さな詰まりをその場で解消することで、「あとでやろう」を防ぎます。",
  },
];

export default function BonusSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-[#2563EB] text-sm font-bold tracking-widest mb-3">SUPPORT</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F172A] leading-tight">
            交流会の開催を実現するための<br className="hidden md:block" />
            2つのサポート
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bonuses.map((bonus, i) => (
            <div
              key={i}
              className="relative bg-[#F8FAFF] border border-[#DBEAFE] rounded-2xl p-8 overflow-hidden"
            >
              {/* 背景装飾 */}
              <div className="absolute top-4 right-5 text-6xl opacity-10 select-none">
                {bonus.emoji}
              </div>

              {/* 特典番号 */}
              <span className="inline-block bg-[#2563EB] text-white text-xs font-bold px-3 py-1 rounded-full mb-5 tracking-wider">
                特典 {String(i + 1).padStart(2, "0")}
              </span>

              {/* タイトル */}
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-[#0F172A] text-lg font-bold leading-snug">{bonus.title}</h3>
              </div>

              {/* 説明 */}
              <p className="text-[#374151] text-sm leading-[2]">{bonus.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
