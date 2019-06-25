/**
 * @file 85. Maximal Rectangle
 * @solution
 * area of rect is it's height multiply it's width, we can start with a left-top point or a right-bottom point, trying to expand
 * the area, until find the maximal one
 *
 * 1. backtracing. Finding every possibilities of a rect with certain left-top point, and record it's area, when all this possibilities are inspected, get the maximal one
 * 2. dp. dp[i][j][r] means width of the rect at it's right-bottom point when the height of the rect is r. And the formula derivation is dp[i][j][r] = dp[i - 1][j][r] + 1, calculating the area at every time of derivation and check if it's larger
 * @author arlenyang
 */

/**
 * dp solution
 * T(n) = O(n^3)
 * S(n) = O(n^3)
 * @param {character[][]} matrix
 * @return {number}
 */
function maximalRectangle(matrix) {
    let max = 0;
    // init 3-dimension array
    let dp = new Array(matrix.length);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(matrix[0].length);
        for (let j = 0; j < matrix[0].length; j++) {
            dp[i][j] = new Array(dp.length);
        }
    }
    for (let i = 0; i < dp.length; i++) {
        for (let j = 0; j < dp[0].length; j++) {
            if (matrix[i][j] === "0") {
                continue;
            }
            for (let r = i; r >= 0; r--) {
                if (matrix[r][j] === "0") {
                    break;
                }
                if (j === 0) {
                    dp[i][j][r] = 1;
                } else {
                    dp[i][j][r] =
                        (dp[i][j - 1][r] == null ? 0 : dp[i][j - 1][r]) + 1;
                }
                // calc the area
                let area = (i - r + 1) * dp[i][j][r];
                if (max < area) {
                    max = area;
                }
            }
        }
    }
    return max;
}

// let matrix = [
//     ["1", "0", "1", "0", "0"],
//     ["1", "0", "1", "1", "1"],
//     ["1", "1", "1", "1", "1"],
//     ["1", "0", "0", "1", "0"]
// ];
// let matrix = [];
let matrix = [["1"]];
// let matrix = [["0"]];
console.log(maximalRectangle(matrix));
