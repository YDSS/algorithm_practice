/**
 * @file Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).
 * @author arlenyang
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
    if (nums.length === 0) {
        return -1; 
    }
    if (nums.length === 1) {
        return target === nums[0] ? 0 : -1;
    }

    let searchR = (low, high) => {
        if (low >= high) {
            return target === nums[high] ? high : -1;
        }
        let mid = Math.floor((low + high) / 2);
        if (target === nums[mid]) {
            return mid;
        }
        // check if the current part is ordered part,
        //  if it is, just do binary search
        if (nums[low] < nums[mid] && nums[mid] < nums[high]) {
            return target > nums[mid]
                ? searchR(mid + 1, high)
                : searchR(low, mid - 1);
        }
        // check mid is a rotated pivot or not
        let prev = nums[mid - 1];
        let next = nums[mid + 1];
        let rotatedPivots = []; // pivots[0] is the largest num, pivots[1] is the smallest num
        if ((nums[mid] > prev || prev == null) && nums[mid] > next) {
            rotatedPivots = [mid, mid + 1]; 
            if (target === nums[mid + 1]) {
                return mid + 1;
            }
        }
        else if (nums[mid] < prev && (nums[mid] < next || next == null)) {
            rotatedPivots = [mid - 1, mid]; 
            if (target === nums[mid - 1]) {
                return mid - 1;
            }
        }
        // is rotated pivot
        if (rotatedPivots.length > 0) {
            if (target >= nums[low] && target < nums[rotatedPivots[0]]) {
                return searchR(low, rotatedPivots[0] - 1);
            } 
            else {
                return searchR(rotatedPivots[1] + 1, high);
            }
        }
        else {
            // only one side is ordered
            if (nums[mid] >= nums[low]) {
                if (nums[low] <= target && target < nums[mid]) {
                    return searchR(low, mid - 1);
                }
                else {
                    return searchR(mid + 1, high);
                }
            }
            else {
                if (nums[mid] < target && target <= nums[high]) {
                    return searchR(mid + 1, high);
                }
                else {
                    return searchR(low, mid - 1);
                }
                
            }
        }
    }   

    return searchR(0, nums.length - 1);
}

// let nums = [4,5,6,7,0,1,2];
// let target = 2;
// let target = 7;
// let target = 4;
// let nums = [15, 16, 17, 18, 19, 20, 0, 1, 2, 3, 4, 5,6,7,8,9,10,11,12,13,14]
// let target = 21;
// let nums = [2, 1]
// let target = 2
let nums = [1]
let target = 2
console.log(search(nums, target));