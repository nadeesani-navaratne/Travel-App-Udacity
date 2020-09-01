const dayCalculater = require('../src/client/js/calculateDays')

describe("Testing the submit functionality", () => {
    test("Testing the handleSubmit() function", () => {
        expect(dayCalculater.getRemainingDaysForTrip).toBeDefined();
    })
});