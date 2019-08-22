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

