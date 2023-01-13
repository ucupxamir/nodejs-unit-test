import { fizzBuzz } from '../src/fizzBuzz';

test("Fizz Buzz", () => {
    const testValue = 15;
    const result = fizzBuzz(testValue);

    expect(result[2]).toBe("Fizz");
    expect(result[4]).toBe("Buzz");
    expect(result[5]).toBe("Fizz");
    expect(result[8]).toBe("Fizz");
    expect(result[9]).toBe("Buzz");
    expect(result[11]).toBe("Fizz");
    expect(result[14]).toBe("FizzBuzz")
})