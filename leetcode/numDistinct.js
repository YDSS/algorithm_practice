/**
 * @file 115. Distinct Subsequences
 * @solution
 * 1. dp. dp[i][j] means how many ways already has in (i, j). i is length of substring of S, j is for T, they are starting from 0. The derivation of formula is dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j], which is the moving after deleting or not. But there are some limits:
 *  1. length of substring of S should always not be smaller than T's, which is S.length - i >= T.length - j => i - j <= S.length - T.length
 *  2. adding dp[i - 1][j - 1] only happens when S[i - 1] === T[j - 1]. Notice that i is length, the index of current char is i - 1
 *
 * the finial result is dp[S.length][T.length]
 */

/**
 * dp solution
 * T(n) = O(n * m), n is length of s, m is length of t
 * S(n) = O(n * m)
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
function numDistinct(s, t) {
    if (s.length < t.length) {
        return 0;
    }
    let z = s.length - t.length; // s.length - i >= t.length -j => i - j <= s.length - t.length = z
    // init dp, 2-d
    // let dp = generateTwoDimensionArray(s.length + 1, t.length + 1)
    let dp = Array.from({ length: s.length + 1 }, x =>
        Array.from({ length: t.length + 1 }, y => 0)
    );
    // init the 1th row. the 1th column is not valid cause j > i
    // the 1th row means how many ways when s is empty, which is only 1 way, deleting all the chars in s
    for (let i = 0; i < dp.length; i++) {
        dp[i][0] = 1;
    }
    for (let i = 1; i < dp.length; i++) {
        for (let j = 1; j <= i && j < dp[0].length; j++) {
            if (i - j > z) {
                continue;
            }
            dp[i][j] = dp[i - 1][j] + (s[i - 1] === t[j - 1] ? dp[i - 1][j - 1] : 0);
        }
    }

    return dp[s.length][t.length];
}

let s = "rabbbit", t = "rabbit";
// let s = "babgbag", t = "bag";
console.log(numDistinct(s, t));
