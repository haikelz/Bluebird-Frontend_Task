import { API_URL } from "@/lib/constants";
import { ListVehiclesProps } from "@/types";
import Link from "next/link";
import { ofetch } from "ofetch";

async function getData(): Promise<ListVehiclesProps | undefined> {
  try {
    const response = await ofetch(API_URL, {
      responseType: "json",
      parseResponse: JSON.parse,
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response;
  } catch (err) {
    console.error(err);
  }
}

export default async function Page() {
  const vehicles = await getData();

  console.log(vehicles);

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/wishlist">Wishlist</Link>
            </li>
            <li>
              <Link href="/my-book">My Book</Link>
            </li>
            <li>{/** Search input */}</li>
          </ul>
        </nav>
      </header>
      <section className="max-w-7xl">
        {vehicles?.type.map((item) => (
          <p key={item.id}>sfdfsdf</p>
        ))}
      </section>
    </div>
  );
}
