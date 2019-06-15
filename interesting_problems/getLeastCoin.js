/**
 * @file given some coins with different face value, use least coins to reach to the given value
 * @author arlenyang
 */

/**
 * back tracing
 */
function getLeastCoin2(coins, value) {
    let minCoins = Number.POSITIVE_INFINITY;
    let bt = (coinNum, curVal) => {
        if (curVal > value) return;
        if (curVal === value) {
            if (coinNum < minCoins) {
                minCoins = coinNum;
                return;
            }
        }

        for (let i = 0; i < coins.length; i++) {
            bt(coinNum + 1, curVal + coins[i]);
        }
    };
    bt(0, 0);
    return minCoins;
}

/**
 * dp
 * T(n) = O(n^2), n is value
 * S(n) = O(n^2), n is value
 *
 * @param {array} coins value of this kind of coins
 * @param {*} value the sum value of these coins
 */
function getLeastCoin(coins, value) {
    let minCoinValue = Number.POSITIVE_INFINITY;
    // get the min value of coin in the coins
    coins.map(c => {
        // O(k)
        if (c < minCoinValue) {
            minCoinValue = c;
        }
    });
    // coin number which only sum the min value of coin up to the total value
    //  , which is largest num of coins sum to the value
    let largestNumOfCoins = Math.ceil(value / minCoinValue);
    // init dp memo, S(n) = O(value^2)
    let memo = new Array(largestNumOfCoins + 1);
    for (let i = 0; i < memo.length; i++) {
        memo[i] = new Array(value + 1);
    }
    // init the first values
    memo[0][0] = true;
    for (let i = 1; i < memo.length; i++) {
        // O(value^2)
        for (let j = 0; j < memo[0].length; j++) {
            if (memo[i - 1][j]) {
                // pick one type of coin
                coins.map(coin => {
                    if (j + coin <= value) {
                        memo[i][j + coin] = true;
                    }
                });
            }
        }
    }
    // check the last column to find the least coin number
    for (let i = 1; i < memo.length; i++) {
        // O(value)
        if (memo[i][memo.length - 1]) {
            return i;
        }
    }
    // means the coins can not make a premutation to sum up to the value
    return null;
}

let coins = [1, 2, 5, 10];
let v = 40;

console.log(getLeastCoin2(coins, v));
