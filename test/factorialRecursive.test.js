import { factorialRecursive } from '../src/factorialRecursive';

test("Factorial Recursive", () => {
    const factorial1 = factorialRecursive(0);
    const factorial2 = factorialRecursive(2);
    const factorial3 = factorialRecursive(4);
    const factorial4 = factorialRecursive(6);
    const factorial5 = factorialRecursive(8);

    expect(factorial1).toBe(1);
    expect(factorial2).toBe(2);
    expect(factorial3).toBe(24);
    expect(factorial4).toBe(720);
    expect(factorial5).toBe(40320);
});