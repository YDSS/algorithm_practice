/**
 * @file 120. Triangle
 * @author arlenyang
 * @solution 
 * 1. dp, the hard part is only allowed move down to adjacent numbers, which means if t[1][1] want to move down, it can only move to t[2][0] or t[2][1].
 *   dp[row][i] means the min path sum of going to t[row][i].
 *   dp formula is dp[row][i] = t[row][i] + min(dp[row - 1][i - 1], dp[row - 1][i])
 */

// dp
// T(n) = O(n^2) n is number of rows
// S(n) = O(n^2)
function minimumTotal(triangle) {
    // TODO: edge cases
    let n = triangle.length;
    if (n === 0) {
        return 0;
    }

    // init dp memory
    let dp = Array.from({ length: n }, x => Array.from({ length: n }));
    dp[0][0] = triangle[0][0];
    for (let row = 1; row < n; row++) {
        for (let i = 0; i < triangle[row].length; i++) {
            dp[row][i] =
                triangle[row][i] + min(dp[row - 1][i], dp[row - 1][i - 1]);
        }
    }
    let minPathSum = Number.POSITIVE_INFINITY;
    // find min path in the bottom
    for (let i = 0; i < triangle[n - 1].length; i++) {
        if (dp[n - 1][i] < minPathSum) {
            minPathSum = dp[n - 1][i];
        }
    }
    return minPathSum;
}

// a, b can not both be undefined
function min(a, b) {
    if (a === undefined) {
        return b;
    }
    if (b === undefined) {
        return a;
    }
    return a > b ? b : a;
}

// let triangle = [
//     [2],
//    [3,4],
//   [6,5,7],
//  [4,1,8,3]
// ];
// let triangle = [];
// let triangle = [[3]];
let triangle = [
    [2],
    [3, 4],
    [6, 7 ,5],
    [10, 8, 9, 11]
]
console.log(minimumTotal(triangle));
