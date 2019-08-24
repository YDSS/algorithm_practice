/**
 * @file 164. Maximum Gap
 * @author arlenyang
 * @solution
 *  1. sorted the nums, it's very obvious,
 *     T(n) = O(nlogn)
 *     S(n) = O(1)
 *  2. radix sort, just like sol 1 but trans space to time
 *     T(n) = O(n)
 *     S(n) = O(n)
 *  3. bucket and pigeonhole, this is a very interesting solution which need some obervations first:
 *     1. the average gap value T = (max - min) / (n - 1), it's only related to max and min of nums and free to order of nums
 *     2. if we put nums into buckets in some rules, one bucket can hold more than one nums, and if we can compare buckets not nums, then the number of comparsions will be reduced
 *     3. back to average gap, we know that only when the nums have uniform gap, e.g. [1,3,5,7,9], the average gap is what we looking for, but oberve deeper, we can find if one of gap become larger, the others will shrink. following the example above, change 3 to 2, then [1,2,5,7,9], the gap between 2 and 5 is 3 now, larger than T = 2.
 *
 *      In the case above, we treat every num as a bucket. if we got a mount of buckets like [1,2] [5,7], [9], the gap is bucket[i].min - bucket[i - 1].max
 *
 *      from solution 3 of https://leetcode.com/problems/maximum-gap/solution/
 *
 */

/**
 * T(n) = O(n)
 * S(n) = O(n)
 * @param {number[]} nums
 * @return {number}
 */
function maximumGap(nums) {
    let n = nums.length;
    if (n < 2) {
        return 0;
    }
    // get min and max
    let max = Number.NEGATIVE_INFINITY;
    let min = Number.POSITIVE_INFINITY;
    // O(n)
    for (let i = 0; i < n; i++) {
        if (nums[i] > max) {
            max = nums[i];
        }
        if (nums[i] < min) {
            min = nums[i];
        }
    }
    // calc average gap value, at least 1, cause a bucket at least have 1 elem
    let t = Math.max(1, Math.floor((max - min) / (n - 1)));
    let bucketNum = Math.floor((max - min) / t);
    let buckets = Array.from(
        {
            length: bucketNum + 1
        },
        () => {
            return {
                used: false,
                min: Number.POSITIVE_INFINITY,
                max: Number.NEGATIVE_INFINITY
            };
        }
    );
    // put every num into corresponding bucket, O(n)
    for (let i = 0; i < n; i++) {
        let index = Math.floor((nums[i] - min) / t);
        buckets[index].used = true;
        buckets[index].min = Math.min(nums[i], buckets[index].min);
        buckets[index].max = Math.max(nums[i], buckets[index].max);
    }
    let maxGap = 0;
    let prevMax = buckets[0].max;
    // check gaps between buckets
    for (let i = 1; i < buckets.length; i++) {
        if (!buckets[i].used) {
            continue;
        }
        if (buckets[i].min - prevMax > maxGap) {
            maxGap = buckets[i].min - prevMax;
        }
        prevMax = buckets[i].max;
    }

    return maxGap;
}

// nums = [3, 6, 9, 1];
// nums = [9,10,2,5,12,35]
// nums = [10]
nums = [1,1,1,1]
console.log(maximumGap(nums));
