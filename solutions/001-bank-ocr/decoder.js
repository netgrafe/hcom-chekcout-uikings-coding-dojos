'use strict'

const digits = require('./digits');

function distance(a, b) {
    let result = 0;

    for (var i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            result++;
        }
    }
    
    return result;
}

module.exports = function (input) {
    return Object.keys(digits).reduce((matches, digit) => {
        if (distance( input, digit) < 2) {
            matches.push(digits[digit]);
        }
        return matches;
    }, []);
}