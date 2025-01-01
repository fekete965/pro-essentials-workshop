import { it, expect } from "vitest";

type Coordinates = {
  x: number;
  y: number;
};

function add(this: Coordinates) {
  return this.x + this.y;
}

function setValues(this: Coordinates, x: number, y: number) {
  this.x = x;
  this.y = y;
}

it("Should add the numbers together", () => {
  const calculator = {
    x: 0,
    y: 0,

    add,
    setValues,
  };

  calculator.setValues(1, 2);

  expect(calculator.add()).toEqual(3);
});
