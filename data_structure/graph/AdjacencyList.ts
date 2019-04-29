/**
 * @file implementation of adjacency list for digraph
 * @author arlenyang
 */

import LinkedList from "../linearList/singleLinkedList";
import Node from "../linearList/ListNode";

export default class AdjacencyList {
    private table: {[s: string ]: LinkedList};
    /**
     * @constructor
     * @param vertexes vertex set, i.e [0, 1] or ['v0', 'v1']
     * @param edges edges set, i.e [{from: 0, to: 1, dist: 2],]
     */
    constructor(vertexes: Array<string|number>, edges: Array<{from: string|number, to: string|number, dist: number}>) {
        this.initialize(vertexes, edges);          
    }

    private initialize(vertexes: Array<string|number>, edges: Array<{from: string|number, to: string|number, dist: number}>) {
        // construct vertex list       
        this.table = {};
        vertexes.map(v => {
            this.table[v] = new LinkedList();
        })
        // insert all the edges
        edges.map(pair => {
            let { from, to, dist } = pair;
            this.table[from].insert({
                index: to,
                dist,
            });
        });
    }

    public get(vertex: string|number): LinkedList{
        return this.table[vertex];
    }
}

let vertexes = [0, 1, 2, 3, 4, 5, 6];
let edges = [
    {from: 0, to: 1, dist: 2},
    {from: 0, to: 3, dist: 1},
    {from: 1, to: 4, dist: 10},
    {from: 1, to: 3, dist: 3},
    {from: 2, to: 0, dist: 4},
    {from: 2, to: 5, dist: 5},
    {from: 3, to: 2, dist: 2},
    {from: 3, to: 5, dist: 8},
    {from: 3, to: 4, dist: 2},
    {from: 3, to: 6, dist: 4},
    {from: 4, to: 6, dist: 6},
    {from: 6, to: 5, dist: 1},
]
// let adjList = new AdjacencyList(vertexes, edges);
// let v0adj = adjList.get(0);
// let iterator = v0adj.iterator();
// let str = "0 -> ";
// let i;
// while (i = iterator.next().value) {
//     let { data } = i;
//     str += `${data.index}(${data.dist}) -> `
// }
// console.log(str.slice(0, str.length - 3));