/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
    //create a new array that will map values on compared to obstacleGrid
    const dp = [...new Array(m)].map(() => new Array(n).fill(0));
    
    //fill the first row with 1s until it hits an obstacle
    for (let i = 0; i < m; i += 1) {
        if (obstacleGrid[i][0] === 1) {
            break;
        }
        dp[i][0] = 1;
    }
    //fill the first column with 1's until it hits an obstacle
    for (let i = 0; i < n; i += 1) {
        if (obstacleGrid[0][i] === 1) {
            break;
        }
        dp[0][i] = 1;
    }

    //navigate the entire array and sum the left and upper elements to arrive at the total number of ways to arrive at any given space
    for (let i = 1; i < m; i ++) {
        for (let j = 1; j < n; j ++) {
            //check if the obstacle grid has an obstacle in the path
            //if yes, the temp grid value is 0
            //else the temp grid value is the sum of left and upper elements
            dp[i][j] = obstacleGrid[i][j] === 1 ? 0 : dp[i - 1][j] + dp[i][j - 1];
        }
    }

    return dp[m - 1][n - 1];
    
};