"use strict";
/**
 * @file adjacency list data
 * @author arlenyang
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.unweightedGraph = [
    [1, 3],
    [4, 3],
    [0, 5],
    [2, 4, 5, 6],
    [6],
    [],
    [5],
];
exports.weightedGraph = [
    [{ index: 1, dist: 2 }, { index: 3, dist: 1 }],
    [{ index: 4, dist: 10 }, { index: 3, dist: 3 }],
    [{ index: 0, dist: 4 }, { index: 5, dist: 5 }],
    [{ index: 2, dist: 2 }, { index: 5, dist: 8 }, { index: 6, dist: 4 }, { index: 4, dist: 2 }],
    [{ index: 6, dist: 6 }],
    [],
    [{ index: 5, dist: 1 }] // v6
];
exports.weightedGraphWithNeg = [
    [{ index: 1, dist: 2 }, { index: 3, dist: 1 }],
    [{ index: 4, dist: -10 }, { index: 3, dist: 3 }],
    [{ index: 0, dist: 4 }, { index: 5, dist: 5 }],
    [{ index: 2, dist: 2 }, { index: 5, dist: 8 }, { index: 6, dist: 4 }, { index: 4, dist: 2 }],
    [{ index: 6, dist: 6 }],
    [],
    [{ index: 5, dist: 1 }] // v6
];
exports.eventNodeGraph = {
    vertexes: ['1', '2', '3', '4', '5', '6', '6`', '7', '7`', '8', '8`', '9', '10`', '10'],
    edges: [
        { from: '1', to: '2', dist: 3 },
        { from: '1', to: '3', dist: 2 },
        { from: '2', to: '4', dist: 3 },
        { from: '2', to: '6`', dist: 0 },
        { from: '3', to: '6`', dist: 0 },
        { from: '3', to: '5', dist: 1 },
        { from: '6`', to: '6', dist: 2 },
        { from: '4', to: '7`', dist: 0 },
        { from: '6', to: '7`', dist: 0 },
        { from: '5', to: '8`', dist: 0 },
        { from: '5', to: '9', dist: 4 },
        { from: '7`', to: '7', dist: 3 },
        { from: '8`', to: '8', dist: 2 },
        { from: '7', to: '10`', dist: 0 },
        { from: '8`', to: '10`', dist: 0 },
        { from: '9', to: '10`', dist: 0 },
        { from: '10`', to: '10`', dist: 1 },
    ]
};
//# sourceMappingURL=AdjacencyListData.js.map