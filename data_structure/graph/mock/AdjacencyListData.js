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
        { from: '6', to: '8`', dist: 0 },
        { from: '5', to: '8`', dist: 0 },
        { from: '5', to: '9', dist: 4 },
        { from: '7`', to: '7', dist: 3 },
        { from: '8`', to: '8', dist: 2 },
        { from: '7', to: '10`', dist: 0 },
        { from: '8', to: '10`', dist: 0 },
        { from: '9', to: '10`', dist: 0 },
        { from: '10`', to: '10', dist: 1 },
    ]
};
exports.undigraph = {
    vertexes: [
        'v1', 'v2', 'v3', 'v4', 'v5', 'v6', 'v7'
    ],
    edges: [
        { from: 'v1', to: 'v2', dist: 2 },
        { from: 'v1', to: 'v4', dist: 1 },
        { from: 'v1', to: 'v3', dist: 4 },
        { from: 'v2', to: 'v5', dist: 10 },
        { from: 'v2', to: 'v4', dist: 3 },
        { from: 'v3', to: 'v4', dist: 2 },
        { from: 'v3', to: 'v6', dist: 5 },
        { from: 'v4', to: 'v6', dist: 8 },
        { from: 'v4', to: 'v5', dist: 7 },
        { from: 'v4', to: 'v7', dist: 4 },
        { from: 'v5', to: 'v7', dist: 6 },
        { from: 'v6', to: 'v7', dist: 1 },
    ]
};
exports.eularCircularGraph = {
    vertexes: ['A', 'B', 'C', 'D', 'E', 'F'],
    edges: [
        { from: "A", to: "B" },
        { from: "A", to: "C" },
        { from: "B", to: "D" },
        { from: "B", to: "E" },
        { from: "B", to: "F" },
        { from: "B", to: "A" },
        { from: "C", to: "A" },
        { from: "C", to: "D" },
        { from: "D", to: "C" },
        { from: "D", to: "B" },
        { from: "E", to: "B" },
        { from: "E", to: "F" },
        { from: "F", to: "E" },
        { from: "F", to: "B" },
    ]
};
//# sourceMappingURL=AdjacencyListData.js.map