/**
 * @file 56. Merge Intervals
 *  not only return merged, but also return the intersections when merged
 *  https://leetcode.com/discuss/interview-experience/301164/facebook-onsite-interview-experience-2019 round 1
 * @author arlenyang
 */

/**
 * T(n) = O(nlogn), S(n) = O(n)
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {
    if (intervals.length < 2) {
        return intervals;
    }
    // sort by start range cause no specific condition declared
    intervals.sort((a, b) => {
        return a[0] - b[0];
    });
    // let intersection = [];
    let deleteItem = i => {
        // soft delete, hard delete will cost O(n)
        if (intervals[i][0] !== Number.NEGATIVE_INFINITY) {
            intervals[i].unshift(Number.NEGATIVE_INFINITY);
        }
    };
    for (let i = 1; i < intervals.length; i++) {
        // no intersection
        if (intervals[i - 1][1] < intervals[i][0]) {
            continue;
        } else {
            if (intervals[i][0] === intervals[i - 1][1]) {
                // just adjacent to each other
                intervals[i] = [intervals[i - 1][0], intervals[i][1]];
                deleteItem(i - 1);
            } else if (intervals[i][1] < intervals[i - 1][1]) {
                // include
                // intersection.push([intervals[i][0], intervals[i][1]]);
                intervals[i] = [intervals[i - 1][0], intervals[i - 1][1]];
                deleteItem(i - 1);
            } else {
                // crossing
                // intersection.push([intervals[i][0], intervals[i - 1][1]]);
                intervals[i] = [intervals[i - 1][0], intervals[i][1]];
                deleteItem(i - 1);
            }
        }
    }

    // console.log(intersection);
    return intervals.filter(item => {
        return item[0] !== Number.NEGATIVE_INFINITY;
    });
}

// let intervals = [[1, 10], [2, 6], [9, 12], [14, 16], [16, 17]];
// let intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
// let intervals =[[1,4],[4,5]]
// let intervals =[]
let intervals =[[1,4]]
console.log(merge(intervals));
