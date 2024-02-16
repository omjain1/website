import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kapish Jain",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-x-hidden`}
        style={{ overflowY: 'auto', scrollbarWidth: 'thin', WebkitOverflowScrolling: 'touch' }}
      >
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
