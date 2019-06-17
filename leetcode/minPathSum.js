/**
 * @file 64. Minimum Path Sum
 * @author arlenyang
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
function minPathSum(grid) {
    let memo = new Array(grid.length);
    for (let i = 0; i < memo.length; i++) {
        memo[i] = new Array(grid[0].length);
    }
    memo[0][0] = grid[0][0];
    // init 1th row and column
    for (let i = 1; i < grid.length; i++) {
        memo[i][0] = memo[i - 1][0] + grid[i][0];
    }
    for (let i = 1; i < grid[0].length; i++) {
        memo[0][i] = memo[0][i - 1] + grid[0][i];
    }
    for (let i = 1; i < grid.length; i++) {
        for (let j = 1; j < grid[0].length; j++) {
            memo[i][j] = Math.min(memo[i - 1][j], memo[i][j - 1]) + grid[i][j];
        }
    }

    return memo[memo.length - 1][memo[0].length - 1];
}

let grid = [[1, 3, 1], [1, 5, 1], [4, 2, 1]];
console.log(minPathSum(grid));
