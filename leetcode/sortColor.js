/**
 * @file 75. Sort Colors
 * @author arlenyang
 * @solution swap 0 to left, swap 1 to right, skip 1
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function sortColors(nums) {
    let i = 0,
        j = nums.length - 1;
    while (nums[i] === 0) {
        i++;
    }
    while (nums[j] === 2) {
        j--;
    }

    let k = i;
    while (i < j && k <= j) {
        if (nums[k] === 1) {
            k++;
        } else if (nums[k] === 2) {
            swap(nums, k, j);
            j--;
        } else {
            // 0
            swap(nums, k, i);
            if (k === i) {
                k++;
            }
            i++;
        }
    }
}

function swap(nums, a, b) {
    // nums[a] ^= nums[b];
    // nums[b] ^= nums[a];
    // nums[a] ^= nums[b];
    let tmp = nums[a];
    nums[a] = nums[b]
    nums[b] = tmp
}

// let nums = [2,0,2,1,1,0]
// let nums = [1,2,2,0,1,1,1]
// let nums = [1,2,0]
let nums = [2,2,1]
sortColors(nums)
console.log(nums);
