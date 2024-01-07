"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Heading, Paragraph } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { bookAtom } from "@/store";
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
    <div>
      {book.map((item) => (
        <Card key={item.vehicle} className="h-fit w-full">
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
                <Paragraph className="font-semibold">{item.price}</Paragraph>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
