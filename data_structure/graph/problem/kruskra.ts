/**
 * @file implementation of kruskal algorithm
 * @author arlenyang
 */

import { undigraph } from "../mock/AdjacencyListData";
import DisjointSet from "../../disjointSet/DisjointSet";

function kruskal(
    graph: {
        vertexes: Array<string | number>;
        edges: Array<{
            from: string | number;
            to: string | number;
            dist: number;
        }>;
    },
    start: number | string
) {
    let { vertexes, edges } = graph;
    let n = vertexes.length;
    // init disjoint set
    let sets = new DisjointSet(vertexes);
    let acceptedEdges = [];
    let acceptedCount = 0;
    let discardMap: { [s: string]: boolean } = {}; // record discard edge, include accepted edge, which should not be found

    let getEdgeTag = edge => {
        // spell a key to edge, make sure the same edge got the same key when their from and to attr are reversed
        let { from, to } = edge;
        let first;
        let last;
        for (let i = 0; i < Math.max(from.length, to.length); i++) {
            if (from[i].charCodeAt() < to[i].charCodeAt()) {
                first = from;
                last = to;
                break;
            }
            if (from[i].charCodeAt() > to[i].charCodeAt()) {
                first = to;
                last = from;
                break;
            }
        }
        return `(${first}, ${last})`;
    };
    let findShortestEdge = () => {
        let min = Number.POSITIVE_INFINITY;
        let shortestEdge;
        edges.map(edge => {
            if (!discardMap[getEdgeTag(edge)] && edge.dist < min) {
                min = edge.dist;
                shortestEdge = edge;
            }
        });

        return shortestEdge;
    };

    while (acceptedCount < n - 1) {
        let shortestEdge = findShortestEdge();
        console.log(discardMap)
        let { from, to } = shortestEdge;
        if (sets.find(from) !== sets.find(to)) {
            // tag the edge accepted
            acceptedEdges.push(shortestEdge);
            acceptedCount++;
            sets.union(from, to); // union the two sets where they are belonged to
        }
        discardMap[getEdgeTag(shortestEdge)] = true;
    }

    return acceptedEdges;
}

let acceptedEdges = kruskal(undigraph, "v1");
acceptedEdges.map(edge => {
    console.log(`(${edge.from}, ${edge.to})`)
});
