/**
 * @file Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.
 * Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 * @author arlenyang
 */

/**
 * T(n) = O(n*2)
 * S(n) = O(1)
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates2(nums) {
    if (nums.length < 2) {
        return nums.length;
    }

    let pre = 0;
    let cur = 1;
    while (nums[cur] != null) {
        if (nums[cur] === nums[pre]) {
            nums.splice(cur, 1); // O(n)
        } else {
            pre = cur;
            cur++;
        }
    }

    return nums.length;
}

/**
 * when encounter a duplicates, not remove it, just move it to next
 * T(n) = O(n)
 * S(n) = O(1)
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
    if (nums.length < 2) {
        return nums.length;
    }

    let tmp;
    let swap = (i, j) => {
        tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
    }
    let i = 0;
    let j = 1;
    while (j < nums.length) {
        if (nums[i] !== nums[j]) {
            if (j - i > 1) {
                // means there are duplicates between i and j
                swap(++i, j);
                j++;
            } else {
                i++;
                j++;
            }
        } else {
            while (nums[i] === nums[++j]) {} // skip to next different num
            if (j >= nums.length) {
                break;
            }

            swap(++i, j);
            j++;
        }
    }

    return i + 1;
}

let nums = [0, 1, 2, 2, 3, 4, 5, 5, 8];
// let nums = [0, 0];
// let nums = [0, 1];
// let nums = [0];
// let nums = [];
console.log(removeDuplicates(nums));
console.log(nums);
