/**
 * @file 67. Add Binary
 * @author arlenyang
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function addBinary(a, b) {
    // make a the longer one
    if (a.length < b.length) {
        let tmp = a;
        a = b;
        b = tmp;
    }

    let i = a.length;
    // complement b with 0
    b = '0'.repeat(a.length - b.length) + b;
    let carry = 0;
    let sum = "";
    while (i >= 0) {
        let bitA = (+a[i]);
        let bitB = (+b[i]);
        let curSum = bitA + bitB + carry;
        
        switch(curSum) {
            case 3:
                carry = 1;
                sum = "1" + sum;
                break;
            case 2:
                carry = 1;
                sum = "0" + sum;
                break;
            case 1:
                carry = 0;
                sum = "1" + sum;
                break;
            case 0:
                carry = 0;
                sum = "0" + sum;
                break;
        }
        i--;
    }
    if (carry === 1) {
        sum = "1" + sum;
    }

    return sum;
}

a = "11", b = "1"
// a = "1010", b = "1011"
// a = "101101", b = "111"

console.log(addBinary(a, b));