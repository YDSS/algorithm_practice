/**
 * @file Given two integers dividend and divisor, divide two integers without using multiplication, division and mod operator.
 *  Return the quotient after dividing dividend by divisor.
 *  The integer division should truncate toward zero.
 * @author arlenyang
 */

const MAX_INT = Math.pow(2, 31) - 1;
const MIN_INT = -Math.pow(2, 31);

/**
 * T(n)worst = O(2^31)
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
function divide2(dividend, divisor) {
    if (dividend === 0) {
        return 0;
    }

    let excludeOverflow = num => {
        if (num > MAX_INT) {
            return MAX_INT;
        }
        if (num < MIN_INT) {
            return MIN_INT;
        }

        return num;
    };

    if (divisor === 1) {
        return excludeOverflow(dividend);
    }
    if (dividend === divisor) {
        return 1;
    }
    if (Math.abs(dividend) < Math.abs(divisor)) {
        return 0;
    }

    let division = 0;
    // handle sign
    let dividendSign = dividend > 0 ? 1 : -1;
    let divisorSign = divisor > 0 ? 1 : -1;
    let sign = divisorSign * dividendSign > 0 ? 1 : -1;
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);

    while (dividend >= divisor) {
        dividend -= divisor;
        division++;
    }
    // add sign
    division *= sign;
    // handle if dividend or divisor is overflowed
    return excludeOverflow(division);
}

/**
 * T(n) = O(n)
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
function divide(dividend, divisor) {
    if (dividend === 0) {
        return 0;
    }

    let excludeOverflow = num => {
        if (num > MAX_INT) {
            return MAX_INT;
        }
        if (num < MIN_INT) {
            return MIN_INT;
        }

        return num;
    };

    if (divisor === 1) {
        return excludeOverflow(dividend);
    }
    if (dividend === divisor) {
        return 1;
    }
    if (Math.abs(dividend) < Math.abs(divisor)) {
        return 0;
    }
    // handle sign
    let dividendSign = dividend > 0 ? 1 : -1;
    let divisorSign = divisor > 0 ? 1 : -1;
    let sign = divisorSign * dividendSign > 0 ? 1 : -1;
    dividendStr = Math.abs(dividend) + "";
    divisor = Math.abs(divisor);

    // remainder when cur num from dividend minus divisor
    let remainder = "";
    let divisionStr = "";
    let count;
    for (let i = 0; i < dividendStr.length; i++) {
        let curNum = +(remainder + dividendStr[i]);
        count = 0;

        if (curNum >= divisor) {
            while (curNum >= divisor) {
                curNum -= divisor;
                count++;
            }
        }
        remainder = curNum;
        divisionStr += count;
    }

    return excludeOverflow(+divisionStr * sign);
}

// let dividend = 9;
// let divisor = 5;
let dividend = 10;
let divisor = -3;
console.log(divide(dividend, divisor));
