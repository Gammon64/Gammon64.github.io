import type { Metadata } from "next";
import { Arimo } from "next/font/google";
import "./globals.css";
import mock_metadata from "@/mock/metadata.json";

const arimo = Arimo({
  subsets: ["latin"],
});

export const metadata: Metadata = mock_metadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={arimo.className}>{children}</body>
    </html>
  );
}
