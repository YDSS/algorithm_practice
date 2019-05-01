/**
 * @file implementation of prim algorithm
 * @author arlenyang
 */

import AdjacencyMatrix from "../AdjacencyMatrix";
import { undigraph } from "../mock/AdjacencyListData";

function prim(graph: {
    vertexes: Array<string | number>;
    edges: Array<{
        from: string | number;
        to: string | number;
        dist: number;
    }>;
}, start: number|string) {
    // init adjacency matrix
    let adjacencyMatrix = new AdjacencyMatrix(graph.vertexes, graph.edges);
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
    let sv: {vertex: string|number, dist: number}|null;
    while (sv = findUnknownShortestVertex()) {
        table[sv.vertex].known = true;

        let adjacentVs = matrix[sv.vertex];
        Object.keys(adjacentVs).map(w => {
            let dist = adjacentVs[w]
            if (!table[w].known && dist < table[w].dist) {
                table[w].dist = dist;
                table[w].path = sv.vertex;
            }
        })
    }    

    return table;
}

let table = prim(undigraph, 'v1');
console.log(table);