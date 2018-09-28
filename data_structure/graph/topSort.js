"use strict";
/**
 * @file simple top sort
 * @author YDSS
 */
Object.defineProperty(exports, "__esModule", { value: true });
const SequenceQueue_1 = require("../queue/SequenceQueue");
function topSort(table) {
    let indegrees = initIndegree(table);
    console.log('indegrees: ');
    console.log(indegrees);
    let queue = new SequenceQueue_1.default(table.length);
    // let the vertexs those have no indegree enter the queue
    // O(|V|)
    indegrees.map((indegree, vertex) => {
        if (indegree === 0) {
            queue.enter(vertex);
        }
    });
    let counter = 0;
    let ret = [];
    while (!queue.isEmpty()) {
        let vertex = queue.leave();
        ret[vertex] = ++counter;
        // find vertexs those are adjacent to current one 
        let list = table[vertex];
        let head = list.head;
        let cur = head.next;
        while (cur) {
            let v = cur.data;
            indegrees[v]--;
            if (indegrees[v] === 0) {
                queue.enter(v);
            }
        }
        ;
    }
    ;
    console.log('counter: ' + counter);
    if (counter !== table.length) {
        throw new Error('this graph has circle');
    }
    return ret;
}
exports.default = topSort;
/**
 * initialize indegree of every vertex, O(|E|)
 * @param table node.data is code of vertex, which is number
 */
function initIndegree(table) {
    let indegree = [];
    table.map((list) => {
        let head = list.head;
        let cur = head.next;
        while (cur) {
            let vertex = cur.data;
            indegree[vertex] = indegree[vertex] ? ++indegree[vertex] : 1;
            cur = cur.next;
        }
    });
    return indegree;
}
//# sourceMappingURL=topSort.js.map