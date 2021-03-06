/**
 * @file 53. Maximum Subarray
 * @author arlenyang
 */

/**
 * divide and conquer solution
 * T(n) = O(n), S(n) = O(1)
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray2(nums) {
    if (nums.length === 1) {
        return nums[0];
    }

    let getCrossMax = (start, mid, end) => {
        let sum = 0;
        let left = Number.NEGATIVE_INFINITY;
        for (let i = mid - 1; i >= start; i--) {
            sum += nums[i];
            if (sum > left) {
                left = sum;
            }
        }
        sum = 0;
        let right = Number.NEGATIVE_INFINITY;
        for (let i = mid + 1; i <= end; i++) {
            sum += nums[i];
            if (sum > right) {
                right = sum;
            }
        }

        return (left > 0 ? left : 0) + (right > 0 ? right : 0) + nums[mid];
    };

    let dc = (start, end) => {
        if (start >= end) {
            return nums[start];
        }

        let mid = Math.floor((start + end) / 2);
        let leftMax = dc(start, mid - 1);
        let rightMax = dc(mid + 1, end);
        let crossMax = getCrossMax(start, mid, end);

        return Math.max(crossMax, Math.max(leftMax, rightMax));
    };

    return dc(0, nums.length - 1);
}

/**
 * back tracing
 * T(n) = O(n?), S(n) = O(n)
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray3(nums) {
    let len = nums.length;
    let max = Number.NEGATIVE_INFINITY;
    // init note book
    let state = new Array(len);
    for (let i = 0; i < len; i++) {
        state[i] = new Array(len);
    }

    let sumRange = (start, end) => {
        let sum = 0;
        for (let i = start; i <= end; i++) {
            sum += nums[i]; 
        }

        return sum;
    }
    let bt = (i, j) => {
        if (i === len || j === len) {
            return;
        }
        if (state[i][j] != null) {
            return state[i][j];
        }

        let sum = sumRange(i, j);
        state[i][j] = state[j][i] = sum;

        if (sum > max) {
            max = sum;
        }
        if (i < j) {
            bt(i + 1, j);
        }
        bt(i, j + 1);
    }
    bt(0, 0);

    return max;
}

/**
 * dp solution. dp[i] means maximal sum of continuous numbers in nums whose index from 0 to i,
 *  dp[i] has two ways to reach, pick the larger one
 *  1. dp[i - 1] + num[i]
 *  2. nums[i]
 * 
 * the solution below is a brief one of this thought
 * T(n) = O(n), S(n) = O(1)
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
    let max = Number.NEGATIVE_INFINITY;
    let curMax = 0;
    nums.map(n => {
        curMax = Math.max(n, curMax + n);
        if (curMax > max) {
            max = curMax;
        }
    })

    return max;
}

function maxSubArray5(nums) {
	let dp = new Array(nums.length);
    dp[0] = nums[0];
    let subArr = [[dp[0]]];
	
	for (let i = 1; i < nums.length; i++) {
		if (dp[i - 1] + nums[i] > nums[i]) {
            dp[i] = dp[i - 1] + nums[i]; // join num[i] into the current maximum subarray
            subArr.push([...subArr[i - 1], nums[i]])
		}
		else {
            dp[i] = nums[i]; // set new begining of maximum subarray
            subArr.push([nums[i]])
		}
    }
    // find the maximum in the array
    let max = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < dp.length; i++) {
        if (max < dp[i]) {
            max = dp[i]
        }
    }
    let maxIndex = dp.findIndex(item => item === max)
    console.log(subArr)
    console.log(subArr[maxIndex])
	return max;
}


let nums = [-2,1,-3,4,-1,2,1,-5,4]
// let nums =[8,-2,-4,-1,-8,3,8,8,3,4,2,-9,-1,-3,-6,8,-3,9] 
// let nums = [1, 2];
// let nums = [-2, -1];
// let nums = [-1,0,-2]

console.log(maxSubArray5(nums));
// console.log(maxSubArray(nums));
