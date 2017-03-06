describe('SuperMario', () => {
    const supermario = require('./supermario');
    const testCases  = require('../resources/002-supermario-test-input.json');

    it('Play function should exists', () => {
        expect(supermario).toBeDefined();
    });

    testCases.forEach((testCase, i) => {
        it(`case ${testCase.input}: ${testCase.expectedOutput}`, () => {
            expect(supermario(testCase.input)).toBe(testCase.expectedOutput);
        });
    });
});
