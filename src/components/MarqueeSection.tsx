const items = [
  "日本酒交流会",
  "株・投資勉強会",
  "フットサルサークル",
  "食べ歩きの会",
  "謎解きイベント",
  "オーガニック生活",
  "占い好きの集まり",
  "ワインを楽しむ会",
  "読書会",
  "朝活コミュニティ",
  "カメラ散歩の会",
  "ボードゲーム会",
  "登山・ハイキング",
  "手作りパン教室",
  "映画好きの集まり",
];

export default function MarqueeSection() {
  const doubled = [...items, ...items];

  return (
    <div className="bg-[#EFF6FF] border-y border-[#DBEAFE] py-3 overflow-hidden">
      <div
        className="flex gap-0 whitespace-nowrap"
        style={{ animation: "marquee 30s linear infinite" }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center text-[#2563EB] text-sm font-bold">
            {item}
            <span className="mx-5 text-[#BFDBFE]">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
