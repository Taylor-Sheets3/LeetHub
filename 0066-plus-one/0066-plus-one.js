/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let int = BigInt(digits.join(''));
    int += 1n;
    int = int.toString();
    
    let result = [];
    
    for (var i = 0; i < int.length; i ++) {
        result.push(int[i]);
    }
    
    return result;
};