/**
 * @file 45. Jump Game II
 * @solution
 * 1. backtracing. try every possiblity
 * 2. BFS. the jump paths are like a tree, the smallest height which appears the last index is the answer. 
 * BFS with a queue will do
 */

const bigData = require("./mock/jump_data")

/**
 * T(n) = O(n)
 * S(n) = O(n)
 * @param {number[]} nums
 * @return {number}
 */
function jump(nums) {
    if (!nums.length) {
        return 0;
    }
    let step = 0;
    let len = nums.length;
    let lastIndex = len - 1;
    let curMap = new Set(); // it's a queue removed dups 
    // insert the start
    curMap.add(0)
    // let found = false;
    while (curMap.size > 0) {
        let nextMap = new Set(); // the queue of children for next loop
        for (let i of curMap) {
            if (i === lastIndex) {
                // found = true;
                // break;
                return step;
            }
            let range = nums[i];
            // range of this num has covered the last index
            if (range + i >= lastIndex) {
                // found = true;
                // break;
                return step + 1;
            }
            let end = range + i + 1;
            for (let j = i + 1; j < end; j++) { // put children of current root into queue
                // exclude path that current level had travelled, 
                // cause it 's not the min step any more
                if (!curMap.has(j)) {
                    // check if it's children can reach the end
                    if (nums[j] + j >= lastIndex) {
                        return step + 2;
                    }
                    nextMap.add(j);
                }
            }
        }
        // if (found) {
        //     break;
        // }
        step++;
        curMap = nextMap;
    }
    return step;
};

let nums = [2,3,1,1,4];
// let nums = [2];
// let nums = [];
// let nums = bigData;
// console.log(nums.length);

console.time('pref')
console.log(jump(nums));
console.timeEnd('pref')