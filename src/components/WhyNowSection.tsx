export default function WhyNowSection() {
  return (
    <section className="bg-[#EFF6FF] py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6">

        {/* 注目トピックカード */}
        <div className="rounded-2xl overflow-hidden border border-[#93C5FD] shadow-md">

          {/* ヘッダーバー */}
          <div className="bg-[#2563EB] px-6 py-4 flex items-center gap-3">
            <span className="bg-white text-[#2563EB] text-xs font-bold px-3 py-1 rounded-full tracking-wider">
              🔥 注目のトピック
            </span>
            <span className="text-white/80 text-xs font-bold tracking-widest">WHY NOW</span>
          </div>

          {/* 本文 */}
          <div className="bg-white px-7 py-8 md:px-10 md:py-10">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#0F172A] leading-[1.5] mb-7">
              なぜ今、交流会が<br className="md:hidden" />再注目されているのか？
            </h2>

            <div className="space-y-6 text-[#374151] text-base leading-[2]">
              <p>
                AIの登場やオンライン化の加速によって、情報やサービスはどこでも手に入るようになりました。しかし便利になった反面、<span className="font-bold text-[#0F172A]">リアルな場でのつながりや「顔を見て話せる場」への渇望</span>は、むしろ強まっています。
              </p>
              <p>
                また、ツールや発信手段のコストが劇的に下がったことで、個人でも場を作りやすい時代になりました。以前は一部の人だけのものだったコミュニティ運営が、今では誰でも始められる選択肢になっています。
              </p>
              <p>
                そしてここで注目したいのは、<span className="font-bold text-[#0F172A]">必ずしも大きなコミュニティである必要はない</span>、ということです。インフルエンサーが主催する大規模なオンラインサロンだけがコミュニティではありません。
              </p>
            </div>

            {/* 強調ボックス */}
            <div className="mt-7 bg-[#EFF6FF] rounded-xl px-6 py-4">
              <p className="text-[#0F172A] font-bold text-base leading-[1.9]">
                10人規模からスタートして30人・50人と輪を広げていくような交流会でも、価値観の合う仲間と深く繋がれる「居場所」として、今まさにスポットライトが当たっています。
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
