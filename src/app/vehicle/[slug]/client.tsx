"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Heading, Paragraph } from "@/components/ui/typography";
import { toCamelCase } from "@/lib/helpers";
import { cn } from "@/lib/utils";
import { CarTypeProps, ListVehiclesProps } from "@/types";
import { CheckIcon, HeartIcon, LinkIcon } from "lucide-react";
import Image from "next/image";
import useClipboard from "react-use-clipboard";

export default function Client(
  { vehicles, slug }: { vehicles: ListVehiclesProps; slug: string }
) {
  const [isCopied, setIsCopied] = useClipboard(
    `https://bluebird-frontend-task-haikelilhamhakim.vercel.app/vehicle/${slug}`,
    { successDuration: 1000 }
  );

  return (
    <>
      <div className="w-full flex justify-start flex-col">
        <Heading as="h2">{toCamelCase(slug)}</Heading>
        <Paragraph></Paragraph>
      </div>
      <div className="flex flex-col w-full">
        {vehicles.type.map((item) => (
          <div key={item.id} className="w-full">
            {item.car_type
              .filter((item) => item.vehicle === toCamelCase(slug))
              .map((item) => (
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
                        <Paragraph className="font-semibold">
                          {item.price}
                        </Paragraph>
                        <div className="flex items-center space-x-3">
                          <button
                            type="button"
                            aria-label="share"
                            onClick={setIsCopied}
                          >
                            {isCopied ? <CheckIcon /> : <LinkIcon />}
                          </button>
                          <HeartButton
                            data={{
                              description: item.description,
                              vehicle: item.vehicle,
                              imageURL: item.imageURL,
                              price: item.price,
                            }}
                            vehicles={vehicles}
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        ))}
      </div>
    </>
  );
}

export function HeartButton(
  { data, vehicles }: { data: CarTypeProps; vehicles: ListVehiclesProps }
) {
  /*
   function handleClick() {
    const newData = vehicles.type.map((item) => item.car_type);

    const list = [...newData];
    list.push();

    console.log(list);

    // setVehicles(list);
    localStorage.setItem("list", JSON.stringify(list));
  }
  */

  return (
    <button type="button" aria-label="like">
      <HeartIcon size={23} />
    </button>
  );
}
