'use strict'

const index = require('./index');

const testInput = [{
    input: `
 _  _  _  _  _  _  _  _  _ 
| || || || || || || || || |
|_||_||_||_||_||_||_||_||_|
`, output: '000000000'
}, {
    input : `
                              
  |  |  |  |  |  |  |  |  |  |
  |  |  |  |  |  |  |  |  |  |
`, output: '1111111111 ERR'
}, {
    input : `
    _  _     _  _  _  _  _
  | _| _||_||_ |_   ||_||_|
  ||_  _|  | _||_|  ||_| _|
`, output: '123456789 ERR'
}, {
    input : `
    _  _     _  _  _  _  _
  | _| _||_||  |_   ||_||_|
  ||_  _|  | _||_|  ||_| _|
`, output: '1234?6789 ILL'
}];


describe('OCR recognizer', function () {
    for (let i = 0; i < testInput.length; i++) {
        it(`should recognize ${testInput[i].output}`, function () {
            expect(index.ocrParse(testInput[i].input)).toBe(testInput[i].output); 
        })
    }
});