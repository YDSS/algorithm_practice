/**
 * @file implementation of finding Eular Circular
 * @author arlenyang
 */

import AdjacencyList, { AdjacencyListNode } from "../AdjacencyList"
import LinkedList from "../../linearList/singleLinkedList"
import LinkedNode from "../../linearList/ListNode";

import { eularCircularGraph } from "../mock/AdjacencyListData"

// assume that this graph has at least one Eular Circular
function findEularCircular(adjList: AdjacencyList, start: string) {
    // visited edges, (v, w) and (w, v) has the same key in this table by
    //  getEdgeKey method
    let visited: {[key: string]: boolean} = {}; 
    // last visited node in the adjacent list of every vertex
    let lastPosition: {[key: string]: AdjacencyListNode} = {};
    // init lastPosition
    adjList.getVertexes().map(v => {
        lastPosition[v] = adjList.get(v).head;
    })
    // the result, e.g. Eular Circular, is a Linked List 
    let circular = new LinkedList();
    // current node in circular
    let cur = circular.head;
    // order vertex by ascii, assume that vertex has only one char
    let getEdgeKey = (v:string, w:string) => {
        if (v.charCodeAt(0) > w.charCodeAt(0)) {
            let tmp = v;
            v = w;
            w = tmp;
        }

        return `(${v},${w})`;
    }
    let dfs = (v:string) => {
        // insert v into current circular
        let node = new LinkedNode(v, null);
        node.next = cur.next;
        cur.next = node;
        cur = cur.next;
        // find last position of w adjacent to v
        let w = lastPosition[v].next;
        if (w) {
            let { to } = w.data;
            let key = getEdgeKey(v, to.toString());
            if (!visited[key]) {
                visited[key] = true;
                lastPosition[v] = w;
                dfs(to.toString());
            }
        } 
        // stop cause no unvisited edge found,
        // we have to find one in the circular from start
        // if not found, means all the edges are visited,
        // we can end the entire loop
        else { 
            let it = circular.iterator();
            let ve: LinkedNode;
            let stopLoop = true;
            while (ve = it.next().value) {
                if (lastPosition[ve.data].next != null) {
                    cur = ve;
                    stopLoop = false;
                    break;
                } 
            }
            if (!stopLoop) {
                dfs(ve.data);
            }
            else {
                return;
            }
        }
    }
    dfs(start);

    return circular;
}

let adjList = new AdjacencyList(eularCircularGraph.vertexes, eularCircularGraph.edges);
let circular = findEularCircular(adjList, 'A');
circular.print();