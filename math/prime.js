/**
 * funcs relating to prime
 * 
 * @author YDSS
 */

function isPrime(x) {
    let sqrtX = Math.ceil(Math.sqrt(x));
    let i = 2;    
    let flag = true;

    while(i <= sqrtX) {
        if (Number.isInteger(x / i)) {
            flag = false; 
            break;
        }

        i++;
    }

    return flag;
}

/**
 * get the smallest prime larger than x 
 * @param {*} x 
 */
function nextPrime(x) {
    let ret = x;
    while(!isPrime(ret)) {
        ret++;
    }

    return ret;
}

module.exports = {
    nextPrime
}

// function test() {
//     console.log(nextPrime(2));
// }
// test();