/**
 * @file implementation of adjacency list for digraph
 * @author arlenyang
 */
import LinkedList from "../linearList/singleLinkedList";
export default class AdjacencyList {
    private table;
    /**
     * @constructor
     * @param vertexes vertex set, i.e [0, 1] or ['v0', 'v1']
     * @param edges edges set, i.e [{from: 0, to: 1, dist: 2],]
     */
    constructor(vertexes: Array<string | number>, edges: Array<{
        from: string | number;
        to: string | number;
        dist: number;
    }>);
    private initialize;
    get(vertex: string | number): LinkedList;
}
