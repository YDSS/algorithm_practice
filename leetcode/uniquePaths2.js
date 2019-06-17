/**
 * @file 63. Unique Paths II
 * @author arlenyang
 */

/**
 * dp
 * T(n) = O(m * n), S(n) = O(m * n)
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
function uniquePathsWithObstacles(obstacleGrid) {
    let memo = new Array(obstacleGrid.length);
    for (let i = 0; i < memo.length; i++) {
        memo[i] = new Array(obstacleGrid[0].length);
    }
    // init 1th row and 1th column
    let foundObstacle = false;
    for (let i = 0; i < memo.length; i++) {
        if (obstacleGrid[i][0] === 1) {
            foundObstacle = true;
        }
        if (foundObstacle) {
            memo[i][0] = 0; 
        }
        else {
            memo[i][0] = 1;
        }
    }
    foundObstacle = false;
    for (let i = 0; i < memo[0].length; i++) {
        if (obstacleGrid[0][i] === 1) {
            foundObstacle = true;
        }
        if (foundObstacle) {
            memo[0][i] = 0; 
        }
        else {
            memo[0][i] = 1;
        }
    }

    for (let i = 1; i < memo.length; i++) {
        for (let j = 1; j < memo[0].length; j++) {
            if (obstacleGrid[i][j] === 1) {
                memo[i][j] = 0;
            } else {
                memo[i][j] = memo[i - 1][j] + memo[i][j - 1];
            }
        }
    }

    return memo[memo.length - 1][memo[0].length - 1];
}

let grid = [[0, 0, 0], [0, 1, 0], [0, 0, 0]];
console.log(uniquePathsWithObstacles(grid));