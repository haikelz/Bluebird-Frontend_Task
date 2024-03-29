"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Heading, Paragraph } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { bookAtom, categoryAtom, searchAtom } from "@/store";
import { CarTypeProps, ListVehiclesProps } from "@/types";
import { useAtom, useAtomValue } from "jotai";
import { HeartIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useDeferredValue } from "react";
import { toast } from "react-hot-toast";
import slugify from "slugify";

export default function Client({ vehicles }: { vehicles: ListVehiclesProps }) {
  const [category, setCategory] = useAtom(categoryAtom);
  const [book, setBook] = useAtom(bookAtom);

  const search = useAtomValue(searchAtom);
  const deferredSearch = useDeferredValue(search);

  function handleBook(item: CarTypeProps) {
    const data = [...book];
    data.push(item);

    setBook(data);
    localStorage.setItem("my-book", JSON.stringify(data));
    toast("Kamu membooking kendaraan ini!", { duration: 2000 });
  }

  return (
    <>
      <div className="w-full flex justify-start flex-col">
        <Heading as="h2">Daftar Mobil</Heading>
        <Paragraph>
          Berikut adalah daftar mobil yang tersedia dan siap disewakan:
        </Paragraph>
      </div>
      <Carousel className="max-w-sm w-full">
        <CarouselContent className="space-x-6 p-4">
          {vehicles.category.map((item) => (
            <CarouselItem
              key={item.id}
              onClick={() => setCategory(item.id)}
              role="button"
              className="basis-1/2"
            >
              <div
                className={cn(
                  "bg-slate-50 hover:bg-slate-100 p-4 rounded-lg transition-all hover:drop-shadow-md",
                  category === item.id
                    ? "bg-slate-100 border-[3px] border-solid border-slate-900 drop-shadow-md"
                    : ""
                )}
              >
                <Image
                  src={item.imageURL.replace(" ", "")}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="min-w-[100px] h-auto w-full max-w-full"
                />
                <Paragraph key={item.id} className="font-bold mt-4">
                  {item.name}
                </Paragraph>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex flex-col">
        {vehicles.type
          .sort((a, b) => {
            if (a.category_id > b.category_id) return 1;
            if (a.category_id < b.category_id) return -1;
            return 0;
          })
          .filter((item) => item.category_id === category)
          .map((item) => (
            <div key={item.id} className="mt-8 w-full">
              <Paragraph className="font-bold text-xl">
                Kategori {item.category_id}:{" "}
              </Paragraph>
              <Carousel className="mt-3 max-w-sm md:max-w-lg w-full">
                <CarouselContent>
                  {item.car_type
                    .filter((item) => {
                      if (deferredSearch === "" || deferredSearch === null) {
                        return item;
                      } else if (
                        item.vehicle
                          .toLowerCase()
                          .includes(deferredSearch.toLowerCase())
                      ) {
                        return item;
                      }
                    })
                    .map((item) => (
                      <CarouselItem key={item.vehicle}>
                        <Card className="h-fit">
                          <CardHeader>
                            <Image
                              className={cn(
                                "hover:scale-105 md:w-full max-w-full",
                                "min-w-[200px] transition-all cursor-pointer"
                              )}
                              src={item.imageURL}
                              width={200}
                              height={200}
                              alt={item.vehicle}
                            />
                          </CardHeader>
                          <CardContent>
                            <Link
                              href={`/vehicle/${slugify(item.vehicle, {
                                lower: true,
                              })}`}
                              className="hover:text-blue-500 transition-all"
                            >
                              <Heading as="h3">{item.vehicle}</Heading>
                            </Link>
                            <Paragraph className="line-clamp-2">
                              <span className="font-semibold">Deskripsi: </span>
                              {item.description.join(", ")}
                            </Paragraph>
                          </CardContent>
                          <CardFooter className="flex justify-between items-center">
                            <Paragraph className="font-semibold">
                              {item.price}
                            </Paragraph>
                            <div className="flex space-x-6 items-center">
                              <button type="button" aria-label="like">
                                <HeartIcon size={23} />
                              </button>
                              <Button
                                onClick={() => handleBook(item)}
                                className="font-bold"
                              >
                                Book now
                              </Button>
                            </div>
                          </CardFooter>
                        </Card>
                      </CarouselItem>
                    ))}
                </CarouselContent>
              </Carousel>
            </div>
          ))}
      </div>
    </>
  );
}
