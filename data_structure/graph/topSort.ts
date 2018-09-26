/**
 * @file simple top sort
 * @author YDSS
 */

import LinkedNode from '../linearList/ListNode';
import Queue from '../queue/SequenceQueue';

export default function topSort(table: LinkedNode[]) {
    let indegrees = initIndegree(table);
    let queue = new Queue(table.length);

    // let the vertexs those have no indegree enter the queue
    // O(|V|)
    indegrees.map((indegree, vertex) => {
        if (indegree === 0) {
            queue.enter(vertex);
        }
    });

    let counter = 0;
    let ret = [];
    while(!queue.isEmpty()) {
        let vertex = queue.leave();
        ret[vertex] = ++counter; 
        // find vertexs those are adjacent to current one 
        let head = table[vertex];
        let cur = head.next;
        while(cur) {
            let v = cur.data;
            indegrees[v]--;
            if (indegrees[v] === 0) {
                queue.enter(v);
            }
        };
    };
    
    if (counter !== table.length) {
        throw new Error('this graph has circle');
    }
    // print result
    let printRet = '';
    ret = ret.sort((a: number, b: number) => a - b);
    ret.map(vertex => {
        printRet += `-> ${vertex}`;
    });
    printRet = printRet.slice(3);
    console.log(printRet);
}

/**
 * initialize indegree of every vertex, O(|E|)
 * @param table node.data is code of vertex, which is number
 */
function initIndegree(table: LinkedNode[]): number[] {
    let indegree: number[] = [];
    table.map(head => {
        let cur = head.next;

        while(cur) {
            let vertex = cur.data;
            indegree[vertex] = indegree[vertex] ? ++indegree[vertex] : 1;
            
            cur = cur.next;
        }
    });

    return indegree;
}