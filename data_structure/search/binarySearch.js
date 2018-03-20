/**
 * @file binary search
 * @author YDSS
 */

/**
 * binary search without recursion
 * 
 * @param {Array} nums nums with order
 * @param {Number} target 
 */
let binarySearch = function (nums, target) {
    let mid;
    let low = 0;
    let high = nums.length - 1;
    let ret = -1;

    while (low <= high) {
        mid = Math.ceil((high - low) / 2) + low;      

        if (nums[mid] === target) {
            ret = mid;
            break; 
        }

        if (target < nums[mid]) {
            high = mid - 1;
        }

        if (target > nums[mid]) {
            low = mid + 1;
        }
    } 

    return ret;
}

/**
 * binary search by recursion 
 * 
 * @param {Array} nums nums with order
 * @param {Number} target 
 * @param {Number} low first index of nums
 * @param {Number} high last index of nums
 */
let binarySearchR = function (nums, target, low, high) {
    if (low >= high) {
        return nums[high] === target ? high : -1;
    }

    let mid = Math.ceil((high - low) / 2) + low;

    if (target === nums[mid]) {
        return mid;
    }

    if (target > nums[mid]) {
        return binarySearchR(nums, target, mid + 1, high);
    }

    if (target < nums[mid]) {
        return binarySearchR(nums, target, low, mid - 1);
    }
}

exports.binarySearch = binarySearch;
exports.binarySearchR = binarySearchR;

function test() {
    let nums = [1, 2, 4, 5, 8, 10, 39, 40];
    // console.log(binarySearch(nums, 38));
    console.log(binarySearchR(nums, 4, 0, nums.length));
}