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
        return;
    }
    if (s1.length === 1) {
        return false;
    }
    for (let i = 1; i < s1.length - 1; i++) {
        let swaped = `${s1.slice(i)}${s1.slice(0, i)}`;
        if (swaped === s2) {
            // check swap s1
            return true;
        }
        for (let j = 1; j < swaped.length - 1; j++) {
            if (
                isScramble(swaped.slice(0, j), s2.slice(0, j)) &&
                isScramble(swaped.slice(j), s2.slice(j))
            ) {
                return true;
            }
        }
        if (
            isScramble(s1.slice(0, i), s2.slice(0, i)) &&
            isScramble(s1.slice(i), s2.slice(i))
        ) {
            // check s1's substring
            return true;
        }
    }

    return false;
}

// let s1 = "great", s2 = "rgeat";
let s1 = "eat", s2 = "tae";
// let s1 = "eat", s2 = "tea";
console.log(isScramble(s1, s2));
