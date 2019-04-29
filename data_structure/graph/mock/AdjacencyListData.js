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
//# sourceMappingURL=AdjacencyListData.js.map