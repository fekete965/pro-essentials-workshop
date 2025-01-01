import { Equal, Expect } from "@total-typescript/helpers";

const appElement = document.getElementById("app");

// How do I ensure that appElement is defined?
if (appElement == null) {
  throw new Error("Cannot find element by id #app");
}

type Test = Expect<Equal<typeof appElement, HTMLElement>>;
