/**
 * @file Find subarray with given sum | Set 2 (Handles Negative Numbers)
 *  https://www.geeksforgeeks.org/find-subarray-with-given-sum-in-array-of-integers/
 * @author arlenyang
 * @solution 
 *  1. naive way, just like non-negative problem
 *  2. dp ./img/contiguous_sequence_sumII.jpg
 */

/**
 * dp solution
 * T(n) = O(n)
 * S(n) = O(1)
 * @param {*} arr 
 * @param {*} sum 
 */
function contiguousSum(arr, sum) {
    let n = arr.length;
    // key is the sum, value is index, which is sequence from 0 to it, they add to the sum 
    let dp = new Map();
    let curSum = 0;

    for (let i = 0; i < n; i++) {
        curSum += arr[i];
        // sequence is from 0 to i
        if (curSum === sum) {
            return [0, i];
        }
        // sequence is not start from 0
        if (dp.has(curSum - sum)) {
            return [dp.get(curSum - sum) + 1, i];
        }
        dp.set(curSum, i);
    }

    return null;
}

// arr = [1, 4, 20, 3, 10, 5], sum = 33;
arr = [10, 2, -2, -20, 10], sum = -10;
// arr = [-10, 0, 2, -2, -20, 10], sum = 20;

console.log(contiguousSum(arr, sum));