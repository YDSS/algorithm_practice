/**
 * @file 165. Compare Version Numbers
 * @author arlenyang
 */

/**
 * T(n) = O(n)
 * S(n) = O(1)
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
function compareVersion(version1, version2) {
    let v1Nums = version1.split('.')
    let v2Nums = version2.split('.')
    let i = 0;

    while (i < v1Nums.length || i < v2Nums.length) {
        let s1Num = (+v1Nums[i]) || 0
        let s2Num = (+v2Nums[i]) || 0
        if (s1Num > s2Num) return 1;
        if (s1Num < s2Num) return -1;

        i++;
    }

    return 0;
}

// version1 = "0.1", version2 = "1.1"
// version1 = "1.0.1", version2 = "1"
// version1 = "7.5.2.4", version2 = "7.5.3"
// version1 = "1.01", version2 = "1.001"
version1 = "1.0", version2 = "1.0.0"

console.log(compareVersion(version1, version2))