/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let combos = [];
    let numbers = [];
    
    for (i = 1; i <= n; i ++) {
        numbers.push(i);
    }
    
    
    function comboGenerator(currentCombo=[], position=0) {
        if (currentCombo.length === k) {
            combos.push(currentCombo);
            return
        }

       let subArray = numbers.slice(position)
       
        
       subArray.forEach(number => {
           comboGenerator(currentCombo.concat([number]), number);
       })
    }
    //debugger;
    comboGenerator();
    
    return combos;
};