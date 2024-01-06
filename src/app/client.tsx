"use client";

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
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Heading, Paragraph } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { categoryAtom, vehicleNameAtom, wishlistAtom } from "@/store";
import { CarTypeProps, ListVehiclesProps } from "@/types";
import { useAtom } from "jotai";
import { HeartIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import slugify from "slugify";

export default function Client({ vehicles }: { vehicles: ListVehiclesProps }) {
  const [category, setCategory] = useAtom(categoryAtom);

  return (
    <>
      <div className="flex justify-center items-center space-x-14">
        {vehicles.category.map((item) => (
          <div
            key={item.id}
            onClick={() => setCategory(item.id)}
            role="button"
            className={cn(
              category === item.id
                ? "bg-slate-50 drop-shadow-md p-4 rounded-lg"
                : ""
            )}
          >
            {/* There is a wrong url in index 0 when i get the data from API.
             * So to prevent this problem, i split the URL to array and join it.
             */}
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
        ))}
      </div>
      <div className="mt-14">
        <div>
          <Heading as="h2">Daftar Mobil</Heading>
          <Paragraph>
            Berikut adalah daftar mobil yang tersedia dan siap disewakan:
          </Paragraph>
        </div>
        <div className="flex flex-col">
          {vehicles.type
            .sort((a, b) => {
              if (a.category_id > b.category_id) return 1;
              if (a.category_id < b.category_id) return -1;
              return 0;
            })
            .filter((item) => item.category_id === category)
            .map((item) => (
              <div key={item.id} className="mt-8">
                <Paragraph className="font-bold text-xl">
                  Kategori {item.category_id}:{" "}
                </Paragraph>
                <Carousel className="mt-3">
                  <CarouselContent>
                    {item.car_type.map((item, index) => (
                      <CarouselItem key={item.vehicle} className="md:basis-1/2">
                        {/*<Link
                          href={`/vehicle/${slugify(item.vehicle, {
                            lower: true,
                          })}`}
                        >*/}
                        <Card>
                          <CardHeader className="w-full">
                            <Image
                              className="hover:scale-105 md:w-full max-w-full min-w-[200px] transition-all cursor-pointer"
                              src={item.imageURL}
                              width={200}
                              height={200}
                              alt={item.vehicle}
                            />
                          </CardHeader>
                          <CardContent>
                            <Heading as="h3">{item.vehicle}</Heading>
                            <Paragraph className="">
                              <span className="font-semibold">Deskripsi: </span>
                              {item.description.join(", ")}
                            </Paragraph>
                          </CardContent>
                          <CardFooter className="flex justify-between items-center">
                            <Paragraph className="font-semibold">
                              {item.price}
                            </Paragraph>
                            <HeartButton
                              data={{
                                description: item.description,
                                vehicle: item.vehicle,
                                imageURL: item.imageURL,
                                price: item.price,
                              }}
                            />
                          </CardFooter>
                        </Card>
                        {/*</Link>*/}
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselNext />
                  <CarouselPrevious />
                </Carousel>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export function HeartButton({ data }: { data: CarTypeProps }) {
  const [wishlist, setWishlist] = useAtom(wishlistAtom);
  const [vehicleName, setVehicleName] = useAtom(vehicleNameAtom);

  function handleClick() {
    const list = [...wishlist];
    list.push({ ...data, status: true });

    setWishlist(list);
    localStorage.setItem("list", JSON.stringify(list));
  }

  useEffect(() => {
    if (localStorage.getItem("list")) {
      setWishlist(JSON.parse(localStorage.getItem("list") || ""));
    }
  }, [setWishlist]);

  return (
    <button onClick={handleClick}>
      <HeartIcon
        size={23}
        className={cn(vehicleName === data.vehicle ? "bg-red-500" : "")}
      />
    </button>
  );
}
