/**
 * @file 357. Count Numbers with Unique Digits
 * @author arlenyang
 * @solution
 *  rule: ./img/countUniqueNumbers.png. it's a combination problem, when one digit is settled, next digit has only n - 1 numbers can pick
 */

/**
 * T(n) = O(1)
 * @param {number} n
 * @return {number}
 */
function countNumbersWithUniqueDigits(n) {
    if (n === 0) {
        return 1;
    }
    // when n === 1, it has 0 - 9
    let res = 10;
    for (let i = 2; i <= n; i++) {
        if (i > 10) {
            break; 
        }
        let tmp = 9;
        for (let j = 1; j < i; j++) {
            tmp *= (10 - j);
        }
        res += tmp;
    }
    return res;
}

n = 2;
// n = 3;
// n = 5
// n = 10
// n = 12
// n = 15

console.log(countNumbersWithUniqueDigits(n))