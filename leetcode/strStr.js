/**
 * @file Implement strStr().
 *  Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 *
 * @author arlenyang
 */

/**
 * T(n)worst = O(n^2), s(n) = O(1)
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStr(haystack, needle) {
    if (!needle.length) {
        return 0;
    }
    if (!haystack.length) {
        return -1;
    }
    if (haystack.length < needle.length) {
        return -1;
    }
    if (haystack === needle) {
        return 0;
    }

    let index = 0;
    // no need to inspect substring in haystack when reach the boundary that
    //  the length of rest of haystack is smaller than needle's
    let range = haystack.length + 1 - needle.length; 
    let j;
    for (; index < range; index++) {
        if (haystack[index] !== needle[0]) {
            continue;
        }

        for (
            j = 1;
            haystack[index + j] === needle[j] && j < needle.length;
            j++
        ) {}
        if (j === needle.length) {
            break;
        }
    }

    return index === range ? -1 : index;
}

let haystack = "hello";
let needle = "ll";
// let haystack = "ababc";
// let needle = "abc";
// let haystack = "aaaaa"
// let needle = "bba"
// let haystack = "mississippi";
// let needle = "issip";
console.log(strStr(haystack, needle));
