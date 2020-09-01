import { performAction } from "../src/client/js/app"

describe('Test, the function "addTrip()" should exist' , () => {
    test('It should return true', () => {
        expect(performAction).toBeDefined();
    });
});