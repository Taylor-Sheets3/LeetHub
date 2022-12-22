/**
 * @param {string} digits
 * @return {string[]}
 */

let phone = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
}

var letterCombinations = function(digits) {
    let combos = [];

    if (!digits.length) {
        return combos;
    }
    
    let comboMaker = function (currentString = '', currentDigit = 0) {
        if (currentString.length === digits.length) {
            combos.push(currentString)
            return;
        }

        [...phone[digits[currentDigit]]].forEach(letter => {
            comboMaker(currentString + letter, currentDigit + 1);
        })
        
    }
    //debugger;
    comboMaker();
    
    return combos;
};