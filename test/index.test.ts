import { test, expect } from "@jest/globals";
import { firstDefined } from "../source";

test("return first", () => {
  expect(firstDefined([0, 1])).toBe(0);
});

test("return first without default value", () => {
  expect(firstDefined([0, 1])).toBe(0);
});

test("return last without default value", () => {
  expect(firstDefined([undefined, 1])).toBe(1);
});

test("retrun last default value", () => {
  expect(firstDefined([undefined, undefined], 2)).toBe(2);
});

test("none defined", () => {
  expect(firstDefined([undefined, undefined])).toBe(undefined);
});

test("default undefined", () => {
  expect(firstDefined([undefined, undefined], undefined)).toBe(undefined);
});
