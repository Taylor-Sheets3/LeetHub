/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    for (var i = 0; i < haystack.length; i ++) {
        let str = '';
        let position = 0;
        let currentString = haystack.slice(i)
        while (currentString[position] === needle[position] && 
               currentString[position] && 
               needle[position]) {
            str += currentString[position];
            position ++;
        }
        if (str === needle) {
            return i;
        }
    }
    
    return -1;
};