/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(nums, target) {
    let ltTargetNums = nums.filter(num => num <= target);
    let ret = [];
    
    ltTargetNums.map((num, leftI) => {
        let other = target - num;
        let rightI;
        if ((rightI = ltTargetNums.findIndex(ltNum => ltNum === other)) > -1) {
            ret = [leftI, rightI];
        } 
    });

    return ret;
};

console.log(twoSum([2, 7, 11, 15], 18)); 