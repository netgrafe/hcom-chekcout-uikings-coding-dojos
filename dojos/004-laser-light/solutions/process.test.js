const constants = require('./constants');
const process = require('./process');
const translators = require('./translators');

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
    },
    {
        input: constants.SPACE,
        output: {
            type: constants.SPACE,
            traversed: false,
            translate: translators.spaceTranslator
        }
    },
    {
        input: constants.MIRROR_LEFT,
        output: {
            type: constants.MIRROR_LEFT,
            translate: translators.mirrorLeftTranslator
        }
    },
    {
        input: constants.MIRROR_RIGHT,
        output: {
            type: constants.MIRROR_RIGHT,
            translate: translators.mirrorRightTranslator
        }
    },
    {
        input: constants.BLOCK,
        output: {
            type: constants.BLOCK
        }
    },
    {
        input: constants.TARGET,
        output: {
            type: constants.TARGET,
            hit: false
        }
    }/* ,
    {
        input: constants.PORTAL_8,
        output: {
            type: constants.PORTAL_8,
            translate: translators.portalTranslator
        }
    } */
];

describe('Process', function () {
    testCases.forEach(testCase =>
        it(`should handle ${testCase.input}`, () => {
            expect(process(testCase.input)).toEqual(testCase.output);
        })
    );

    it('sadsda', () => {
        spyOn(translators.portalTranslator, 'bind');

        const result = process(constants.PORTAL_8);

        expect(translators.portalTranslator.bind).toHaveBeenCalledWith(null, constants.PORTAL_8);
        expect(result.type).toBe(constants.PORTAL_8);
    });
});