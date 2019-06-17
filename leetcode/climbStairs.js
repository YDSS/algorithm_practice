/**
 * @file 70. Climbing Stairs
 *  it is the fibonacci
 * @author arlenyang
 */

/**
 * dp
 * T(n) = O(n),
 * S(n) = O(n)
 * @param {number} n
 * @return {number}
 */
function climbStairs2(n) {
    let memo = new Array(n + 1);
    // init 0th stair(floor) and 1th stair
    memo[0] = 1;
    memo[1] = 1;

    for (let i = 2; i <= n; i++) {
        memo[i] = memo[i - 1] + memo[i - 2];
    }

    return memo[n];
}

/**
 * T(n) = O(n),
 * S(n) = O(1)
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
    if (n < 2) {
        return n;
    }

    n -= 1;
    let pre = 1;
    let pre2 = 1;
    let ret = 0;
    while (n > 0) {
        ret = pre + pre2;
        pre = pre2;
        pre2 = ret;
        n--;
    }

    return ret;
}

let n = 10;
console.log(climbStairs(n))