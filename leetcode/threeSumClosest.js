/**
 * @file Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.
 * @author arlenyang
 */

/**
 * brutal force, T(n) = O(n^3)
 * @param {number[]} nums
 * @param {number} target
 */
function threeSumClosest2(nums, target) {
    let solution = Number.POSITIVE_INFINITY;
    // let solNums = [];
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                let sum = nums[i] + nums[j] + nums[k];
                if (Math.abs(target - sum) < Math.abs(target - solution)) {
                    solution = sum;
                    // solNums = [nums[i], nums[j], nums[k]];
                }
            }
        }
    }

    // console.log(solNums);
    return solution;
}

/**
 * hashtable, T(n) = O(n^2), S(n) = O(n)
 * @param {number[]} nums
 * @param {number} target
 */
function threeSumClosest3(nums, target) {
    let solution = Number.POSITIVE_INFINITY;
    // let solNums;
    let n = nums.length;
    // init hashtable
    let table = {};
    nums.map(num => {
        // O(n)
        if (table[num] == null) {
            table[num] = 0;
        }
        table[num]++;
    });
    let isNumExisted = (i, j, num) => {
        if (num === nums[i] && num === nums[j]) {
            if (table[num] > 2) {
                return true;
            }
        } else if (num === nums[i] || num === nums[j]) {
            if (table[num] > 1) {
                return true;
            }
        } else if (num !== nums[i] && num !== nums[j]) {
            if (table[num] > 0) {
                return true;
            }
        }
        return false;
    };

    for (let i = 0; i < n; i++) {
        let outerBreakTag = false;
        for (let j = i + 1; j < n; j++) {
            // console.log(nums[i], nums[j]);
            let thirdNum = target - nums[i] - nums[j];
            // if (nums[i] === 2) {
            //     console.log(nums[j]);
            // }
            if (isNumExisted(i, j, thirdNum)) {
                solution = target;
                solNums = [nums[i], nums[j], thirdNum];
                outerBreakTag = true;
                break;
            }
            // if the difference between current solution and target is 1, no need to find the closest num
            if (Math.abs(target - solution) === 1) {
                continue;
            }
            // find the closest num from third num to left and right
            let count = 0;
            while (true) {
                count++;
                if (count === Math.abs(target - solution)) {
                    break;
                }

                // console.log(thirdNum + count);
                // console.log(isNumExisted(i, j, thirdNum + count));
                if (isNumExisted(i, j, thirdNum + count)) {
                    solution = target + count;
                    // solNums = [nums[i], nums[j], thirdNum + count];
                    break;
                }
                if (isNumExisted(i, j, thirdNum - count)) {
                    solution = target - count;
                    // solNums = [nums[i], nums[j], thirdNum - count];
                    break;
                }
            }
        }
        if (outerBreakTag) {
            break;
        }
    }

    // console.log(solNums);
    return solution;
}

/**
 * T(n) = O(n^2), S(n) = O(1)
 * @param {number[]} nums
 * @param {number} target
 */
function threeSumClosest(nums, target) {
    // sort the nums
    nums = nums.sort((a, b) => { return a - b});
    let bestDist = Number.POSITIVE_INFINITY;
    let n = nums.length;
    let tmpSum;
    let tmpDist;

    for (let i = 0; i < n - 2; i++) {
        let firstNum = nums[i];
        let left = i + 1;
        let right = n - 1;

        while (left < right) {
            tmpSum = firstNum + nums[left] + nums[right];
            tmpDist = target - tmpSum;
            if (tmpDist === 0) {
                bestDist = 0;
                return target;
            }
            if (Math.abs(tmpDist) < Math.abs(bestDist)) {
                bestDist = tmpDist;
            }
            if (tmpSum > target) {
                right--;
            }
            else {
                left++;
            }
        }
    }

    return target - bestDist;
}

// let arr = [-1, 2, 1, -4];
// let target = 1;
// let arr = [1, 1, -1];
// let target = 2;
let arr = [1,2,4,8,16,32,64,128];
let target = 82;
console.log(threeSumClosest(arr, target));
