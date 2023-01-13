import { factorialLoop } from '../src/factorialLoop';

test("Factorial Loop", () => {
    const factorialLoop1 = factorialLoop(0);
    const factorialLoop2 = factorialLoop(2);
    const factorialLoop3 = factorialLoop(4);
    const factorialLoop4 = factorialLoop(6);
    const factorialLoop5 = factorialLoop(8);

    expect(factorialLoop1).toBe(1);
    expect(factorialLoop2).toBe(2);
    expect(factorialLoop3).toBe(24);
    expect(factorialLoop4).toBe(720);
    expect(factorialLoop5).toBe(40320);
});