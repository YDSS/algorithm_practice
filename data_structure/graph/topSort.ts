/**
 * @file simple top sort
 * @author YDSS
 */

import Queue from '../queue/SequenceQueue';
import LinkedList from '../linearList/singleLinkedList';

export default function topSort(table: LinkedList[]): number[] {
    let indegrees = initIndegree(table);
    let queue = new Queue(table.length);

    // let the vertexs those have no indegree enter the queue
    indegrees.map((indegree, vertex) => {
        if (indegree === 0) {
            queue.enter(vertex);
        }
    });

    let counter = 0;
    let ret = [];
    // O(|V|)
    while(!queue.isEmpty()) {
        let vertex = queue.leave();
        ret[vertex] = counter++; 
        // find vertexs those are adjacent to current one 
        let list = table[vertex];
        let head = list.head;
        let cur = head.next;
        while(cur) {
            let v = cur.data;
            indegrees[v]--;
            if (indegrees[v] === 0) {
                queue.enter(v);
            }

            cur = cur.next;
        };
    };
    
    if (counter !== table.length) {
        throw new Error('this graph has circle');
    }

    return ret;
}

/**
 * initialize indegree of every vertex, O(|E|)
 * @param table node.data is code of vertex, which is number
 */
function initIndegree(table: LinkedList[]): number[] {
    // initialize indegree of current vertex, 
    // in case of empty when this vertex has no indegree
    let indegree: number[] = table.map(() => 0);
    table.map((list: LinkedList) => {
        let head = list.head;
        let cur = head.next;

        while(cur) {
            let vertex = cur.data;
            indegree[vertex] += 1;
            
            cur = cur.next;
        }
    });

    return indegree;
}