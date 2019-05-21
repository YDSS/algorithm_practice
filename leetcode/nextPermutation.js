/**
 * @file Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.
 *  If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).
 *  The replacement must be in-place and use only constant extra memory.
 *  Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.
 * @author arlenyang
 */

function swap(arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

/**
 * T(n) = O(n^2), S(n) = O(1)
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums) {
    let len = nums.length;
    let i = len - 1; // digit/index of current num 
    let j; // digit/index of forward num
    let minIncrement = Number.POSITIVE_INFINITY;
    let h, k; // record indexes when got current min increment after swap 
    for (; i > 0; i--) {
        j = i;
        while (nums[i] <= nums[--j]){}
        // console.log(`i: ${i}, j: ${j}`)
        if (nums[i] <= nums[j] || j < 0) {
            continue;
        }
        let curDigit = len - 1 - i;
        let forwardDigit = len - 1 - j;
        // console.log(`curD: ${curDigit}, fordD: ${forwardDigit}`)
        let origin = Math.pow(10, curDigit) * nums[i] + Math.pow(10, forwardDigit) * nums[j];
        let swaped = Math.pow(10, forwardDigit) * nums[i] + Math.pow(10, curDigit) * nums[j];
        let increment = swaped - origin;
        // console.log(`origin: ${origin}, swaped: ${swaped}, increment: ${increment}`)
        if (increment < minIncrement) {
            minIncrement = increment;
            h = i;
            k = j;
            // console.log(`min: ${minIncrement}, h: ${h}, k: ${k}`);
        }
        // console.log('-------')
    }
    if (!Number.isFinite(minIncrement)) {
        nums.sort((a, b) => { return a - b })
    }
    else {
        swap(nums, h, k);
    }
}

// let nums = [1, 2, 3];
// let nums = [1, 4, 6, 2, 1];
let nums = [3, 1, 1, 2, 1];
nextPermutation(nums);
console.log(nums);