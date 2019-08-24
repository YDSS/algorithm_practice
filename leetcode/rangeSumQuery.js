/**
 * @file 303. Range Sum Query - Immutable
 * @author arlenyang
 */

/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.n = nums.length;
    this.dp = preprocess2(nums);
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    // out of bound
    if (j >= this.n) {
        return null;
    }
    // return this.dp[i][j];
    return this.dp[j] - (i === 0 ? 0 : this.dp[i - 1]);
};

/**
 * T(n) = O(n^2)
 * @param {*} nums 
 */
function preprocess(nums) {
    let n = nums.length;
    let dp = Array.from({ length: n }, x => Array.from({ length: n }));
    for (let i = 0; i < n; i++) {
        dp[i][i] = nums[i];
    }
    for (let len = 2; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            let j = len + i - 1;
            dp[i][j] = dp[i][j - 1] + nums[j];
        }
    }

    return dp;
}

/**
 * dp solution II
 * 
 * think about sum(i, j) = sum(0, j) - sum(0, i),
 * so we can reduce T(n) to O(n) comparing above dp solution I
 * 
 * dp[i] = sum(0, i)
 * 
 * T(n) = O(n)
 * @param {*} nums 
 */
function preprocess2(nums) {
    let n = nums.length;
    let dp = new Array(n);
    dp[0] = nums[0];
    for (let i = 1; i < n; i++) {
        dp[i] = dp[i - 1] + nums[i];
    }

    return dp;
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */

nums = [-2, 0, 3, -5, 2, -1];
// i = 0, j = 3;
// i = 2, j = 5;
// i = 2, j = 7; // out of bound

var obj = new NumArray(nums);
var param_1 = obj.sumRange(i, j);
console.log(param_1)
