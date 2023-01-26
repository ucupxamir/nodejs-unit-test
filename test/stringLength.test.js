import { stringLength } from "../src/stringLength";

test("String Length", () => {
    const string = stringLength("Hello");

    expect(string).toBe(5);

})