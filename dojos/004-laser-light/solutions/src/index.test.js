const constants = require('./constants');
const process = require('./index');

const testCases = [{
    input: constants.TOWER_DOWN,
    output: {
        type: constants.TOWER_DOWN,
        direction: {
            x: 0,
            y: 1
        }
    }
}];

describe('Process', function () {
    testCases.forEach(testCase =>
        it(`should handle ${testCase.input}`, () => {
            expect(process(testCase.input)).toEqual(testCase.output);
        })
    );
});