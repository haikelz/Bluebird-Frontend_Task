"use client";

import Image from "next/image";
import Link from "next/link";
import { Input } from "./ui/input";
import { useScroll } from "@/hooks/use-scroll";

export default function Header() {
  const scroll = useScroll();

  return (
    <>
      {scroll < 20 ? (
        <header className="fixed z-50 top-0 bg-white/70 flex justify-center px-4 py-3 items-center border-b border-slate-300 backdrop-blur-lg w-full">
          <nav className="w-full max-w-7xl flex justify-between items-center">
            <Link href="/">
              <button type="button" aria-label="home">
                <Image
                  src="/images/logo.png"
                  alt="bluebird logo"
                  width={150}
                  height={150}
                />
              </button>
            </Link>
            <ul className="flex space-x-6 justify-center items-center">
              <li>
                <Link href="/wishlist" className="font-semibold">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link href="/my-book" className="font-semibold">
                  My Book
                </Link>
              </li>
              <li>
                <Input type="text" placeholder="Search...." />
              </li>
            </ul>
          </nav>
        </header>
      ) : null}
    </>
  );
}
