import Image from "next/image";

const curriculum = [
  {
    index: "01",
    dayRange: "Day 1〜5",
    title: "テーマ・コンセプト設計",
    description: "どんな人に来てほしいか、何のために集まるかを言語化します。",
    photo:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=900&h=680&fit=crop&q=80",
    photoAlt: "打ち合わせするグループ",
    items: [
      "趣味・強み・関心からテーマを絞り込む",
      "来てほしい参加者像を具体的に描く",
      "コンセプトと参加者へのメリットを言語化する",
      "参加費・開催頻度・人数規模を設定する",
      "開催場所・日程の候補を出す",
    ],
  },
  {
    index: "02",
    dayRange: "Day 6〜10",
    title: "集客・募集文の準備",
    description: "知人声掛けからSNS・イベントプラットフォームまで、段階的な集客方法を学びます。",
    photo:
      "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=900&h=680&fit=crop&q=80",
    photoAlt: "スマートフォンで告知する人",
    items: [
      "知人声掛け・SNS・こくちーず/Peatix/つなげーとの使い分けを学ぶ",
      "少額広告（Facebook/Instagram）の基本的な仕組みを理解する",
      "参加率が下がりにくい募集タイミングと告知頻度を設計する",
      "怪しく見えない・主催者感が強すぎないNGパターンを学ぶ",
      "テンプレートを使って募集文の初稿を作る",
      "最初の募集を公開する",
    ],
  },
  {
    index: "03",
    dayRange: "Day 11〜20",
    title: "会場選び・当日設計",
    description: "会場選びの基準を学び、初参加者が安心できる当日の流れを設計します。",
    photo:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&h=680&fit=crop&q=80",
    photoAlt: "おしゃれなカフェの内観",
    items: [
      "会場選びの5基準（席配置・騒音・アクセス・価格帯・雰囲気）を学ぶ",
      "LINEテンプレート4種（初参加者向け・当日リマインド・お礼・次回案内）を準備する",
      "当日の進行シートと盛り上がる会話テーマを設計する",
      "自己紹介・席替えのやり方を決める",
      "初参加者が安心できる場の空気感の作り方を学ぶ",
      "会場を予約し、参加者へのアクセス案内文を準備する",
    ],
  },
  {
    index: "04",
    dayRange: "Day 21〜25",
    title: "初回交流会の開催",
    description: "チェックリストで準備を整え、実際に場を開きます。まず開催することでリアルな経験を積みます。",
    photo:
      "https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=900&h=680&fit=crop&q=80",
    photoAlt: "カフェで会話する小グループ",
    items: [
      "開催チェックリストで当日の最終確認をする",
      "初回交流会を開催する",
      "席替え・自己紹介・会話テーマを実践する",
      "参加者へのお礼メッセージをLINEで送る",
      "終了後に良かった点・改善点をメモする",
      "参加者の反応からリピート意向を確認する",
    ],
  },
  {
    index: "05",
    dayRange: "Day 26〜30",
    title: "継続・次回開催の設計",
    description: "1回で終わらせず、月1回の定例開催を軌道に乗せます。将来的な収益化の選択肢も紹介します。",
    photo:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=900&h=680&fit=crop&q=80",
    photoAlt: "笑顔で集まる人たち",
    items: [
      "リピート率を上げるフォロー方法（個別メッセージ・アンケート活用）を学ぶ",
      "参加者アンケートを実施し、次回開催のコンセプトを改善する",
      "常連さんが自然と協力してくれる空気感の作り方を学ぶ",
      "スポンサー・協賛や紹介提携など収益化の選択肢を知る",
      "次回の募集告知を出して月1定例開催ペースを確立する",
    ],
  },
];

export default function CurriculumSection() {
  return (
    <section id="curriculum" className="bg-[#F8FAFF] py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">
        {/* 見出し */}
        <div className="text-center mb-14">
          <p className="text-[#2563EB] text-sm font-bold tracking-widest mb-3">CURRICULUM</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F172A] leading-tight">
            交流会開催まで迷わず進む、<br className="hidden md:block" />5ステップのカリキュラム
          </h2>
          <p className="text-[#374151] text-base mt-4 max-w-xl mx-auto leading-[2]">
            30日間実践プログラムで、交流会開催まで着実に進められます。
          </p>
        </div>

        {/* リスト */}
        <div className="space-y-5">
          {curriculum.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden border border-[#DBEAFE] hover:shadow-md transition-all duration-200">

              {/* ヘッダー帯 */}
              <div className="flex items-center gap-3 px-6 py-4 bg-[#F8FAFF] border-b border-[#EFF6FF]">
                <span className="bg-[#2563EB] text-white text-xs font-bold px-3 py-1 rounded-full tracking-wider">
                  STEP {item.index}
                </span>
                <span className="bg-[#EFF6FF] text-[#2563EB] text-xs font-bold px-3 py-1 rounded-full">
                  {item.dayRange}
                </span>
                <h3 className="text-[#0F172A] font-bold text-base md:text-lg leading-snug">
                  {item.title}
                </h3>
              </div>

              {/* ボディ */}
              <div className="grid grid-cols-1 md:grid-cols-[288px_1fr]">
                {/* 写真 */}
                <div className="relative overflow-hidden self-center rounded-xl mx-4 md:mx-5 my-4 md:my-5" style={{ aspectRatio: "4/3" }}>
                  <Image
                    src={item.photo}
                    alt={item.photoAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 240px"
                  />
                </div>

                {/* コンテンツ */}
                <div className="p-6 md:p-8 flex flex-col gap-4">
                  <p className="text-[#374151] text-sm leading-[2]">{item.description}</p>
                  <ul className="space-y-2">
                    {item.items.map((point, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-[#374151] text-sm leading-relaxed">
                        <span className="text-[#2563EB] font-bold flex-shrink-0 mt-0.5 text-xs">✓</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
