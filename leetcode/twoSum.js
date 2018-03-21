/**
 * @file twoSum problem is actually a search problem, the key is how to find a proper
 *  search solution which has less time complexity. In this case, hash map is best
 * @author YDSS
 */

let { binarySearchR } = require('../data_structure/search/binarySearch');

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 * @condition not working when nums not ordered
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
 * @condition not working when nums not ordered
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

/**
 * use hash table to reduce look up for complement to O(1),
 *  but create this hash table first
 * 
 * T(n) = O(2n) = O(n), create hash table (O(n)) + traverse nums (O(n)) 
 * S(n) = O(n)
 * @param {*} nums 
 * @param {*} target 
 */
let twoSum3 = function (nums, target) {
    let ret = [];
    let map = {};

    // create two-way hash table
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = i;
    }
    // walk nums, find the complement of cur num
    let i = 0;
    while (i < nums.length) {
        let complement = target - nums[i];
        if (map[complement] != null && map[complement] !== i) {
            ret[0] = i;
            ret[1] = map[complement];
            
            break;
        }

        i++;
    }

    return ret;
}

/**
 * 
 * like twoSum3, but only traverse nums once, while we iterate nums and insert num into hash map,
 *  we also look back to check if current element's complement already exits in hash map
 * 
 * T(n) = O(n) 
 * S(n) = O(n)
 * 
 * @param {*} nums 
 * @param {*} target 
 */
let twoSum4 = function (nums, target) {
    let ret = [];
    let map = {};
    let i = 0;
    while (i < nums.length) {
        let addend = target - nums[i];
        if (map[addend] != null) {
            ret[1] = i;
            ret[0] = map[addend];

            break;
        }

        map[nums[i]] = i;
        i++;
    }

    return ret;
}

let nums = [3, 2, 6, 2, 5];
let ret = twoSum3(nums, 4); 
console.log(ret);