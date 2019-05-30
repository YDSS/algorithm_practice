"use strict";
/**
 * @file implementation of finding Eular Circular
 * @author arlenyang
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AdjacencyList_1 = require("../AdjacencyList");
const singleLinkedList_1 = require("../../linearList/singleLinkedList");
const ListNode_1 = require("../../linearList/ListNode");
const AdjacencyListData_1 = require("../mock/AdjacencyListData");
// assume that this graph has at least one Eular Circular
// S(n) = O(|V| + 2|E|)
// T(n) = 
function findEularCircular(adjList, start) {
    // visited edges, (v, w) and (w, v) has the same key in this table by
    //  getEdgeKey method
    let visited = {}; // S(n) = O(|E|)
    // last visited node in the adjacent list of every vertex
    let lastPosition = {}; // S(n) = O(|V|)
    // init lastPosition
    adjList.getVertexes().map(v => {
        lastPosition[v] = adjList.get(v).head;
    });
    // the result, e.g. Eular Circular, is a Linked List
    let circular = new singleLinkedList_1.default(); // S(n) = O(|E|)
    // current node in circular
    let cur = circular.head;
    let lastSplitPoint = cur;
    // order vertex by ascii, assume that vertex has only one char
    let getEdgeKey = (v, w) => {
        if (v.charCodeAt(0) > w.charCodeAt(0)) {
            let tmp = v;
            v = w;
            w = tmp;
        }
        return `(${v},${w})`;
    };
    let isEdgeVisited = (v, w) => {
        let key = getEdgeKey(v, w);
        if (!visited[key]) {
            visited[key] = true;
            return false;
        }
        return true;
    };
    let dfs = (v) => {
        // insert v into current circular
        let node = new ListNode_1.default(v, null);
        node.next = cur.next;
        cur.next = node;
        cur = cur.next;
        // find last position of w adjacent to v
        let w = lastPosition[v];
        let hasUnvisitedEdge = false;
        while (w.next) {
            w = w.next;
            let { to } = w.data;
            if (!isEdgeVisited(v, to.toString())) {
                lastPosition[v] = w;
                hasUnvisitedEdge = true;
                break;
            }
        }
        if (hasUnvisitedEdge) {
            dfs(w.data.to.toString());
        }
        // stop cause no unvisited edge found,
        // we have to find one in the circular from start
        // if not found, means all the edges are visited,
        // we can end the entire loop
        else {
            lastPosition[v] = w;
            // let it = circular.iterator();
            let ve = lastSplitPoint;
            console.log(lastSplitPoint.data);
            let stopLoop = true;
            let endVertexOfUnvisitedEdge = null;
            // while ((ve = it.next().value)) {
            while (ve = ve.next) {
                let veLast = lastPosition[ve.data];
                while (veLast.next) {
                    veLast = veLast.next;
                    if (!isEdgeVisited(ve.data, veLast.data.to.toString())) {
                        endVertexOfUnvisitedEdge = veLast.data.to.toString();
                        break;
                    }
                }
                if (endVertexOfUnvisitedEdge) {
                    cur = ve;
                    lastSplitPoint = ve;
                    stopLoop = false;
                    break;
                }
            }
            if (!stopLoop) {
                dfs(endVertexOfUnvisitedEdge);
            }
            else {
                return;
            }
        }
    };
    dfs(start);
    return circular;
}
let adjList = new AdjacencyList_1.default(AdjacencyListData_1.eularCircularGraph.vertexes, AdjacencyListData_1.eularCircularGraph.edges);
let circular = findEularCircular(adjList, "A");
circular.print();
//# sourceMappingURL=findEularCircular.js.map