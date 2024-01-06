import { API_URL } from "@/lib/constants";
import { ListVehiclesProps } from "@/types";
import { ofetch } from "ofetch";

export async function getVehicles(): Promise<ListVehiclesProps | undefined> {
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
