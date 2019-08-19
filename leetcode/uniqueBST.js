/**
 * @file 96. Unique Binary Search Trees
 * @solution backtracing and dp solution is just like generateTrees2 but much easier, we just multiply the left and right subtree's dp as the combination
 */

 /**
 * generate a 2-dimension matrix, cause js has no syntax sugar for it
 * @param {integer} n row
 * @param {integer} m column
 * 
 * @return {array}
 */
function generateTwoDimensionArray(n, m) {
    let arr = new Array(n);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(m)
    }

    return arr;
}
/**
 * dp solution
 * T(n) = O(n^2)
 * S(n) = O(n^2)
 * @param {number} n
 * @return {number}
 */
function numTrees(n) {
    if (n < 2) {
        return n;
    }   
    // init dp memory, which is 2-dimension
    let dp = generateTwoDimensionArray(n, n);
    // init states those length of (i, j) equals 1
    for (let i = 0; i < dp.length; i++) {
        dp[i][i] = 1;
    }
    // start from length of (i, j) equals 2
    for (let len = 2; len <= n; len++) {
        for (let i = 0; i < n - len + 1; i++) { // O(n)
            let j = len + i - 1; // len = j - i + 1
            dp[i][j] = 0;
            // p is pivot between i and j, which is the root of left and right
            // subtree
            for (let p = i; p <= j; p++) { // O(n)
                let lefts = p === i ? 1 : dp[i][p - 1];
                let rights = p === j ? 1 : dp[p + 1][j];
                dp[i][j] += lefts * rights;
            }
        }
    }

    return dp[0][n - 1];
}

// let n = 0;
let n = 1;
// let n = 2;
// let n = 3;
console.log(numTrees(n))