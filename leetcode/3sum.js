/**
 * @file 3 sum, Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
 * @author arlenyang
 */

/**
 * brutal force, T(n) = O(n^3)
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
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
                        })
                        // console.log(sMap)
                        let innerFlag = false;
                        for (let m = 0; m < newSol.length; m++) {
                            if (!sMap[newSol[m]] || sMap[newSol[m]] <= 0) {
                                innerFlag = true;
                                break;
                            }
                            else {
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

// let arr = [-1, 0, 1, 2, -1, -4]
let arr = [-13,5,13,12,-2,-11,-1,12,-3,0,-3,-7,-7,-5,-3,-15,-2,14,14,13,6,-11,-11,5,-15,-14,5,-5,-2,0,3,-8,-10,-7,11,-5,-10,-5,-7,-6,2,5,3,2,7,7,3,-10,-2,2,-12,-11,-1,14,10,-9,-15,-8,-7,-9,7,3,-2,5,11,-13,-15,8,-3,-7,-12,7,5,-2,-6,-3,-10,4,2,-5,14,-3,-1,-10,-3,-14,-4,-3,-7,-4,3,8,14,9,-2,10,11,-10,-4,-15,-9,-1,-1,3,4,1,8,1]
console.log(threeSum(arr));