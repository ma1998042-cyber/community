const notForYou = [
  "交流会を開催せず、学習だけで満足したい方",
  "開催まで3ヶ月以上かける予定の方",
  "テンプレートを参考にするだけで、自分で動く気がない方",
  "まず知識を集めてから動こうと思っている方",
  "大人数のイベントや月額コミュニティを作りたい方",
];

const forYou = [
  "学んだことをすぐに実践に移せる方",
  "1ヶ月以内に初回交流会を開催したい方",
  "テーマや人数規模は問わず、とにかく開催したい方",
  "継続して場を作り続けることに本気な方",
  "主催者として自分の場を持ちたい方",
];

export default function NotForYouSection() {
  return (
    <section className="bg-[#EFF6FF] py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-[#2563EB] text-sm font-bold tracking-widest mb-3">購入前にご確認ください</p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] leading-tight">
            本気で交流会を開催したい方のための講座です
          </h2>
          <p className="text-[#2563EB] font-bold text-base mt-4">
            1ヶ月以内に交流会をスタートしたい方向けの講座です。
          </p>
          <p className="text-[#374151] text-base leading-[2] mt-3 max-w-2xl mx-auto">
            この講座は、知識を増やすことではなく、
            <span className="font-bold text-[#0F172A]">実際に人が集まる場を作ること</span>
            を目的にしています。学習をして実践しない方には、残念ながら向いていません。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* 向かない方 */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#FECACA]">
            <p className="text-[#DC2626] text-sm font-bold tracking-wider mb-5">
              ✕ こんな方には向きません
            </p>
            <ul className="space-y-3">
              {notForYou.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[#374151] text-sm leading-relaxed">
                  <span className="text-[#EF4444] mt-0.5 flex-shrink-0 font-bold">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 向いている方 */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#BFDBFE]">
            <p className="text-[#2563EB] text-sm font-bold tracking-wider mb-5">
              ○ こんな方に向いています
            </p>
            <ul className="space-y-3">
              {forYou.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[#374151] text-sm leading-relaxed">
                  <span className="text-[#2563EB] mt-0.5 flex-shrink-0 font-bold">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 bg-[#0F172A] rounded-2xl p-6 md:p-8 text-center">
          <p className="text-[#94A3B8] text-base leading-[2]">
            「やってみよう」と思えた方だけ、次へ進んでください。<br />
            <span className="text-white font-bold">本気で開催したい方をお待ちしています。</span>
          </p>
        </div>
      </div>
    </section>
  );
}
