/**
 * @file 3 sum, Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
 * @author arlenyang
 */

/**
 * brutal force, T(n) = O(n^3)
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum2(nums) {
    let solutions = [];
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j) {
                continue;
            }

            for (let k = 0; k < n; k++) {
                if (i === k || j === k) {
                    continue;
                }

                if (nums[i] + nums[j] + nums[k] === 0) {
                    let newSol = [nums[i], nums[j], nums[k]];
                    // console.log(newSol)
                    let outerFlag = true;
                    // remove duplicate
                    for (let h = 0; h < solutions.length; h++) {
                        let sol = solutions[h];
                        let sMap = {};
                        sol.map(num => {
                            if (!sMap[num]) {
                                sMap[num] = 0;
                            }
                            sMap[num]++;
                        });
                        // console.log(sMap)
                        let innerFlag = false;
                        for (let m = 0; m < newSol.length; m++) {
                            if (!sMap[newSol[m]] || sMap[newSol[m]] <= 0) {
                                innerFlag = true;
                                break;
                            } else {
                                sMap[newSol[m]]--;
                            }
                        }
                        if (!innerFlag) {
                            outerFlag = false;
                            break;
                        }
                    }
                    if (outerFlag) {
                        solutions.push(newSol);
                    }
                }
            }
        }
    }

    return solutions;
}

/**
 * hashtable solution,
 * observe that if 3 nums sum to 0, it must have one positive number and one negative number
 * T(n) = O(i * j), i + j = n,
 * S(n) = O(n)
 * @param {Array} nums
 */
function threeSum(nums) {
    let solutions = [];
    // init hashtable
    let table = {};
    nums.map(num => {
        // O(n)
        if (table[num] == null) {
            table[num] = 0;
        }
        table[num]++;
    });
    // check if there are at least 3 zeros, which is a solution
    if (table[0] > 2) {
        solutions.push([0, 0, 0]);
    }
    // init arr contains positive nums and negative nums
    let pos = [];
    let neg = [];
    Object.keys(table).map(num => {
        // O(n)
        num = +num; // string to num, cause object's key is string
        num >= 0 && pos.push(num);
        num < 0 && neg.push(num);
    });
    for (let i = 0; i < pos.length; i++) {
        // i + j = n; O(i * j)
        for (let j = 0; j < neg.length; j++) {
            // O(j)
            let dif = 0 - pos[i] - neg[j];
            if ((dif === pos[i] || dif === neg[j]) && table[dif] > 1) {
                solutions.push([pos[i], dif, neg[j]]);
            }
            if ((dif > pos[i] || dif < neg[j]) && table[dif] > 0) {
                solutions.push([pos[i], dif, neg[j]]);
            }
        }
    }

    return solutions;
}

/**
 * T(n) = O(n^2), S(n) = O(1)
 * @param {number[]} nums
 * @param {number} target
 */
function threeSum4(nums) {
    let solutions = [];
    // sort the nums
    nums = nums.sort((a, b) => {
        return a - b;
    });
    let n = nums.length;
    let tmpSum;

    let isDuplicated = solution => { // O(k), k = solutions.length, which will increse
        for (let i = 0; i < solutions.length; i++) {
            let isEqual = true;
            solutions[i].map((num, j) => {
                if (num !== solution[j]) {
                    isEqual = false;
                }
            });
            if (isEqual) {
                return isEqual;
            }
        }
        return false;
    };

    for (let i = 0; i < n - 2; i++) {
        let firstNum = nums[i];
        let left = i + 1;
        let right = n - 1;

        while (left < right) {
            tmpSum = firstNum + nums[left] + nums[right];
            if (tmpSum === 0 && !isDuplicated([firstNum, nums[left], nums[right]])) {
                solutions.push([firstNum, nums[left], nums[right]]);
                left++;
                right--;
                continue;
            }
            if (tmpSum > 0) {
                right--;
            } else {
                left++;
            }
        }
    }

    return solutions;
}

// let arr = [-1, 0, 1, 2, -1, -4];
// let arr = [3, 0, -2, -1, 1, 2];
// let arr = [-13,5,13,12,-2,-11,-1,12,-3,0,-3,-7,-7,-5,-3,-15,-2,14,14,13,6,-11,-11,5,-15,-14,5,-5,-2,0,3,-8,-10,-7,11,-5,-10,-5,-7,-6,2,5,3,2,7,7,3,-10,-2,2,-12,-11,-1,14,10,-9,-15,-8,-7,-9,7,3,-2,5,11,-13,-15,8,-3,-7,-12,7,5,-2,-6,-3,-10,4,2,-5,14,-3,-1,-10,-3,-14,-4,-3,-7,-4,3,8,14,9,-2,10,11,-10,-4,-15,-9,-1,-1,3,4,1,8,1]
// console.log(threeSum(arr));
