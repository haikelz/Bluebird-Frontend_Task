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
        <main className="w-full flex justify-center items-center flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
