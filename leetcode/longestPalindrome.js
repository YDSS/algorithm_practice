/**
 * @file Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
 * @author
 */

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
let str = "abcdasdfghjkldbcba";
console.log(longestPalindrome(str));