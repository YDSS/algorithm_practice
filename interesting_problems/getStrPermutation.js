/**
 * @file get all permutation of a string, assume that no duplicates in the string
 * @author arlenyang
 */

function getStrPermutation(str) {
    let permutation = [];
    let recursion = (i) => {
        if (i === 0) {
            permutation.push(str[i]);
            return;
        }

        recursion(i - 1);
        // insert str[i] to all the current permutation
        let tmp = [];
        for (let j = 0; j < permutation.length; j++) {
            let p = permutation[j];
            for (let k = 0; k < p.length + 1; k++) {
                tmp.push(p.slice(0, k) + str[i] + p.slice(k));
            }
        }
        permutation = tmp;
    }
    recursion(str.length - 1);
    return permutation;
}

let str = 'abc';
console.log(getStrPermutation(str));