import { createMaterialCode } from "../src/createMaterialCode";

test("Create Material Code", () => {
    const newCode = createMaterialCode("AK", new Date(), 66);

    expect(newCode).toBe("AK-2301-1367");
    
})