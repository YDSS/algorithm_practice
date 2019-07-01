/**
 * @file 46. Permutations
 * @solution
 * 1. backtracing. pick a num from remain nums, then pass the remain and already picked nums to next loop
 * 2. insert method. put new num into every slot of current permuations, make new permutations to next loop
 */

/**
 * f(i) = f(i - 1) * i, f(i) is the nums of permutation,  
 *  i is the round number from 1, aka the length of nums, f(1) = 1, 
 * T(n) = O(n^n)
 * S(n) = O(1)
 * @param {number[]} nums
 * @return {number[][]}
 */
function permute(nums) {
    let result = []; // 2-d
    // put the first num into result for starting
    result[0] = [nums[0]];
    // insert a num to index i, and return a new array
    let insertNum = (i, target, num) => {
        let inserted = [];
        let len = target.length;
        for (let m = 0; m < len; m++) {
            // insert when not the last slot, which the nums of target are all in left
            if (i !== len) {
                if (m === i) {
                    inserted.push(num);
                }
                inserted.push(target[m]);
                // when it's the last slot
            } else {
                inserted.push(target[m]);
                if (m === len - 1) {
                    inserted.push(num);
                }
            }
        }
        return inserted;
    };
    for (let i = 1; i < nums.length; i++) {
        let newRet = [];
        // put nums[i] into every slot of every permutations
        for (let j = 0; j < result.length; j++) {
            // insert slot
            for (let k = 0; k < result[j].length + 1; k++) {
                // clone a permutation and insert new num
                let inserted = insertNum(k, result[j], nums[i]);
                newRet.push(inserted);
            }
        }
        result = newRet;
    }

    return result;
}

// let nums = [];
let nums = [1];
// let nums = [1, 2, 3];
// let nums = [1, 2, 3, 4];
console.log(permute(nums));
