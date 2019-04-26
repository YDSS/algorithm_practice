/**
 * @file Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
 * @author arlenyang
 */

/**
 * T(n) = O(n), s(n) = O(1)
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) { 
        return false;
    }    
    let str = "" + x;
    let i = 0;
    let j = str.length - 1;
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

let x = 1231;
console.log(isPalindrome(x))