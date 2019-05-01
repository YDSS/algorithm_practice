"use strict";
/**
 * @file implementation of prim algorithm
 * @author arlenyang
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AdjacencyMatrix_1 = require("../AdjacencyMatrix");
const AdjacencyListData_1 = require("../mock/AdjacencyListData");
function prim(graph, start) {
    // init adjacency matrix
    let adjacencyMatrix = new AdjacencyMatrix_1.default(graph.vertexes, graph.edges);
    // adjacencyMatrix.print();
    let matrix = adjacencyMatrix.matrix;
    // init table
    let table = {};
    for (let i = 0; i < graph.vertexes.length; i++) {
        table[graph.vertexes[i]] = {
            known: false,
            dist: Number.POSITIVE_INFINITY,
            path: null
        };
    }
    // find unknown shortest dist of vertex
    let findUnknownShortestVertex = () => {
        let vertex;
        let min = Number.POSITIVE_INFINITY;
        Object.keys(table).map(v => {
            if (!table[v].known && table[v].dist < min) {
                vertex = v;
                min = table[v].dist;
            }
        });
        if (!vertex) {
            return null;
        }
        return { vertex, dist: min };
    };
    // init start vertex
    table[start].dist = 0;
    let sv;
    while (sv = findUnknownShortestVertex()) {
        table[sv.vertex].known = true;
        console.log(`v: ${sv.vertex}, known: ${table[sv.vertex].known}`);
        let adjacentVs = matrix[sv.vertex];
        Object.keys(adjacentVs).map(w => {
            let dist = adjacentVs[w];
            if (!table[w].known && dist < table[w].dist) {
                table[w].dist = dist;
                table[w].path = sv.vertex;
            }
        });
    }
    return table;
}
let table = prim(AdjacencyListData_1.undigraph, 'v1');
console.log(table);
//# sourceMappingURL=prim.js.map