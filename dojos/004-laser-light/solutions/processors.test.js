const constants = require('./constants');
const processors = require('./processors');
const translators = require('./translators');

const characterProcessorTestCases = [{
        input: {
            character: constants.TOWER_UP,
        },
        output: {
            type: constants.TOWER_UP,
            direction: {
                x: 0,
                y: -1
            }
        }
    },
    {
        input: {
            character: constants.TOWER_RIGHT,
        },
        output: {
            type: constants.TOWER_RIGHT,
            direction: {
                x: 1,
                y: 0
            }
        }
    },
    {
        input: {
            character: constants.TOWER_DOWN,
        },
        output: {
            type: constants.TOWER_DOWN,
            direction: {
                x: 0,
                y: 1
            }
        }
    },
    {
        input: {
            character: constants.TOWER_LEFT,
        },
        output: {
            type: constants.TOWER_LEFT,
            direction: {
                x: -1,
                y: 0
            }
        }
    },
    {
        input: {
            character: constants.SPACE,
        },
        output: {
            type: constants.SPACE,
            traversed: false,
            translate: translators.spaceTranslator
        }
    },
    {
        input: {
            character: constants.MIRROR_LEFT,
        },
        output: {
            type: constants.MIRROR_LEFT,
            translate: translators.mirrorLeftTranslator
        }
    },
    {
        input: {
            character: constants.MIRROR_RIGHT,
        },
        output: {
            type: constants.MIRROR_RIGHT,
            translate: translators.mirrorRightTranslator
        }
    },
    {
        input: {
            character: constants.BLOCK,
        },
        output: {
            type: constants.BLOCK
        }
    },
    {
        input: {
            character: constants.TARGET,
        },
        output: {
            type: constants.TARGET,
            hit: false
        }
    }
];

const tableDimensionsTestCases = [
    {
        input:  '>   \\  @ \n>   \\  @ \n>   \\  @ \n>   \\  @ ',
        output: {
            width: 9,
            height: 4
        }
    },
    {
        input:  '@ # <',
        output: {
            width: 5,
            height: 1
        }
    }
];

describe('Process', function () {
    characterProcessorTestCases.forEach(testCase =>
        it(`should handle ${testCase.input}`, () => {
            expect(processors.processCharacter( testCase.input )).toEqual(testCase.output);
        })
    );

    it('PortalTranslator', () => {
        const testInput = {
            character: constants.PORTAL_8,
            rawTable: '>   \\  @ \n>   \\  @ \n>   \\  @ \n>   \\  @ ',
            dimension: { width: 9, height: 4 }
        };
        const expectedResult = {
            type: constants.PORTAL_8,
            translate: () => {}
        }

        jest.spyOn(translators.portalTranslator, 'bind').mockReturnValue(expectedResult.translate);
        const result = processors.processCharacter({character: constants.PORTAL_8});

        expect(translators.portalTranslator.bind).toHaveBeenCalledWith(null, constants.PORTAL_8);
        expect(result.type).toBe(constants.PORTAL_8);
        expect(result.translate).toBe(expectedResult.translate);
    });
});

describe('Get table dimension test', () => {
    tableDimensionsTestCases.forEach(({ input, output }) => {
        it(`should return the dimensions of the table ${input}` , () => {
            const result = processors.getTableDimensions(input);
            expect(result.width).toBe(output.width);
            expect(result.height).toBe(output.height);
        });
    })
});