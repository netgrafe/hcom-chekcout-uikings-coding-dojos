'use strict'

const decoder = require('./decoder');

const testInput = [{
    input: ` _ | ||_|`, output: ['0', '8']
},{
    input: ` _ |  |_|`, output: ['0', '6']
}];


describe('OCR decoder', function () {
    for (let i = 0; i < testInput.length; i++) {
        it(`should recognize ${testInput[i].output}`, function () {
            expect(decoder(testInput[i].input)).toEqual(testInput[i].output); 
        })
    }
});