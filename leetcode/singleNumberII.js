/**
 * @file 137. Single Number II
 * @author arlenyang
 * 
 * https://www.cnblogs.com/grandyang/p/4263927.html
 */

/**
 * T(n) = O(n)
 * S(n) = O(1)
 * bitmap solution:
 *  create a 32-bit int, sum all the nums by digit. we can observe that if a num appear 3-time, and in some digit it has a 1, then this 3 sum is 3, if it has a 0, then this 3 sum is 0. 
 * 
 *  From this observation, we can see in any digit, sum all of the nums, sum = a * 3 + b * 0 + (digit of the single number) = 3 * a + single's digit. a is nums those has 1 in this digit, b is nums those has 0 in this digit. so (sum % 3) is the single number's digit
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
    let ans = 0;
    // 32-bit int
    for (let i = 0; i < 32; i++) {
        let sum = 0;
        // sum by digit
        for (let j = 0; j < nums.length; j++) {
            // get num in current digit
            sum += (nums[j] >> i) & 1;
        }
        // add single number's digit to ans
        ans |= (sum % 3) << i;
    }   

    return ans;
}

// nums = [2,2,3,2];
nums = [0,1,0,1,0,1,99]
console.log(singleNumber(nums));