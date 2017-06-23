const translators = require('./translators');
const { LEFT, RIGHT, UP, DOWN } = require('./constants');

const mirrorsLeftTestCases = [
    {
        name: 'translate the left directed ray to up',
        input: {
            direction: LEFT,
            coords: { x: 0, y: 0 }
        },
        output: {
            direction: UP,
            coords: { x: 0, y: -1 }
        }
    },
    {
        name: 'translate the right directed ray to down',
        input: {
            direction: RIGHT,
            coords: { x: 0, y: 0 }
        },
        output: {
            direction: DOWN,
            coords: { x: 0, y: 1 }
        }
    },
        {
        name: 'translate the up directed ray to left',
        input: {
            direction: UP,
            coords: { x: 0, y: 0 }
        },
        output: {
            direction: LEFT,
            coords: { x: -1, y: 0 }
        }
    },
    {
        name: 'translate the down directed ray to right',
        input: {
            direction: DOWN,
            coords: { x: 0, y: 0 }
        },
        output: {
            direction: RIGHT,
            coords: { x: 1, y: 0 }
        }
    }
];

const mirrorsRightTestCases = [
    {
        name: 'translate the left directed ray to down',
        input: {
            direction: LEFT,
            coords: { x: 0, y: 0 }
        },
        output: {
            direction: DOWN,
            coords: { x: 0, y: 1 }
        }
    },
    {
        name: 'translate the right directed ray to up',
        input: {
            direction: RIGHT,
            coords: { x: 0, y: 0 }
        },
        output: {
            direction: UP,
            coords: { x: 0, y: -1 }
        }
    },
        {
        name: 'translate the up directed ray to right',
        input: {
            direction: UP,
            coords: { x: 0, y: 0 }
        },
        output: {
            direction: RIGHT,
            coords: { x: 1, y: 0 }
        }
    },
    {
        name: 'translate the down directed ray to left',
        input: {
            direction: DOWN,
            coords: { x: 0, y: 0 }
        },
        output: {
            direction: LEFT,
            coords: { x: -1, y: 0 }
        }
    }
];

const spaceTranslatorTestCases = [
    {
        name: 'not change direction just move coords to down',
        input: {
            direction: DOWN,
            coords: { x: 5, y: 5 }
        },
        output: {
            direction: DOWN,
            coords: { x: 5, y: 6 }
        }
    },
    {
        name: 'not change direction just move coords to up',
        input: {
            direction: UP,
            coords: { x: 5, y: 5 }
        },
        output: {
            direction: UP,
            coords: { x: 5, y: 4 }
        }
    },
    {
        name: 'not change direction just move coords to left',
        input: {
            direction: LEFT,
            coords: { x: 5, y: 5 }
        },
        output: {
            direction: LEFT,
            coords: { x: 4, y: 5 }
        }
    },
    {
        name: 'not change direction just move coords to right',
        input: {
            direction: RIGHT,
            coords: { x: 5, y: 5 }
        },
        output: {
            direction: RIGHT,
            coords: { x: 6, y: 5 }
        }
    }
];

const portalTranslatorTestCases = [
    {
        name: 'not change direction just move coords to target and one step down',
        input: {
            direction: DOWN,
            coords: { x: 5, y: 5 },
            target: { x: 2, y: 2 }
        },
        output: {
            direction: DOWN,
            coords: { x: 2, y: 3 }
        }
    },
    {
        name: 'not change direction just move coords to target and one step up',
        input: {
            direction: UP,
            coords: { x: 5, y: 5 },
            target: { x: 2, y: 2 }
        },
        output: {
            direction: UP,
            coords: { x: 2, y: 1 }
        }
    },
    {
        name: 'not change direction just move coords to target and one step left',
        input: {
            direction: LEFT,
            coords: { x: 5, y: 5 },
            portals: []
        },
        output: {
            direction: LEFT,
            coords: { x: 1, y: 2 }
        }
    },
    {
        name: 'not change direction just move coords to target and one step right',
        input: {
            direction: RIGHT,
            coords: { x: 5, y: 5 },
            portals: []
        },
        output: {
            direction: RIGHT,
            coords: { x: 3, y: 2 }
        }
    }
];

function testTranslators (testedTranslator, { input, output, name }) {
    it(`should  ${name}`, () => {
        const { coords, direction } = testedTranslator(input.coords, input.direction, input.target);

        expect(direction).toBe(output.direction);
        expect(coords).toEqual(output.coords);
    });
}

describe('Mirror left translator', () => {
    mirrorsLeftTestCases.forEach((testCase) => testTranslators(translators.mirrorLeftTranslator, testCase));
});

describe('Mirror right translator', () => {
    mirrorsRightTestCases.forEach((testCase) => testTranslators(translators.mirrorRightTranslator, testCase));
});

describe('Space translator', () => {
    spaceTranslatorTestCases.forEach((testCase) => testTranslators(translators.spaceTranslator, testCase));
});

describe('Portal translator', () => {
    portalTranslatorTestCases.forEach((testCase) => testTranslators(translators.portalTranslator, testCase));
});