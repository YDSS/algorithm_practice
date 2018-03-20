/**
 * @file 
 * @author YDSS
 */

let { binarySearchR } = require('../data_structure/search/binarySearch');

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 * @complexity T(n) = O(n*n) S(n) = O(1)
 */
let twoSum = function(nums, target) {
    let ltTargetNums = nums.filter(num => num <= target);
    let ret = [];
    
    ltTargetNums.map((num, leftI) => {
        let other = target - num;
        let rightI;
        if ((rightI = ltTargetNums.findIndex(ltNum => ltNum === other)) > -1) {
            ret = [leftI, rightI];
        } 
    });

    return ret;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 * @conditions nums must be ordered
 * @complexity T(n) = O(n*log2n) S(n) = O(1)
 */
let twoSum2 = function (nums, target) {
    console.log(nums);
    let i = 0;
    let ret = [];
    // for (let i = 0; i < nums.length; i++) {
    while (i < nums.length) {
        let add1 = nums[i];
        let assumedAdd2 = target - add1;
        let findRet = binarySearchR(nums, assumedAdd2, i, nums.length - 1);
        console.log(`add1: ${i}, add2: ${findRet}`)

        if (findRet !== -1) {
            ret = [i, findRet];
            break;
        }

        i++;
    } 

    return ret;
}

let nums = [3, 2, 4];
let ret = twoSum2(nums, 6); 
console.log(ret);