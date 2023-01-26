import { sumArray } from "../src/sumArray";

test("Sum Array", () => {
    const sumArr = sumArray([1, 2, 3], [3, 4, 5]);

    expect(sumArr).toBe(15)
})