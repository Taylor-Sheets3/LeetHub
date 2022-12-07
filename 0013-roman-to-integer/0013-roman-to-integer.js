/**
 * @param {string} s
 * @return {number}
 */

const numbers = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

var romanToInt = function(s) {
    let number = 0;
    for (var i = 0; i < s.length; i ++) {
        let currentValue = numbers[s[i]];
        let nextValue = numbers[s[i + 1]];

        if (nextValue > currentValue) {
            number += (nextValue - currentValue);
            i ++;
        } else {
            number += currentValue;
        }
    }

    return number;
};