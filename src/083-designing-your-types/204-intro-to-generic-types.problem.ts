import { Equal, Expect } from "@total-typescript/helpers";

type ErrorShape = {
  error: {
    message: string;
  };
};

type BaseData<TData> =
  | {
      data: TData;
    }
  | ErrorShape;

type UserDataShape = BaseData<{
  id: string;
  name: string;
  email: string;
}>;

type PostDataShape = BaseData<{
  id: string;
  title: string;
  body: string;
}>;

// TESTS

type tests = [
  Expect<
    Equal<
      UserDataShape,
      | {
          data: {
            id: string;
            name: string;
            email: string;
          };
        }
      | {
          error: {
            message: string;
          };
        }
    >
  >,
  Expect<
    Equal<
      PostDataShape,
      | {
          data: {
            id: string;
            title: string;
            body: string;
          };
        }
      | {
          error: {
            message: string;
          };
        }
    >
  >,
];
