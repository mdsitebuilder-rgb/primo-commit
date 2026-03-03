import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Web Agency",
  description: "Siti web moderni e professionali",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${geist.variable} antialiased scroll-smooth bg-[#0a0a0f] text-slate-50 selection:bg-cyan-500/30 selection:text-slate-50 transition-colors duration-300`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
