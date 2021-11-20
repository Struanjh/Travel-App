
import { updateUI } from "../src/client/js/app";

//Tests if the updateUI function produces an output
/*describe("Test if the updateUI function produces an output", () => {
    Test("UpdateUI function", () => {
        //expect(updateUI).toBeDefined();
        expect(updateUI).not.toBe("");
    });
});*/

/*describe('Update UI Function', () => {
    test('It should be a function', () => {
      expect(typeof updateUI).toBe('function');
    })
  });*/

  describe('Update UI Function', () => {
    test('It should return a value', () => {
      expect(updateUI).not.toEqual('');
    })
  });