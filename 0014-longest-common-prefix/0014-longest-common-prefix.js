/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let longestPrefix = '';
    for (var i = 0; i < strs[0].length; i ++ ) {
        let currentPrefix = strs[0].slice(0, i + 1);
        let commonPrefix = true;
        
        for (var j = 0; j < strs.length; j ++ ) {
            if (currentPrefix !== strs[j].slice(0, i + 1)) {
                commonPrefix = false;
            }
        }
        if (commonPrefix) {
            longestPrefix = currentPrefix;
        } else {
            return longestPrefix;
        }
    }
    return longestPrefix;
};