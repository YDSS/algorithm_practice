/**
 * @file 50. Pow(x, n)
 * @author arlenyang
 */

// multiply method without considering overflow
// T(n) = O(n)
function myPow2(x, n) {
    // TODO: edge cases
    if (x === 0) return 0;
    if (x === 1) return 1;
    if (x === -1) return isEven(n) ? 1 : -1;

    let ret = 1;
    let isNeg = n < 0;
    for (let i = 0; i < Math.abs(n); i++) {
        ret *= x;
    }
    if (isNeg) {
        ret = 1 / ret;
    }
    return ret;
}

// divide and conquar
// T(n) = O(logn)
function myPow(x, n) {
	// TODO: edge cases
    if (n === 0) return 1;
    if (n === 1) return x;
    if (n === -1) return 1 / x;
	if (x === 0) return 0;
	if (x === 1) return 1;
    if (x === -1) return isEven(n) ? 1 : -1;

    let isNeg = n < 0;
    n = Math.abs(n);
	let dc = n => {
		if (n === 1) {
			return x;
		}
        // make sure mid is even
        let isNEven = isEven(n)
        if (!isNEven) {
            n -= 1;
        }
		let mid = n / 2;
		let leftPart = rightPart = dc(mid);
		return leftPart * rightPart * (isNEven ? 1 : x);
	}
	let ret = dc(n);
	if (isNeg) {
		ret = 1 / ret;
	}
	return ret;
}

function isEven(x) {
    return x % 2 === 0;
}

// let x = 2.00000
// let n = 10
// let x = 2.10000
// let n = 3
// let x = 2.00000
// let n = -2
let x = 0.44528
let n = 0
console.log(myPow(x, n))