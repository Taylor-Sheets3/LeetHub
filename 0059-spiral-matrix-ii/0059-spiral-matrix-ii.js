/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let matrix = [];
    for (let i = 0; i < n; i ++) {
       matrix.push([])
    }

   for (let i = 0; i < n; i ++) {
      for (let j = 0; j < n; j ++){
         matrix[i].push(0);
      }
   }

    let currentValue = 1;
    let max = n**2;
    let counter = 0;


   //debugger;
    while (currentValue <= max) {
        for (let i = counter; i < matrix.length - counter; i ++) {
            matrix[counter][i] = currentValue;
            currentValue ++;
        }

        
        for (let i = counter + 1; i < matrix.length - counter; i ++) {
            matrix[i][matrix.length - 1 - counter] = currentValue;
            currentValue ++;
        }
        
        for (let i = matrix.length - 2 - counter; i >= counter; i --) {
            matrix[matrix.length - 1 - counter][i] = currentValue;
            currentValue ++;
        }
        
        for (let i = matrix.length - 2 - counter; i > counter; i --) {
            matrix[i][counter] = currentValue;
            currentValue ++;
        }
        
        counter ++;
    }
    
    return matrix;
    
};