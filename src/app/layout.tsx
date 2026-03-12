import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "doortomoon — 출퇴근 시간을 더 낫게",
  description:
    "하루 3시간, 우리는 그 시간을 어디에 쓰고 있나요? doortomoon은 출퇴근 시간을 더 낫게 만드는 것을 미션으로 합니다.",
  openGraph: {
    title: "doortomoon — 출퇴근 시간을 더 낫게",
    description:
      "하루 3시간, 우리는 그 시간을 어디에 쓰고 있나요? doortomoon은 출퇴근 시간을 더 낫게 만드는 것을 미션으로 합니다.",
    url: "https://doortomoon.com",
    siteName: "doortomoon",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${notoSansKR.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
