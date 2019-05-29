/**
 * @file implementation of adjacency list for digraph
 * @author arlenyang
 */
import LinkedList from "../linearList/singleLinkedList";
import ListNode from "../linearList/ListNode";
import Edge from "./Edge";
export interface AdjacencyListNode extends ListNode {
    data: Edge;
    next: AdjacencyListNode;
}
export default class AdjacencyList {
    private table;
    private vertexes;
    /**
     * @constructor
     * @param vertexes vertex set, i.e [0, 1] or ['v0', 'v1']
     * @param edges edges set, i.e [{from: 0, to: 1, dist: 2],]
     */
    constructor(vertexes: Array<string | number>, edges: Array<Edge>);
    private initialize;
    get(vertex: string | number): LinkedList;
    getVertexes(): Array<string | number>;
    print(): void;
}
