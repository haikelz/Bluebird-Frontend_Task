import { CarTypeProps } from "@/types";
import { atom } from "jotai";

type LikedVehiclesAtomProps = CarTypeProps & { status: boolean };

export const scrollAtom = atom<number>(0);
export const wishlistAtom = atom<LikedVehiclesAtomProps[]>([]);

export const categoryAtom = atom<number>(1);
export const searchAtom = atom<string>("");
export const bookAtom = atom<CarTypeProps[]>([]);
export const showAtom = atom<boolean>(true);
