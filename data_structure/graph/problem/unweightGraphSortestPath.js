"use strict";
/**
 * @file sortest path problem
 * @author arlenyang
 */
Object.defineProperty(exports, "__esModule", { value: true });
const SequenceQueue_1 = require("../../queue/SequenceQueue");
const AdjacencyListData_1 = require("../mock/AdjacencyListData");
/**
 * find sortest path
 * @param graph fake adacency list with two dimension array, had initialized
 * @param n number of vertex
 * @param start start vertex
 */
function getUnweightGraphSortestPath(graph, start) {
    let n = graph.length;
    // initialize queue
    let queue = new SequenceQueue_1.default(n);
    // table for recording path and dist of start vertex to all the left
    let table = [];
    // initialize table
    for (let i = 0; i < n; i++) { // O(|V|)
        table[i] = {
            dist: Number.POSITIVE_INFINITY,
            path: null,
        };
    }
    // set start vertex
    table[start].dist = 0;
    table[start].path = -1; // the start path tag 
    // enter the start vertex
    queue.enter(start);
    while (!queue.isEmpty()) { // O(|E|)
        let v = queue.leave();
        // update dist and path of w adjacent to v
        graph[v].map(w => {
            if (table[w].dist === Number.POSITIVE_INFINITY) {
                table[w].dist = table[v] + 1;
                table[w].path = v;
                queue.enter(w);
            }
        });
    }
    return function getSortestPathByVertex(v, pathStr) {
        if (table[v].path === -1) {
            return `v${v} -> ${pathStr}`;
        }
        return getSortestPathByVertex(table[v].path, `v${v} -> ${pathStr}`);
    };
}
let getSortestPathByVertex = getUnweightGraphSortestPath(AdjacencyListData_1.unweightedGraph, 3);
console.log(getSortestPathByVertex(0, 'end'));
//# sourceMappingURL=unweightGraphSortestPath.js.map