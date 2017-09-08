numbers = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

function convertRomanNumber(romanNumber) {
    var result = 0;
    var temp = 0;
    for (i = 0; i < romanNumber.length; i++) {
        const act = numbers[romanNumber[i].toUpperCase()];

        if (temp === 0) {
            temp = act;
        } else if (act > temp) {
            result += act - temp;
            temp = 0;
        } else {
            result += temp;
            temp = act;
        }
    }
    result += temp;
    return result;
}

const map = [
    ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
    ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
    ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
    ['', 'M', 'MM', 'MMM']
]

function convertToRomanNumber(arabicNumber) {
    const digits = arabicNumber.toString().split('').reverse();

    return digits.reduce(
        (result, digit, index) => `${map[index][digit]}${result}`,
        ''
    );
}

module.exports = {
    convertRomanNumber,
    convertToRomanNumber
};