import { Paragraph } from "@/components/ui/typography";
import { getVehicles } from "@/features";
import { cn } from "@/lib/utils";
import { ListVehiclesProps } from "@/types";
import { Metadata } from "next";

import Client from "./client";

export const metadata: Metadata = {
  title: "Bluebird Test Haikel Ilham Hakim",
  description: "Bluebird Test Haikel Ilham Hakim",
};

export default async function Page() {
  const vehicles = (await getVehicles()) as ListVehiclesProps;

  return (
    <main className="flex justify-center items-center w-full flex-col">
      <section
        className={cn(
          "min-h-screen flex justify-center flex-col px-10 w-full items-center",
          "md:items-start bg-banner bg-cover bg-no-repeat saturate-50"
        )}
      >
        <h1
          className="text-white font-black text-7xl"
          data-testid="bluebird-heading"
        >
          Bluebird
        </h1>
        <Paragraph className="text-white text-center text-2xl font-medium">
          Jadikan perjalananmu lebih bermakna dan menyenangkan
        </Paragraph>
      </section>
      <section className="flex py-10 flex-col max-w-4xl w-full px-4 justify-center items-center">
        <Client vehicles={vehicles} />
      </section>
    </main>
  );
}
