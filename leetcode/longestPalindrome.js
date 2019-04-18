/**
 * @file Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
 * @author
 */
/**
 * find the center char of a palindrome substring, which is the symetry of the str
 * T(n) = O(n^2) S(n) = O(1)
 * 
 * @param {string} str
 * @return {string}
 */
function longestPalindrome3(str) {
    let n = str.length;
    let maxLen = 0;
    let p;
    let i, j;
    let h, k; // head and tail pointer of the current longest palindrome substring

    let isCharExisted = i => {
        return str[i] != null;
    }

    // find the only one char center
    for (p = 0; p < n; p++) { // O(n)
        i = p;
        j = p;

        while (isCharExisted(i - 1) && isCharExisted(j + 1) && str[i - 1] === str[j + 1]) { // Tmax = O(n)
            i--;
            j++;
        }
        // console.log(`one i: ${i}, j: ${j}`);
        let len = j - i + 1;
        if (len > maxLen) {
            h = i;
            k = j;
            maxLen = len;
        }
    }

    // find two chars center
    for (p = 0; p < n; p++) { // O(n - 1)
        i = p;
        j = p + 1;

        if (str[i] === str[j]) { // means this two char can be the mirror
            while (isCharExisted(i - 1) && isCharExisted(j + 1) && str[i - 1] === str[j + 1]) { // Tmax = O(n)
                i--;
                j++;
            }
            // console.log(`two i: ${i}, j: ${j}`);
            let len = j - i + 1;
            if (len > maxLen) {
                h = i;
                k = j;
                maxLen = len;
            }
        }
    }

    // console.log(`maxLen: ${maxLen}`);
    return str.slice(h, k + 1);
}

/**
 * DP
 * f(i, j) = f(i + 1, j - 1) && str[i] === str[j]
 * @param {string} str
 * @return {string}
 */
function longestPalindrome(str) {
    let n = str.length;
    // init two dimension array
    let stat = new Array(n); 
    for (let i = 0; i < n; i++) {
        stat[i] = new Array(n);
    }
    for (let i = 0; i < n; i++) {
        stat[i][i] = true;
    }

    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            if (stat[i + 1][j - 1] && str[i] === str[j]) {
                stat[i][j] = true;
            }
        } 
    }
}

/**
 * tracing back
 * @param {string} s
 * @return {string}
 */
function longestPalindrome2(str) {
    let n = str.length;
    let maxLen = 0;
    let h, k;

    let isPalindromeStr = (left, right) => {
        if (left === right) {
            return true;
        }

        let i = left;
        let j = right;
        let ret = true;

        while (i <= j) {
            if (str[i] !== str[j]) {
                ret = false;
                break;
            }

            i++;
            j--;
        }

        return ret;
    }

    getMaxLen(0, 0);
    console.log(`maxLen: ${maxLen}`);
    return str.slice(h, k + 1);

    function getMaxLen(i, j) {
        if (i > j) {
            return;
        }
        if (i >= n || j >= n) {
            return;
        }

        getMaxLen(i + 1, j);
        getMaxLen(i, j + 1);
        if (isPalindromeStr(i, j)) {
            let thisLen = j - i + 1;
            if (thisLen > maxLen) {
                h = i;
                k = j;
                maxLen = thisLen;
            }
        }
    }
}

// let str = "";
// let str = "a";
// let str = "babad";
// let str = "abb";
// let str = "dacbbcalfa";
// let str = "abcdasdfghjkldbca";
console.log(longestPalindrome(str));