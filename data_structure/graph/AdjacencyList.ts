/**
 * @file implementation of adjacency list with single linked list
 * @author arlenyang
 */

import SingleLinkedList from '../linearList/singleLinkedList';
import ListNode from '../linearList/ListNode';

export default class AdjacencyList {
    list: Array<SingleLinkedList>;
    /**
     * @param arr two dimension array, every row is a node to its adjacent nodes,
     *  and the first element of the row(arr[x][0]) is the node itself. We assume that arr[0] is the node v0's
     */
    constructor(arr: Array<Array<any>>) {
        // initialize the list
        arr.map((list, index) => {
            let headData: any = list[0]; // the node itself
            let linkedList: SingleLinkedList = new SingleLinkedList(list.slice(1), 'tail');          

            linkedList.head.data = headData;
            this.list.push(linkedList);
        });
    }
}