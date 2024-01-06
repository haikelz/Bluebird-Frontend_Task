import Footer from "@/components/footer";
import Header from "@/components/header";
import { ChildrenProps } from "@/types";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bluebird Test Haikel Ilham Hakim",
  description: "Bluebird Test Haikel Ilham Hakim",
};

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="w-full p-4 pt-20 pb-14 min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
