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
    let n = nums.length;
    let solutions = [];
    // sort the nums
    nums.sort((a, b) => { return a - b})   
    for (let i = 0; i < n - 3 ; i++) {
        for (let j = i; j < n-2; j++) {
            let remain = target - nums[i] - nums[j];
            let left = j + 1;
            let right = n - 1;

            while (left < right) {
                if (nums[left] + nums[right] === remain) {
                    solutions.push(nums[i], nums[j], nums[left], nums[right]); 
                    continue;
                }
                
            }
        }
    }
}

let nums =[1, 0, -1, 0, -2, 2];
let target = 0;
// fourSum(nums, target)