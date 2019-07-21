/**
 * @file Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*'.
 *  '.' Matches any single character.
 *  '*' Matches zero or more of the preceding element
 * @author arlenyang
 */

/**
 * not correct yet
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
function isMatch2(s, p) {
    const asterisk = "*";
    const dot = ".";
    // head and tail cursors of s
    let j = 0;
    // head and tail cursor of p
    let k = 0;
    let matched = true;
    let isSymbolComb = false; // when encounter .*, the match process is over

    while (k < p.length) {
        console.log(`j: ${j}`);
        console.log(`k: ${k}`);
        console.log("----");
        // first check str before the expression
        while (j < s.length && k < p.length && s[j] === p[k]) {
            j++;
            k++;
        }
        if (j === s.length && k === p.length) {
            break;
        }

        // not match before special symbol comes
        if (p[k] !== asterisk && p[k] !== dot) {
            if (p[k + 1] === asterisk) {
                k += 2;
                continue;
            } else {
                matched = false;
                break;
            }
        }

        // check when .*
        if (p[k] === dot && p[k + 1] === asterisk) {
            isSymbolComb = true;
            // cause .* will match all the left of s,
            // so if p has other chars those not .* or its repeat, it'll not match
            // if it has, the match is over and it's matched
            if (k < p.length - 2) {
                let tag = 0; // 0 means ., 1 means *
                while (k < p.length) {
                    if (p[k] !== asterisk && p[k] !== dot) {
                        matched = false;
                        break;
                    } else {
                        tag = p[k] === dot ? 0 : 1;
                    }
                    k++;
                }

                if (tag === 0) {
                    matched = false;
                }
            }
            break;
        }
        // check pattern when it's dot, just skip it
        if (p[k] === dot) {
            j++;
            k++;
        }
        // check pattern when it's asterisk
        else {
            let repeatChar = p[k - 1];
            let count = 0;
            let m = j - 1;

            while (s[m] === repeatChar) {
                m++;
                count++;
            }
            // not repeat
            if (count === 1) {
                matched = false;
                break;
            }

            if (count > 1) {
                j = j + count - 1;
                // handle the edge case: s = aaa p = a*a,
                //  should back one step to cover char after *
                if (count > 2 && p[k + 1] === repeatChar) {
                    j--;
                }
            }
            k++;
        }
    }

    if (j < s.length && !isSymbolComb) {
        matched = false;
    }

    return matched;
}

/**
 * recursion, brute
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
function isMatch3(s, p) {
    // console.log(`s: ${s}, p: ${p}`)
    if (p.length === 0) {
        return s.length === 0;
    }

    if (p[0] === "*") {
        return false;
    }

    let firstMatch = p[0] === s[0] || (s[0] != null && p[0] === ".");
    if (p[1] === "*") {
        return (
            (firstMatch && isMatch(s.slice(1), p)) || // * as a repeat
            isMatch(s, p.slice(2))
        ); // ignore *
    } else {
        return firstMatch && isMatch(s.slice(1), p.slice(1));
    }
}

/**
 * recursion with memory
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
function isMatch(s, p) {
    // initialize memory
    let memo = new Array(s.length);
    for (let i = 0; i < s.length + 1; i++) {
        memo[i] = new Array(p.length + 1);
    }

    let ret = dp(0, 0, s, p);
    return ret;

    function dp(i, j, s, p) {
        // console.log(`s: ${s}, p: ${p}`)
        // console.log(`i: ${i}, j: ${j}`)
        if (memo[i][j] != null) {
            console.log("hit", i, j);
            return memo[i][j];
        }

        if (p.length === 0) {
            return (memo[i][j] = s.length === 0);
        }

        if (p[0] === "*") {
            return (memo[i][j] = false);
        }

        let firstMatch = p[0] === s[0] || (s[0] != null && p[0] === ".");
        if (p[1] === "*") {
            return (memo[i][j] =
                (firstMatch && dp(i + 1, j, s.slice(1), p)) || // * as a repeat
                dp(i, j + 2, s, p.slice(2))); // ignore *
        } else {
            return (memo[i][j] =
                firstMatch && dp(i + 1, j + 1, s.slice(1), p.slice(1)));
        }
    }
}

// dp solution
function isMatch4(s, p) {
    // TODO: edge cases
    // init dp memory, (p.len + 1, s.len +1)
    let dp = Array.from({ length: s.length + 1 }, x =>
        Array.from({ length: p.length + 1 }, y => false)
    );
    // assume that it's matching when s is empty and so is p
    dp[0][0] = true;
    // init the first row and column
    // the first row means p is empty, which is absolutely false, so no need to init
    // the first column means s is empty, only 'x*x*...' can match empty s, so
    for (let j = 2; j <= p.length; j++) {
        if (p[j - 1] === "*") {
            dp[0][j] = dp[0][j - 2];
        }
    }
    for (let i = 1; i <= s.length; i++) {
        for (let j = 1; j <= p.length; j++) {
            // if one of status transfer to current status is true, then current is true
            if (s[i - 1] === p[j - 1] || p[j - 1] === ".") {
                dp[i][j] = dp[i - 1][j - 1];
            }
            else {
                if (p[j - 1] === "*") {
                    // because p[0] can not be *, so p[j - 2] == p[-1] will never occur
                    dp[i][j] = dp[i][j - 2]; // ignore * and char preceding *
                    if (s[i - 1] === p[j - 2] || p[j - 2] === '.') {
                        dp[i][j] = dp[i][j] || dp[i - 1][j];
                    }
                }
            }
        }
    }
    return dp[s.length][p.length];
}

// let str = 'aab';
// let pattern = 'a*b';
// let str = "mississippi";
// let pattern = "mis*is*p*.";
// let pattern = "mis*is*ip*.";
// let str = "aab";
// let pattern = "c*a*b";
// let str = "";
// let pattern = ".*";
// let str = "aab";
// let pattern = "a*ab";
// let str = "aaa";
// let pattern = "ab*a*c*a";

console.log(isMatch4(str, pattern));
