"use client";

import { useScroll } from "@/hooks";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Input } from "./ui/input";

export default function Header() {
  const scroll = useScroll();

  return (
    <>
      {scroll < 20 ? (
        <header
          className={cn(
            "fixed z-50 top-0 bg-white/70",
            "flex justify-center px-4 py-3 items-center",
            "border-b border-slate-300 backdrop-blur-lg w-full"
          )}
        >
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
            <ul className="md:flex hidden space-x-6 justify-center items-center">
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
            <div className="block md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="font-bold">Menu</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Wishlist</DropdownMenuItem>
                  <DropdownMenuItem>My Book</DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Input type="text" placeholder="Search...." />
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </nav>
        </header>
      ) : null}
    </>
  );
}
