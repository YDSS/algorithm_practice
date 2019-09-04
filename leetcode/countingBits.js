/**
 * @file 338. Counting Bits
 * @author arlenyang
 * @solution
 *  key:

0: 0   0
1: 0   1
2: 1   0
3: 1   1
4: 1 00
5: 1 01
6: 1 10
7: 1 11

we can observe that 2 is 0 add a 1 in front of it, 3 is 1 add a 1 in front of it.
it means that we can with first 0 and 1, we can generate all the numbers by adding 1 in front of current array.

counting 1:
[0, 1] => [0, 1]
[0, 1, 2, 3] =>[0, 1] + [0 + 1, 1 + 1] => [0, 1, 1, 2]
[0, 1, 2, 3, 4, 5, 6, 7] => [0,1,1,2](0,1,2,3) + [1,2,2,3] => [0,1,1,2,1,2,2,3]

 */

/**
 * @param {number} num
 * @return {number[]}
 */
function countBits(num) {
    if (num === 0) {
        return [0];
    }
    if (num === 1) {
        return [0, 1];
    }

    let ans = [0, 1];
    let tmp = [];
    let count = num - 1; // already has 0 and 1
    while (true) {
        for (let i = 0; i < ans.length; i++) {
            tmp.push(ans[i] + 1);
            count--;
            if (count === 0) {
                ans = ans.concat(tmp);
                return ans;
            }
        }
        ans = ans.concat(tmp);
        tmp = [];
    }
}

// num = 3;
// num = 5;
// num = 0;
num = 1;
console.log(countBits(num));