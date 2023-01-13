import { factorialTailRecursive } from '../src/factorialTailRecursive';

test("Factorial Tail Recursive", () => {
    const factorial1 = factorialTailRecursive(1, 1);
    const factorial2 = factorialTailRecursive(1, 2);
    const factorial3 = factorialTailRecursive(1, 4);
    const factorial4 = factorialTailRecursive(1, 6);
    const factorial5 = factorialTailRecursive(1, 8);

    expect(factorial1).toBe(1);
    expect(factorial2).toBe(2);
    expect(factorial3).toBe(24);
    expect(factorial4).toBe(720);
    expect(factorial5).toBe(40320);
});