

import { handleSubmit } from "../Src/Client/js/app";

//Test if the handleSubmit function produces an output
describe("Test if the handleSubmit function produces an output", () => {
    test("test handleSubmit", () => {
        expect(handleSubmit).toBeDefined();
    });
});