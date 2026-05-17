const steps = [
  {
    number: "01",
    emoji: "🌐",
    title: "公式サイトにアクセス",
    description: "このページ下部の購入ボタン、またはヘッダーの「今すぐ申し込む」から購入ページへお進みください。",
  },
  {
    number: "02",
    emoji: "💳",
    title: "ご決済",
    description: "クレジットカードまたは銀行振込でお支払いください。決済完了後、登録メールアドレスに案内メールが届きます。",
  },
  {
    number: "03",
    emoji: "📩",
    title: "会員サイトにアクセス",
    description: "届いたメールに記載のURLから、会員サイトにログインしてください。教材・テンプレートへ即座にアクセスできます。",
  },
  {
    number: "04",
    emoji: "📖",
    title: "受講開始",
    description: "30日間実践プログラムに沿って、すぐに学習をスタートできます。テキスト形式なので、自分のペースで進められます。",
  },
];

export default function HowToSection() {
  return (
    <section id="how-to" className="bg-[#F8FAFF] py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#2563EB] text-sm font-bold tracking-widest mb-3">HOW TO JOIN</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F172A] leading-tight">
            受講の流れ
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6 items-start">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center pt-6 h-full">
              {/* 番号バッジ */}
              <div className="w-11 h-11 rounded-full bg-[#2563EB] text-white text-sm font-bold flex items-center justify-center shadow-md mb-[-1.375rem] z-10 relative flex-shrink-0">
                {step.number}
              </div>

              {/* カード */}
              <div className="bg-white rounded-2xl border border-[#DBEAFE] shadow-sm w-full pt-9 pb-7 px-5 flex flex-col items-center text-center gap-4 flex-1">
                <span className="text-4xl leading-none">{step.emoji}</span>
                <p className="text-[#0F172A] font-bold text-sm md:text-base leading-snug">{step.title}</p>
                <p className="text-[#64748B] text-xs leading-[1.9]">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
