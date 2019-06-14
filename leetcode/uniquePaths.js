/**
 * @file 62. Unique Paths
 * @author arlenyang
 */

/**
 * back tracing without prunning
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
function uniquePaths2(m, n) {
    let count = 0;
    let bt = (i, j) => {
        if (i === m - 1 && j === n - 1) {
            count++;
            return;
        }
        if (i < m - 1) {
            bt(i + 1, j);
        }
        if (j < n - 1) {
            bt(i, j + 1);
        }
    } 
    bt(0, 0);
    return count;
};

/**
 * dp
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
function uniquePaths(m, n) {
    // init memonery
    let memo = new Array(n) 
    for (let i = 0; i < n; i++) {
        memo[i] = new Array(m)
    }
    // init 1th row and 1th column
    for (let i = 0; i < Math.max(m, n); i++) {
        if (i < n) {
            memo[i][0] = 1;
        }
        if (i < m) {
            memo[0][i] = 1;
        }
    } 
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            memo[i][j] = memo[i - 1][j] + memo[i][j - 1];
        }
    }

    return memo[n - 1][m - 1];
}
// let m = 3;
// let n = 2;
// let m = 7;
// let n = 3;
// let m = 4;
// let n = 3;
let m = 50;
let n = 30;
console.time('prop')
console.log(uniquePaths(m, n))
console.timeEnd('prop')