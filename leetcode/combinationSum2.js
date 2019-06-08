/**
 * @file 40. Combination Sum II
 *
 *  solutions:
 *      1. backtracing, need a hashtable to remove duplicates
 *      2. improve 1, since candidates array is sorted, we can skip the 
 *      duplicates nums(example [2,2,2,2,2,2,2], 8), cause in every bt we can choice different numbers, to avoid duplicates
 * 
 * @author arlenyang
 */

/**
 * backtracing
 * T(n) = O(n!), S(n) = O(n)
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum22(candidates, target) {
    let dupMap = new Set(); // register every solution to remove duplicates
    let solutions = [];
    let tmp = [];
    // sort candidates, make the key in the dupMap unique
    candidates.sort((a, b) => {
        return a - b;
    });
    let bt = (solution, i, sum) => {
        if (sum === target) {
            let key = solution.join(",");
            if (!dupMap[key]) {
                let clone = solution.map(_ => _);
                solutions.push(clone);
                dupMap[key] = 1;
            }

            return;
        }
        if (sum > target) {
            return;
        }
        for (let j = i; j < candidates.length; j++) {
            solution.push(candidates[j]);
            bt(solution, j + 1, sum + candidates[j]);
            solution.pop();
        }
    };
    bt(tmp, 0, 0);

    return solutions;
}

/**
 * backtracing
 * T(n) = O(n!), S(n) = O(n)
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum2(candidates, target) {
    let solutions = [];
    let tmp = [];
    // sort candidates, make the key in the dupMap unique
    candidates.sort((a, b) => {
        return a - b;
    });
    let bt = (solution, i, sum) => {
        if (sum === target) {
            let clone = solution.map(_ => _);
            solutions.push(clone);

            return;
        }
        if (sum > target) {
            return;
        }
        for (let j = i; j < candidates.length; j++) {
            // skip duplicates
            if (
                j > i &&
                candidates[j] === candidates[j - 1]
            ) {
                continue;
            }
            solution.push(candidates[j]);
            bt(solution, j + 1, sum + candidates[j]);
            solution.pop();
        }
    };
    bt(tmp, 0, 0);

    return solutions;
}

// let candidates = [10,1,2,7,6,1,5], target = 8;
// let candidates = [2,5,2,1,2], target = 5;
// let candidates = [1], target = 5;
let candidates = [2, 2, 2, 2, 2, 2, 2],
    target = 8;
console.log(combinationSum2(candidates, target));
