"use strict";
/**
 * @file implementation of adjacency list for digraph
 * @author arlenyang
 */
Object.defineProperty(exports, "__esModule", { value: true });
const singleLinkedList_1 = require("../linearList/singleLinkedList");
class AdjacencyList {
    /**
     * @constructor
     * @param vertexes vertex set, i.e [0, 1] or ['v0', 'v1']
     * @param edges edges set, i.e [{from: 0, to: 1, dist: 2],]
     */
    constructor(vertexes, edges) {
        this.initialize(vertexes, edges);
    }
    initialize(vertexes, edges) {
        // construct vertex list       
        this.table = {};
        vertexes.map(v => {
            this.table[v] = new singleLinkedList_1.default();
        });
        // insert all the edges
        edges.map(pair => {
            let { from, to, dist } = pair;
            this.table[from].insert({
                index: to,
                dist,
            });
        });
    }
    get(vertex) {
        return this.table[vertex];
    }
}
exports.default = AdjacencyList;
let vertexes = [0, 1, 2, 3, 4, 5, 6];
let edges = [
    { from: 0, to: 1, dist: 2 },
    { from: 0, to: 3, dist: 1 },
    { from: 1, to: 4, dist: 10 },
    { from: 1, to: 3, dist: 3 },
    { from: 2, to: 0, dist: 4 },
    { from: 2, to: 5, dist: 5 },
    { from: 3, to: 2, dist: 2 },
    { from: 3, to: 5, dist: 8 },
    { from: 3, to: 4, dist: 2 },
    { from: 3, to: 6, dist: 4 },
    { from: 4, to: 6, dist: 6 },
    { from: 6, to: 5, dist: 1 },
];
let adjList = new AdjacencyList(vertexes, edges);
let v0adj = adjList.get(0);
let iterator = v0adj.iterator();
let str = "0 -> ";
let i;
while (i = iterator.next().value) {
    let { data } = i;
    str += `${data.index}(${data.dist}) -> `;
}
console.log(str.slice(0, str.length - 3));
//# sourceMappingURL=AdjacencyList.js.map