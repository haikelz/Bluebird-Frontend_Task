import { Heading, Paragraph } from "@/components/ui/typography";
import { getVehicles } from "@/features";
import { ListVehiclesProps } from "@/types";
import Image from "next/image";

export async function generateStaticParams() {
  const vehicles = (await getVehicles()) as ListVehiclesProps;
  return vehicles.type.map((item) =>
    item.car_type.map((item) => ({ slug: item.vehicle }))
  );
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const data = (await getVehicles()) as ListVehiclesProps;

  const { description, imageURL, price, vehicle } = data.type.map(
    (item) =>
      item.car_type.filter(
        (item) => item.vehicle.toUpperCase() === slug.toUpperCase()
      )[0]
  )[0];

  return (
    <main className="flex justify-center items-center w-full flex-col">
      <section className="max-w-7xl">
        <div className="flex items-center">
          <Image src={imageURL} alt={vehicle} width={200} height={200} />
          <div>
            <Heading as="h3">{vehicle}</Heading>
            <Paragraph>{description}</Paragraph>
            <Paragraph>{price}</Paragraph>
          </div>
        </div>
      </section>
    </main>
  );
}
