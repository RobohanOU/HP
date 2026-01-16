import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import './global.css';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin", "japanese"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Robohan -大阪大学公認ロボット製作団体-",
  description: "RobohanはNHK学生ロボコン優勝を目指す大阪大学公認のロボット製作団体です。",
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
          <Header/>
          <main className="mainContent">{children}</main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
