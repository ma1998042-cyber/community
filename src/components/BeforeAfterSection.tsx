import Image from "next/image";

const cases = [
  {
    scenePhoto:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&h=500&fit=crop&q=80",
    sceneAlt: "日本酒を楽しむ人たち",
    communityName: "日本酒交流会",
    tag: "お酒・グルメ",
    title: "日本酒好きが集まる月1交流会",
    description:
      "「日本酒が好きな人と繋がりたいけど、出会う場がない」という悩みから交流会を立ち上げるケース。角打ちや日本酒バーを会場に10人前後でスタートし、口コミで30人規模へ成長。参加費を2,500〜3,000円に設定した月1回の定例開催です。",
  },
  {
    scenePhoto:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop&q=80",
    sceneAlt: "カフェでラップトップを使いながら会話する人たち",
    personName: "Kさん",
    communityName: "AIツール活用カフェ会",
    tag: "AI・テクノロジー",
    title: "AIツール・最新テックのカフェ会",
    description:
      "「AIの話を気軽にできる人が周りにいない」という会社員が開くカフェ会のケース。コワーキングスペースやカフェで6〜10名が集まり、各自のAI活用事例を共有します。参加費無料でSNSのみ告知。同じ関心を持つ仲間が自然と集まります。",
  },
  {
    scenePhoto:
      "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?w=800&h=500&fit=crop&q=80",
    sceneAlt: "朝のカフェで話し合う人たち",
    personName: "Mさん",
    communityName: "朝活・読書会",
    tag: "朝活・自己成長",
    title: "週1回の朝活・読書会",
    description:
      "「朝の時間を有意義に使いたい」「読書を習慣化したい」という人が集まる朝活のケース。近所のカフェを毎週同じ時間・場所で使用。10人規模からスタートして常連が増え続けている形で、参加費500円と気軽な設定が定着の秘訣です。",
  },
];

export default function BeforeAfterSection() {
  return (
    <section className="bg-[#EFF6FF] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-[#2563EB] text-sm font-bold tracking-widest mb-3">EXAMPLE</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F172A] leading-tight">
            こんな交流会を<br className="md:hidden" />立ち上げることができる
          </h2>
          <p className="text-[#374151] text-base leading-[2] mt-4 max-w-xl mx-auto">
            テーマも規模も自由。あなたの「好き」や「興味」を起点にした交流会を作れます。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden border border-[#BFDBFE] hover:border-[#93C5FD] hover:shadow-md transition-all duration-200 flex flex-col"
            >
              {/* シーン画像 */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
                <Image
                  src={c.scenePhoto}
                  alt={c.sceneAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* コンテンツ */}
              <div className="p-6 flex flex-col flex-1">
                {/* 見出し */}
                <h3 className="text-[#0F172A] text-base font-bold leading-snug mb-3 text-center">{c.title}</h3>

                {/* 説明文 */}
                <p className="text-[#374151] text-sm leading-[1.9] flex-1">{c.description}</p>

                {/* タグ */}
                <div className="mt-4 flex justify-end">
                  <span className="inline-block bg-[#DBEAFE] text-[#1D4ED8] text-xs font-bold px-3 py-1 rounded-full">
                    {c.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[#94A3B8] text-xs mt-6">
          ※ 上記はイメージです。実際の事例ではありません。
        </p>
      </div>
    </section>
  );
}
