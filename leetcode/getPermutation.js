/**
 * @file 60. Permutation Sequence
 * @author arlenyang
 * @solution
 * 1. if we list all the permutations in order, we can observe that we can group them by number on the left, e.g.
 *  n: 3, k: 3
 *  1,2,3    group 0
 *  1,3,2
 *  2,1,3    group 1
 *  2,3,1
 *  3,1,2    group 2
 *  3,2,1 
 * 
 *  every group has (n - 1)! permutations
 *  and k can be translated to the order in one specific group => idx(group index) = (k - 1) / mumsOfGroup, which is 1 in the case
 *  mumsOfGroup is (n - 1)!, in the case above, it's 2, means each group has 2 permutations,
 *  
 *  and the k in the next group is: k = k - idx * numsOfGroup, which is remove the groups before the current group
 *  2,1,3   <- k = 0
 *  2,3,1   
 * 
 *  recursively to do it, stop when k == 0 or we get the full permutation, 
 *  
 */

// n = 3, k = 5

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
function getPermutation(n, k) {
    let counter = 1;
    let permutation = [];
    let preAdded;
    let prePickedNum;

    while (true) {
        if (counter === k) {
            // fill up other spaces left with a asec order
            // [2, 1, ]
            fillRemains(permutation, n); 
            break;
        }
        if (counter < k) {
            // should add
            // find the minimum unused num in the list, return -1 if the last num is the largest one
            let min = findMinLargerUnusedNum(permutation, n);
            prePickedNum = permutation.length === 0 ? null : permutation[permutation.length - 1];
            // update the last num in permutation
            permutation[
                permutation.length === 0 ? 0 : permutation.length - 1
            ] = min;
            // calc nums of permutations,
            // the factorial is the num of remain in the list
            let newPermNums = calcFactorial(n - permutation.length);
            counter += newPermNums;

            preAdded = newPermNums;
        } else {
            // should back to prev one and go deeper
            // restore to the prev
            if (prePickedNum !== null) {
                permutation[
                    permutation.length === 0 ? 0 : permutation.length - 1
                ] = prePickedNum;
            }
            counter -= preAdded;
            permutation.push(findMinUnsedNum(permutation, n));
            let newPermNums = calcFactorial(n - permutation.length);
            counter += newPermNums;
        }
    }
    return permutation.join("");
}

function findMinLargerUnusedNum(permutation, n) {
    let len = permutation.length;
    if (len === 0) {
        return 1;
    }
    let target = permutation[len - 1];
    let map = {}; // hashtable extra space
    for (let i = 0; i < len - 1; i++) {
        map[permutation[i]] = true;
    }
    for (let i = 1; i <= n - target; i++) {
        if (!map[target + i]) {
            return target + i; // it will always find the ans
        }
    }
}

function findMinUnsedNum(permutation, n) {
    let len = permutation.length;
    if (len === 0) {
        return 1;
    }
    let map = {}; // hashtable extra space
    for (let i = 0; i < len; i++) {
        map[permutation[i]] = true;
    }
    for (let i = 1; i <= n; i++) {
        if (!map[i]) {
            return i;
        }
    }
}

function fillRemains(permutation, n) {
    let len = permutation.length;
    if (len === 0) {
        return;
    }
    let remainNum = n - len;
    let map = {}; // hashtable extra space
    for (let i = 0; i < len; i++) {
        map[permutation[i]] = true;
    }     
    for (let i = 1, count = 0; i <= n && count < remainNum; i++) {
        if (!map[i]) {
            permutation.push(i);
            count++;
        }
    }
}

// calculate n!
function calcFactorial(n) {
    // non-recursion for more speed
    let ret = 1;
    while (n > 1) {
        ret *= n--;
    }
    return ret;
}

function getPermutation2(n, k) {
    let list = new Array(n);
    let fact = 1; 
    for (let i = 1; i <= n; i++) {
        list[i - 1] = i;
        fact *= i;
    }

    let permutation = "";
    let count = n;
    let idx;
    while (k > 0 && list.length > 0) {
        fact /= count;
        idx = Math.floor((k - 1) / fact);
        let num = list.splice(idx, 1);
        permutation += num;

        k = k - fact * idx;
        count--;
    }

    return permutation;
}

let n = 5;
let k = 1;
console.log(getPermutation2(n, k))