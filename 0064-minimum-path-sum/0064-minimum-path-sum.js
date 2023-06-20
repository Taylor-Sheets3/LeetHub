/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    //columns
    let m = grid.length;
    //rows
    let n = grid[0].length;
    
    for (let i = 0; i < m; i ++) {
        for (let j = 0; j < n; j ++) {
            if (i === 0 && j !== 0) {
                grid[i][j] += grid[i][j - 1]
            } else if (j === 0 && i !== 0) {
                grid[i][j] += grid[i - 1][j]
            } else if (i > 0 && j > 0) {
                leftTile = grid[i][j - 1];
                upperTile = grid[i - 1][j];
                
                if (upperTile > leftTile) {
                    grid[i][j] += leftTile;
                } else {
                    grid[i][j] += upperTile;
                }
            }
        }
    }
    
    return grid[m - 1][n - 1];
};