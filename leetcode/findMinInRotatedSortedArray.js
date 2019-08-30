/**
 * @file 153. Find Minimum in Rotated Sorted Array
 * @author arlenyang
 */

/**
 * binary search,
 *  1. left is sorted, pick the leftest one
	2. right is sorted, pick the leftest one
	3. stop when left > high
 *
 * T(n) = O(logn)
 * S(n) = O(1)
 * @param {number[]} nums
 * @return {number}
 */
function findMin(nums) {
    let n = nums.length;
    if (n === 0) {
        return null;
    }
    // not rotated
    if (nums[0] < nums[n - 1]) {
        return nums[0]; 
    }
    
    let min = Number.POSITIVE_INFINITY;
    let low = 0;
    let high = n - 1;
    while (low <= high) {
        // console.log(low, high)
        let mid = Math.floor((low + high) / 2);

        // left is sorted
        if (nums[mid] >= nums[low]) {
            min = Math.min(min, nums[low]);
            low = mid + 1;
        }
        // right is sorted
        else if (nums[mid] <= nums[high]) {
            min = Math.min(min, nums[mid]);
            high = mid - 1;
        }
    }
    
    return min;
}

// nums = [3,4,5,1,2]
// nums =[4,5,6,7,0,1,2] 
// nums = [7,8,0,1,2,4,5,6]
// nums = [2,1]
nums = [3,1,2]

console.log(findMin(nums));