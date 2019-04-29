/**
 * @file adjacency list data
 * @author arlenyang
 */

export const unweightedGraph = [
    [1, 3], // v0
    [4, 3], // v1
    [0, 5], // v2
    [2, 4, 5, 6], // v3
    [6], // v4
    [], // v5
    [5], // v6
];

export const weightedGraph = [
    [{index: 1, dist: 2}, {index: 3, dist: 1}], // v0
    [{index: 4, dist: 10}, {index: 3, dist: 3}], // v1
    [{index: 0, dist: 4}, {index: 5, dist: 5}], // v2
    [{index: 2, dist: 2}, {index: 5, dist: 8}, {index: 6, dist: 4}, {index: 4, dist: 2}], // v3
    [{index: 6, dist: 6}], // v4
    [], // v5
    [{index: 5, dist: 1}] // v6
];

export const weightedGraphWithNeg = [
    [{index: 1, dist: 2}, {index: 3, dist: 1}], // v0
    [{index: 4, dist: -10}, {index: 3, dist: 3}], // v1
    [{index: 0, dist: 4}, {index: 5, dist: 5}], // v2
    [{index: 2, dist: 2}, {index: 5, dist: 8}, {index: 6, dist: 4}, {index: 4, dist: 2}], // v3
    [{index: 6, dist: 6}], // v4
    [], // v5
    [{index: 5, dist: 1}] // v6
];