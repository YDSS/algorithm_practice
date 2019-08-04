/**
 * @file 136. Single Number
 * @author arlenyang
 * @solution  
 */

/**
 * using a bit number to store occurrence of one number,
 *  cause a number is only appear once or twice, if it appear twice, the bit is 0, just like the number not appear; if it appear once, the bit is 1. in the end, there is only one 1
 * 
 * the bits can only contains 64bit, if an element > 64, it will not work
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber2(nums) {
    if (nums.length === 1) return nums[0];
    
    let min = Number.POSITIVE_INFINITY;
    for (let i = 0; i < nums.length; i++) {
        if (min > nums[i]) {
            min = nums[i]
        }
    }
    if (min < 0) {
        let posMin = Math.abs(min);
        nums = nums.map(num => num + posMin);
    }
    console.log(nums)
    let bits = 0;
    for (let i = 0; i < nums.length; i++) {
        bits ^= 1 << nums[i];
    }
    console.log(bits)
    let count = 0;
    while (bits > 1) {
        bits = bits >> 1;
        count++;
    }
    return count + (min < 0 ? min : 0);
}

function singleNumber(nums) {
    if (nums.length === 0) return null;

    let ans = 0;
    for (let i = 0; i < nums.length; i++) {
        ans ^= nums[i];
    }
    
    return ans;
}

// let nums = [4,1,2,1,2];
// let nums = [0,1,2,1,2];
// let nums = [1];
// let nums = [];
let nums = [-1,-1,-2];

console.log(singleNumber(nums));