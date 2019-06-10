/**
 * @file 41. First Missing Positive
 * @author arlenyang
 */

/**
 * T(n) = O(nlogn), S(n) = O(1)
 * @param {number[]} nums
 * @return {number}
 */
function firstMissingPositive(nums) {
    if (nums.length ===  0) {
        return 1;
    }
    if (nums.length === 1) {
        return nums[0] === 1 ? 2 : 1;
    }
    // sort nums by ascend order
    nums.sort((a, b) => {
        return a - b;
    });
    let i = 0;
    // exclude neg num
    while (nums[i] <= 0) {
        i++;
    }
    if (i === nums.length || nums[i] > 1) {
        return 1;
    }
    while (i < nums.length - 1 && nums[i + 1] - nums[i] < 2) {
        i++;
    }
    return nums[i] + 1;
}

/**
 * bucket sort thought
 * T(n) = O(n), S(n) = O(n)
 * [-1, 0, 1, 1, 2, 4] => bucket = [1, 2, 1, 0, 1] bucket[n] == 0 will be the anwser
 * @param {number[]} nums
 * @return {number}
 */
function firstMissingPositive2(nums) {

}

// let nums = [1];
// let nums = [2];
// let nums = [1, 2, 0];
// let nums =[3,4,-1,1]
// let nums =[7,8,9,11,12]
let nums =[0,2,2,1,1]
console.log(firstMissingPositive(nums));
