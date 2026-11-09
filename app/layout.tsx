import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Дизайн без воды с помощью AI | Практический мини-курс",
  description: "Освой процесс создания сайтов с AI за 5 уроков: от референсов и визуального стиля до публикации. QR-меню и кейс для портфолио. Доступ навсегда.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased">{children}</body>
    </html>
  );
}
