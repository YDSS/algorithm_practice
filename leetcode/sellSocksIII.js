/**
 * @file 123. Best Time to Buy and Sell Stock III
 * @author arlenyang
 * @solution dp solution and formula is in ./doc/img/socksIII.jpg, I'll offer 4 dp solutions, T(n) from O(kn^2) to O(n), S(n) from O(kn) to O(k), k is number of ops (buy and sell), in this problem, it's 2
 * 
 * relative: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/discuss/350323/C%2B%2B-DP-evolution-from-TLE-to-100
 */

/**
 * naive dp, dp[i][j] = max(dp[i][j - 1], ...(prices[j] - prices[k] + dp[i - 1][k - 1]), k belongto [0, j - 1])
 * 
 * T(n) = O(kn^2)
 * S(n) = O(kn)
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
    let tmax = 2;
    let n = prices.length;
    if (n < 2) return 0;
    let dp = Array.from({length: tmax + 1}, x => 
        Array.from({length: n}, x => 0));
    for (let i = 1; i <= tmax; i++) {
        for (let j = 1; j < n; j++) {
            let max = prices[j] - prices[0];
            for (let k = 1; k < j; k++) {
                max = Math.max(max, prices[j] - prices[k] + dp[i - 1][k - 1]);
            }
            dp[i][j] = Math.max(max, dp[i][j - 1]);
        }
    }

    return dp[tmax][n - 1];
}

/**
 * merge j and k, improve T(n) to O(kn);
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit2(prices) {
    let tmax = 2;
    let n = prices.length;
    if (n < 2) return 0;
    let dp = Array.from({length: tmax + 1}, x => 
        Array.from({length: n}, x => 0));
    for (let i = 1; i <= tmax; i++) { 
        let max = -prices[0];
        for (let j = 1; j < n; j++) {
            max = Math.max(max, -prices[j] + dp[i - 1][j - 1]);
            dp[i][j] = Math.max(dp[i][j - 1], prices[j] + max);
        }
    }

    return dp[tmax][n - 1];
}

/**
 * decrease S(n) to O(n)
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit3(prices) {
    let tmax = 2;
    let n = prices.length;
    if (n < 2) return 0;
    let dp = Array.from({length: n}, x => 0);

    for (let i = 1; i <= tmax; i++) {
        let tmp = dp[0];
        let max = -prices[0]
        for (let j = 1; j < n; j++) {
            max = Math.max(max, -prices[j] + tmp);
            tmp = dp[j];
            dp[j] = Math.max(dp[j - 1], prices[j] + max);
        }
    }

    return dp[n - 1];
}

let prices = [3,3,5,0,0,3,1,4];
// let prices = [1,2,3,4,5] 
// let prices = [7,6,4,3,1]
// let prices = [1]

console.log(maxProfit3(prices));
