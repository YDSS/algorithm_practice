/**
 * @file 152. Maximum Product Subarray
 * @author arlenyang
 */

/**
 * dp solution
 *  because the array may have neg numbers, so when product of a subarray is neg, it still has chance to be positive max with a neg number. so we should not only record positive max, also need record negative max
 * 
 *  curMin is the max of negative subarray, curMax is the max of positive subarray
 * 
 *  curMax can only from:
 *  1. preMax * nums[i]
 *  2. preMin * nums[i] 
 *  3. nums[i]
 * 
 *  curMin is the same, cause if has a neg number and a neg preMin, the product maybe the curMax
 * 
 * @param {number[]} nums
 * @return {number}
 */
function maxProduct(nums) {
    let n = nums.length;
    if (n === 0) {
        return 0;
    }
    let curMax = nums[0];
    let curMin = nums[0];
    let max = nums[0];
    for (let i = 1; i < n; i++) {
        let preMax = curMax;
        curMax = Math.max(preMax * nums[i], Math.max(nums[i], curMin * nums[i]));
        curMin = Math.min(preMax * nums[i], Math.min(nums[i], curMin * nums[i]));
        max = Math.max(curMax, max);
    } 

    return max;
}

nums = [1]
// nums = [2,3,-2,4];
// nums = [-1,-2,-3,-4,-5]
console.log(maxProduct(nums));