"use strict";
/**
 * @file implementation of weighted graph with neg weight edge, find sortest path
 * @author arlenyang
 */
Object.defineProperty(exports, "__esModule", { value: true });
const SequenceQueue_1 = require("../../queue/SequenceQueue");
const AdjacencyListData_1 = require("../mock/AdjacencyListData");
function getWeightedGraphWithNegSortestPath(graph, start) {
    let n = graph.length;
    // init table
    let table = [];
    for (let i = 0; i < n; i++) {
        table[i] = {
            dist: Number.POSITIVE_INFINITY,
            path: null
        };
    }
    // init queue
    let queue = new SequenceQueue_1.default(n);
    // init the start vertex
    table[start].dist = 0;
    table[start].path = -1; // means it's a start vertex
    queue.enter(start);
    while (!queue.isEmpty()) {
        let v = queue.leave();
        graph[v].map(w => {
            let { index, dist } = w;
            if (table[index].dist > table[v].dist + dist) {
                table[index].dist = table[v].dist + dist;
                table[index].path = v;
                if (!queue.traverse(item => item === index).some(item => item)) {
                    queue.enter(index);
                }
            }
        });
    }
    return function getSortestPathByVertex(v, pathStr) {
        if (table[v].path === -1) {
            return `path: v${v} -> ${pathStr}`;
        }
        return getSortestPathByVertex(table[v].path, `v${v} -> ${pathStr}${pathStr === "end" ? (", total: " + table[v].dist) : ""}`);
    };
}
let getSortestPathByVertex = getWeightedGraphWithNegSortestPath(AdjacencyListData_1.weightedGraphWithNeg, 0);
console.log(getSortestPathByVertex(5, 'end'));
//# sourceMappingURL=weightGraphWithNegSortestPath.js.map