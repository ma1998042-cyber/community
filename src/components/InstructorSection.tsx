import Image from "next/image";

const career = [
  "株式会社AI Docks 代表取締役",
  "会員数150名以上のWeb系の月額制コミュニティを運営",
  "コミュニティ運営者を取材するメディア「コミュニティ運営ラボ」編集長",
  "東京都にある中野・神楽坂で食べ歩きイベントを主催し、約50名を集める",
  "日本酒交流会など複数の交流会を知人と連続立ち上げ中",
];

export default function InstructorSection() {
  return (
    <section id="instructor" className="bg-white py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[#2563EB] text-sm font-bold tracking-widest mb-3">INSTRUCTOR</p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] leading-tight">
            コミュニティ実践方法を指導する講師紹介
          </h2>
        </div>

        <div className="bg-[#F8FAFF] rounded-3xl overflow-hidden border border-[#DBEAFE]">
          <div className="grid grid-cols-1 md:grid-cols-[260px_1fr]">
            {/* プロフィール写真 */}
            <div className="bg-[#EFF6FF] flex flex-col items-center justify-center p-8 md:p-10 border-b md:border-b-0 md:border-r border-[#DBEAFE]">
              <div className="relative w-32 h-32 rounded-full overflow-hidden mb-5 ring-4 ring-[#BFDBFE] ring-offset-2 ring-offset-[#EFF6FF]">
                <Image
                  src="/profile.png"
                  alt="まつ プロフィール写真"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-[#0F172A] text-xl font-bold mb-1">松永勇樹</p>
              <p className="text-[#64748B] text-xs text-center leading-relaxed">
                コミュニティプロデューサー
              </p>
            </div>

            {/* テキスト */}
            <div className="p-8 md:p-10">
              <p className="text-[#2563EB] text-xs font-bold tracking-widest mb-5">PROFILE</p>
              <ul className="space-y-3 mb-6">
                {career.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#374151] text-sm leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[#374151] text-sm leading-[2] border-t border-[#EFF6FF] pt-5">
                食べ歩きや日本酒など「好きなこと」を起点にリアルで人が集まる場を作り続け、コミュニティ運営の取材・発信を通じて得た知見と主催者としての実践ノウハウをこの講座にまとめました。月額制コミュニティの運営経験を持ち、個人・法人向けの立ち上げサポートも手がけることで、趣味の場としてだけでなくビジネスとしてのコミュニティ運営にも携わっています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
