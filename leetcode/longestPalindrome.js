/**
 * Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
 *
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(str) {
    // current pointer of the traversing
    let p = 1;
    // head and tail of the current longest palindromic substring in s
    let h = 0;
    let k = 0;
    let n = str.length;
    let maxLen = 0;

    let isCharExisted = i => {
        return str[i] != null;
    };

    if (n < 2) {
        return "";
    }

    for (; p < n; p++) {
        let symcenterChar = str[p];
        console.log(`symcenter char: ${symcenterChar}`);

        // situation 1: length of palindromic string is odd, that means symcenter is one char
        if (
            isCharExisted(p - 1) &&
            isCharExisted(p + 1) &&
            str[p - 1] === str[p + 1]
        ) {
            let i = p - 2; // traverse to left to expand the palindromic string
            let j;
            for (; i >= 0; i--) {
                j = p + p - i; // symmetry
                console.log(`i: ${i}, j: ${j}`);

                if (!isCharExisted(str[j]) || str[i] !== str[j]) {
                    console.log(`the substring: ${str.slice(i + 1, j)}`);
                    if (j - i - 1 > maxLen) {
                        h = i + 1;
                        k = j - 1;
                        maxLen = j - i - 1;
                    }

                    break;
                }
            }
        }
        // situation 2: length of palindromic string is odd, that means symcenter is two same chars
        else if (
            (isCharExisted(p - 1) && str[p - 1] === symcenterChar) ||
            (isCharExisted(p + 1) && str[p + 1] === symcenterChar)
        ) {
            let i;
            let j;
            // prepare for next round
            if (isCharExisted(p - 1) && str[p - 1] === symcenterChar) {
                i = p - 2;
                j = p + 1;
            } else {
                i = p - 1;
                j = p + 2;
            }

            while (isCharExisted(i) && isCharExisted(j) && str[i] === str[j]) {
                i--;
                j++;
            }

            if (j - i + 1 > maxLen) {
                h = i;
                k = j;
                maxLen = j - i + 1;
            }
        }
    }

    return str.slice(h, k + 1);
}

// let str = "babad";
let str = "abb";
// let str = "dacbbcalfa";
console.log(longestPalindrome(str));