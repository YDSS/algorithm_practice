/**
 * @file sortest path problem
 * @author arlenyang
 */

import Queue from "../../queue/SequenceQueue";

const graph = [
    [{index: 1, dist: 1}, {index: 3, dist: 1}], // v0
    [{index: 4, dist: 1}, {index: 3, dist: 1}], // v1
    [{index: 0, dist: 1}, {index: 5, dist: 1}], // v2
    [{index: 2, dist: 1}, {index: 5, dist: 1}, {index: 6, dist: 1}, {index: 4, dist: 1}], // v3
    [{index: 6, dist: 1}], // v4
    [], // v5
    [{index: 5, dist: 1}] // v6
];

/**
 * find sortest path
 * @param graph fake adacency list with two dimension array, had initialized
 * @param n number of vertex
 * @param start start vertex
 */
export default function getSortestPath(graph: Array<Array<any>>, n, start) {
    // initialize queue
    let queue = new Queue(n);
    // table for recording
    let table = [];
    table[start] = {dist: 0, path: start};
    // enter the start vertex
    queue.enter(start);

    while (!queue.isEmpty()) {
        let v = queue.leave();
        // update dist and path of w adjacent to v
        graph[v].map(w => {
            let index = w.index;
            let dist = w.dist;

            if (!table[index]) {
                table[index] = {
                    dist: Number.POSITIVE_INFINITY,
                    path: null,
                };
            }

            if (table[index].dist > dist) {
                table[index].dist = dist;
                table[index].path = index;
            }
            queue.enter(index);
        });
    }

    return function getSortestPathByVertex(v) {
        let pathStr = "";
        
    }    
}
