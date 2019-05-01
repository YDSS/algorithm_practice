/**
 * @file Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 * @author arlenyang
 */

/**
 * vertical scan
 * n = strs.length, m = min(str in strs) => T(n) = O(n * m)
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix2(strs) {
    let common = '';
    if (!strs.length) {
        return common;
    }
    // no need to know which length of str is sortest, cause the chars will be not equal when exceed the sortest str's length
    for (let i = 0; i < strs[0].length; i++) { 
        let flag = true;
        let chars = strs.map(str => str[i]);
        for (let j = 1; j < chars.length; j++) {
            if (chars[j] !== chars[0]) {
                flag = false;
                break;
            }
        }
        if (flag) {
            common += chars[0];
        }
        else {
            break;
        }
    }

    return common;
}

/**
 * binary search, T(n) = O(logn * m * n)
 * @param {*} strs 
 */
function longestCommonPrefix(strs) {
    // calc the length of the sortest str in strs
    let m = Number.POSITIVE_INFINITY;
    strs.map(str => {
        if (str.length < m) {
            m = str.length;
        }
    });
    let n = strs.length;

    if (m === 0 || n === 0) {
        return "";
    }

    let binarySearchCommonPrefix = (strs, i, j) => {
        if (i > j) {
            return "";
        }

        let mid = Math.floor((i + j) / 2);
        // console.log(`i: ${i}, j: ${j}, mid: ${mid}`);
        let flag = true; // flag is true when substring [i, mid] of every string are equal
        let match = strs[0].slice(i, mid + 1);
        for (let k = 1; k < n; k++) {
            if (strs[k].slice(i, mid + 1) !== match) {
                flag = false;
                break;
            }
        }
        if (flag) {
            if (i === j) {
                return match;
            }
            return match + binarySearchCommonPrefix(strs, mid + 1, j);
        }
        else {
            if (i === j) {
                return "";
            }
            return binarySearchCommonPrefix(strs, i, mid);
        }
    }

    return binarySearchCommonPrefix(strs, 0, m);
}

// let strs = ["flower","flow","flight"];
// let strs =["abca","abc"]
let strs = ["", ""];
console.log(longestCommonPrefix(strs));