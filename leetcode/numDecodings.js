/**
 * @file 91. Decode Ways
 * @author arlenyang
 *
 * @solution
 * 1. backtracing, choice one or two nums to decode, and transfer remainer of str to next recursion
 * 2. dp, assume dp[i] is ways to decode substring of s from 0 to i(including s[i]), what is special is that dp[i] has two values, dp[i][0] is ways to decode by one singal char(s[i]), and dp[i][1] is s[i] with s[i - 1], so total ways is dp[i][0] + dp[i][1]
 */

const convertMap = {
    "1": "A",
    "2": "B",
    "3": "C",
    "4": "D",
    "5": "E",
    "6": "F",
    "7": "G",
    "8": "H",
    "9": "I",
    "10": "J",
    "11": "K",
    "12": "L",
    "13": "M",
    "14": "N",
    "15": "O",
    "16": "P",
    "17": "Q",
    "18": "R",
    "19": "S",
    "20": "T",
    "21": "U",
    "22": "V",
    "23": "W",
    "24": "X",
    "25": "Y",
    "26": "Z"
};

/**
 * dp solution
 * @param {string} s
 * @return {number}
 */
function numDecodings2(s) {
    if (s.length === 1) {
        return convertMap[s[0]] ? 1 : 0;
    }
    if (s[0] === "0") {
        return 0;
    }
    // init dp memory
    let dp = new Array(s.length);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(2);
    }
    dp[0][0] = 1;
    dp[0][1] = 0;
    for (let i = 1; i < dp.length; i++) {
        // if s[i] == 0, it can't be decoded as a single char,
        // it will be decoded with s[i - 1], otherwise the string will be
        // un-decoded
        if (s[i] === "0") {
            if (+s[i - 1] > 2 || s[i - 1] === "0") {
                return 0;
            }
            dp[i][0] = 0;
            dp[i][1] = dp[i - 1][0];
        } else {
            // s[i] is decoded as a single char
            dp[i][0] = dp[i - 1][0] + dp[i - 1][1];
            if (+(s[i - 1] + s[i]) > 26 || s[i - 1] === "0") {
                dp[i][1] = 0;
            }
            // s[i] decoded with s[i - 1]
            else {
                dp[i][1] = dp[i - 1][0];
            }
        }
    }

    return dp[s.length - 1][0] + dp[s.length - 1][1];
}

/**
 * backtracing solution
 * @param {string} s
 * @return {number}
 */
function numDecodings(s) {
    if (s.length === 1) {
        return convertMap[s[0]] ? 1 : 0;
    }
    if (s[0] === "0") {
        return 0;
    }

    let count = 0;
    let isInvalid = false;
    let checkValid = str => {
        if (str.length < 2) {
            return true;
        }
        if (
            (str[0] === "0" && str[1] === "0") ||
            (str[1] === "0" && +str[0] > 2)
        ) {
            return false;
        }
        return true;
    };
    let bt = numStr => {
        if (isInvalid) {
            return;
        }
        if (!checkValid(numStr)) {
            isInvalid = true;
            return;
        }
        if (numStr.length === 0) {
            count++;
            return;
        }
        if (numStr[0] === "0") {
            return;
        } 
        bt(numStr.slice(1));
        if (numStr.length > 1 && +(numStr[0] + numStr[1]) < 27) {
            bt(numStr.slice(2));
        }
    };
    bt(s);
    return count;
}

// let s = "226";
// let s = "12";
// let s = "0"
// let s = "1220021"
let s = "01";
console.log(numDecodings(s));
