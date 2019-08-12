/**
 * @file 78. Subsets
 * @author arlenyang
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsets(nums) {
    let ans = [[]];
    let n = nums.length;
    let bt = (len, i, combination) => {
        if (combination.length === len) {
            ans.push([...combination]);
        } else {
            for (let j = i; j < n; j++) {
                combination.push(nums[j]);
                bt(len, j + 1, combination);
                combination.pop();
            }
        }
    };
    let tmp = [];
    for (let i = 1; i <= n; i++) {
        bt(i, 0, tmp);
    }
    return ans;
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsets2(nums) {
    let n = nums.length;
    if (n === 0) {
        return [[]];
    }
    let levels = Array.from({ length: n + 1 }, x => []);
    levels[0].push({ c: [], i: 0 });
    for (let len = 1; len <= n; len++) {
        // O(n*
        let last = levels[len - 1];
        for (let k = 0; k < last.length; k++) {
            // c(0, n) + c(1, n) + ... + c(n, n) = ?
            let {c, i} = last[k];
            for (let m = i; m < n; m++) {
                levels[len].push({ c: [...c, nums[m]], i: m + 1 });
            }
        }
    }
    // convert levels to flat array
    let ret = [];
    for (let i = 0; i < levels.length; i++) {
        for (let j = 0; j < levels[i].length; j++) {
            ret.push(levels[i][j].c);
        }
    }

    return ret;
}

let nums = [1, 2, 3];
// let nums = [];
// let nums = [1];
console.log(subsets2(nums));
