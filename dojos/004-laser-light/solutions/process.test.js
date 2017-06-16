const constants = require('./constants');
const process = require('./process');

const testCases = [{
        input: constants.TOWER_UP,
        output: {
            type: constants.TOWER_UP,
            direction: {
                x: 0,
                y: -1
            }
        }
    },
    {
        input: constants.TOWER_RIGHT,
        output: {
            type: constants.TOWER_RIGHT,
            direction: {
                x: 1,
                y: 0
            }
        }
    },
    {
        input: constants.TOWER_DOWN,
        output: {
            type: constants.TOWER_DOWN,
            direction: {
                x: 0,
                y: 1
            }
        }
    },
    {
        input: constants.TOWER_LEFT,
        output: {
            type: constants.TOWER_LEFT,
            direction: {
                x: -1,
                y: 0
            }
        }
    }
];

describe('Process', function () {
    testCases.forEach(testCase =>
        it(`should handle ${testCase.input}`, () => {
            expect(process(testCase.input)).toEqual(testCase.output);
        })
    );
});