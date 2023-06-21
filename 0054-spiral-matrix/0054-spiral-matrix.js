/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
/*
I - [[1,2,3],
    [4,5,6],
    [7,8,9]]
    
m - row number
n - column number 

O - [1,2,3,6,9,8,7,4,5]
*/


var spiralOrder = function(matrix) {
  const res = []
  while(matrix.length){
    const first = matrix.shift()
    res.push(...first)
    for(const m of matrix){
      let val = m.pop()
      if(val !== undefined)
        res.push(val)
        m.reverse()   
    }
    matrix.reverse()
  }
  return res
};