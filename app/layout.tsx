import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "./components/layouts/header/Header";

const NotoSansJP = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI画像生成ツールPro",
  description:
    "AI画像生成ツールProは生成AI技術を使って便利な画像を出力するWebサービスです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={NotoSansJP.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
