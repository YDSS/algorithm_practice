/**
 * @file 57. Insert Interval
 * @solution
 * 1. iteratively from left to right, find the start and end range of continuous intervals needed merge, and the start index, end index of them, then merge them and insert the merged interval
 * 2. insert the new interval into place in intervals where is ordered by start range, then from start, merge two adjacent interval till the end
 */

/**
 * merge two way
 * T(n) = O(n)
 * S(n) = O(1)
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
function insert(intervals, newInterval) {
    if (intervals.length === 0) {
        return [newInterval];
    }

    // insert newInterval into intervals, ordered by the start range
    for (let i = 0; i < intervals.length + 1; i++) {
        if (i === intervals.length) {
            intervals.push(newInterval);
            break;
        }
        if (intervals[i][0] >= newInterval[0]) {
            intervals.splice(i, 0, newInterval);
            break;
        }
    }
    let mergeAdjacentTwoIntervals = (i, intervals) => {
        let mergedInterval = [];
        mergedInterval[0] = Math.min(intervals[i][0], intervals[i + 1][0]);
        mergedInterval[1] = Math.max(intervals[i][1], intervals[i + 1][1]);
        intervals.splice(i, 2, mergedInterval);
    };

    let isAdjacentTwoOverlapped = (i, intervals) => {
        let smallStartInterval, bigStartInterval;
        if (intervals[i][0] >= intervals[i + 1][0]) {
            bigStartInterval = intervals[i];
            smallStartInterval = intervals[i + 1];
        } else {
            smallStartInterval = intervals[i];
            bigStartInterval = intervals[i + 1];
        }
        return smallStartInterval[1] >= bigStartInterval[0];
    };

    // merge the two adjacent intervals
    let i = 0;
    // length of intervals will be change when merged, so pick it up and update it when merge occurs
    let end = intervals.length - 1;
    while (i < end) {
        if (isAdjacentTwoOverlapped(i, intervals)) {
            mergeAdjacentTwoIntervals(i, intervals);
            end--;
        } else {
            i++;
        }
    }
    return intervals;
}

// function mergeAdjacentTwoIntervals(i, intervals) {
//     let mergedInterval = [];
//     mergedInterval[0] = Math.min(intervals[i][0], intervals[i + 1][0]);
//     mergedInterval[1] = Math.max(intervals[i][1], intervals[i + 1][1]);
//     intervals.splice(i, 2, mergedInterval);
// }

// function isAdjacentTwoOverlapped(i, intervals) {
//     // cause the adjacent two intervals are sorted, just need compare ending range
//     return intervals[i][1] >= intervals[i + 1][0];
// }

/**
 * iterative way
 * T(n) = O(n)
 * S(n) = O(1)
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
function insert2(intervals, newInterval) {
    // edge cases:
    if (intervals.length === 0) {
        return [newInterval];
    }
    if (newInterval[1] < intervals[0][0]) {
        intervals.unshift(newInterval);
        return intervals;
    }
    if (newInterval[0] > intervals[intervals.length - 1][1]) {
        intervals.push(newInterval);
        return intervals;
    }

    let mergeIndex = []; // [0] => begining index, [1] => ending index
    let mergeRange = []; // [0] => begining, [1] => ending
    let mergeIntervalsInRange = (intervals, mergeIndex, mergeRange) => {
        let len = mergeIndex[1] - mergeIndex[0] + 1;
        intervals.splice(mergeIndex[0], len, mergeRange);
    };

    let [newBegin, newEnd] = newInterval;
    // find begining for merge
    for (let i = 0; i < intervals.length; i++) {
        if (newBegin >= intervals[i][0] && newBegin <= intervals[i][1]) {
            mergeIndex[0] = i;
            mergeRange[0] = intervals[i][0];
            break;
        } else if (newBegin < intervals[i][0]) {
            mergeIndex[0] = i;
            mergeRange[0] = newBegin;
            break;
        }
    }
    // find ending for merge
    for (let i = 0; i < intervals.length; i++) {
        if (newEnd >= intervals[i][0] && newEnd <= intervals[i][1]) {
            mergeIndex[1] = i;
            mergeRange[1] = intervals[i][1];
            break;
        } else if (newEnd < intervals[i][0]) {
            mergeIndex[1] = i - 1;
            mergeRange[1] = newEnd;
            break;
        }
        // handle when ending is larger than the last interval
        if (i === intervals.length - 1) {
            mergeIndex[1] = i;
            mergeRange[1] = newEnd;
        }
    }
    // console.log(mergeIndex, mergeRange)
    mergeIntervalsInRange(intervals, mergeIndex, mergeRange);

    return intervals;
}

// let intervals = [[1, 3], [6, 9]],
//     newInterval = [2, 5];
// let intervals = [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]],
//     newInterval = [4, 8];
// let intervals = [[3, 5], [6, 7], [8, 10], [12, 16]],
//     newInterval = [1, 2];
// let intervals = [[3, 5], [6, 7], [8, 10], [12, 16]],
//     newInterval = [17, 20];
// let intervals = [[3,4], [5, 6], [8, 10], [12, 16]],
//     newInterval = [1, 7];
// let intervals = [[3,4], [5, 6], [8, 10], [12, 16]],
//     newInterval = [1, 17];
let intervals = [[0,5],[9,12]],
 newInterval = [7,16];
console.log(insert2(intervals, newInterval));
