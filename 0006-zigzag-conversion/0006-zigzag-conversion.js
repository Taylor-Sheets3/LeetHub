/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let rows = [];
    let rowCounter = 0;
    let result = '';
    let rowCounterIncrement = true;
    if (numRows === 1) {
        return s;
    }
    for (var i = 0; i < numRows; i ++) {
        rows.push([]);
    }
    
    for (var i = 0; i < s.length; i ++) {
        rows[rowCounter].push(s[i]);

        if (rowCounter === 0) {
            rowCounterIncrement = true;
        } 
        if (rowCounter === numRows - 1) {
            rowCounterIncrement = false;
        }
        
        rowCounterIncrement ? rowCounter ++ : rowCounter --; 
    }
    
    
    for (var i = 0; i < numRows; i ++) {
        result += rows[i].join('');
    }
    
    return result;
};