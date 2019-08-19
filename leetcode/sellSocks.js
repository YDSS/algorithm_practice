/**
 * @file 121. Best Time to Buy and Sell Stock
 * @author arlenyang
 */

/**
 * dp[i] means buying at day i, the max price I can sell
 * 
 * T(n) = O(n)
 * S(n) = O(n)
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
    let n = prices.length;
    let max = 0;
    if (n < 2) {
        return max;
    }

    let dp = new Array(n); 
    dp[n - 1] = prices[n - 1];
    
    for (let i = n - 2; i >= 0; i--) {
        dp[i] = Math.max(prices[i], dp[i + 1]);
        if (max < dp[i] - prices[i]) {
            max = dp[i] - prices[i];
        }
    }

    return max;
}

/**
 * one pass solution:
 *  we only need find the min price in the front and the max price after it
 * 
 * T(n) = O(n)
 * S(n) = O(1)
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit2(prices) {
    let minPrice = Number.POSITIVE_INFINITY;
    let max = 0;
    
    for (let i = 0; i < prices.length; i++) {
        if (minPrice > prices[i]) {
            minPrice = prices[i];
        } 
        else {
            let curMax = prices[i] - minPrice;
            if (curMax > max) {
                max = curMax;
            }
        }
    }

    return max;
}

let prices = [7,1,5,3,6,4];
// let prices = [7,6,4,3,1]

console.log(maxProfit2(prices));