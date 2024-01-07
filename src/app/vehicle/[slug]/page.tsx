import { getVehicles } from "@/features";
import { toCamelCase } from "@/lib/helpers";
import { ListVehiclesProps } from "@/types";
import { Metadata } from "next";

import Client from "./client";

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata | undefined> {
  const { slug } = params;
  const vehicles = (await getVehicles()) as ListVehiclesProps;

  const foundVehicle = vehicles.type
    .map((item) => ({
      ...item,
      car_type: item.car_type.find(
        (item) => item.vehicle === toCamelCase(slug)
      ),
    }))
    .filter((item) => item.car_type !== undefined)[0];

  return {
    title: foundVehicle.car_type?.vehicle,
    description: foundVehicle.car_type?.description.join(", "),
  };
}

export async function generateStaticParams() {
  const vehicles = (await getVehicles()) as ListVehiclesProps;

  return vehicles.type.map((item) =>
    item.car_type.map((item) => ({ slug: item.vehicle }))
  );
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const vehicles = (await getVehicles()) as ListVehiclesProps;

  return (
    <main className="flex justify-center items-center w-full flex-col">
      <section className="max-w-4xl w-full px-4 pt-24 pb-14">
        <Client vehicles={vehicles} slug={slug} />
      </section>
    </main>
  );
}
