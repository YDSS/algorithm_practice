/**
 * @file Find subarray with given sum | Set 1 (Nonnegative Numbers)
 *  https://www.geeksforgeeks.org/find-subarray-with-given-sum/
 * @author arlenyang
 * @solution 
 *  1. naive way
 *      start from every elem, try to find a valid subsequence sum
 * 
 *      T(n) = O(n^2) at worst, O(n^2) at average
 *      S(n) = O(1)
 *  2. slide window
 *      because there are no negative numbers in the arr, so if sum of a sub sequence larger than given sum, it
 *      will have no chance to be the given sum. 
 *      slide window is very suit for contiguous subsequence
 * 
 *      T(n) = O(n) 
 *      S(n) = O(n)
 */

/**
 * slide window
 * 
 * T(n) = O(n)
 * S(n) = O(n)
 * @param {*} arr 
 * @param {*} sum 
 * @return a valid subsequence
 */
function contiguousSum(arr, sum) {
    let n = arr.length;
    let i = 0;
    let j = 1;
    let curSum = arr[0];

    while (true) {
        // move j until curSum > sum
        while (j < n && curSum < sum) {
            curSum += arr[j]; 
            j++;
        }
        console.log(i, j, curSum)
        if (curSum === sum) {
            return [i, j];
        }
        if (j === n) {
            break;
        }

        // curSum will be larger than sum if j move forward one step,
        // in this case i should move to reduce curSum
        curSum -= arr[i];
        i++;
    }

    return null;
}

// arr = [1, 4, 20, 3, 10, 5], sum = 33;
// arr = [1], sum = 33;
// arr = [1, 4, 0, 0, 3, 10, 5], sum = 7
arr = [1, 4], sum = 0

console.log(contiguousSum(arr, sum))