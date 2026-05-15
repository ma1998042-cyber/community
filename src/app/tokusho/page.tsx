import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記 | 小さなコミュニティ実践講座",
};

const items: { label: string; value: string }[] = [
  { label: "販売業者", value: "株式会社AI Docks" },
  { label: "代表者", value: "松永勇樹" },
  { label: "所在地", value: "東京都渋谷区道玄坂1丁目10番8号 渋谷道玄坂東急ビル2F−C" },
  { label: "メールアドレス", value: "support@ai-docks.co.jp" },
  { label: "販売URL", value: "https://【REPLACE_ME】" },
  {
    label: "販売価格",
    value: "79,800円（税込）",
  },
  {
    label: "追加手数料等",
    value: "なし",
  },
  {
    label: "お支払い方法",
    value: "クレジットカード、銀行振込",
  },
  {
    label: "お支払い時期",
    value: "クレジットカード：ご注文時にお支払い確定。銀行振込：ご注文後7日以内",
  },
  {
    label: "商品の引渡し時期",
    value: "決済完了後、登録メールアドレスにアクセス先を案内するメールを送付します。",
  },
  {
    label: "返品・キャンセルについて",
    value:
      "本商品はデジタルコンテンツという特性上、購入完了後の返品・返金はいたしかねます。購入前に販売ページの内容をよくご確認ください。",
  },
  {
    label: "動作環境",
    value: "インターネット接続環境・ブラウザがあればご利用いただけます。",
  },
];

export default function TokushoPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFF]">
      <header className="bg-white border-b border-[#DBEAFE]">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center">
          <Link href="/" className="text-[#0F172A] font-bold text-sm md:text-base hover:text-[#2563EB] transition-colors">
            小さなコミュニティ実践講座
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-10 pb-4 border-b border-[#DBEAFE]">
          特定商取引法に基づく表記
        </h1>

        <div className="bg-white border border-[#DBEAFE] rounded-2xl overflow-hidden">
          <table className="w-full text-sm">
            <tbody>
              {items.map((item, i) => (
                <tr key={i} className="border-b border-[#EFF6FF] last:border-0">
                  <th className="text-left align-top bg-[#F8FAFF] text-[#0F172A] font-bold px-6 py-4 whitespace-nowrap w-40 md:w-48">
                    {item.label}
                  </th>
                  <td className="text-[#374151] px-6 py-4 leading-[2]">
                    {item.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 pt-6 border-t border-[#DBEAFE] text-center">
          <Link
            href="/"
            className="inline-flex items-center text-[#2563EB] text-sm font-medium hover:underline"
          >
            ← トップページへ戻る
          </Link>
        </div>
      </main>
    </div>
  );
}
