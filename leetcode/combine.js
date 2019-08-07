/**
 * @file 77. Combinations
 * @author arlenyang
 */

/**
 * bactracing
 * T(n) = O(n!)
 * S(n) = O(n)
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
function combine(n, k) {
    let ans = [];
    if (k > n) {
        return ans
    }

    let bt = (i, combinations) => {
        combinations.push(i);
        if (combinations.length === k) {
            ans.push([...combinations])
            combinations.pop();
            return;
        }

        for (let j = i + 1; j <= n; j++) {
            bt(j, combinations);
        }
        combinations.pop();
    }
    let tmp = []; // s = O(n);
    for (let i = 1; i <= n - k + 1; i++) {
        bt(i, tmp);
    }

    return ans;
}

// n = 4, k = 2
// n = 4, k = 1
// n = 1, k = 2
n = 2, k = 2
console.log(combine(n, k));