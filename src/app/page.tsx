import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Heading, Paragraph } from "@/components/ui/typography";
import { getVehicles } from "@/features/home";
import { ListVehiclesProps } from "@/types";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Bluebird Test Haikel Ilham Hakim",
  description: "Bluebird Test Haikel Ilham Hakim",
};

export default async function Page() {
  const vehicles = (await getVehicles()) as ListVehiclesProps;

  return (
    <main className="flex justify-center items-center w-full flex-col">
      <section className="max-w-7xl">
        <div className="flex flex-col">
          <div className="flex justify-center items-center space-x-4">
            {vehicles.category.map((item) => (
              <p key={item.id} className="font-bold">
                {item.name}
              </p>
            ))}
          </div>
          <div className="flex flex-col">
            {vehicles.type
              .sort((a, b) => {
                if (a.category_id > b.category_id) return 1;
                if (a.category_id < b.category_id) return -1;
                return 0;
              })
              .map((item) => (
                <div key={item.id} className="mt-8">
                  <p className="font-bold text-xl">
                    Kategori {item.category_id}:{" "}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 grid-rows-1 mt-4">
                    {item.car_type.map((item) => (
                      <Card key={item.vehicle}>
                        <CardHeader className="w-full ">
                          <Image
                            className="w-full hover:scale-105 transition-all cursor-pointer"
                            src={item.imageURL}
                            width={200}
                            height={200}
                            alt={item.vehicle}
                          />
                        </CardHeader>
                        <CardContent>
                          <Heading as="h3">{item.vehicle}</Heading>
                          <Paragraph className="">
                            {item.description.join(", ")}
                          </Paragraph>
                        </CardContent>
                        <CardFooter>
                          <Paragraph className="font-semibold">
                            {item.price}
                          </Paragraph>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
