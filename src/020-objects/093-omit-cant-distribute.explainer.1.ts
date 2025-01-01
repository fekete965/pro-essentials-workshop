import { Equal, Expect } from "@total-typescript/helpers";

type User = {
  id: string;
  name: string;
  age: number;
  imageId: string;
};

type Organisation = {
  id: string;
  name: string;
  address: string;
  imageId: string;
};

type Product = {
  id: string;
  name: string;
  price: number;
  imageId: string;
};

type Entity = User | Organisation | Product;

type EntityWithoutId = Omit<Entity, "id">;
//   ^?

type DistributiveOmit<T, K extends PropertyKey> = T extends any
  ? Omit<T, K>
  : never;

type StrictOmit<T extends object, K extends keyof T> = Omit<T, K>;

type DistributiveEntityWithoutId = DistributiveOmit<Entity, "id">;

type test = Expect<
  Equal<
    DistributiveEntityWithoutId,
    | {
        name: string;
        age: number;
        imageId: string;
      }
    | {
        name: string;
        address: string;
        imageId: string;
      }
    | {
        name: string;
        price: number;
        imageId: string;
      }
  >
>;
