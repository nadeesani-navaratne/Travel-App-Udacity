//import { performAction } from "../src/client/js/app"
const performAction = require  ('../src/client/js/app')

describe('Test, the function "performAction" should exist' , () => {
    test('Funtion should be present', () => {
        expect(performAction).toBeDefined();
    });
});