export default function FinalCTASection() {
  return (
    <section className="bg-[#2563EB] py-20 md:py-28 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, #ffffff 1px, transparent 1px), radial-gradient(circle at 80% 50%, #ffffff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-3xl mx-auto px-6 text-center relative">
        <p className="text-[#BFDBFE] text-sm font-bold tracking-widest mb-5">READY TO START?</p>
        <h2 className="text-2xl md:text-4xl font-bold text-white leading-[1.4] mb-6">
          まずは、小さな一歩から。<br />
          あなたの交流会を、一緒に作りましょう。
        </h2>
        <p className="text-[#BFDBFE] text-base leading-[2] mb-10 max-w-xl mx-auto">
          趣味や好きなテーマで人が集まる場を作ることは、特別なスキルがなくてもできます。必要なのは、やってみようという気持ちだけです。
        </p>

        {/* 2つのCTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://buy.stripe.com/14A7sKcI613OfjA9lB7N606"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-white hover:bg-[#F0F7FF] text-[#2563EB] font-bold px-10 py-5 rounded-xl text-lg transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
          >
            今すぐ交流会を開催する
          </a>
          <a
            href="https://app.aitemasu.me/u/ma1998042/smallcommunity"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent hover:bg-white/10 text-white font-bold px-10 py-5 rounded-xl text-lg transition-all duration-200 border-2 border-white/60 hover:border-white"
          >
            Zoom相談（60分）
          </a>
        </div>

        <p className="mt-6 text-[#93C5FD] text-sm">
          79,800円（税込）/ 買い切り
        </p>
      </div>
    </section>
  );
}
