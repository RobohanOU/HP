import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import './global.css';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin", "japanese"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Robohan -大阪大学公認ロボット製作団体-",
  description: "Robohanは大阪大学公認のロボット製作団体です。NHK学生ロボコンと呼ばれる全国の大学が参戦する大会で優勝することを目標に日々活動を行っています!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable}`}>
        <div className="siteWrapper">
          <div className="header">
            <Header/>
          </div>
          <main className="mainContent">{children}</main>
          <div className="footer">
            <Footer/>
          </div>
        </div>
      </body>
    </html>
  );
}
