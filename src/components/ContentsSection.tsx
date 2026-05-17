const contents = [
  {
    number: "01",
    title: "30日間実践プログラム",
    description:
      "「交流会を開いてみたい」で終わらせず、実際に開催することをゴールにした実践型ロードマップを用意しました。テーマ設計から募集、LINE運営、当日の進行、次回開催までを30日単位で整理しているため、未経験の方でも順番通りに進めるだけで交流会開催まで辿り着ける設計になっています。",
  },
  {
    number: "02",
    title: "すぐ使えるテンプレート集",
    description:
      "交流会運営で最も時間がかかるのは、ゼロから考えることです。本講座では、募集文、LINEメッセージ、リマインド文、当日の進行シート、コンセプト設計シートなど、実際に使えるテンプレートを提供します。初心者でも「何を書けばいいかわからない」で止まらず、すぐに募集や運営を始められます。",
  },
  {
    number: "03",
    title: "集客方法・募集導線",
    description:
      "最初から広告費をかける必要はありません。身近な知人への声掛けから、SNS、つなげーと、こくちーずなどのイベントプラットフォームを活用した集客方法まで紹介します。また、人が集まらない募集文、怪しく見える告知、主催者感が強すぎる発信など、実践経験をもとにNGパターンも解説します。",
  },
  {
    number: "04",
    title: "主催者が疲弊しない運営設計",
    description:
      "交流会や小さなコミュニティ運営で最も多い失敗は、主催者だけが頑張り続けてしまうことです。本講座では、一人で抱え込まず、自然と常連さんが協力してくれる空気感の作り方や、無理なく継続できる開催頻度、毎回ゼロから企画を考えなくても続けられる運営設計を紹介します。",
  },
  {
    number: "05",
    title: "交流会の価値を高める設計",
    description:
      "同じ人数でも、「また来たい」と思われる交流会と、1回で終わる交流会があります。本講座では、初参加者が安心できる空気感の作り方、会話テーマの設計、席替えや自己紹介の進め方、交流会後のフォローなど、「人が自然と繋がる場」を作るための設計について学びます。",
  },
  {
    number: "06",
    title: "60分Zoom相談サポート",
    description:
      "交流会運営は、テーマやターゲットによって正解が変わります。そのため、本講座では60分のZoom相談を用意しています。このテーマで人は集まるのか、募集文はこれで良いか、参加費はいくらが適切か、会場はどう選ぶべきかなど、実際に開催する上で出てくる悩みに対して個別に相談できます。",
  },
];

export default function ContentsSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-[#2563EB] text-sm font-bold tracking-widest mb-3">CONTENTS</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F172A] leading-tight">
            交流会開催を応援するコンテンツ
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {contents.map((item) => (
            <div
              key={item.number}
              className="bg-[#F8FAFF] rounded-2xl p-6 md:p-8 border border-[#DBEAFE] hover:border-[#93C5FD] hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl font-bold text-[#BFDBFE] leading-none">{item.number}</span>
                <h3 className="text-base md:text-lg text-[#0F172A] font-bold leading-snug">{item.title}</h3>
              </div>
              <p className="text-[#374151] text-sm leading-[2]">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="https://buy.stripe.com/14A7sKcI613OfjA9lB7N606"
            className="inline-block bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold px-10 py-4 rounded-xl text-base md:text-lg transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            今すぐ交流会を始める
          </a>
          <p className="mt-4 text-[#94A3B8] text-sm">79,800円（税込）/ 買い切り型</p>
        </div>
      </div>
    </section>
  );
}
