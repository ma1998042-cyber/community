const themes = ["月1回の日本酒交流会", "AI好きが集まるカフェ会", "朝活", "趣味仲間の集まり"];

export default function EmpathySection() {
  return (
    <section className="bg-[#EFF6FF] py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] leading-[1.6] mb-8 text-center">
          「コミュニティには興味がある。<br />
          でも、自分でオンラインサロンを<br />
          運営するのは大変そう。」
        </h2>
        <p className="text-[#374151] text-base leading-[2] mb-6 text-center">
          そんな風に感じたことはありませんか？
        </p>
        <p className="text-[#374151] text-base leading-[2] mb-5">
          毎日投稿したり、Discordを管理したり、継続的にコンテンツを作り続けたり…。コミュニティ運営に興味はあるけれど、「そこまで本格的にはできない」と感じている人は多いです。
        </p>
        <p className="text-[#374151] text-base leading-[2] mb-10">
          でも実際は、もっと小さく、もっと自由に、人との繋がりを作る方法があります。
        </p>
        <p className="text-[#374151] text-sm font-bold mb-4">例えば、</p>
        <div className="grid grid-cols-2 gap-3 mb-10">
          {themes.map((theme) => (
            <div
              key={theme}
              className="bg-white rounded-xl py-4 px-5 text-[#0F172A] font-bold text-sm text-center shadow-sm border border-[#BFDBFE]"
            >
              {theme}
            </div>
          ))}
        </div>
        <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#BFDBFE] shadow-sm">
          <p className="text-[#0F172A] text-base md:text-lg font-bold leading-[1.8] text-center">
            そんな"小さな場"も、立派なコミュニティです。
          </p>
        </div>
      </div>
    </section>
  );
}
