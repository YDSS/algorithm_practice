/**
 * @file Given an array nums and a value val, remove all instances of that value in-place and return the new length.
 *
 * Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 *
 * The order of elements can be changed. It doesn't matter what you leave beyond the new length.
 *
 * @author arlenyang
 */

function swap(arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

/**
 * T(n)worse = O(n^2), T(n)best = O(n)
 * S(n) = O(1)
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement2(nums, val) {
    if (!nums.length) {
        return 0;
    }

    let len = nums.length;
    let curIdex = 0;
    while (curIdex < len) {
        if (nums[curIdex] !== val) {
            curIdex++;
        } else {
            let i = curIdex;
            while (val === nums[++i]) {}
            if (nums[i] == null) {
                break;
            }
            swap(nums, curIdex, i);
            curIdex++;
        }
    }

    return curIdex; // notice that curIndex is already in the finial position, no need to plus 1
}

/**
 * sort the nums first, then find the part which every element equals val,
 *  and move them to the end
 * T(n) = O(nlogn), assume use quick sorting
 * S(n) = O(1)
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums, val) {
    // sort nums
    nums.sort((a, b) => {
        return a - b;
    });
    let len = nums.length;
    let start = 0;
    let end;

    while (nums[start] !== val && start < len) {
        // find the start of the part stores elements equaled val
        start++;
    }
    end = start;
    while (nums[++end] === val && end < len) {} // find the end of the part stores elements equaled val
    for (let i = end; i < nums.length; i++) {
        swap(nums, start, end);
        start++;
        end++;
    }

    return start;
}

// let nums = [3,2,2,3];
// let val = 3;
// let nums = [2, 3, 4, 5];
// let val = 1;
let nums = [2, 3, 3, 2, 10, 3, 4, 4, 5, 3];
let val = 3;
console.log(removeElement(nums, val));
console.log(nums);
