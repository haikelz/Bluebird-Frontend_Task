import { getVehicles } from "@/features";
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
      <section className="max-w-7xl">
        <div className="flex flex-col">
          <Client vehicles={vehicles} />
        </div>
      </section>
    </main>
  );
}
