/**
 * @param {number} num
 * @return {string}
 */

chars = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1],
];

var intToRoman = function(num) {
    let result = '';
    for (var i = 0; i < chars.length; i ++) {
        while (num >= chars[i][1]) {
            result += chars[i][0];
            num -= chars[i][1]
        }
    }
    return result;
};