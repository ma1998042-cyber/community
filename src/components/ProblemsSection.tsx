import Image from "next/image";

const problems = [
  {
    worry: "コミュニティ運営に興味はあるけど、運営が大変そうで踏み出せない",
    photo: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&h=480&fit=crop&q=80",
    photoAlt: "悩んでいる人",
    context: (
      <>
        準備や集客を一人でやるのは大変そう、<br />
        <span className="text-[#60A5FA] font-bold">何から始めればいいか分からない</span>から、<br />
        なかなか動き出せずにいる
      </>
    ),
  },
  {
    worry: "好きなテーマの仲間と繋がれる場を自分で作ってみたい",
    photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=480&fit=crop&q=80",
    photoAlt: "悩んでいる人",
    context: (
      <>
        興味はあるけど、<br />
        <span className="text-[#60A5FA] font-bold">人が集まるか不安、怪しく見られないか</span>が<br />
        心配で告知できずにいる
      </>
    ),
  },
  {
    worry: "交流会を効率よく運営して、将来的には収益化もしていきたい",
    photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=480&fit=crop&q=80",
    photoAlt: "悩んでいる人",
    context: (
      <>
        やり方を知らないまま続けても、<br />
        <span className="text-[#60A5FA] font-bold">主催者だけが疲弊して終わる</span>パターンに<br />
        なりそうで不安
      </>
    ),
  },
];

export default function ProblemsSection() {
  return (
    <section className="bg-[#F8FAFF] py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-[#2563EB] text-sm font-bold tracking-widest mb-3">PROBLEMS</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F172A] leading-tight">
            交流会・コミュニティを作りたいけど<br className="hidden md:block" />
            こんな悩みはありませんか？
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {problems.map((p, i) => (
            <div key={i} className="flex flex-col items-center">
              {/* 吹き出し */}
              <div className="relative w-full bg-[#0F172A] text-white text-sm leading-[1.9] text-center px-5 py-5 rounded-2xl mb-0">
                {p.worry}
                {/* 三角の吹き出し */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 -bottom-3 w-0 h-0"
                  style={{
                    borderLeft: "12px solid transparent",
                    borderRight: "12px solid transparent",
                    borderTop: "12px solid #0F172A",
                  }}
                />
              </div>

              {/* 人物写真 */}
              <div className="relative w-36 h-44 mt-3 flex-shrink-0">
                <Image
                  src={p.photo}
                  alt={p.photoAlt}
                  fill
                  className="object-cover object-top rounded-xl"
                  sizes="144px"
                />
              </div>

              {/* 文脈カード */}
              <div className="w-full bg-[#1E293B] text-white text-sm leading-[1.9] text-center px-5 py-5 rounded-2xl mt-3">
                {p.context}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
