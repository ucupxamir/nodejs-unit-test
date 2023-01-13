import { fibbonaci } from "../src/fibbonaci";

test("Fibbonaci Test 1", () => {
    const fib = fibbonaci(5);

    expect(fib[0]).toBe(0);
    expect(fib[1]).toBe(1);
    expect(fib[2]).toBe(1);
    expect(fib[3]).toBe(2);
    expect(fib[4]).toBe(3);
});

test("Fibbonaci Test 2", () => {
    const fib = fibbonaci(0);

    expect(fib.length).toBe(0);
});

test("Fibbonaci Test 2", () => {
    const fib = fibbonaci(1);

    expect(fib[0]).toBe(0);
});