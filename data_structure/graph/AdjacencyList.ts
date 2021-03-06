/**
 * @file implementation of adjacency list for digraph
 * @author arlenyang
 */

import LinkedList from "../linearList/singleLinkedList";
import ListNode from "../linearList/ListNode";
import Edge from "./Edge";

export interface AdjacencyListNode extends ListNode {
    data: Edge,
    next: AdjacencyListNode
}

export default class AdjacencyList {
    private table: { [s: string]: LinkedList };
    private vertexes: Array<string|number>;
    /**
     * @constructor
     * @param vertexes vertex set, i.e [0, 1] or ['v0', 'v1']
     * @param edges edges set, i.e [{from: 0, to: 1, dist: 2],]
     */
    constructor(
        vertexes: Array<string | number>,
        edges: Array<Edge>
    ) {
        this.initialize(vertexes, edges);
        this.vertexes = vertexes;
    }

    private initialize(
        vertexes: Array<string | number>,
        edges: Array<Edge>
    ) {
        // construct vertex list
        this.table = {};
        vertexes.map(v => {
            this.table[v] = new LinkedList();
        });
        // insert all the edges
        edges.map(pair => {
            let { from } = pair;
            if (!this.table[from]) {
                throw new Error(`vertex ${from} is not in vertexes`);
            }
            this.table[from].insert(pair);
        });
    }

    public get(vertex: string | number): LinkedList {
        return this.table[vertex];
    }
    
    public getVertexes(): Array<string|number> {
        return this.vertexes;
    }

    public print(): void {
        let str;
        Object.keys(this.table).map(v => {
            str = `${v}: `;
            let iterator = this.table[v].iterator();
            let edge: Edge;
            let node: AdjacencyListNode;
            while ((node = iterator.next().value)) {
                edge = node.data;
                str += `${edge.to}${edge.dist ? ("(" + edge.dist + ")") : ""} -> `;
            }
            console.log(str.replace(/\s\-\>\s$/, ""));
        });
    }
}

// let vertexes = [0, 1, 2, 3, 4, 5, 6];
// let edges = [
//     {from: 0, to: 1, dist: 2},
//     {from: 0, to: 3, dist: 1},
//     {from: 1, to: 4, dist: 10},
//     {from: 1, to: 3, dist: 3},
//     {from: 2, to: 0, dist: 4},
//     {from: 2, to: 5, dist: 5},
//     {from: 3, to: 2, dist: 2},
//     {from: 3, to: 5, dist: 8},
//     {from: 3, to: 4, dist: 2},
//     {from: 3, to: 6, dist: 4},
//     {from: 4, to: 6, dist: 6},
//     {from: 6, to: 5, dist: 1},
// ]
// let adjList = new AdjacencyList(vertexes, edges);
// adjList.print();
// let v0adj = adjList.get(0);
// let iterator = v0adj.iterator();
// let str = "0 -> ";
// let i;
// while (i = iterator.next().value) {
//     let { data } = i;
//     str += `${data.to}(${data.dist}) -> `
// }
// console.log(str.slice(0, str.length - 3));
