import { Equal, Expect } from "@total-typescript/helpers";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

type PartialUser = Pick<User, "email" | "name">;

const fetchUser = async (): Promise<PartialUser> => {
  const response = await fetch("/api/user");
  const user = await response.json();
  return user;
};

const example = async () => {
  const user = await fetchUser();

  type test = Expect<Equal<typeof user, { name: string; email: string }>>;
};
