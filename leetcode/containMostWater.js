/**
 * @file Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.
 * @author arlenyang
 */

/**
 * brute, T(n) = O(n^2), S(n) = O(1)
 * @param {number[]} height
 * @return {number}
 */
function maxArea2(height) {
    let maxArea = 0;
    let n = height.length;
    let h, k;
    
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let area = (j - i) * Math.min(height[i], height[j]);
            if (maxArea < area) {
                maxArea = area;    
                h = i;
                k = j;
            }
        }
    }

    // console.log(`maxArea: ${maxArea}`);
    // console.log(`i: ${h}, j: ${k}`);
    return maxArea;
}

/**
 * greedy
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
    let maxArea = 0;
    let n = height.length;
    let i = 0;
    let j = n - 1;
    let h, k;

    while (i < j) {
        let isLeftSmall = height[i] <= height[j];
        let area = (j - i) * (isLeftSmall ? height[i] : height[j]);

        if (maxArea < area) {
            maxArea = area;
            h = i;
            k = j;
        }

        if (isLeftSmall) {
            i++;
        }
        else {
            j--;
        }
    }

    // console.log(`maxArea: ${maxArea}`);
    // console.log(`i: ${h}, j: ${k}`)
    return maxArea;
}

let height = [1,8,6,2,5,4,8,3,7];
maxArea(height);