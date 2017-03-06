'use strict'

const digits = require('./digits');

function ocrParse(testInput) {
    testInput       = testInput.replace(/\n/g, '');
    
    let output      = '';
    const lineL     = testInput.length / 3;

    for (let i = 0; i < lineL; i+=3) {
        let key = testInput.substr(i, 3) + testInput.substr(i+lineL, 3) + testInput.substr(i + lineL * 2 , 3);
        output += digits[key] || '?';
    }    

    if (output.indexOf('?') !== -1) {
        output += ' ILL';
    } else if (!validateAgainstChecksum(output)) {
        output += ' ERR';
    }

    return output;
}

function validateAgainstChecksum(parsedDigit) {
    let checkSum = 0;
    for (let i = 8, j = 1; i > 0; i--, j++) {
        checkSum += parseInt(parsedDigit[i]) * j;
    }

    return checkSum % 11 === 0;
}

module.exports = {
    ocrParse
}