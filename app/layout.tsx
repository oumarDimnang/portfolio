import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Fira_Code } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });
const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio",
  description:
    "Portfolio of Oumar Dimnang, a Full Stack Developer specializing in modern web technologies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={firaCode.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
