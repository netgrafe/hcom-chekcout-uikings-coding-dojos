const comicsPriceCalculator = require('./comics-price-calculator');

testCases = [{
        output: 0,
        input: [],
    }, {
        output: 8,
        input: [0]
    },
    {
        output: 8,
        input: [1]
    },
    {
        output: 8,
        input: [2]
    },
    {
        output: 8,
        input: [3]
    },
    {
        output: 8,
        input: [4]
    },
    {
        output: 8 * 2,
        input: [0, 0]
    },
    {
        output: 8 * 3,
        input: [1, 1, 1]
    },
    {
        output: 8 * 2 * 0.95,
        input: [0, 1]
    },
    {
        output: 8 * 3 * 0.9,
        input: [0, 2, 4]
    },
    {
        output: 8 * 4 * 0.8,
        input: [0, 1, 2, 4]
    },
    {
        output: 8 * 5 * 0.75,
        input: [0, 1, 2, 3, 4]
    },

    {
        output: 8 + (8 * 2 * 0.95),
        input: [0, 0, 1]
    },
    {
        output: 2 * (8 * 2 * 0.95),
        input: [0, 0, 1, 1]
    },
    {
        output: (8 * 4 * 0.8) + (8 * 2 * 0.95),
        input: [0, 0, 1, 2, 2, 3]
    },
    {
        output: 8 + (8 * 5 * 0.75),
        input: [0, 1, 1, 2, 3, 4]
    },
    {
        output: 2 * (8 * 4 * 0.8),
        input: [0, 0, 1, 1, 2, 2, 3, 4]
    },
    {
        output: 3 * (8 * 5 * 0.75) + 2 * (8 * 4 * 0.8),
        input: [0, 0, 0, 0, 0,
            1, 1, 1, 1, 1,
            2, 2, 2, 2,
            3, 3, 3, 3, 3,
            4, 4, 4, 4
        ]
    }
];

describe('Comics Price calculator', () => {
    it('should exist', () => {
        expect(comicsPriceCalculator).toBeDefined();
    });

    testCases.forEach(({ input, output }) => {
        it(`should calculate total for ${input}`, () => {
            expect(comicsPriceCalculator(input)).toBe(output);
        });
    });
})