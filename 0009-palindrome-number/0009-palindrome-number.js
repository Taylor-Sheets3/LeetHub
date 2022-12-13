/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x = x.toString();
    
    if (x.length % 2) {
        const midpoint = Math.floor(x.length / 2) 
        for (var i = 0; i <= midpoint; i ++) {
            if (x[midpoint - i] !== x[midpoint + i]) {
                return false;
            }
        }
    } else {
        const midpoint = Math.floor((x.length / 2) - 1)
        for (var i = 0; i <= midpoint; i ++) {
            if (x[midpoint - i] !== x[midpoint + i + 1]) {
                return false;
            }
        }
    }
    return true;
};