/**
 * @file 198. House Robber
 * @author arlenyang
 * @solution
 *  1. dfs, in every turn i, we can choise a house not adjacent to current one, which is houses[i + 2] ~ houses[end], record max
 *  2. dp
 */

/**
 * dp solution,
 *  dp[i] means maximum money robber got from house 0 to i,
 *  dp[i] = Max(dp[0] ~ dp[i - 2]) + houses[i]
 * 
 * T(n) = O(n^2)
 * S(n) = O(n)
 * @param {number[]} nums
 * @return {number}
 */
function rob(nums) {
    let n = nums.length;
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return nums[0]
    }
    if (n === 2) {
        return Math.max(nums[0], nums[1]);
    }
    // init dp
    let dp = new Array(n);
    dp[0] = nums[0];
    dp[1] = nums[1];
    // O(n^2) 
    for (let i = 2; i < n; i++) {
        dp[i] = 0;
        for (let j = 0; j < i - 1; j++) {
            dp[i] = Math.max(dp[i], dp[j] + nums[i]);
        }
    }
    // get maximum money
    let max = 0;
    for (let i = 0; i < n; i++) {
        if (dp[i] > max) {
            max = dp[i];
        }
    }

    return max;
}

/**
 * dp solution II,
 *  dp[i] means maximum money robber got from house 0 to i,
 *  - if rob house[i], then we can not rob house[i - 1] => dp[i] = dp[i - 2] + nums[i],
 *  - if not rob house[i], then we can extend from dp[i - 1] => dp[i] = dp[i - 1] 
 *  dp[i] = Max(dp[i - 2] + nums[i], dp[i - 1])
 * 
 * T(n) = O(n)
 * S(n) = O(n)
 * @param {number[]} nums
 * @return {number}
 */
function rob2(nums) {
    let n = nums.length;
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return nums[0]
    }
    if (n === 2) {
        return Math.max(nums[0], nums[1]);
    }
    // init dp
    let dp = new Array(n);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[1], nums[0]); 
    for (let i = 2; i < n; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    }

    return dp[n - 1];   
}

/**
 * dp solution III,
 *  base on II, optimize the space
 * 
 * T(n) = O(n)
 * S(n) = O(1)
 * @param {number[]} nums
 * @return {number}
 */
function rob3(nums) {
    let n = nums.length;
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return nums[0]
    }
    if (n === 2) {
        return Math.max(nums[0], nums[1]);
    }
    // save space, cause dp[i] only need dp[i - 1] and dp[i - 2], we can store them in constant space
    let prev0 = nums[0];
    let prev1 = Math.max(nums[1], nums[0]); 
    let max = 0; 
    for (let i = 2; i < n; i++) {
        max = Math.max(prev0 + nums[i], prev1);
        prev0 = prev1;
        prev1 = max;
    }

    return max;
}

// nums = [1,2,3,1]
// nums = [2,1,1,2]
// nums = [2,7,9,3,1]
nums = [2,7,9,3,1,5,2]
// nums = [1]
// nums = []

console.log(rob3(nums));