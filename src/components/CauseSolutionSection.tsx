export default function CauseSolutionSection() {
  return (
    <section className="bg-[#F8FAFF] py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6">

        {/* CAUSE */}
        <div className="mb-12">
<h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] leading-[1.5] mb-6 text-center">
            多くの教材は、知識を学ぶだけで<br />
            終わってしまうのが現実。
          </h2>
          <div className="space-y-4 text-[#374151] text-base leading-[2]">
            <p>
              コミュニティ論やSNS集客の教材は多くありますが、「どんな募集文を書くのか」「どこで集客するのか」「LINEでどう管理するのか」「告知はいつ出すべきか」まで落とし込まれていないケースがほとんどです。
            </p>
            <p>
              その結果、学んだものの行動できず、交流会を開催する前に止まってしまったり、1〜2回開催して終わってしまいます。
            </p>
          </div>
        </div>

        {/* 矢印区切り */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex flex-col items-center gap-1">
            <div className="w-px h-8 bg-[#BFDBFE]" />
            <div
              className="w-0 h-0"
              style={{
                borderLeft: "10px solid transparent",
                borderRight: "10px solid transparent",
                borderTop: "10px solid #BFDBFE",
              }}
            />
          </div>
        </div>

        {/* SOLUTION */}
        <div className="bg-white border border-[#DBEAFE] rounded-2xl px-8 py-8 shadow-sm">
          <p className="text-[#2563EB] text-sm font-bold tracking-widest mb-3">SOLUTION</p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] leading-[1.5] mb-6">
            交流会を<span className="text-[#2563EB]">スタートして、継続する</span>ことに<br />
            特化した講座を作りました。
          </h2>
          <div className="space-y-4 text-[#374151] text-base leading-[2]">
            <p>
              知識をインプットするだけの講座ではありません。<span className="font-bold text-[#0F172A]">「初回を開催する」「月1回の定例にする」</span>という2つのゴールに向けて、必要なことだけを実践ベースでまとめました。
            </p>
            <p>
              テンプレートやロードマップで手が止まりにくい設計にしつつ、迷ったときはZoom相談で個別にサポートします。
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
