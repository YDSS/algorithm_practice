/**
 * @file Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].
 * @author arlenyang
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function searchRange(nums, target) {
    if (!nums.length) {
        return [-1, -1];
    }

    let left = 0;
    let right = nums.length - 1;
    let firstFoundTargetIndex = -1;
    let calcMiddle = (a, b) => {
        return Math.floor((a + b) / 2);
    };
    // binary search to find index of target first appeared
    let findTargetFirstAppearIndex = (low, high) => {
        if (firstFoundTargetIndex !== -1) {
            return;
        }
        if (low >= high) {
            if (target === nums[high]) {
                firstFoundTargetIndex = high;
            }
            return;
        }
        let mid = calcMiddle(low, high);
        if (target === nums[mid]) {
            firstFoundTargetIndex = mid;
            return;
        }
        if (target > nums[mid]) {
            left = mid + 1;
            findTargetFirstAppearIndex(left, high);
            return;
        } else {
            right = mid - 1;
            findTargetFirstAppearIndex(low, right);
            return;
        }
    };
    findTargetFirstAppearIndex(left, right);
    console.log(left, firstFoundTargetIndex, right);
    // target is not in nums
    if (firstFoundTargetIndex === -1) {
        return [-1, -1];
    }
    if (
        (nums[firstFoundTargetIndex - 1] == null ||
            nums[firstFoundTargetIndex - 1] !== target) &&
        (nums[firstFoundTargetIndex + 1] == null ||
            nums[firstFoundTargetIndex + 1] !== target)
    ) {
        return [firstFoundTargetIndex, firstFoundTargetIndex];
    }
    // if target exists, there will be a range even if it just has one num
    // find left range of the target part
    let findLeftRange = (low, high) => {
        if (low >= high) {
            return high;
        }
        let mid = calcMiddle(low, high);
        if (
            nums[mid] === target &&
            (nums[mid - 1] == null || nums[mid - 1] !== target)
        ) {
            return mid;
        } else {
            if (nums[mid] < target) {
                return findLeftRange(mid + 1, high);
            } else {
                return findLeftRange(low, mid - 1);
            }
        }
    };
    let findRightRange = (low, high) => {
        if (low >= high) {
            return high;
        }
        let mid = calcMiddle(low, high);
        if (
            nums[mid] === target &&
            (nums[mid + 1] == null || nums[mid + 1] !== target)
        ) {
            return mid;
        } else {
            if (nums[mid] <= target) {
                return findRightRange(mid + 1, high);
            } else {
                return findRightRange(low, mid - 1);
            }
        }
    };
    return [
        findLeftRange(left, firstFoundTargetIndex),
        findRightRange(firstFoundTargetIndex, right)
    ];
}

// let nums = [5, 7, 7, 8, 8, 10];
// let target = 8;
// let nums = [5,7,7,8,8,10];
// let target = 6;
let nums = [1,2,2,3,4,5,6,7,7,7,7,7,7,8,9,10,11]
// let target = 7;
// let target = 2;
// let target = 1;
let target = 11;
console.log(searchRange(nums, target));
