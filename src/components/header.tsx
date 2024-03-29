"use client";

import { useScroll } from "@/hooks";
import { cn } from "@/lib/utils";
import { searchAtom } from "@/store";
import { useSetAtom } from "jotai";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";

import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Input } from "./ui/input";

export default function Header() {
  const setSearch = useSetAtom(searchAtom);
  const pathname = usePathname();

  const headerRef = useRef<HTMLDivElement>(null);
  const { show } = useScroll(headerRef);

  return (
    <>
      {show ? (
        <header
          ref={headerRef}
          className={cn(
            "fixed z-50 top-0 bg-[#2f5296]",
            "flex justify-center px-4 py-3 items-center",
            "w-full"
          )}
        >
          <nav className="w-full max-w-7xl flex justify-between items-center">
            <Link href="/">
              <button type="button" aria-label="home">
                <Image
                  src="/images/logo.svg"
                  alt="bluebird logo"
                  width={150}
                  height={150}
                />
              </button>
            </Link>
            <ul className="md:flex text-white hidden space-x-8 justify-center items-center">
              <li>
                <Link
                  href="/wishlist"
                  className={cn(
                    "font-bold",
                    pathname === "/wishlist"
                      ? "underline underline-offset-4"
                      : ""
                  )}
                >
                  Wishlist
                </Link>
              </li>
              <li>
                <Link
                  href="/my-book"
                  className={cn(
                    "font-bold",
                    pathname === "/my-book"
                      ? "underline underline-offset-4"
                      : ""
                  )}
                >
                  My Book
                </Link>
              </li>
              <li>
                <Input
                  type="text"
                  placeholder="Search...."
                  className="text-black"
                  onChange={(e) => setSearch(e.target.value)}
                />
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
                    <Input
                      type="text"
                      placeholder="Search...."
                      onChange={(e) => setSearch(e.target.value)}
                    />
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
