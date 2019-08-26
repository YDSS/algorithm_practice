/**
 * @file 213. House Robber II
 * @author arlenyang
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
function rob(nums) {
    let n = nums.length;
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return nums[0];
    }

    // from 0 ~ n - 1, not include the last house
    let dp0 = new Array(n - 1);
    dp0[0] = nums[0];
    dp0[1] = Math.max(nums[0], nums[1]);
    for (let i = 2; i < n - 1; i++) {
        dp0[i] = Math.max(dp0[i - 2] + nums[i], dp0[i - 1]);
    }
    // from 1 ~ n, not include the first house
    let dp1 = new Array(n - 1);
    dp1[0] = nums[1];
    dp1[1] = Math.max(nums[2], nums[1]);
    for (let i = 2; i < n - 1; i++) {
        dp1[i] = Math.max(dp1[i - 2] + nums[i + 1], dp1[i - 1]);
    }
    // console.log(dp0);
    // console.log(dp1);

    return Math.max(dp0[n - 2], dp1[n - 2]);
}

// nums = [2,3,2];
// nums = [1,2,3,1]
// nums = [2,3,2,4,2]
// nums = [1,2]
nums = [1,3,1,3,100]
// nums = [1]
// nums = []
console.log(rob(nums));