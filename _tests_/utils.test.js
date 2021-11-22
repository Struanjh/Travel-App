
import { sum } from "../src/client/js/utils";
import { testString } from "../src/client/js/utils";

//Test if mathematical sum works correctly
describe("Tests mathematical operations & string validation works correctly", () => {
    test("Test if 5-3=2", () => {
        expect(sum(5,3)).toBe(2);
    });
    test("Test if value is string", () => {
        expect(testString('dog')).toBeTruthy();
    });
});