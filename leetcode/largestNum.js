/**
 * @file 179. Largest Number
 * @author arlenyang
 */

/**
 * sorted solution, O(nlogn)
 * @param {number[]} nums
 * @return {string}
 */
function largestNumber(nums) {
    // convert num to str
    nums = nums.map(num => "" + num);
    // sort nums with custom comparsion
    nums.sort((a, b) => {
        return +`${b}${a}` - +`${a}${b}`;
    });

    let ret = nums.join("");
    // check if the ret is 00000...
    if (ret[0] === "0") return "0";
    return ret;
}

let nums = [3,30,34,5,9]
// let nums = [0,0,0,0,0]
// let nums = [0,0,1,0,0]
console.log(largestNumer(nums))
