import Footer from "@/components/footer";
import Header from "@/components/header";
import { ChildrenProps } from "@/types";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Wrapper from "./wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bluebird Test Haikel Ilham Hakim",
  description: "Bluebird Test Haikel Ilham Hakim",
};

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Wrapper>
          <Header />
          <div className="w-full">{children}</div>
          <Footer />
        </Wrapper>
      </body>
    </html>
  );
}
