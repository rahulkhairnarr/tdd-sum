import { add } from "../src/sum";

describe("Testing Add Function", () => {
  test("Checking Empty string", () => {
    const result = add("");
    expect(result).toBe(0);
  });
  test("Checking with single number", () => {
    const result = add("1");
    expect(result).toBe(1);
  });
  test("Checking with single number with some space", () => {
    const result = add(" 1 ");
    expect(result).toBe(1);
  });
  test("Single Negative Number", () => {
    const result = add("-1");
    expect(() => {
      if (result instanceof Error) throw result;
    }).toThrow("negative numbers not allowed -1");
  });
  test("Add Two number", () => {
    const result = add("2,4");
    expect(result).toBe(6);
  });
  test("Multiple delimiter", () => {
    const result = add("//;\n1;2");
    expect(result).toBe(3);
  });
  test("Multiple delimiter with value more than 1000", () => {
    const result = add("//;\n1;2000");
    expect(result).toBe(1);
  });
  test("Negative number", () => {
    const result = add("//;\n1;-2");
    expect(() => {
      if (result instanceof Error) throw result;
    }).toThrow("Negatives not allowed: -2");
  });
});
