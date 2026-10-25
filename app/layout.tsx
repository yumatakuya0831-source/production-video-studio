import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Production Video Studio",
  description: "Production Video Studio の開発用スタートページ",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
