const examples = [
  "地域のつながりを大切にするコミュニティ",
  "共通の趣味で繋がるコミュニティ",
  "同じ職種・業界の人が集まるコミュニティ",
  "学びやスキルアップを目指すコミュニティ",
  "ライフスタイルや価値観が近い人のコミュニティ",
  "好きな食や文化を楽しむコミュニティ",
];

export default function SmallCommunitySection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6">
        {/* フック見出し */}
        <div className="bg-[#0F172A] rounded-2xl px-8 py-7 mb-10 text-center">
          <p className="text-white text-xl md:text-2xl font-bold leading-snug">
            「コミュニティ運営って大変じゃない？」
          </p>
        </div>

        {/* 説明文 */}
        <div className="space-y-5 text-[#374151] text-base leading-[2] mb-10">
          <p>
            世の中にあるオンラインサロンなど月額制コミュニティを見て、そう感じる方も多いと思います。コンテンツ制作、メンバー管理、毎月の価値提供…たしかに大変です。
          </p>
          <p>
            しかし、<span className="font-bold text-[#0F172A]">「小さなコミュニティ」という選択肢</span>もあります。月額課金もサブスクも必要なく、好きなテーマで人が集まる場を作るだけ。
          </p>
        </div>

        {/* 区切り */}
        <p className="text-[#2563EB] text-sm font-bold tracking-widest text-center mb-6">例えば、こんな交流会・コミュニティ</p>

        {/* 例リスト */}
        <ul className="space-y-3 mb-10">
          {examples.map((ex, i) => (
            <li
              key={i}
              className="flex items-start gap-3 bg-[#F8FAFF] border border-[#DBEAFE] rounded-xl px-5 py-3.5 text-[#0F172A] text-sm font-bold"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] flex-shrink-0 mt-[0.45rem]" />
              {ex}
            </li>
          ))}
        </ul>

        {/* まとめ */}
        <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-2xl px-7 py-6 text-center">
          <p className="text-[#0F172A] text-base leading-[2]">
            このような交流会は、<span className="font-bold text-[#2563EB]">10人規模からスタートして30人・50人へと輪を広げる</span>ことができます。特別なスキルや設備がなくても、あなた一人で始められます。
          </p>
        </div>
      </div>
    </section>
  );
}
