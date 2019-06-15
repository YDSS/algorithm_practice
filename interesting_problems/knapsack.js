/**
 * @file knapsack problem solved by dp solution
 * @author arlenyang
 */

/**
 * backtracing solution is easy but inefficient without recording results,
 * 
 * dp solution:
 * T(n) = O(n * m), n is the number of items, m is the capacity of knapsack
 * S(n) = O(n * m)
 * @param {array[number]} items weight of every item
 * @param {number} capacity capacity of knapsack
 */
function knapsack(items, capacity) {
    // init dp memories, which is a two dimemsion array with (capacity + 1) * (item.length + 1)
    let memo = new Array(items.length);
    for (let i = 0; i < memo.length; i++) {
        memo[i] = new Array(capacity + 1);
    }
    // init the 1th row
    memo[0][0] = true; 
    if (items[0] <= capacity) {
        memo[0][items[0]] = true;
    }
    for (let i = 1; i < memo.length; i++) {
        for (let j = 0; j < memo[0].length; j++) {
            if (memo[i - 1][j]) {
                // not pick item i
                memo[i][j] = true;
                // pick item i
                if (j + items[i] <= capacity) {
                    memo[i][j + items[i]] = true;
                }
            }
        }
    }
    // find max weight in the last row
    let lastRow = memo.length - 1;
    let maxWeight;
    for (let i = memo[0].length - 1; i >= 0; i--) {
        if (memo[lastRow][i]) {
            maxWeight = i;
            break;
        } 
    }
    // derive back to get a solution that items choised 
    let paths = [];
    let j = maxWeight;
    for (let i = lastRow; i >=1; i--) {
        if (j - items[i] >= 0 && memo[i - 1][j - items[i]]) {
            paths.unshift(items[i]);
            j -= items[i];
        }
    } 
    if (j !== 0) {
        paths.unshift(items[0])
    }
    console.log(paths.join(' -> '));

    return maxWeight;
}

let items = [1, 2, 5, 6, 8];
let weight = 20;
console.log(knapsack(items, weight));