import { calculateAge } from "../src/calculateAge";

test("Calculate Age", () => {
    const age = calculateAge("1998-09-01", new Date());

    expect(age).toBe(25);
})