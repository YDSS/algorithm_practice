/**
 * @file Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
 * You may assume no duplicates in the array.
 * @author arlenyang
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert(nums, target) {
    let cur = 0;
    let len = nums.length;

    while (cur < len && nums[cur] < target) {
        cur++;
    }
    if (nums[cur] >= target) {
        return cur;
    } else {
        return len;
    }
}

// let nums = [1, 3, 5, 6];
// let target = 5;
// let nums = [1,3,5,6];
// let target = 2;
// let nums = [1,3,5,6];
// let target = 7;
let nums = [1,3,5,6];
let target = 0;
console.log(searchInsert(nums, target));
