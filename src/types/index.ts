import { ReactNode } from "react";

export type ChildrenProps = {
  children: ReactNode;
};

export type ListVehiclesProps = {
  category: CategoryProps[];
  type: TypeProps[];
};

export type CategoryProps = {
  id: number;
  name: string;
  imageURL: string;
};

export type TypeProps = {
  id: number;
  category_id: number;
  car_type: CarTypeProps[];
};

export type CarTypeProps = {
  vehicle: string;
  imageURL: string;
  price: string;
  description: string[];
};
