/**
 * @file Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

The same repeated number may be chosen from candidates unlimited number of times.

Note:

All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.

 * @author arlenyang
 */

/**
 * brute force, backtracing
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum(candidates, target) {
    let solutions = [];   
    let solution = [];
    let clone = arr => {
        let newArr = [];
        arr.map((item, i) => {
            newArr[i] = item;
        })
        return newArr;
    }
    let bt = (solution, sum, i) => {
        // console.log(solution);
        if (sum === target) {
            solutions.push(clone(solution));
            return;
        }
        if (sum > target) {
            return;
        }
        if (i > candidates.length) {
            return;
        }
        for (let j = i; j < candidates.length; j++) {
            solution.push(candidates[j]);
            bt(solution, sum + candidates[j], j);
            solution.pop();
        }
    }

    bt(solution, 0, 0);
    return solutions;
}

// let candidates = [2,3,6,7];
// let target = 7;
let candidates = [2,3,5];
let target = 8;
// let candidates = [3,2,5];
// let target = 8;
// let candidates = [3,2,5];
// let target = 7;
console.log(combinationSum(candidates, target));