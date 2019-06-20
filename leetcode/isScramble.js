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
        let rotateIndex = len - i;
        if (
            isScramble(rotate.slice(0, rotateIndex), s2.slice(0, rotateIndex)) &&
            isScramble(rotate.slice(rotateIndex), s2.slice(rotateIndex))
        ) {
            return true;
        }
    }

    return false;
}

// let s1 = "great", s2 = "rgeat";
// let s1 = "eat",
//     s2 = "tae";
let s1 = "ccabcbabcbabbbbcbb", s2 = "bbbbabccccbbbabcba"
console.log(isScramble(s1, s2));
