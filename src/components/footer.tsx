import Link from "next/link";
import { Heading, Paragraph } from "./ui/typography";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full flex justify-center px-4 py-3 items-center border-t border-slate-300">
      <div className="max-w-7xl flex justify-between items-start w-full">
        <div className="w-[400px]">
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
        <div>
          <Heading as="h3">Navigation</Heading>
          <ul className="flex space-y-2 flex-col mt-4">
            <li>
              <Link href="/" className="font-medium">
                Home
              </Link>
            </li>
            <li>
              <Link href="/wishlist" className="font-medium">
                Wishlist
              </Link>
            </li>
            <li>
              <Link href="/my-book" className="font-medium">
                My Book
              </Link>
            </li>
            <li>
              <Link href="/search" className="font-medium">
                Search
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
