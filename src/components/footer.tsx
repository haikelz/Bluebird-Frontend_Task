import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

import { Heading, Paragraph } from "./ui/typography";

export default function Footer() {
  return (
    <footer
      className={cn(
        "w-full flex justify-center px-4 py-10",
        "items-center border-t border-slate-300"
      )}
    >
      <div
        className={cn(
          "max-w-7xl flex-col md:flex-row flex",
          "justify-start md:justify-between items-start w-full"
        )}
      >
        <div className="w-full mt-6 md:mt-0 md:w-[400px]">
          <Image
            src="/images/logo.png"
            width={150}
            height={150}
            alt="bluebird logo"
          />
          <Paragraph>
            Bluebird Group is an Indonesian transportation company based in
            Jakarta. Established in 1972, the company is known for its Bluebird
            taxicab service as well as other transportation services.
          </Paragraph>
        </div>
        <div className="mt-6 md:mt-0">
          <Heading as="h3">Navigation</Heading>
          <ul className="flex space-y-2 flex-col mt-4">
            <li>
              <Link
                href="/"
                className="font-medium hover:underline underline-offset-2"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/wishlist"
                className="font-medium hover:underline underline-offset-2"
              >
                Wishlist
              </Link>
            </li>
            <li>
              <Link
                href="/my-book"
                className="font-medium hover:underline underline-offset-2"
              >
                My Book
              </Link>
            </li>
            <li>
              <Link
                href="/search"
                className="font-medium hover:underline underline-offset-2"
              >
                Search
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
