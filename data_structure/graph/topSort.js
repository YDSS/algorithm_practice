"use strict";
/**
 * @file simple top sort
 * @author YDSS
 */
Object.defineProperty(exports, "__esModule", { value: true });
function topSort(table) {
    let indegree = initIndegree(table);
}
/**
 * initialize indegree of every vertex, O(|E|)
 * @param table node.data is code of vertex, which is number
 */
function initIndegree(table) {
    let indegree = [];
    table.map(head => {
        let cur = head.next;
        while (cur) {
            let vertex = cur.data;
            indegree[vertex] = indegree[vertex] ? (indegree[vertex] + 1) : 1;
            cur = cur.next;
        }
    });
    return indegree;
}
//# sourceMappingURL=topSort.js.map