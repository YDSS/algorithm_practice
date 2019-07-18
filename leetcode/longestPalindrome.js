/**
 * @file 5. Longest Palindromic Substring
 * @author arlenyang
 * 
 * @solution
 * 1. brute force, find all the combinations of substrings, check it's palidromic or not, T(n) = O(n^3), S(n) = O(1) (not recursion)
 * 2. find the center, solution 3 below, T(n) = O(n^2), S(n) = O(1)
 * 3. dp, solution 2 below, T(n) = o(n^2), S(n) = O(n^2)
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
    };

    // find the only one char center
    for (p = 0; p < n; p++) {
        // O(n)
        i = p;
        j = p;

        while (
            isCharExisted(i - 1) &&
            isCharExisted(j + 1) &&
            str[i - 1] === str[j + 1]
        ) {
            // Tmax = O(n)
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
    for (p = 0; p < n; p++) {
        // O(n - 1)
        i = p;
        j = p + 1;

        if (str[i] === str[j]) {
            // means this two char can be the mirror
            while (
                isCharExisted(i - 1) &&
                isCharExisted(j + 1) &&
                str[i - 1] === str[j + 1]
            ) {
                // Tmax = O(n)
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
 * T(n) = O(n^2) S(n) = O(n^2)
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

    // initialize arr, 0 means it's not the palindrome str, 1 means opposite
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            stat[i][j] = 0; 
        }
    }

    // initialize f(i, i) and f(i, i+1)
    for (let i = 0; i < n; i++) {
        stat[i][i] = 1;
        if (i < n - 1) {
            if (str[i] === str[i + 1]) {
                stat[i][i + 1] = 1;
            }
        }
    }

    for (let k = 2; k < n; k++) {
        for (let i = 0; i < n; i++) {
            let j = i + k;
            if (j > n - 1) continue;

            if (stat[i + 1][j - 1] && str[i] === str[j]) {
                stat[i][j] = 1;
            }
        }
    }

    let h, t;
    let maxLen = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            if (stat[i][j] === 1 && j - i + 1 > maxLen) {
                maxLen = j - i + 1;
                h = i;
                t = j;
            }
        }
    } 

    // printTwoDimensionArray(stat);
    // console.log(`maxLen: ${maxLen}`)
    // console.log('the longest palindrome str is')
    return str.slice(h, t + 1)

    function printTwoDimensionArray(arr) {
        let len = arr.length;

        for (let i = 0; i < len; i++) {
            let s = "";
            for (let j = 0; j < len; j++) {
                s += `${arr[i][j]} `;
            }
            console.log(s);
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
    };

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

let str = "";
// let str = "a";
// let str = "babad";
// let str = "abb";
// let str = "dacbbcalfa";
// let str = "abcdsasdfghjkldbca";
console.log(longestPalindrome(str));
