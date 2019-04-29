"use strict";
/**
 * @file implementation of find weighted graph sortest path by Dijkstra algorithm
 * @author arlenyang
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AdjacencyListData_1 = require("../mock/AdjacencyListData");
/**
 * implementation of dijkstra
 * @param graph
 * @param start start vertex
 */
function dijkstra(graph, start) {
    let n = graph.length; // number of vertex
    // init table
    let table = [];
    for (let i = 0; i < n; i++) {
        table[i] = {
            dist: Number.POSITIVE_INFINITY,
            path: null,
            known: false,
        };
    }
    // init the start vertex, prepare for loop
    table[start].dist = 0;
    table[start].path = -1; // means it's the start vertex
    // find sortest dist of unknown vertex in the table
    //  return -1 when all vertexes are known
    let findSortestUnknownVertex = () => {
        let index = -1;
        let min = Number.POSITIVE_INFINITY;
        table.map((v, i) => {
            if (!v.known && v.dist < min) {
                index = i;
                min = v.dist;
            }
        });
        return index;
    };
    let sv = findSortestUnknownVertex();
    while (sv !== -1) {
        table[sv].known = true;
        graph[sv].map(v => {
            // update unknown vertex adjacent to sv
            if (!v.known
                && (table[v.index].dist > table[sv].dist + v.dist)) {
                table[v.index].dist = table[sv].dist + v.dist;
                table[v.index].path = sv;
            }
        });
        sv = findSortestUnknownVertex();
    }
    console.log(table);
    return function getSortestPathByVertex(v, pathStr) {
        if (table[v].path === -1) {
            return `path: v${v} -> ${pathStr}`;
        }
        return getSortestPathByVertex(table[v].path, `v${v} -> ${pathStr}${pathStr === "end" ? (", total: " + table[v].dist) : ""}`);
    };
}
let getSortestPathByVertex = dijkstra(AdjacencyListData_1.weightedGraph, 0);
console.log(getSortestPathByVertex(5, 'end'));
//# sourceMappingURL=dijkstra.js.map