/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let result = '';
    let negative = false;
    
    x = (x).toString();
    
    if (x[0] === '-') {
        x = x.slice(1);
        negative = true;
    }
    
    for (var i = x.length - 1; i >=0; i --) {
        result += x[i];
    }
    
    if (negative) {
        result = '-' + result;
    }
    
    if (result < ((-2) ** 31) || result > (2 ** 31) - 1) {
        return 0;
    } else {
        return Number(result);
    }
};