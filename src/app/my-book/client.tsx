"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Heading, Paragraph } from "@/components/ui/typography";
import { idrToNumber } from "@/lib/helpers";
import { cn } from "@/lib/utils";
import { bookAtom } from "@/store";
import { CarTypeProps } from "@/types";
import { useAtom } from "jotai";
import Image from "next/image";
import { useEffect } from "react";

export default function Client() {
  const [book, setBook] = useAtom(bookAtom);

  useEffect(() => {
    if (localStorage.getItem("my-book")) {
      setBook(JSON.parse(localStorage.getItem("my-book") || ""));
    }
  }, [setBook]);

  return (
    <div className="space-y-6 mt-8">
      {book.length ? (
        <>
          {book.map((item, index) => (
            <Card key={index + 1} className="h-fit w-full">
              <CardContent className="flex flex-col md:flex-row justify-center items-start">
                <Image
                  className={cn(
                    "hover:scale-105 h-full min-w-[200px]",
                    "md:w-full max-w-full transition-all cursor-pointer"
                  )}
                  src={item.imageURL}
                  width={200}
                  height={200}
                  alt={item.vehicle}
                />
                <div className="md:p-4 mt-4 md:mt-0">
                  <div>
                    <Heading as="h3">{item.vehicle}</Heading>
                    <Paragraph className="line-clamp-2">
                      <span className="font-semibold">Deskripsi: </span>
                      {item.description.join(", ")}
                    </Paragraph>
                  </div>
                  <div className="flex justify-between mt-4 items-center">
                    <Paragraph className="font-semibold">
                      {item.price}
                    </Paragraph>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          <TotalPrice book={book} />
        </>
      ) : (
        <Paragraph className="text-center mt-8 font-bold text-xl">
          Belum ada data!
        </Paragraph>
      )}
    </div>
  );
}

function TotalPrice({ book }: { book: CarTypeProps[] }) {
  const total = new Intl.NumberFormat("id-ID", {
    style: "decimal",
  }).format(
    book.map((item) => idrToNumber(item.price)).reduce((a, b) => a + b)
  );

  return (
    <Paragraph className="text-right">
      <span className="font-bold">Total Harga: </span>
      IDR {total}
    </Paragraph>
  );
}
