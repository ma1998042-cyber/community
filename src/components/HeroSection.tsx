import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-white pb-16 md:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-10 md:pt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* テキストコンテンツ */}
          <div>
            {/* サービス名 */}
            <div className="mb-5">
              <p className="text-[#2563EB] text-xs font-bold tracking-widest mb-2">ONLINE COURSE</p>
              <p className="inline-block text-xl md:text-2xl font-bold text-[#0F172A] border-b-2 border-[#2563EB] pb-1 leading-snug">
                小さなコミュニティ実践講座
              </p>
            </div>
            <h1 className="text-[1.85rem] md:text-4xl lg:text-[2.6rem] font-bold text-[#0F172A] leading-[1.35] mb-5 tracking-tight">
              1ヶ月で自分の交流会を<br />
              <span className="text-[#2563EB]">開催する</span>実践プログラム
            </h1>
            <p className="text-lg md:text-xl text-[#2563EB] font-bold mb-6 leading-relaxed">
              好きなテーマで、"人が集まる場"を作る。
            </p>
            <p className="text-[#374151] text-sm md:text-base leading-[2] mb-8">
              趣味や好きなテーマを通して、価値観の合う人と繋がる交流会を開催したい方へ。募集文、コンセプト設計、LINE運営、集客方法、当日の進行、継続の仕組みまで、未経験からでも実践できる形でまとめた買い切り型のオンライン講座です。
            </p>

            {/* 2つのCTA */}
            <div className="flex flex-col sm:flex-row gap-3 mb-5">
              <a
                href="https://buy.stripe.com/14A7sKcI613OfjA9lB7N606"
                className="inline-flex items-center justify-center bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold px-7 py-4 rounded-xl text-base transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                今すぐ交流会を開催する
              </a>
              <a
                href="https://app.aitemasu.me/u/ma1998042/smallcommunity"
                className="inline-flex items-center justify-center bg-white hover:bg-[#EFF6FF] text-[#2563EB] font-bold px-7 py-4 rounded-xl text-base transition-all duration-200 border-2 border-[#2563EB]"
              >
                Zoom相談（60分）
              </a>
            </div>

            <p className="text-[#94A3B8] text-xs leading-relaxed">
              ※ 月額コミュニティやオンラインサロンを作る講座ではありません。<br />
              まずは10人規模の交流会を開催し、30人・50人と参加者の輪を広げることを目指します。
            </p>
          </div>

          {/* 画像 */}
          <div className="relative order-first md:order-last">
            <div
              className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-[#BFDBFE]"
              style={{ aspectRatio: "4/3" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?w=900&h=675&fit=crop&q=80"
                alt="カフェで笑顔で会話している少人数のグループ"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 w-28 h-28 rounded-2xl bg-[#EFF6FF] -z-10" />
            <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-[#DBEAFE] -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
