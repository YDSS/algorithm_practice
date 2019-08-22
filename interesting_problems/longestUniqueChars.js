/**
 * @file get longest substring which has n unique characters
 *
 *     example:
 *
 *      1. s: aabbcdcccca   n: 3,  ret: bbcdcccc
 * @author arlenyang
 */

/**
 *
 * @param {string} s
 * @param {number} n
 */
function longestUniqueChars(s, n) {
    if (s.length === 0 || n === 0) {
        return s;
    }

    // key => char, value => last index the char appeared in s
    let map = new Map();
    // slide window
    let i = 0;
    let j = 1;
    let max = 0;
    map.set(str[0], 0);

    while (j < str.length) {
        if (!map.has(str[j]) && map.size === n) {
            if (j - i > max) {
                max = j - i;
            }
            // i moves forward, get the last index of str[i] to remove it in map
            let minIndex = 0;
            for (let index of map) {
                if (index < minIndex) {
                    minIndex = index;
                }
            }
            map.delete(str[minIndex]);
            i = minIndex + 1;
        }
        else {
            // add a new char or update index of existed char
            map.set(str[j], j);
            j++;
        }
    }

    return max;
}
