/**
 * @file 89. Gray Code
 * @author arlenyang
 */

/**
 * bt solution:
 *  1. generate all the nums by n,
 *  2. start with 0
 *  3. pick a num in nums which xor previous one can be exactly divisible by 2
 *  4. stop when nums is empty
 * @param {number} n
 * @return {number[]}
 */
function grayCode(n) {
    let m = Math.pow(2, n);
    let nums = [];
    for (let i = 1; i < m; i++) {
        nums.push(i);
    } 
    let ans;
    let found = false;
    let bt = (remain, cur) => {
        if (remain.length === 0) {
            found = true;
            ans = cur;
            return;
        }
        for (let i = 0; i < remain.length; i++) {
            let xor = remain[i] ^ cur[cur.length - 1];
            if (isPowBy2(xor)) {
                let pop = remain.splice(i, 1)[0];
                cur.push(pop);
                bt(remain, cur);
                if (found) {
                    return;
                }
                cur.pop();
                remain.splice(i, 0, pop);
            }
        }
    }

    bt(nums, [0]);
    return ans;
}

function isPowBy2(num) {
    let i = 1;
    while (i < num) {
        i = i << 1;
    }

    return i === num;
}

// let n = 2;
// let n = 1;
// let n = 0;
// let n = 4;
// let n = 3;
let n = 10;
// let n = 6;
console.log(grayCode(n));
// console.log(isPowBy2(1))