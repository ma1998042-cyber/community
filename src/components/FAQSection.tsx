"use client";

import { useState } from "react";

const faqs = [
  {
    question: "テキスト主体の教材とはどういう形式ですか？",
    answer:
      "PDFやNotionページなどのテキスト形式でお届けします。動画と違い、自分のペースで読み進められ、必要な箇所にすぐ戻れるのが特徴です。",
  },
  {
    question: "交流会の経験がまったくなくても受講できますか？",
    answer:
      "はい、未経験の方でも受講いただけます。30日間実践プログラムに沿って順番に進めるだけで、テーマ選びから初回開催まで辿り着ける設計になっています。",
  },
  {
    question: "どんなテーマの交流会でも対応していますか？",
    answer:
      "趣味・好きなテーマであれば基本的に対応しています。日本酒、AI、朝活、カフェ会、美容、不動産、ボードゲームなど、さまざまなテーマで応用できます。",
  },
  {
    question: "60分Zoom相談はどのように使えますか？",
    answer:
      "受講開始から180日以内であれば、いつでもご利用いただけます。テーマの絞り方、募集文のレビュー、参加費の設定、会場選びなど、実際に開催する上で出てくる具体的な悩みに対してお答えします。",
  },
  {
    question: "大人数のイベントを開きたい場合も対象ですか？",
    answer:
      "本講座は10人規模からスタートして継続的に参加者を増やしていく交流会を想定しています。30人・50人と輪を広げていくプロセスを含め、継続できる場の作り方に特化した内容です。",
  },
  {
    question: "購入後、いつから始められますか？",
    answer:
      "ご購入後すぐにアクセスいただけます。テキスト形式のため、ダウンロードや特別なアプリのインストールは不要です。",
  },
  {
    question: "返金保証はありますか？",
    answer:
      "本講座はデジタルコンテンツという特性上、購入後の返金はいたしかねます。購入前に販売ページの内容をよくご確認いただき、ご不明な点はZoom相談や購入前のお問い合わせをご活用ください。",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-white py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-[#2563EB] text-sm font-bold tracking-widest mb-3">よくある質問</p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A]">FAQ</h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-[#DBEAFE] rounded-xl overflow-hidden bg-white">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left py-5 px-6 flex items-center justify-between gap-4 hover:bg-[#F8FAFF] transition-colors"
              >
                <span className="text-[#0F172A] text-sm md:text-base font-medium leading-relaxed">
                  {faq.question}
                </span>
                <span
                  className={`text-[#2563EB] text-2xl font-light flex-shrink-0 transition-transform duration-200 ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 pt-4 text-[#374151] text-sm leading-[2] border-t border-[#EFF6FF]">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
