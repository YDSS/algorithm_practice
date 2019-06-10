/**
 * @file 42. Trapping Rain Water
 * @author arlenyang
 */

/**
 * brute force
 * T(n) = O(n^2) S(n) = O(1)
 * @param {number[]} height
 * @return {number}
 */
function trap2(height) {
    let volumn = 0;
    for (let i = 0; i < height.length; i++) {
        let maxLeft = 0;
        for (let j = i; j >= 0; j--) {
            maxLeft = Math.max(maxLeft, height[j]);
        }
        let maxRight = 0;
        for (let k = i; k < height.length; k++) {
            maxRight = Math.max(maxRight, height[k]);
        }
        let water = Math.min(maxLeft, maxRight) - height[i];
        volumn += water;
    }

    return volumn;
}

/**
 * dp
 * T(n) = O(n) S(n) = O(n)
 * @param {number[]} height
 * @return {number}
 */
function trap(height) {
    let volumn = 0;
    // calculate max left and max right of all the height first
    let maxLefts = new Array(height.length);
    maxLefts[0] = height[0];
    for (let i = 1; i < height.length; i++) {
        maxLefts[i] = Math.max(height[i], maxLefts[i - 1]);
    }
    let maxRights = new Array(height.length);
    maxRights[height.length - 1] = height[height.length - 1];
    for (let i = height.length - 2; i >= 0; i--) {
        maxRights[i] = Math.max(height[i], maxRights[i + 1]);
    }

    for (let i = 0; i < height.length; i++) {
        volumn += Math.min(maxLefts[i], maxRights[i]) - height[i];
    }

    return volumn;
}

let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
// let height = [1,0,0,0,0,0]
// let height = [0,0,0,3,0,0]
// let height = [0,0,0,0]
// let height = []
// let height = [0, 1, 0, 2, 1, 0, 3]
// let height = [4,2,3]
// let height = [5, 0, 4, 0, 3];
console.log(trap(height));
