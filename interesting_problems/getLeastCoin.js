/**
 * @file given some coins with different face value, use least coins to reach to the given value
 * @author arlenyang
 */

let coins = [1, 2, 5];
let minCoins = Number.POSITIVE_INFINITY;
let v = 20;

getLeastCoin(0, 0, coins, v);
console.log(minCoins);

/**
 * back tracing
 */
function getLeastCoin(coinNum, value, coins, v) {
    if (value > v) return;
    if (value === v) {
        if (coinNum < minCoins) {
            minCoins = coinNum;
            return;
        }
    }

    for (let i = 0; i < coins.length; i++) { 
        getLeastCoin(coinNum + 1, value + coins[i], coins, v); 
    }
}