const romanNumberConverter = require('./roman-number-converter');

const testCases = [
    { input: 'I', output: 1 },
    { input: 'II', output: 2 },
    { input: 'III', output: 3 },
    { input: 'IV', output: 4 },
    { input: 'V', output: 5 },
    { input: 'VI', output: 6 },
    { input: 'VII', output: 7 },
    { input: 'VIII', output: 8 },
    { input: 'IX', output: 9 },
    { input: 'X', output: 10 },
    { input: 'MCMLXIX', output: 1969 },
    { input: 'CDXLVIII', output: 448 },
    { input: 'iiii', output: 4 }
]

describe('Converting Roman numbers to arabic format', () => {
    testCases.forEach(testCase => {
        it(`converts ${testCase.input}`, () => {
            const output = romanNumberConverter.convertRomanNumber(testCase.input);
            expect(output).toEqual(testCase.output);
        })
    })
});

const arabicTestCases = [
    { input: 1, output: 'I' },
    { input: 2, output: 'II' },
    { input: 3, output: 'III' },
    { input: 4, output: 'IV' },
    { input: 5, output: 'V' },
    { input: 6, output: 'VI' },
    { input: 7, output: 'VII' },
    { input: 8, output: 'VIII' },
    { input: 9, output: 'IX' },
    { input: 10, output: 'X' },
    { input: 1969, output: 'MCMLXIX' },
    { input: 448, output: 'CDXLVIII' }
]

describe('Converting arabinc numbers to roman format', () => {
    arabicTestCases.forEach(({ input, output }) => {
        it(`converts ${input}`, () => {
            const result = romanNumberConverter.convertToRomanNumber(input);
            expect(result).toEqual(output);
        })
    })
});