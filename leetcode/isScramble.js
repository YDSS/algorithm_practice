/**
 * @file 87. Scramble String
 * @author arlenyang
 */

/**
 * backtracing
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
function isScramble(s1, s2) {
    if (s1 === s2) {
        return true;
    }
    if (s1.length === 1) {
        return false;
    }
    let len = s1.length;
    for (let i = 1; i < len; i++) {
        // check s1's substring
        if (
            isScramble(s1.slice(0, i), s2.slice(0, i)) &&
            isScramble(s1.slice(i), s2.slice(i))
        ) {
            return true;
        }
        let rotate = `${s1.slice(i)}${s1.slice(0, i)}`;
        // check s1 when rotated between (0, i - 1) and (i, len)
        if (rotate === s2) {
            return true;
        }
        let pivotIndex = len - i;
        if (
            isScramble(
                rotate.slice(0, pivotIndex),
                s2.slice(0, pivotIndex)
            ) &&
            isScramble(rotate.slice(pivotIndex), s2.slice(pivotIndex))
        ) {
            return true;
        }
    }

    return false;
}

/**
 * backtracing with notebook
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
function isScramble(s1, s2) {
    // init memo, which is a three-dimension array, memo[i][j] means start and end index of substring of s1 and s2,
    // sub of memo[i][j][sub] is a substring of s1 split by (i, j), why storing it is that s1 substring may change
    // when rotate s1 in one pivot, so memo[i][j] is a map
    let memo = new Array(s1.length + 1);
    for (let i = 0; i < memo.length; i++) {
        memo[i] = new Array(s1.length + 1);
    }
    for (let i = 0; i < memo.length; i++) {
        for (let j = 0; j < memo[0].length; j++) {
            memo[i][j] = {};
        }
    }
    // console.log(memo)

    let bt = (i, j, sub) => {
        // console.log(i, j, memo[i][j]);
        if (memo[i][j][sub] != null) {
            // console.log(`hit memo ${i},${j},${sub}`);
            return memo[i][j][sub];
        }
        if (sub === s2.slice(i, j)) {
            memo[i][j][sub] = true;
            return memo[i][j][sub];
        }
        if (j - i === 1) {
            memo[i][j][sub] = false;
            return memo[i][j][sub];
        }
        for (let k = i + 1, kInSub = 1; k < j; k++, kInSub++) {
            // check s1's substring
            if (bt(i, k, sub.slice(0, kInSub)) && bt(k, j, sub.slice(kInSub))) {
                memo[i][j][sub] = true;
                return memo[i][j][sub];
            }
            let rotate = `${sub.slice(kInSub)}${sub.slice(0, kInSub)}`;
            // check s1 when rotated between (0, i - 1) and (i, len)
            if (rotate === s2) {
                memo[i][j][rotate] = true;
                return memo[i][j][rotate];
            }
            // pivot changed when rotated
            let pivotIndex = j - k + i;
            // pivot in sub, which start from 0
            let pInSub = pivotIndex - i;
            if (
                bt(i, pivotIndex, rotate.slice(0, pInSub)) &&
                bt(pivotIndex, j, rotate.slice(pInSub))
            ) {
                memo[i][j][rotate] = true;
                return memo[i][j][rotate];
            }
        }

        memo[i][j][sub] = false;
        return memo[i][j][sub];
    };

    let ret = bt(0, s1.length, s1);
    // console.log(memo);

    return ret;
}

// let s1 = "great",
//     s2 = "rgeat";
// let s1 = "eat", s2 = "tae";
// let s1 = "abcde", s2 = "caebd";
let s1 = "ccabcbabcbabbbbcbb",
    s2 = "bbbbabccccbbbabcba";
console.log(isScramble(s1, s2));
