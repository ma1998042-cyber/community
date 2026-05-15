import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー | 小さなコミュニティ実践講座",
};

export default function PrivacyPage() {
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
          プライバシーポリシー
        </h1>

        <div className="space-y-10 text-[#374151] text-sm leading-[2]">
          <section>
            <p>
              株式会社AI Docks（以下「当社」）は、本ウェブサイト上で提供するサービス（以下「本サービス」）における、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」）を定めます。
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-[#0F172A] mb-3">1. 個人情報の収集について</h2>
            <p>
              当社は、本サービスのご利用にあたり、氏名、メールアドレス、その他必要な情報をご提供いただく場合があります。収集した個人情報は、以下の目的のために利用します。
            </p>
            <ul className="mt-3 space-y-1 list-disc list-inside">
              <li>本サービスの提供・運営</li>
              <li>ご購入いただいた商品・サービスの提供</li>
              <li>お問い合わせへの対応</li>
              <li>サービスに関するご案内・メールマガジンの配信（同意をいただいた場合）</li>
              <li>利用規約に違反したユーザーへの対応</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-[#0F172A] mb-3">2. 個人情報の第三者提供</h2>
            <p>
              当社は、次のいずれかに該当する場合を除き、あらかじめユーザーの同意を得ることなく第三者に個人情報を提供することはありません。
            </p>
            <ul className="mt-3 space-y-1 list-disc list-inside">
              <li>法令に基づく場合</li>
              <li>人の生命・身体・財産の保護のために必要な場合</li>
              <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要な場合</li>
              <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-[#0F172A] mb-3">3. 個人情報の管理</h2>
            <p>
              当社は、個人情報の正確性を保ち、これを安全に管理いたします。個人情報の紛失、破壊、改ざん及び漏洩などのリスクに対して、適切な安全管理措置を講じます。
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-[#0F172A] mb-3">4. Cookieの使用について</h2>
            <p>
              当社のウェブサイトでは、利便性の向上・アクセス解析のためにCookieを使用することがあります。ブラウザの設定によりCookieを無効にすることは可能ですが、一部のサービスが利用できなくなる場合があります。
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-[#0F172A] mb-3">5. アクセス解析ツール</h2>
            <p>
              当社のウェブサイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用することがあります。Googleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-[#0F172A] mb-3">6. 個人情報の開示・訂正・削除</h2>
            <p>
              ユーザーは、当社が保有する自己の個人情報の開示、訂正、削除等を求めることができます。ご要望の際は、下記のお問い合わせ先までご連絡ください。
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-[#0F172A] mb-3">7. プライバシーポリシーの変更</h2>
            <p>
              本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、ユーザーに通知することなく変更することができるものとします。変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-[#0F172A] mb-3">8. お問い合わせ</h2>
            <p>
              個人情報の取扱いに関するお問い合わせは、下記までご連絡ください。
            </p>
            <div className="mt-3 bg-white border border-[#DBEAFE] rounded-xl px-6 py-4">
              <p>事業者名：株式会社AI Docks</p>
              <p>代表者：松永勇樹</p>
              <p>メールアドレス：support@ai-docks.co.jp</p>
            </div>
          </section>
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
