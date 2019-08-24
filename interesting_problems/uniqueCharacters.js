/**
 * @file give a string s and an number n, get the longest substring contains n unique characters
 *  example:
 *      1. s: aabcdcccaemf  n: 3, output: 6 => bcdccc
 * @author arlenyang
 */

/**
 * slide window
 * @param {string} s 
 * @param {number} n 
 */
function longestUniqueCharacters(s, n) {
    if (s.length === 0 || n === 0) {
        return s;
    }
    // slide window pointers
    let i = 0;
    let j = 1;
    /**
     * key => char
     * value => last index of char in s
     */
    let map = new Map();
    // init map
    map.set(s[0], 0);
    let max = 0;

    while (j < s.length) {
        // j had reached the end of current longest substring
        if (!map.has(s[j]) && map.size === n) {
            if (j - i > max) {
                max = j - i;
            }
            // move i, remove a char so that j can move forward
            let minIndex = s.length;
            // get the first index which could remove a char in map
            for (let [key, val] of map) {
                if (val < minIndex) {
                    minIndex = val;
                }
            }
            map.delete(s[minIndex]);
            i = minIndex + 1;
        }
        else {
            // update index of char existed in map, 
            // or add a new char
            map.set(s[j], j);
            j++;
        }
    }

    return max;
}

s = 'aabcdcccaemf'
// n = 3
n = 2

console.log(longestUniqueCharacters(s, n));