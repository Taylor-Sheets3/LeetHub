/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    
    for (var i = 0; i < s.length; i ++) {
        if ('({['.includes(s[i])) {
            stack.push(s[i]);
        } else if (s[i] === ')' && stack[stack.length - 1] === '(') {
            stack.pop();
        } else if (s[i] === '}' && stack[stack.length - 1] === '{') {
            stack.pop();
        } else if (s[i] === ']' && stack[stack.length - 1] === '[') {
            stack.pop();
        } else {
            stack.push(s[i])
        }
    }
    
    if (stack.length) {
        return false
    }
    
    return true;
};