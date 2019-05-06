/**
 * @file Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.
 * @author arlenyang
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
function fourSum(nums, target) {
    let solutions = [];
    let left;
    let right;
    let remain;
    let twoSum;
    let n = nums.length;

    // sort the arr
    nums.sort((a, b) => {
        return a - b;
    });
    console.log(nums);
    for (let i = 0; i < n - 2; i++) {
        if (i > 0 && nums[i - 1] === nums[i]) {
            // skip duplicated result
            continue;
        }
        for (let j = i + 1; j < n - 2; j++) {
            if (j > i + 1 && nums[j - 1] === nums[j]) {
                // skip duplicated result
                continue;
            }

            remain = target - nums[i] - nums[j];
            left = j + 1;
            right = n - 1;
            while (left < right) {
                console.log(nums[i], nums[j], nums[left], nums[right])
                twoSum = nums[left] + nums[right];
                if (remain === twoSum) {
                    solutions.push([nums[i], nums[j], nums[left], nums[right]]);
                    left++;
                    right--;
                    continue;
                }
                if (remain > twoSum) {
                    left++;
                } else {
                    right--;
                }
                while (
                    left > j + 1 &&
                    left < right &&
                    nums[left - 1] === nums[left]
                ) {
                    // skip duplicated result
                    left++;
                }
                while (
                    right < n - 1 &&
                    left < right &&
                    nums[right - 1] === nums[right]
                ) {
                    // skip duplicated result
                    right--;
                }
 
            }
        }
    }

    return solutions;
}

// let nums = [1, 0, -1, 0, -2, 2];
// let target = 0;
// let nums = [0,0,0,0]
// let target = 0;
let nums = [-1,2,2,-5,0,-1,4];
let target = 3;
console.log(fourSum(nums, target));
