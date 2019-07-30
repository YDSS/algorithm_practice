/**
 * @file 55. Jump Game
 * @author arlenyang
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function canJump(nums) {
	// TODO: edge cases
	if (nums.length === 0) {
		return false;
	}
	if (nums.length === 1) {
		return true;
	}

	let end = nums.length - 1;
	let cur = 0;
	while (nums[cur] > 0) { // it's the condition for failure
		let maxNextRange = 0;
		let next;
		for (let i = cur + 1; i <= cur + nums[cur]; i++) {
			let nextRange = i + nums[i];
			if (nextRange >= end) {
				return true;
			}
			if (nextRange > maxNextRange) {
				maxNextRange = nextRange;
				next = i;
			}
		}
		cur = next;
	}
	
	return false;
}

// let nums = [2,3,1,1,4];
let nums = [3,2,1,0,4];
// let nums = [2];
// let nums = [];
console.log(canJump(nums));
