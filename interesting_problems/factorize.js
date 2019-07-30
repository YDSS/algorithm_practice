/**
 * @file factorize a num, return all the factors
 * @author arlenyang
 */

function factorize(num) {
    let ret = [];
    let isNeg = num > 0;
    num = Math.abs(num);

    if (num === 0) {
        return [];
    }
    if (num === 1) {
        return [num];
    }

    let cb = num => {
        if (num === 2) {
            ret.push(num);
            return;
        }
        
        // try to divide num, range from 2 to num, if has a divisor not itself, then we split it into two num by this way, then recursion
        let d = 2;
        for (; d < num; d++) {
            if (num % d === 0) {
                break;
            } 
        }
        if (d < num) {
            cb(d);
            cb(num / d);
        }  
        else {
            ret.push(num);
        }
    }

    cb(num);
    if (isNeg) {
        ret[0] = -ret[0];
    }

    return ret;
}

// let num = 10;
let num = 50;
console.log(factorize(num))

function gcd(n1, n2) {
       
}