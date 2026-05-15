import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-noto-sans",
  display: "swap",
});

const notoSerifJP = Noto_Serif_JP({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-noto-serif",
  display: "swap",
});


export const metadata: Metadata = {
  title: "小さなコミュニティ実践講座 — 1ヶ月で自分の交流会を開催する実践プログラム",
  description:
    "趣味や好きなテーマを通して、価値観の合う人と繋がる交流会を開催したい方へ。募集文からLINE運営、集客方法、当日の進行まで、未経験からでも実践できる形でまとめた買い切り型オンライン講座。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${notoSerifJP.variable}`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
