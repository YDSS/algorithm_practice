/**
 * @file 44. Wildcard Matching
 * @author arlenyang
 */

/**
 * dp
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
function isMatch(s, p) {
    let dp = (i, j) => {
        // console.log(i, j);
        if (j === p.length) {
            return i === s.length;
        }
        if (i === s.length) {
            if (j === p.length) {
                return true;
            }
            if (p[j] === "*") {
                return dp(i, j + 1);
            }

            return false;
        }
        if (p[j] !== "*") {
            return (s[i] === p[j] || p[j] === "?") && dp(i + 1, j + 1);
        } else {
            if (j < p.length - 1) {
                // skip consecutive *
                while (p[j + 1] === "*") {
                    j++;
                }
                return dp(i + 1, j) || dp(i, j + 1);
            }

            return dp(i + 1, j);
        }
    };
    return dp(0, 0);
}

/**
 * dp with memo
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
function isMatch2(s, p) {
    let memo = new Array(s.length + 1);
    for (let i = 0; i < memo.length; i++) {
        memo[i] = new Array(p.length + 1);
    }

    let dp = (i, j) => {
        // console.log(i, j);
        if (memo[i][j] != null) {
            // console.log("hit cache", i, j);
            // console.log(memo[i][j]);
            return memo[i][j];
        }
        if (j === p.length) {
            return (memo[i][j] = i === s.length);
        }
        if (i === s.length) {
            if (j === p.length) {
                return (memo[i][j] = true);
            }
            if (p[j] === "*") {
                return (memo[i][j] = dp(i, j + 1));
            }

            return (memo[i][j] = false);
        }
        let ans;
        if (p[j] !== "*") {
            ans = (s[i] === p[j] || p[j] === "?") && dp(i + 1, j + 1);
        } else {
            if (j < p.length - 1) {
                // skip consecutive *
                while (p[j + 1] === "*") {
                    j++;
                }
                ans = dp(i + 1, j) || dp(i, j + 1);
            } else {
                ans = dp(i + 1, j);
            }
        }
        memo[i][j] = ans;
        return ans;
    };
    return dp(0, 0);
}

// let s = "aa";
// let p = "a";
// let s = "cb";
// let p = "?a";
// let s = "adceb";
// let p = "*a*b";
// let s = "acdcb";
// let p = "a*c?b";
// let s = "aa";
// let p = "*";
// let s= "ho"
// let p = "ho**"
// let s= "hoiemdl12"
// let p = "ho***19"
let s =
    "abbabaaabbabbaababbabbbbbabbbabbbabaaaaababababbbabababaabbababaabbbbbbaaaabababbbaabbbbaabbbbababababbaabbaababaabbbababababbbbaaabbbbbabaaaabbababbbbaababaabbababbbbbababbbabaaaaaaaabbbbbaabaaababaaaabb";
let p =
    "**aa*****ba*a*bb**aa*ab****a*aaaaaa***a*aaaa**bbabb*b*b**aaaaaaaaa*a********ba*bbb***a*ba*bb*bb**a*b*bb";
// console.time("no memo");
// console.log(isMatch(s, p));
// console.timeEnd("no memo");
console.time("memo");
console.log(isMatch2(s, p));
console.timeEnd("memo");
