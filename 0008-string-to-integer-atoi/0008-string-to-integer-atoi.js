/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let nums = {
        0: '0',
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
    }
    let signs = {
        '+': '+',
        '-': '-'
    }
    let result = '';
    
    for (var i = 0; i < s.length; i ++) {
           if (signs.hasOwnProperty(s[i])) {
               if (result.length === 0) {
                   result += s[i];
           } else {
               return Number(result) ? result : 0;
           }
           
       } else if (nums.hasOwnProperty(s[i])) {
           result += s[i];
       } else if (!nums.hasOwnProperty(s[i]) && (s[i] !== ' ' || result.length)) {
           //debugger;    
           if (result > (2 ** 31) - 1) {
               result = (2 ** 31) - 1;
           } 
           if (result < (-2) ** 31) {
               result = (-2) ** 31
           }
           return (Number(result) ? result : 0);
       }
    }
    //debugger;
    if (result > (2 ** 31) - 1) {
               result = (2 ** 31) - 1;
           } 
           if (result < (-2) ** 31) {
               result = (-2) ** 31
           }
    return (Number(result) ? result : 0);
};