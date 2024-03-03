import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Water Remover",
  description: "Remove water from speakers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="google-adsense-account" content="ca-pub-3158944728772791"></meta>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
