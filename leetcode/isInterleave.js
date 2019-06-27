/**
 * @file 97. Interleaving String
 * @solution
 * 1. backtracing,
 * 2. dp, dp[i][j] means match or not while length of substring of s1 from 0 is i, length of s2 is j. It's important that k(length of substring of s3) is certain while i and j is certain, k = i + j - 2, cause length = index + 1, so it's a 2d dp memory, not three
 */

/**
 * dp solution, with 2d memory
 * T(n) = O(m * n), m is length of s1, n is length of s2
 * S(n) = O(m * n)
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
function isInterleave2(s1, s2, s3) {
    if (s1.length + s2.length !== s3.length) {
        return false;
    }
    // init dp memory, which is 2d array
    let dp = new Array(s1.length + 1);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(s2.length + 1);
    }
    for (let i = 0; i < dp.length; i++) {
        for (let j = 0; j < dp[0].length; j++) {
            if (i === 0 && j === 0) {
                // means not pick any char from s1 and s2
                dp[i][j] = true;
                continue;
            }
            // dp is true only when it's former state is true
            // when former state is true, inspect current state, which is the last char from s1(i - 1) or s2(j - 1)
            // so the index of the last char from s3 is i - 1 + j - 1 + 1 or i + j - 2 + 1
            if (i === 0) {
                // means all the chars of resultant substring are from s2
                dp[i][j] = dp[i][j - 1] && s2[j - 1] === s3[i + j - 1];
            } else if (j === 0) {
                // means all the chars of resultant substring are from s1
                dp[i][j] = dp[i - 1][j] && s1[i - 1] === s3[i + j - 1];
            } else {
                // from s1 or s2 are all possible
                dp[i][j] =
                    (dp[i][j - 1] && s2[j - 1] === s3[i + j - 1]) ||
                    (dp[i - 1][j] && s1[i - 1] === s3[i + j - 1]);
            }
        }
    }

    return dp[s1.length][s2.length];
}

/**
 * backtracing solution
 * T(n) = O(2^(m + n))
 * S(n) = O(m + n)
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
function isInterleave(s1, s2, s3) {
    if (s1.length + s2.length != s3.length) {
        return false;
    }
    // let ret = false;
    let memo = new Array(s1.length + 1);
    for (let i = 0; i < memo.length; i++){
        memo[i] = new Array(s2.length + 1);
    }
    // i is index of s1, j is index of s2
    let bt = (i, j) => {
        if (memo[i][j] != null) {
            return memo[i][j];
        }
        // index of s3
        let k = i + j;
        // console.log(i, j)
        if (i === s1.length && j === s2.length) {// s3 is finished
            // ret = true;
            return memo[i][j] = true;
        } 
        let ans = false;
        if (i < s1.length && s1[i] === s3[k]) {
            ans = bt(i + 1, j);
        }
        if (j < s2.length && s2[j] === s3[k]) {
            ans = (ans || bt(i, j + 1));
        }

        memo[i][j] = ans;
        return ans;
    }
    return bt(0, 0);
}

// let s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac";
let s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc";
// let s1 = "", s2 = "", s3 = "a";
console.log(isInterleave(s1, s2, s3))
