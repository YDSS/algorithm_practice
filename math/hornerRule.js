/**
 * implementation of Horner's rule
 * 
 * @author YDSS
 */


/**
 * horner' rule, T(n) = O(n)
 * 
 * @param {Array} setA set of a, from a1 to an
 * @param {Number} x
 * 
 * @return {Number} sum
 */
function horner(setA, x) {
    let n = setA.length;
    // reverse setA, let an be the first element
    let a = setA.reverse();
    let sum = 0;
    
    for (let i = 0; i < n; i++) {
        sum = a[i] + x * sum;
    }

    return sum;
}

function printPolynomial(a) {
    let print = '';
    a.forEach((item, index) => {
        print += ` + a${index}*x^${index}`;
    })
    print = print.slice(3);

    console.log(print);
}

function test() {
    let a = [0, 1, 2];
    let x = 5; 

    printPolynomial(a);
    console.log(`sum: ${horner(a, x)}`);
}
test();