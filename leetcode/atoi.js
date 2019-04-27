/**
 * @file String to Integer (atoi)
 * @author arlenyang
 */

const INT_MAX = Math.pow(2, 31) - 1;
const INT_MIN = -Math.pow(2, 31);   

/**
 * @param {string} str
 * @return {number}
 */
function myAtoi(str) {
    let h = 0; // head pointer of the num string
    let k; // tail pointer of the num string
    let isNeg = false;
    let num = 0;
    let charToNum = s => {
        if (s == null) {
            return -1;
        }
        return s.charCodeAt() - 48; 
    }
    let isNumber = num => {
        return num > -1 && num < 10; 
    }
    
    // remove spaces
    while (str[h] === ' ') {
        h++;
    }
    if (((str[h] === '-' || str[h] === '+') && !isNumber(charToNum(str[h + 1])))
        || ((str[h] !== '-' && str[h] !== '+') && !isNumber(charToNum(str[h])))) {
        return 0;
    }

    if (str[h] === '-') {
        isNeg = true;
        h++;
    }
    if (str[h] === '+') {
        h++;
    }
    // find the whole num string
    k = h;
    while (isNumber(charToNum(str[k]))) {
        k++;
    }
    k--;
    // sum to num
    let bit = 0;
    while (k >= h) {
        let add = charToNum(str[k]) * Math.pow(10, bit);
        if (isNeg) {
            num -= add;
        }
        else {
            num += add;
        }
        if (num >= INT_MAX) {
            num = INT_MAX;
            break;
        }
        if (num <= INT_MIN) {
            num = INT_MIN;
            break;
        }

        bit++;
        k--;
    }

    return num;
}

// let str = '42';
// let str ="   -42";
// let str = "4193 with words";
// let str = "words and 987";
// let str = "-91283472332";
// let str = "";
let str = "+1231";
console.log(myAtoi(str));