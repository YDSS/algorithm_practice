/**
 * @file 220. Contains Duplicate III
 * @author arlenyang
 */

/**
 * slide window solution,
 *  conditions:
 *  1. |i - j| <= k,
 *  2. |nums[i] - nums[j]| <= t
 * 
 *  create a map to obtain the nums in the window, when add a new number, check if it satisfies condition 2 with every number in the window.
 *  but check the whole window is very inefficient, cause the k is very large. we can just check num belongto [nums[j] - t, nums[j]], as we have a hashmap, it would take O(t)
 * 
 *  further more, we can deduce from condition 2 => |nums[i]/t - nums[j]/t| <= 1. if we put nums[i]/t as key into map, then we just need to check nums[j] - 1 and nums[j] + 1, which reduce O(t) to O(1). But we also need check the real num in map which is the value of entity, is truely less than t when reduce nums[j]
 * 
 *  there is another very important observation, if we have two dup nums in window, it'll always satisfy conditions cause |nums[i] - nums[j]| == 0, and t can not be less than 0. Thus the window will not concern about dup nums cause if it has, just means the conditions are satisfied and we should return true
 * 
 * T(n) = O(n)
 * S(n) = O(n)
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
function containsNearbyAlmostDuplicate(nums, k, t) {
    let n = nums.length;
    if (n === 0 || t < 0 || (k === 0 && t > 0)) {
        return false;
    }   
    // slide window
    let window = new Map();
    let t1 = Math.max(1, t); // t == 0 will makes nums[i] / t fail
    let i = 0;
    let j = 1;
    // put the first num into window
    window.set(Math.floor(nums[0] / t1), nums[0]);

    while (j < n) {
        // j reach the bound of window, move i
        if (j - i > k) {
            // remove the first num of window 
            window.delete(Math.floor(nums[i] / t1));
            i++;
        } 
        else {
            // add new num into window
            let tmp = Math.floor(nums[j] / t1);
            // console.log(i, j, tmp)
            // console.log(window)
            // just need to check nums adjacent to it
            let checkList = [tmp - 1, tmp, tmp + 1];
            // console.log(checkList)
            for (let k = 0; k < checkList.length; k++) {
                if (window.has(checkList[k]) && Math.abs(window.get(checkList[k]) - nums[j]) <= t) {
                    return true;
                }
            }
            window.set(Math.floor(nums[j] / t1), nums[j]);
            j++;
        }
    }

    return false;
}

nums = [1,2,3,1], k = 3, t = 0
// nums = [1,0,1,1], k = 1, t = 2
// nums = [1,5,9,1,5,9], k = 2, t = 3
// nums = [2,1], k = 1, t = 1

console.log(containsNearbyAlmostDuplicate(nums, k, t));