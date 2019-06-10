/**
 * @file 41. First Missing Positive
 *
 * solutions:
 * 1. treat nums as a hashtable, swap every positive number A in nums with the number B whose index equals A. then iterate over the nums to find the first place which the number is not equals the index, that is the missing number
 *  a. utilizing number as key in the hashtable, and the table is just nums so that no need extra n space
 *  b. the indexes is ordered
 *
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
 * T(n) = O(n), S(n) = O(1)
 * @param {number[]} nums
 * @return {number}
 */
function firstMissingPositive2(nums) {
    let swap = (a, b) => {
        let tmp = nums[a];
        nums[a] = nums[b];
        nums[b] = tmp;
    };
    for (let i = 0; i < nums.length; i++) {
        while (nums[i] > 0 && nums[i] < nums.length && nums[nums[i] - 1] !== nums[i]) {
            swap(nums[i] - 1, i);
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] - 1 !== i) {
            return i + 1;
        }
    }

    return nums.length + 1;
}

// let nums = [1,2,0];
// let nums =[3,4,-1,1] ;
// let nums = [7,8,9,11,12]
// let nums = [-2,-1,0]
let nums = [-1, 4, 2, 1, 9, 10];
console.log(firstMissingPositive(nums));
