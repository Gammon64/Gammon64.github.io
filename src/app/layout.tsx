import type { Metadata } from "next";
import { Arimo } from "next/font/google";
import "./globals.css";
import { Locale } from "./[lang]/dictionaries";

const arimo = Arimo({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hugo Henrique | Desenvolvedor Full Stack",
  description: "Portfólio profissional de Hugo Henrique, desenvolvedor Full Stack.",
};

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "pt" }];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}>) {
  return (
    <html lang={(await params).lang}>
      <body className={arimo.className}>{children}</body>
    </html>
  );
}
