/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    const min = (-2) ** 31;
    const max = (2 ** 31) - 1;
    
    let sign = 1;
    if (dividend < 0) {
        sign = 0 - sign;
    } 
    if (divisor < 0) {
        sign = 0 - sign;
    }
    
    let numerator = Math.abs(dividend);
    let denominator = Math.abs(divisor);
    let result = 0;
    let shift = denominator;
    let shiftCount = 1;
    
    while (numerator >= denominator) {
        if (numerator > shift) {
            numerator -= shift;
            result += shiftCount;
            shift += shift;
            shiftCount += shiftCount;
        } else {
            shift = denominator;
            shiftCount = 1;
            numerator -= shift;
            result += shiftCount;
        }
    }
    
    if (sign < 0) {
        result = 0 - result;
    }
    
    if (result < min) {
        return min;
    } else if (result > max) {
        return max;
    } else {
       return result; 
    }
};