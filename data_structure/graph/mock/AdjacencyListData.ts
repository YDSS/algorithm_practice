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

export let eventNodeGraph = {
    vertexes: ['1', '2', '3', '4', '5', '6', '6`', '7', '7`', '8', '8`', '9', '10`', '10'],
    edges: [
        {from: '1', to: '2', dist: 3},
        {from: '1', to: '3', dist: 2},
        {from: '2', to: '4', dist: 3},
        {from: '2', to: '6`', dist: 0},
        {from: '3', to: '6`', dist: 0},
        {from: '3', to: '5', dist: 1},
        {from: '6`', to: '6', dist: 2},
        {from: '4', to: '7`', dist: 0},
        {from: '6', to: '7`', dist: 0},
        {from: '5', to: '8`', dist: 0},
        {from: '5', to: '9', dist: 4},
        {from: '7`', to: '7', dist: 3},
        {from: '8`', to: '8', dist: 2},
        {from: '7', to: '10`', dist: 0},
        {from: '8`', to: '10`', dist: 0},
        {from: '9', to: '10`', dist: 0},
        {from: '10`', to: '10`', dist: 1},
    ]
}