/**
 * @file 80. Remove Duplicates from Sorted Array II
 * @author arlenyang
 */

/**
 *  swap solution. 
	1. i from 0 to end, j from end to 0, count for counting current num
    2. when encounting an dup, 
        1. swap nums[i] with nums[j], 
        2. then insert nums[j] into the right place(sorted) by insertion
        3. j--, and i++

 * T(n) = O(n^2)
 * S(n) = O(1)
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
    if (nums.length < 3) {
        return nums.length;
    }
    let count = 1;
    let i = 1;
    let j = nums.length - 1;

    while (i <= j) {
        if (nums[i] === nums[i - 1]) {
            if (count === 2) {
                // swap i and j
                let tmp = nums[j];
                nums[j] = nums[i];
                j--;
                // insert nums[j]
                let k = i;
                while (k < j && nums[k + 1] < tmp) {
                    nums[k] = nums[k + 1];
                    k++;
                }
                nums[k] = tmp;
            } else {
                count++;
                i++;
            }
        } else {
            count = 1;
            i++;
        }
    }

    return j + 1;
}

/**
 * override interval pos solution
 *  one pass to iterate
 *  1. set interval = 0, it's the interval we swap i with i - interval, 
 *   when encounter duplicates, make interval++, this will create 1 interval, 
 *   after that, we always move the interval forward.
 *  2. when reaching the end, the intervals will be in the end of array
 * 
 * T(n) = O(n)
 * S(n) = O(1)
 * @param {number[]} nums
 * @return {number}
 */
// 0,0,0,0,1,2,2,2,3,4
// 0,0,1,2,2,2,0,0,3,4
// 0,0,1,2,2,3,0,0,2,4
function removeDuplicates2(nums) {
    if (nums.length < 2) {
        return nums.length;
    }

    let interval = 0;
    let count = 1;
    let prev = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (count > 2) {
            interval++;            
        }

        nums[i - interval] = nums[i];

        if (nums[i] !== prev) {
            prev = nums[i];
            count = 1;
        }
        else {
            count++;
        }
    }

    if (count > 2) {
        interval++;
    }

    return nums.length - interval;
}

// nums = [1,1,1,2,2,3]
// nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
// nums = [0,0,0,0,1,2,2,2,3,4]
nums = [0,0,0]
// nums = [0,0]

console.log(nums.slice(0, removeDuplicates2(nums)));
